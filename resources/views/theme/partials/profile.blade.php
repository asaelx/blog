
<div class="profile down-in">
  <div style="background: url(https://pbs.twimg.com/profile_banners/53294337/1447581003/600x200) no-repeat center center; background-size: cover;" class="cover">
  </div>
  <div style="background: url(https://pbs.twimg.com/profile_images/665827494986018817/WJ4VdDNn_bigger.jpg) no-repeat center center; background-size: cover;" class="photo"></div>
  <div class="name">{{ $admin->name }}</div>
  <div class="job">Diseñador Web</div>
  <ul class="instagram">
    <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/9" alt="" class="img"/></a></li>
    <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/2" alt="" class="img"/></a></li>
    <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/3" alt="" class="img"/></a></li>
    <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/4" alt="" class="img"/></a></li>
    <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/5" alt="" class="img"/></a></li>
    <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/6" alt="" class="img"/></a></li>
    <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/7" alt="" class="img"/></a></li>
    <li class="insta"><a href="#" class="link glassy"><img src="http://lorempixel.com/36/36/people/8" alt="" class="img"/></a></li>
  </ul>
  <ul class="social">
    <li class="network"><a href="{{ $admin->twitter }}" target="_blank" class="link"><img src="{{ asset('img/twitter.svg') }}" alt="twitter" class="img"/></a></li>
    <li class="network"><a href="{{ $admin->facebook }}" target="_blank" class="link"><img src="{{ asset('img/facebook.svg') }}" alt="facebook" class="img"/></a></li>
    <li class="network"><a href="{{ $admin->instagram }}" target="_blank" class="link"><img src="{{ asset('img/instagram.svg') }}" alt="instagram" class="img"/></a></li>
    <li class="network"><a href="{{ $admin->youtube }}" target="_blank" class="link"><img src="{{ asset('img/youtube.svg') }}" alt="youtube" class="img"/></a></li>
  </ul>
  <div class="background"><img src="{{ asset('img/profile-bg.jpg') }}" alt="sea" class="img"/></div>
</div>