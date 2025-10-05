<?php

namespace Modules\Installer\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Installer\Helpers\DatabaseManager;

/**
 * Class DatabaseController
 *
 * Database backup and restore.
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
class DatabaseController extends Controller
{
    private $_databaseManager;

    /**
     * Instantiate a new controller instance.
     *
     * @param DatabaseManager $databaseManager [Object]
     *
     * @return void
     */
    public function __construct(DatabaseManager $databaseManager)
    {
        $this->_databaseManager = $databaseManager;
    }

    /**
     * Migrate and seed the database.
     *
     * @return View
     */
    public function database()
    {
        $response = $this->_databaseManager->migrateAndSeed();

        return redirect()
            ->route('LaravelInstaller::final')
            ->with(['message' => $response]);
    }
}
