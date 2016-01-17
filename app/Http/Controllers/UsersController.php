<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
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
    public function show(User $user)
    {
        $published = $user->publishedArticles()->paginate(10, ['*'], 'published_page');
        $unpublished = $user->unpublishedArticles()->paginate(10, ['*'], 'unpublished_page');
        return view('user.articles', compact('published', 'unpublished', 'user'));
    }
}
