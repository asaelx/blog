var elixir     = require('laravel-elixir'),
    jade       = require('laravel-elixir-jade'),
    livereload = require('laravel-elixir-livereload');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        // '../../../node_modules/zurb-foundation-5/scss/foundation.scss',
        '../../../node_modules/select2/dist/css/select2.min.css',
        // '../../../resources/assets/css/flexboxgrid.min.css',
        'master.sass'
    ], 'public/css/master.css');
});

elixir(function(mix) {
    mix.browserify('magic.js');
});

elixir(function(mix) {
    mix.jade({
        search: '**/**/*.jade',
        src: '/assets/jade/'
    });
});

elixir(function(mix) {
    mix.livereload();
});
