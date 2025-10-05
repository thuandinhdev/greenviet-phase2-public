<?php

namespace Modules\Timesheet\Entities\Relationship;

/**
 * Trait TimesheetRelationship
 *
 * The Relationship is Defined for Timesheet.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Timesheet
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait TimesheetRelationship
{
    /**
     * Has-One relations with user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function user()
    {
        return $this->hasOne(config('core.acl.user'), 'id', 'created_user_id');
    }
}
