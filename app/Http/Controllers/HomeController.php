<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Setting;
use App\User;
use App\Article;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $setting = Setting::latest()->first();
        $admin = User::latest()->first();
        $featured = Article::latest()->first();
        $count = Article::count();
        $articles = Article::latest()->simplePaginate(1);
        if(is_null($setting))
            return redirect('auth/register');
        return view('theme.index', compact('setting', 'admin', 'featured', 'articles'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

}
