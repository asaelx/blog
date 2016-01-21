<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>{{ $setting->title }}</title>
    <link rel="stylesheet" href="{{ asset('css/master.css') }}">
  </head>
  <body>
    <nav class="nav">
      <div class="wrapper"><a href="{{ url('/') }}" class="logo"><img src="{{ asset('img/asael_logo.svg') }}" height="32" alt="{{ $setting->title }}" class="img"><span class="subtitle">{{ $setting->title }}</span></a>
        <label for="toggle-menu" class="toggle-menu"><img src="{{ asset('img/menu.svg') }}" alt="menu" class="img">
          <input id="toggle-menu" type="checkbox">
          <ul class="tags">
            <li class="option"><img src="{{ asset('img/close.svg') }}" alt="close"></li>
@if(!$tags->isEmpty())

@foreach($tags as $tag)

                                    <li class="option"><a href="{{ url('tagged', $tag->slug) }}" class="link">{{ $tag->name }}</a></li>
@endforeach

@endif

          </ul>
        </label>
      </div>
    </nav>
    <div class="bg-top up-in"></div>
    <header class="header">
      <div class="wrapper">
        <div class="row">
          <div class="col-12">
            <div class="welcome up-in">
              <h1>{{ $admin->bio }}</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="profile down-in">
              <div style="background: url(https://pbs.twimg.com/profile_banners/53294337/1447581003/600x200) no-repeat center center; background-size: cover;" class="cover"></div>
              <div style="background: url({{ (!is_null($admin->files()->first())) ? url($admin->files()->first()->url) : asset('img/1f47d.svg')  }}) no-repeat center center; background-size: cover;" class="photo"></div>
              <div class="name">{{ $admin->name }}</div>
              <div class="job">{{ $admin->occupation }}</div>
              <ul id="instafeed" class="instagram"></ul>
              <ul class="social">
                <li class="network"><a href="{{ $admin->twitter }}" target="_blank" class="link"><img src="{{ asset('img/twitter.svg') }}" alt="twitter" class="img"></a></li>
                <li class="network"><a href="{{ $admin->facebook }}" target="_blank" class="link"><img src="{{ asset('img/facebook.svg') }}" alt="facebook" class="img"></a></li>
                <li class="network"><a href="{{ $admin->instagram }}" target="_blank" class="link"><img src="{{ asset('img/instagram.svg') }}" alt="instagram" class="img"></a></li>
                <li class="network"><a href="{{ $admin->youtube }}" target="_blank" class="link"><img src="{{ asset('img/youtube.svg') }}" alt="youtube" class="img"></a></li>
              </ul>
              <div class="background"><img src="{{ asset('img/profile-bg.jpg') }}" alt="sea" class="img"></div>
            </div>
          </div>
          <div class="col-9">
@if(!is_null($featured))

                        <article class="article featured down-in">
                          <div style="background: url({{ url($featured->files()->first()->url) }}) no-repeat center center; background-size: cover;" class="cover"></div>
                          <h2 class="title">{{ $featured->title }}</h2>
                          <div class="excerpt">
                            <!-- excerpt-->
                            <p>Tousled food truck polaroid, salvia bespoke small batch Pinterest Marfa. Fingerstache authentic craft beer, food truck Banksy Carles kale chips hoodie. Trust fund artisan master cleanse fingerstache post-ironic.</p>
                          </div>
                          <div class="details">
                            <div class="date">{{ ucfirst(Date::parse($featured->published_at)->toFormattedDateString()) }}</div><a href="{{ url($featured->slug . '#disqus_thread') }}" class="comments"></a>
                          </div>
@if(!is_null($featured->tags()->first()))
<a href="{{ url('tagged', $featured->tags()->first()->slug) }}" class="tag">{{ $featured->tags()->first()->name }}</a>
@endif
<a href="{{ url($featured->slug) }}" class="read btn green">Leer</a>
                          <div class="background"><img src="{{ asset('img/bottom-bg.jpg') }}" alt="featured_bg" class="img"></div>
                        </article>
@endif

          </div>
        </div>
      </div>
    </header>
@if(!is_null($articles))

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
@if(!$articles->isEmpty()))

@foreach($articles as $article)

                      <div class="col-3 show-in">
                        <article class="article">
                          <div style="background: url({{ url($article->files()->first()->url) }}) no-repeat center center; background-size: cover;" class="cover"></div>
                          <h2 class="title">{{ $article->title }}</h2>
                          <div class="details">
                            <div class="date">{{ ucfirst(Date::parse($article->published_at)->toFormattedDateString()) }}</div><a href="{{ url($article->slug . '#disqus_thread') }}" class="comments"></a>
                          </div>
@if(!is_null($article->tags()->first()))
<a href="{{ url('tagged', $article->tags()->first()->slug) }}" class="tag">{{ $article->tags()->first()->name }}</a>
@endif
<a href="{{ url($article->slug) }}" class="read btn white">Leer</a>
                        </article>
                      </div>
@endforeach

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
@endif

    <footer class="footer down-in">
      <p>{!! $setting->footer !!}</p>
    </footer>
    <script src="{{ asset('js/magic.js') }}"></script>
    <script id="dsq-count-scr" src="//nerdgambino.disqus.com/count.js" async></script>
  </body>
</html>