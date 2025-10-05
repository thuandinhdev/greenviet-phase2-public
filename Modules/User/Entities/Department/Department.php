<?php

namespace Modules\User\Entities\Department;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\User\Entities\Department\Attribute\DepartmentAttribute;
use Modules\User\Entities\Department\Traits\Relationship\DepartmentRelationship;

/**
 * Class Department
 *
 * The Model is Defined for Department.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\User
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class Department extends Model
{
    use SoftDeletes, DepartmentAttribute, DepartmentRelationship;

    const MODULE_NAME = 'Department';

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * Instantiate a new model instance.
     *
     * @param Array $attributes [object]
     *
     * @return void
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->table = config('core.acl.departments_table');
    }
}
