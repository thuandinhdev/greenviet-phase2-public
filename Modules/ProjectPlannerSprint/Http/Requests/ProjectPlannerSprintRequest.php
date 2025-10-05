<?php

namespace Modules\ProjectPlannerSprint\Http\Requests;

use App\Rules\EstimatedHours;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class ProjectPlannerSprintRequest
 *
 * The Validation Rules is Defined for Project Planner Sprint.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\ProjectPlannerSprint
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class ProjectPlannerSprintRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
        case 'POST':
            {
                return [
                        'sprint_name' => [
                            'required',
                            'max:' . config('core.max_length'),
                            Rule::unique(config('core.acl.project_sprints_table'))->where(
                                function ($query) {
                                    return $query
                                        ->where('project_id', $this->request->get('project_id'))
                                        ->where('deleted_at', null);
                                }
                            ),
                        ],
                        'start_date' => 'nullable|date',
                        'end_date' => 'nullable|date|after_or_equal:start_date',
                        'status' => 'required',
                        'hours' => ['nullable', new EstimatedHours],
                    ];
            }
        case 'PUT':
        case 'PATCH':
            {
                return [
                        'sprint_name' => [
                            'required',
                            'max:' . config('core.max_length'),
                            Rule::unique(config('core.acl.project_sprints_table'))->where(
                                function ($query) {
                                    return $query->whereNotIn('id', [$this->request->get('id')])
                                        ->where('project_id', $this->request->get('project_id'))
                                        ->where('deleted_at', null);
                                }
                            ),
                        ],
                        'start_date' => 'nullable|date',
                        'end_date' => 'nullable|date|after_or_equal:start_date',
                        'status' => 'required',
                        'hours' => ['nullable', new EstimatedHours],
                    ];
            }
        default:
            return [];
        }
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
