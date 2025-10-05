<?php

namespace Modules\Mailbox\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Mailbox\Entities\Relationship\MailboxRelationship;

/**
 * Class Mailbox
 *
 * The Model is Defined for Mailbox.
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
class Mailbox extends Model
{
    use SoftDeletes, MailboxRelationship;

    const MODULE_NAME = 'Mailbox';

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * Instantiate a new model instance.
     *
     * @param Array $attributes [object]
     *
     * @return void
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->table = config('core.acl.email_inbox_table');
    }
}
