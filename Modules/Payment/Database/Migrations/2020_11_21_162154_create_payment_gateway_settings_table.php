<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreatePaymentGatewaySettingsTable
 *
 * The Migrations is Defined for Payment Gateway Settings.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Payment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class CreatePaymentGatewaySettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.payment_gateway_settings_table'));
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.payment_gateway_settings_table'),
            function (Blueprint $table) {
                $table->increments('id');
                $table->string('paypal_checkout_label')->default('paypal')->nullable();
                $table->string('paypal_checkout_client_id')->nullable();
                $table->boolean('paypal_checkout_status')->default(false)->comment("1=active, 0=inactive");
                $table->string('stripe_label')->nullable();
                $table->string('stripe_api_key')->nullable();
                $table->string('stripe_secret_key')->nullable();
                $table->boolean('stripe_status')->default(false)->comment("1=active, 0=inactive");
                $table->timestamps();
            }
        );

        $setting = new Modules\Payment\Entities\PaymentGatewaySetting();
        $setting->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.payment_gateway_settings_table'));
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
