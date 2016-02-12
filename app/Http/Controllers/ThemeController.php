<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Article;

class ThemeController extends Controller
{

    private $theme_path;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Article::latest()->published()->get();
        return view($this->theme() . 'home', compact('articles'));
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        return view($this->theme() . 'single', compact('article'));
    }

    /**
     * Get the theme path from .env file
     *
     * @return String
     */
    private function theme()
    {
        return $this->theme_path = 'themes.' . env('THEME') . '.';
    }
}
