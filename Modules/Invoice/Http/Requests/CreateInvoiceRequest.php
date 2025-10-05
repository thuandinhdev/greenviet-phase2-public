<?php

namespace Modules\Invoice\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

/**
 * Class CreateInvoiceRequest
 *
 * The Validation Rules is Defined for Create Invoice.
 *
 * PHP version 8.0
 *
 * @category  Sales
 * @package   Modules\Invoice
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class CreateInvoiceRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @param Request $request [Request for dynamic validation]
     *
     * @return array
     */
    public function rules(Request $request)
    {
        $rules = [
            'project_id' => 'nullable|integer',
            'client_id' => 'required|integer',
            'invoice_date' => 'required|date',
            'due_date' => 'required|date',
            'discount' => 'nullable|numeric',
            'adjustment' => 'required|numeric',
            'status' => 'required',
            'items' => 'required',
            "items.*.item_name" => 'required|string',
            "items.*.unit_price" => 'required|numeric',
            "items.*.quantity" => 'required|integer',
        ];

        if ($request->has('discount') && $request->input('discount') > 0) {
            $rules['discount_type'] = 'required';
        }

        if ($request->input('recurrence')) {
            $rules['recurrence_occurrences'] = 'required';
            $rules['recurrence_pattern'] = 'required';
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

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        $request = $this->request->all();
        foreach ($request['items'] as $key => $value) {
            $attributes["items.{$key}.item_name"] = strtolower(__('messages.invoices.item_name'));
            $attributes["items.{$key}.unit_price"] = strtolower(__('messages.invoices.unit_price'));
            $attributes["items.{$key}.quantity"] = strtolower(__('messages.invoices.quantity'));
        }
        return $attributes;
    }
}
