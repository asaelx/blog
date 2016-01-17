$(function(){

    var $body = $('body');

    /* Medium Editor */
    var editable = $('.editable');
    if(editable.length){
        var editor = new MediumEditor('.editable', {
            toolbar: {
                buttons: ['bold', 'italic', 'underline', 'orderedlist', 'unorderedlist', 'anchor', 'h1', 'h2', 'quote']
            },
            buttonLabels: 'fontawesome',
            targetBlank: true,
            placeholder: {
                text: 'Write something cool'
            }
        });

        editable.mediumInsert({
            editor: editor,
            addons: {
                images: {
                    label: '<span class="typcn typcn-camera"></span>',
                    // fileUploadOptions: { // (object) File upload configuration. See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
                    //     url: 'uploadFile', // (string) A relative path to an upload script
                    //     acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i // (regexp) Regexp of accepted file types
                    // },
                    // deleteScript: 'delete.php',
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

    // /* Panel */
    // var panel = $('.panel');
    // if(panel.length){
    //     var close_btn = panel.find('.title').find('.close-panel'),
    //         open_btn = $('.open-panel');
    //
    //     open_btn.click(function(e){
    //         e.preventDefault();
    //         panel.addClass('revealed');
    //     });
    //
    //     close_btn.click(function(e){
    //         e.preventDefault();
    //         panel.removeClass('revealed');
    //     });
    // }

    /* File preview */
    var file_img = $('.file').filter('.img');
    if(file_img.length){

        function getImgPreview(input) {
            var $img = $('<img>', {
                class: 'img-preview',
                src: ''
            });
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $img.attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);

                return $img;
            }
        }

        file_img.change(function(){
            var preview = getImgPreview(this),
                img = file_img.next('.img-preview');
            if(img.length){
                img.remove();
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
        var onoffswitch_wrap = $('<div>', {
                class: 'onoffswitch-styled'
            });
        onoffswitch.wrap(onoffswitch_wrap).after($('<label>', {
            class: 'onoffswitch-label',
            for: onoffswitch.attr('id')
        }));
    }

    // /* Datetime field */
    // var dtBox = $("#dtBox");
    // if(dtBox.length){
    //     dtBox.DateTimePicker({
    //         dateTimeFormat: "dd-MM-yyyy hh:mm:ss AA",
    //         shortDayNames: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    //         fullDayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    //         shortMonthNames: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    //         fullMonthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    //         titleContentDateTime: "Fecha de publicación",
    //         setButtonContent: "Aceptar",
    //         clearButtonContent: "Borrar",
    //         minDateTime: new Date().format('dd-mm-yyyy hh:mm:ss TT')
    //     });
    // }

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
            tags: true
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
            if(!$target.hasClass('drop') &&
                !$target.hasClass('drop-trigger') &&
                !$target.closest('.drop').length
            ){
                drops.removeClass('visible');
            }
        });

        $(document).on('keyup', function(e){
            if (e.which == 27){
                drops.removeClass('visible');
            }
        });
    }

});
