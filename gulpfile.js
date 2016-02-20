var elixir     = require('laravel-elixir'),
    jade       = require('laravel-elixir-jade'),
    livereload = require('laravel-elixir-livereload'),
    bw = '../../../public/bower/',
    rs = '../../../resources/assets/';

elixir.config.sourcemaps = false;

// Theme
elixir(function(mix) {
    mix.sass([
        'themes/realnerdo/master.sass',
        bw + 'highlightjs/styles/monokai-sublime.css',
        bw + 'zoomjs/css/zoom.css'
    ], 'public/css/themes/realnerdo/master.css');
});

elixir(function(mix) {
    mix.scripts([
        bw + 'jquery/dist/jquery.js',
        bw + 'instafeed.js/instafeed.js',
        bw + 'highlightjs/highlight.pack.js',
        bw + 'sharer.js/sharer.js',
        'themes/realnerdo/transition.js',
        bw + 'zoomjs/js/zoom.js',
        'themes/realnerdo/magic.js'
    ], 'public/js/themes/realnerdo/magic.js');
});

// Admin
elixir(function(mix) {
    mix.sass([
        'admin/admin.sass',
        bw + 'typicons.font/src/font/typicons.css',
        rs + 'css/dropdowns.css',
        bw + 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
        bw + 'select2/src/scss/core.scss',
        rs + 'scss/twemoji-awesome.scss',
        '../css/dropzone.css',
        '../css/editor.css'
    ], 'public/css/admin.css');
});

elixir(function(mix) {
    mix.scripts([
        bw + 'jquery/dist/jquery.min.js',
        bw + 'autosize/dist/autosize.min.js',
        bw + 'date.format/date.format.js',
        bw + 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        bw + 'select2/dist/js/select2.js',
        'dropzone.js',
        'ghostdown.js',
        'admin.js'
    ], 'public/js/admin.js');
});

elixir(function(mix) {
    mix.jade({
        search: '**/**/**/*.jade',
        src: '/assets/jade/'
    });
});

elixir(function(mix) {
    mix.livereload();
});
