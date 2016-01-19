
<div id="profile" class="tabbed {{ (!is_null($current) && $current == 'profile') ? 'active' : '' }}">{!! Form::model($user, ['url' => url('admin/users', $user->id), 'class' => 'form settings-form', 'method' => 'PATCH','files' => true]) !!}
  <div class="group">
    {!! Form::label('name', 'Nombre', ['class' => 'label']) !!}
    {!! Form::text('name', null, ['class' => 'input']) !!}
  </div>
  <div class="group">
    {!! Form::label('email', 'Correo electrónico', ['class' => 'label']) !!}
    {!! Form::text('email', null, ['class' => 'input']) !!}
  </div>
  <div class="group">{!! Form::submit('Guardar', ['class' => 'btn blue submit-right']) !!}</div>{!! Form::close() !!}
</div>