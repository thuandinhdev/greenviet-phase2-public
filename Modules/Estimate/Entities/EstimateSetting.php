<?php

namespace Modules\Estimate\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * Class EstimateSetting
 *
 * The Model is Defined for Estimate Setting.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Estimate
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class EstimateSetting extends Model
{
    const MODULE_NAME = 'EstimateSetting';

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
        'estimate_prefix',
        'due_after',
        'estimate_logo',
        'template',
        'client_note',
        'terms_conditions',
        'auto_remind',
        'auto_remind_before',
        'auto_convert_to_invoice_on_client_accept',
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

        $this->table = config('core.acl.estimate_settings_table');
    }
}
