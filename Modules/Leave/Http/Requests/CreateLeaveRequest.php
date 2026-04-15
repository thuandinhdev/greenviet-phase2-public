<?php

namespace Modules\Leave\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

/**
 * Class CreateLeaveRequest
 *
 * The Validation Rules is Defined for create leave.
 *
 * PHP version 8.0
 *
 * @category  HRM
 * @package   Modules\Leave
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class CreateLeaveRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @param Request $request [Request for validate leave]
     *
     * @return array
     */
    public function rules(Request $request)
    {
        return [
            'user_id' => 'required',
            'leave_type_id' => 'required',
            'duration' => 'required',
            'duration_type' => 'required_if:duration,half',
            'leave_date' => [
                'required_if:duration,single,half',
                'date',
                'nullable'
            ],
            'multi_date' => [
                'required_if:duration,multiple',
            ],
            // 'reason' => 'required',
        ];
    }
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {

            // chỉ check khi là single hoặc half
            if (!in_array($this->duration, ['full', 'half'])) {
                return;
            }

            $leaves = \DB::table(config('core.acl.leaves_table'))
                ->where('user_id', $this->user_id)
                ->where('leave_date', $this->leave_date)
                ->where('status', '!=', 3)
                ->where('status', '!=', 4)
                ->whereNull('deleted_at')
                ->get();

            $fullExists = $leaves->contains('duration', 'full');
            $halfCount = $leaves->where('duration', 'half')->count();
            // ❌ already has full
            if ($fullExists) {
                $validator->errors()->add('leave_date', 'A full-day leave already exists for this date.');
                return;
            }

            // ❌ already has 2 half
            if ($halfCount >= 2) {
                $validator->errors()->add('leave_date', 'This date already has two half-day leaves.');
                return;
            }

            // ❌ adding full but already has half
            if ($this->duration === 'full' && $halfCount > 0) {
                $validator->errors()->add('leave_date', 'A half-day leave already exists, cannot add a full-day leave.');
                return;
            }
        });
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
