<?php

namespace Modules\LeaveType\Entities\Relationship;

/**
 * Trait LeaveTypeRelationship
 *
 * The Relationship is Defined for LeaveType.
 *
 * PHP version 8.0
 *
 * @category  HRM
 * @package   Modules\LeaveType
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
trait LeaveTypeRelationship
{
    /**
     * Remove all leaves of particular leave type.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(
            function ($leaveType) {
                $leaveType->leaves()->delete();
            }
        );
    }

    /**
     * Has-Many relations with leaves.
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function leaves()
    {
        return $this->hasMany(config('core.acl.leave_model'));
    }
}
