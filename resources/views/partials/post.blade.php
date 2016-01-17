
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