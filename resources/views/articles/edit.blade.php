<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Edit Article</title>
    <link rel="stylesheet" href="{{ asset('css/master.css') }}">
  </head>
  <body>
    <div class="row">
      <div class="column medium-12"></div>{!! Form::model($article, ['method' => 'PATCH', 'url' => 'articles/' . $article->id]) !!}
      <fieldset>
        <legend>{{ $article->title }}</legend>
@include('articles.partials.form', ['submitButtonText' => 'Update Article'])

      </fieldset>{!! Form::close() !!}
    </div>
    <script src="{{ asset('js/magic.js') }}"></script>
  </body>
</html>