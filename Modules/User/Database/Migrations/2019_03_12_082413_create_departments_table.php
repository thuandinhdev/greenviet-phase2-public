<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateDepartmentsTable
 *
 * The Migrations is Defined for User Departments Table.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\User
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.departments_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.departments_table'),
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->string('name', 50);
                $table->timestamps();
                $table->softDeletes();
                $table->unique(['name', 'deleted_at']);
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
        Schema::dropIfExists(config('core.acl.departments_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
