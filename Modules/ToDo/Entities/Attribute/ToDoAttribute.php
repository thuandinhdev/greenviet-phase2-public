<?php

namespace Modules\ToDo\Entities\Attribute;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

/**
 * Trait ToDoAttribute
 *
 * The Attribute is Defined For ToDo.
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
trait ToDoAttribute
{
    /**
     * This mutator automatically set due date format.
     *
     * @param Date $value [Due date]
     *
     * @return Date
     */
    public function setDueDateAttribute($value)
    {
        if ($value) {
            $this->attributes['due_date'] = (new Carbon($value))->format('Y-m-d');
        }
    }
}
