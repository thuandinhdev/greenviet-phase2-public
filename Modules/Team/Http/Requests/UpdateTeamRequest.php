<?php

namespace Modules\Team\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateTeamRequest
 *
 * The Validation Rules is Defined for Update Team.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Team
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class UpdateTeamRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->segment(3);
        return [
            'team_name' => 'required|max:30|unique:' . config('core.acl.teams') . ',team_name,' . $id . ',id,deleted_at,NULL',
            'members' => 'required',
            'team_leader' => 'required',
        ];
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
