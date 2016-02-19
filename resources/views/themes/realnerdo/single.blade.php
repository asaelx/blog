@extends('themes.realnerdo.partials.base')

@section('metas')
    <meta property="og:url" content="{{ url($article->slug) }}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{{ $article->title }}" />
    <meta property="og:description" content="{{ $article->excerpt }}" />
    <meta property="og:image" content="{{ url($article->cover()->url) }}" />
    <meta name="description" content="{{ $article->excerpt }}" />
    <meta name="robots" content="INDEX, FOLLOW" />
@endsection

@section('title', $article->title)

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
