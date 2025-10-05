<?php

namespace Modules\User\Entities\Department\Traits\Relationship;

/**
 * Trait DepartmentRelationship
 *
 * The Relationship is Defined For Department.
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
trait DepartmentRelationship
{
    /**
     * Many-to-Many relations with roles.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(
            config('core.acl.role'),
            config('core.acl.departments_roles_table')
        );
    }

    /**
     * Many-to-Many relations with user roles.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function userRoles()
    {
        return $this->belongsToMany(
            config('core.acl.role'),
            config('core.acl.user_role_department')
        )->withPivot('user_id');
    }
}
