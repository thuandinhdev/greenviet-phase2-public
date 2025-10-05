<?php

namespace Modules\Estimate\Database\Seeders;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Modules\Estimate\Entities\EstimateSetting;

/**
 * Class EstimateDatabaseSeeder
 *
 * The Seeder is Defined for Estimate.
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
class EstimateDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // Estimate setting seeding.
        EstimateSetting::truncate();
        EstimateSetting::insert(
            [
            "terms_conditions" => "Looking forward to doing business with you."
            ]
        );
    }
}
