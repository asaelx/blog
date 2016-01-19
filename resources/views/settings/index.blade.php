<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Ajustes</title>
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

    <div class="content">
      <h1 class="title">Ajustes</h1>{!! Form::model($setting, ['url' => url('admin/settings', $setting->id), 'class' => 'form settings-form', 'method' => 'PATCH','files' => true]) !!}
      <fieldset class="fieldset">
        <legend class="legend">Datos del blog</legend>
        <div class="group">
          {!! Form::label('title', 'Título', ['class' => 'label']) !!}
          {!! Form::text('title', null, ['class' => 'input']) !!}
        </div>
        <div class="group">
          {!! Form::label('description', 'Descripción', ['class' => 'label']) !!}
          {!! Form::textarea('description', null, ['class' => 'input autosize', 'size' => '50x3']) !!}
        </div>
      </fieldset>
      <div class="group">{!! Form::submit('Guardar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
    </div>
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>