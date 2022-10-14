jQuery(document).ready(function() {

    $(".phone").mask("+7 (999) 999-99-99");


    jQuery('form button').click(function() {
        var form = jQuery(this).closest('.form');

        if (form.valid()) {
            var actUrl = form.attr('action');

            jQuery.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function(data) {
                    //form.html(data);
                    //form.css('opacity', '1');
                    form.find('.status').html('форма отправлена успешно');
                },
                error: function() {
                    form.find('.status').html('серверная ошибка');
                }
            });
        }
    });
});