<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Actualizar Etiqueta - {{ $tag->name }}</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
  </head>
  <body>
@include('partials.sidebar')

    <div class="content">
@if($errors->any())

            <ul class="notifications">
@foreach($errors->all() as $error)

                    <li class="notification error">
                      <div class="message"><span class="typcn typcn-warning"></span> {{ $error }}</div>
                    </li>
@endforeach

            </ul>
@endif

      <h1 class="title">Editar etiqueta {{ $tag->name }}</h1>{!! Form::model($tag, ['url' => url('admin/tags', $tag->slug), 'method' => 'PATCH', 'class' => 'form settings-form']) !!}
      <div class="group">
        {!! Form::label('name', 'Nombre', ['class' => 'label']) !!}
        {!! Form::text('name', null, ['class' => 'input']) !!}
      </div>
      <div class="group">
        {!! Form::label('navigation', 'Mostrar en navegación', ['class' => 'label']) !!}
        {!! Form::checkbox('navigation', 1, null, ['class' => 'onoffswitch']) !!}
      </div>
      <div class="group">{!! Form::submit('Actualizar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
    </div>
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>