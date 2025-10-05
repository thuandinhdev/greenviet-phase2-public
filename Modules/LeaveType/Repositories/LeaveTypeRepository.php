<?php

namespace Modules\LeaveType\Repositories;

use Modules\LeaveType\Entities\LeaveType;
use DB;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\Projects\Entities\Project;

/**
 * Class LeaveTypeRepository
 *
 * Leave type CRUD functionality
 *
 * Leave type create, update, delete and view
 *
 * PHP version 8.0
 *
 * @category  HRM
 * @package   Modules\LeaveType
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class LeaveTypeRepository
{
    /**
     * Display a listing of the resource.
     *
     * @return Object
     */
    public function findAll()
    {
        $work_allowance = DB::table('gv_work_allowance')->where('is_delete', 0)->select('id', 'label', 'value')->get();
        $leaveType = LeaveType::All();
        $projects = Project::where('status', 2)->get();
        return ['leaveType'=>$leaveType, 'work_allowance'=>$work_allowance, 'projects'=>$projects];
    }

    /**
     * Display a leave type of the resource.
     *
     * @param Int $id [Row id]
     *
     * @return Object
     */
    public function findById($id)
    {
        return LeaveType::findOrFail($id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Request for create leave type]
     *
     * @return Boolean
     */
    public function create($request)
    {
        $input = $request->all();
        $leaveType = new LeaveType;
        if ($leaveType->fill($input)->save()) {
            // --
            // Add activities
            createUserActivity(
                LeaveType::MODULE_NAME,
                $leaveType->id,
                $request->method(),
                $leaveType->leave_type,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update leave type]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function update($request, $id)
    {
        $input = $request->all();
        $leaveType = LeaveType::findOrFail($id);
        if ($leaveType->fill($input)->save()) {
            // --
            // Add activities
            createUserActivity(
                LeaveType::MODULE_NAME,
                $leaveType->id,
                $request->method(),
                $leaveType->leave_type,
                $request->ip()
            );
            return true;
        } else {
            return false;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete leave type]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function delete($request, $id)
    {
        $leaveType = LeaveType::findOrFail($id);

        if ($leaveType->delete()) {
            // --
            // Add activities
            createUserActivity(
                LeaveType::MODULE_NAME,
                $leaveType->id,
                $request->method(),
                $leaveType->leave_type,
                $request->ip()
            );
            return true;
        }
        return false;
    }
}
