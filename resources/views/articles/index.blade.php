<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Articles</title>
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
          <li class="option"><a href="#" class="link active"> <span class="typcn typcn-pen"></span>New Post</a></li>
          <li class="option"><a href="#" class="link"><span class="typcn typcn-document-text"></span>Content</a></li>
          <li class="option"><a href="#" class="link"> <span class="typcn typcn-cog"></span>Settings</a></li>
        </ul>
      </nav>
    </aside>
    <div class="content">
      <h1 class="title">Your posts</h1>
      <div class="tools">
        <ul class="tabs">
          <li class="tab"><a href="#" data-tab="published" class="link active">Published</a></li>
          <li class="tab"><a href="#" data-tab="drafts" class="link">Drafts</a></li>
        </ul>
        <div class="search"><span class="typcn typcn-zoom"></span>
          <input type="search" name="s" placeholder="Search...">
        </div>
      </div>
      <!-- Posts list-->
      <ul id="published" class="posts active tabbed">
@if(!$articles->isEmpty())

@foreach($articles as $article)
   
                    <li class="post">
                      <div class="date">{{ $article->published_at }}</div><a href="" class="title">{{ $article->title }}</a>
                      <div class="details">By <a href="#">Asael Jaimes</a> · Filed under <a href="#">Web Design</a></div>
                      <ul class="options">
                        <li class="option"><a href="#" class="link edit"><span class="typcn typcn-edit"></span></a></li>
                        <li class="option"><a href="#" class="link delete"><span class="typcn typcn-trash"></span></a></li>
                      </ul>
                    </li>
@endforeach

@else

                    <div class="empty"><i class="fa fa-frown-o"></i>
                      <h4 class="legend">You don't have any publications yet</h4><a href="{{ url('articles/create') }}" class="btn blue">Write an article</a>
                    </div>
@endif

      </ul>
      <ul id="drafts" class="posts tabbed">       
@if(!$articles->isEmpty())

@foreach($articles as $article)
   
                    <li class="post">
                      <div class="date">{{ $article->published_at }}</div><a href="" class="title">{{ $article->title }}</a>
                      <div class="details">By <a href="#">Asael Jaimes</a> · Filed under <a href="#">Web Design</a></div>
                      <ul class="options">
                        <li class="option"><a href="#" class="link edit"><span class="typcn typcn-edit"></span></a></li>
                        <li class="option"><a href="#" class="link delete"><span class="typcn typcn-trash"></span></a></li>
                      </ul>
                    </li>
@endforeach

@else

                    <div class="empty"><i class="fa fa-meh-o"></i>
                      <h4 class="legend">You don't have any drafts yet</h4><a href="{{ url('articles/create') }}" class="btn blue">Write an article</a>
                    </div>
@endif

      </ul>
    </div>
    <script src="{{asset('js/admin.js')}}"></script>
  </body>
</html>