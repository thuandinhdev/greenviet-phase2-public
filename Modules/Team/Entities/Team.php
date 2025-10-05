<?php

namespace Modules\Team\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Team\Entities\Attribute\TeamAttribute;
use Modules\Team\Entities\Relationship\TeamRelationship;

/**
 * Class Team
 *
 * The Model is Defined for Team.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Team
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class Team extends Model
{
    use SoftDeletes, TeamAttribute, TeamRelationship;

    const MODULE_NAME = 'Team';

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
        'team_name',
        'team_leader',
        'description',
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

        $this->table = config('core.acl.teams');
    }
}
