<?php

namespace Modules\ProjectComment\Entities\Relationship;

/**
 * Trait ProjectCommentRelationship
 *
 * The Relationship is Defined for Project Comment.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\ProjectComment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait ProjectCommentRelationship
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
}
