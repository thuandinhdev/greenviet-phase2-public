<?php

namespace Modules\KnowledgeBaseCategory\Entities\Attribute;

/**
 * Trait KnowledgeBaseCategoryAttribute
 *
 * The Attribute is Defined For KnowledgeBaseCategory.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\KnowledgeBaseCategory
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait KnowledgeBaseCategoryAttribute
{
    /**
     * This mutator automatically convert the first character of each word to uppercase.
     *
     * @param String $value [Category name]
     *
     * @return String
     */
    public function setCategoryNameAttribute($value)
    {
        $this->attributes['category_name'] = trim(ucwords($value));
    }
}
