<?php

use Illuminate\Http\Request;
use Modules\Installer\Http\Controllers\UpdateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(
    ['middleware' => 'auth:api'], function () {
        Route::get('updater/check', [UpdateController::class, 'checkUpdateVersion']);
        Route::get('updater/current_version', [UpdateController::class, 'getCurrentVersion']);
        Route::get('updater/update', [UpdateController::class, 'updateSystem']);
    }
);

Route::get('updater/updatedb', [UpdateController::class, 'updateDB']);