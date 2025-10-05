<?php

namespace Modules\Incident\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Incident\Entities\Attribute\IncidentAttribute;
use Modules\Incident\Entities\Relationship\IncidentRelationship;

/**
 * Class Incident
 *
 * The Model is Defined for Incident.
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
class Incident extends Model
{
    use SoftDeletes, IncidentRelationship, IncidentAttribute;

    const MODULE_NAME = 'Incident';

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
        'create_user_id',
        'generated_id',
        'project_id',
        'project_version',
        'incident_type',
        'incident_name',
        'start_date',
        'end_date',
        'estimated_hours',
        'description',
        'status',
        'assigned_group_id',
        'assign_to',
        'priority',
        'notes',
        'orders',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'start_date', 'end_date'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['is_overdue'];

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

        $this->table = config('core.acl.incidents_table');
    }
}
