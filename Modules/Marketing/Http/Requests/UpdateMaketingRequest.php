<?php

namespace Modules\Marketting\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

/**
 * Class UpdateMarkettingRequest
 *
 * The Validation Rules is Defined for Update Marketting.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Marketting
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class UpdateMarkettingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     * 
     * @param Request $request [Request for update Marketting]
     *
     * @return array
     */
    public function rules(Request $request)
    {
        $rules = [
            'module_id' => 'required',
            'description' => 'required|min:3|max:255',
            'due_date' => 'nullable|date',
        ];

        if (in_array($request->get('module_id'), [1, 2, 3, 4])) {
            $rules["module_related_id"] = 'required';
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
