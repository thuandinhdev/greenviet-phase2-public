<?php

namespace Modules\FileBrowser\Entities\Relationship;

/**
 * Trait FileRelationship
 *
 * The Relationship is Defined For File.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\File
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait FileRelationship
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
