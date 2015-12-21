<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    /**
     * Fillable columns
     *
     * @var array
     */
    protected $fillable = [
        'url',
        'original_name'
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
}
