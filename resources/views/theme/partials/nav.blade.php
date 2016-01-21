
<nav class="nav">
  <div class="wrapper"><a href="{{ url('/') }}" class="logo"><img src="{{ asset('img/asael_logo.svg') }}" height="32" alt="{{ $setting->title }}" class="img"/><span class="subtitle">{{ $setting->title }}</span></a>
    <label for="toggle-menu" class="toggle-menu"><img src="{{ asset('img/menu.svg') }}" alt="menu" class="img"/>
      <input id="toggle-menu" type="checkbox"/>
      <ul class="tags">
        <li class="option"><img src="{{ asset('img/close.svg') }}" alt="close"/></li>
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