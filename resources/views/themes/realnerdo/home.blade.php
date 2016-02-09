@extends('themes.realnerdo.partials.base')

@section('title', 'Welcome')

@section('content')
    <div class="bg"></div>
    <div class="row">
        <div class="sidebar">
            @include('themes.realnerdo.partials.profile')
            @include('themes.realnerdo.partials.instagram')
            @include('themes.realnerdo.partials.footer')
        </div>
        <div class="stream">
            @include('themes.realnerdo.partials.stream')
        </div>
    </div>
@endsection
