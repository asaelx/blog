<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use App\Setting;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    protected $redirectPath = 'admin/articles';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'getLogout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name'           => 'required|max:255',
            'email'          => 'required|email|max:255|unique:users',
            'password'       => 'required|confirmed|min:6',
            'setting.title'       => 'required',
            'setting.description' => 'required'
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        Setting::create([
            'title'       => $data['setting']['title'],
            'description' => $data['setting']['description']
        ]);

        return $user;
    }

    /**
     * Get Registration form to create a new user
     * Only if there are not settings
     *
     * @return \Illuminate\Http\Response
     */
    public function getRegister() {
        $setting = Setting::latest()->first();
        if(is_null($setting))
            return view('auth.register');
        return redirect('/');
    }
}
