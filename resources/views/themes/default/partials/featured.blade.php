
@if(!is_null($featured))

<article class="article featured down-in">
  <div style="background: url({{ url($featured->files()->first()->url) }}) no-repeat center center; background-size: cover;" class="cover"></div>
  <h2 class="title">{{ $featured->title }}</h2>
  <div class="excerpt">
    <!-- excerpt-->
    <p>{{ $featured->excerpt }}</p>
  </div>
  <div class="details">
    <div class="date">{{ ucfirst(Date::parse($featured->published_at)->toFormattedDateString()) }}</div><a href="{{ url($featured->slug . '#disqus_thread') }}" class="comments"></a>
  </div>
@if(!is_null($featured->tags()->first()))
<a href="{{ url('tagged', $featured->tags()->first()->slug) }}" class="tag">{{ $featured->tags()->first()->name }}</a>
@endif
<a href="{{ url($featured->slug) }}" class="read btn green">Leer</a>
  <div class="background"><img src="{{ asset('img/bottom-bg.jpg') }}" alt="featured_bg" class="img"/></div>
</article>
@endif
