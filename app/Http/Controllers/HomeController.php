<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Setting;
use App\User;
use App\Article;
use App\Tag;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $setting = Setting::latest()->first();
        $admin = User::latest()->first();
        $tags = Tag::all();
        $featured = Article::latest()->published()->first();
        $articles = Article::where('id', '!=', $featured->id)->latest()->published()->simplePaginate(8);
        if(is_null($setting))
            return redirect('auth/register');
        return view('theme.index', compact('setting', 'tags', 'admin', 'featured', 'articles'));
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        $setting = Setting::latest()->first();
        $tags = Tag::all();
        $readings = Article::orderByRaw('RAND()')->take(2)->get();
        return view('theme.single.index', compact('setting', 'tags', 'article', 'readings'));
    }

}
