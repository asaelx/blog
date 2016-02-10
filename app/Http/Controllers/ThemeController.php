<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ThemeController extends Controller
{

    private $theme_path;

    public function index()
    {
        return view($this->theme() . 'home');
    }

    public function show()
    {
        return view($this->theme() . 'single');
    }

    /**
     * Get the theme path from .env file
     *
     * @return String
     */
    private function theme()
    {
        return $this->theme_path = 'themes.' . env('THEME') . '.';
    }
}
