<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Authentication routes
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function(){

    // Index
    Route::get('/', function(){
        return redirect('admin/articles');
    });

    // Medium Editor
    Route::post('editorUpload', 'ArticlesController@editorUpload');
    Route::post('editorDelete', 'ArticlesController@editorDelete');

    // Tags
    Route::get('articles/tagged/{tags}', 'TagsController@show');
    Route::resource('tags', 'TagsController');

    // Articles
    Route::get('articles/author/{users}', 'UsersController@show');
    Route::resource('articles', 'ArticlesController');

    // Settings
    Route::get('settings', 'SettingsController@edit');
    Route::patch('settings/{id}', 'SettingsController@update');

    // Users
    Route::patch('users/{users}', 'UsersController@update');
    Route::patch('networks/{users}', 'UsersController@networks');
});

// Theme
Route::get('/', 'HomeController@index');
Route::get('{articles}', 'HomeController@show');
Route::get('tagged/{tags}', 'HomeController@tagged');
Route::get('author/{users}', 'HomeController@author');
