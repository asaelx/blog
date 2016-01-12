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
      <div class="wrapper"><a href="#" class="logo"><img src="{{ asset('img/asael_logo.svg') }}" alt="Asael Logo" class="img"><span class="subtitle">Las aventuras de Asael</span></a>
        <label for="toggle-menu" class="toggle-menu"><img src="{{ asset('img/menu.svg') }}" alt="menu" class="img">
          <input id="toggle-menu" type="checkbox">
          <ul class="tags">
            <li class="option"><img src="{{ asset('img/close.svg') }}" alt="close">
            </li>
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
    <div class="bg-top"></div>
    <header class="header">
      <div class="wrapper">
        <div class="row">
          <div class="col-3">
            <div class="profile">
              <div class="cover glassy"><img src="https://pbs.twimg.com/profile_banners/53294337/1447581003/600x200" alt="cover" class="img"></div>
              <div class="photo glassy"><img src="https://pbs.twimg.com/profile_images/665827494986018817/WJ4VdDNn_bigger.jpg" alt="" class="img"></div>
              <div class="name">Asael Jaimes</div>
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
                <li class="network"><a href="#" class="link"><img src="{{ asset('img/twitter.svg') }}" alt="twitter" class="img"></a></li>
                <li class="network"><a href="#" class="link"><img src="{{ asset('img/facebook.svg') }}" alt="facebook" class="img"></a></li>
                <li class="network"><a href="#" class="link"><img src="{{ asset('img/instagram.svg') }}" alt="instagram" class="img"></a></li>
                <li class="network"><a href="#" class="link"><img src="{{ asset('img/youtube.svg') }}" alt="youtube" class="img"></a></li>
              </ul>
              <div class="background"><img src="{{ asset('img/profile-bg.jpg') }}" alt="sea" class="img"></div>
            </div>
          </div>
          <div class="col-9">
            <article class="article featured">
              <div class="cover glassy"><img src="{{ asset('img/cover.jpg') }}" alt="cover" class="img"></div>
              <h2 class="title">It's not about the destination</h2>
              <div class="excerpt">
                <p>Tousled food truck polaroid, salvia bespoke small batch Pinterest Marfa. Fingerstache authentic craft beer, food truck Banksy Carles kale chips hoodie. Trust fund artisan master cleanse fingerstache post-ironic.</p>
              </div>
              <div class="details">
                <div class="date">Enero 15, 2016</div>
                <div class="comments">18 comentarios</div>
              </div>
              <div class="tag">#VIAJES</div><a href="#" class="read btn green">Leer</a>
              <div class="background"><img src="{{ asset('img/bottom-bg.jpg') }}" alt="cover" class="img"></div>
            </article>
          </div>
        </div>
      </div>
    </header>
    <div class="articles">
      <div class="wrapper">
        <div class="row">
          <div class="col-3">
            <article class="article">
              <div class="cover glassy"><img src="{{ asset('img/cover.jpg') }}" alt="cover" class="img"></div>
              <h2 class="title">My trip to Taiwan</h2>
              <div class="details">
                <div class="date">Enero 15, 2016</div>
                <div class="comments">18 comentarios</div>
              </div>
              <div class="tag">#VIAJES</div><a href="#" class="read btn white">Leer</a>
            </article>
          </div>
          <div class="col-3">
            <article class="article">
              <div class="cover glassy"><img src="{{ asset('img/cover.jpg') }}" alt="cover" class="img"></div>
              <h2 class="title">The amazing Spider-Man</h2>
              <div class="details">
                <div class="date">Enero 15, 2016</div>
                <div class="comments">18 comentarios</div>
              </div>
              <div class="tag">#VIAJES</div><a href="#" class="read btn white">Leer</a>
            </article>
          </div>
          <div class="col-3">
            <article class="article">
              <div class="cover glassy"><img src="{{ asset('img/cover.jpg') }}" alt="cover" class="img"></div>
              <h2 class="title">My trip to Taiwan</h2>
              <div class="details">
                <div class="date">Enero 15, 2016</div>
                <div class="comments">18 comentarios</div>
              </div>
              <div class="tag">#VIAJES</div><a href="#" class="read btn white">Leer</a>
            </article>
          </div>
          <div class="col-3">
            <article class="article">
              <div class="cover glassy"><img src="{{ asset('img/cover.jpg') }}" alt="cover" class="img"></div>
              <h2 class="title">My trip to Taiwan</h2>
              <div class="details">
                <div class="date">Enero 15, 2016</div>
                <div class="comments">18 comentarios</div>
              </div>
              <div class="tag">#VIAJES</div><a href="#" class="read btn white">Leer</a>
            </article>
          </div>
          <div class="col-3">
            <article class="article">
              <div class="cover glassy"><img src="{{ asset('img/cover.jpg') }}" alt="cover" class="img"></div>
              <h2 class="title">My trip to Taiwan</h2>
              <div class="details">
                <div class="date">Enero 15, 2016</div>
                <div class="comments">18 comentarios</div>
              </div>
              <div class="tag">#VIAJES</div><a href="#" class="read btn white">Leer</a>
            </article>
          </div>
          <div class="col-3">
            <article class="article">
              <div class="cover glassy"><img src="{{ asset('img/cover.jpg') }}" alt="cover" class="img"></div>
              <h2 class="title">My trip to Taiwan</h2>
              <div class="details">
                <div class="date">Enero 15, 2016</div>
                <div class="comments">18 comentarios</div>
              </div>
              <div class="tag">#VIAJES</div><a href="#" class="read btn white">Leer</a>
            </article>
          </div>
          <div class="col-3">
            <article class="article">
              <div class="cover glassy"><img src="{{ asset('img/cover.jpg') }}" alt="cover" class="img"></div>
              <h2 class="title">My trip to Taiwan</h2>
              <div class="details">
                <div class="date">Enero 15, 2016</div>
                <div class="comments">18 comentarios</div>
              </div>
              <div class="tag">#VIAJES</div><a href="#" class="read btn white">Leer</a>
            </article>
          </div>
        </div>
      </div>
    </div>
    <script src="{{ asset('js/magic.js') }}"></script>
  </body>
</html>