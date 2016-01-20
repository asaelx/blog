
<div id="networks" class="tabbed {{ (!is_null($current) && $current == 'networks') ? 'active' : '' }}">{!! Form::model($user, ['url' => url('admin/networks', $user->slug), 'class' => 'form settings-form', 'method' => 'PATCH','files' => true]) !!}
  <div class="group">
    {!! Form::label('twitter', 'URL de Twitter', ['class' => 'label']) !!}
    {!! Form::text('twitter', null, ['class' => 'input']) !!}
  </div>
  <div class="group">
    {!! Form::label('facebook', 'URL de Facebook', ['class' => 'label']) !!}
    {!! Form::text('facebook', null, ['class' => 'input']) !!}
  </div>
  <div class="group">
    {!! Form::label('instagram', 'URL de Instagram', ['class' => 'label']) !!}
    {!! Form::text('instagram', null, ['class' => 'input']) !!}
  </div>
  <div class="group">
    {!! Form::label('youtube', 'URL de Youtube', ['class' => 'label']) !!}
    {!! Form::text('youtube', null, ['class' => 'input']) !!}
  </div>
  <div class="group">{!! Form::submit('Guardar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
</div>