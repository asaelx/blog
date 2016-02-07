<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Article;
use App\User;

class File extends Model
{
    /**
     * Fillable columns
     *
     * @var array
     */
    protected $fillable = [
        'url',
        'original_name',
        'type'
    ];

    /**
     * Get the articles associated by the given file
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function articles()
    {
        return $this->belongsToMany('App\Article');
    }

    /**
     * Get the users associated by the given file
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
