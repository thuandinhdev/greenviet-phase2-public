<?php
namespace Modules\Marketing\Repositories;

use Auth;
use Modules\Marketing\Entities\Marketing;
use Modules\User\Entities\User\User;

/**
 * Class MarketingRepository
 *
 * Marketing create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Marketing
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class MarketingRepository
{

    /**
     * Display a listing of the resource.
     *
     * @return Object
     */
    public function findAll()
    {
        $user = Auth::user();
        return $user->marketing()->get();
    }

    /**
     * Get the specified resource from storage
     *
     * @param Int $id [Row id]
     *
     * @return Object
     */
    public function findById($id)
    {
        return Marketing::findOrFail($id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Request for create marketing]
     *
     * @return Boolean
     */
    public function create($request)
    {
        $input = $request->all();
        $user = Auth::user();
        $marketing = new Marketing;
        $input['order'] = Marketing::count();
        $marketing->fill($input);
        if ($user->marketing()->save($marketing)) {
            // --
            // Add activities
            createUserActivity(
                Marketing::MODULE_NAME,
                $marketing->id,
                $request->method(),
                $marketing->description,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update marketing]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function update($request, $id)
    {
        $input = $request->all();
        $marketing = Marketing::findOrFail($id);
        $marketing->fill($input);
        if ($marketing->save()) {
            // --
            // Add activities
            createUserActivity(
                Marketing::MODULE_NAME,
                $marketing->id,
                $request->method(),
                $marketing->description,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete marketing]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function delete($request, $id)
    {
        $marketing = Marketing::findOrFail($id);
        if ($marketing->delete()) {
            // --
            // Add activities
            createUserActivity(
                Marketing::MODULE_NAME,
                $marketing->id,
                $request->method(),
                $marketing->description,
                $request->ip()
            );
            return true;
        } else {
            return false;
        }
    }

    /**
     * Display a listing of the resource for list.
     *
     * @param Request $request [Params for list marketings]
     *
     * @return Object
     */
    public function getMarketings($request)
    {
        $marketing_table = config('core.acl.marketings_table');
        $modules_table = config('core.acl.modules_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');

        $user = Auth::user();
        $open_marketings = $user->marketing()
            ->select(
                $marketing_table . '.id',
                $marketing_table . '.module_id',
                $marketing_table . '.module_related_id',
                $marketing_table . '.description',
                $marketing_table . '.due_date',
                $marketing_table . '.status',
                $modules_table . '.module_name',
                $projects_table . '.generated_id as project_generated_id',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id'
            )
            ->join($modules_table, $modules_table . '.module_id', '=', $marketing_table . '.module_id')
            ->leftjoin($projects_table, $projects_table . '.id', '=', $marketing_table . '.module_related_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $marketing_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $marketing_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $marketing_table . '.module_related_id')
            ->where($marketing_table . '.status', 1);

        $completed_marketings = $user->marketing()
            ->select(
                $marketing_table . '.id',
                $marketing_table . '.module_id',
                $marketing_table . '.module_related_id',
                $marketing_table . '.description',
                $marketing_table . '.due_date',
                $marketing_table . '.status',
                $modules_table . '.module_name',
                $projects_table . '.generated_id as project_generated_id',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id'
            )
            ->join($modules_table, $modules_table . '.module_id', '=', $marketing_table . '.module_id')
            ->leftjoin($projects_table, $projects_table . '.id', '=', $marketing_table . '.module_related_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $marketing_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $marketing_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $marketing_table . '.module_related_id')
            ->where($marketing_table . '.status', 2);

        if ($request->has('module_id') && $request->has('module_related_id')) {
            $module_id = $request->get('module_id');
            $module_related_id = $request->get('module_related_id');

            $open_marketings->where($marketing_table . '.module_id', $module_id)
                ->where($marketing_table . '.module_related_id', $module_related_id);

            $completed_marketings->where($marketing_table . '.module_id', $module_id)
                ->where($marketing_table . '.module_related_id', $module_related_id);
        }

        if ($request->has('length')) {
            $completed_marketings = $completed_marketings->take($request->get('length'));
        }

        return collect(
            [
            'open' => $open_marketings->orderBy($marketing_table . '.order', 'asc')->get(),
            'completed' => $completed_marketings->orderBy($marketing_table . '.order', 'asc')->get(),
            ]
        );
    }

    /**
     * Update the specified resource.
     *
     * @param Request $request [Request for update marketing list]
     *
     * @return Boolean
     */
    public function updateList($request)
    {
        $input = $request->all();
        foreach ($input['open'] as $key => $value) {
            $marketing = Marketing::findOrFail($value['id']);
            $marketing->status = 1;
            $marketing->order = $key;
            $marketing->save();
        }
        foreach ($input['completed'] as $key => $value) {
            $marketing = Marketing::findOrFail($value['id']);
            $marketing->status = 2;
            $marketing->order = $key;
            $marketing->save();
        }
        return true;
    }
}
