<!DOCTYPE html>
<html lang="en"></html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Register</title>
  <link rel="stylesheet" href="{{ asset('css/master.css') }}">
</head>
<body>
  <div class="row">
    <div class="columns medium-12">{!! Form::open(['url' => '/auth/register']) !!}
      <fieldset>
        <legend>REGISTER</legend>
        <div class="column medium-6 medium-centered">
          <label>Name
            <input type="text" name="name" value="{{ old('name') }}">
          </label>
        </div>
        <div class="column medium-6 medium-centered">
          <label>E-mail
            <input type="email" name="email" value="{{ old('email') }}">
          </label>
        </div>
        <div class="column medium-6 medium-centered">
          <label>Password
            <input type="password" name="password">
          </label>
        </div>
        <div class="column medium-6 medium-centered">
          <label>Confirm password
            <input type="password" name="password_confirmation">
          </label>
        </div>
        <div class="column medium-6 medium-centered">
          <input type="submit" value="Register" class="button">
        </div>
      </fieldset>{!! Form::close() !!}
    </div>
  </div>
  <script src="{{ asset('js/magic.js') }}" type="text/javascript"></script>
</body>