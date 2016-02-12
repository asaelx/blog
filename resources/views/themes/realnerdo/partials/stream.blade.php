{{-- Stream --}}
<section class="stream">

<<<<<<< HEAD
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
=======
    {{-- Article --}}
    <article class="article row">
        {{-- Cover --}}
        <div class="cover col-5">
            <a href="{{ url('single') }}">
                <img src="https://unsplash.it/320/220/?random" alt="Article Title" class="img">
            </a>
        </div>
        {{-- /Cover --}}
        {{-- Content --}}
        <div class="content col-7">
            {{-- Date --}}
            <div class="date">Febrero 14, 2016 · <a href="{{ url('single#disqus_thread') }}" class="comments">Comentarios</a></div>
            {{-- /Date --}}
            {{-- Title --}}
            <h2 class="title">
                <a href="{{ url('single') }}" class="link">Microsoft Patch Management For Home Users</a>
            </h2>
            {{-- /Title --}}
            {{-- Excerpt --}}
            <div class="excerpt">
                <p>Marty, I always wear a suit to the office. You alright? Huh? C'mon, he's not that bad. At least he's letting you borrow the car tomorrow night.</p>
            </div>
            {{-- /Excerpt --}}
            {{-- Read --}}
            <a href="{{ url('single') }}" class="read">Leer</a>
            {{-- /Read --}}
        </div>
        {{-- /Content --}}
    </article>
    {{-- /Article --}}

    {{-- Article --}}
    <article class="article row">
        {{-- Cover --}}
        <div class="cover col-5">
            <a href="{{ url('single') }}">
                <img src="https://unsplash.it/320/220/?random" alt="Article Title" class="img">
            </a>
        </div>
        {{-- /Cover --}}
        {{-- Content --}}
        <div class="content col-7">
            {{-- Date --}}
            <div class="date">Febrero 14, 2016 · <a href="{{ url('single#disqus_thread') }}" class="comments">Comentarios</a></div>
            {{-- /Date --}}
            {{-- Title --}}
            <h2 class="title">
                <a href="{{ url('single') }}" class="link">Microsoft Patch Management For Home Users</a>
            </h2>
            {{-- /Title --}}
            {{-- Excerpt --}}
            <div class="excerpt">
                <p>Marty, I always wear a suit to the office. You alright? Huh? C'mon, he's not that bad. At least he's letting you borrow the car tomorrow night.</p>
            </div>
            {{-- /Excerpt --}}
            {{-- Read --}}
            <a href="{{ url('single') }}" class="read">Leer</a>
            {{-- /Read --}}
        </div>
        {{-- /Content --}}
    </article>
    {{-- /Article --}}

    {{-- Article --}}
    <article class="article row">
        {{-- Cover --}}
        <div class="cover col-5">
            <a href="{{ url('single') }}">
                <img src="https://unsplash.it/320/220/?random" alt="Article Title" class="img">
            </a>
        </div>
        {{-- /Cover --}}
        {{-- Content --}}
        <div class="content col-7">
            {{-- Date --}}
            <div class="date">Febrero 14, 2016 · <a href="{{ url('single#disqus_thread') }}" class="comments">Comentarios</a></div>
            {{-- /Date --}}
            {{-- Title --}}
            <h2 class="title">
                <a href="{{ url('single') }}" class="link">Microsoft Patch Management For Home Users</a>
            </h2>
            {{-- /Title --}}
            {{-- Excerpt --}}
            <div class="excerpt">
                <p>Marty, I always wear a suit to the office. You alright? Huh? C'mon, he's not that bad. At least he's letting you borrow the car tomorrow night.</p>
            </div>
            {{-- /Excerpt --}}
            {{-- Read --}}
            <a href="{{ url('single') }}" class="read">Leer</a>
            {{-- /Read --}}
        </div>
        {{-- /Content --}}
    </article>
    {{-- /Article --}}

    {{-- Article --}}
    <article class="article row">
        {{-- Cover --}}
        <div class="cover col-5">
            <a href="{{ url('single') }}">
                <img src="https://unsplash.it/320/220/?random" alt="Article Title" class="img">
            </a>
        </div>
        {{-- /Cover --}}
        {{-- Content --}}
        <div class="content col-7">
            {{-- Date --}}
            <div class="date">Febrero 14, 2016 · <a href="{{ url('single#disqus_thread') }}" class="comments">Comentarios</a></div>
            {{-- /Date --}}
            {{-- Title --}}
            <h2 class="title">
                <a href="{{ url('single') }}" class="link">Microsoft Patch Management For Home Users</a>
            </h2>
            {{-- /Title --}}
            {{-- Excerpt --}}
            <div class="excerpt">
                <p>Marty, I always wear a suit to the office. You alright? Huh? C'mon, he's not that bad. At least he's letting you borrow the car tomorrow night.</p>
            </div>
            {{-- /Excerpt --}}
            {{-- Read --}}
            <a href="{{ url('single') }}" class="read">Leer</a>
            {{-- /Read --}}
        </div>
        {{-- /Content --}}
    </article>
    {{-- /Article --}}

    {{-- Article --}}
    <article class="article row">
        {{-- Cover --}}
        <div class="cover col-5">
            <a href="{{ url('single') }}">
                <img src="https://unsplash.it/320/220/?random" alt="Article Title" class="img">
            </a>
        </div>
        {{-- /Cover --}}
        {{-- Content --}}
        <div class="content col-7">
            {{-- Date --}}
            <div class="date">Febrero 14, 2016 · <a href="{{ url('single#disqus_thread') }}" class="comments">Comentarios</a></div>
            {{-- /Date --}}
            {{-- Title --}}
            <h2 class="title">
                <a href="{{ url('single') }}" class="link">Microsoft Patch Management For Home Users</a>
            </h2>
            {{-- /Title --}}
            {{-- Excerpt --}}
            <div class="excerpt">
                <p>Marty, I always wear a suit to the office. You alright? Huh? C'mon, he's not that bad. At least he's letting you borrow the car tomorrow night.</p>
            </div>
            {{-- /Excerpt --}}
            {{-- Read --}}
            <a href="{{ url('single') }}" class="read">Leer</a>
            {{-- /Read --}}
        </div>
        {{-- /Content --}}
    </article>
    {{-- /Article --}}
>>>>>>> 8f18436641650dbc2ea007a54241c27d23df26c4

</section>
