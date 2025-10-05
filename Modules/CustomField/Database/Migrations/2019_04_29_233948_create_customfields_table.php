<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateCustomfieldsTable
 *
 * The Migrations is Defined for Customfields.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Customfields
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateCustomfieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.table_prefix') . '_custom_fields');
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.table_prefix') . '_custom_fields',
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('form_id')->unsigned();
                $table->foreign('form_id')
                    ->references('id')
                    ->on(config('core.acl.form_table'))
                    ->onDelete('cascade');
                $table->string('field_label');
                $table->string('field_column');
                $table->text('default_value')->nullable();
                $table->string('help_text')->nullable();
                $table->enum(
                    'field_type',
                    array(
                        'text',
                        'textarea',
                        'dropdown',
                        'date',
                        'checkbox',
                        'numeric',
                        'url',
                    )
                );
                $table->boolean('is_required')->default(false);
                $table->boolean('status')
                    ->default(true)
                    ->comment('false=Inactive,true=Active');
                $table->boolean('show_on_details')->default(true);
                $table->softDeletes();
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
        Schema::dropIfExists(config('core.table_prefix') . '_custom_fields');
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
