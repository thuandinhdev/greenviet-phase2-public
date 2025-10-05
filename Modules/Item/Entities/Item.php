<?php

namespace Modules\Item\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Item\Entities\Attribute\ItemAttribute;
use Modules\Item\Entities\Relationship\ItemRelationship;

/**
 * Class Item
 *
 * The Model is Defined for Item.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Item
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class Item extends Model
{
    use SoftDeletes, ItemAttribute, ItemRelationship;

    const MODULE_NAME = 'Item';

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
        'name',
        'price',
        'description',
        'unit',
    ];

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

        $this->table = config('core.acl.items_table');
    }
}
