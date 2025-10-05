<?php

namespace Modules\FileBrowser\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\FileBrowser\Entities\Relationship\FileRelationship;

/**
 * Class FileBrowser
 *
 * The Model is Defined for FileBrowser.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\FileBrowser
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class FileBrowser extends Model
{
    use FileRelationship;
    const MODULE_NAME = 'FileBrowser';

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
    protected $fillable = ['user_id', 'folder_name', 'parent_folder'];

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
     * Instantiate a new model instance.
     *
     * @param Array $attributes [object]
     *
     * @return void
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->table = config('core.acl.folder_table');
    }
}
