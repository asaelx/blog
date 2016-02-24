{{-- Profile --}}
<div class="profile">
    {{-- Photo --}}
    <div class="photo"><img src="{{ (is_null($admin->photo())) ? 'http://realnerdo.com/img/profile.png' : url($admin->photo()->url) }}" alt="{{ $admin->name }}" class="img" width="80" height="80"></div>
    {{-- /Photo --}}

    {{-- Networks --}}
    <ul class="networks">
        <li class="network">
            <a href="https://twitter.com/asaelx" class="link" target="_blank">
                <img src="{{ asset('img/twitter.svg') }}" alt="Twitter Icon SVG" class="logo">
            </a>
        </li>
        {{-- <li class="network">
            <a href="https://facebook.com/nerdopls" class="link" target="_blank">
                <img src="{{ asset('img/facebook.svg') }}" alt="Facebook Icon SVG" class="logo">
            </a>
        </li> --}}
        <li class="network">
            <a href="https://instagram.com/asaelx" class="link" target="_blank">
                <img src="{{ asset('img/instagram.svg') }}" alt="Instagram Icon SVG" class="logo">
            </a>
        </li>
        <li class="network">
            <a href="https://github.com/realnerdo" class="link" target="_blank">
                <img src="{{ asset('img/github.svg') }}" alt="Github Icon SVG" class="logo">
            </a>
        </li>
        {{-- <li class="network">
            <a href="#" class="link" target="_blank">
                <img src="{{ asset('img/youtube.svg') }}" alt="Youtube Icon SVG" class="logo">
            </a>
        </li> --}}
        {{-- <li class="network">
            <a href="#" class="link" target="_blank">
                <img src="{{ asset('img/behance.svg') }}" alt="Behance Icon SVG" class="logo">
            </a>
        </li> --}}
    </ul>
    {{-- /Networks --}}

    {{-- Bio --}}
    <div class="bio">
        @if($admin->bio != '')
            {{ $admin->bio }}
        @else
            Hi, I'm Asael and I love to make things for the internet.
        @endif
        <br>
        I'm a <a href="https://github.com/realnerdo/" class="link" target="_blank">Web Developer</a> and <a href="http://realnerdo.com/" class="link" target="_blank">Designer</a>.
    </div>
    {{-- /Bio --}}
</div>
