<?php

namespace Modules\Estimate\Entities\Relationship;

/**
 * Trait EstimateRelationship
 *
 * The Relationship is Defined for Estimate.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Estimate
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
trait EstimateRelationship
{
    /**
     * Remove estimate items.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(
            function ($estimate) {
                $estimate->items()->delete();
            }
        );
    }

    /**
     * One To Many relationship with estimate items.
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function items()
    {
        return $this->hasMany(config('core.acl.estimate_item_model'), 'estimate_id');
    }

    /**
     * Has-One relations with user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function user()
    {
        return $this->hasOne(config('core.acl.user'), 'id', 'user_id')
            ->select(['id', 'firstname', 'lastname', 'avatar', 'email']);
    }

    /**
     * Has-One relations with clients.
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function client()
    {
        return $this->hasOne(config('core.acl.user'), 'id', 'client_id')
            ->select(['id', 'firstname', 'lastname', 'avatar', 'email', 'address', 'mobile', 'phone']);
    }
}
