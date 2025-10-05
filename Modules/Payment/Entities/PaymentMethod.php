<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\Payment\Entities\Attribute\PaymentMethodAttribute;

/**
 * Class PaymentMethod
 *
 * The Model is Defined for Payment Method.
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
class PaymentMethod extends Model
{
    use PaymentMethodAttribute;

    const MODULE_NAME = 'PaymentMethod';

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
        'method_name',
        'description',
        'show_on_pdf',
        'status',
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

        $this->table = config('core.acl.payment_methods_table');
    }
}
