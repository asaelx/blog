<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class Tag extends Model implements SluggableInterface
{
    use SluggableTrait;

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
