<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class CreateDefectAttachmentsTable
 *
 * The Migrations is Defined for Defect Attachment.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\DefectAttachment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateDefectAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists(config('core.acl.defect_attachments_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');

        Schema::create(
            config('core.acl.defect_attachments_table'),
            function (Blueprint $table) {
                $table->increments('id')->unsigned();
                $table->integer('defect_id')->unsigned()->index();
                $table->foreign('defect_id')
                    ->references('id')
                    ->on(config('core.acl.defects_table'))
                    ->onDelete('cascade');
                $table->string('file_name');
                $table->string('file_hash');
                $table->string('file_extension');
                $table->softDeletes();
                $table->timestamps();
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
        Schema::dropIfExists(config('core.acl.defect_attachments_table'));
        \DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
