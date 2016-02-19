<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Auth\Guard;

use App\Setting;
use App\Tag;
use App\User;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Guard $auth)
    {
        view()->composer('partials.sidebar', function($view) use ($auth)
        {
            $setting = Setting::latest()->first();
            $currentUser = $auth->user();
            $view->with(compact('setting', 'currentUser'));
        });

        view()->composer('themes.realnerdo.partials.topbar', function($view)
        {
            $tags = Tag::where('navigation', 1)->get();
            $view->with(compact('tags'));
        });

        view()->composer('themes.realnerdo.partials.profile', function($view)
        {
            $admin = User::first();
            $view->with(compact('admin'));
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
