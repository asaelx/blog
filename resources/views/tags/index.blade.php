<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Ajustes</title>
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
  </head>
  <body>
    <aside class="sidebar">
      <div class="profile">
        <div class="details">
          <div class="photo"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/allisongrayce/48.jpg" class="img"></div>
          <div class="title">Personal Blog</div>
          <div class="name">Brenda Graham</div><span class="typcn typcn-arrow-sorted-down"></span>
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
@if(session()->has('flash_message'))

        <ul class="notifications">
          <li class="notification success">
            <div class="message"><span class="typcn typcn-tick"></span> {{ session('flash_message') }}</div>
          </li>
        </ul>
@endif

    <div class="content">
      <h1 class="title">Etiquetas</h1>
      <ul id="tags" class="list active">
@if(!$tags->isEmpty())

@foreach($tags as $tag)
   
                    <li class="item"><a href="{{ url('admin/tags/' . $tag->name . '/edit') }}" class="title">{{ $tag->name }}</a>
                      <div class="details">
@if($tag->articles->count() > 1)
<a href="{{ url('admin/articles/tagged', $tag->name) }}">Hay {{ $tag->articles->count() }} artículos archivados en esta etiqueta</a>
@elseif($tag->articles->count() == 1)
<a href="{{ url('admin/articles/tagged', $tag->name) }}">Hay 1 artículo archivado en esta etiqueta</a>
@else
No hay artículos archivados en esta etiqueta
@endif

                      </div>
                      <ul class="options">
@if(!$tag->articles->count())

                              <li class="option">{!! Form::open(['url' => url('admin/tags', $tag->name), 'method' => 'DELETE']) !!}
                                <button type="submit" class="link delete">Eliminar</button>{!! Form::close() !!}
                              </li>
@endif

                        <li class="option"><a href="{{ url('admin/tags/' . $tag->name . '/edit') }}" class="link edit">Editar</a>
                        </li>
                      </ul>
                    </li>
@endforeach

              <div class="list-footer">
@if($tags->total() > 1)

                      <div class="count">Hay {{ $tags->total() }} etiquetas en total</div>
@else

                            <div class="count">Solo hay {{ $tags->total() }} etiqueta</div>
@endif
{!! $tags->render() !!}
              </div>
@else

                    <div class="empty"><i class="fa fa-frown-o"></i>
                      <h4 class="legend">Aún no hay etiquetas</h4><a href="{{ url('admin/articles/create') }}" class="btn blue">Escribe tu primer artículo</a>
                    </div>
@endif

      </ul>
    </div>
    <script src="{{asset('js/admin.js')}}"></script>
  </body>
</html>