<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Article extends Model
{
    /**
     * Fillable columns
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'body',
        'published_at'
    ];

    /**
     * Dates as Carbon instances
     *
     * @var array
     */
    protected $dates = ['published_at'];

    /**
     * Scope for published articles
     *
     * @param  $query
     */
    public function scopePublished($query)
    {
        $query->where('published_at', '<=', Carbon::now());
    }

    /**
     * Scope for unpublished articles
     *
     * @param  $query
     */
    public function scopeUnpublished($query)
    {
        $query->where('published_at', '>', Carbon::now());
    }

    /**
     * Mutator for published_at attribute
     *
     * @param string $date
     */
    public function setPublishedAtAttribute($date)
    {
        $this->attributes['published_at'] = Carbon::parse($date);
    }

    /**
     * Accesor for published_at attribute
     *
     * @param  string $date
     * @return Carbon\Carbon
     */
    public function getPublishedAtAttribute($date)
    {
        return Carbon::parse($date)->format('Y-m-d');
    }

    /**
     * Article is owned by a user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\Article');
    }

    /**
     * Get the tags associated to the given article
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }

    /**
     * Get the files associated to the given article
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function files()
    {
        return $this->belongsToMany('App\File');
    }


}
