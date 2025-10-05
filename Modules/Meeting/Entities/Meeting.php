<?php

namespace Modules\Meeting\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Meeting\Entities\Attribute\MeetingAttribute;
use Modules\Meeting\Entities\Relationship\MeetingRelationship;

/**
 * Class Meeting
 *
 * The Model is Defined for Meeting.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Meeting
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class Meeting extends Model
{
    use SoftDeletes, MeetingAttribute, MeetingRelationship;

    const MODULE_NAME = 'Meeting';

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
        'generated_id',
        'organizer_id',
        'project_id',
        'title',
        'description',
        'location',
        'start_date',
        'end_date',
        'hour_time',
        'client_id',
        'status',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    // protected $dates = ['start_date', 'end_date'];

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

        $this->table = config('core.acl.meetings');
    }
}
