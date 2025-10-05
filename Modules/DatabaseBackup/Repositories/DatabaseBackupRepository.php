<?php

namespace Modules\DatabaseBackup\Repositories;

use Auth;
use File;
use Modules\DatabaseBackup\Entities\DatabaseBackup;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

/**
 * Class DatabaseBackupRepository
 *
 * DatabaseBackup create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\DatabaseBackup
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class DatabaseBackupRepository
{

    /**
     * Display a listing of the resource.
     *
     * @return Object
     */
    public function findAll()
    {
        return DatabaseBackup::where('status', 1)
            ->where('user_id', Auth::user()->id)
            ->orderBy('id', 'desc')
            ->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get DB Backup]
     *
     * @return Array
     */
    public function getAllDatabaseBackups($request)
    {
        $databaseBackup = DatabaseBackup::where('status', 1)
            ->where('user_id', Auth::user()->id);

        $totalData = $databaseBackup->count();

        $columns = array(
            0 => 'created_at',
            1 => 'file_name',
        );

        $totalFiltered = $totalData;
        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');

            $databaseBackup = $databaseBackup->where(
                function ($query) use ($search) {
                    $query->where('created_at', 'LIKE', "%{$search}%")
                        ->orWhere('file_name', 'LIKE', "%{$search}%");
                }
            );

            $totalFiltered = $databaseBackup->count();
        }

        $data = $databaseBackup->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'desc' ? 'desc' : 'asc')
            ->get();

        $json_data = array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $data,
        );

        return $json_data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request [Request for create DB Backup]
     *
     * @return Boolean
     */
    public function create($request)
    {
        $path = public_path() . '/database_backup';
        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0777, true, true);
        }

        $configs = config('database.connections.mysql');
        $filename = 'database_' . date('Y\-m\-j\_H\-i\-s') . '.sql';
        $storage_path = $path . '/' . $filename;
        $process = Process::fromShellCommandline('mysqldump -u ' . $configs['username'] . ' -p' . $configs['password'] . ' ' . $configs['database'] . ' > ' . $storage_path);

        // --
        // Backup database
        try {
            // --
            // Save into DB
            $databaseBackup = new DatabaseBackup;
            $databaseBackup->user_id = Auth::user()->id;
            $databaseBackup->file_name = $filename;
            $databaseBackup->save();

            $process->setTimeout(2 * 3600);
            $process->setIdleTimeout(10 * 60);
            $process->run();

            $databaseBackup->status = 1;
            if ($databaseBackup->save()) {
                return true;
            } else {
                return false;
            }
        } catch (ProcessFailedException $exception) {
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update DB Backup]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function update($request, $id)
    {
        $databaseBackup = DatabaseBackup::find($id);

        $configs = config('database.connections.mysql');
        $file = public_path() . '/database_backup/' . $databaseBackup->file_name;
        if (file_exists($file)) {
            $process = Process::fromShellCommandline('mysql -u ' . $configs['username'] . ' -p' . $configs['password'] . ' ' . $configs['database'] . ' < ' . $file);

            // --
            // Restore database
            try {
                $process->setTimeout(2 * 3600);
                $process->setIdleTimeout(10 * 60);
                $process->run();
            } catch (ProcessFailedException $exception) {
            }
        }
        return true;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete DB Backup]
     * @param Int     $id      [Row id]
     *
     * @return Object
     */
    public function delete($request, $id)
    {
        $databaseBackup = DatabaseBackup::findOrFail($id);
        $file = public_path() . '/database_backup/' . $databaseBackup->file_name;
        if (file_exists($file)) {
            unlink($file);
        }
        return $databaseBackup->delete();
    }
}
