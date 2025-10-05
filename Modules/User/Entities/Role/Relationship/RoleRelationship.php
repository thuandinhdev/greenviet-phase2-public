<?php

namespace Modules\User\Entities\Role\Relationship;

/**
 * Trait RoleRelationship
 *
 * The Relationship is Defined For Role.
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
trait RoleRelationship
{
    /**
     * Many-to-Many relations with departments.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function departments()
    {
        return $this->belongsToMany(
            config('core.acl.department'),
            config('core.acl.departments_roles_table'),
            'role_id',
            'department_id'
        );
    }

    /**
     * Many-to-Many relations with users.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(
            config('core.acl.user'),
            config('core.acl.user_role_department')
        )->withPivot('department_id');
    }

    /**
     * Many-to-Many relations with user departments.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function userdepartments()
    {
        return $this->belongsToMany(
            config('core.acl.department'),
            config('core.acl.user_role_department')
        )->withPivot('user_id');
    }
}
