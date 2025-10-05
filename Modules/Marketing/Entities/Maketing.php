<?php

namespace Modules\Marketing\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Marketing\Entities\Attribute\MarketingAttribute;
use Modules\Marketing\Entities\Relationship\MarketingRelationship;

/**
 * Class Marketing
 *
 * The Model is Defined for Marketing.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Marketing
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class Marketing extends Model
{
    use MarketingRelationship, MarketingAttribute, SoftDeletes;
    const MODULE_NAME = 'Marketing';

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
    protected $fillable = ['module_id', 'module_related_id', 'description', 'due_date', 'order', 'status'];

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
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

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

        $this->table = config('gv_marketing');
    }
}
