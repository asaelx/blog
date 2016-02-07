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

@if(session()->has('flash_message'))

        <ul class="notifications">
          <li class="notification success">
            <div class="message"><span class="typcn typcn-tick"></span> {{ session('flash_message') }}</div>
          </li>
        </ul>
@endif

    <div class="content">
      <h1 class="title">Ajustes</h1>
<?php $tabs = ['blog' => 'Blog', 'profile' => 'Perfil', 'networks' => 'Redes Sociales']; ?>
      <div class="tools">
        <ul class="tabs">
<?php $current = (!is_null(request()->get('tab')) && array_key_exists(request()->get('tab'), $tabs)) ? request()->get('tab') : null ?>
<?php $i = 0; ?>
@foreach($tabs as $tab => $title)

                  <li class="tab"><a href="#" data-tab="{{ $tab }}" class="link {{ ($current == $tab || (is_null($current) && $i === 0)) ? 'active' : '' }}">{{ $title }}</a></li>
<?php $i++; ?>
@endforeach

        </ul>
      </div>
      <div id="blog" class="tabbed {{ (is_null($current) || $current == 'blog') ? 'active' : '' }}">{!! Form::model($setting, ['url' => url('admin/settings', $setting->id), 'class' => 'form settings-form', 'method' => 'PATCH','files' => true]) !!}
        <div class="group">
          {!! Form::label('title', 'Título', ['class' => 'label']) !!}
          {!! Form::text('title', null, ['class' => 'input']) !!}
        </div>
        <div class="group">
          {!! Form::label('description', 'Descripción', ['class' => 'label']) !!}
          {!! Form::textarea('description', null, ['class' => 'input autosize', 'size' => '50x3']) !!}
        </div>
        <div class="group">
          {!! Form::label('footer', 'Footer', ['class' => 'label']) !!}
          {!! Form::textarea('footer', null, ['class' => 'input autosize', 'size' => '50x3']) !!}
        </div>
        <div class="group">{!! Form::submit('Guardar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
      </div>
      <div id="profile" class="tabbed {{ (!is_null($current) && $current == 'profile') ? 'active' : '' }}">{!! Form::model($user, ['url' => url('admin/users', $user->slug), 'class' => 'form settings-form', 'method' => 'PATCH','files' => true]) !!}
        <div class="group half">
          {!! Form::label('cover', 'Foto de portada', ['class' => 'label']) !!}
          {!! Form::file('cover', ['class' => 'file img']) !!}
          <div style="background: url({{ (!is_null($user->cover())) ? url($user->cover()->url) : asset('img/1f47d.svg') }}) no-repeat center center; background-size: cover;" class="preview"></div>
@if(!is_null($user->cover()))
{!! Form::hidden('cover_id', $user->cover()->id) !!}
@endif

        </div>
        <div class="group half">
          {!! Form::label('photo', 'Foto de perfil', ['class' => 'label']) !!}
          {!! Form::file('photo', ['class' => 'file img']) !!}
          <div style="background: url({{ (!is_null($user->photo())) ? url($user->photo()->url) : asset('img/1f47d.svg') }}) no-repeat center center; background-size: cover;" class="preview"></div>
@if(!is_null($user->photo()))
{!! Form::hidden('photo_id', $user->photo()->id) !!}
@endif

        </div>
        <div class="group">
          {!! Form::label('name', 'Nombre', ['class' => 'label']) !!}
          {!! Form::text('name', null, ['class' => 'input']) !!}
        </div>
        <div class="group">
          {!! Form::label('occupation', 'Ocupación', ['class' => 'label']) !!}
          {!! Form::text('occupation', null, ['class' => 'input']) !!}
        </div>
        <div class="group">
          {!! Form::label('bio', 'Biografía', ['class' => 'label']) !!}
          {!! Form::textarea('bio', null, ['class' => 'input autosize', 'size' => '50x3']) !!}
        </div>
        <div class="group">
          {!! Form::label('email', 'Correo electrónico', ['class' => 'label']) !!}
          {!! Form::text('email', null, ['class' => 'input']) !!}
        </div>
        <div class="group">{!! Form::submit('Guardar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
      </div>
      <div id="networks" class="tabbed {{ (!is_null($current) && $current == 'networks') ? 'active' : '' }}">{!! Form::model($user, ['url' => url('admin/networks', $user->slug), 'class' => 'form settings-form', 'method' => 'PATCH','files' => true]) !!}
        <div class="group"><a href="{{ url('admin/twitter/login') }}" class="btn blue"><span class="typcn typcn-social-twitter"></span>
@if($user->twitter != '')
 Conectar otra vez con twitter
@else
 Conectar con twitter
@endif
</a>
        </div>
        <div class="group">
          {!! Form::label('facebook', 'Usuario de Facebook', ['class' => 'label']) !!}
          {!! Form::text('facebook', null, ['class' => 'input']) !!}
        </div>
        <div class="group">
          {!! Form::label('instagram', 'Usuario de Instagram', ['class' => 'label']) !!}
          {!! Form::text('instagram', null, ['class' => 'input']) !!}
        </div>
        <div class="group">
          {!! Form::label('youtube', 'URL de Youtube', ['class' => 'label']) !!}
          {!! Form::text('youtube', null, ['class' => 'input']) !!}
        </div>
        <div class="group">{!! Form::submit('Guardar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
      </div>
    </div>
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>