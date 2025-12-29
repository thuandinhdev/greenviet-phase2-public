<?php

namespace Modules\FileBrowser\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\FileBrowser\Entities\File;
use Modules\FileBrowser\Http\Requests\EditFileRequest;
use Modules\FileBrowser\Repositories\FileRepository;
use Modules\Helper\Helpers\AdminHelper;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpWord\TemplateProcessor;
use ZipArchive;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * Class FileController
 *
 * File create, update, delete and view.
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
class FileController extends Controller
{
    protected $fileRepo;

    /**
     * Instantiate a new repository instance.
     *
     * @param FileRepository $file [Object]
     *
     * @return void
     */
    public function __construct(FileRepository $file)
    {
        $this->fileRepo = $file;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get file]
     *
     * @return Response
     */
    public function index(Request $request)
    {
        // --
        // Check role/permission
        if (!AdminHelper::can_action(15, 'view')) {
            return response()->json("Access denied", 403);
        }

        return $this->fileRepo->findAll($request);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param EditFileRequest $request [Request for update file]
     * @param Int             $id      [Row id]
     *
     * @return Response
     */
    public function update(EditFileRequest $request, $id)
    {
        // --
        // Check role/permission
        if (!AdminHelper::can_action(15, 'edited')) {
            return response()->json("Access denied", 403);
        }

        $file = $this->fileRepo->update($request, $id);
        if ($file) {
            return response()->json('success', 200);
        } else {
            return response()->json(['error' => 'Error while updating.'], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for destroy file]
     * @param Int     $id      [Row id]
     *
     * @return Response
     */
    public function destroy(Request $request, $id)
    {
        // --
        // Check role/permission
        if (!AdminHelper::can_action(15, 'deleted')) {
            return response()->json("Access denied", 403);
        }

        if ($this->fileRepo->delete($request, $id)) {
            return response()->json('success', 200);
        } else {
            return response()->json(['error' => 'Error while deleting.'], 400);
        }
    }

    /**
     * Upload file.
     *
     * @param Request $request [Request for upload file]
     *
     * @return Response
     */
    public function uploadFile(Request $request)
    {
        // --
        // Check role/permission
        if (!AdminHelper::can_action(15, 'created')) {
            return response()->json("Access denied", 403);
        }

        if ($request->hasFile('file')) {
            $action = $request->get('action');
                $user_id = \Auth::id();
                // --
                // Image file
                $size = $request->file('file')->getSize();
                $fileName = $request->file('file')->getClientOriginalName();
                $fileExt = $request->file('file')->getClientOriginalExtension();
                $fileBaseName = basename(
                    $request->file('file')->getClientOriginalName(),
                    '.' . $request->file('file')->getClientOriginalExtension()
                );
                $path = uniqid() . '.' . $fileExt;
                $folder = $request->input('folder');
                $request->file('file')->move(public_path("/uploads/filebrowser"), $path);

                if (!(\File::exists(public_path('/uploads/filebrowser/' . 'index.php')))) {
                    \File::put(public_path('/uploads/filebrowser/' . 'index.php'), "");
                }

                // --
                // Save file
                $file = new File();
                $file->user_id = $user_id;
                $file->folder_id = $folder;
                $file->file_name = $fileBaseName . '.' . $fileExt;
                $file->file_extension = $fileExt;
                $file->file_size = $size;
                $file->file_hash = $path;
                $file->save();

            if($action == 'payslip'){
                return $this->exportSalaryDocx($file->id);
            } else {
                return response()->json(
                    [
                    'success' => 'File has been uploaded.',
                    'id' => $file->id,
                    ], 200
                );
            }
        } else {
            return response()->json(['error' => 'Error while creating.'], 400);
        }
    }
    public function exportSalaryDocx($fileId)
    {
        $file = File::findOrFail($fileId);

        $excelPath    = public_path('/uploads/filebrowser/' . $file->file_hash);
        $templatePath = storage_path('app/templates/MAU_PHIEU_LUONG.docx');

        $tmpDocxDir = storage_path('framework/cache/payslip_docx');
        if (!is_dir($tmpDocxDir)) {
            mkdir($tmpDocxDir, 0777, true);
        }

        // Load Excel TRƯỚC
        $sheet = IOFactory::load($excelPath)->getActiveSheet();
        $startRow = 12;
        $lastRow  = $sheet->getHighestRow();

        $zipName = 'PHIEU_LUONG_' . date('Ym_His') . '.zip';

        return response()->streamDownload(function () use (
            $sheet,
            $startRow,
            $lastRow,
            $templatePath,
            $tmpDocxDir
        ) {
            // clear buffer
            while (ob_get_level() > 0) {
                ob_end_clean();
            }

            $zipPath = storage_path('framework/cache/payslip_' . uniqid() . '.zip');

            $zip = new ZipArchive();
            $zip->open($zipPath, ZipArchive::CREATE);

            for ($row = $startRow; $row <= $lastRow; $row++) {

                $hoTen = trim($sheet->getCell("C$row")->getValue());
                if ($hoTen === '') break;

                $template = new TemplateProcessor($templatePath);

                $template->setValue('HO_TEN', $hoTen);
                $template->setValue('CHUC_VU', $sheet->getCell("D$row")->getValue());
                $template->setValue('LUONG_CB', number_format($sheet->getCell("F$row")->getValue()));
                $template->setValue('HIEU_QUA', number_format($sheet->getCell("G$row")->getValue()));
                $template->setValue('TONG_LUONG', number_format($sheet->getCell("H$row")->getValue()));
                $template->setValue('NGAY_CONG', $sheet->getCell("I$row")->getValue());
                $template->setValue('LUONG_LV', number_format($sheet->getCell("J$row")->getValue()));
                $template->setValue('PHU_CAP_AN', number_format($sheet->getCell("P$row")->getValue()));
                $template->setValue('PHU_CAP_DT', number_format($sheet->getCell("Q$row")->getValue()));
                $template->setValue('PHU_CAP_CT', number_format($sheet->getCell("R$row")->getValue()));
                $template->setValue('TONG_THU_NHAP', number_format($sheet->getCell("S$row")->getValue()));

                $safeName = preg_replace('/[^a-zA-Z0-9_\-]/u', '_', $hoTen);
                $docxPath = $tmpDocxDir . '/PHIEU_LUONG_' . $safeName . '.docx';

                $template->saveAs($docxPath);
                $zip->addFile($docxPath, basename($docxPath));
            }

            $zip->close();

            // ⚠️ KHÔNG fopen – CHỈ readfile
            readfile($zipPath);

            // cleanup
            @unlink($zipPath);
            foreach (glob($tmpDocxDir . '/*.docx') as $f) {
                @unlink($f);
            }

        }, $zipName, [
            'Content-Type' => 'application/zip',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for remove attachment]
     *
     * @return Response
     */
    public function removeAttachementFile(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
            ]
        );
        // --
        // Check role/permission
        if (!AdminHelper::can_action(15, 'deleted')) {
            return response()->json("Access denied", 403);
        }

        $id = $request->get('id');
        if ($this->fileRepo->removeAttachementFile($request, $id)) {
            return response()->json('success');
        } else {
            return response()->json(['error' => 'Error while deleting.'], 400);
        }
    }
}
