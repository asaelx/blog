@extends('themes.realnerdo.partials.base')

@section('title', 'Article')

@section('content')
    {{-- <div class="bg"></div> --}}
    <div class="wrapper">
        @include('themes.realnerdo.partials.article')
        @include('themes.realnerdo.partials.footer')
    </div>
@endsection
