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
        Route::get('customfields/form', 'CustomFieldController@getFormTables');
        Route::get(
            'customfields/form/{form_id}/{is_view?}',
            'CustomFieldController@getCustomFieldByForm'
        );
        Route::post(
            'customfields/{id}/change-status',
            'CustomFieldController@changeCustomFieldStatus'
        );
        Route::post(
            'all-customfields',
            'CustomFieldController@getAllCustomFields'
        );
        Route::delete('customfields/project_type/{id}', 'CustomFieldController@projectTypeDelete');
        Route::delete('customfields/work_allowance/{id}', 'CustomFieldController@workAllowancedelete');
        Route::delete('customfields/task/{id}', 'CustomFieldController@defaultTaskdelete');
        Route::delete('customfields/hashtag/{id}', 'CustomFieldController@hashtagdelete');
        
        Route::resource('customfields', 'CustomFieldController');
    }
);
