<?php

namespace Modules\Team\Http\Requests;

use App\Rules\Emails;
use App\Rules\EmailsExists;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ImportTeamRequest
 *
 * The Validation Rules is Defined for Import Team.
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
class ImportTeamRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'team_name' => 'required|max:30|unique:' . config('core.acl.teams') . ',team_name,NULL,id,deleted_at,NULL',
            'members' => ['required', new Emails, new EmailsExists],
            'team_leader' => 'required|email|exists:' . config('core.acl.users_table') . ',email,deleted_at,NULL',
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
