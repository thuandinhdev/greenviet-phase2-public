<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateTaskUserTable
 *
 * The Migrations is Defined for Task.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Task
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateTaskUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.task_user_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.task_user_table'),
            function (Blueprint $table) {
                $table->integer('task_id')->unsigned()->index();
                $table->foreign('task_id')
                    ->references('id')
                    ->on(config('core.acl.task_table'))
                    ->onDelete('cascade');
                $table->integer('user_id')
                    ->unsigned()
                    ->index();
                $table->foreign('user_id')
                    ->references('id')
                    ->on(config('core.acl.users_table'))
                    ->onDelete('cascade');
                $table->boolean('view')
                    ->default(1)
                    ->comment('0=No,1=Yes');
                $table->boolean('edit')
                    ->default(0)
                    ->comment('0=No,1=Yes');
                $table->boolean('delete')
                    ->default(0)
                    ->comment('0=No,1=Yes');
                $table->primary(['task_id', 'user_id']);
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
        Schema::dropIfExists(config('core.acl.task_user_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
