<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="{{ asset('css/master.css') }}">
  </head>
  <body>
    <nav class="nav">
      <div class="wrapper"><a href="{{ url('/') }}" class="logo"><img src="{{ asset('img/asael_logo.svg') }}" height="32" alt="{{ $setting->title }}" class="img"><span class="subtitle">{{ $setting->title }}</span></a>
        <label for="toggle-menu" class="toggle-menu"><img src="{{ asset('img/menu.svg') }}" alt="menu" class="img">
          <input id="toggle-menu" type="checkbox">
          <ul class="tags">
            <li class="option"><img src="{{ asset('img/close.svg') }}" alt="close"></li>
            <li class="option"><a href="" class="link">Diseño</a></li>
            <li class="option"><a href="" class="link">Web</a></li>
            <li class="option"><a href="" class="link">Fotografía</a></li>
            <li class="option"><a href="" class="link">Cine</a></li>
            <li class="option"><a href="" class="link">Libros</a></li>
            <li class="option"><a href="" class="link">Viajes</a></li>
            <li class="option"><a href="" class="link">¿Quién es Asael?</a></li>
            <li class="option"><a href="" class="link">Contáctame</a></li>
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
              <div style="background: url(https://pbs.twimg.com/profile_images/665827494986018817/WJ4VdDNn_bigger.jpg) no-repeat center center; background-size: cover;" class="photo"></div>
              <div class="name">{{ $admin->name }}</div>
              <div class="job">Diseñador Web</div>
              <ul class="instagram">
                <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/9" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/2" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/3" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/4" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/5" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/6" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/7" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/8" alt="" class="img"></a></li>
              </ul>
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

                            <div class="tag">{{ $featured->tags()->first()->name }}</div>
@endif
<a href="{{ url($featured->slug) }}" class="read btn green">Leer</a>
              <div class="background"><img src="{{ asset('img/bottom-bg.jpg') }}" alt="featured_bg" class="img"></div>
            </article>
          </div>
        </div>
      </div>
    </header>
    <div class="articles">
      <div class="wrapper">
        <div class="row">
          <h3 class="section-title">Últimos artículos</h3>
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

                                            <div class="tag">{{ $article->tags()->first()->name }}</div>
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
    <footer class="footer down-in">
      <p>Diseño y códigos hechos con ❤️ por @asaelx | Todos los derechos reservados | México, 2016</p>
    </footer>
    <script src="{{ asset('js/magic.js') }}"></script>
  </body>
</html>