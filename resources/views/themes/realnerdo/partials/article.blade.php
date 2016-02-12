{{-- Single --}}
<article class="single">

    {{-- Cover --}}
    <div class="cover" style="background: url({{ url($article->cover()->url) }}) no-repeat center center; background-size: cover;"></div>
    {{-- Date --}}
    <div class="date">{{ ucfirst(Date::parse($article->published_at)->toFormattedDateString()) }} · <a href="{{ url($article->slug . '#disqus_thread') }}" class="comments">Comentarios</a></div>
    {{-- Title --}}
    <h1 class="title">{{ $article->title }}</h1>
    {{-- Body --}}
    <div class="body">{!! $article->body !!}</div>
    {{-- /Body --}}

</article>
