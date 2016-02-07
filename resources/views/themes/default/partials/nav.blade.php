
<nav class="nav">
  <div class="wrapper"><a href="{{ url('/') }}" class="logo"><img src="{{ asset('img/asael_logo.svg') }}" height="32" alt="{{ $setting->title }}" class="img"/><span class="subtitle">{{ $setting->title }}</span></a>
    <label for="toggle-menu" class="toggle-menu"><img src="{{ asset('img/menu.svg') }}" alt="menu" class="img"/>
      <input id="toggle-menu" type="checkbox"/>
      <ul class="tags">
        <li class="option"><img src="{{ asset('img/close.svg') }}" alt="close"/></li>
@if(!$tags->isEmpty())

@foreach($tags as $tag)

                        <li class="option"><a href="{{ url('tagged', $tag->slug) }}" class="link">{{ $tag->name }}</a></li>
@endforeach

@endif

      </ul>
    </label>
  </div>
</nav>