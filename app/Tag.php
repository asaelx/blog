<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * Fillable columns
     *
     * @var array
     */
    protected $fillable = ['name'];

    /**
     * Get the articles associated by the given tag
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function articles()
    {
        return $this->belongsToMany('App\Article');
    }

    /**
     * Get the published articles associated by the given tag
     *
     * @return Scope
     */
    public function publishedArticles()
    {
        return $this->articles()->published();
    }

    /**
     * Get the unpublished articles associated by the given tag
     *
     * @return Scope
     */
    public function unpublishedArticles()
    {
        return $this->articles()->unpublished();
    }
}
