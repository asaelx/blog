
@if(!request()->is('auth/*'))

<aside class="sidebar">
  <div class="profile">
    <div class="details">
      <div class="photo"><img src="{{ asset('img/1f47d.svg') }}" width="36" height="36" class="img"/></div>
      <div title="{{ $setting->title }}" class="title">{{ str_limit($setting->title, 16) }}</div>
      <div class="name">{{ $currentUser->name }}</div><span data-drop="profile-settings" class="typcn typcn-arrow-sorted-down drop-trigger"></span>
      <div id="profile-settings" class="settings drop">
        <ul class="options">
          <li class="option"><a href="#" class="link">Editar perfil</a></li>
          <li class="option"><a href="{{ url('auth/logout') }}" class="link">Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
  </div>
  <nav class="nav">
    <ul class="options">
      <li class="option"><a href="{{ url('admin/articles/create') }}" class="link {{ (request()->is('admin/articles/create')) ? 'active' : '' }}"><span class="typcn typcn-pen"></span>Nuevo artículo</a></li>
      <li class="option"><a href="{{ url('admin/articles') }}" class="link {{ (request()->is('admin/articles') || request()->is('admin/articles/*') && !request()->is('admin/articles/create')) ? 'active' : '' }}"><span class="typcn typcn-document-text"></span>Contentido</a></li>
      <li class="option"><a href="{{ url('admin/tags') }}" class="link {{ (request()->is('admin/tags') || request()->is('admin/tags/*')) ? 'active' : '' }}"><span class="typcn typcn-tags"></span>Etiquetas</a></li>
      <li class="option"><a href="{{ url('admin/settings') }}" class="link link {{ (request()->is('admin/settings') || request()->is('admin/settings/*')) ? 'active' : '' }}"> <span class="typcn typcn-cog"></span>Ajustes</a></li>
    </ul>
  </nav>
</aside>
@endif
