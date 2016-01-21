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
});
