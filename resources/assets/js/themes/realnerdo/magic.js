$(function(){

    var $body = $('body'),
        $window = $(window);


    /* Topbar */
    var topbar = $('.topbar'),
        background = $('.bg');
    if(topbar.length){
        $window.scroll(function(){
            var scrollTop = $window.scrollTop();
            if(scrollTop == 0){
                if(topbar.hasClass('fixed'))
                    topbar.removeClass('fixed');
            }
            if(scrollTop > 1){
                if(!topbar.hasClass('fixed'))
                    topbar.addClass('fixed');
            }

            var scale_val = 1 + (scrollTop * 0.0005),
                blur_value = scrollTop * 0.009;
            var bg_styles = "animation: none;"
                          + "opacity: 0.35;"
                          + "filter: alpha(opacity=35);"
                          + "-webkit-transform: scale("+ scale_val +");"
                          + "-moz-transform: scale("+ scale_val +");"
                          + "-ms-transform: scale("+ scale_val +");"
                          + "-o-transform: scale("+ scale_val +");"
                          + "transform: scale("+ scale_val +");";

            background.attr('style', bg_styles);
        });
    }

    // /* DISQUS */
    // /**
    // * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    // * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    // */
    // var disqus_config = function () {
    // this.page.url = window.location.href; // Replace PAGE_URL with your page's canonical URL variable
    // this.page.identifier = window.location.href.replace('http://' + window.location.hostname + '/', ''); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    // };
    // (function() { // DON'T EDIT BELOW THIS LINE
    // var d = document, s = d.createElement('script');
    //
    // s.src = '//nerdgambino.disqus.com/embed.js';
    //
    // s.setAttribute('data-timestamp', +new Date());
    // (d.head || d.body).appendChild(s);
    // })();
});
