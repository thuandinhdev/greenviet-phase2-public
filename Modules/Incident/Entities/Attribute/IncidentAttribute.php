<?php

namespace Modules\Incident\Entities\Attribute;

use Carbon\Carbon;

/**
 * Trait IncidentAttribute
 *
 * The Attribute is Defined for Incident.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Incident
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait IncidentAttribute
{
    /**
     * This mutator automatically set start date format.
     *
     * @param Date $value [Start date]
     *
     * @return Date
     */
    public function setStartDateAttribute($value)
    {
        $this->attributes['start_date'] = ($value == null) ? null : date('Y-m-d', strtotime($value));
    }

    /**
     * This mutator automatically set end date format.
     *
     * @param Date $value [End date]
     *
     * @return Date
     */
    public function setEndDateAttribute($value)
    {
        $this->attributes['end_date'] = ($value == null) ? null : date('Y-m-d', strtotime($value));
    }

    /**
     * This mutator automatically convert string to number.
     *
     * @param String $value [Assign to]
     *
     * @return Int.
     */
    public function getAssignToAttribute($value)
    {
        return ($value) ? intval($value) : null;
    }

    /**
     * This mutator automatically decide the defect is overdue or not.
     *
     * @return String
     */
    public function getIsOverdueAttribute()
    {
        if (in_array($this->status, [1, 2, 3, 6]) && $this->end_date < date('Y-m-d')) {
            $endDate = Carbon::parse($this->end_date);
            return Carbon::parse(Carbon::now())->diffInDays($endDate);
        }
        return false;
    }
}
