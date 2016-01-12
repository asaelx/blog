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
        <ul class="tags">
          <li class="option"><a href="" class="link">Diseño</a></li>
          <li class="option"><a href="" class="link">Web</a></li>
          <li class="option"><a href="" class="link">Fotografía</a></li>
          <li class="option"><a href="" class="link">Cine</a></li>
          <li class="option"><a href="" class="link">Libros</a></li>
          <li class="option"><a href="" class="link">Viajes</a></li>
          <li class="option"><a href="" class="link">¿Quién es Asael?</a></li>
          <li class="option"><a href="" class="link">Contáctame</a></li>
        </ul>
      </div>
    </nav>
    <header class="header">
      <div class="wrapper">
        <div class="row">
          <div class="col-3">
            <div class="profile">
              <div class="cover"><img src="https://pbs.twimg.com/profile_banners/53294337/1447581003/600x200" alt="cover" class="img"></div>
              <div class="photo"><img src="https://pbs.twimg.com/profile_images/665827494986018817/WJ4VdDNn_bigger.jpg" alt="" class="img"></div>
              <div class="name">Asael Jaimes</div>
              <div class="job">Diseñador Web</div>
              <ul class="instagram">
                <li class="insta"><a href="#" class="link"><img src="http://lorempixel.com/36/36/people/9" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link"><img src="http://lorempixel.com/36/36/people/2" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link"><img src="http://lorempixel.com/36/36/people/3" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link"><img src="http://lorempixel.com/36/36/people/4" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link"><img src="http://lorempixel.com/36/36/people/5" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link"><img src="http://lorempixel.com/36/36/people/6" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link"><img src="http://lorempixel.com/36/36/people/7" alt="" class="img"></a></li>
                <li class="insta"><a href="#" class="link"><img src="http://lorempixel.com/36/36/people/8" alt="" class="img"></a></li>
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
        </div>
      </div>
    </header>
    <script src="{{ asset('js/magic.js') }}"></script>
  </body>
</html>