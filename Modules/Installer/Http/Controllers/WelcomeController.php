<?php

namespace Modules\Installer\Http\Controllers;

use Illuminate\Routing\Controller;

/**
 * Class WelcomeController
 *
 * Welcome view welcome page.
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
class WelcomeController extends Controller
{
    /**
     * Display the installer welcome page.
     *
     * @return view
     */
    public function welcome()
    {
        \View::addLocation(base_path() . '/Modules/Installer/Resources/views');
        \View::addNamespace('theme', base_path() . '/Modules/Installer/Resources/views');
        return \View::make('theme::welcome');
    }
}
