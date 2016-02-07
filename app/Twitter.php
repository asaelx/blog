<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Twitter extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'twitters';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'token',
        'secret',
        'twitter_id',
        'screen_name'
    ];

    /**
     * Get the user associated by the twitter tokens
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
