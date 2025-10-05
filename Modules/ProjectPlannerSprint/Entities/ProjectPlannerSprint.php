<?php

namespace Modules\ProjectPlannerSprint\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\ProjectPlannerSprint\Entities\Attribute\ProjectPlannerSprintAttribute;
use Modules\ProjectPlannerSprint\Entities\Relationship\ProjectPlannerSprintRelationship;

/**
 * Class ProjectPlannerSprint
 *
 * The Model is Defined for Project Planner Sprint.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\ProjectPlannerSprint
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class ProjectPlannerSprint extends Model
{
    use SoftDeletes, ProjectPlannerSprintRelationship, ProjectPlannerSprintAttribute;

    const MODULE_NAME = 'ProjectPlannerSprint';

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
        'project_id',
        'sprint_name',
        'start_date',
        'end_date',
        'status',
        'description',
        'hours',
    ];

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

        $this->table = config('core.acl.project_sprints_table');
    }
}
