
<div class="articles">
  <div class="wrapper">
    <div class="row">
      <h3 class="section-title">
@if(request()->is('tagged/*'))
Artículos archivados en <a href="{{ url('tagged', $currentTag->slug) }}">{{ $currentTag->name }}</a>
@endif

@if(request()->is('author/*'))
Artículos escritos por <a href="{{ url('author', $currentAuthor->slug) }}">{{ $currentAuthor->name }}</a>
@endif

@if(request()->is('/'))
Últimos artículos
@endif

      </h3>
@if(!$articles->isEmpty())

@foreach($articles as $article)

                  <div class="col-3 show-in">
                    <article class="article">
                      <div style="background: url({{ url($article->files()->first()->url) }}) no-repeat center center; background-size: cover;" class="cover"></div>
                      <h2 class="title">{{ $article->title }}</h2>
                      <div class="details">
                        <div class="date">{{ ucfirst(Date::parse($article->published_at)->toFormattedDateString()) }}</div>
                      </div>
@if(!is_null($article->tags()->first()))
<a href="{{ url('tagged', $article->tags()->first()->slug) }}" class="tag">{{ $article->tags()->first()->name }}</a>
@endif
<a href="{{ url($article->slug) }}" class="read btn white">Leer</a>
                    </article>
                  </div>
@endforeach

@else

                  <div class="col-12">
                    <div class="empty">No hay artículos para mostrar</div>
                  </div>
@endif

    </div>
    <div class="row pagination">
@if(!is_null($articles->previousPageUrl()))
<a href="{{ $articles->previousPageUrl() }}" class="btn blue previous"><span class="typcn typcn-chevron-left"></span> Anterior</a>
@endif

@if(!is_null($articles->nextPageUrl()))
<a href="{{ $articles->nextPageUrl() }}" class="btn blue next">Siguiente <span class="typcn typcn-chevron-right"></span></a>
@endif

    </div>
  </div>
</div>