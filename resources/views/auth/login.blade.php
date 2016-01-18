<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Instalación</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
  </head>
  <body>{!! Form::open(['url' => url('auth/login'), 'class' => 'form sign-form']) !!}
    <fieldset class="fieldset">
      <legend class="legend">Iniciar sesión</legend>
      <div class="group">
        {!! Form::label('email', 'Correo electrónico', ['class' => 'label']) !!}
        {!! Form::text('email', old('email'), ['class' => 'input']) !!}
      </div>
      <div class="group">
        {!! Form::label('password', 'Contraseña', ['class' => 'label']) !!}
        {!! Form::password('password', ['class' => 'input']) !!}
      </div>
      <div class="group">
        {!! Form::label('remember', 'Recordarme', ['class' => 'label']) !!}
        {!! Form::checkbox('remember', null, null, ['class' => 'onoffswitch']) !!}
      </div>
    </fieldset>
    <div class="group">{!! Form::submit('Entrar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>