var elixir     = require('laravel-elixir'),
    jade       = require('laravel-elixir-jade'),
    livereload = require('laravel-elixir-livereload'),
    bw = '../../../public/bower/',
    rs = '../../../resources/assets/';

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        'themes/realnerdo/master.sass'
    ], 'public/css/themes/realnerdo/master.css');
});

elixir(function(mix) {
    mix.scripts([
        'themes/realnerdo/magic.js'
    ], 'public/js/themes/realnerdo/magic.js');
});

elixir(function(mix) {
    mix.livereload();
});
