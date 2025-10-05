<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateDefectUserTable
 *
 * The Migrations is Defined for Defect User.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Defect
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateDefectUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.defects_user_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
        Schema::create(
            config('core.acl.defects_user_table'),
            function (Blueprint $table) {
                $table->integer('defect_id')->unsigned()->index();
                $table->foreign('defect_id')
                    ->references('id')
                    ->on(config('core.acl.defects_table'))
                    ->onDelete('cascade');
                $table->integer('user_id')->unsigned()->index();
                $table->foreign('user_id')
                    ->references('id')
                    ->on(config('core.acl.users_table'))
                    ->onDelete('cascade');
                $table->primary(['defect_id', 'user_id']);
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
        Schema::dropIfExists(config('core.acl.defects_user_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
