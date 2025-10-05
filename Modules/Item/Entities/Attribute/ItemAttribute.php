<?php

namespace Modules\Item\Entities\Attribute;

/**
 * Trait ItemAttribute
 *
 * The Attribute is Defined for Item.
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
trait ItemAttribute
{
    /**
     * This mutator automatically convert the first character of each word to uppercase.
     *
     * @param String $value [Item name]
     *
     * @return String
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = trim(ucwords($value));
    }
}
