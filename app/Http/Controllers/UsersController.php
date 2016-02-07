<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserNetworksRequest;
use App\User;
use App\File;
use Intervention\Image\ImageManagerStatic as Image;

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
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        $user->update($request->only(['name', 'occupation', 'bio', 'email']));

        $files_id[] = ($request->hasFile('photo'))
            ? $this->uploadFile($user, $request->file('photo'), 'profile_photo')
            : $request->input('photo_id');

        $files_id[] = ($request->hasFile('cover'))
            ? $this->uploadFile($user, $request->file('cover'), 'profile_cover')
            : $request->input('cover_id');

        $user->files()->sync($files_id);

        session()->flash('flash_message', 'Se han actualizado los datos de perfil');

        return redirect('admin/settings?tab=profile');
    }

    /**
     * Update the social networks url
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function networks(UserNetworksRequest $request, User $user)
    {
        $user->update($request->only(['twitter', 'facebook', 'instagram', 'youtube']));

        session()->flash('flash_message', 'Se han actualizado tus redes sociales');

        return redirect('admin/settings?tab=networks');
    }

    /**
     * Upload File with Request
     *
     * @param  User $user
     * @param  \Illuminate\Http\Request::file() $file
     */
    private function uploadFile($user, $file, $type)
    {
        $client_original_name = $file->getClientOriginalName();
        $fileName = time() . '_' . $client_original_name; //?
        $destinationPath = 'uploads/profile';
        $path = $destinationPath . '/' . $fileName;

        $image = Image::make($file->getRealPath());

        switch($type):
            case 'profile_photo':
                $image->fit(128, 128, function ($constraint) {
                    $constraint->upsize();
                })->save($path);
                break;
            case 'profile_cover':
                $image->resize(1440, null, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->save($path);
                break;
        endswitch;

        $original_name = pathinfo($client_original_name, PATHINFO_FILENAME);

        $file = File::create([
            'url' => $path,
            'original_name' => $original_name,
            'type' => $type
        ]);

        return $file->id;
    }
}
