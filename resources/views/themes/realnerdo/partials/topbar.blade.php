{{-- Topbar --}}
<nav class="topbar">
    {{-- Logo --}}
    <a href="#" class="logo">
        <img src="{{ asset('img/remixcode_logo.svg') }}" alt="RealNerdo Logo" class="img" height="24">
    </a>
    {{-- /Logo --}}

    {{-- Toggle Menu --}}
    <label for="toggle-menu" class="toggle-menu">
        <img src="{{ asset('img/menu.svg') }}" alt="menu" class="img">
        <input type="checkbox" id="toggle-menu">
        {{-- Options --}}
        <ul class="options">
            <li class="option">
                <img src="{{ asset('img/close.svg') }}" alt="close">
            </li>
            <li class="option">
                <a href="#" class="link">Diseño</a>
            </li>
            <li class="option">
                <a href="#" class="link">Laravel</a>
            </li>
            <li class="option">
                <a href="#" class="link">PHP</a>
            </li>
            <li class="option">
                <a href="#" class="link">Javascript</a>
            </li>
            <li class="option">
                <a href="#" class="link">CSS</a>
            </li>
            <li class="option">
                <a href="#" class="link">Acerca de mí</a>
            </li>
            <li class="option">
                <a href="#" class="link">Contacto</a>
            </li>
        </ul>
        {{-- /Options --}}
    </label>
    {{-- /Toggle Menu --}}
</nav>
