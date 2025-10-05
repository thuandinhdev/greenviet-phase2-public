<?php

namespace Modules\Leave\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class LeaveAttachment
 *
 * The Model is Defined for Leave Attachment.
 *
 * PHP version 8.0
 *
 * @category  HRM
 * @package   Modules\LeaveAttachment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class LeaveAttachment extends Model
{
    const MODULE_NAME = 'LeaveAttachment';

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
    protected $fillable = [
        'leave_id',
        'file_name',
        'file_hash',
    ];

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

        $this->table = config('core.acl.leave_attachments_table');
    }
}
