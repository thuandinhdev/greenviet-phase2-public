<?php

namespace Modules\EmailGroup\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\EmailGroup\Entities\Relationship\EmailGroupRelationship;

/**
 * Class EmailGroup
 *
 * The Model is Defined for Email Group.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\EmailGroup
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class EmailGroup extends Model
{
    use SoftDeletes, EmailGroupRelationship;
    const MODULE_NAME = 'EmailGroup';

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
    protected $fillable = ['email_group_name'];

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

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

        $this->table = config('core.acl.email_group_table');
    }
}
