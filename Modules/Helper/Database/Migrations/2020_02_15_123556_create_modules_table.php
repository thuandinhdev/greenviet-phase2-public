<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateModulesTable
 *
 * The Migrations is Defined for Modules.
 *
 * PHP version 8.0
 *
 * @category  Helper
 * @package   Modules\Helper
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.modules_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.modules_table'),
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('module_id');
                $table->string('module_name');
                $table->string('module_slug');
                $table->tinyInteger('status')
                    ->default(1)
                    ->comment('1=Active,0=Inactive');
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
        Schema::dropIfExists(config('core.acl.modules_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
