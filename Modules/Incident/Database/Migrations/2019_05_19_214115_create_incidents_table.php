<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateIncidentsTable
 *
 * The Migrations is Defined for Incident.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Incident
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateIncidentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.incidents_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.incidents_table'),
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('create_user_id');
                $table->string('generated_id');
                $table->integer('project_id')->nullable();
                $table->string('project_version')->nullable();
                $table->tinyInteger('incident_type')
                    ->default(1)
                    ->comment('1=Service Request,2=Info Request');
                $table->string('incident_name');
                $table->date('start_date')->nullable();
                $table->date('end_date')->nullable();
                $table->string('estimated_hours')->nullable();
                $table->string('actual_hours')->nullable();
                $table->mediumText('description')->nullable();
                $table->tinyInteger('status')
                    ->default(1)
                    ->comment('1=Open,2=Assigned,3=In Progress,4=Solved,5=Deferred,6=Re-open,7=Closed');
                $table->integer('assigned_group_id')->nullable();
                $table->string('assign_to')->nullable();
                $table->tinyInteger('priority')
                    ->default(1)
                    ->comment('1=Low,2=Medium,3=High,4=Very High,5=Urgent');
                $table->text('notes')->nullable();
                $table->integer('orders')->nullable();
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
        Schema::dropIfExists(config('core.acl.incidents_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
