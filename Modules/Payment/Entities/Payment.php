<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Payment\Entities\Attribute\PaymentMethodAttribute;
use Modules\Payment\Entities\Relationship\PaymentRelationship;

/**
 * Class Payment
 *
 * The Model is Defined for Payment.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Payment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class Payment extends Model
{
    use PaymentRelationship, PaymentMethodAttribute, SoftDeletes;

    const MODULE_NAME = 'Payment';

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
        'user_id',
        'client_id',
        'receipt_number',
        'invoice_id',
        'transaction_id',
        'payment_method',
        'date',
        'amount',
        'notes',
        'status',
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
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['date'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['secret_id'];

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

        $this->table = config('core.acl.payments_table');
    }
}
