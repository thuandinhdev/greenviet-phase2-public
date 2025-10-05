<?php

namespace Modules\ToDo\Http\Requests;

use Carbon\carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

/**
 * Class CreateToDoRequest
 *
 * The Validation Rules is Defined for Create ToDo.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\ToDo
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateToDoRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @param Request $request [Request for create ToDo]
     * 
     * @return array
     */
    public function rules(Request $request)
    {
        $today = Carbon::now()->subDays(1);
        $rules = [
            'module_id' => 'required',
            'description' => 'required|min:3|max:255',
            'due_date' => 'required',
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
