<?php

namespace Modules\ProjectComment\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\ProjectComment\Entities\Relationship\ProjectCommentRelationship;

/**
 * Class ProjectComment
 *
 * The Model is Defined for Project Comment.
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
class ProjectComment extends Model
{
    use SoftDeletes, ProjectCommentRelationship;

    const MODULE_NAME = 'ProjectComment';
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
        'project_id',
        'parent_id',
        'comment',
        'attachments',
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
     * The attributes that should be cast object to array.
     *
     * @var array
     */
    protected $casts = [
        'attachments' => 'array',
    ];

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

        $this->table = config('core.acl.project_comments_table');
    }
}
