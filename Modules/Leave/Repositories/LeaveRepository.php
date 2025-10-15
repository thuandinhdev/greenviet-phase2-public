<?php

namespace Modules\Leave\Repositories;

use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Modules\Helper\Helpers\CommonHelper;
use Modules\Helper\Helpers\EmailsHelper;
use Modules\Helper\Helpers\UploadFileHelper;
use Modules\LeaveType\Entities\LeaveType;
use Modules\Leave\Entities\Leave;
use Modules\Leave\Entities\LeaveAttachment;
use Modules\Timesheet\Entities\Timesheet;
use Modules\User\Entities\User\User;

/**
 * Class LeaveRepository
 *
 * Leave CRUD functionality
 *
 * Leave create, update, delete and view
 *
 * PHP version 8.0
 *
 * @category  HRM
 * @package   Modules\Leave
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class LeaveRepository
{
    protected $emailsHelper;
    protected $commonHelper;
    protected $uploadFileHelper;

    /**
     * Instantiate a new helper instance.
     *
     * @param EmailsHelper     $emailsHelper     [Object]
     * @param CommonHelper     $commonHelper     [Object]
     * @param UploadFileHelper $uploadFileHelper [Object]
     *
     * @return void
     */
    public function __construct(EmailsHelper $emailsHelper, CommonHelper $commonHelper, UploadFileHelper $uploadFileHelper)
    {
        $this->emailsHelper = $emailsHelper;
        $this->commonHelper = $commonHelper;
        $this->uploadFileHelper = $uploadFileHelper;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get pending leaves for box layout]
     *
     * @return Object
     */
    public function getLeavesForBox($request)
    {
        $user = Auth::user();

        $current_year = $this->commonHelper->getCurrentYear();

        $total_leave = LeaveType::sum('no_of_leaves');

        $leaves = Leave::with(
            [
                'leaveType',
                'attachments',
                'user' => function ($query) {
                    $query->select(
                        'id',
                        'firstname',
                        'lastname',
                        'avatar'
                    );
                },
            ]
        )->where('status', 1);

        if (!$user->hasRole('admin') && !$user->is_super_admin) {
            $childUser = User::where('primary_manager', $user->id)->orWhere('secondary_manager', $user->id)->pluck('id');
            $leaves->whereIn('user_id', $childUser);
        }

        $leaves = $leaves->get();

        foreach ($leaves as $key => $value) {
            $total_approved_leaves = Leave::where('user_id', $value->user_id)
                ->whereIn('status', [2])
                ->whereBetween('leave_date', [$current_year['period_from'], $current_year['period_to']])
                ->sum('leave_day');

            $total_taken_leaves = Leave::where('user_id', $value->user_id)
                ->whereIn('status', [5])
                ->whereBetween('leave_date', [$current_year['period_from'], $current_year['period_to']])
                ->sum('leave_day');

            $value->total_leave = $total_leave;
            $value->total_approved_leaves = $total_approved_leaves;
            $value->total_taken_leaves = $total_taken_leaves;
            $value->remaining_leaves = $total_leave - $total_approved_leaves - $total_taken_leaves;
        }

        return $leaves;
    }

    /**
     * Display a listing of the resource for calendar.
     *
     * @return Array
     */
    public function getLeavesForCalendar()
    {
        $leaves_table = config('core.acl.leaves_table');
        $leave_types_table = config('core.acl.leave_types_table');
        $user = \Auth::user();

        $leaves = Leave::with(
            [
            'leaveType',
            'user' => function ($query) {
                $query->select(
                    'id',
                    'firstname',
                    'lastname',
                    'avatar'
                );
            },
            ]
        )->whereIn('status', [2, 5]);

        if (!$user->hasRole('admin') && !$user->is_super_admin) {
            $childUser = User::where('primary_manager', $user->id)->orWhere('secondary_manager', $user->id)->pluck('id');
            $childUser->push($user->id);
            $leaves->whereIn('user_id', $childUser);
        }

        return $leaves->get();
    }

    public function getLeavesForUser($user_id)
    {
        if($user_id == 'my'){
            $user = Auth::user();
            $user_id = $user->id;
        }
        $leaves = Leave::with(
            [
            'leaveType',
            'user' => function ($query) {
                $query->select(
                    'id',
                    'firstname',
                    'lastname',
                    'avatar'
                );
            },
            ]
        )->whereIn('status', [1, 2])->where('user_id', $user_id);

        return $leaves->select('*', DB::raw('DATE_FORMAT(leave_date, "%Y-%m-%d") as formatted_date'))->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get my leaves]
     *
     * @return Object
     */

     
    public function leavesReport($request){
        $leaves_table = config('core.acl.leaves_table');
        $leave_types_table = config('core.acl.leave_types_table');
        $user_table = config('core.acl.users_table');
        $user = Auth::user();
        $input = $request->all();
        $startOfMonth = Carbon::createFromFormat('Y-m', $input['month'])->startOfMonth();
        $endOfMonth   = Carbon::createFromFormat('Y-m', $input['month'])->endOfMonth();

        $leaves = Leave::with(['attachments'])->select(
            $leaves_table . '.*',
            $leave_types_table . '.leave_type',
            $user_table . '.firstname',
            $user_table . '.lastname',
            $user_table . '.avatar',
            'approved1.firstname as approved1_firstname',
            'approved1.lastname as approved1_lastname',
            'approved1.avatar as approved1_avatar',
            'approved2.firstname as approved2_firstname',
            'approved2.lastname as approved2_lastname',
            'approved2.avatar as approved2_avatar',
            'reject.firstname as reject_firstname',
            'reject.lastname as reject_lastname',
            'reject.avatar as reject_avatar',
        )
            ->join($leave_types_table, $leave_types_table . '.id', '=', $leaves_table . '.leave_type_id')
            ->join($user_table, $user_table . '.id', '=', $leaves_table . '.user_id')
            ->leftJoin($user_table . ' as approved1', 'approved1.id', '=', $leaves_table . '.approved1')
            ->leftJoin($user_table . ' as approved2', 'approved2.id', '=', $leaves_table . '.approved2')
            ->leftJoin($user_table . ' as reject', 'reject.id', '=', $leaves_table . '.reject_id')->where($leaves_table . '.leave_type_id', 3)->where($leaves_table . '.status', 2)->whereBetween($leaves_table . '.leave_date', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]);
        $checkRole = DB::table('gv_user_role_department')->where('user_id', $user->id)->first();

        if (!$user->hasRole('admin') && !$user->is_super_admin && !$user->is_super_admin && $checkRole->department_id != 6) {
            $childUser = DB::table('gv_teams')->join('gv_teams_members',  'gv_teams.id', '=', 'gv_teams_members.team_id')->where('gv_teams.team_leader', $user->id)->pluck('gv_teams_members.user_id');
            $childUser->push($user->id);
            if($checkRole->department_id == 3){
                $leaves->where(
                    function ($query) use ($leaves_table) {
                        $query->where($leaves_table . '.status', '!=', 1)
                            ->orWhere($leaves_table . '.leave_type_id', 3);
                    }
                );
            } else {
                $leaves->whereIn('user_id', $childUser);
            }
        }

        
        if (isset($input['status']) && $input['status']) {
            $leaves = $leaves->where($leaves_table . '.status', $input['status']);
        }

        $totalData = $leaves->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');

            $leaves = $leaves->where(
                function ($query) use ($search, $user_table, $leaves_table, $leave_types_table) {
                    $query->where($leaves_table . '.leave_date', 'LIKE', "%{$search}%")
                        ->orWhere($leaves_table . '.created_at', 'LIKE', "%{$search}%")
                        ->orWhere($leave_types_table . '.leave_type', 'LIKE', "%{$search}%")
                        ->orWhere(
                            DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'),
                            'LIKE',
                            "%{$search}%"
                        );
                }
            );

            $totalFiltered = $leaves->count();
        }

        $data = $leaves->orderBy($leaves_table . '.leave_date', 'desc')->get();

        $remainingLeave = $this->commonHelper->getRemainingLeaveDays($user->id);

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $data,
            'other' => ['department_id'=>$checkRole->department_id, 'remainingLeave'=>$remainingLeave]
        );
    }
    public function getAllLeave($request)
    {
        $leaves_table = config('core.acl.leaves_table');
        $leave_types_table = config('core.acl.leave_types_table');
        $user_table = config('core.acl.users_table');
        $user = Auth::user();

        $leaves = Leave::with(['attachments'])->select(
            $leaves_table . '.*',
            $leave_types_table . '.leave_type',
            $user_table . '.firstname',
            $user_table . '.lastname',
            $user_table . '.avatar',
            'approved1.firstname as approved1_firstname',
            'approved1.lastname as approved1_lastname',
            'approved1.avatar as approved1_avatar',
            'approved2.firstname as approved2_firstname',
            'approved2.lastname as approved2_lastname',
            'approved2.avatar as approved2_avatar',
            'reject.firstname as reject_firstname',
            'reject.lastname as reject_lastname',
            'reject.avatar as reject_avatar',
        )
            ->join($leave_types_table, $leave_types_table . '.id', '=', $leaves_table . '.leave_type_id')
            ->join($user_table, $user_table . '.id', '=', $leaves_table . '.user_id')
            ->leftJoin($user_table . ' as approved1', 'approved1.id', '=', $leaves_table . '.approved1')
            ->leftJoin($user_table . ' as approved2', 'approved2.id', '=', $leaves_table . '.approved2')
            ->leftJoin($user_table . ' as reject', 'reject.id', '=', $leaves_table . '.reject_id');
        $checkRole = DB::table('gv_user_role_department')->where('user_id', $user->id)->first();

        if (!$user->hasRole('admin') && !$user->is_super_admin && !$user->is_super_admin && $checkRole->department_id != 6) {
            $childUser = DB::table('gv_teams')->join('gv_teams_members',  'gv_teams.id', '=', 'gv_teams_members.team_id')->where('gv_teams.team_leader', $user->id)->pluck('gv_teams_members.user_id');
            $childUser->push($user->id);
            if($checkRole->department_id == 3){
                $leaves->where(
                    function ($query) use ($leaves_table) {
                        $query->where($leaves_table . '.status', '!=', 1)
                            ->orWhere($leaves_table . '.leave_type_id', 3);
                    }
                );
            } else {
                $leaves->whereIn('user_id', $childUser);
            }
            // $childUser = User::where('primary_manager', $user->id)->orWhere('secondary_manager', $user->id)->pluck('id');
            // $childUser->push($user->id);
            // $leaves->whereIn('user_id', $childUser);
        }

        $columns = array(
            0 => $leaves_table . '.id',
            1 => $user_table . '.firstname',
            2 => $leaves_table . '.reason',
            3 => $leaves_table . '.created_at',
            4 => $leaves_table . '.leave_date',
            5 => $leave_types_table . '.leave_type',
            6 => $leaves_table . '.duration',
            7 => $leaves_table . '.Status',
        );

        $input = $request->input();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (isset($input['status']) && $input['status']) {
            $leaves = $leaves->where($leaves_table . '.status', $input['status']);
        }

        $totalData = $leaves->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');

            $leaves = $leaves->where(
                function ($query) use ($search, $user_table, $leaves_table, $leave_types_table) {
                    $query->where($leaves_table . '.leave_date', 'LIKE', "%{$search}%")
                        ->orWhere($leaves_table . '.created_at', 'LIKE', "%{$search}%")
                        ->orWhere($leave_types_table . '.leave_type', 'LIKE', "%{$search}%")
                        ->orWhere(
                            DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'),
                            'LIKE',
                            "%{$search}%"
                        );
                }
            );

            $totalFiltered = $leaves->count();
        }

        $data = $leaves->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        $remainingLeave = $this->commonHelper->getRemainingLeaveDays($user->id);

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $data,
            'other' => ['department_id'=>$checkRole->department_id, 'remainingLeave'=>$remainingLeave]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Request for create leave]
     *
     * @return Boolean
     */
    public function create($request)
    {
        $input = $request->all();
        $input['workallowance'] = json_encode($input['workallowance']);
        $input['project'] = json_encode($input['project']);
        $check = Timesheet::where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['leave_date']. ' 00:00:00')))->where('end_time', '<', date('y-m-d H:i:s', strtotime($input['leave_date']. ' 23:59:59')))->where('created_user_id', $input['user_id'])->count();
        $checkDraft = DB::table('gv_timesheets_draft')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['leave_date']. ' 00:00:00')))->where('end_time', '<', date('y-m-d H:i:s', strtotime($input['leave_date']. ' 23:59:59')))->where('created_user_id', $input['user_id'])->count();
        if(($checkDraft > 0 || $check > 0) && $input['leave_type_id'] < 3){
            return ['status'=>false, 'msg'=>'This day has been timesheeted'];
        }
        $remainingLeave = $this->commonHelper->getRemainingLeaveDays($input['user_id']);
        if ($input['duration'] == 'multiple') {
            if($remainingLeave < count($input['multi_date']) && $input['leave_type_id'] == 1){
                return ['status'=>false, 'msg'=>'No more leave to use'];
            }
            foreach ($input['multi_date'] as $key => $value) {
                $input['leave_date'] = $value;
                $input['duration'] = 'full';
                $leave = Leave::create($input);

                // --
                // Upload leave attachments
                if (isset($input['files']) && !empty($input['files'])) {
                    $attachments = $this->uploadFileHelper->uploadMultipleAttachment($input['files'], 'leave_attachment');
                    $attachments = json_decode($attachments);
                    foreach ($attachments as $key => $value) {
                        $leave->attachments()->create(
                            [
                            'file_name' => $value->name,
                            'file_hash' => $value->file,
                            ]
                        );
                    }
                }

                // Add activities
                createUserActivity(
                    Leave::MODULE_NAME,
                    $leave->id,
                    $request->method(),
                    $leave->reason,
                    $request->ip()
                );
            }
        } else {
            if ($input['duration'] == 'half') {
                $input['leave_day'] = 0.5;
            }
            if($input['leave_type_id'] == 1 && (($remainingLeave < 1 && $input['duration'] == 'full') || ($remainingLeave < 0.5 && $input['duration'] == 'half'))){
                return ['status'=>false, 'msg'=>'No more leave to use'];
            }

            $leave = Leave::create($input);

            // --
            // Upload leave attachments
            if (isset($input['files']) && !empty($input['files'])) {
                $attachments = $this->uploadFileHelper->uploadMultipleAttachment($input['files'], 'leave_attachment');
                $attachments = json_decode($attachments);
                foreach ($attachments as $key => $value) {
                    $leave->attachments()->create(
                        [
                        'file_name' => $value->name,
                        'file_hash' => $value->file,
                        ]
                    );
                }
            }

            // Add activities
            createUserActivity(
                Leave::MODULE_NAME,
                $leave->id,
                $request->method(),
                $leave->reason,
                $request->ip()
            );
        }

        $this->emailsHelper->sendLeaveRequestEmail($leave, $input);

        return ['status'=>true];
    }

    /**
     * Display a leave of the resource.
     *
     * @param Int $id [Row id]
     *
     * @return Object
     */
    public function findById($id)
    {
        return Leave::with(
            [
            'leaveType',
            'attachments',
            'user' => function ($query) {
                $query->select(
                    'id',
                    'firstname',
                    'lastname',
                    'avatar'
                );
            },
            ]
        )->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update leave]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function update($request, $id)
    {
        $input = $request->all();
        $input['workallowance'] = json_encode($input['workallowance']);
        $input['project'] = json_encode($input['project']);
        $leave = Leave::findOrFail($id);
        if ($input['duration'] == 'half') {
            $input['leave_day'] = 0.5;
        }
        $check = Timesheet::where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['leave_date']. ' 00:00:00')))->where('end_time', '<', date('y-m-d H:i:s', strtotime($input['leave_date']. ' 23:59:59')))->where('created_user_id', $input['user_id'])->count();
        $checkDraft = DB::table('gv_timesheets_draft')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['leave_date']. ' 00:00:00')))->where('end_time', '<', date('y-m-d H:i:s', strtotime($input['leave_date']. ' 23:59:59')))->where('created_user_id', $input['user_id'])->count();
        if(($checkDraft > 0 || $check > 0) && $input['leave_type_id'] < 3){
            return ['status'=>false, 'msg'=>'This day has been timesheeted'];
        }
        if($input['status'] == 4){
            $input['status'] = 1;
        }
        if ($leave->fill($input)->save()) {

            // Delete attachment
            if (isset($input['removed_files']) && !empty($input['removed_files'])) {
                $removedAttachment = LeaveAttachment::whereIn('id', $input['removed_files'])->get();
                foreach ($removedAttachment as $key => $value) {
                    $file = public_path() . '/uploads/leave_attachment/' . $value->file_hash;
                    if (file_exists($file)) {
                        unlink($file);
                    }
                }
                LeaveAttachment::whereIn('id', $input['removed_files'])->delete();
            }

            // --
            // Upload leave attachments
            if (isset($input['files']) && !empty($input['files'])) {
                $attachments = $this->uploadFileHelper->uploadMultipleAttachment($input['files'], 'leave_attachment');
                $attachments = json_decode($attachments);
                foreach ($attachments as $key => $value) {
                    $leave->attachments()->create(
                        [
                        'file_name' => $value->name,
                        'file_hash' => $value->file,
                        ]
                    );
                }
            }

            // --
            // Add activities
            createUserActivity(
                Leave::MODULE_NAME,
                $leave->id,
                $request->method(),
                $leave->reason,
                $request->ip()
            );

            if ($leave->status == 1) {
                $this->emailsHelper->sendLeaveRequestEmail($leave);
            }

            return ['status'=>true];
        } else {
            return ['status'=>false];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete leave]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function delete($request, $id)
    {
        $leave = Leave::with(['attachments'])->findOrFail($id);

        // Delete timesheet entry.
        Timesheet::where('module_id', 7)->where('module_related_id', $leave->id)->delete();

        if ($leave->delete()) {

            // Delete attachment
            foreach ($leave->attachments as $key => $value) {
                $file = public_path() . '/uploads/leave_attachment/' . $value->file_hash;
                if (file_exists($file)) {
                    unlink($file);
                }
                LeaveAttachment::where('id', $value->id)->delete();
            }

            // --
            // Add activities
            createUserActivity(
                Leave::MODULE_NAME,
                $leave->id,
                $request->method(),
                $leave->reason,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Change leave status.
     *
     * @param Request $request [Request for change leave status]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function changeLeaveStatus($request, $id)
    {
        $user = Auth::user();
        $leave = Leave::with('leaveType')->findOrFail($id);
        $oldStatus = $leave->status;
        $input['status'] = $request->get('status');
        if ($input['status'] == 3) {
            $input['reject_reason'] = $request->get('reject_reason');
            $input['approved1'] = null;
            $input['approved2'] = null;
            $input['reject_id'] = $user->id;
        }
        if ($input['status'] == 4) {
            $input['approved1'] = null;
            $input['approved2'] = null;
            $input['reject_id'] = null;
        }
        if ($input['status'] == 2) {
            if($oldStatus == 1){
                if($leave->leave_type_id == 3){
                    $input['approved1'] = $user->id;
                    $input['approved2'] = $user->id;
                    $input['status'] = 2;
                } else {
                    $input['approved1'] = $user->id;
                    $input['status'] = 6;
                }
            }
            if($oldStatus == 6){
                $input['approved2'] = $user->id;
                $input['status'] = 2;
            }
            if($leave->leave_type_id == 3){
                $project = json_decode($leave->project);
                foreach ($project as $key => $value) {
                    DB::table('gv_leaves_detail')->insert([
                        'user_id'=>$leave->user_id,
                        'leave_id'=> $id,
                        'project_id'=>$value,
                        'value'=>ceil($leave->total/count($project))
                    ]);
                }
            } else {
                // $contract = DB::table('gv_users_contract')
                //     ->where('user_id', $leave->user_id)
                //     ->where('start_date', '<=', date('y-m-d', strtotime($leave->leave_date)))
                //     ->where('end_date', '>=', date('y-m-d', strtotime($leave->leave_date)))
                //     ->orderBy('id', 'desc')->first();
                // if($contract){
                //     $countUsed = Leave::where('user_id', $leave->user_id)->where('status', 2)->where('contract_id', $contract->id)->where('leave_type_id', 1)->count();
                //     // ->where('duration', 'full')
                //     if($contract->on_leave > $countUsed){
                //         $input['contract_id'] = $contract->id;
                //         $contract = DB::table('gv_users_contract')->where('id', $contract->id)->update(['status'=>1]);
                //     } else {
                //         return false;
                //     }
                // } else {
                //     return false;
                // }
            }
        }


        if ($leave->fill($input)->save()) {
            // --
            // Add activities
            createUserActivity(
                Leave::MODULE_NAME,
                $leave->id,
                $request->method(),
                $leave->reason,
                $request->ip(),
                $leave->id,
                true
            );

            if ($oldStatus != $leave->status && $leave->status == 2) {
                // Approved...
                $this->emailsHelper->sendLeaveApprovelEmail($leave);
                // Timesheet Entry
                $this->_timesheetEntry($leave);
            } elseif ($oldStatus != $leave->status && $leave->status == 3) {
                // Rejected...
                $this->emailsHelper->sendLeaveRejectionEmail($leave);
            } elseif ($oldStatus != $leave->status && $leave->status == 4) {
                // Cancel...
                $this->emailsHelper->sendLeaveCancelEmail($leave);
                // Delete timesheet entry.
                Timesheet::where('module_id', 7)->where('module_related_id', $leave->id)->delete();
            }
            return true;
        }
        return false;
    }

    /**
     * Add timesheet entry when leave approved.
     *
     * @param Object $leave [Leave details]
     *
     * @return Object
     */
    private function _timesheetEntry($leave)
    {
        $timesheet = new Timesheet();
        $timesheet->module_id = 7;
        $timesheet->module_related_id = $leave->id;
        $leave_date = $leave->leave_date->format('Y-m-d');
        if ($leave->duration == 'half') {
            if ($leave->duration_type == "second_half") {
                $timesheet->start_time = $leave_date . '13:00:00';
                $timesheet->end_time = $leave_date . '17:00:00';
            } else {
                $timesheet->start_time = $leave_date . '09:00:00';
                $timesheet->end_time = $leave_date . '13:00:00';
            }
            $timesheet->decimal_time = '4.00';
            $timesheet->hour_time = '04:00';
        } else {
            $timesheet->start_time = $leave_date . '09:00:00';
            $timesheet->end_time = $leave_date . '17:30:00';
            $timesheet->decimal_time = '8.50';
            $timesheet->hour_time = '08:30';
        }
        $timesheet->note = $leave->leaveType->leave_type;
        $timesheet->created_user_id = $leave->user_id;
        $timesheet->save();
    }

    /**
     * Display leave report data.
     *
     * @param Request $request [Request for get leave report data]
     *
     * @return Array
     */
    public function getLeavesForReport($request)
    {
        $leaves_table = config('core.acl.leaves_table');
        $user_table = config('core.acl.users_table');
        $startDt = '';
        $endDt = '';

        $columns = array(
            1 => $user_table . '.firstname',
        );

        $input = $request->input();
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');
        $columns_search = $request->input('columns');

        if ($request->has('period_from') && !empty($request->input('period_from'))) {
            $startDate = $request->input('period_from');
            $startDt = 'and DATE(' . $leaves_table . '.`leave_date`) >= ' . '"' . $startDate . '"';
        }

        if ($request->has('period_to') && !empty($request->input('period_to'))) {
            $endDate = $request->input('period_to');
            $endDt = 'and DATE(' . $leaves_table . '.`leave_date`) <= ' . '"' . $endDate . '"';
        }

        $leavesList = User::selectRaw(
            $user_table . '.id, ' . $user_table . '.firstname, ' . $user_table . '.lastname, ' . $user_table . '.avatar,
            ( select COALESCE(SUM(leave_day), 0) from ' . $leaves_table . ' where ' . $leaves_table . '.user_id = ' . $user_table . '.id and ' . $leaves_table . '.status = 1 and ' . $leaves_table . '.deleted_at IS NULL ' . $startDt . ' ' . $endDt . ' ) as pending_leaves,
            ( select COALESCE(SUM(leave_day), 0) from ' . $leaves_table . ' where ' . $leaves_table . '.user_id = ' . $user_table . '.id and ' . $leaves_table . '.status = 2 and ' . $leaves_table . '.deleted_at IS NULL ' . $startDt . ' ' . $endDt . ' ) as approved_leaves,
            ( select COALESCE(SUM(leave_day), 0) from ' . $leaves_table . ' where ' . $leaves_table . '.user_id = ' . $user_table . '.id and ' . $leaves_table . '.status = 5 and ' . $leaves_table . '.deleted_at IS NULL ' . $startDt . ' ' . $endDt . ' ) as taken_leaves'
        )->where('is_client', 0);

        if ($request->has('user_id') && !empty($request->input('user_id'))) {
            $leavesList->where($user_table . '.id', $request->input('user_id'));
        }

        $totalData = $leavesList->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');
            $leavesList->where(
                DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'),
                'LIKE',
                "%{$search}%"
            );
            $totalFiltered = $leavesList->count();
        }

        $data = $leavesList->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'desc' ? 'desc' : 'asc')
            ->get();

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $data,
        );
    }

    /**
     * Display leave report detail data.
     *
     * @param Request $request [Request for get leave report details data]
     *
     * @return Array
     */
    public function leaveReportDetails($request)
    {
        $leaves_table = config('core.acl.leaves_table');
        $input = $request->input();

        $leaves = Leave::with('leaveType')
            ->where($leaves_table . '.user_id', $input['userId'])
            ->where($leaves_table . '.status', $input['status']);
        $leavesCount = Leave::select('leave_type_id', DB::raw("SUM(leave_day) as count"))
            ->where('user_id', $input['userId'])
            ->where($leaves_table . '.status', $input['status']);

        if (isset($input['startDate']) && !empty($input['startDate']) && isset($input['endDate']) && !empty($input['endDate'])) {
            $leaves->whereBetween($leaves_table . '.leave_date', [$input['startDate'], $input['endDate']]);
            $leavesCount->whereBetween($leaves_table . '.leave_date', [$input['startDate'], $input['endDate']]);
        }

        $leavesCount = $leavesCount->groupBy('leave_type_id')->get();
        $leavesTypes = LeaveType::select('*', DB::raw("0 as count"))->get();

        foreach ($leavesCount as $key => $leaveType) {
            $found_key = array_search($leaveType->leave_type_id, array_column($leavesTypes->toArray(), 'id'));
            $leavesTypes[$found_key]->count = $leaveType->count;
        }

        return array(
            "leaves" => $leaves->get(),
            "leavesCount" => $leavesTypes,
        );
    }
}
