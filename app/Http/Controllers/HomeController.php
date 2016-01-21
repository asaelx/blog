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

    protected $data = [];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->getGeneral();
        $this->data['articles'] = Article::where('id', '!=', $this->data['featured']->id)->latest()->published()->simplePaginate(8);
        if(is_null($this->data['setting']))
            return redirect('auth/register');
        return view('theme.index', $this->data);
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        $this->getGeneral();
        $this->data['article'] = $article;
        $this->data['readings'] = Article::where('id', '!=', $article->id)->orderByRaw('RAND()')->take(2)->get();
        return view('theme.single.index', $this->data);
    }

    /**
     * Display a listing of the articles associated to the tag.
     *
     * @return \Illuminate\Http\Response
     */
    public function tagged(Tag $tag)
    {
        $this->getGeneral();
        $this->data['currentTag'] = $tag;
        $this->data['articles'] = $tag->publishedArticles()->simplePaginate(8);
        return view('theme.index', $this->data);
    }

    /**
     * Display a listing of the articles associated to the user.
     *
     * @return \Illuminate\Http\Response
     */
    public function author(User $user)
    {
        $this->getGeneral();
        $this->data['currentAuthor'] = $user;
        $this->data['articles'] = $user->publishedArticles()->simplePaginate(8);
        return view('theme.index', $this->data);
    }

    private function getGeneral()
    {
        $this->data['setting'] = Setting::latest()->first();
        $this->data['admin']= User::latest()->first();
        $this->data['tags'] = Tag::all();
        $this->data['featured'] = Article::latest()->published()->first();
    }

}
