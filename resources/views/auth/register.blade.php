<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Instalación</title>
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
{!! Form::open(['url' => url('auth/register'), 'class' => 'form sign-form']) !!}
    <fieldset class="fieldset">
      <legend class="legend">Datos personales</legend>
      <div class="group">
        {!! Form::label('name', 'Nombre', ['class' => 'label']) !!}
        {!! Form::text('name', old('name'), ['class' => 'input']) !!}
      </div>
      <div class="group">
        {!! Form::label('email', 'Correo electrónico', ['class' => 'label']) !!}
        {!! Form::text('email', old('email'), ['class' => 'input']) !!}
      </div>
      <div class="group">
        {!! Form::label('password', 'Contraseña', ['class' => 'label']) !!}
        {!! Form::password('password', ['class' => 'input']) !!}
      </div>
      <div class="group">
        {!! Form::label('password_confirmation]', 'Confirmar contraseña', ['class' => 'label']) !!}
        {!! Form::password('password_confirmation', ['class' => 'input']) !!}
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <legend class="legend">Datos del blog</legend>
      <div class="group">
        {!! Form::label('setting[title]', 'Título', ['class' => 'label']) !!}
        {!! Form::text('setting[title]', old('setting[title]'), ['class' => 'input']) !!}
      </div>
      <div class="group">
        {!! Form::label('setting[description]', 'Descripción', ['class' => 'label']) !!}
        {!! Form::textarea('setting[description]', old('setting[description]'), ['class' => 'input autosize', 'size' => '50x3']) !!}
      </div>
    </fieldset>
    <div class="group">{!! Form::submit('Registrar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>