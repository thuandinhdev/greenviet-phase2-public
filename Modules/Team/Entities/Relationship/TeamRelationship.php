<?php

namespace Modules\Team\Entities\Relationship;

/**
 * Trait TeamRelationship
 *
 * The Relationship is Defined For Team.
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
trait TeamRelationship
{
    /**
     * Many-to-Many relations with users.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function members()
    {
        return $this->belongsToMany(
            config('auth.providers.users.model'),
            config('core.acl.teams_members'),
            'team_id',
            'user_id'
        );
    }

    /**
     * One-to-Many relations with project.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HashMany
     */
    public function project()
    {
        return $this->hasMany(
            config('core.acl.project_model'),
            'assign_to'
        );
    }
}
