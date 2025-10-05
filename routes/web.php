<?php
use App\Http\Controllers\Auth\LoginController;
use Modules\Menu\Entities\Menu;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Modules\User\Entities\User\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
// Route::get('/', function () {
//     if (file_exists(storage_path('installed'))) {
//         if (!is_null(config('app.front_url'))) {
//             return redirect(config('app.front_url'));
//         }
//         return response()->json('Success');
//     } else {
//         Artisan::call('config:clear', []);
//         \View::addLocation(base_path() . '/Modules/Installer/Resources/views');
//         \View::addNamespace('theme', base_path() . '/Modules/Installer/Resources/views');
//         return View::make('theme::welcome');
//     }
// })->name('index');

// Application cache cleared.
Route::get('/cache-clear', function () {
    Artisan::call('cache:clear');
    return "Application cache cleared!";
});

// Configuration cached.
Route::get('/config-cache', function () {
    Artisan::call('config:cache');
    return "Configuration cache cleared!<br>Configuration cached successfully!";
});

// phpinfo.
Route::get('/phpinfo', function () {
    return response()->json([
        'stuff' => phpinfo(),
    ]);
});

// Schedule run via URL.
Route::get('schedule/run', function () {
    Artisan::call('schedule:run', [], $outputLog);
});

// Route::get('/artisan/{cmd}/', function ($cmd) {
//     $outputLog = new BufferedOutput;
//     pr("php artisan " . $cmd);
//     Artisan::call($cmd, [], $outputLog);
//     pr($outputLog);
//     return "Done!";
// });

// Queue work.
Route::get('/queue/work', function () {
    $r = Artisan::call('queue:work');
    pr($r);
    return "Done!";
});

Route::get('/login/microsoft', [LoginController::class, 'redirectToMicrosoft'])->name('login.microsoft');
Route::get('/login/microsoft/callback', [LoginController::class, 'handleMicrosoftCallback']);
Route::get('/test', function () {
    // return 'ok';
});
Route::get('/updatedb', function () {
    // Menu::where('id', 102)->update([
    //         'status'=> 1
    //     ]);
    // Menu::where('id', 46)->update([
    //     'label'=> 'project bidding',
    //     'text'=> 'Project Bidding',
    //     'link'=> '/project_bidding',s
    //     'icon'=>'fa fa-product-hunt',
    //     'status'=> 1
    // ]);
    // Schema::table('gv_defects', function($table) {
    //     $table->integer('project_id')->nullable()->change();
    // });
    // Schema::table('gv_todos', function ($table) {
    //     $table->unsignedBigInteger('price')->nullable()->length(12);
    // });
    // Schema::dropIfExists('gv_users_contract');

    // Schema::create('gv_users_contract', function (Blueprint $table) {
    //     $table->bigIncrements('id');
    //     $table->integer('user_id', false, true)->length(10);
    //     $table->date('start_date');
    //     $table->date('end_date');
    //     $table->integer('salary')->default(0);
    //     $table->timestamps();
    // });

    // Menu::where('id', 3)->update([
    //     'status'=> 1
    // ]);
    // Schema::table('gv_projects', function($table) {
    //     $table->integer('price_rate', false, true)->length(11)->change();
    // });
    // Menu::where('id', 9)->update([
    //         'status'=> 1
    //     ]);
    // Schema::table('gv_tasks', function (Blueprint $table) {
    //     $table->integer('price_rate', false, true)->length(11);
    // });
    // Menu::where('id', 29)->update([
    //     'status'=> 1
    // ]);
    // Schema::table('gv_timesheets', function($table) {
    //     $table->integer('approved1')->default(0);
    //     $table->integer('approved2')->default(0);
    //     $table->integer('dis_approved')->default(0);
    // });
    // Schema::table('gv_users_contract', function($table) {
    //         $table->integer('salary')->default(0);
    //     });
    // Schema::table('gv_users_contract', function($table) {
    //     $table->integer('on_leave')->default(0);
    // });
    // Schema::table('gv_timesheets', function($table) {
    //     $table->integer('cost')->default(0);
    // });

    // Schema::table('gv_users_contract', function($table) {
    //     $table->integer('status')->default(0);
    // });

    // Schema::table('gv_tasks', function($table) {
    //     $table->integer('cost')->default(0);
    // });

    // Schema::table('gv_projects', function($table) {
    //         $table->integer('cost')->default(0);
    //     });
    // User::where('id', 19)->delete();
    return 'success';
});
