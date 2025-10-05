<?php

namespace Modules\Leave\Entities\Attribute;

/**
 * Trait LeaveAttribute
 *
 * The Attribute is Defined for Leave.
 *
 * PHP version 8.0
 *
 * @category  HRM
 * @package   Modules\Leave
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
trait LeaveAttribute
{
    /**
     * This mutator automatically set leave date format.
     *
     * @param Date $value [Leave date]
     *
     * @return Date
     */
    public function setLeaveDateAttribute($value)
    {
        $this->attributes['leave_date'] = ($value == null) ? null : date('Y-m-d', strtotime($value));
    }
}
