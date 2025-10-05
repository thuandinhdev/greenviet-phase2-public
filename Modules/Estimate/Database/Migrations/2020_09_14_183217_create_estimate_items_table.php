<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateEstimateItemsTable
 *
 * The Migrations is Defined for Estimate Item.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Estimate
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class CreateEstimateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.estimate_items_table'));
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.estimate_items_table'), function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('estimate_id')->unsigned();
                $table->foreign('estimate_id')->references('id')->on(config('core.acl.estimates_table'))->onDelete('cascade');
                $table->string('item_name');
                $table->mediumText('item_description')->nullable();
                $table->string('item_unit')->nullable();
                $table->double('unit_price', 13, 2);
                $table->integer('quantity');
                $table->double('total_item_amount', 13, 2)->default(0);
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
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.estimate_items_table'));
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
