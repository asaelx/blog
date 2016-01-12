<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="{{ asset('css/master.css') }}">
  </head>
  <body>
    <div class="row">
      <div class="columns medium-12">{!! Form::open(['url' => '/auth/login']) !!}
        <fieldset>
          <legend>LOGIN</legend>
          <div class="column medium-6 medium-centered">
            <label>E-mail
              <input type="email" name="email" value="{{ old('email') }}">
            </label>
          </div>
          <div class="column medium-6 medium-centered">
            <label>Password
              <input id="password" type="password" name="password">
            </label>
          </div>
          <div class="column medium-6 medium-centered">
            <input id="remember" type="checkbox" name="remember">
            <label for="remember">Remember Me</label>
          </div>
          <div class="column medium-6 medium-centered">
            <input type="submit" value="Login" class="button">
          </div>
        </fieldset>{!! Form::close() !!}
      </div>
    </div>
    <script src="{{ asset('js/magic.js') }}"></script>
  </body>
</html>