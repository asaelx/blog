<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>{{ $article->title }}</title>
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
    <article class="single">
      <div style="background: url({{ url($article->files()->first()->url) }}) center center; background-size: cover;" class="cover">
        <div class="heading">
          <h1 class="title">{{ $article->title }}</h1>
          <div class="details">Por <a href="{{ url('author', $article->user()->first()->slug) }}">{{ $article->user()->first()->name }}</a> · {{ ucfirst(Date::parse($article->published_at)->toFormattedDateString()) }} · Archivado en <a href="{{ url('tagged', $article->tags()->first()->slug) }}">{{ $article->tags()->first()->name }}</a></div>
        </div>
      </div>
      <div class="body">{!! $article->body !!}</div>
      <footer class="more-footer">
        <div class="profile">
          <div style="background: url({{ (!is_null($article->user()->first()->files()->first())) ? url($article->user()->first()->files()->first()->url) : asset('img/1f47d.svg')  }}) bottom center; background-size: cover;" class="photo"></div>
          <div class="bio">{{ $article->user()->first()->bio }}</div>
          <div class="find-me">Encuéntrame en:
            <ul class="social">
              <li class="network"><a href="{{ $article->user()->first()->twitter }}" class="link"><img src="{{ asset('img/twitter.svg') }}" alt="twitter" class="img"></a></li>
              <li class="network"><a href="{{ $article->user()->first()->facebook }}" class="link"><img src="{{ asset('img/facebook.svg') }}" alt="facebook" class="img"></a></li>
              <li class="network"><a href="{{ $article->user()->first()->instagram }}" class="link"><img src="{{ asset('img/instagram.svg') }}" alt="instagram" class="img"></a></li>
              <li class="network"><a href="{{ $article->user()->first()->youtube }}" class="link"><img src="{{ asset('img/youtube.svg') }}" alt="youtube" class="img"></a></li>
            </ul>
          </div>
        </div>
        <div class="thanks">
          <div class="like">
            <p>Si te gustó el artículo, por favor compártelo en tus redes sociales.</p>
            <p>Tampoco te olvides de dejarme un saludo o comentario aquí o en mi twitter y facebook.</p>
            <p>Así me ayudas a crear más contenido todos los días. ¡Gracias! <i class="twa twa-stuck-out-tongue-winking-eye"></i></p>
            <div class="share">Compartir en:
              <ul class="options">
                <li class="option"><a href="http://twitter.com/share?text={{ $article->title }}&url={{ url($article->slug) }}&hashtags={{ str_replace(' ', '', $article->tags()->first()->name) }}" class="link"><img src="{{ asset('img/twitter.svg') }}" alt="twitter" class="img"></a></li>
                <li class="option"><a href="https://www.facebook.com/sharer/sharer.php?u={{ url($article->slug) }}" target="_blank" class="link"><img src="{{ asset('img/facebook.svg') }}" alt="facebook" class="img"></a></li>
              </ul>
            </div>
          </div>
          <div class="more-articles">
            <div>¿Ganas de más? Aquí hay otros artículos...</div>
@if(!$readings->isEmpty())

@foreach($readings as $reading)

                                    <article class="article">
                                      <div style="background: url({{ url($reading->files()->first()->url) }}) no-repeat center center; background-size: cover;" class="cover"></div>
                                      <h2 class="title">{{ $reading->title }}</h2>
                                      <div class="details">
                                        <div class="date">{{ ucfirst(Date::parse($reading->published_at)->toFormattedDateString()) }}</div><a href="{{ url($reading->slug . '#disqus_thread') }}" class="comments"></a>
                                      </div><a href="{{ $reading->tags()->first()->slug }}" class="tag">{{ $reading->tags()->first()->name }}</a><a href="{{ url($reading->slug) }}" class="read btn white">Leer</a>
                                    </article>
@endforeach

@endif

          </div>
        </div>
      </footer>
      <div id="disqus_thread"></div>
    </article>
    <footer class="footer down-in">
      <p>Diseño y códigos hechos con <i class="twa twa-heart"></i> por @asaelx | Todos los derechos reservados | México, 2016</p>
    </footer>
    <script src="{{ asset('js/magic.js') }}"></script>
    <script id="dsq-count-scr" src="//nerdgambino.disqus.com/count.js" async></script>
  </body>
</html>