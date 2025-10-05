<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateKnowledgeBaseCategoriesTable
 *
 * The Migrations is Defined for Knowledgebase Categories.
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
class CreateKnowledgeBaseCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.knowledge_base_category_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.knowledge_base_category_table'),
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('user_id')
                    ->unsigned()
                    ->nullable(false);
                $table->foreign('user_id')
                    ->references('id')
                    ->on(config('core.acl.users_table'))
                    ->onDelete('cascade');
                $table->string('category_name');
                $table->string('category_logo');
                $table->timestamps();
                $table->softDeletes();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.knowledge_base_category_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
