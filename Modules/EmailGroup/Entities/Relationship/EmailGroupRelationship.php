<?php

namespace Modules\EmailGroup\Entities\Relationship;

/**
 * Trait EmailGroupRelationship
 *
 * The Relationship is Defined for Email Group.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\EmailGroup
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait EmailGroupRelationship
{
    /**
     * One-to-Many relations with email templates.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function templates()
    {
        return $this->hasMany(config('core.acl.email_template'));
    }
}
