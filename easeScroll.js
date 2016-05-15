$.fn.easeScroll = function (options) {
    var el = this;
    if ($(this).length == 0) {
        console.log('there is no element for easeScroll');
        return;
    }

    var settings = $.extend({
        speed: 500,
        callback: function () { },
    }, options);
    if (typeof ($(el).data('easeScrollTop')) == 'undefined')
        $(this).data('easeScrollTop', $(el).offset().top);

    if (typeof ($(el).data('easeScrollLeft')) == 'undefined')
        $(this).data('easeScrollLeft', $(el).offset().left);

    $(window).on('scroll', function () {
        $(el).stop().animate({
            top: $(window).scrollTop() + $(el).data('easeScrollTop'),
            left: $(window).scrollLeft() + $(el).data('easeScrollLeft')
        }, settings.speed, function () {
            settings.callback;
        });
    });
};