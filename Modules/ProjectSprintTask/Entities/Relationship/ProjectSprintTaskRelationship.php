<?php
namespace Modules\ProjectSprintTask\Entities\Relationship;

/**
 * Trait ProjectSprintTaskRelationship
 *
 * The Relationship is Defined for Project Sprint Task.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\ProjectSprintTask
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait ProjectSprintTaskRelationship
{

    /**
     * Many-to-Many relations with members.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function taskMembers()
    {
        return $this->belongsToMany(
            config('auth.providers.users.model'),
            config('core.acl.project_sprint_task_members_table'),
            'task_id',
            'user_id'
        );
    }
}
