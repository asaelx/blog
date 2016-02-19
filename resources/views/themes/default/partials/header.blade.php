
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
            <li class="network"><a href="{{ $admin->twitter }}" target="_blank" class="link"><img src="{{ asset('img/twitter.svg') }}" alt="twitter" class="img"/></a></li>
            <li class="network"><a href="{{ $admin->facebook }}" target="_blank" class="link"><img src="{{ asset('img/facebook.svg') }}" alt="facebook" class="img"/></a></li>
            <li class="network"><a href="{{ $admin->instagram }}" target="_blank" class="link"><img src="{{ asset('img/instagram.svg') }}" alt="instagram" class="img"/></a></li>
            <li class="network"><a href="{{ $admin->youtube }}" target="_blank" class="link"><img src="{{ asset('img/youtube.svg') }}" alt="youtube" class="img"/></a></li>
          </ul>
          <div class="background"><img src="{{ asset('img/profile-bg.jpg') }}" alt="sea" class="img"/></div>
        </div>
      </div>
      <div class="col-9">
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

      </div>
    </div>
  </div>
</header>