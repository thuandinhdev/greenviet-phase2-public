<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateAnnouncementsTable
 *
 * The Migrations is Defined for Announcements.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Announcements
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateAnnouncementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.announcements_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.announcements_table'),
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('user_id')->unsigned();
                $table->foreign('user_id')
                    ->references('id')
                    ->on(config('core.acl.users_table'));
                $table->string('title');
                $table->mediumText('description')->nullable();
                $table->tinyInteger('status')
                    ->default(0)
                    ->comment('0=Unpublish,1=Publish,2=Completed');
                $table->date('start_date');
                $table->date('end_date');
                $table->boolean('all_client')
                    ->default(0)
                    ->comment('0=None,1=All Client');
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
        Schema::dropIfExists(config('core.acl.announcements_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
