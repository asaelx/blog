{{-- Stream --}}
<section class="stream">

    @if(!$articles->isEmpty())
        @foreach($articles as $article)
            {{-- Article --}}
            <article class="article row">
                {{-- Cover --}}
                <div class="cover col-5">
                    <a href="{{ url($article->slug) }}">
                        <img src="{{ $article->cover()->url }}" alt="{{ $article->title }}" class="img">
                    </a>
                </div>
                {{-- /Cover --}}
                {{-- Content --}}
                <div class="content col-7">
                    {{-- Date --}}
                    <div class="date">{{ ucfirst(Date::parse($article->published_at)->toFormattedDateString()) }} · <a href="{{ url($article->slug . '#disqus_thread') }}" class="comments">Comentarios</a></div>
                    {{-- /Date --}}
                    {{-- Title --}}
                    <h2 class="title">
                        <a href="{{ url($article->slug) }}" class="link">{{ $article->title }}</a>
                    </h2>
                    {{-- /Title --}}
                    {{-- Excerpt --}}
                    <div class="excerpt">
                        <p>{{ $article->excerpt }}</p>
                    </div>
                    {{-- /Excerpt --}}
                    {{-- Read --}}
                    <a href="{{ url($article->slug) }}" class="read">Leer</a>
                    {{-- /Read --}}
                </div>
                {{-- /Content --}}
            </article>
            {{-- /Article --}}
        @endforeach
    @endif

</section>
