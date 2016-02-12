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
        bw + 'font-awesome/css/font-awesome.css',
        bw + 'medium-editor/dist/css/medium-editor.min.css',
        bw + 'medium-editor/dist/css/themes/default.min.css',
        bw + 'medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css',
        rs + 'css/dropdowns.css',
        bw + 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
        bw + 'select2/src/scss/core.scss',
        rs + 'scss/twemoji-awesome.scss'
    ], 'public/css/admin.css');
});

elixir(function(mix) {
    mix.scripts([
        bw + 'jquery/dist/jquery.min.js',
        bw + 'autosize/dist/autosize.min.js',
        bw + 'medium-editor/dist/js/medium-editor.min.js',
        bw + 'handlebars/handlebars.runtime.min.js',
        bw + 'jquery-sortable/source/js/jquery-sortable-min.js',
        bw + 'blueimp-file-upload/js/vendor/jquery.ui.widget.js',
        bw + 'blueimp-file-upload/js/jquery.iframe-transport.js',
        bw + 'blueimp-file-upload/js/jquery.fileupload.js',
        bw + 'medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.js',
        bw + 'MediumButton/src/MediumButton.js',
        bw + 'date.format/date.format.js',
        bw + 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        bw + 'select2/dist/js/select2.js',
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
