<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateFormTable
 *
 * The Migrations is Defined for Form.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Form
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateFormTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.table_prefix') . '_form');
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.table_prefix') . '_form',
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->string('name');
                $table->string('table_name');
                $table->tinyInteger('status')->default(1);
                $table->timestamps();
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
        Schema::dropIfExists(config('core.table_prefix') . '_form');
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
