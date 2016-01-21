<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Setting extends Model
{
    /**
     * Fillable columns
     *
     * @var array
     */
    protected $fillable = ['title', 'description', 'footer'];

    /**
     * Get the users associated by the settings
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
