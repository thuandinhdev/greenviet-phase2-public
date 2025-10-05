<?php

namespace Modules\CustomField\Repositories;

use Auth;
use DB;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\CustomField\Entities\CustomField;
use Modules\CustomField\Entities\Form;

/**
 * Class CustomFieldRepository
 *
 * CustomField CRUD functionality.
 *
 * CustomField create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\CustomField
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CustomFieldRepository
{

    /**
     * Display a listing of the resource.
     *
     * @return object
     */
    public function findAll()
    {

        $project_type =  DB::table('gv_project_type')->where('is_delete', 0)->get();
        $task_type = DB::table('gv_default_task')->get();
        $hashtag = DB::table('gv_hashtag')->get();
        return ['task_type'=>$task_type, 'project_type'=>$project_type, 'hashtag'=>$hashtag];
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Params for get custom field]
     *
     * @return array
     */
    public function getAllCustomFields($request)
    {
        if($request->input('tabData') == 'project_type'){
            $CustomField = DB::table('gv_project_type')->where('is_delete', 0);

            $totalData = $CustomField->count();

            $columns = array(
                0 => 'name',
                1 => 'code'
            );

            $totalFiltered = $totalData;
            $limit = $request->input('length');
            $start = $request->input('start');
            $order = $columns[0];
            $dir = $request->input('order.0.dir');

            if (!empty($request->input('search.value'))) {
                $search = $request->input('search.value');
                $CustomField = $CustomField->where(
                            function ($query) use ($search) {
                                $query->where('name', 'LIKE', "%{$search}%")
                                    ->orWhere('code', 'LIKE', "%{$search}%");
                            }
                        );
                $totalFiltered = $CustomField->count();
            }
        } else {
            if($request->input('tabData') == 'task'){
                $CustomField = DB::table('gv_default_task');

                $totalData = $CustomField->count();

                $columns = array(
                    0 => 'name',
                    1 => 'description'
                );

                $totalFiltered = $totalData;
                $limit = $request->input('length');
                $start = $request->input('start');
                $order = $columns[0];
                $dir = $request->input('order.0.dir');

                if (!empty($request->input('search.value'))) {
                    $search = $request->input('search.value');
                    $CustomField = $CustomField->where(
                                function ($query) use ($search) {
                                    $query->where('name', 'LIKE', "%{$search}%")
                                        ->orWhere('description', 'LIKE', "%{$search}%");
                                }
                            );
                    $totalFiltered = $CustomField->count();
                }
            } else {
                if($request->input('tabData') == 'hashtag'){
                    $CustomField = DB::table('gv_hashtag');
    
                    $totalData = $CustomField->count();
    
                    $columns = array(
                        0 => 'name',
                        1 => 'description'
                    );
    
                    $totalFiltered = $totalData;
                    $limit = $request->input('length');
                    $start = $request->input('start');
                    $order = $columns[0];
                    $dir = $request->input('order.0.dir');
    
                    if (!empty($request->input('search.value'))) {
                        $search = $request->input('search.value');
                        $CustomField = $CustomField->where(
                                    function ($query) use ($search) {
                                        $query->where('name', 'LIKE', "%{$search}%")
                                            ->orWhere('description', 'LIKE', "%{$search}%");
                                    }
                                );
                        $totalFiltered = $CustomField->count();
                    }
                } else {
                $CustomField = DB::table('gv_work_allowance')->where('is_delete', 0);

                $totalData = $CustomField->count();

                $columns = array(
                    0 => 'label',
                    1 => 'value'
                );

                $totalFiltered = $totalData;
                $limit = $request->input('length');
                $start = $request->input('start');
                $order = $columns[0];
                $dir = $request->input('order.0.dir');

                if (!empty($request->input('search.value'))) {
                    $search = $request->input('search.value');
                    $CustomField = $CustomField->where(
                                function ($query) use ($search) {
                                    $query->where('label', 'LIKE', "%{$search}%")
                                        ->orWhere('value', 'LIKE', "%{$search}%");
                                }
                            );
                    $totalFiltered = $CustomField->count();
                }
            }
        }
            
        }


        $CustomField = $CustomField->offset($start)
            ->limit($limit)
            ->orderBy($order, 'asc')
            ->get();

        $json_data = array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $CustomField,
        );

        return $json_data;
    }

    /**
     * Display the specified resource in storage.
     *
     * @param int $id [Row id]
     *
     * @return object
     */
    public function findById($id)
    {
        return CustomField::with('forms')->where('id', $id)->first();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Params for create custom field]
     *
     * @return Boolean
     */
    public function create($request)
    {
        $input = $request->all();
        if($input['tabData'] == 'project_type'){
            unset($input['tabData']);
            DB::table('gv_project_type')->insert($input);
        } else {
            if($input['tabData'] == 'task'){
                unset($input['tabData']);
                DB::table('gv_default_task')->insert($input);
            } else {
                if($input['tabData'] == 'hashtag'){
                    unset($input['tabData']);
                    DB::table('gv_hashtag')->insert($input);
                } else {
                    unset($input['tabData']);
                    DB::table('gv_work_allowance')->insert($input);
                }
            }
        }
        return true;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Params for update custom field]
     * @param int     $id      [Row id]
     *
     * @return object
     */
    public function update($request, $id)
    {
        $input = $request->all();
        if($input['tabData'] == 'project_type'){
            unset($input['tabData']);
            DB::table('gv_project_type')->where('id', $id)->update($input);
        } else {
            if($input['tabData'] == 'task'){
                unset($input['tabData']);
                DB::table('gv_default_task')->where('id', $id)->update($input);
            } else {
                if($input['tabData'] == 'hashtag'){
                    unset($input['tabData']);
                    DB::table('gv_hashtag')->where('id', $id)->update($input);
                } else {
                    unset($input['tabData']);
                    DB::table('gv_work_allowance')->where('id', $id)->update($input);
                }
            }
        }
        return true;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Params for delete custom field]
     * @param int     $id      [Row id]
     *
     * @return boolean
     */
    public function delete($request, $id)
    {
        $input = $request->all();
        DB::table('gv_work_allowance')->where('id', $id)->update(['is_delete'=>1]);
        return true;
        $CustomField = CustomField::findOrFail($id);
        if (!empty($CustomField)) {
            $forms = Form::get();
            $name = strtolower(
                preg_replace(
                    '/\s+/',
                    '_',
                    $CustomField->field_label
                )
            );
            foreach ($forms as $key => $value) {
                if (Schema::hasColumn($value->table_name, $name)) {
                    Schema::table(
                        $value->table_name,
                        function (Blueprint $table) use ($name) {
                            $table->dropColumn($name);
                        }
                    );
                }
            }
            if ($CustomField->delete()) {
                // --
                // Add activities
                createUserActivity(
                    CustomField::MODULE_NAME,
                    $CustomField->id,
                    $request->method(),
                    $CustomField->field_label,
                    $request->ip()
                );
                return true;
            } else {
                return false;
            }
        }

        return false;
    }

    /**
     * Post change custom field status
     *
     * @param Request $request [Params for change custom field status]
     * @param int     $id      [Row id]
     *
     * @return Boolean
     */
    public function changeCustomFieldStatus($request, $id)
    {
        $status = $request->get('status');
        $CustomField = CustomField::findOrFail($id);
        $CustomField->status = $status;

        if ($CustomField->save()) {
            // --
            // Add activities
            createUserActivity(
                CustomField::MODULE_NAME,
                $CustomField->id,
                $request->method(),
                $CustomField->field_label,
                $request->ip(),
                null,
                true
            );
            return true;
        }
    }

    /**
     * Get form tables for custom fields.
     *
     * @return Response
     */
    public function getFormTables()
    {
        return \DB::table(config('core.acl.form_table'))->get();
    }

    /**
     * Get particular module custom field detail.
     *
     * @param Int     $form_id [Form id]
     * @param Boolean $is_view [Show on details]
     *
     * @return Object
     */
    public function getCustomFieldByForm($form_id, $is_view)
    {
        $customField = CustomField::where('form_id', $form_id)
            ->where('status', 1);

        if ($is_view) {
            $customField->where('show_on_details', 1);
        }

        return $customField->get();
    }
}
