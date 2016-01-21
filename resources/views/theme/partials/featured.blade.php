
<article class="article featured down-in">
  <div style="background: url({{ url($featured->files()->first()->url) }}) no-repeat center center; background-size: cover;" class="cover"></div>
  <h2 class="title">{{ $featured->title }}</h2>
  <div class="excerpt">
    <!-- excerpt-->
    <p>Tousled food truck polaroid, salvia bespoke small batch Pinterest Marfa. Fingerstache authentic craft beer, food truck Banksy Carles kale chips hoodie. Trust fund artisan master cleanse fingerstache post-ironic.</p>
  </div>
  <div class="details">
    <div class="date">{{ ucfirst(Date::parse($featured->published_at)->toFormattedDateString()) }}</div>
  </div>
@if(!is_null($featured->tags()->first()))
<a href="{{ $featured->tags()->first()->slug }}" class="tag">{{ $featured->tags()->first()->name }}</a>
@endif
<a href="{{ url($featured->slug) }}" class="read btn green">Leer</a>
  <div class="background"><img src="{{ asset('img/bottom-bg.jpg') }}" alt="featured_bg" class="img"/></div>
</article>