<?php
namespace Modules\Defect\Repositories;

use Auth;
use Carbon\Carbon;
use DB;
use Modules\CustomField\Entities\CustomField;
use Modules\Defect\Entities\Defect;
use Modules\Defect\Entities\DefectHistory;
use Modules\Helper\Helpers\EmailsHelper;
use Modules\Helper\Helpers\UploadFileHelper;
use Modules\Helper\Repositories\HelperRepository;
use Modules\Projects\Entities\Project;
use Modules\Setting\Entities\Setting;
use Modules\Slack\Repositories\SlackRepository;
use Modules\Team\Entities\Team;
use Modules\Timesheet\Entities\Timesheet;
use Modules\UserActivity\Entities\UserActivity;
use Modules\User\Entities\User\User;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;

/**
 * Class DefectRepository
 *
 * Defect create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Defect
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class DefectRepository
{
    protected $helperRepo;
    protected $emailsHelper;
    protected $uploadHelper;
    protected $slackRepo;

    /**
     * Instantiate a new repository instance.
     *
     * @param HelperRepository $helperRepo   [Object]
     * @param EmailsHelper     $emailsHelper [Object]
     * @param EmailsHelper     $uploadHelper [Object]
     * @param SlackRepository  $slackRepo    [Object]
     *
     * @return void
     */
    public function __construct(
        HelperRepository $helperRepo,
        EmailsHelper $emailsHelper,
        UploadFileHelper $uploadHelper,
        SlackRepository $slackRepo
    ) {
        $this->helperRepo = $helperRepo;
        $this->emailsHelper = $emailsHelper;
        $this->uploadHelper = $uploadHelper;
        $this->slackRepo = $slackRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Object
     */
    public function findAll()
    {
        $user = Auth::user();
        return $user->defects()
            ->select(
                'id',
                'defect_name',
                'create_user_id',
                'generated_id',
                'defect_type',
                'severity',
                'status',
                'assign_member',
                'project_id',
                'project_version',
                'created_at'
            )->with(
                [
                'users' => function ($query) {
                    $query->select('id', 'firstname', 'lastname');
                },
                ]
            )
            ->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get defect]
     *
     * @return Object
     */
    public function getAllDefects($request)
    {
        $defects_table = config('core.acl.defects_table');
        $user_table = config('core.acl.users_table');
        $user = Auth::user();

        $columns = array(
            0 => $defects_table . '.id',
            1 => $defects_table . '.defect_name',
            2 => $defects_table . '.start_date',
            3 => $defects_table . '.end_date',
            4 => $defects_table . '.actual_hours',
            5 => 'defect_assigned.firstname',
            6 => $defects_table . '.severity',
            7 => $defects_table . '.status',
        );

        if ($request->get('isUserProfile') && $request->has('user_id')) {
            $defect = Defect::where($defects_table . '.assign_member', $request->get('user_id'));
            $statusCount = [];

            $columns = array(
                0 => $defects_table . '.id',
                1 => $defects_table . '.defect_name',
                2 => $defects_table . '.start_date',
                3 => $defects_table . '.end_date',
                4 => $defects_table . '.defect_type',
                5 => $defects_table . '.severity',
                6 => $defects_table . '.status',
            );

        } else if ($request->has('filter') && $request->get('filter') === "selected") {
            $defect = Defect::where(
                function ($query) use ($defects_table, $user) {
                    $query->where($defects_table . '.assign_member', $user->id)
                        ->orWhere($defects_table . '.create_user_id', $user->id);
                }
            );
            $statusCount = $this->_getDefectCount(true);
        } else {
            $defect = $user->defects();
            $statusCount = $this->_getDefectCount();
        }

        $status = $request->get('status');
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $defect = $defect->select(
            $defects_table . '.*',
            'defect_assigned.firstname as assigned_firstname',
            'defect_assigned.lastname as assigned_lastname',
            'defect_assigned.avatar as assigned_avatar'
        )
            ->leftjoin(
                $user_table . ' as defect_assigned',
                'defect_assigned.id',
                '=',
                $defects_table . '.assign_member'
            );

        if ($status) {
            if ($status == 4) {
                $defect->whereIn($defects_table . '.status', [4, 6]);
            } elseif ($status == 5) {
                $defect->whereIn($defects_table . '.status', [2, 5, 7]);
            } elseif ($status == 8) {
                // Overdue
                $defect->whereIn($defects_table . '.status', [1, 3, 4, 6])
                    ->whereDate($defects_table . '.end_date', '<', Carbon::now());
            } else {
                $defect->whereIn($defects_table . '.status', [$status]);
            }
        }

        $totalData = $defect->count();
        $totalFiltered = $totalData;

        // --
        // Search
        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');
            $defect = $defect->where(
                function ($query) use ($search, $defects_table) {
                    $query->where($defects_table . '.defect_name', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.start_date', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.end_date', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.actual_hours', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.severity', 'LIKE', "%{$search}%")
                        ->orWhere(
                            DB::raw('concat(defect_assigned.firstname," ",defect_assigned.lastname)'),
                            'LIKE',
                            "%{$search}%"
                        )
                        ->orWhere($defects_table . '.status', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.project_version', 'LIKE', "%{$search}%");
                }
            );

            $totalFiltered = $defect->count();
        }

        $data = $defect->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "statusCount" => $statusCount,
            "data" => $data,
        );
    }

    /**
     * Get status type count.
     *
     * @param Boolean $isMy [For all defect or user defect]
     *
     * @return array
     */
    private function _getDefectCount($isMy = false)
    {
        $user = Auth::user();
        $result['all'] = $this->_getStatusWiseCount([1, 2, 3, 4, 5, 6, 7], $user, $isMy);
        if ($result['all'] > 0) {
            $result['assigned'] = $this->_getStatusWiseCount([1], $user, $isMy);
            $result['closed'] = $this->_getStatusWiseCount([2], $user, $isMy);
            $result['in_progress'] = $this->_getStatusWiseCount([3], $user, $isMy);
            $result['open'] = $this->_getStatusWiseCount([4], $user, $isMy);
            $result['solved'] = $this->_getStatusWiseCount([5], $user, $isMy);
            $result['re_open'] = $this->_getStatusWiseCount([6], $user, $isMy);
            $result['deferred'] = $this->_getStatusWiseCount([7], $user, $isMy);
            $result['overdue'] = $this->_getOverdueCount($user, $isMy);
        }
        return $result;
    }

    /**
     * Defect status wise counting.
     *
     * @param Int     $status [Status id]
     * @param Object  $user   [User object]
     * @param Boolean $isMy   [For all defect or user defect]
     *
     * @return Count
     */
    private function _getStatusWiseCount($status, $user, $isMy)
    {
        if ($isMy) {
            return Defect::where(
                function ($query) use ($user) {
                    $query->where('assign_member', $user->id)
                        ->orWhere('create_user_id', $user->id);
                }
            )
                ->whereIn('status', $status)
                ->count();
        } else {
            return $user->defects()
                ->whereIn('status', $status)
                ->count();
        }
    }

    /**
     * Defect overdue counting.
     *
     * @param Object  $user [User object]
     * @param Boolean $isMy [For all defect or user defect]
     *
     * @return Count
     */
    private function _getOverdueCount($user, $isMy)
    {
        if ($isMy) {
            $overdueDefect = Defect::where(
                function ($query) use ($user) {
                    $query->where('assign_member', $user->id)
                        ->orWhere('create_user_id', $user->id);
                }
            );
        } else {
            $overdueDefect = $user->defects();
        }

        return $overdueDefect->whereIn('status', [1, 3, 4, 6])
            ->whereDate('end_date', '<', Carbon::now())
            ->count();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get defect by project]
     *
     * @return Array
     */
    public function getDefectForKanban($request)
    {
        $user = Auth::user();
        $defects_table = config('core.acl.defects_table');

        if ($request->has('filter') && $request->get('filter') === "my") {
            $defect = Defect::where(
                function ($query) use ($defects_table, $user) {
                    $query->where($defects_table . '.assign_member', $user->id)
                        ->orWhere($defects_table . '.create_user_id', $user->id);
                }
            );
        } else {
            $defect = $user->defects();
        }

        $defect = $defect->with(
            [
            'assignUser' => function ($query) {
                $query->select(
                    'id',
                    'firstname',
                    'lastname',
                    'avatar'
                );
            }]
        );

        if ($request->has('project_id')) {
            $defect->where($defects_table . '.project_id', $request->input('project_id'));
        }

        return $defect->orderBy($defects_table . '.status', 'asc')
            ->orderBy($defects_table . '.orders', 'asc')
            ->get();
    }

    /**
     * Display the specified resource in storage.
     *
     * @param Int $id [Row id]
     *
     * @return Object
     */
    public function findByIdWithHistory($id)
    {
        $defect = Defect::with(
            [
            'project' => function ($query) {
                $query->select('id', 'project_name', 'project_version', 'start_date', 'end_date');
            },
            'createdUser' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            'assignUser' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            'comments.user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            'attachments',
            'history' => function ($query) {
                $query->orderBy('id', 'desc');
            },
            'users' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            ]
        )
            ->where('id', $id)
            ->first();

        if ($defect) {
            $defect['custom_fields'] = CustomField::getViewFields(3)->get();
            $defect['activities'] = UserActivity::getActivities(['Defect', 'DefectComment', 'DefectAttachment'], $id)->get();
            return $defect;
        }
        return false;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Request for create defect]
     *
     * @return Boolean
     */
    public function create($request)
    {
        $input = $request->all();
        $defect = new Defect;
        // $project = Project::findOrFail($input['project_id']);
        $user = Auth::user();
        $input['generated_id'] = $this->getGeneratedId();
        $input['create_user_id'] = $user->id;
        $input['orders'] = Defect::count();
        $userIds = [];

        // if ($input['assigned_group_id']) {
        //     $teamData = Team::with(
        //         [
        //         'members' => function ($query) {
        //             $query->select(config('core.acl.users_table') . '.id');
        //         },
        //         ]
        //     )
        //         ->where('id', $input['assigned_group_id'])
        //         ->first();

        //     foreach ($teamData->members as $value) {
        //         $userIds[] = $value->id;
        //     }
        // }

        $super_admin_ids = User::where('is_super_admin', 1)->pluck('id')->toArray();
        $userIds = array_merge($userIds, $super_admin_ids);
        array_push($userIds, $user->id); // login user
        // if ($project->client_id) {
        //     array_push($userIds, $project->client_id); // client
        // }
        $uniqueUserId = array_unique($userIds);

        // --
        // Upload attachment
        if (isset($input["file"]) && $input["file"]) {
            $defect->attachment_hash = $this->uploadHelper->uploadAttachment($input, 'defect');
        }

        $defect->fill($input);
        if ($defect->save()) {
            $defect->users()->sync($uniqueUserId);
            // --
            // Save custom field
            if (isset($input['custom_fields'])) {
                $this->helperRepo->saveCustomField(3, $defect->id, $input['custom_fields']);
            }

            // --
            // Add activity
            createUserActivity(
                Defect::MODULE_NAME,
                $defect->id,
                $request->method(),
                $input['defect_name'],
                $request->ip(),
                $defect->id
            );

            // --
            // Post message to slack
            $this->slackRepo->postActivitiesMessage('Project Bidding Created Successfully', $defect, 'Defect');

            // --
            // Add defect history
            $history = $this->_createHistory(
                $input['defect_name'],
                $user->id,
                'create',
                $user->id,
                $input['status']
            );
            $defect->history()->save($history);
            // --
            // Send email
            if ($input['assign_member']) {

                // Assign user and Super admins.
                // $mailUserId = $super_admin_ids;
                // array_push($mailUserId, $input['assign_member']);
                // $mailUserId = array_unique($mailUserId);

                // All team member.
                // if ($project->client_id) {
                //     $uniqueUserId = array_diff($uniqueUserId, [$project->client_id]); // Unset client
                // }

                $this->_sendMailEveryone(
                    $uniqueUserId,
                    $defect
                );

                $this->_sendDefectStartReminder($defect);

                // Add Notification.
                createNotification([$defect->assignUser], 'defects', $defect->id, 'Project Bidding Created.', "#" . $defect->generated_id . ' - ' . $defect->defect_name);

            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update defect]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function update($request, $id)
    {
        $input = $request->all();
        $defect = Defect::find($id);
        $oldDefect = $defect->toArray();
        // $project = Project::findOrFail($defect->project_id);
        $user = Auth::user();
        $userIds = [];

        // --
        // Upload attachment
        if (isset($input["file"]) && $input["file"]) {
            //
            // Delete old attachment.
            if ($defect->attachment_hash) {
                $this->_deleteFile($defect->attachment_hash);
            }
            $defect->attachment_hash = $this->uploadHelper->uploadAttachment($input, 'defect');
        }

        // if ($input['assigned_group_id']) {
        //     $teamData = Team::with(
        //         [
        //         'members' => function ($query) {
        //             $query->select(config('core.acl.users_table') . '.id');
        //         },
        //         ]
        //     )
        //         ->where('id', $input['assigned_group_id'])
        //         ->first();

        //     foreach ($teamData->members as $value) {
        //         $userIds[] = $value->id;
        //     }
        // }

        $super_admin_ids = User::where('is_super_admin', 1)->pluck('id')->toArray();
        $userIds = array_merge($userIds, $super_admin_ids);
        array_push($userIds, $user->id); // login user
        // if ($project->client_id) {
        //     array_push($userIds, $project->client_id); // client
        // }
        $uniqueUserId = array_unique($userIds);

        if ($defect->fill($input)->save()) {
            $defect->users()->sync($uniqueUserId);
            // --
            // Save custom field
            if (isset($input['custom_fields'])) {
                $this->helperRepo->saveCustomField(3, $id, $input['custom_fields']);
            }

            // --
            // Add activity
            createUserActivity(
                Defect::MODULE_NAME,
                $defect->id,
                $request->method(),
                $input['defect_name'],
                $request->ip(),
                $defect->id
            );

            // --
            // Post message to slack
            $this->slackRepo->postActivitiesMessage('Project Bidding Updated Successfully', $defect, 'Defect');

            // --
            // Add defect history
            $history = $this->_createHistory(
                $input['defect_name'],
                $user->id,
                'edit',
                $defect->create_user_id,
                $defect->status
            );
            $defect->history()->save($history);
            // --
            // Send email
            if ($input['assign_member']) {

                // Assign user and Super admins.
                // $mailUserId = $super_admin_ids;
                // array_push($mailUserId, $input['assign_member']);
                // $mailUserId = array_unique($mailUserId);

                // All team member.
                // if ($project->client_id) {
                //     $uniqueUserId = array_diff($uniqueUserId, [$project->client_id]); // Unset client
                // }

                $userData = User::select('id', 'email', DB::raw("CONCAT(firstname,' ',lastname) as name"))
                    ->whereIn('id', $uniqueUserId)
                    ->where('is_active', 1)
                    ->get();

                // --
                // Send email
                $this->emailsHelper->sendDefectUpdateMails(
                    $userData,
                    $defect
                );

                $this->_sendDefectStartReminder($defect);

                // Add Notification.
                createNotification([$defect->assignUser], 'defects', $defect->id, 'Project Bidding Updated.', "#" . $defect->generated_id . ' - ' . $defect->defect_name);
            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * Send defect start reminder.
     *
     * @param Object $defect [Defect object]
     *
     * @return void
     */
    private function _sendDefectStartReminder($defect)
    {
        if ($defect->start_date) {
            $setting = Setting::select('reminder_alert_before_days')->first();
            $beforeDays = explode(',', $setting->reminder_alert_before_days);

            foreach ($beforeDays as $days) {
                $reminderDate = Carbon::now()->addDays($days)->format('Y-m-d');
                if ($defect->start_date->format('Y-m-d') == $reminderDate) {
                    $this->emailsHelper->sendDefectReminderEmails($defect);
                }
            }
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update defect notes]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function defectNotesUpdate($request, $id)
    {
        $input = $request->all();
        $defect = Defect::findOrFail($id);

        if ($defect->fill($input)->save()) {
            // --
            // Add activities
            createUserActivity(
                Defect::MODULE_NAME,
                $defect->id,
                $request->method(),
                $defect->defect_name,
                $request->ip(),
                $defect->id
            );

            // --
            // Post message to slack
            $this->slackRepo->postActivitiesMessage('Project Bidding Updated Successfully', $defect, 'Defect');

            // --
            // Add defect history
            $history = $this->_createHistory(
                $defect->defect_name,
                $user->id,
                'edit',
                $defect->create_user_id,
                $defect->status
            );
            $defect->history()->save($history);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Changed defect status.
     *
     * @param Request $request [Request for change defect status]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function changeDefectStatus($request, $id)
    {
        $input['status'] = $request->get('status');
        $defect = Defect::with(
            [
            'users' => function ($query) {
                $query->where('is_active', true);
            },
            ]
        )->findOrFail($id);
        $user = Auth::user();
        if ($defect) {
            $defect->fill($input)->save();
            // --
            // Add defect history
            $history = $this->_createHistory(
                $defect->defect_name,
                $user->id,
                'status',
                $defect->create_user_id,
                $input['status']
            );
            $defect->history()->save($history);

            // --
            // Add activity
            createUserActivity(
                Defect::MODULE_NAME,
                $defect->id,
                $request->method(),
                $defect->defect_name,
                $request->ip(),
                $defect->id,
                true
            );

            // --
            // Post message to slack
            $this->slackRepo->postActivitiesMessage('Project Bidding Status Changed Successfully', $defect, 'Defect');

            // --
            // Send email
            $this->emailsHelper->sendDefectStatusChangeMails($defect);

            // Add Notification.
            createNotification([$defect->assignUser], 'defects', $defect->id, 'Project Bidding Status Changed.', "#" . $defect->generated_id . ' - ' . $defect->defect_name);

            return true;
        }
        return false;
    }

    /**
     * Changed defect severity.
     *
     * @param Request $request [Request for change defect severity]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function changeDefectSeverity($request, $id)
    {
        $input['severity'] = $request->get('severity');
        $defect = Defect::findOrFail($id);
        $user = Auth::user();
        if ($defect) {
            $defect->fill($input)->save();
            // --
            // Add defect history
            $history = $this->_createHistory(
                $defect->defect_name,
                $user->id,
                'severity',
                $defect->create_user_id,
                $defect->status
            );
            $defect->history()->save($history);

            // --
            // Add activity
            createUserActivity(
                Defect::MODULE_NAME,
                $defect->id,
                $request->method(),
                $defect->defect_name,
                $request->ip(),
                $defect->id
            );

            // --
            // Post message to slack
            $this->slackRepo->postActivitiesMessage('Project Bidding Severity Changed Successfully', $defect, 'Defect');

            // Add Notification.
            createNotification([$defect->assignUser], 'defects', $defect->id, 'Defect Severity Updated.', "#" . $defect->generated_id . ' - ' . $defect->defect_name);

            return true;
        }
        return false;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete defect]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function delete($request, $id)
    {
        $defect = Defect::findOrFail($id);
        if ($defect) {
            $defect->users()->detach();
            if ($defect->attachment_hash) {
                $this->_deleteFile($defect->attachment_hash);
            }
            if ($defect->delete()) {
                Timesheet::where('module_id', 3)->where('module_related_id', $id)->delete();
                // --
                // Add activity
                createUserActivity(
                    Defect::MODULE_NAME,
                    $defect->id,
                    $request->method(),
                    $defect->defect_name,
                    $request->ip(),
                    $defect->id
                );

                // --
                // Post message to slack
                $this->slackRepo->postActivitiesMessage('Project Bidding Deleted Successfully', $defect, 'Defect');

                // --
                // Add defect history
                $history = $this->_createHistory(
                    $defect->defect_name,
                    auth()->user()->id,
                    'delete',
                    $defect->create_user_id,
                    $defect->status
                );
                $defect->history()->save($history);

                // Add Notification.
                createNotification([$defect->assignUser], 'defects', $defect->id, 'Defect Deleted.', "#" . $defect->generated_id . ' - ' . $defect->defect_name, $request->method());
                return true;
            }
        }
        return false;
    }

    /**
     * Delete attachment file.
     *
     * @param String $fileName [File name]
     *
     * @return Boolean
     */
    private function _deleteFile($fileName)
    {
        $file = public_path() . '/uploads/defect/' . $fileName;
        if (file_exists($file)) {
            unlink($file);
        }
        return true;
    }

    /**
     * Defect send mail.
     *
     * @param Array  $uniqueUserId [User id]
     * @param Object $defect       [Defect]
     *
     * @return Boolean
     */
    private function _sendMailEveryone($uniqueUserId, $defect)
    {
        $userData = User::select('id', 'firstname', 'lastname', 'email')
            ->whereIn('id', $uniqueUserId)
            ->where('is_active', 1)
            ->get();

        if (!empty($userData)) {
            // --
            // Send email
            $this->emailsHelper->sendDefectAssignMails(
                $userData,
                $defect
            );
        }
        return true;
    }

    /**
     * Defect history save.
     *
     * @param String $defectName   [Defect name]
     * @param Int    $loginUserId  [Login user id]
     * @param String $method       [Request method]
     * @param Int    $createUserId [Created user id]
     * @param String $statusType   [Status type]
     *
     * @return object
     */
    private function _createHistory($defectName, $loginUserId, $method, $createUserId, $statusType = 0)
    {
        $defectHistory = new DefectHistory;
        $defectHistory->created_by_id = $createUserId;
        if ($method == 'create') {
            $defectHistory->description = "Project bidding information added : " . '<b>' . $defectName . '</b>';
        } elseif ($method == 'edit') {
            $defectHistory->description = "Project bidding information updated : " . '<b>' . $defectName . '</b>';
            $defectHistory->updated_by_id = $loginUserId;
        } elseif ($method == 'status') {
            $defectHistory->description = "Project bidding status changed : " . '<b>' . $defectName . '</b>';
            $defectHistory->updated_by_id = $loginUserId;
        } elseif ($method == 'severity') {
            $defectHistory->description = "Project bidding severity changed : " . '<b>' . $defectName . '</b>';
            $defectHistory->updated_by_id = $loginUserId;
        } else {
            $defectHistory->description = "Project bidding information deleted : " . '<b>' . $defectName . '</b>';
            $defectHistory->updated_by_id = $loginUserId;
        }

        if ($statusType == 2) {
            $defectHistory->closed_by_id = $loginUserId;
        }
        if ($statusType == 5) {
            $defectHistory->solved_by_id = $loginUserId;
        }
        return $defectHistory;
    }

    /**
     * Retrive generated id.
     *
     * @return String
     */
    public function getGeneratedId()
    {
        return 'BID' . str_pad(nextAutoID(config('core.acl.defects_table')), 4, "0", STR_PAD_LEFT);
    }

    /**
     * Display defect all data.
     *
     * @param Request $request [Request for get defect report]
     *
     * @return Response
     */
    public function getDefectForReport($request)
    {
        $input = $request->all();
        $userList = User::where('is_active', 1)->orderBy('firstname')->get();
        $setting = Setting::select([ 'dependent', 'personal'])->first();
        $startOfMonth = Carbon::createFromFormat('Y-m', $input['month'])->startOfMonth();
        $endOfMonth   = Carbon::createFromFormat('Y-m', $input['month'])->endOfMonth();

        $holidays = DB::table('gv_holidays')->whereBetween('date', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])->get();
        $leaves = DB::table('gv_leaves')->whereBetween('leave_date', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])
            // ->where('leave_type_id', '<', 3)
            ->whereIn('status', [1, 2])->select('*', DB::raw('DATE_FORMAT(leave_date, "%Y-%m-%d") as formatted_date'))->get();
            
        
        if(isset($input['action']) && $input['action'] == 'user'){
            $query = DB::table('gv_timesheets')
            ->join('gv_projects', 'gv_projects.id', '=', 'gv_timesheets.project_id')
            ->join('gv_tasks', 'gv_tasks.id', '=', 'gv_timesheets.module_related_id')
            ->where(
            function ($querys) {
                $querys->where('gv_timesheets.status', 2)
                    ->orWhere('gv_timesheets.module_id', 7);
            })
            ->whereNotNull('gv_timesheets.project_id')
            ->whereBetween('gv_timesheets.start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])
            ->select(
                DB::raw('DATE(gv_timesheets.start_time) as date'),
                'gv_timesheets.project_id',
                'gv_projects.project_name',
                'gv_tasks.name as task_name',
                'gv_timesheets.module_id',
                'gv_timesheets.note',
                'gv_timesheets.decimal_time',
                'gv_timesheets.module_related_id'
            )
            ->orderBy('gv_timesheets.start_time', 'asc');
            $allDaysData = [];
            for ($date = $startOfMonth; $date->lte($endOfMonth); $date->addDay()) {
                $allDaysData[$date->format('Y-m-d')] = null;
            }

            $working_days = $this->getWorkingDays($startOfMonth->format('m'), $startOfMonth->format('Y'));
            foreach ($userList as $value) {
                $queryData = clone($query);
                $queryData_ot = clone($query);
                $timesheets = $queryData->where('created_user_id', $value->id)
                                        ->where('ot', 0)
                                        ->get();
                $timesheets_ot = $queryData_ot->where('created_user_id', $value->id)
                                              ->where('ot', 1)
                                              ->get();
            
                $value->timesheet = $timesheets;
                $value->timesheet_ot = $timesheets_ot;
            
                $contract = DB::table('gv_users_contract')
                    ->where('user_id', $value->id)
                    ->where('start_date', '<=', $startOfMonth->format('Y-m-d'))
                    ->where('end_date', '>=', $startOfMonth->format('Y-m-d'))
                    ->orderBy('id', 'desc')
                    ->first();
            
                $value->working_days = $this->getWorkingDays($startOfMonth->format('m'), $startOfMonth->format('Y')) + 2;
            
                if ($contract) {
                    $value->contract = $contract;
                    $value->day_salary = ($contract->performance + $contract->basic) / $value->working_days;
                } else {
                    $value->contract = [];
                    $value->day_salary = 0;
                }
            
                $value->dependents_amount = $value->dependents * $setting->dependent;
                $value->personal_amount = $setting->personal;
            }

            $settings = DB::table('gv_user_settings')->first();

            return ['data'=>$userList, 'holidays'=>$holidays, 'leaves'=>$leaves, 'settings'=>$settings];
        } else {
            $query = DB::table('gv_timesheets')
            ->where(
            function ($querys) {
                $querys->where('status', 2)
                    ->orWhere('module_id', 7);
            })
            ->whereNotNull('project_id')
            ->whereBetween('start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])
            ->select(DB::raw('DATE(start_time) as date'), DB::raw('SUM(decimal_time) as total_decimal_time'), 'ot_rate')
            ->groupBy(DB::raw('DATE(start_time)'), 'ot_rate');
            $allDaysData = [];
            for ($date = $startOfMonth; $date->lte($endOfMonth); $date->addDay()) {
                $allDaysData[$date->format('Y-m-d')] = null;
            }

            $working_days = $this->getWorkingDays($startOfMonth->format('m'), $startOfMonth->format('Y'));
            foreach ($userList as $key => $value) {
                $allDays = ($allDaysData);
                $allDaysOt = ($allDaysData);
                $queryData = clone($query);
                $queryData_ot = clone($query);
                $timesheets = $queryData->where('created_user_id', $value->id)->where('ot', 0)->get();
                $timesheets_ot = $queryData_ot->where('created_user_id', $value->id)->where('ot', 1)->get();
                $value->count_timesheets = 0;
                $value->count_timesheets_ot = 0;
                foreach ($timesheets as $timesheet) {
                    $allDays[$timesheet->date] = $timesheet->total_decimal_time;
                    if($timesheet->total_decimal_time&&$timesheet->total_decimal_time!=null){
                        $value->count_timesheets++;
                    }
                }
                foreach ($timesheets_ot as $timesheet_ot) {
                    $allDaysOt[$timesheet_ot->date] = $timesheet_ot->total_decimal_time;
                    if($timesheet_ot->total_decimal_time&&$timesheet_ot->total_decimal_time!=null){
                        $value->count_timesheets_ot +=($timesheet_ot->total_decimal_time*$timesheet_ot->ot_rate);
                    }
                }
                $value->timesheet = $allDays;
                $value->timesheet_ot = $allDaysOt;
                $contract = DB::table('gv_users_contract')
                ->where('user_id', $value->id)
                ->where('start_date', '<=', $startOfMonth->format('Y-m-d'))
                ->where('end_date', '>=', $startOfMonth->format('Y-m-d'))
                ->orderBy('id', 'desc')->first();
                $value->working_days = $working_days + 2;
                if($contract){
                    $value->contract = $contract;
                    $value->day_salary = ($contract->performance + $contract->basic)/$value->working_days;
                    $value->salary_ot = $value->count_timesheets_ot * $value->day_salary;
                } else {
                    $value->contract = [];
                    $value->day_salary = 0;
                    $value->salary_ot = 0;
                }
                $value->dependents_amount = $value->dependents * $setting->dependent;
                $value->personal_amount = $setting->personal;
            }

            $settings = DB::table('gv_user_settings')->first();

            return ['data'=>$userList, 'holidays'=>$holidays, 'leaves'=>$leaves, 'settings'=>$settings];
        }
        // return ['data'=>$userList];


        // $defects_table = config('core.acl.defects_table');
        // $project_table = config('core.acl.projects_table');
        // $user_table = config('core.acl.users_table');
        // $user = Auth::user();

        // $columns = array(
        //     0 => $defects_table . '.id',
        //     1 => $defects_table . '.defect_name',
        //     2 => $defects_table . '.start_date',
        //     3 => $defects_table . '.end_date',
        //     4 => $defects_table . '.actual_hours',
        //     5 => DB::raw("CONCAT($user_table.firstname,' ',$user_table.lastname)"),
        //     6 => DB::raw("CONCAT(defect_assigned.firstname,' ',defect_assigned.lastname)"),
        //     7 => $defects_table . '.defect_type',
        //     8 => $defects_table . '.severity',
        //     9 => $defects_table . '.status',
        //     10 => $project_table . '.project_name',
        //     11 => $defects_table . '.project_version',
        // );

        // $input = $request->input();
        // $limit = $request->input('length');
        // $start = $request->input('start');
        // $order = $columns[$request->input('order.0.column')];
        // $dir = $request->input('order.0.dir');
        // $columns_search = $request->input('columns');

        // $defect = $user->defects()->select(
        //     $defects_table . '.*',
        //     DB::raw('CASE WHEN defect_type = 1 THEN "Defect" ELSE "Enhancement" END AS defect_types'),
        //     $project_table . '.project_name',
        //     $user_table . '.firstname as created_firstname',
        //     $user_table . '.lastname as created_lastname',
        //     $user_table . '.avatar as created_avatar',
        //     'defect_assigned.firstname as assigned_firstname',
        //     'defect_assigned.lastname as assigned_lastname',
        //     'defect_assigned.avatar as assigned_avatar'
        // )
        //     ->join($project_table, $project_table . '.id', '=', $defects_table . '.project_id')
        //     ->join($user_table, $user_table . '.id', '=', $defects_table . '.create_user_id')
        //     ->leftjoin($user_table . ' as defect_assigned', 'defect_assigned.id', '=', $defects_table . '.assign_member');

        // $matchThese = [];
        // foreach ((array) $columns_search as $key => $value) {
        //     if (!empty($value['search']['value'])) {
        //         array_push(
        //             $matchThese,
        //             [$columns[$key], 'LIKE', "%{$value['search']['value']}%"]
        //         );
        //     }
        // }

        // $totalData = $defect->count();
        // $totalFiltered = $totalData;

        // if (!empty($matchThese)) {
        //     $defect = $defect->where($matchThese);
        //     $totalFiltered = $defect->count();
        // }

        // $data = $defect->offset($start)
        //     ->limit($limit)
        //     ->orderBy($order, $dir === 'desc' ? 'desc' : 'asc')
        //     ->get();

        // return array(
        //     "draw" => intval($request->input('draw')),
        //     "recordsTotal" => intval($totalData),
        //     "recordsFiltered" => intval($totalFiltered),
        //     "data" => $data,
        // );
    }

    
        
    public function exportPayment($request){        
        $input = $request->all();
        $data = $input['data'];
        // 🔹 Đường dẫn file template
        
        $templatePath = storage_path('app/templates/payment.xlsx');
        
        if (!file_exists($templatePath)) {
            abort(404, 'Không tìm thấy file mẫu payment.xlsx');
        }

        // 🔹 Load template
        $spreadsheet = IOFactory::load($templatePath);
        $sheet = $spreadsheet->getActiveSheet();
        $startRow = 4;
        $templateRow = 4; // Dòng mẫu (format gốc)
        $startRow = $templateRow;
        $lastCol = 'H'; // Cột cuối cùng trong file
        $sheet->setCellValue("E1", $input['month']);
        
        foreach ($data as $i => $item) {
            $row = $startRow + $i;

            // --- Copy style ---
            $sheet->duplicateStyle(
                $sheet->getStyle("A{$templateRow}:{$lastCol}{$templateRow}"),
                "A{$row}:{$lastCol}{$row}"
            );
            $delta = $row - $templateRow;
            for ($col = 'A'; $col !== Coordinate::stringFromColumnIndex(
                Coordinate::columnIndexFromString($lastCol) + 1
            ); $col = Coordinate::stringFromColumnIndex(
                Coordinate::columnIndexFromString($col) + 1
            )) {
                $cell = $sheet->getCell("{$col}{$templateRow}");
                $value = $cell->getValue();

                if ($cell->isFormula()) {
                    $sheet->setCellValue("{$col}{$row}", $this->shiftFormulaRows($value, $delta));
                }
            }
            
            $sheet->setCellValue("B{$row}", $i + 1);
            $sheet->setCellValue("C{$row}", $item['project_name']);
            $sheet->setCellValue("D{$row}", $item['description']);
            $sheet->setCellValue("E{$row}", Carbon::parse($item['due_date'])->format('Y-m-d'));
            $sheet->setCellValue("F{$row}", Carbon::parse($item['payment_date'])->format('Y-m-d'));
            $sheet->setCellValue("G{$row}", $input['filterKey']);
            $sheet->setCellValue("H{$row}", $item['price']);
            $sheet->getStyle("H{$row}")->getNumberFormat()->setFormatCode('#,##0');
        }
        // --- Lưu file ---
        $fileName = 'salary_export_' . time() . '.xlsx';
        $filePath = storage_path('app/' . $fileName);

        $writer = new Xlsx($spreadsheet);
        $writer->save($filePath);

        return response()->download($filePath)->deleteFileAfterSend(true);

    }
    public function exportWorkAllowance($request){        
        $input = $request->all();
        $data = $input['data'];
        
        // 🔹 Đường dẫn file template
        $templatePath = storage_path('app/templates/work_allowance.xlsx');
        
        if (!file_exists($templatePath)) {
            abort(404, 'Không tìm thấy file mẫu work_allowance.xlsx');
        }

        // 🔹 Load template
        $spreadsheet = IOFactory::load($templatePath);
        $sheet = $spreadsheet->getActiveSheet();
        $startRow = 4;
        $templateRow = 4; // Dòng mẫu (format gốc)
        $startRow = $templateRow;
        $lastCol = 'H'; // Cột cuối cùng trong file
        $sheet->setCellValue("G1", $input['month']);
        
        foreach ($data as $i => $item) {
            $row = $startRow + $i;

            // --- Copy style ---
            $sheet->duplicateStyle(
                $sheet->getStyle("A{$templateRow}:{$lastCol}{$templateRow}"),
                "A{$row}:{$lastCol}{$row}"
            );
            $delta = $row - $templateRow;
            for ($col = 'A'; $col !== Coordinate::stringFromColumnIndex(
                Coordinate::columnIndexFromString($lastCol) + 1
            ); $col = Coordinate::stringFromColumnIndex(
                Coordinate::columnIndexFromString($col) + 1
            )) {
                $cell = $sheet->getCell("{$col}{$templateRow}");
                $value = $cell->getValue();

                if ($cell->isFormula()) {
                    $sheet->setCellValue("{$col}{$row}", $this->shiftFormulaRows($value, $delta));
                }
            }
            $sheet->setCellValue("B{$row}", $i + 1);
            $sheet->setCellValue("D{$row}", $item['lastname'] . ' ' . $item['firstname']);
            $sheet->setCellValue("E{$row}", Carbon::parse($item['leave_date'])->format('Y-m-d'));
            $sheet->setCellValue("F{$row}", preg_replace('/<br\s*\/?>/i', "\n", $item['reason']));
            $sheet->setCellValue("G{$row}", $item['total']);
            $sheet->getStyle("G{$row}")->getNumberFormat()->setFormatCode('#,##0');
            $sheet->getStyle("G{$row}")->getAlignment()->setWrapText(true);
        }
        $row = $row+1;
        $sheet->setCellValue("G{$row}", $input['totalData']);
        $sheet->getStyle("G{$row}")->getNumberFormat()->setFormatCode('#,##0');
        // --- Lưu file ---
        $fileName = 'salary_export_' . time() . '.xlsx';
        $filePath = storage_path('app/' . $fileName);

        $writer = new Xlsx($spreadsheet);
        $writer->save($filePath);

        return response()->download($filePath)->deleteFileAfterSend(true);
    }

    public function exportTimesheet($request){
        $input = $request->all();
        $data = $input['data'];
        
        // 🔹 Đường dẫn file template
        
        if($input['action'] == 'time'){
            $templatePath = storage_path('app/templates/timesheet_time.xlsx');
        } else {
            $templatePath = storage_path('app/templates/timesheet.xlsx');
        }
        
        if (!file_exists($templatePath)) {
            abort(404, 'Không tìm thấy file mẫu salary.xlsx');
        }

        // 🔹 Load template
        $spreadsheet = IOFactory::load($templatePath);
        $sheet = $spreadsheet->getActiveSheet();


        $startRow = 4;
        $startCol = 'E'; // Bắt đầu từ cột E
        // Lặp qua danh sách ngày trong tháng
        $colIndex = Coordinate::columnIndexFromString($startCol);

        foreach ($input['daysInMonth'] as $key => $value) {
            $col = Coordinate::stringFromColumnIndex($colIndex);
            
            $sheet->setCellValue("{$col}{$startRow}", $key + 1); // hoặc $value nếu muốn hiển thị ngày thực tế
            $colIndex++; // Tăng cột kế tiếp
        }

        $templateRow = 5; // Dòng mẫu (format gốc)
        $startRow = $templateRow;
        $lastCol = 'AM'; // Cột cuối cùng trong file
        foreach ($data as $i => $item) {
            $row = $startRow + $i;

            // --- Copy style ---
            $sheet->duplicateStyle(
                $sheet->getStyle("A{$templateRow}:{$lastCol}{$templateRow}"),
                "A{$row}:{$lastCol}{$row}"
            );

            // --- Copy công thức có điều chỉnh dòng ---
            $delta = $row - $templateRow;
            for ($col = 'A'; $col !== Coordinate::stringFromColumnIndex(
                Coordinate::columnIndexFromString($lastCol) + 1
            ); $col = Coordinate::stringFromColumnIndex(
                Coordinate::columnIndexFromString($col) + 1
            )) {
                $cell = $sheet->getCell("{$col}{$templateRow}");
                $value = $cell->getValue();

                if ($cell->isFormula()) {
                    $sheet->setCellValue("{$col}{$row}", $this->shiftFormulaRows($value, $delta));
                }
            }

            // --- Ghi dữ liệu mới ---
            $sheet->setCellValue("A{$row}", $i + 1);
            $sheet->setCellValue("C{$row}", $item['lastname'] . ' ' . $item['firstname']);
            // 🔹 Ghi dữ liệu ngày trong tháng (ví dụ từ cột E → cột tương ứng với ngày cuối)
            $startCol = 'E';
            $colIndex = Coordinate::columnIndexFromString($startCol);

            foreach ($input['daysInMonth'] as $dayIndex => $dayValue) {
                $col = Coordinate::stringFromColumnIndex($colIndex);
                $value = $this->getTimesheetByDay($item, $dayIndex, $input['month'], $input['holidays'], $input['leaves'], $input['action']);
                $sheet->setCellValue("{$col}{$row}", $value);
                $colIndex++;
            }
            $sheet->setCellValue("AJ{$row}", $item['total_day']);
            $sheet->setCellValue("AK{$row}", $item['total_leave']);
            $sheet->setCellValue("AL{$row}", $item['total_total']);
            if($input['action'] == 'time'){
                $sheet->setCellValue("AM{$row}", $input['workingInMonth']*8.5);
            } else {
                $sheet->setCellValue("AM{$row}", $input['workingInMonth']);
            }
            
        }

        // --- Lưu file ---
        $fileName = 'salary_export_' . time() . '.xlsx';
        $filePath = storage_path('app/' . $fileName);

        $writer = new Xlsx($spreadsheet);
        $writer->save($filePath);

        return response()->download($filePath)->deleteFileAfterSend(true);
    }
    public function getTimesheetByDay($user, $dayIndex, $month, $holidays, $leaves, $action)
    {
        // Nếu $month = "2025-10"
        $currentDate = \Carbon\Carbon::createFromFormat('Y-m-d', "{$month}-" . ($dayIndex + 1));
        $currentDay = $currentDate->day;

        // --- Check Holiday ---
        foreach ($holidays as $holiday) {
            $holidayDate = \Carbon\Carbon::parse($holiday['date']);
            if ($currentDay === $holidayDate->day) {
                if($action== 'time'){
                    return 8.5;
                } else {
                    return 'L'; // Holiday
                }
            }
        }

        $timesheet_total = 0;

        // --- Check Leave ---
        foreach ($leaves as $leave) {
            $leaveDate = \Carbon\Carbon::parse($leave['leave_date']);

            if ($user['id'] == $leave['user_id'] && $currentDay === $leaveDate->day) {
                if ($leave['leave_type_id'] == 2) { // Nghỉ không phép
                    if ($leave['duration'] == 'half') {
                        if($action== 'time'){
                            return 8.5;
                        } else {
                            return '/'; // Half unpaid
                        }
                    } else {
                        return ''; // Full unpaid
                    }
                } else { // Nghỉ có phép
                    if ($leave['duration'] == 'half') {
                        if($action== 'time'){
                            if($leave['duration_type'] == 'first_half'){
                                return 4;
                            } else {
                                return 4.5;
                            }
                        } else {
                            return 'P'; // Full paid leave
                        }
                    } else {
                        if($action== 'time'){
                            return 8.5;
                        } else {
                            return 'P'; // Full paid leave
                        }
                    }
                }
            }
        }

        if ($timesheet_total > 0) {
            return '/'; // Half paid leave
        } else {
            if (!empty($user['timesheet'][$dayIndex]) && $user['timesheet'][$dayIndex]['check']) {
                if($action== 'time'){
                    return $user['timesheet'][$dayIndex]['value'] == 8.5 ? 8.5 : '';
                } else {
                    return $user['timesheet'][$dayIndex]['value'] == 8.5 ? 'x' : '';
                }
            }
        }

        return '';
    }


    public function exportSalary($request)
    {
        $input = $request->all();
        $data = $input['data'];
        
        // 🔹 Đường dẫn file template
        $templatePath = storage_path('app/templates/salary.xlsx');
        if (!file_exists($templatePath)) {
            abort(404, 'Không tìm thấy file mẫu salary.xlsx');
        }

        // 🔹 Load template
        $spreadsheet = IOFactory::load($templatePath);
        $sheet = $spreadsheet->getActiveSheet();

        $templateRow = 12; // Dòng mẫu (format gốc)
        $startRow = $templateRow;
        $lastCol = 'DM'; // Cột cuối cùng trong file
        $sheet->setCellValue("O4", $input['month']);
        $sheet->setCellValue("BC4", $input['month']);
        $sheet->setCellValue("CQ4", $input['month']);
        // ✅ Duyệt qua data để ghi vào, copy format từ dòng 5
        $row = 0;
        $colIndex = Coordinate::columnIndexFromString('AO');
        foreach ($input['daysInMonth'] as $dayIndex => $dayValue) {
            $col = Coordinate::stringFromColumnIndex($colIndex);
            $sheet->setCellValue("{$col}8", $this->getThuTrongTuan($input['month'].'-'.$dayIndex+1));
            $sheet->setCellValue("{$col}11", $dayIndex+1);
            $colIndex++;
        }
        $colIndex = Coordinate::columnIndexFromString('AO');
        foreach ($input['daysInMonth'] as $dayIndex => $dayValue) {
            $col = Coordinate::stringFromColumnIndex($colIndex);
            $sheet->setCellValue("{$col}8", $this->getThuTrongTuan($input['month'].'-'.$dayIndex+1));
            $sheet->setCellValue("{$col}11", $dayIndex+1);
            $colIndex++;
        }
        $colIndex = Coordinate::columnIndexFromString('CA');
        foreach ($input['daysInMonth'] as $dayIndex => $dayValue) {
            $col = Coordinate::stringFromColumnIndex($colIndex);
            $sheet->setCellValue("{$col}8", $this->getThuTrongTuan($input['month'].'-'.$dayIndex+1));
            $sheet->setCellValue("{$col}11", $dayIndex+1);
            $colIndex++;
        }
        foreach ($data as $i => $item) {

            // salary
            $row = $startRow + $i;

            // --- Copy style ---
            $sheet->duplicateStyle(
                $sheet->getStyle("A{$templateRow}:{$lastCol}{$templateRow}"),
                "A{$row}:{$lastCol}{$row}"
            );

            // --- Copy công thức có điều chỉnh dòng ---
            $delta = $row - $templateRow;
            for ($col = 'A'; $col !== Coordinate::stringFromColumnIndex(
                Coordinate::columnIndexFromString($lastCol) + 1
            ); $col = Coordinate::stringFromColumnIndex(
                Coordinate::columnIndexFromString($col) + 1
            )) {
                $cell = $sheet->getCell("{$col}{$templateRow}");
                $value = $cell->getValue();

                if ($cell->isFormula()) {
                    $sheet->setCellValue("{$col}{$row}", $this->shiftFormulaRows($value, $delta));
                }
            }

            $sheet->setCellValue("AK{$row}",  $input['workingInMonth']);
            // --- Ghi dữ liệu mới ---
            $sheet->setCellValue("A{$row}", $i + 1);
            $sheet->setCellValue("C{$row}", $item['lastname'] . ' ' . $item['firstname']);
            $sheet->setCellValue("E{$row}", $item['salary_total']);
            $sheet->setCellValue("F{$row}", $item['salary_basic']);
            $sheet->setCellValue("G{$row}", $item['salary_performance']);
            $sheet->setCellValue("I{$row}", $item['salary_working_day']);
            $sheet->setCellValue("K{$row}", $item['salary_leave_salary']);
            $sheet->setCellValue("L{$row}", $item['salary_ot_working_day']/8.5);
            $sheet->setCellValue("M{$row}", $item['salary_ot_working_salary']);
            $sheet->setCellValue("P{$row}", $item['salary_lunch']);
            $sheet->setCellValue("Q{$row}", 0);
            $sheet->setCellValue("R{$row}", $item['allowance']);
            $sheet->setCellValue("T{$row}", $item['dependents']);
            $sheet->setCellValue("V{$row}", $input['settings']['personal']);
            $sheet->setCellValue("W{$row}", $item['salary_lunch']);

            // timesheet


            // --- Ghi dữ liệu mới ---
            $sheet->setCellValue("AL{$row}", $i + 1);
            // 🔹 Ghi dữ liệu ngày trong tháng (ví dụ từ cột E → cột tương ứng với ngày cuối)
            $startCol = 'AO';
            $colIndex = Coordinate::columnIndexFromString($startCol);

            foreach ($input['daysInMonth'] as $dayIndex => $dayValue) {
                $col = Coordinate::stringFromColumnIndex($colIndex);
                $value = $this->getTimesheetByDay($item, $dayIndex, $input['month'], $input['holidays'], $input['leaves'], 'day');
                $sheet->setCellValue("{$col}{$row}", $value);
                $colIndex++;
            }
            $sheet->setCellValue("BT{$row}", $item['total_day']);
            $sheet->setCellValue("BU{$row}", $item['total_leave']);
            $sheet->setCellValue("BV{$row}", $item['total_total']);
            $sheet->setCellValue("BW{$row}", $input['workingInMonth']);

            $startCol = 'CA';
            $colIndex = Coordinate::columnIndexFromString($startCol);

            foreach ($input['daysInMonth'] as $dayIndex => $dayValue) {
                $col = Coordinate::stringFromColumnIndex($colIndex);
                $sheet->setCellValue("{$col}{$row}", $item['timesheet_ot'][$dayIndex]['value']);
                $colIndex++;
            }
            
        }
        $totalRow = $i +$templateRow+1;
        $currentRow = $row;
        $startColIndex = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::columnIndexFromString('E');
        $endColIndex   = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::columnIndexFromString('AK');

        for ($i = $startColIndex; $i <= $endColIndex; $i++) {
            $col = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::stringFromColumnIndex($i);
            $sheet->setCellValue("{$col}{$totalRow}", "=SUM({$col}{$startRow}:{$col}{$currentRow})");
        }
        $styleArray = [
            'font' => [
                'bold' => true,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                    'color' => ['argb' => 'FF000000'],
                ],
            ],
            'fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                'startColor' => ['argb' => 'FFFFE699'], // vàng nhạt
            ],
        ];
        
        $sheet->getStyle("A{$totalRow}:AK{$totalRow}")->applyFromArray($styleArray);
        // --- Lưu file ---
        $fileName = 'salary_export_' . time() . '.xlsx';
        $filePath = storage_path('app/' . $fileName);

        $writer = new Xlsx($spreadsheet);
        $writer->save($filePath);

        return response()->download($filePath)->deleteFileAfterSend(true);
    }

    function getThuTrongTuan($dateString)
    {
        try {
            $date = Carbon::parse($dateString);
            $dayOfWeek = $date->dayOfWeekIso;

            return match ($dayOfWeek) {
                1 => 'T2',
                2 => 'T3',
                3 => 'T4',
                4 => 'T5',
                5 => 'T6',
                6 => 'T7',
                7 => 'CN',
                default => null,
            };
        } catch (\Exception $e) {
            return null; 
        }
    }

    public function shiftFormulaRows(string $formula, int $delta): string
    {
        if ($delta === 0) return $formula;

        return preg_replace_callback(
            '/(\$?[A-Z]{1,3}\$?)(\d+)/i',
            function ($matches) use ($delta) {
                $colPart = $matches[1];
                $rowPart = (int)$matches[2];

                // Nếu absolute row (có $ trước số), thì giữ nguyên
                if (substr($colPart, -1) === '$') {
                    return $colPart . $rowPart;
                }

                return $colPart . ($rowPart + $delta);
            },
            $formula
        );
    }

    function getWorkingDays($month, $year) {
        $totalDays = 0;
        $totalWorkingDays = 0;
        $totalDays = cal_days_in_month(CAL_GREGORIAN, $month, $year);
        for ($day = 1; $day <= $totalDays; $day++) {
            $dayOfWeek = date('N', strtotime("$year-$month-$day"));
            if ($dayOfWeek >= 1 && $dayOfWeek <= 5) {
                $totalWorkingDays++;
            }
        }
        return $totalWorkingDays;
    }
    /**
     * Get defects for calendar.
     *
     * @param Request $request [Request for get defects]
     *
     * @return Response
     */
    public function getDefectForCalendar($request)
    {
        $user = Auth::user();
        return Defect::with(
            [
            'assignUser' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            ]
        )
            ->where(
                function ($query) use ($user) {
                    $query->where('assign_member', $user->id)
                        ->orWhere('create_user_id', $user->id);
                }
            )
            ->whereNotIn('status', [2, 5, 7])
            ->orderBy('created_at', 'DESC')
            ->get();
    }

    /**
     * Check user permission.
     *
     * @param Int $defect_id [Defect Id]
     *
     * @return Boolean
     */
    public function checkPermission($defect_id)
    {
        $user = Auth::user();
        if ($user->hasRole('admin') || $user->is_super_admin) {
            return true;
        }

        $defectUser = Defect::where('id', $defect_id)
            ->where(
                function ($q) {
                    $q->where('assign_member', Auth::user()->id)
                        ->orWhere('create_user_id', Auth::user()->id);
                }
            )
            ->first();

        if ($defectUser) {
            return true;
        }
        return false;
    }

    /**
     * Update the specified resource
     *
     * @param Request $request [Request for update defect status and order]
     *
     * @return Boolean
     */
    public function updateKanban($request)
    {
        $order = 1;
        $input = $request->all();

        if (!empty($input)) {
            foreach ($input as $key => $value) {
                if (isset($value['list'])) {
                    foreach ($value['list'] as $Key1 => $Value1) {
                        $defect = Defect::findOrFail($Value1);
                        $defect->status = $value['status'];
                        $defect->orders = $order;
                        $defect->save();
                        $order++;
                    }
                }
            }
            return true;
        } else {
            return false;
        }
    }

}
