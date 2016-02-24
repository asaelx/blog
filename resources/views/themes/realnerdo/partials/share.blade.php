{{-- Share --}}
<div class="share">
    <p>¡Thank you for reading <span>🤓</span>!</p>
    <p>If you like this article, please share it.</p>
    <p>That way you help me create more awesome content.</p>
    <ul class="networks">
        <li class="network">
            <a href="#" class="link twitter sharer button"
                data-sharer="twitter"
                data-title="{{ $article->title }}"
                data-via="asaelx"
                data-hashtags="{{ $article->tags()->first()->name }}"
                data-url="{{ url($article->slug) }}">
                <img src="{{ asset('img/twitter.svg') }}" alt="Twitter Icon SVG" class="logo svg">
                Share on twitter
            </a>
        </li>
        <li class="network">
            <a href="#" class="link facebook sharer button"
                data-sharer="facebook"
                data-url="{{ url($article->slug) }}">
                <img src="{{ asset('img/facebook.svg') }}" alt="Facebook Icon SVG" class="logo svg">
                Share on facebook
            </a>
        </li>
    </ul>
</div>
