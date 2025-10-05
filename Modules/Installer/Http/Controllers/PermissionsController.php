<?php

namespace Modules\Installer\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Installer\Helpers\PermissionsChecker;

/**
 * Class PermissionsController
 *
 * Check permission for bootstrap and storage.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Installer
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class PermissionsController extends Controller
{
    protected $permissions;

    /**
     * Instantiate a new controller instance.
     *
     * @param PermissionsChecker $checker [Object]
     *
     * @return void
     */
    public function __construct(PermissionsChecker $checker)
    {
        $this->permissions = $checker;
    }

    /**
     * Display the permissions check page.
     *
     * @return View
     */
    public function permissions()
    {
        $configs = getConfigs();
        $permissions = $this->permissions->check($configs['permissions']);

        \View::addLocation(base_path() . '/Modules/Installer/Resources/views');
        \View::addNamespace('theme', base_path() . '/Modules/Installer/Resources/views');
        return \View::make('theme::permissions', compact('permissions'));
    }
}
