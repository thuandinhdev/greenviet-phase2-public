<?php

namespace Modules\Leave\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Leave\Entities\Attribute\LeaveAttribute;
use Modules\Leave\Entities\Relationship\LeaveRelationship;

/**
 * Class Leave
 *
 * The Model is Defined for Leave.
 *
 * PHP version 8.0
 *
 * @category  HRM
 * @package   Modules\Leave
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class Leave extends Model
{
    use LeaveAttribute, LeaveRelationship, SoftDeletes;

    const MODULE_NAME = 'Leave';

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
        'leave_type_id',
        'duration',
        'duration_type',
        'leave_day',
        'leave_date',
        'reason',
        'reject_reason',
        'contract_id',
        'project',
        'workallowance',
        'total',
        'approved1',
        'approved2',
        'status',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'leave_date'];

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

        $this->table = config('core.acl.leaves_table');
    }
}
