<?php

namespace Modules\ToDo\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\ToDo\Entities\Attribute\ToDoAttribute;
use Modules\ToDo\Entities\Relationship\ToDoRelationship;

/**
 * Class ToDo
 *
 * The Model is Defined for ToDo.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\ToDo
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class ToDo extends Model
{
    use ToDoRelationship, ToDoAttribute, SoftDeletes;
    const MODULE_NAME = 'Todo';

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
    protected $fillable = ['module_id', 'price', 'module_related_id', 'description', 'due_date', 'payment_date', 'order', 'status'];

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
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

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

        $this->table = config('core.acl.todos_table');
    }
}
