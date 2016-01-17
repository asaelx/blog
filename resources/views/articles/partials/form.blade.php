
<div class="editor">
  <div class="title">
    <div class="options">
      <div data-drop="settings" class="btn blue publish drop-trigger">{{ $submitButtonText }}<span class="typcn typcn-arrow-sorted-down"></span></div>
      <div id="settings" class="settings drop">
        <div class="group">
          {!! Form::label('cover', 'Imagen de portada', ['class' => 'label']) !!}
          {!! Form::file('cover', ['class' => 'file img']) !!}
        </div>
        <div class="group">
          {!! Form::label('tags', 'Etiquetas', ['class' => 'label']) !!}
          {!! Form::select('tag_list[]', $tags, null, ['multiple', 'class' => 'select2']) !!}
        </div>
        <div class="group">
          {!! Form::label('published_at', 'Fecha de publicación', ['class' => 'label']) !!}
          {!! Form::text('published_at', null, ['class' => 'datepicker input']) !!}
        </div>
        <div class="group">
          {!! Form::label('twitter', 'Publicar en twitter', ['class' => 'label']) !!}
          {!! Form::checkbox('twitter', 1, null, ['class' => 'onoffswitch']) !!}
        </div>
        <div class="group">{!! Form::submit($submitButtonText, ['class' => 'btn blue']) !!}</div>
      </div>
    </div>{!! Form::text('title', null, ['placeholder' => 'El título de tu artículo', 'id' => 'input-title']) !!}
  </div>
  <div class="body">{!! Form::textarea('body', null, ['class' => 'editable']) !!}</div>
</div>