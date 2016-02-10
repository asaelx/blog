var elixir     = require('laravel-elixir'),
    jade       = require('laravel-elixir-jade'),
    livereload = require('laravel-elixir-livereload'),
    bw = '../../../public/bower/',
    rs = '../../../resources/assets/';

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        'themes/realnerdo/master.sass',
        bw + 'highlightjs/styles/monokai-sublime.css'
    ], 'public/css/themes/realnerdo/master.css');
});

elixir(function(mix) {
    mix.scripts([
        bw + 'jquery/dist/jquery.js',
        bw + 'instafeed.js/instafeed.js',
        bw + 'highlightjs/highlight.pack.js',
        'themes/realnerdo/magic.js'
    ], 'public/js/themes/realnerdo/magic.js');
});

elixir(function(mix) {
    mix.livereload();
});
