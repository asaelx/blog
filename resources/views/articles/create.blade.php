<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Create Article</title>
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
          <li class="option"><a href="{{ url('articles/create') }}" class="link active"> <span class="typcn typcn-pen"></span>New Post</a></li>
          <li class="option"><a href="{{ url('articles') }}" class="link"><span class="typcn typcn-document-text"></span>Content</a></li>
          <li class="option"><a href="#" class="link"> <span class="typcn typcn-cog"></span>Settings</a></li>
        </ul>
      </nav>
    </aside>
    <div class="content">{!! Form::model($article = new \App\Article, ['url' => url('articles'), 'class' => 'form', 'files' => true]) !!}
@include('articles.partials.form', ['submitButtonText' => 'Publish'])
{!! Form::close() !!}
    </div>
    <script src="{{ asset('js/admin.js') }}"></script>
  </body>
</html>