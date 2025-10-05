<?php

namespace Modules\Invoice\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\Invoice\Entities\Relationship\InvoiceItemRelationship;

/**
 * Class InvoiceItem
 *
 * The Model is Defined for Invoice Item.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Invoice
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class InvoiceItem extends Model
{
    use InvoiceItemRelationship;

    const MODULE_NAME = 'InvoiceItem';

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
        'item_name',
        'item_description',
        'item_unit',
        'unit_price',
        'quantity',
        'total_item_amount',
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

        $this->table = config('core.acl.invoice_items_table');
    }
}
