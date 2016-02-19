
<div class="editor">
  <div class="title">
    <div class="options">
      <div data-drop="article-settings" class="btn blue publish drop-trigger">{{ $submitButtonText }}<span class="typcn typcn-arrow-sorted-down"></span></div>
      <div id="article-settings" class="settings drop">
        <div class="group">
          {!! Form::label('cover', 'Imagen de portada', ['class' => 'label']) !!}
          {!! Form::file('cover', ['class' => 'file img']) !!}
@if(!is_null($article->cover()))

                    <div style="background: url({{ url($article->cover()->url) }}) no-repeat center center; background-size: cover;" class="preview wide"></div>
@endif

        </div>
        <div class="group">
          {!! Form::label('tags', 'Etiquetas', ['class' => 'label']) !!}
          {!! Form::select('tag_list[]', $tags, null, ['multiple', 'class' => 'select2']) !!}
        </div>
        <div class="group">
          {!! Form::label('published_at', 'Fecha de publicación', ['class' => 'label']) !!}
          {!! Form::text('published_at', \Carbon\Carbon::now()->tz('America/Mexico_City')->format('Y-m-d'), ['class' => 'datepicker input']) !!}
        </div>
        <div class="group">
          {!! Form::label('twitter', 'Publicar en twitter', ['class' => 'label']) !!}
          {!! Form::checkbox('twitter', 1, null, ['class' => 'onoffswitch']) !!}
        </div>
        <div class="group">{!! Form::submit($submitButtonText, ['class' => 'btn blue']) !!}</div>
      </div>
    </div>{!! Form::text('title', null, ['placeholder' => 'El título de tu artículo', 'id' => 'input-title']) !!}
  </div>
  <div class="body">
    <div class="editorwrap">
      <!-- Markdown Editor-->
      <section class="entry-markdown">
        <header class="floatingheader"><small>Markdown</small><a href="#" class="markdown-help"><span class="hidden">What is Markdown?</span></a></header>
        <section class="entry-markdown-content">{!! Form::textarea('body', null, ['id' => 'entry-markdown']) !!}</section>
      </section>
      <!-- Markdown Editor END-->
      <!-- Markdown Preview-->
      <section class="entry-preview active">
        <header class="floatingheader"><small class="pull-left">Vista previa</small><small class="pull-right"><span class="entry-word-count js-entry-word-count">0 palabras</span></small></header>
        <section class="entry-preview-content">
          <div class="rendered-markdown"></div>
        </section>
      </section>
      <!-- Markdown Preview END-->
    </div>
  </div>
</div>