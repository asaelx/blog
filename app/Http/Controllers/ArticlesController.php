<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Auth;
use App\Article;
use App\Tag;
use App\File;
use \Twitter as Tweet;
use App\Twitter;
use Intervention\Image\ImageManagerStatic as Image;
use Storage;

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
        $twitter = Auth::user()->twitter_token()->first();
        $hasTwitter = (is_null($twitter)) ? false : true;
        $tags = Tag::lists('name', 'id');
        return view('articles.create', compact('tags', 'hasTwitter'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticleRequest $request)
    {
        $article = Auth::user()->articles()->create($request->all());

        $this->syncTags($article, $request->input('tag_list'));

        if($request->hasFile('cover'))
            $this->uploadFile($article, $request->file('cover'));

        if($request->has('twitter'))
            $this->tweet($article);

        session()->flash('flash_message', 'Se ha publicado tu artículo');

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
        $twitter = Auth::user()->twitter_token()->first();
        $hasTwitter = (is_null($twitter)) ? false : true;
        $tags = Tag::lists('name', 'id');
        return view('articles.edit', compact('article', 'tags', 'hasTwitter'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  UpdateArticleRequest  $article
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        $article->update($request->except('published_at'));

        $this->syncTags($article, $request->input('tag_list'));

        if($request->hasFile('cover'))
            $this->uploadFile($article, $request->file('cover'));

        if($request->has('twitter'))
            $this->tweet($article);

        session()->flash('flash_message', 'Se ha actualizado tu artículo');

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
        $article->tags()->sync([]);
        $article->files()->sync([]);
        $article->delete();

        session()->flash('flash_message', 'Se ha eliminado tu artículo');

        return redirect('admin/articles');
    }

    /**
     * Sync up the list of tags in the database
     *
     * @param  Article $article
     * @param  array|null $tags
     */
    private function syncTags($article, $tags)
    {
        if(is_null($tags))
            $tags = ['General'];

        $currentTags = array_filter($tags, 'is_numeric');
        $newTags = array_diff($tags, $currentTags);

        foreach($newTags as $newTag):
            if($tag = Tag::create(['name' => $newTag, 'navigation' => true]))
                $currentTags[] = $tag->id;
        endforeach;

        $article->tags()->sync($currentTags);
    }

    /**
     * Upload File with Request
     *
     * @param  Article $article
     * @param  \Illuminate\Http\Request::file() $file
     */
    private function uploadFile($article, $file)
    {
        $uploadedFile = $this->s3Upload($file, 'articles');

        $file = File::create([
            'url' => $uploadedFile['public_url'],
            'original_name' => $uploadedFile['original_name'],
            'type' => 'article_cover'
        ]);

        $article->files()->sync([$file->id]);
    }

    /**
     * Upload images from Markdown Editor
     *
     * @param  Request $request
     * @return Json Response
     */
    public function editorUpload(Request $request)
    {
        $file = $request->file('file');

        $uploadedFile = $this->s3Upload($file, 'articles');

        $response = [
            'type' => 'success',
            'id' => $uploadedFile['file_name'],
            'path' => $uploadedFile['public_url']
        ];

        return response()->json($response);
    }

    /**
     * Post article to twitter with cover image
     *
     * @param  $article
     * @return void
     */
    private function tweet($article)
    {

        Tweet::reconfig([
            'token'  => Auth::user()->twitter_token->token,
            'secret' => Auth::user()->twitter_token->secret
        ]);
        $media = Tweet::uploadMedia([
            'media' => file_get_contents($article->cover()->url)
        ]);

        Tweet::postTweet([
            'status' => $article->title . ' ' . url($article->slug),
            'media_ids' => $media->media_id_string
        ]);
    }

    /**
     * Upload file to Amazon s3
     *
     * @param  UploadedFile $file
     * @param  String $subdirectory
     * @return Array $uploadedFile
     */
    private function s3Upload($file, $subdirectory)
    {
        $client_original_name = $file->getClientOriginalName();
        $fileName = time() . '_' . $client_original_name;
        $destinationPath = 'uploads/' . $subdirectory;
        $path = $destinationPath . '/' . $fileName;

        $image = Image::make($file->getRealPath());
        $image->resize(600, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        $stream = $image->stream();

        $s3 = Storage::disk('s3');
        $s3->put($path, $stream->__toString(), 'public');
        $client = $s3->getDriver()->getAdapter()->getClient();
        $public_url = $client->getObjectUrl(env('S3_BUCKET'), $path);

        $original_name = pathinfo($client_original_name, PATHINFO_FILENAME);

        $uploadedFile = [
            'original_name' => $original_name,
            'file_name' => $fileName,
            'public_url' => $public_url
        ];

        return $uploadedFile;
    }
}
