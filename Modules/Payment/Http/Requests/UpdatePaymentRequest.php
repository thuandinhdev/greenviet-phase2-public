<?php

namespace Modules\Payment\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Modules\Invoice\Entities\Invoice;
use Modules\Payment\Entities\Payment;

/**
 * Class UpdatePaymentRequest
 *
 * The Validation Rules is Defined for Update Payment.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Payment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class UpdatePaymentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @param Request $request [Request for update payment]
     *
     * @return array
     */
    public function rules(Request $request)
    {
        $rules = [
            'id' => 'required',
            'invoice_id' => 'required',
            'payment_method' => 'required',
            'amount' => ['required', 'numeric', 'gt:0'],
        ];
        if ($this->request->has('id') && $this->request->has('invoice_id')) {
            $payment = Payment::select('amount')->findOrFail($request->get('id'));
            $invoice = Invoice::select('total_due_amount')->findOrFail($request->get('invoice_id'));
            $due_amount = $invoice->total_due_amount + $payment->amount;
            $rules['amount'] = ['required', 'numeric', 'gt:0', 'lte:' . $due_amount];
        }
        return $rules;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
