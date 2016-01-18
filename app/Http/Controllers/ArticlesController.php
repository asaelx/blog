<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use Auth;
use App\Article;
use App\Tag;
use App\File;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $published = Article::latest()->published()->paginate(10, ['*'], 'published_page');
        $unpublished = Article::latest()->unpublished()->paginate(10, ['*'], 'unpublished_page');
        return view('articles.index', compact('published', 'unpublished'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $tags = Tag::lists('name', 'id');
        return view('articles.create', compact('tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleRequest $request)
    {
        if($request->hasFile('cover')):
            $path = $this->uploadFile($request->file('cover'));
            $file = File::create([
                'url' => $path,
                'original_name' => pathinfo($request->file('cover')->getClientOriginalName(), PATHINFO_FILENAME)
            ]);
        endif;


        $article = Auth::user()->articles()->create($request->all());

        $this->syncTags($article, $request->input('tag_list'));

        $article->files()->attach($file->id);

        return redirect('admin/articles');
    }

    /**
     * Display the specified resource.
     *
     * @param  Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {

        return view('articles.show', compact('article'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        $tags = Tag::lists('name', 'id');

        return view('articles.edit', compact('article', 'tags'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(ArticleRequest $request, Article $article)
    {

        $article->update($request->all());

        $this->syncTags($article, $request->input('tag_list'));

        return redirect('admin/articles');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Article $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $this->syncTags($article, []);
        $article->delete();

        return redirect('admin/articles');
    }

    /**
     * Sync up the list of tags in the database
     *
     * @param  Article $article
     * @param  array $tags
     */
    private function syncTags($article, array $tags)
    {
        if(!is_null($tags)):
            $currentTags = array_filter($tags, 'is_numeric');
            $newTags = array_diff($tags, $currentTags);

            foreach($newTags as $newTag):
                if($tag = Tag::create(['name' => $newTag]))
                    $currentTags[] = $tag->id;
            endforeach;

            $article->tags()->sync($currentTags);
        endif;
    }

    /**
     * Upload File with Request
     *
     * @param  \Illuminate\Http\Request::file() $file
     * @return string  $path
     */
    private function uploadFile($file)
    {
        $fileName = time() . '_' . $file->getClientOriginalName();
        $destinationPath = 'uploads';
        $file->move($destinationPath, $fileName);

        $path = $destinationPath . '/' . $fileName;

        return $path;
    }
}
