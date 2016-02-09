$(function(){

    var $body = $('body');

    /* Instagram */
    var feed = new Instafeed({
        get: 'user',
        userId: '371921',
        clientId: 'bf65c4336d2c4278a76fc82fd6fc3a61',
        limit: 8,
        resolution: 'thumbnail',
        template: '<li class="insta"><a class="link glassy" href="{{link}}" target="_blank"><img src="{{image}}" class="img" /></a></li>'
    });
    feed.run();

    /* DISQUS */
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    */
    var disqus_config = function () {
    this.page.url = window.location.href; // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = window.location.href.replace('http://' + window.location.hostname + '/', ''); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');

    s.src = '//nerdgambino.disqus.com/embed.js';

    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
});
