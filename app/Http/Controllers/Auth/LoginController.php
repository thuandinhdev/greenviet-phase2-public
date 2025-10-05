<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Modules\User\Entities\User\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function redirectToMicrosoft()
    {
        return Socialite::driver('azure')->redirect();
    }

    public function handleMicrosoftCallback(Request $request)
    {
        try {
            // User::where('id', 12)->delete();
            $microsoftUser = Socialite::driver('azure')->user();
            $checkEmail = User::where('email', $microsoftUser->email)->count();
            $fullName = $microsoftUser->getName();
            $nameParts = explode(' ', $fullName, 2);
            $firstName = $nameParts[0] ?? '';
            $lastName = $nameParts[1] ?? '';
            if($checkEmail > 0){
                return redirect("https://timesheet.greenviet.net/timesheet/#/login?token=".$microsoftUser->token."&e=".base64_encode($microsoftUser->email));
            } else {
                $user = [];
                $user['firstname'] = ucwords($firstName);
                $user['lastname'] = ucwords($lastName);
                $user['username'] = str_replace(' ', '', $fullName);
                $user['email'] = $microsoftUser->email;
                $user['is_active'] = 1;
                $user['email_verified'] = 1;
                $user['user_generated_id'] = $this->getUserGeneratedId();
                $user['password'] = "Greenviet2024@";
                $userData = $this->_createUserStub($user);
                // dd($userData);
                $userData['is_active'] = 1;
                $userData['email_verified'] = 1;
                $user = User::insert($userData);
                DB::table('gv_user_role_department')->insert([
                    'user_id' => User::max('id'),
                    'department_id'=>2,
                    'role_id'=>2,
                ]);
                return redirect("https://timesheet.greenviet.net/timesheet/#/login?token=".$microsoftUser->token."&e=".base64_encode($microsoftUser->email));
                // return redirect("https://timesheet.greenviet.net/timesheet/#/login?msg=".base64_encode('Email does not exist'));
            }
        } catch (\Throwable $th) {
            dd($th);
            return redirect("https://timesheet.greenviet.net/timesheet/#/login");
        }
        // Tìm hoặc tạo người dùng trong cơ sở dữ liệu
        // $user = User::firstOrCreate(
        //     ['email' => $microsoftUser->email],
        //     ['name' => $microsoftUser->name]
        // );

        // Đăng nhập người dùng
        // Auth::login($user, true);

        // // Chuyển hướng sau khi đăng nhập
        // return redirect()->intended('/home');
    }
    public function create($request)
    {
        $input = $request->all();
        $user = $this->_createUserStub($request->all());
        $user->password = "Greenviet2024@";
        if ($user->save()) {
            // --
            // Attach/Detach roles
            $this->_flushRoles($request->get('department_roles'), $user);

            // Send user creation notification to admins.
            $adminUsers = $this->getAdminUsers();
            $adminUsers->is_active = 1;
            $user->email_verified = 1;
            $this->emailRepo->sendUserCreationEmailToAdmin($adminUsers, $user);

            // --
            // Add activities
            createUserActivity(
                User::MODULE_NAME,
                $user->id,
                $request->method(),
                $user->firstname . ' ' . $user->lastname,
                $request->ip()
            );

            return $user;
        } else {
            return false;
        }
    }
    public function getUserGeneratedId()
    {
        return 'USR' . str_pad(nextAutoID(config('core.acl.users_table')), 4, "0", STR_PAD_LEFT);
    }
    private function _createUserStub($input)
    {
        // $user = new User;
        $user = [];
        $user['user_generated_id'] = $input['user_generated_id'];
        $user['emp_id'] = $input['user_generated_id'];
        $user['firstname'] = ucwords($input['firstname']);
        $user['lastname'] = ucwords($input['lastname']);
        $user['username'] = $input['username'];
        $user['email'] = $input['email'];
        $user['password'] = \Hash::make($input['password']);
        $user['country'] = isset($input['country']) ? $input['country'] : null;
        $user['language'] = isset($input['language']) ? $input['language'] : 'en';
        $user['skype'] = isset($input['skype']) ? $input['skype'] : null;
        $user['mobile'] = isset($input['mobile']) ? $input['mobile'] : null;
        $user['phone'] = isset($input['phone']) ? $input['phone'] : null;
        $user['address'] = isset($input['address']) ? $input['address'] : null;
        $user['is_super_admin'] = isset($input['is_super_admin']) ? $input['is_super_admin'] : 0;
        $user['can_view_all_users'] = isset($input['can_view_all_users']) ? $input['can_view_all_users'] : 0;
        $user['email_verification_code'] = Str::random(40);
        $user['permission'] = '"all"';
        $user['avatar'] = '5-man.png';
        return $user;
    }
}
