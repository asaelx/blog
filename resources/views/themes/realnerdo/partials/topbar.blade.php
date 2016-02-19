{{-- Topbar --}}
<nav class="topbar">

    {{-- Logo --}}
    <a href="{{ url('/') }}" class="logo">
        <img src="{{ asset('img/logo.svg') }}" alt="RealNerdo Logo" class="img" height="24">
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
            @unless($tags->isEmpty())
                @foreach($tags as $tag)
                    <li class="option">
                        <a href="{{ url('tagged', $tag->slug) }}" class="link {{ (isset($currentTag) && $currentTag->name == $tag->name) ? 'active' : '' }}">{{ $tag->name }}</a>
                    </li>
                @endforeach
            @endunless
        </ul>
        {{-- /Options --}}
    </label>
    {{-- /Toggle Menu --}}
</nav>
