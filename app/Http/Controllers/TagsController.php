<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Tag;

class TagsController extends Controller
{
    /**
     * Attach middleware auth to the Controller
     *
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag)
    {
        $published = $tag->publishedArticles;
        $unpublished = $tag->unpublishedArticles;
        return view('tags.articles', compact('published', 'unpublished', 'tag'));
    }
}
