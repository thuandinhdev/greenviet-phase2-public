<?php

namespace Modules\Timesheet\Entities\Attribute;

use Carbon\Carbon;

/**
 * Trait TimesheetAttribute
 *
 * The Attribute is Defined for Timesheet.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Timesheet
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait TimesheetAttribute
{
    /**
     * This mutator automatically convert start date format.
     *
     * @param String $value [Start date]
     *
     * @return Date
     */
    public function setStartTimeAttribute($value)
    {
        $this->attributes['start_time'] = (new Carbon($value))->format('Y-m-d H:i:s');
    }

    /**
     * This mutator automatically convert end date format.
     *
     * @param String $value [End date]
     *
     * @return Date
     */
    public function setEndTimeAttribute($value)
    {
        $this->attributes['end_time'] = (new Carbon($value))->format('Y-m-d H:i:s');
    }
}
