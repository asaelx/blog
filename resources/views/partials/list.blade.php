
<ul id="published" class="posts active tabbed">
@if(!$published->isEmpty())

@foreach($published as $article)
   
  <li class="post">
    <div class="date">{{ \Carbon\Carbon::parse($article->published_at)->diffForHumans() }}</div><a href="{{ url('articles/' . $article->id . '/edit') }}" class="title">{{ $article->title }}</a>
    <div class="details">Por <a href="{{ url('articles/author', $article->user->name) }}">{{ $article->user->name }}</a> · Archivado en <a href="{{ url('articles/tagged', $article->tags->first()->name) }}">{{ $article->tags->first()->name }}</a></div>
    <ul class="options">
      <li class="option"><a href="{{ url('articles/' . $article->id . '/edit') }}" class="link edit"><span class="typcn typcn-edit"></span></a></li>
      <li class="option">{!! Form::open(['url' => url('articles', $article->id), 'method' => 'DELETE']) !!}
        <button type="submit" class="link delete"><span class="typcn typcn-trash"></span></button>{!! Form::close() !!}
      </li>
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

  <div class="empty"><i class="fa fa-frown-o"></i>
    <h4 class="legend">Aún no tienes artículos publicados</h4><a href="{{ url('articles/create') }}" class="btn blue">Escribe tu primer artículo</a>
  </div>
@endif

</ul>
<ul id="unpublished" class="posts tabbed">       
@if(!$unpublished->isEmpty())

@foreach($unpublished as $article)
   
  <li class="post">
    <div class="date">{{ \Carbon\Carbon::parse($article->published_at)->diffForHumans() }}</div><a href="{{ url('articles/' . $article->id . '/edit') }}" class="title">{{ $article->title }}</a>
    <div class="details">Por <a href="{{ url('articles/author', $article->user->name) }}">{{ $article->user->name }}</a> · Archivado en <a href="{{ url('articles/tagged', $article->tags->first()->name) }}">{{ $article->tags->first()->name }}</a></div>
    <ul class="options">
      <li class="option"><a href="{{ url('articles/' . $article->id . '/edit') }}" class="link edit"><span class="typcn typcn-edit"></span></a></li>
      <li class="option">{!! Form::open(['url' => url('articles', $article->id), 'method' => 'DELETE']) !!}
        <button type="submit" class="link delete"><span class="typcn typcn-trash"></span></button>{!! Form::close() !!}
      </li>
    </ul>
  </li>
@endforeach

  <div class="list-footer">
@if($unpublished->total() > 1)

    <div class="count">Hay {{ $unpublished->total() }} artículos en total</div>
@else

    <div class="count">Solo hay {{ $unpublished->total() }} artículo</div>
@endif
{!! $unpublished->render() !!}
  </div>
@else

  <div class="empty"><i class="fa fa-meh-o"></i>
    <h4 class="legend">No tienes artículos pendientes por publicar</h4><a href="{{ url('articles/create') }}" class="btn blue">Escribe un artículo</a>
  </div>
@endif

</ul>