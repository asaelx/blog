
<div id="networks" class="tabbed {{ (!is_null($current) && $current == 'networks') ? 'active' : '' }}">{!! Form::open(['url' => url('admin/networks'), 'class' => 'form settings-form', 'method' => 'PATCH','files' => true]) !!}
  <div class="group">
    {!! Form::label('twitter_username', 'Usuario de Twitter', ['class' => 'label']) !!}
    {!! Form::text('twitter_username', null, ['class' => 'input']) !!}
  </div>
  <div class="group">
    {!! Form::label('facebook_username', 'Usuario de Facebook', ['class' => 'label']) !!}
    {!! Form::text('facebook_username', null, ['class' => 'input']) !!}
  </div>
  <div class="group">
    {!! Form::label('instagram_username', 'Usuario de Instagram', ['class' => 'label']) !!}
    {!! Form::text('instagram_username', null, ['class' => 'input']) !!}
  </div>
  <div class="group">
    {!! Form::label('youtube_channel', 'Canal de Youtube', ['class' => 'label']) !!}
    {!! Form::text('youtube_channel', null, ['class' => 'input']) !!}
  </div>
  <div class="group">{!! Form::submit('Guardar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
</div>