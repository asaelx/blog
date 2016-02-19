var elixir     = require('laravel-elixir'),
    jade       = require('laravel-elixir-jade'),
    livereload = require('laravel-elixir-livereload'),
    bw = '../../../public/bower/',
    rs = '../../../resources/assets/';

elixir.config.sourcemaps = false;

// Theme
elixir(function(mix) {
    mix.sass([
        'master.sass',
        bw + 'typicons.font/src/font/typicons.css',
        bw + 'select2/dist/css/select2.min.css',
        rs + 'scss/twemoji-awesome.scss'
    ], 'public/css/master.css');
});

elixir(function(mix) {
    mix.scripts([
        bw + 'jquery/dist/jquery.min.js',
        bw + 'instafeed.js/instafeed.js',
        'magic.js'
    ], 'public/js/magic.js');
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
