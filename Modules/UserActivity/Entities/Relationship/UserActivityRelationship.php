<?php

namespace Modules\UserActivity\Entities\Relationship;

/**
 * Trait UserActivityRelationship
 *
 * The Relationship is Defined For UserActivity.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\UserActivity
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait UserActivityRelationship
{
    /**
     * One-to-Many relations with user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function user()
    {
        return $this->belongsTo(config('core.acl.user'));
    }
}
