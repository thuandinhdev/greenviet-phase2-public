<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateLeaveTypesTable
 *
 * The Migrations is Defined for Leave Type.
 *
 * PHP version 8.0
 *
 * @category  HRM
 * @package   Modules\LeaveType
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class CreateLeaveTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.leave_types_table'));
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.leave_types_table'),
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->string('leave_type');
                $table->integer('no_of_leaves')->default(5);
                $table->string('color')->default('#1ab394');
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
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.leave_types_table'));
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
