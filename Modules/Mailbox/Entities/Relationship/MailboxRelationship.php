<?php

namespace Modules\Mailbox\Entities\Relationship;

/**
 * Trait MailboxRelationship
 *
 * The Relationship is Defined For Mailbox.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Mailbox
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait MailboxRelationship
{
    /**
     * One-to-Many relations with user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function user()
    {
        return $this->belongsTo(config('auth.providers.users.model'));
    }

    /**
     * Has-Many relations with attachments.
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function attachments()
    {
        return $this->hasMany(config('core.acl.mailbox_attachment'));
    }
}
