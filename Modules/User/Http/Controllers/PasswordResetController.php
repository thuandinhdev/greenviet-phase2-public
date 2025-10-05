<?php

namespace Modules\User\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Modules\Helper\Helpers\EmailsHelper;
use Modules\User\Entities\PasswordReset;
use Modules\User\Entities\User\User;
use Modules\User\Http\Requests\ForgotPasswordRequest;
use Modules\User\Http\Requests\ResetPasswordRequest;
use Modules\User\Http\Requests\VerifyTokenRequest;

/**
 * Class PasswordResetController
 *
 * Forgot password,Reset password and Verify token.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\User
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class PasswordResetController extends Controller
{
    /**
     * Create a new PasswordResetController instance.
     *
     * @param EmailsHelper $helper [Object]
     *
     * @return void
     */
    public function __construct(EmailsHelper $helper)
    {
        $this->helper = $helper;
    }

    /**
     * Send reset password link.
     *
     * @param ForgotPasswordRequest $request [Request for forgot password]
     *
     * @return Response
     */
    public function forgotPassword(ForgotPasswordRequest $request)
    {
        // --
        // Invalidate old tokens
        PasswordReset::whereEmail($request->email)->delete();

        // --
        // Store token/email
        $email = $request->email;
        $token = Str::random(10);
        $reset = PasswordReset::create(
            [
                'email' => $email,
                'token' => $token,
            ]
        );

        // --
        // Send reset password email
        try {
            $user = User::whereEmail($email)->first();
            $URL = config('app.front_url') . '/#/reset-password/' . $user->email . '/' . $token;
            $this->helper->sendForgotPasswordEmail($URL, $user);
        } catch (\Exception $e) {
            return response()->json(
                ['error' => $e->getMessage()],
                422
            );
        }

        return response()->json("Success");
    }

    /**
     * Email verify.
     *
     * @param VerifyTokenRequest $request [Request for verify token]
     *
     * @return Response
     */
    public function verifyToken(VerifyTokenRequest $request)
    {
        $check = PasswordReset::where('email', 'like', '%' . trim($request->email) . '%')
            ->where('token', 'like', '%' . trim($request->token) . '%')
            ->first();

        if (!$check) {
            return response()->json(
                ['error' => 'Email or token does not exist.'],
                422
            );
        }

        return response()->json("success");
    }

    /**
     * Reset password.
     *
     * @param ResetPasswordRequest $request [Request for reset password]
     *
     * @return Response
     */
    public function resetPassword(ResetPasswordRequest $request)
    {
        // --
        // Check for token
        $resetPassword = PasswordReset::whereEmail($request->email)
            ->whereToken($request->token)
            ->firstOrFail();
        if (empty($resetPassword)) {
            return response()->json(['error' => 'Email or Token is invalid.'], 422);
        }

        // --
        // Save new password
        $user = User::whereEmail($request->email)->firstOrFail();
        $user->password = $request->password;
        $user->save();

        // --
        // Delete pending resets
        PasswordReset::whereEmail($request->email)->delete();

        // --
        // Reset password email
        try {
            $this->helper->sendResetEmail($user, $request->password);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }

        return response()->json("Success");
    }
}
