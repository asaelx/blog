@extends('themes.realnerdo.partials.base')

@section('title', 'Article')

@section('content')
    {{-- <div class="bg"></div> --}}
    <div class="wrapper post">
        @include('themes.realnerdo.partials.article')
        @include('themes.realnerdo.partials.share')
        @include('themes.realnerdo.partials.profile')
        <div id="disqus_thread"></div>
        @include('themes.realnerdo.partials.footer')
    </div>
@endsection
