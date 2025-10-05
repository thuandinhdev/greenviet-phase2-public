<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateSlackSettingsTable
 *
 * The Migrations is Defined for Slack Settings.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Slack
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class CreateSlackSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            config('core.acl.slack_settings_table'), function (Blueprint $table) {
                $table->increments('id');
                $table->string('slack_client_id')->nullable();
                $table->string('slack_client_secret')->nullable();
                $table->string('slack_redirect_URL')->nullable();
                $table->boolean('is_authenticate')->default(false);
                $table->boolean('slack_status')->default(false)->comment("1=active, 0=inactive");
                $table->timestamps();
            }
        );

        $slackSetting = new Modules\Slack\Entities\SlackSetting();
        $slackSetting->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.slack_settings_table'));
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
