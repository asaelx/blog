<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Article;
use App\Tag;

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
        $articles = Article::latest()->published()->simplePaginate(5);
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
     * Display a listing of the resource associated with the tag name.
     *
     * @param Tag $tag
     * @return \Illuminate\Http\Response
     */
    public function tagged(Tag $tag)
    {
        $articles = $tag->publishedArticles()->simplePaginate(5);
        $currentTag = $tag;
        return view($this->theme() . 'home', compact('articles', 'currentTag'));
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
