<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\SettingRequest;
use Auth;
use App\Setting;

class SettingsController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('settings.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $setting = Setting::create($request->all());

        return redirect('admin/articles');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $setting = Setting::latest()->first();
        $user = Auth::user();
        return view('settings.index', compact('setting', 'user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SettingRequest $request, $id)
    {
        $setting = Setting::findOrFail($id);
        $setting->update($request->all());

        session()->flash('flash_message', 'Se han actualizado los datos del Blog');

        return redirect('admin/settings?tab=blog');
    }
}
