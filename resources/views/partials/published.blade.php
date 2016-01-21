
<ul id="published" class="list tabbed {{ (is_null($current) || $current == 'published') ? 'active' : '' }}">
@if(!$published->isEmpty())

@foreach($published as $article)

  <li class="item">
    <div class="date">{{ \Carbon\Carbon::parse($article->published_at)->diffForHumans() }}</div><a href="{{ url('admin/articles/' . $article->slug . '/edit') }}" class="title">{{ $article->title }}</a>
    <div class="details">Por <a href="{{ url('admin/articles/author', $article->user->slug) }}">{{ $article->user->name }}</a> · Archivado en <a href="{{ url('admin/articles/tagged', $article->tags->first()->slug) }}">{{ $article->tags->first()->name }}</a></div>
    <ul class="options">
      <li class="option">{!! Form::open(['url' => url('admin/articles', $article->slug), 'method' => 'DELETE']) !!}
        <button type="submit" class="link delete">Eliminar</button>{!! Form::close() !!}
      </li>
      <li class="option"><a href="{{ url('admin/articles/' . $article->slug . '/edit') }}" class="link edit">Editar</a></li>
    </ul>
  </li>
@endforeach

  <div class="list-footer">
@if($published->total() > 1)

    <div class="count">Hay {{ $published->total() }} artículos en total</div>
@else

    <div class="count">Solo hay {{ $published->total() }} artículo</div>
@endif
{!! $published->render() !!}
  </div>
@else

  <div class="empty"><i class="twa twa-hushed"></i>
    <h4 class="legend">Aún no tienes artículos publicados</h4><a href="{{ url('admin/articles/create') }}" class="btn blue">Escribe tu primer artículo</a>
  </div>
@endif

</ul>