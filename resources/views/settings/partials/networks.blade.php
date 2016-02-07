
<div id="networks" class="tabbed {{ (!is_null($current) && $current == 'networks') ? 'active' : '' }}">{!! Form::model($user, ['url' => url('admin/networks', $user->slug), 'class' => 'form settings-form', 'method' => 'PATCH','files' => true]) !!}
  <div class="group"><a href="{{ url('admin/twitter/login') }}" class="btn blue"><span class="typcn typcn-social-twitter"></span>
@if(!is_null($user->twitter))
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