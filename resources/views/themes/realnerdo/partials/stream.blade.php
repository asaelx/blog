{{-- Stream --}}
<section class="stream">

    @if(isset($currentTag))
        <h1 class="title tagged">Articles archived in <a href="{{ url('tagged', $currentTag->slug) }}" class="tag">{{ $currentTag->name }}</a></h1>
    @endif

    @if(!$articles->isEmpty())
        @foreach($articles as $article)
            {{-- Article --}}
            <article class="article row">
                {{-- Cover --}}
                <div class="cover col-5">
                    <a href="{{ url($article->slug) }}">
                        <img src="{{ url($article->cover()->url) }}" alt="{{ $article->title }}" class="img">
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
                    <a href="{{ url($article->slug) }}" class="read">Read</a>
                    {{-- /Read --}}
                </div>
                {{-- /Content --}}
            </article>
            {{-- /Article --}}
        @endforeach

        <div class="row pagination">
            @if(!is_null($articles->previousPageUrl()))
                <a href="{{ $articles->previousPageUrl() }}" class="btn green previous"><span class="typcn typcn-chevron-left"></span> Previous</a>
            @endif

            @if(!is_null($articles->nextPageUrl()))
            <a href="{{ $articles->nextPageUrl() }}" class="btn green next">Next <span class="typcn typcn-chevron-right"></span></a>
            @endif
        </div>

    @endif

</section>
