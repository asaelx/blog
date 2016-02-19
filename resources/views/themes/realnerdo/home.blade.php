@extends('themes.realnerdo.partials.base')

@section('metas')
    <meta property="og:url" content="{{ url('/') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $blog->title }}" />
    <meta property="og:description" content="{{ $blog->description }}" />
    <meta name="description" content="{{ $blog->description }}" />
    <meta name="robots" content="INDEX, FOLLOW" />
@endsection

@section('title', $blog->title)

@section('content')
    <div class="bg"></div>
    <div class="wrapper">
        @include('themes.realnerdo.partials.profile')
        @include('themes.realnerdo.partials.stream')
        @include('themes.realnerdo.partials.footer')
    </div>
@endsection
