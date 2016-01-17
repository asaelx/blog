
<div class="editor">
  <div class="title">
    <div class="options">
      <div data-drop="settings" class="btn blue publish drop-trigger">{{ $submitButtonText }}<span class="typcn typcn-arrow-sorted-down"></span></div>
      <div id="settings" class="settings drop">
        <div class="group">
          {!! Form::label('cover', 'Cover image', ['class' => 'label']) !!}
          {!! Form::file('cover', ['class' => 'file img']) !!}
        </div>
        <div class="group">
          {!! Form::label('tags', 'Tags', ['class' => 'label']) !!}
          {!! Form::select('tag_list[]', $tags, null, ['multiple', 'class' => 'select2']) !!}
        </div>
        <div class="group">
          {!! Form::label('published_at', 'Publish', ['class' => 'label']) !!}
          {!! Form::text('published_at', null, ['class' => 'datepicker input']) !!}
        </div>
        <div class="group">
          {!! Form::label('twitter', 'Post to twitter', ['class' => 'label']) !!}
          {!! Form::checkbox('twitter', 1, null, ['class' => 'onoffswitch']) !!}
        </div>
        <div class="group">{!! Form::submit($submitButtonText, ['class' => 'btn blue']) !!}</div>
      </div>
    </div>{!! Form::text('title', null, ['placeholder' => 'Your article title', 'id' => 'input-title']) !!}
  </div>
  <div class="body">{!! Form::textarea('body', null, ['class' => 'editable']) !!}</div>
</div>