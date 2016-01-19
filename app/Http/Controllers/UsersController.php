<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        session()->flash('flash_message', 'Se han actualizado los datos de perfil');

        return redirect('admin/settings?tab=profile');
    }
}
