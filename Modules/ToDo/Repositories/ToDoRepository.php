<?php
namespace Modules\ToDo\Repositories;

use Auth;
use Modules\ToDo\Entities\ToDo;
use Modules\User\Entities\User\User;
use Carbon\Carbon;
use DB;

/**
 * Class ToDoRepository
 *
 * ToDo create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\ToDo
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class ToDoRepository
{

    /**
     * Display a listing of the resource.
     *
     * @return Object
     */
    public function findAll()
    {
        $user = Auth::user();
        return $user->toDo()->get();
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
        return ToDo::findOrFail($id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Request for create todo]
     *
     * @return Boolean
     */
    public function create($request)
    {
        $input = $request->all();
        $user = Auth::user();
        $todo = new ToDo;
        $input['order'] = ToDo::count();
        $todo->fill($input);
        if ($user->toDo()->save($todo)) {
            // --
            // Add activities
            createUserActivity(
                Todo::MODULE_NAME,
                $todo->id,
                $request->method(),
                $todo->description,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update todo]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function update($request, $id)
    {
        $input = $request->all();
        $todo = ToDo::findOrFail($id);
        $todo->fill($input);
        if ($todo->save()) {
            // --
            // Add activities
            createUserActivity(
                Todo::MODULE_NAME,
                $todo->id,
                $request->method(),
                $todo->description,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete todo]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function delete($request, $id)
    {
        $todo = ToDo::findOrFail($id);
        if ($todo->delete()) {
            // --
            // Add activities
            createUserActivity(
                Todo::MODULE_NAME,
                $todo->id,
                $request->method(),
                $todo->description,
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
     * @param Request $request [Params for list todos]
     *
     * @return Object
     */
    public function getTodos($request)
    {
        $todo_table = config('core.acl.todos_table');
        $modules_table = config('core.acl.modules_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');

        $user = Auth::user();
        $open_todos = $user->toDo()
            ->select(
                $todo_table . '.id',
                $todo_table . '.module_id',
                $todo_table . '.module_related_id',
                $todo_table . '.description',
                $todo_table . '.price',
                $todo_table . '.due_date',
                $todo_table . '.payment_date',
                $todo_table . '.status',
                $modules_table . '.module_name',
                $projects_table . '.generated_id as project_generated_id',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id'
            )
            ->join($modules_table, $modules_table . '.module_id', '=', $todo_table . '.module_id')
            ->leftjoin($projects_table, $projects_table . '.id', '=', $todo_table . '.module_related_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $todo_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $todo_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $todo_table . '.module_related_id')
            ->where($todo_table . '.status', 1);

        $completed_todos = $user->toDo()
            ->select(
                $todo_table . '.id',
                $todo_table . '.module_id',
                $todo_table . '.module_related_id',
                $todo_table . '.description',
                $todo_table . '.due_date',
                $todo_table . '.payment_date',
                $todo_table . '.price',
                $todo_table . '.status',
                $modules_table . '.module_name',
                $projects_table . '.generated_id as project_generated_id',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id'
            )
            ->join($modules_table, $modules_table . '.module_id', '=', $todo_table . '.module_id')
            ->leftjoin($projects_table, $projects_table . '.id', '=', $todo_table . '.module_related_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $todo_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $todo_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $todo_table . '.module_related_id')
            ->where($todo_table . '.status', 2);

        if ($request->has('module_id')!= 'all' && $request->has('module_id') && $request->has('module_related_id')) {
            $module_id = $request->get('module_id');
            $module_related_id = $request->get('module_related_id');

            $open_todos->where($todo_table . '.module_id', $module_id)
                ->where($todo_table . '.module_related_id', $module_related_id);

            $completed_todos->where($todo_table . '.module_id', $module_id)
                ->where($todo_table . '.module_related_id', $module_related_id);
        }

        if ($request->has('length')) {
            $completed_todos = $completed_todos->take($request->get('length'));
        }

        return collect(
            [
            'open' => $open_todos->orderBy($todo_table . '.order', 'asc')->get(),
            'completed' => $completed_todos->orderBy($todo_table . '.order', 'asc')->get(),
            ]
        );
    }
    public function listReport($request)
    {
        $input = $request->all();
        $todo_table = config('core.acl.todos_table');
        // $modules_table = config('core.acl.modules_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        if(isset($input['project']) && $input['project']){
            $ids = array_column($input['project'], 'id');
        } else {
            $ids = [];
        }
        if(isset($input['leader']) && $input['leader']){
            $leaderids = array_column($input['leader'], 'id');
        } else {
            $leaderids = [];
        }
        $user = Auth::user();
        $open_todos = $user->toDo()
            ->select(
                $todo_table . '.id',
                $todo_table . '.module_id',
                $todo_table . '.module_related_id',
                $todo_table . '.description',
                $todo_table . '.price',
                $todo_table . '.due_date',
                $todo_table . '.payment_date',
                $todo_table . '.estimated_date',
                $todo_table . '.cash_flow',
                $todo_table . '.invoice_date',
                $todo_table . '.status',
                // $modules_table . '.module_name',
                $projects_table . '.project_name as project_name',
                // $projects_table . '.generated_id as project_generated_id',
                // $task_table . '.generated_id as task_generated_id',
                // $defects_table . '.generated_id as defect_generated_id',
                // $incidents_table . '.generated_id as incident_generated_id'
            )
            // ->join($modules_table, $modules_table . '.module_id', '=', $todo_table . '.module_id')
            ->leftjoin($projects_table, $projects_table . '.id', '=', $todo_table . '.module_related_id')
            // ->leftjoin($task_table, $task_table . '.id', '=', $todo_table . '.module_related_id')
            // ->leftjoin($defects_table, $defects_table . '.id', '=', $todo_table . '.module_related_id')
            // ->leftjoin($incidents_table, $incidents_table . '.id', '=', $todo_table . '.module_related_id')
            ->whereIn($todo_table . '.status', [1,2])->when(!empty($ids), function ($q) use ($ids) {
                $q->whereIn('module_related_id', $ids);
            })->when(!empty($leaderids), function ($q) use ($leaderids) {
                $q->whereIn('gv_projects.assign_to', $leaderids);
            });
        if(isset($input['filterKey'])){
            if($input['filterKey'] == 'year'){
                $startOfMonth = Carbon::createFromFormat('Y-m', $input['year'].'-01')->startOfMonth();
                $endOfMonth   = Carbon::createFromFormat('Y-m', $input['year'].'-12')->endOfMonth();
            } else {
                if(isset($input['rangerMonth'])){
                    $startOfMonth = Carbon::createFromFormat('Y-m', $input['rangerMonth']['start'])->startOfMonth();
                    $endOfMonth   = Carbon::createFromFormat('Y-m', $input['rangerMonth']['end'])->endOfMonth();
                } else {
                    if(isset($input['selectedRange'])){
                        $startOfMonth = Carbon::createFromFormat('Y-m-d', $input['selectedRange']['start']);
                        $endOfMonth   = Carbon::createFromFormat('Y-m-d', $input['selectedRange']['end']);
                    } else {
                        $startOfMonth = Carbon::createFromFormat('Y-m', $input['month'])->startOfMonth();
                        $endOfMonth   = Carbon::createFromFormat('Y-m', $input['month'])->endOfMonth();
                    }
                }
            }
            
            switch ($input['filterKey']) {
                case 'success':
                    $open_todos->whereNotNull($todo_table . '.payment_date');
                    if ($input['month'] && $input['month'] != 'all') {
                        $open_todos->whereBetween($todo_table . '.payment_date', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')])->orderBy($todo_table . '.payment_date', 'desc');
                    }
                    break;
                case 'pending':
                    $open_todos->whereNull($todo_table . '.payment_date');
                    if ($input['month'] && $input['month'] != 'all') {
                        $open_todos->where(function ($q) use ($todo_table, $startOfMonth, $endOfMonth) {
                            $q->whereBetween(
                                $todo_table . '.invoice_date',
                                [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]
                            )
                            ->orWhereBetween(
                                $todo_table . '.estimated_date',
                                [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]
                            );
                        })->orderBy($todo_table . '.estimated_date', 'desc');
                    }
                    break;
                case 'chart':
                    // if ($input['month'] && $input['month'] != 'all') {
                        // $open_todos->whereBetween($todo_table . '.due_date', [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]);
                        $open_todos->where(function ($q) use ($todo_table, $startOfMonth, $endOfMonth) {
                            $q->whereBetween(
                                $todo_table . '.invoice_date',
                                [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]
                            )
                            ->orWhereBetween(
                                $todo_table . '.estimated_date',
                                [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]
                            )
                            ->orWhereBetween(
                                $todo_table . '.payment_date',
                                [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]
                            );
                        });
                    // }
                    break;
                case 'overdue':
                    $open_todos->whereNull($todo_table . '.payment_date')->where(function ($q) use ($todo_table, $startOfMonth, $endOfMonth) {
                        $q->whereBetween(
                            $todo_table . '.invoice_date',
                            [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]
                        )
                        ->orWhereBetween(
                            $todo_table . '.estimated_date',
                            [$startOfMonth->format('Y-m-d'), $endOfMonth->format('Y-m-d')]
                        );
                    });
                    $open_todos->where(function ($q) use ($todo_table, $startOfMonth, $endOfMonth) {
                        $q->where($todo_table . '.invoice_date',  '<', Carbon::now())
                        ->orWhere($todo_table . '.estimated_date',  '<', Carbon::now());
                    })->orderBy($todo_table . '.estimated_date', 'desc');
                    break;
            }
        }
        $leader = DB::table('gv_projects')
        ->join('gv_users', 'gv_users.id', '=', 'gv_projects.assign_to')
        ->select(
            'gv_users.id',
            'gv_users.firstname',
            'gv_users.lastname',
            'gv_users.username',
            'gv_users.email'
        )
        ->groupBy(
            'gv_users.id',
            'gv_users.firstname',
            'gv_users.lastname',
            'gv_users.username',
            'gv_users.email'
        )
        ->get();

        return collect(
            [
            'data' => $open_todos->get(),
            'leader' => $leader
            ]
        );
    }

    /**
     * Update the specified resource.
     *
     * @param Request $request [Request for update todo list]
     *
     * @return Boolean
     */
    public function updateList($request)
    {
        $input = $request->all();
        foreach ($input['open'] as $key => $value) {
            $todo = ToDo::findOrFail($value['id']);
            $todo->status = 1;
            $todo->order = $key;
            $todo->save();
        }
        foreach ($input['completed'] as $key => $value) {
            $todo = ToDo::findOrFail($value['id']);
            $todo->status = 2;
            $todo->order = $key;
            $todo->save();
        }
        return true;
    }
}
