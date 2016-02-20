$(function(){

    var $body = $('body'),
        $window = $(window);

    //Zoom js
    $('.single').find('.body').find('img').attr('data-action', 'zoom');


    /* HighlightJS */
    hljs.initHighlightingOnLoad();

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

    /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    /* DISQUS */
    /**
    * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    */
    var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = window.location.href.replace('http://' + window.location.hostname + '/', '');
    };
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');

    s.src = '//realnerdo.disqus.com/embed.js';

    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
});
