<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

use App\Article;
use App\File;
use App\Setting;

class User extends Model implements AuthenticatableContract,
                                    AuthorizableContract,
                                    CanResetPasswordContract,
                                    SluggableInterface
{
    use Authenticatable, Authorizable, CanResetPassword, SluggableTrait;

    /**
     * Sluggable columns
     *
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'name',
        'save_to'    => 'slug',
    ];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'bio',
        'password',
        'twitter',
        'facebook',
        'instagram',
        'youtube'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * A user can have many articles
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function articles()
    {
        return $this->hasMany('App\Article');
    }

    /**
     * Get the published articles associated by the given user
     *
     * @return Scope
     */
    public function publishedArticles()
    {
        return $this->articles()->published();
    }

    /**
     * Get the unpublished articles associated by the given user
     *
     * @return Scope
     */
    public function unpublishedArticles()
    {
        return $this->articles()->unpublished();
    }

    /**
     * Get the files associated to the given user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function files()
    {
        return $this->belongsToMany('App\File')
                    ->withTimestamps();
    }

    /**
     * Get the settings associated to the given user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function settings()
    {
        return $this->belongsToMany('App\Setting')
                    ->withTimestamps();
    }
}
