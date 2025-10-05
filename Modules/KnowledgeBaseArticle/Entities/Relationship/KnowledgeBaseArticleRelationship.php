<?php

namespace Modules\KnowledgeBaseArticle\Entities\Relationship;

/**
 * Trait KnowledgeBaseArticleRelationship
 *
 * The Relationship is Defined for Knowledgebase Articles.
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
trait KnowledgeBaseArticleRelationship
{
    /**
     * Many-to-Many relations with category.
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function category()
    {
        return $this->belongsTo(
            config('core.acl.knowledge_base_category_model'),
            'id'
        );
    }
}
