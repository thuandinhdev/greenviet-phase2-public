<?php

namespace Modules\Menu\Repositories;

use Auth;
use DB;
use Modules\Helper\Repositories\HelperRepository;
use Modules\Menu\Entities\Menu;
use Modules\Setting\Entities\Setting;
use Modules\User\Entities\Department\DepartmentRoleMenu;
use Modules\User\Entities\User\User;
use Modules\Leave\Entities\Leave;

/**
 * Class MenuRepository
 *
 * Create, Update, delete operation for Menu.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Menu
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class MenuRepository
{
    protected $helperRepo;

    /**
     * Create a new repository instance.
     *
     * @param HelperRepository $helperRepo [Object]
     *
     * @return void
     */
    public function __construct(HelperRepository $helperRepo)
    {
        $this->helperRepo = $helperRepo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Array
     */
    public function findAll()
    {
        $menus['active_menu'] = $this->buildMenu(
            Menu::where('status', 1)
                ->orderBy('order', 'asc')
                ->get()
        );
        $menus['inactive_menu'] = $this->buildMenu(
            Menu::where('status', 0)
                ->orderBy('order', 'asc')
            // comment by priya because created_at column not exists in menu table
            // ->orderBy('created_at', 'asc')
                ->get()
        );

        return $menus;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Array $all_active_menu   [All active menu array]
     * @param Array $all_inactive_menu [All inactive menu array]
     *
     * @return Boolean
     */
    public function create($all_active_menu, $all_inactive_menu)
    {
        // --
        // Active menu
        foreach ($all_active_menu as $key => $value) {
            $jObj = json_decode($value);

            if (!empty($jObj)) {
                foreach ($jObj as $jKey => $jValue) {
                    // --
                    // Update menu
                    $menu = Menu::find($jValue->id);
                    $menu->order = $jKey;
                    $menu->status = 1;
                    $menu->parent_menu_id = 0;
                    $menu->save();

                    // --
                    // Update child menu
                    if (!empty($jValue->children)) {
                        foreach ($jValue->children as $child_sort => $sub_menu) {
                            $menu = Menu::find($sub_menu->id);
                            $menu->order = $child_sort;
                            $menu->status = 1;
                            $menu->parent_menu_id = $jValue->id;
                            $menu->save();

                            // --
                            // Update sub child menu
                            if (!empty($sub_menu->children)) {
                                foreach ($sub_menu->children as $sub_child_sort => $sub_child_menu) {
                                    $menu = Menu::find($sub_child_menu->id);
                                    $menu->order = $sub_child_sort;
                                    $menu->status = 1;
                                    $menu->parent_menu_id = $sub_menu->id;
                                    $menu->save();
                                }
                            }
                        }
                    }
                }
            }
        }

        // --
        // Inactive menu
        foreach ($all_inactive_menu as $key => $value) {
            $jObj = json_decode($value);

            if (!empty($jObj)) {
                foreach ($jObj as $jKey => $jValue) {
                    // --
                    // Update menu
                    $menu = Menu::find($jValue->id);
                    $menu->order = $jKey;
                    $menu->status = 0;
                    $menu->parent_menu_id = 0;
                    $menu->save();

                    // --
                    // Update child menu
                    if (!empty($jValue->children)) {
                        foreach ($jValue->children as $child_sort => $sub_menu) {
                            $menu = Menu::find($sub_menu->id);
                            $menu->order = $child_sort;
                            $menu->status = 0;
                            $menu->parent_menu_id = $jValue->id;
                            $menu->save();

                            // --
                            // Update sub child menu
                            if (!empty($sub_menu->children)) {
                                foreach ($sub_menu->children as $sub_child_sort => $sub_child_menu) {
                                    $menu = Menu::find($sub_child_menu->id);
                                    $menu->order = $sub_child_sort;
                                    $menu->status = 0;
                                    $menu->parent_menu_id = $sub_menu->id;
                                    $menu->save();
                                }
                            }
                        }
                    }
                }
            }
        }

        return true;
    }

    /**
     * Get side bar menu.
     *
     * @param Request $request [Request for get menu]
     *
     * @return Response
     */
    public function getSidebarMenu($request)
    {
        $menus = [];
        $menuItems = [];

        // --
        // Get departments/roles
        if (!empty(\Auth::user())) {
            $roles = \Auth::user()->roles()->get()->pluck('id');
            $departments = \Auth::user()->departments()->get()->pluck('id');

            $department_role_menu_table = config('core.acl.department_role_menu_table');
            $menu_table = config('core.acl.menu_table');

            $menus = DepartmentRoleMenu::select($menu_table . '.*')
                ->Join($menu_table, $department_role_menu_table . '.menu_id', '=', $menu_table . '.id')
                ->whereIn($department_role_menu_table . '.department_id', $departments)
                ->whereIn($department_role_menu_table . '.role_id', $roles)
                ->where($menu_table . '.status', 1)
                ->where($menu_table . '.module', '!=', 'settings')
                ->where($menu_table . '.module', '!=', 'filemanager')
                ->where($menu_table . '.module', '!=', 'utilities')
                ->orderBy($menu_table . '.order')
                ->distinct($menu_table . '.id')
                ->get();

            if ($menus) {
                foreach ($menus as $key => $value) {
                    $menus[$key]->class = '';
                    $menus[$key]->badge = '';
                    $menus[$key]->badgeClass = '';
                    $menus[$key]->isExternalLink = false;
                    $menus[$key]->submenu = [];
                }
            }

            $menuItems['loginUser'] = $this->getRolesAbilities(\Auth::user());
            $menuItems['menus'] = $this->buildSidebarMenu($menus);
        }

        return $menuItems;
    }

    /**
     * Build menu.
     *
     * @param Array $elements [Elements array]
     * @param Int   $parentId [Parent id]
     *
     * @return Array
     */
    public function buildMenu($elements, $parentId = 0)
    {
        $branch = array();
        foreach ($elements as $element) {
            if ($element['parent_menu_id'] == $parentId) {
                $children = self::buildMenu($elements, $element['id']);

                if ($children) {
                    $element['children'] = $children;
                }

                $branch[] = $element;
            }
        }

        return $branch;
    }

    /**
     * Build sidebar menu.
     *
     * @param Array $elements [Elements array]
     * @param Int   $parentId [Parent id]
     *
     * @return Array
     */
    public function buildSidebarMenu($elements, $parentId = 0)
    {
        $user = \Auth::user();
        $_user = \Modules\User\Entities\User\User::findOrFail($user->id);
        $branch = [];
        foreach ($elements as $element) {
            // --
            // Check admin role
            if ($element->module == 'admin' && !$_user->hasRole('admin')) {
                continue;
            }

            //--
            // Check view permissions
            if (!$user->allow($element->label)) {
                continue;
            }

            if ($element->parent_menu_id == $parentId) {
                $submenu = self::buildSidebarMenu($elements, $element->id);

                if ($submenu) {
                    $element->class = 'has-sub';
                    $element->submenu = $submenu;
                }

                $branch[] = $element;
            }
        }

        return $branch;
    }

    /**
     * Get roles abilities.
     *
     * @param Object $user [User object]
     *
     * @return Array
     */
    public function getRolesAbilities($user)
    {
        $abilities = [];
        $permissions = [];

        // --
        // Manage roles
        $user['settings'] = Setting::first()->makeHidden(['smtp_password']);
        $user['currency'] = Setting::Currency()->first();
        $user['roles'] = $user->roles()->get()->pluck('slug')->toArray();

        // --
        // Manage roles permissions
        $menus = $this->helperRepo->getRoleDepartmentMenu();
        if (!empty($menus)) {
            foreach ($menus as $key => $value) {
                if (!isset($abilities[$value->slug])) {
                    $abilities[$value->slug] = [];
                }

                // --
                // Check view permission
                if ($value->menu_id == $value->view) {
                    array_push($permissions, str_replace(" ", "", strtolower($value->label) . '_view'));
                }

                if ($value->menu_id == $value->created) {
                    array_push($permissions, str_replace(" ", "", strtolower($value->label) . '_create'));
                }

                if ($value->menu_id == $value->edited) {
                    array_push($permissions, str_replace(" ", "", strtolower($value->label) . '_edit'));
                }

                if ($value->menu_id == $value->deleted) {
                    array_push($permissions, str_replace(" ", "", strtolower($value->label) . '_delete'));
                }
            }
        }

        // --
        // Super admin permission
        if ($user->is_super_admin) {
            array_push($permissions, 'super_admin');
        }

        // --
        // Add user assign permissions
        // if ($user->permission == 'all') {
        //     // array_push($permissions, 'users_view');
        //     array_push($permissions, 'users_edit');
        //     array_push($permissions, 'users_delete');
        // } else {
        //     foreach ((array)json_decode($user->permission) as $key => $value) {
        //         foreach ($value as $key => $value1) {
        //             array_push($permissions, 'users_'.$value1);
        //         }
        //     }
        // }

        $permissions = array_unique($permissions);

        if (!empty($abilities)) {
            foreach ($abilities as $key => $value) {
                foreach ($permissions as $pkey => $pvalue) {
                    array_push($abilities[$key], $pvalue);
                }
            }
        }

        $user['permissions'] = $abilities;

        return $user;
    }
    public function getHRMstatus()
    {
        $user = Auth::user();
        $department = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $user->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
        $data = [];
        if($department->department_name == 'Administration' || $department->department_name == 'HR'){
            $data = User::with(['departments', 'roles'])
            ->where('is_client', false)
            ->get();
        }
        if($department->department_name == 'Project'){
            $list = DB::table('gv_projects')->join('gv_timesheets', 'gv_timesheets.project_id', '=', 'gv_projects.id')->where('gv_timesheets.status', '<', 2)->where('gv_projects.assign_to', $user->id)->groupBy('gv_timesheets.created_user_id')->pluck('gv_timesheets.created_user_id');
            $data = User::with(['departments', 'roles'])
            ->where('is_client', false)
            ->whereIn('id', $list)
            ->get();
        }
        foreach ($data as $key => $value) {
            if($department->department_name == 'HR'){
                $value->timesheets_status = DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', 1)->count();
            }
            if($department->department_name == 'Administration'){
                $value->timesheets_status = DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', '<', 2)->count();
            }
            if($department->department_name == 'Project'){
                $value->timesheets_status = DB::table('gv_timesheets')->where('created_user_id', $value->id)->where('module_id', 2)->where('status', 0)->count();
            }
        }
        $hasStatusGreaterThanZero = collect($data)->contains(function ($item) {
            return $item->timesheets_status > 0;
        });


        $leaves_table = config('core.acl.leaves_table');
        $leave_types_table = config('core.acl.leave_types_table');
        $user_table = config('core.acl.users_table');

        $leaves = Leave::with(['attachments'])->select(
            $leaves_table . '.*',
            $leave_types_table . '.leave_type',
            $user_table . '.firstname',
            $user_table . '.lastname',
            $user_table . '.avatar'
        )
            ->join($leave_types_table, $leave_types_table . '.id', '=', $leaves_table . '.leave_type_id')
            ->join($user_table, $user_table . '.id', '=', $leaves_table . '.user_id');
        $checkRole = DB::table('gv_user_role_department')->where('user_id', $user->id)->first();
        if (!$user->hasRole('admin') && !$user->is_super_admin && $checkRole->department_id != 3) {
            $childUser = User::where('primary_manager', $user->id)->orWhere('secondary_manager', $user->id)->pluck('id');
            $childUser->push($user->id);
            $leaves->whereIn('user_id', $childUser);
        }

        $leaves = $leaves->where($leaves_table . '.status', 1);

        $leavesStatus = $leaves->count();

        return ['timesheet'=>$hasStatusGreaterThanZero, 'leaves'=>$leavesStatus > 0 ? true : false, 'departmentName'=>$department->department_name];


    }

}
