<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CommonMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @param Array $details [Mail Details]
     *
     * @return void
     */
    public function __construct(
        public $details
    ) {
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.common', ['body' => $this->details['body']])
            ->subject($this->details['subject']);
    }
}
