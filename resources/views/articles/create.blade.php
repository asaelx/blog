<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Nuevo Artículo</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
  </head>
  <body>
@include('partials.sidebar')

@if($errors->any())

        <ul class="notifications">
@foreach($errors->all() as $error)

              <li class="notification error">
                <div class="message"><span class="typcn typcn-warning"></span> {{ $error }}</div>
              </li>
@endforeach

        </ul>
@endif

    <div class="content">{!! Form::model($article = new \App\Article, ['url' => url('admin/articles'), 'class' => 'form', 'files' => true]) !!}
@include('partials.form', ['submitButtonText' => 'Publicar'])
{!! Form::close() !!}
    </div>
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>