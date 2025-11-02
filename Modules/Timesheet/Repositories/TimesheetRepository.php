<?php

namespace Modules\Timesheet\Repositories;

use Auth;
use DB;
use Modules\Defect\Entities\Defect;
use Modules\Helper\Helpers\CommonHelper;
use Modules\Incident\Entities\Incident;
use Modules\Projects\Entities\Project;
use Modules\Task\Entities\Task;
use Modules\User\Entities\User\User;
use Modules\Timesheet\Entities\Timesheet;
use Modules\Timesheet\Entities\Timesheetdraft;
use Modules\Setting\Entities\Setting;
use Modules\Holiday\Entities\Holiday;
use Modules\Helper\Helpers\EmailsHelper;
use Modules\Leave\Entities\Leave;
use Modules\Team\Entities\Team;


use Carbon\Carbon;
/**
 * Class TimesheetRepository
 *
 * Timesheet create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Timesheet
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class TimesheetRepository
{
    protected $commonHelper;
    protected $emailRepo;
    /**
     * Instantiate a new repository instance.
     *
     * @param CommonHelper $commonHelper [Object]
     *
     * @return void
     */
    public function __construct(CommonHelper $commonHelper, EmailsHelper $emailRepo)
    {
        $this->commonHelper = $commonHelper;
        $this->emailRepo = $emailRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Object
     */
    public function findAll()
    {
        return Timesheet::with(
            ['user' => function ($query) {
                $query->select('id', 'firstname', 'lastname');
            }]
        )
            ->select(
                '*',
                DB::raw(
                    "TIME_FORMAT(TIMEDIFF(end_time, start_time), '%H:%i') as hours_time,
                (TIME_TO_SEC(TIMEDIFF( end_time, start_time ))/3600) as decimal_time"
                )
            )
            ->orderBy('decimal_time', 'asc')
            ->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get timesheets]
     *
     * @return array
     */
    public function exportTimeSheet($request){
        $input = $request->all();
        $userList = User::get();
        $setting = Setting::select([ 'dependent', 'personal'])->first();
        $startOfMonth = Carbon::parse($input['date'])->startOfMonth();
        $endOfMonth = Carbon::parse($input['date'])->endOfMonth();
        $query = DB::table('gv_timesheets')
                ->where('status', 2)
                ->select(DB::raw('DATE(start_time) as date'), DB::raw('SUM(decimal_time) as total_decimal_time'), 'ot_rate')
                ->whereBetween('start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])
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
        return $userList;
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

    public function getUserMonthSelect($month){
        $user = Auth::user();
        $startOfMonth = Carbon::createFromFormat('Y-m', $month)->startOfMonth();
        $endOfMonth   = Carbon::createFromFormat('Y-m', $month)->endOfMonth();

        $department = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $user->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
        $data = [];
        // if($department->department_name == 'Project'){
        if($department->department_name != 'Administration' && $department->department_name != 'HR' && $department->department_name != 'BOD'){
            $list = DB::table('gv_projects')->join('gv_timesheets', 'gv_timesheets.project_id', '=', 'gv_projects.id')->where('gv_timesheets.status', '<', 2)->where('gv_projects.assign_to', $user->id)->groupBy('gv_timesheets.created_user_id')->pluck('gv_timesheets.created_user_id')->toArray();
            $team = Team::join('gv_teams_members', 'gv_teams_members.team_id', '=', 'gv_teams.id')->where('gv_teams.team_leader', $user->id)->pluck('gv_teams_members.user_id')->toArray();

            $data = User::with(['departments', 'roles'])
            ->where('is_client', false)
            ->where('is_active', 1)
            ->whereIn('id', array_merge($list, $team))
            ->orderBy('username')
            ->get();
        }
        if($department->department_name == 'Administration' || $department->department_name == 'HR' || $department->department_name == 'BOD'){
            $data = User::with(['departments', 'roles'])
            ->where('is_client', false)
            ->where('is_active', 1)
            ->orderBy('username')
            ->get();
        }
        foreach ($data as $key => $value) {
            // $value->timesheets_status = DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', 0)->orderBy('start_time')->first();
            $value->department_role = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $value->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
            $value->paid_leave = $this->commonHelper->getRemainingLeaveDays($value['id']);


            $value->timesheet_billable = DB::table('gv_timesheets')->join('gv_projects', 'gv_projects.id', '=', 'gv_timesheets.project_id')->where('gv_timesheets.created_user_id', $value->id)->where('gv_projects.income_type', 1)->where('gv_timesheets.module_id', 2)->where('gv_timesheets.status', 2)->whereBetween('gv_timesheets.start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])->sum('gv_timesheets.decimal_time');
            $value->timesheet_non_billable = DB::table('gv_timesheets')->join('gv_projects', 'gv_projects.id', '=', 'gv_timesheets.project_id')->where('gv_timesheets.created_user_id', $value->id)->where('gv_projects.income_type', 0)->where('gv_timesheets.module_id', 2)->where('gv_timesheets.status', 2)->whereBetween('gv_timesheets.start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])->sum('gv_timesheets.decimal_time');

            
            $value->project_billable = DB::table('gv_timesheets')->join('gv_projects', 'gv_projects.id', '=', 'gv_timesheets.project_id')->where('gv_timesheets.created_user_id', $value->id)->where('gv_projects.income_type', 1)->where('gv_timesheets.module_id', 2)->where('gv_timesheets.status', 2)->whereBetween('gv_timesheets.start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])->distinct('gv_timesheets.project_id')->count();

            $value->project_non_billable = DB::table('gv_timesheets')->join('gv_projects', 'gv_projects.id', '=', 'gv_timesheets.project_id')->where('gv_timesheets.created_user_id', $value->id)->where('gv_projects.income_type', 0)->where('gv_timesheets.module_id', 2)->where('gv_timesheets.status', 2)->whereBetween('gv_timesheets.start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])->distinct('gv_timesheets.project_id')->count();
            
            // DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', 2)->whereBetween('start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])->groupBy('project_id')->count();
            // $value->projectcount = DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', 2)->whereBetween('start_time', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])->groupBy('project_id')->count();


            $value->contract = DB::table('gv_users_contract')
                ->where('user_id', $value->id)
                ->where('start_date', '<=', $startOfMonth->format('Y-m-d'))
                ->where('end_date', '>=', $endOfMonth->format('Y-m-d'))
                ->orderBy('id', 'desc')->first();
        }
        return ['data'=>$data, 'role'=>$department];
    }

    public function getUserSelect(){
        $user = Auth::user();
        $department = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $user->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
        $data = [];
        // if($department->department_name == 'Project'){
        if($department->department_name != 'Administration' && $department->department_name != 'HR' && $department->department_name != 'BOD'){
            $list = DB::table('gv_projects')->join('gv_timesheets', 'gv_timesheets.project_id', '=', 'gv_projects.id')->where('gv_timesheets.status', '<', 2)->where('gv_projects.assign_to', $user->id)->groupBy('gv_timesheets.created_user_id')->pluck('gv_timesheets.created_user_id')->toArray();
            $team = Team::join('gv_teams_members', 'gv_teams_members.team_id', '=', 'gv_teams.id')->where('gv_teams.team_leader', $user->id)->pluck('gv_teams_members.user_id')->toArray();

            $data = User::with(['departments', 'roles'])
            ->where('is_client', false)
            ->where('is_active', 1)
            ->whereIn('id', array_merge($list, $team))
            ->orderBy('username')
            ->get();
        }
        if($department->department_name == 'Administration' || $department->department_name == 'HR' || $department->department_name == 'BOD'){
            $data = User::with(['departments', 'roles'])
            ->where('is_client', false)
            ->where('is_active', 1)
            ->orderBy('username')
            ->get();
        }
        foreach ($data as $key => $value) {
            if($department->department_name == 'HR'){
                $value->timesheets_status = DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', 1)->orderBy('start_time')->first();
                $value->department_role = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $value->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
            }
            if($department->department_name == 'Administration' || $department->department_name == 'BOD'){
                $value->timesheets_status = DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', '<', 2)->orderBy('start_time')->first();
                $value->department_role = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $value->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
            }
            // if($department->department_name == 'Project'){
            if($department->department_name != 'HR' && $department->department_name != 'Administration' && $department->department_name != 'BOD'){
                $value->timesheets_status = DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', 0)->orderBy('start_time')->first();
                $value->department_role = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $value->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
            }
            $value->paid_leave = $this->commonHelper->getRemainingLeaveDays($value['id']);
        }
        return ['data'=>$data, 'role'=>$department];
    }

    public function getTimesheetsCalendar($request){
        $input = $request->all();
        $user = Auth::user();
        $isMyTimesheet = false;
        if($input['user_id'] == 'my'){
            $input['user_id'] = $user->id;
            $isMyTimesheet = true;
        }
        $modules_table = config('core.acl.modules_table');
        $timesheet_table = config('core.acl.timesheets_table');
        $project_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meetings_table = config('core.acl.meetings');

        $querys = Timesheet::with(
            [
            'user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            ]
        )
            ->join($modules_table, $modules_table . '.module_id', '=', $timesheet_table . '.module_id')
            ->where($timesheet_table.'.created_user_id', '=',  $input['user_id'])
            ->where($timesheet_table.'.module_id', '=',  2)
            ->where(function($query) use ($input) {
                $query->whereBetween('start_time', [$input['start'], $input['end']])
                      ->orWhereBetween('end_time', [$input['start'], $input['end']]);
            })->select(
                $timesheet_table . '.*',
                $modules_table . '.module_name',
                $task_table . '.name as related_name',
                $project_table . '.project_name',
                $project_table . '.assign_members',
                $project_table . '.assign_to'
            )
            ->join($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->join($project_table, $project_table . '.id', '=', $task_table . '.project_id')
            ->orderBy($timesheet_table . '.id');


            $querys_ot = clone $querys;
            $timesheets = $querys->where($timesheet_table . '.ot', 0)->get();
            $timesheets_ot = $querys_ot->where($timesheet_table . '.ot', 1)->get();

            $groupedTimesheets  = $timesheets->groupBy('module_related_id')->map(function ($row) {
                return [
                    'module_related_id' => $row->first()->module_related_id,
                    'module_name' => $row->first()->module_name,
                    'assign_members' => $row->first()->assign_members,
                    'assign_to' => $row->first()->assign_to,
                    'project_name' => $row->first()->project_name,
                    'related_name' => $row->first()->related_name,
                    'status' => $row->first()->status,
                    'timesheets' => $row->map(function ($timesheet) {
                        $approved = User::where('id', $timesheet->approved1)->first();
                        return [
                            'id' => $timesheet->id,
                            'status' => $timesheet->status,
                            'approved1' => $approved ? $approved->username : null,
                            'note' => $timesheet->note,
                            'start_time' => $timesheet->start_time,
                            'decimal_time' => $timesheet->decimal_time,
                            'end_time' => $timesheet->end_time,
                        ];
                    })
                ];
            })->values();

            $groupedTimesheets_ot  = $timesheets_ot->groupBy('module_related_id')->map(function ($row) {
                return [
                    'module_related_id' => $row->first()->module_related_id,
                    'module_name' => $row->first()->module_name,
                    'assign_members' => $row->first()->assign_members,
                    'assign_to' => $row->first()->assign_to,
                    'project_name' => $row->first()->project_name,
                    'related_name' => $row->first()->related_name,
                    'status' => $row->first()->status,
                    'timesheets' => $row->map(function ($timesheet) {
                        $approved = User::where('id', $timesheet->approved1)->first();
                        return [
                            'id' => $timesheet->id,
                            'status' => $timesheet->status,
                            'approved1' => $approved ? $approved->username : null,
                            'note' => $timesheet->note,
                            'start_time' => $timesheet->start_time,
                            'decimal_time' => $timesheet->decimal_time,
                            'end_time' => $timesheet->end_time,
                        ];
                    })
                ];
            })->values();
        $userAction = [];
        $userAction['status'] = 0;
        if(count($groupedTimesheets) > 0){
            $actionQuery = DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))->where('created_user_id', $input['user_id'])
            ->where('module_id', 2)
            ->select('approved1', 'approved2', 'dis_approved', 'status');
            if(!$isMyTimesheet){
                $actionQuery = $actionQuery->orderBy('status');
            }
            $timesheetAction = $actionQuery->first();

            $userAction['status'] = $timesheetAction->status;
            if($timesheetAction->status > 0){
                $userApproved = DB::table('gv_users')->where('id', $timesheetAction->approved1)->first();
                if($userApproved && ($userApproved->username)){
                    $userAction['approved1'] = $userApproved->username;
                }
            }
            if($timesheetAction->status > 1){
                $userApproved = DB::table('gv_users')->where('id', $timesheetAction->approved2)->first();
                if($userApproved && ($userApproved->username)){
                    $userAction['approved2'] = $userApproved->username;
                }
            }
            if($timesheetAction->status > 2){
                $userApproved = DB::table('gv_users')->where('id', $timesheetAction->dis_approved)->first();
                if($userApproved && ($userApproved->username)){
                    $userAction['dis_approved'] = $userApproved->username;
                }
            }
        }

        // if(count($groupedTimesheets) == 0 && $isMyTimesheet){
        if(count($groupedTimesheets) == 0){
            return $this->getTimesheetsDraft($input);
        } else {
            return  ['data'=>$groupedTimesheets, 'ot'=>$groupedTimesheets_ot, 'other'=>$userAction, 'action'=>'official'];
        }
    }

    public function getTimesheetsDraft($input){
        $user = Auth::user();
        $isMyTimesheet = false;
        if($input['user_id'] == 'my'){
            $input['user_id'] = $user->id;
            $isMyTimesheet = true;
        }
        $modules_table = config('core.acl.modules_table');
        $timesheet_table = 'gv_timesheets_draft';
        $project_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');

        $querys = Timesheetdraft::join($modules_table, $modules_table . '.module_id', '=', $timesheet_table . '.module_id')
            ->where($timesheet_table.'.created_user_id', '=',  $input['user_id'])
            ->where($timesheet_table.'.module_id', '=',  2)
            ->where(function($query) use ($input) {
                $query->whereBetween('start_time', [$input['start'], $input['end']])
                      ->orWhereBetween('end_time', [$input['start'], $input['end']]);
            })->select(
                $timesheet_table . '.*',
                $modules_table . '.module_name',
                $task_table . '.name as related_name',
                $project_table . '.project_name',
                $project_table . '.assign_members',
                $project_table . '.assign_to'
            )
            ->join($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->join($project_table, $project_table . '.id', '=', $task_table . '.project_id')
            ->orderBy($timesheet_table . '.id');


            $querys_ot = clone $querys;
            $timesheets = $querys->where($timesheet_table . '.ot', 0)->get();
            $timesheets_ot = $querys_ot->where($timesheet_table . '.ot', 1)->get();

            $groupedTimesheets  = $timesheets->groupBy('module_related_id')->map(function ($row) {
                return [
                    'module_related_id' => $row->first()->module_related_id,
                    'module_name' => $row->first()->module_name,
                    'assign_members' => $row->first()->assign_members,
                    'assign_to' => $row->first()->assign_to,
                    'project_name' => $row->first()->project_name,
                    'related_name' => $row->first()->related_name,
                    'status' => $row->first()->status,
                    'timesheets' => $row->map(function ($timesheet) {
                        $approved = User::where('id', $timesheet->approved1)->first();
                        return [
                            'id' => $timesheet->id,
                            'status' => $timesheet->status,
                            'approved1' => $approved ? $approved->username : null,
                            'note' => $timesheet->note,
                            'start_time' => $timesheet->start_time,
                            'decimal_time' => $timesheet->decimal_time,
                            'end_time' => $timesheet->end_time,
                        ];
                    })
                ];
            })->values();

            $groupedTimesheets_ot  = $timesheets_ot->groupBy('module_related_id')->map(function ($row) {
                return [
                    'module_related_id' => $row->first()->module_related_id,
                    'module_name' => $row->first()->module_name,
                    'assign_members' => $row->first()->assign_members,
                    'assign_to' => $row->first()->assign_to,
                    'project_name' => $row->first()->project_name,
                    'related_name' => $row->first()->related_name,
                    'status' => $row->first()->status,
                    'timesheets' => $row->map(function ($timesheet) {
                        $approved = User::where('id', $timesheet->approved1)->first();
                        return [
                            'id' => $timesheet->id,
                            'status' => $timesheet->status,
                            'approved1' => $approved ? $approved->username : null,
                            'note' => $timesheet->note,
                            'start_time' => $timesheet->start_time,
                            'decimal_time' => $timesheet->decimal_time,
                            'end_time' => $timesheet->end_time,
                        ];
                    })
                ];
            })->values();
        $userAction = [];
        $userAction['status'] = 0;
        if(count($groupedTimesheets) > 0){
            $actionQuery = DB::table('gv_timesheets_draft')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))->where('created_user_id', $input['user_id'])
            ->select('approved1', 'approved2', 'dis_approved', 'status');
            if(!$isMyTimesheet){
                $actionQuery = $actionQuery->orderBy('status');
            }
            $timesheetAction = $actionQuery->first();

            $userAction['status'] = $timesheetAction->status;
            if($timesheetAction->status > 0){
                $userApproved = DB::table('gv_users')->where('id', $timesheetAction->approved1)->first();
                if($userApproved && ($userApproved->username)){
                    $userAction['approved1'] = $userApproved->username;
                }
            }
            if($timesheetAction->status > 1){
                $userApproved = DB::table('gv_users')->where('id', $timesheetAction->approved2)->first();
                if($userApproved && ($userApproved->username)){
                    $userAction['approved2'] = $userApproved->username;
                }
            }
            if($timesheetAction->status > 2){
                $userApproved = DB::table('gv_users')->where('id', $timesheetAction->dis_approved)->first();
                if($userApproved && ($userApproved->username)){
                    $userAction['dis_approved'] = $userApproved->username;
                }
            }
        }
        return  ['data'=>$groupedTimesheets, 'ot'=>$groupedTimesheets_ot, 'other'=>$userAction, 'action'=>'draft'];
    }

    public function getTimesheetsByModule($request)
    {
        $input = $request->all();
        $modules_table = config('core.acl.modules_table');
        $timesheet_table = config('core.acl.timesheets_table');
        $project_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meetings_table = config('core.acl.meetings');

        $timesheets = Timesheet::with(
            [
            'user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            ]
        )
            ->join($modules_table, $modules_table . '.module_id', '=', $timesheet_table . '.module_id');

        if (isset($input['module_id']) && isset($input['module_related_id'])) {
            if ($input['module_id'] == 2) {
                // Task
                $timesheets->select(
                    $timesheet_table . '.*',
                    $modules_table . '.module_name',
                    $task_table . '.name as related_name',
                    $project_table . '.project_name'
                )
                    ->join($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
                    ->join($project_table, $project_table . '.id', '=', $task_table . '.project_id');
            } elseif ($input['module_id'] == 3) {
                // Defect
                $timesheets->select(
                    $timesheet_table . '.*',
                    $modules_table . '.module_name',
                    $defects_table . '.defect_name as related_name'
                )
                    ->join($defects_table, $defects_table . '.id', '=', $timesheet_table . '.module_related_id');
            } elseif ($input['module_id'] == 4) {
                // Incident
                $timesheets->select(
                    $timesheet_table . '.*',
                    $modules_table . '.module_name',
                    $incidents_table . '.incident_name as related_name'
                )
                    ->join($incidents_table, $incidents_table . '.id', '=', $timesheet_table . '.module_related_id');
            } elseif ($input['module_id'] == 5) {
                // Meeting
                $timesheets->select(
                    $timesheet_table . '.*',
                    $modules_table . '.module_name',
                    $meetings_table . '.title as related_name'
                )
                    ->join($meetings_table, $meetings_table . '.id', '=', $timesheet_table . '.module_related_id');
            }

            $timesheets->where($timesheet_table . '.module_id', $input['module_id'])
                ->where($timesheet_table . '.module_related_id', $input['module_related_id']);
        }

        return $timesheets->orderBy($timesheet_table . '.id', 'desc')->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get my timesheets]
     *
     * @return array
     */
    public function getMyTimesheets($request)
    {
        $user = Auth::user();
        $timesheet_table = config('core.acl.timesheets_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meeting_table = config('core.acl.meetings');
        $leaves_table = config('core.acl.leaves_table');

        $columns = array(
            0 => $projects_table . '.generated_id',
            1 => $timesheet_table . '.id',
            2 => $timesheet_table . '.note',
            3 => $timesheet_table . '.start_time',
            4 => $timesheet_table . '.end_time',
            5 => $timesheet_table . '.hour_time',
        );

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $timesheet = $user->timesheet()
            ->select(
                $timesheet_table . '.*',
                $projects_table . '.project_name',
                $task_table . '.name as task_name',
                $defects_table . '.defect_name',
                $incidents_table . '.incident_name',
                $meeting_table . '.title as meeting_title',
                $leaves_table . '.reason as leave_title',
                $projects_table . '.generated_id as project_generated_id',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id',
                $meeting_table . '.generated_id as meeting_generated_id'
            )
            ->leftjoin($projects_table, $projects_table . '.id', '=', $timesheet_table . '.project_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($meeting_table, $meeting_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($leaves_table, $leaves_table . '.id', '=', $timesheet_table . '.module_related_id');

        // Filter.
        if ($request->has('client_id') && !empty($request->input('client_id'))) {
            $timesheet->where($projects_table . '.client_id', $request->input('client_id'));
        }

        if ($request->has('project_ids') && !empty($request->input('project_ids'))) {
            $timesheet->whereIn($timesheet_table . '.project_id', $request->input('project_ids'));
        }

        if ($request->has('range') && !empty($request->input('range'))) {
            $range = $request->input('range');
            if ($range == 'today') {
                $filter_period = $this->commonHelper->getToday();
            } elseif ($range == 'this_month') {
                $filter_period = $this->commonHelper->getThisMonth();
            } elseif ($range == 'last_month') {
                $filter_period = $this->commonHelper->getLastMonth();
            } elseif ($range == 'this_week') {
                $filter_period = $this->commonHelper->getThisWeek();
            } elseif ($range == 'last_week') {
                $filter_period = $this->commonHelper->getLastWeek();
            } elseif ($range == 'period') {
                $filter_period = $this->commonHelper->convertPeriod($request->input('period_from'), $request->input('period_to'));
            }

            $timesheet->whereBetween($timesheet_table . '.start_time', [$filter_period['period_from'], $filter_period['period_to']]);
        }

        $totalData = $timesheet->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');
            $timesheet = $timesheet->where(
                function ($query) use ($search, $timesheet_table, $projects_table, $task_table, $defects_table, $incidents_table, $meeting_table, $leaves_table) {
                    $query->where($timesheet_table . '.start_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.end_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.note', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.hour_time', 'LIKE', "%{$search}%")
                        ->orWhere($projects_table . '.project_name', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.name', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.defect_name', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.incident_name', 'LIKE', "%{$search}%")
                        ->orWhere($meeting_table . '.title', 'LIKE', "%{$search}%")
                        ->orWhere($leaves_table . '.reason', 'LIKE', "%{$search}%")
                        ->orWhere($projects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($meeting_table . '.generated_id', 'LIKE', "%{$search}%");
                }
            );
            $totalFiltered = $timesheet->count();
        }

        $timesheet = $timesheet->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        $total['decimal_time'] = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
        $total['hour_time'] = $this->commonHelper->convertDecimalToTime($total['decimal_time']);

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $timesheet,
            "total" => $total,
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get timesheets report]
     *
     * @return array
     */
    public function getTimesheetsReport($request)
    {
        $user = Auth::user();
        $timesheet_table = config('core.acl.timesheets_table');
        $user_table = config('core.acl.users_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meeting_table = config('core.acl.meetings');
        $leaves_table = config('core.acl.leaves_table');

        $columns = array(
            0 => $user_table . '.firstname',
            1 => $projects_table . '.generated_id',
            2 => $timesheet_table . '.id',
            3 => $timesheet_table . '.note',
            4 => $timesheet_table . '.start_time',
            5 => $timesheet_table . '.end_time',
            6 => $timesheet_table . '.hour_time',
        );

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $timesheet = Timesheet::with(
            [
            'user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            ]
        )
            ->select(
                $timesheet_table . '.*',
                $projects_table . '.project_name',
                $task_table . '.name as task_name',
                $defects_table . '.defect_name',
                $incidents_table . '.incident_name',
                $meeting_table . '.title as meeting_title',
                $leaves_table . '.reason as leave_title',
                $projects_table . '.generated_id as project_generated_id',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id',
                $meeting_table . '.generated_id as meeting_generated_id'
            )
            ->join($user_table, $user_table . '.id', '=', $timesheet_table . '.created_user_id')
            ->leftjoin($projects_table, $projects_table . '.id', '=', $timesheet_table . '.project_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($meeting_table, $meeting_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($leaves_table, $leaves_table . '.id', '=', $timesheet_table . '.module_related_id');

        // Filter.
        if ($request->has('user_id') && !empty($request->input('user_id'))) {
            $timesheet->where($user_table . '.id', $request->input('user_id'));
        }

        if ($request->has('client_id') && !empty($request->input('client_id'))) {
            $timesheet->where($projects_table . '.client_id', $request->input('client_id'));
        }

        if ($request->has('project_ids') && !empty($request->input('project_ids'))) {
            $timesheet->whereIn($timesheet_table . '.project_id', $request->input('project_ids'));
        }

        if ($request->has('range') && !empty($request->input('range'))) {
            $range = $request->input('range');
            if ($range == 'today') {
                $filter_period = $this->commonHelper->getToday();
            } elseif ($range == 'this_month') {
                $filter_period = $this->commonHelper->getThisMonth();
            } elseif ($range == 'last_month') {
                $filter_period = $this->commonHelper->getLastMonth();
            } elseif ($range == 'this_week') {
                $filter_period = $this->commonHelper->getThisWeek();
            } elseif ($range == 'last_week') {
                $filter_period = $this->commonHelper->getLastWeek();
            } elseif ($range == 'period') {
                $filter_period = $this->commonHelper->convertPeriod($request->input('period_from'), $request->input('period_to'));
            }

            $timesheet->whereBetween($timesheet_table . '.start_time', [$filter_period['period_from'], $filter_period['period_to']]);
        }

        $totalData = $timesheet->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');
            $timesheet = $timesheet->where(
                function ($query) use ($search, $timesheet_table, $user_table, $projects_table, $task_table, $defects_table, $incidents_table, $meeting_table, $leaves_table) {
                    $query->where($timesheet_table . '.start_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.end_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.note', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.hour_time', 'LIKE', "%{$search}%")
                        ->orWhere($projects_table . '.project_name', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.name', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.defect_name', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.incident_name', 'LIKE', "%{$search}%")
                        ->orWhere($meeting_table . '.title', 'LIKE', "%{$search}%")
                        ->orWhere($leaves_table . '.reason', 'LIKE', "%{$search}%")
                        ->orWhere($projects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($meeting_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere(
                            DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'),
                            'LIKE',
                            "%{$search}%"
                        );
                }
            );
            $totalFiltered = $timesheet->count();
        }

        $timesheet = $timesheet->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        $total['decimal_time'] = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
        $total['hour_time'] = $this->commonHelper->convertDecimalToTime($total['decimal_time']);

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $timesheet,
            "total" => $total,
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get project timesheets]
     *
     * @return array
     */
    public function getProjectTimesheets($request)
    {
        $timesheet_table = config('core.acl.timesheets_table');
        $user_table = config('core.acl.users_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meetings_table = config('core.acl.meetings');

        $columns = array(
            0 => $user_table . '.firstname',
            1 => $timesheet_table . '.id',
            2 => $timesheet_table . '.note',
            3 => $timesheet_table . '.start_time',
            4 => $timesheet_table . '.end_time',
            5 => $timesheet_table . '.hour_time',
        );

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $timesheet = Timesheet::with(
            [
            'user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar')->withTrashed();
            },
            ]
        )
            ->select(
                $timesheet_table . '.*',
                $task_table . '.name as task_name',
                $defects_table . '.defect_name',
                $incidents_table . '.incident_name',
                $meetings_table . '.title as meeting_title',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id',
                $meetings_table . '.generated_id as meeting_generated_id'
            )
            ->join($user_table, $user_table . '.id', '=', $timesheet_table . '.created_user_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($meetings_table, $meetings_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->where($timesheet_table . '.project_id', $request->input('project_ids'));

        // Filter.
        if ($request->has('user_id') && !empty($request->input('user_id'))) {
            $timesheet->where($user_table . '.id', $request->input('user_id'));
        }

        $totalData = $timesheet->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');
            $timesheet = $timesheet->where(
                function ($query) use ($search, $timesheet_table, $user_table, $task_table, $defects_table, $incidents_table) {
                    $query->where($timesheet_table . '.start_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.end_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.note', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.hour_time', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.name', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.defect_name', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.incident_name', 'LIKE', "%{$search}%")
                        ->orWhere($meetings_table . '.title', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($meetings_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere(
                            DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'),
                            'LIKE',
                            "%{$search}%"
                        );
                }
            );
            $totalFiltered = $timesheet->count();
        }

        $timesheet = $timesheet->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        $total['decimal_time'] = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
        $total['hour_time'] = $this->commonHelper->convertDecimalToTime($total['decimal_time']);

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $timesheet,
            "total" => $total,
        );
    }

    public function getHolidaysLeavesForUser($request){
        $user = Auth::user();
        $input = $request->all();
        if($input['users_id'] == 'my'){
            $input['users_id'] = $user->id;
        }
        $holidays = Holiday::where('date', '>=', $input['start'])
            ->where('date', '<=', $input['end'])
            ->get();

        $leavesQuery = Leave::with(
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
        )->where('leave_date', '>=', $input['start'])
        ->where('leave_date', '<=', $input['end'])
        ->where('leave_type_id', '<', 3)
        ->whereIn('status', [1, 2, 6])->where('user_id', $input['users_id']);

        $leaves = $leavesQuery->select('*', DB::raw('DATE_FORMAT(leave_date, "%Y-%m-%d") as formatted_date'))->get();
        return ['holidays'=>$holidays, 'leaves'=>$leaves];
    }

    public function disapprovedTimesheet($request){
        $user = Auth::user();
        $input = $request->all();
        if($input['users_id'] == 'my'){
            $input['users_id'] = $user->id;
        }
        $user = Auth::user();
        // $department = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $user->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();

        $dataUpdate = ['dis_approved'=>$user->id, 'status'=>3];
        DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
        ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))
        ->where('created_user_id', $input['users_id'])->update($dataUpdate);
        $this->emailRepo->sendRejectTimesheetEmails($user);
        return true;
    }

    public function approvedTimesheet($request){
        $user = Auth::user();
        $input = $request->all();
        if($input['users_id'] == 'my'){
            $input['users_id'] = $user->id;
        }
        $user = Auth::user();
        // $department = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $user->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();

        // if($contract){
            // $dataUpdate = [];
            $queryTimeSheet = Timesheet::where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))
            ->where('created_user_id', $input['users_id']);
            if(!is_null($input['task_id']) && $input['task_id'] > 0){
                $queryTimeSheet->where('module_related_id', $input['task_id']);
            } else {
                $department = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $user->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
                if($department->department_name != 'Administration' && $department->department_name != 'HR' && $department->department_name != 'BOD'){
                    $tasksList = Project::join('gv_tasks', 'gv_projects.id', '=',  'gv_tasks.project_id')
                    ->where('gv_projects.assign_to', $user->id)->pluck('gv_tasks.id');
                    $queryTimeSheet->whereIn('module_related_id', $tasksList);
                }
            }
            $checkTimeSheet = clone($queryTimeSheet);
            $checkTimeSheet = $checkTimeSheet->orderBy('status')->get();
            $setting = Setting::select(
                [
                'login_background', 'company_logo', 'theme_layout', 'default_language', 'allowed_for_registration', 'is_demo', 'working_hours', 'ot_rate', 'holiday_rate', 'sunday_rate'
                ]
            )->first();
            foreach ($checkTimeSheet as $key => $value) {
                $timesheet = Timesheet::find($value->id);

                $contract = DB::table('gv_users_contract')
                ->where('user_id', $input['users_id'])
                ->where('start_date', '<=', date('y-m-d', strtotime($timesheet->start_time)))
                ->where('end_date', '>=', date('y-m-d', strtotime($timesheet->start_time)))
                ->orderBy('id', 'desc')->first();

                if($contract){
                } else {
                    Timesheet::where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
                    ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))
                    ->where('created_user_id', $input['users_id'])->update(['status'=>0]);
                    return false;
                }
                if($checkTimeSheet[0]->status == 0 && $timesheet->status == 1){

                } else {
                    $dayInMonth = $this->getWeekdaysInMonthFromDate($timesheet->start_time);
                    $cost = round($contract->salary/$dayInMonth*$timesheet->decimal_time/$setting->working_hours);
                    $timesheet->cost = $cost*$timesheet->ot_rate;
                    if($checkTimeSheet[0]->status == 0){
                        $timesheet->approved1 = $user->id;
                        $timesheet->status = 1;
                        // $department_role = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')
                        // ->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $input['users_id'])
                        // ->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
                        // if($department_role->department_name == 'HR' || ($department_role->department_name == 'Project' && $department_role->role_name == 'Manager')){
                        //     $timesheet->approved2 = $user->id;
                        //     $timesheet->status = 2;
                        // }
                    }
                    if($checkTimeSheet[0]->status == 1){
                        $department_role = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')
                        ->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id',  $user->id)
                        ->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
                        if($department_role->department_name != 'HR' && $department_role->department_name != 'BOD' && $department_role->department_name != 'Administration' ){
                            return false;
                        }
                        $timesheet->approved2 = $user->id;
                        $timesheet->status = 2;
                    }
                    $timesheet->save();
                }
            }
            // DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
            // ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))
            // ->where('created_user_id', $input['users_id'])->update($dataUpdate);



            $tasks = DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))
            ->where('created_user_id', $input['users_id'])->groupBy('module_related_id')->pluck('module_related_id');
            foreach ($tasks as $key => $value) {
                $task = Task::find($value);
                if ($task) {
                    $task->cost = Timesheet::where('module_id', 2)->where('module_related_id', $task->id)->sum('cost');
                    $task->save();
                }
            }
            $timesheetWaiting = DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))
            ->where('created_user_id', $input['users_id'])->where('status', 1)->count();
            $timesheetTotal= DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['end']. ' 23:59:59')))
            ->where('created_user_id', $input['users_id'])->count();
            if($timesheetWaiting == $timesheetTotal){
                $this->emailRepo->sendApprovedTimesheetEmails($input['users_id']);
            }

            return true;
        // } else {
        //     return false;
        // }
        return true;
    }
    public function getWeekdaysInMonthFromDate($date) {
        $timestamp = strtotime($date);
        $month = date('m', $timestamp);
        $year = date('Y', $timestamp);

        $totalDays = cal_days_in_month(CAL_GREGORIAN, $month, $year);
        $weekdays = 0;

        for ($day = 1; $day <= $totalDays; $day++) {
            $currentDate = sprintf('%04d-%02d-%02d', $year, $month, $day);
            $dayOfWeek = date('N', strtotime($currentDate));

            if ($dayOfWeek < 6) {
                $weekdays++;
            }
        }

        return $weekdays;
    }

    public function updateCost($timesheet, $setting, $type_ot){
        $user = Auth::user();
        $contract = DB::table('gv_users_contract')
            ->where('user_id', $user->id)
            ->where('start_date', '<=', date('y-m-d', strtotime($timesheet->start_time)))
            ->where('end_date', '>=', date('y-m-d', strtotime($timesheet->start_time)))
            ->orderBy('id', 'desc')->first();
        if($contract){
            $dayInMonth = $this->getWeekdaysInMonthFromDate($timesheet->start_time);
            $cost = round($contract->salary/$dayInMonth*$timesheet->decimal_time/$setting->working_hours);
            $timesheet = Timesheet::findOrFail($timesheet->id);
            $rate = 1;
            if(date("l", strtotime($timesheet->start_time)) == 'Sunday'){
                $rate = $setting->sunday_rate;
            }
            $checkHoliday = Holiday::where('date', date("Y-m-d", strtotime($timesheet->start_time)))->count();
            // $checkHoliday = DB::table('gv_holidays')->where('date', date("Y-m-d", strtotime($timesheet->start_time)))->whereNull('deleted_at')->count();
            if($checkHoliday > 0){
                $rate = $setting->holiday_rate;
            }

            if($type_ot == 1){
                if($rate==1){
                    $cost_rate = round($cost *$setting->ot_rate);
                    $ot_rate = $setting->ot_rate;
                } else {
                    $cost_rate = round($cost *$rate);
                    $ot_rate = $rate;
                }
                $dataUpdate = [ 'ot'=>$type_ot, 'ot_rate' => $ot_rate, 'cost' => $cost_rate ];
            } else {
                $cost_rate = round($cost *$rate);
                $dataUpdate = ['cost'=>$cost_rate, 'ot_rate'=>$rate];
            }
            $timesheet->fill($dataUpdate);
            $timesheet->save();
            DB::table('gv_users_contract')->where('id', $contract->id)->update(['status'=> 1]);
        } else {
            $dayInMonth = $this->getWeekdaysInMonthFromDate($timesheet->start_time);
            $timesheet = Timesheet::findOrFail($timesheet->id);
            $rate = 1;
            if(date("l", strtotime($timesheet->start_time)) == 'Sunday'){
                $rate = $setting->sunday_rate;
            }
            $checkHoliday = Holiday::where('date', date("Y-m-d", strtotime($timesheet->start_time)))->count();
            // $checkHoliday = DB::table('gv_holidays')->where('date', date("Y-m-d", strtotime($timesheet->start_time)))->whereNull('deleted_at')->count();
            if($checkHoliday > 0){
                $rate = $setting->holiday_rate;
            }
            if($type_ot == 1){
                if($rate==1){
                    $ot_rate = $setting->ot_rate;
                } else {
                    $ot_rate = $rate;
                }
                $dataUpdate = [ 'ot'=>$type_ot, 'ot_rate' => $ot_rate];
                $timesheet->fill($dataUpdate);
                $timesheet->save();
            } else {
                $dataUpdate = ['ot_rate' => $rate];
                $timesheet->fill($dataUpdate);
                $timesheet->save();
            }
            return;
        }
        return;
    }
    public function saveTimesheet($request){
        $user = Auth::user();
        $input = $request->all();
        $setting = Setting::select(
            [
            'login_background', 'company_logo', 'theme_layout', 'default_language', 'allowed_for_registration', 'is_demo', 'working_hours', 'ot_rate', 'holiday_rate', 'sunday_rate'
            ]
        )->first();
        if($input['action'] == 'draft'){
            $checkApproved = DB::table('gv_timesheets')->where('module_id', 2)->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['rangeDate']['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['rangeDate']['end']. ' 23:59:59')))->where('created_user_id', $user->id)->whereIn('status', [1,2])->first();
            if($checkApproved){
                return false;
            }
            DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['rangeDate']['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['rangeDate']['end']. ' 23:59:59')))->where('created_user_id', $user->id)->delete();
            DB::table('gv_timesheets_draft')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['rangeDate']['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['rangeDate']['end']. ' 23:59:59')))->where('created_user_id', $user->id)->delete();
            $this->saveTimesheetExecuteDraft($request, $input['data'], 0, $user, $setting);
            $this->saveTimesheetExecuteDraft($request, $input['ot'], 1, $user, $setting);
            return true;
        } else {
            $checkApproved = DB::table('gv_timesheets')->where('module_id', 2)->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['rangeDate']['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['rangeDate']['end']. ' 23:59:59')))->where('created_user_id', $user->id)->whereIn('status', [1,2])->first();
            if($checkApproved){
                return false;
            }
            DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['rangeDate']['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['rangeDate']['end']. ' 23:59:59')))->where('created_user_id', $user->id)->delete();
            DB::table('gv_timesheets_draft')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['rangeDate']['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['rangeDate']['end']. ' 23:59:59')))->where('created_user_id', $user->id)->delete();

            $this->saveTimesheetExecute($request, $input['data'], 0, $user, $setting);
            $this->saveTimesheetExecute($request, $input['ot'], 1, $user, $setting);
            $listProject = DB::table('gv_timesheets')->where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['rangeDate']['start']. ' 00:00:00')))
            ->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['rangeDate']['end']. ' 23:59:59')))
            ->where('created_user_id', $user->id)->where('status', 0)->groupBy('project_id')->pluck('project_id');
            if(count($listProject) > 0){
                $this->emailRepo->sendSaveTimesheetEmails($listProject, $user);
            }
            return true;
        }
    }

    public function saveTimesheetExecute($request, $timesheetData, $type_ot, $user, $setting){
        foreach($timesheetData as $value){
            $data = [];
            $data['project_id'] = Project::join('gv_tasks', 'gv_projects.id', '=',  'gv_tasks.project_id')->where('gv_tasks.id', $value['task_id'])->pluck('gv_projects.id')[0];
            $data['created_user_id'] = $user->id;
            $data['start_time'] = $value['start_time'];
            $data['end_time'] = $value['end_time'];
            $data['note'] = isset($value['note']) ? $value['note'] : '';
            $data['decimal_time'] = $this->commonHelper->getDecimalTimeDiff($value['start_time'], $value['end_time']);
            $data['hour_time'] = $this->commonHelper->getHourTimeDiff($value['start_time'], $value['end_time']);
            $data['module_id'] = 2;
            $data['module_related_id'] = $value['task_id'];
            if(!isset($value['id']) || !($value['id'])){
                $timesheet = new Timesheet;
                $timesheet->fill($data);
                if ($timesheet->save()) {
                    $this->updateCost($timesheet, $setting, $type_ot);
                    if (!empty($timesheet->module_related_id)) {
                        // Update task, defect, incident start date, end date and actual hours.
                        if (in_array($timesheet->module_id, [2, 3, 4])) {
                            $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                            $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                            if ($timesheet->module_id == 2) {
                                $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                            }
                        }

                        // Update project actual hours.
                        if ($timesheet->project_id) {
                            $this->_updateProject($timesheet->project_id);
                        }

                    }
                    // --
                    // Add activities.
                    createUserActivity(
                        Timesheet::MODULE_NAME,
                        $timesheet->id,
                        $request->method(),
                        $timesheet->note,
                        $request->ip()
                    );
                }
            } else {
                $timesheet = Timesheet::findOrFail($value['id']);
                $timesheet->fill($data);
                if ($timesheet->save()) {
                    $this->updateCost($timesheet, $setting, $type_ot);
                    if (!empty($timesheet->module_related_id)) {

                        // Update task, defect, incident start date, end date and actual hours.
                        if (in_array($timesheet->module_id, [2, 3, 4])) {
                            $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                            $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                            if ($timesheet->module_id == 2) {
                                $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                            }
                        }

                        // Update project actual hours.
                        if ($timesheet->project_id) {
                            $this->_updateProject($timesheet->project_id);
                        }
                    }
                    // --
                    // Add activities
                    createUserActivity(
                        Timesheet::MODULE_NAME,
                        $timesheet->id,
                        $request->method(),
                        $timesheet->note,
                        $request->ip()
                    );
                }
            }
        }
        return;
    }

    public function saveTimesheetExecuteDraft($request, $timesheetData, $type_ot, $user, $setting){
        foreach($timesheetData as $value){
            $data = [];
            $data['project_id'] = Project::join('gv_tasks', 'gv_projects.id', '=',  'gv_tasks.project_id')->where('gv_tasks.id', $value['task_id'])->pluck('gv_projects.id')[0];
            $data['created_user_id'] = $user->id;
            $data['start_time'] = $value['start_time'];
            $data['end_time'] = $value['end_time'];
            $data['note'] = isset($value['note']) ? $value['note'] : '';
            $data['decimal_time'] = $this->commonHelper->getDecimalTimeDiff($value['start_time'], $value['end_time']);
            $data['hour_time'] = $this->commonHelper->getHourTimeDiff($value['start_time'], $value['end_time']);
            $data['module_id'] = 2;
            $data['module_related_id'] = $value['task_id'];
            $data['ot'] = $type_ot;
            if (!isset($value['id']) || !$value['id']) {
                DB::table('gv_timesheets_draft')->insert($data);
            } else {
                DB::table('gv_timesheets_draft')
                    ->where('id', $value['id'])
                    ->update($data);
            }
        }
        return;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request    [Request for create timesheet]
     * @param Array   $inputArray [Input array for create timesheet]
     *
     * @return Boolean
     */
    public function create($request, $inputArray = [])
    {
        $user = Auth::user();
        $timesheet = new Timesheet;

        if (!empty($inputArray)) {
            $input = $inputArray;
        } else {
            $input = $request->all();
        }

        $input['created_user_id'] = $user->id;
        $input['decimal_time'] = $this->commonHelper->getDecimalTimeDiff($input['start_time'], $input['end_time']);
        $input['hour_time'] = $this->commonHelper->getHourTimeDiff($input['start_time'], $input['end_time']);
        $timesheet->fill($input);
        if ($timesheet->save()) {
            if (!empty($timesheet->module_related_id)) {

                // Update project actual hours.
                if ($timesheet->project_id) {
                    $this->_updateProject($timesheet->project_id);
                }

                // Update task, defect, incident start date, end date and actual hours.
                if (in_array($timesheet->module_id, [2, 3, 4])) {
                    $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                    $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                    if ($timesheet->module_id == 2) {
                        // Task...
                        $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 3) {
                        // Defect...
                        $this->_updateDefect($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 4) {
                        // Incident...
                        $this->_updateIncident($timesheet->module_related_id, $date, $total_hours);
                    }
                }
            }

            // --
            // Add activities.
            createUserActivity(
                Timesheet::MODULE_NAME,
                $timesheet->id,
                $request->method(),
                $timesheet->note,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update timesheet]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function update($request, $id)
    {
        $input = $request->all();
        $timesheet = Timesheet::findOrFail($id);
        $input['decimal_time'] = $this->commonHelper->getDecimalTimeDiff($input['start_time'], $input['end_time']);
        $input['hour_time'] = $this->commonHelper->getHourTimeDiff($input['start_time'], $input['end_time']);
        $timesheet->fill($input);
        if ($timesheet->save()) {
            if (!empty($timesheet->module_related_id)) {

                // Update project actual hours.
                if ($timesheet->project_id) {
                    $this->_updateProject($timesheet->project_id);
                }

                // Update task, defect, incident start date, end date and actual hours.
                if (in_array($timesheet->module_id, [2, 3, 4])) {
                    $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                    $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                    if ($timesheet->module_id == 2) {
                        // Task...
                        $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 3) {
                        // Defect...
                        $this->_updateDefect($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 4) {
                        // Incident...
                        $this->_updateIncident($timesheet->module_related_id, $date, $total_hours);
                    }
                }
            }

            // --
            // Add activities
            createUserActivity(
                Timesheet::MODULE_NAME,
                $timesheet->id,
                $request->method(),
                $timesheet->note,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete timesheet]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function delete($request, $id)
    {
        $timesheet = Timesheet::findOrFail($id);
        if ($timesheet->delete()) {
            if (!empty($timesheet->module_related_id)) {

                // Update project actual hours.
                if ($timesheet->project_id) {
                    $this->_updateProject($timesheet->project_id);
                }

                // Update task, defect, incident start date, end date and actual hours.
                if (in_array($timesheet->module_id, [2, 3, 4])) {
                    $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                    $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                    if ($timesheet->module_id == 2) {
                        // Task...
                        $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 3) {
                        // Defect...
                        $this->_updateDefect($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 4) {
                        // Incident...
                        $this->_updateIncident($timesheet->module_related_id, $date, $total_hours);
                    }
                }
            }
            // --
            // Add activities
            createUserActivity(
                Timesheet::MODULE_NAME,
                $timesheet->id,
                $request->method(),
                $timesheet->note,
                $request->ip()
            );
            return true;
        } else {
            return false;
        }
    }

    /**
     * Get min and max date.
     *
     * @param Int $module_id         [Module id]
     * @param Int $module_related_id [Module related id]
     *
     * @return array
     */
    private function _getStartEndDate($module_id, $module_related_id)
    {
        $first = Timesheet::where('module_id', $module_id)
            ->where('module_related_id', $module_related_id)
            ->orderBy('start_time', 'asc')
            ->first();

        $last = Timesheet::where('module_id', $module_id)
            ->where('module_related_id', $module_related_id)
            ->orderBy('end_time', 'desc')
            ->first();

        return [
            'start_time' => empty($first) ? null : $first->start_time,
            'end_time' => empty($last) ? null : $last->end_time,
        ];
    }

    /**
     * Get specific task, defect, incident total hours.
     *
     * @param Int $module_id         [Module id]
     * @param Int $module_related_id [Module related id]
     *
     * @return array
     */
    private function _getTotalHours($module_id, $module_related_id)
    {
        // $total_hours = Timesheet::selectRaw('module_related_id,TIME_FORMAT(time(sum(TIMEDIFF( end_time, start_time ))),"%H:%i") as total')
        //     ->where('module_id', $module_id)
        //     ->where('module_related_id', $module_related_id)
        //     ->groupBy('module_related_id')
        //     ->first();
        // return empty($total_hours) ? null : $total_hours->total;

        $timesheet = Timesheet::where('module_id', $module_id)
            ->where('module_related_id', $module_related_id)
            ->get();
        $decimal_time = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
        return $this->commonHelper->convertDecimalToTime($decimal_time);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Int $project_id [Project id]
     *
     * @return void
     */
    private function _updateProject($project_id)
    {
        // DB::enableQueryLog();
        // $total_hours = Timesheet::selectRaw('project_id,TIME_FORMAT(time(sum(TIMEDIFF( end_time, start_time ))),"%H:%i") as total')
        //     ->where('project_id', $project_id)
        //     ->groupBy('project_id')
        //     ->first();
        // $query = DB::getQueryLog();
        // print_r($query);

        $project = Project::find($project_id);
        if ($project) {

            $timesheet = Timesheet::where('project_id', $project_id)->get();
            $decimal_time = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
            $cost = array_sum(array_column($timesheet->toArray(), 'cost'));
            $actual_hours = $this->commonHelper->convertDecimalToTime($decimal_time);

            $project->cost = $cost;
            $project->save();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Int    $module_related_id [Task id]
     * @param Array  $date              [Update date]
     * @param String $total_hours       [Total hours]
     *
     * @return void
     */
    private function _updateTask($module_related_id, $date, $total_hours)
    {
        $task = Task::find($module_related_id);
        if ($task) {
            $task->cost = Timesheet::where('module_id', 2)->where('module_related_id', $task->id)->sum('cost');
            $task->task_start_date = $date['start_time'];
            $task->task_end_date = $date['end_time'];
            $task->actual_hours = $total_hours;
            $task->save();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Int    $module_related_id [Task id]
     * @param Array  $date              [Update date]
     * @param String $total_hours       [Total hours]
     *
     * @return void
     */
    private function _updateDefect($module_related_id, $date, $total_hours)
    {
        $defect = Defect::find($module_related_id);
        if ($defect) {
            $defect->start_date = $date['start_time'];
            $defect->end_date = $date['end_time'];
            $defect->actual_hours = $total_hours;
            $defect->save();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Int    $module_related_id [Task id]
     * @param Array  $date              [Update date]
     * @param String $total_hours       [Total hours]
     *
     * @return void
     */
    private function _updateIncident($module_related_id, $date, $total_hours)
    {
        $incident = Incident::find($module_related_id);
        if ($incident) {
            $incident->start_date = $date['start_time'];
            $incident->end_date = $date['end_time'];
            $incident->actual_hours = $total_hours;
            $incident->save();
        }
    }

    /**
     * Check user permission.
     *
     * @param Int $timesheet_id [Timesheet Id]
     *
     * @return Boolean
     */
    public function checkPermission($timesheet_id)
    {
        $user = Auth::user();
        if ($user->hasRole('admin') || $user->is_super_admin) {
            return true;
        } else {
            $timesheet = Timesheet::where('id', $timesheet_id)
                ->where('created_user_id', $user->id)
                ->first();

            if ($timesheet) {
                return true;
            }
        }
        return false;
    }
}
