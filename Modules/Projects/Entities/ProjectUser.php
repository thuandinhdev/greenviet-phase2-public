<?php

namespace Modules\Projects\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ProjectUser
 *
 * The Model is Defined for Project User.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Projects
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class ProjectUser extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'user_id',
        'project_id',
        'view',
        'edit',
        'delete',
    ];

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

        $this->table = config('core.acl.project_user_table');
    }
}
