
@if(session()->has('flash_message'))

<ul class="notifications">
  <li class="notification success">
    <div class="message"><span class="typcn typcn-tick"></span> {{ session('flash_message') }}</div>
  </li>
</ul>
@endif
