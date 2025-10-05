<?php

namespace Modules\KnowledgeBaseArticle\Entities\Attribute;

/**
 * Trait KnowledgeBaseArticle
 *
 * The Attribute is Defined For KnowledgeBaseArticle.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\KnowledgeBaseArticle
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait KnowledgeBaseArticleAttribute
{
    /**
     * This mutator automatically convert the first character of each word to uppercase.
     *
     * @param String $value [Article title]
     *
     * @return String
     */
    public function setArticleTitleAttribute($value)
    {
        $this->attributes['article_title'] = trim(ucwords($value));
    }
}
