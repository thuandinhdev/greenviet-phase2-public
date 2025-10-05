<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Modules\Defect\Entities\Defect;
use Modules\Helper\Helpers\EmailsHelper;
use Modules\Incident\Entities\Incident;
use Modules\Projects\Entities\Project;
use Modules\Setting\Entities\Setting;
use Modules\Task\Entities\Task;

class DailyReminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'daily:reminder';
    protected $emailsHelper;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send project, task, defect, and incident start reminder';

    /**
     * Create a new command instance.
     *
     * @param EmailsHelper $emailsHelper [Object]
     *
     * @return void
     */
    public function __construct(EmailsHelper $emailsHelper)
    {
        parent::__construct();
        $this->emailsHelper = $emailsHelper;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $setting = Setting::select('reminder_alert_before_days')->first();
        $beforeDays = explode(',', $setting->reminder_alert_before_days);

        foreach ($beforeDays as $days) {
            $reminderDate = Carbon::now()->addDays($days)->format('Y-m-d');

            // Project start reminder.
            $projects = Project::whereDate('start_date', $reminderDate)->get();
            foreach ($projects as $project) {
                $this->emailsHelper->sendProjectReminderEmails($project);
            }

            // Task start reminder.
            $tasks = Task::whereDate('task_start_date', $reminderDate)->get();
            foreach ($tasks as $task) {
                $this->emailsHelper->sendTaskReminderEmails($task);
            }

            // Defect start reminder.
            $defects = Defect::whereDate('start_date', $reminderDate)->get();
            foreach ($defects as $defect) {
                $this->emailsHelper->sendDefectReminderEmails($defect);
            }

            // Incident start reminder.
            $incident = Incident::whereDate('start_date', $reminderDate)->get();
            foreach ($incident as $inciden) {
                $this->emailsHelper->sendIncidentReminderEmails($inciden);
            }
        }

    }
}
