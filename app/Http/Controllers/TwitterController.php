<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \Twitter as Tweet;
use Auth;
use App\File;
use App\Twitter;

class TwitterController extends Controller
{
    public function login()
    {
        // your SIGN IN WITH TWITTER  button should point to this route
        $sign_in_twitter = true;
        $force_login = false;

        // Make sure we make this request w/o tokens, overwrite the default values in case of login.
        Tweet::reconfig(['token' => '', 'secret' => '']);
        $token = Tweet::getRequestToken(route('twitter.callback'));

        if (isset($token['oauth_token_secret']))
        {
            $url = Tweet::getAuthorizeURL($token, $sign_in_twitter, $force_login);

            session()->put('oauth_state', 'start');
            session()->put('oauth_request_token', $token['oauth_token']);
            session()->put('oauth_request_token_secret', $token['oauth_token_secret']);

            return redirect($url);
        }

        return redirect()->route('twitter.error');
    }

    public function callback(Request $request)
    {
        // You should set this route on your Twitter Application settings as the callback
        // https://apps.twitter.com/app/YOUR-APP-ID/settings
        if (session()->has('oauth_request_token'))
        {
            $request_token = [
                'token'  => session()->get('oauth_request_token'),
                'secret' => session()->get('oauth_request_token_secret'),
            ];

            Tweet::reconfig($request_token);

            $oauth_verifier = false;

            if ($request->has('oauth_verifier'))
            {
                $oauth_verifier = $request->input('oauth_verifier');
            }

            // getAccessToken() will reset the token for you
            $token = Tweet::getAccessToken($oauth_verifier);

            if (!isset($token['oauth_token_secret']))
            {
                return redirect()->route('twitter.login')->with('flash_error', 'We could not log you in on Twitter.');
            }

            $credentials = Tweet::getCredentials();

            if (is_object($credentials) && !isset($credentials->error))
            {
                // $credentials contains the Twitter user object with all the info about the user.
                // Add here your own user logic, store profiles, create new users on your tables...you name it!
                // Typically you'll want to store at least, user id, name and access tokens
                // if you want to be able to call the API on behalf of your users.

                // This is also the moment to log in your users if you're using Laravel's Auth class
                // Auth::login($user) should do the trick.
                Auth::user()->update([
                    'bio' => $credentials->description,
                    'twitter' => $credentials->screen_name
                ]);

                $profile_image_url = file_get_contents(str_replace('_normal', '', $credentials->profile_image_url));
                $profile_banner_url = file_get_contents($credentials->profile_banner_url);

                $destinationPath = 'uploads/twitter';

                $profile_image = $destinationPath . '/twitter_profile_' . $credentials->screen_name . '.jpg';
                $profile_banner = $destinationPath . '/twitter_banner_' . $credentials->screen_name . '.jpg';

                file_put_contents($profile_image, $profile_image_url);
                file_put_contents($profile_banner, $profile_banner_url);

                $file1 = File::create([
                    'url' => $profile_image,
                    'original_name' => 'twitter_profile_' . $credentials->screen_name,
                    'type' => 'profile_photo'
                ]);

                $file2 = File::create([
                    'url' => $profile_banner,
                    'original_name' => 'twitter_banner_' . $credentials->screen_name,
                    'type' => 'profile_cover'
                ]);

                Auth::user()->files()->sync([$file1->id, $file2->id]);

                $twitter = Twitter::first();
                $twitter_data = [
                    'user_id' => Auth::user()->id,
                    'token' => $token['oauth_token'],
                    'secret' => $token['oauth_token_secret'],
                    'twitter_id' => $token['user_id'],
                    'screen_name' => $token['screen_name']
                ];

                (is_null($twitter))
                    ? Twitter::create($twitter_data)
                    : Twitter::update($twitter_data);

                session()->put('access_token', $token);

                return redirect('admin/settings?tab=networks')->with('flash_notice', 'Congrats! You\'ve successfully signed in!');
            }

            return redirect()->route('twitter.error')->with('flash_error', 'Crab! Something went wrong while signing you up!');
        }
    }

    public function error()
    {
        // Something went wrong, add your own error handling here
    }

    public function logout()
    {
        session()->forget('access_token');
        return redirect('/')->with('flash_notice', 'You\'ve successfully logged out!');
    }
}
