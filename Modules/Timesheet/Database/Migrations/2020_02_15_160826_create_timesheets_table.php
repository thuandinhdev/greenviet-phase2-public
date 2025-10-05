<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateTimesheetsTable
 *
 * The Migrations is Defined for Timesheet.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Timesheet
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateTimesheetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.timesheets_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.timesheets_table'),
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('project_id')->nullable();
                $table->integer('module_id')->nullable();
                $table->integer('module_related_id')->nullable();
                $table->dateTime('start_time');
                $table->dateTime('end_time');
                $table->decimal('decimal_time', 8, 2);
                $table->string('hour_time', 10);
                $table->text('note')->nullable();
                $table->integer('created_user_id')->unsigned()->index();
                $table->foreign('created_user_id')
                    ->references('id')
                    ->on(config('core.acl.users_table'))
                    ->onDelete('cascade');
                $table->timestamps();
                $table->softDeletes();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.timesheets_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
