<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>{{ $article->title }}</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
  </head>
  <body>
@include('partials.sidebar')

    <div class="row">
      <h1>{{ $article->title }}</h1>
    </div>
    <div class="row">
      <div class="column medium-12">
        <article>{{ $article->body }}</article>
@unless($article->tags->isEmpty())

                <ul>
@foreach($article->tags as $tag)

                          <li>{{ $tag->name }}</li>
@endforeach

                </ul>
@endunless

      </div>
    </div>
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>