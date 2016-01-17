<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Actualizar Etiqueta - {{ $tag->name }}</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
  </head>
  <body>
    <aside class="sidebar">
      <div class="profile">
        <div class="details">
          <div class="photo"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/allisongrayce/48.jpg" class="img"></div>
          <div class="title">Personal Blog</div>
          <div class="name">Brenda Graham</div><span class="typcn typcn-arrow-sorted-down"></span>
        </div>
      </div>
      <nav class="nav">
        <ul class="options">
          <li class="option"><a href="{{ url('admin/articles/create') }}" class="link active"> <span class="typcn typcn-pen"></span>Nuevo artículo</a></li>
          <li class="option"><a href="{{ url('admin/articles') }}" class="link"><span class="typcn typcn-document-text"></span>Contentido</a></li>
          <li class="option"><a href="{{ url('admin/tags') }}" class="link"><span class="typcn typcn-tags"></span>Etiquetas</a></li>
          <li class="option"><a href="{{ url('admin/settings') }}" class="link"> <span class="typcn typcn-cog"></span>Ajustes</a></li>
        </ul>
      </nav>
    </aside>
    <div class="content">
      <h1 class="title">Editar etiqueta {{ $tag->name }}</h1>{!! Form::model($tag, ['url' => url('admin/tags', $tag->name), 'method' => 'PATCH', 'class' => 'form']) !!}
      <fieldset class="fieldset">
        <div class="group">
          {!! Form::label('name', 'Nombre', ['class' => 'label']) !!}
          {!! Form::text('name', null, ['class' => 'input']) !!}
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <div class="group">{!! Form::submit('Actualizar', ['class' => 'btn blue submit-right']) !!}</div>
      </fieldset>{!! Form::close() !!}
    </div>
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>