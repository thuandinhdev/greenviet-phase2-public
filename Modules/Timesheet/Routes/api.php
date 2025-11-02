<?php

use Illuminate\Http\Request;

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
    ['middleware' => 'auth:api'],
    function () {
        Route::post('my-timesheets', 'TimesheetController@getMyTimesheets');
        Route::post('get-timesheets-calendar', 'TimesheetController@getTimesheetsCalendar');
        Route::post('get-timesheets', 'TimesheetController@getTimesheetsByModule');
        Route::post('project-timesheets', 'TimesheetController@getProjectTimesheets');
        Route::post('export-timeSheet', 'TimesheetController@exportTimeSheet');
        Route::post('save-timesheet', 'TimesheetController@saveTimesheet');
        Route::post('approved-timesheet', 'TimesheetController@approvedTimesheet');
        Route::post('disapproved-timesheet', 'TimesheetController@disapprovedTimesheet');
        Route::post('timesheets-report', 'TimesheetController@getTimesheetsReport');
        Route::post('getHolidaysLeavesForUser', 'TimesheetController@getHolidaysLeavesForUser');
        Route::get('get-user-select', 'TimesheetController@getUserSelect');
        Route::get('get-user-month-select/{month}', 'TimesheetController@getUserMonthSelect');
        Route::resource('timesheets', 'TimesheetController');
        Route::resource('timer-logs', 'TimerLogsController');
    }
);
