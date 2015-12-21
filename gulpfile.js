var elixir     = require('laravel-elixir'),
    jade       = require('laravel-elixir-jade'),
    livereload = require('laravel-elixir-livereload');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass('master.sass');
});

elixir(function(mix) {
    mix.browserify('magic.js');
});

elixir(function(mix) {
    mix.jade({
        search: '**/*.jade',
        src: '/assets/jade/'
    });
});

elixir(function(mix) {
    mix.livereload();
});
