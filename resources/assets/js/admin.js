$(function(){

    var $body = $('body');

    /* Autosize */
    var sizeable = $('.autosize');
    if(sizeable.length){
        autosize(sizeable);
    }

    /* Medium Editor */
    var editable = $('.editable');
    if(editable.length){
        var editor = new MediumEditor('.editable', {
            toolbar: {
                buttons: ['bold', 'italic', 'underline', 'orderedlist', 'unorderedlist', 'anchor', 'h1', 'h2', 'quote', 'pre']
            },
            buttonLabels: 'fontawesome',
            targetBlank: true,
            placeholder: {
                text: 'Empieza a escribir algo genial...'
            }
        });

        var csrf_token = $('input[name="_token"]').val();
        editable.mediumInsert({
            editor: editor,
            addons: {
                images: {
                    label: '<span class="typcn typcn-camera"></span>',
                    captionPlaceholder: 'Escribe un pie de foto (opcional)',
                    fileUploadOptions: { // (object) File upload configuration. See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
                        headers: {
                            'X-CSRF-Token': csrf_token
                        },
                        url: 'http://' + window.location.hostname + '/admin/editorUpload', // (string) A relative path to an upload script
                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i, // (regexp) Regexp of accepted file types
                        dataType: 'json'
                        // done: function (e, data) {
                        //
                        // }
                    },
                    deleteScript: 'http://' + window.location.hostname + '/admin/editorDelete',
                    deleteMethod: 'POST',
                    fileDeleteOptions: {
                        headers: {
                            'X-CSRF-TOKEN': csrf_token
                        }
                        // deleteScript: 'http://' + window.location.hostname + '/admin/editorDelete'
                    }
                },
                embeds: {
                    label: '<span class="typcn typcn-social-youtube"></span>',
                    placeholder: 'Pega un link de Youtube, Vimeo, Facebook, Twitter o Instagram y presiona Enter',
                    captionPlaceholder: 'Escribe una leyenda (opcional)'
                }
            }
        });
    }

    /* Tabs */
    var tabs = $('.tabs');
    if(tabs.length){
        var tabs = tabs.find('.tab').find('.link'),
            tabbed = $('.tabbed');

        if(tabbed.length){
            tabs.click(function(e){
                e.preventDefault();
                var $this = $(this),
                    tab_id = $this.data('tab');
                tabs.removeClass('active');
                $this.addClass('active');
                tabbed.removeClass('active');
                tabbed.filter('#' + tab_id).addClass('active');
            });
        }
    }

    /* File preview */
    var file_img = $('.file').filter('.img');
    if(file_img.length){

        function getImgPreview(input) {
            var $preview = $('<div>', {
                    class: 'preview'
                }),
                style = 'background: url(%data%) no-repeat center center; background-size: cover;';
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    var background = style.replace('%data%', e.target.result);
                    $preview.attr('style', background);
                }

                reader.readAsDataURL(input.files[0]);

                return $preview;
            }
        }

        file_img.change(function(){
            var preview = getImgPreview(this),
                existent = file_img.next('.preview');
            if(existent.length){
                existent.remove();
            }
            file_img.after(preview);
        });
    }

    /* Select Dropdowns */
    var select = $('.select');
    if(select.length){
        var select_wrap = $('<div>', {
                class: 'select-styled'
            });

        select.wrap(select_wrap).before($('<span>', {
            class: 'typcn typcn-arrow-sorted-down'
        }));
    }

    /* Checkbox Switch */
    var onoffswitch = $('.onoffswitch');
    if(onoffswitch.length){
        $.each(onoffswitch, function(){
            var $this = $(this);
            var onoffswitch_wrap = $('<div>', {
                    class: 'onoffswitch-styled'
                });
            $this.wrap(onoffswitch_wrap).after($('<label>', {
                class: 'onoffswitch-label',
                for: $this.attr('id')
            }));
        });
        // var onoffswitch_wrap = $('<div>', {
        //         class: 'onoffswitch-styled'
        //     });
        // onoffswitch.wrap(onoffswitch_wrap).after($('<label>', {
        //     class: 'onoffswitch-label',
        //     for: onoffswitch.attr('id')
        // }));
    }

    // Datepicker

    // Language
    $.fn.datepicker.dates['es'] = {
        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: "Hoy",
        clear: "Borrar",
        // format: "mm/dd/yyyy",
        titleFormat: "MM yyyy",
        weekStart: 0
    };
    // Datepicker init
    $('.datepicker').datepicker({
        format: "yyyy-mm-dd",
        startDate: new Date().format('yyyy-mm-dd'),
        todayBtn: "linked",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });

    /* Select2 */
    var selects2 = $('.select2');
    if(selects2.length){
        selects2.select2({
            width: '100%',
            tags: true,
            tokenSeparators: [","],
            "language": {
                "noResults": function(){
                    return "Aún no hay etiquetas, escribe una...";
                }
            },
            escapeMarkup: function (markup) {
                return markup;
            }
        });
    }

    /* Drop */
    var drop_trigger = $('.drop-trigger');
    if(drop_trigger.length){
        var drops = $('.drop');
        $('.drop-trigger').on('click', function(e){
            e.preventDefault();
            var $this = $(this),
                drop_id = $this.data('drop');
            drops.filter('#' + drop_id).toggleClass('visible');
        });

        $(document).on('click', function(e){
            var $target = $(e.target);
            if(!$target.hasClass('drop-trigger') && !$target.closest('.drop').length && !$target.hasClass('select2-selection__choice__remove') && !$target.closest('.select2-container').length)
            {
                drops.removeClass('visible');
            }
        });

        $(document).on('keyup', function(e){
            if (e.which == 27){
                drops.removeClass('visible');
            }
        });
    }

    /* Notifications */
    var notifications = $('.notification');
    if(notifications.length){
        setTimeout(function(){
            $.each(notifications, function(i, e){
                var delay_time = 5000 * i,
                    $this = $(this);
                setTimeout(function(){
                    $this.addClass('go-away').delay(800).slideUp(300);
                }, delay_time);
            });
        }, 5800);
    }

});
