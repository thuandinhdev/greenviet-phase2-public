<?php

namespace Modules\Menu\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Helper\Helpers\AdminHelper;
use Modules\Menu\Repositories\MenuRepository;

/**
 * Class MenuController
 *
 * Menu create, update, delete and view.
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
class MenuController extends Controller
{
    protected $menuRepo;

    /**
     * Instantiate a new repository instance.
     *
     * @param MenuRepository $menu [Object]
     *
     * @return void
     */
    public function __construct(MenuRepository $menu)
    {
        $this->menuRepo = $menu;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return $this->menuRepo->findAll();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Request for create menu]
     *
     * @return Response
     */
    public function store(Request $request)
    {
        // --
        // Check role/permission
        if (!AdminHelper::can_action(22, 'created')
            || !AdminHelper::can_action(22, 'edited')
        ) {
            return response()->json("Access denied", 403);
        }

        $all_active_menu = $request->only('all_active_menu');
        $all_inactive_menu = $request->only('all_inactive_menu');

        $menu = $this->menuRepo->create($all_active_menu, $all_inactive_menu);
        return response()->json('success');
    }

    public function getHRMstatus(Request $request)
    {
        return $this->menuRepo->getHRMstatus();
    }
    

    /**
     * Get side bar menu.
     *
     * @param Request $request [Request for get menu]
     *
     * @return Response
     */
    public function getSidebarMenu(Request $request)
    {
        return $this->menuRepo->getSidebarMenu($request);
    }
}
