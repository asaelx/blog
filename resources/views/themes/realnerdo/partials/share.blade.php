{{-- Share --}}
<div class="share">
    <p>¡Gracias por leer <span>🤓</span>!</p>
    <p>Si te gustó este artículo, por favor compártelo.</p>
    <p>Así me ayudas a generar más contenido.</p>
    <ul class="networks">
        <li class="network">
            <a href="https://twitter.com/home?status={{ $article->title . " " . url($article->slug) }}" class="link twitter">
                <img src="{{ asset('img/twitter.svg') }}" alt="Twitter Icon SVG" class="logo svg">
                Compartir en twitter
            </a>
        </li>
        <li class="network">
            <a href="https://www.facebook.com/sharer/sharer.php?u={{ url($article->slug) }}" class="link facebook">
                <img src="{{ asset('img/facebook.svg') }}" alt="Facebook Icon SVG" class="logo svg">
                Compartir en facebook
            </a>
        </li>
    </ul>
</div>
