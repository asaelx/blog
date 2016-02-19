{{-- Share --}}
<div class="share">
    <p>¡Gracias por leer <span>🤓</span>!</p>
    <p>Si te gustó este artículo, por favor compártelo.</p>
    <p>Así me ayudas a generar más contenido.</p>
    <ul class="networks">
        <li class="network">
            <a href="#" class="link twitter sharer button"
                data-sharer="twitter"
                data-title="{{ $article->title }}"
                data-via="asaelx"
                data-hashtags="{{ $article->tags()->first()->name }}"
                data-url="{{ url($article->slug) }}">
                <img src="{{ asset('img/twitter.svg') }}" alt="Twitter Icon SVG" class="logo svg">
                Compartir en twitter
            </a>
        </li>
        <li class="network">
            <a href="#" class="link facebook sharer button"
                data-sharer="facebook"
                data-url="{{ url($article->slug) }}">
                <img src="{{ asset('img/facebook.svg') }}" alt="Facebook Icon SVG" class="logo svg">
                Compartir en facebook
            </a>
        </li>
    </ul>
</div>
