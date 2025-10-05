<?php

namespace Modules\Team\Entities\Attribute;

/**
 * Trait TeamAttribute
 *
 * The Attribute is Defined For Team.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Team
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait TeamAttribute
{
    /**
     * This mutator automatically convert the first character of each word to uppercase.
     *
     * @param String $value [Team name]
     *
     * @return String
     */
    public function setTeamNameAttribute($value)
    {
        $this->attributes['team_name'] = trim(ucwords($value));
    }
}
