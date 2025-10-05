<?php

namespace Modules\CustomField\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use Modules\CustomField\Entities\Form;
use DB;

/**
 * Class CustomFieldDatabaseSeeder
 *
 * The Migrations is Defined for CustomField.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\CustomField
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CustomFieldDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // --
        // Insert forms
        DB::table(config('core.acl.form_table'))->delete();
        $data = [
            [
                'id' => 1,
                'name' => 'Project',
                'table_name' => config('core.acl.projects_table')
            ],
            [
                'id' => 2,
                'name' => 'Task',
                'table_name' => config('core.acl.task_table')
            ],
            [
                'id' => 3,
                'name' => 'Defect',
                'table_name' => config('core.acl.defects_table')
            ],
            [
                'id' => 4,
                'name' => 'Incident',
                'table_name' => config('core.acl.incidents_table')
            ]
        ];

        Form::insert($data);
    }
}
