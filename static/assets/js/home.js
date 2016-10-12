$(document).ready(function() {

    var $mobileToggle = $('.mobile-toggle'),
        $navWrap = $('.mobile-nav');
    $mobileToggle.on('click', function() {
        $navWrap.slideToggle(300);
    });

    $('.events-nav li').on('click', function(){
        $('li.selected').removeClass('selected');
        $(this).addClass('selected');
    });

});

$(window).scroll(function() {
    var top = $(this).scrollTop(),
        logo = $('.splash-logo'),
        logoH = logo.height(),
        introH = $('.intro').height();
    var logoBottom = introH - logoH - logo.offset().top;
    console.log(logo.offset().top);
    if (top <= introH - logoH + logoBottom) {
        logo.css({
            'bottom' : '550px',
            'transform' : 'translate3d(0px, ' + top / 2 + '%, 0px)'
        });
    } else {
        logo.css({
            'bottom' : '' + logoBottom + 'px'
        });
    }

    var $content = $('.intro-content'),
        $title = $('.splash-title'),
        opacity = top*2 / introH;
    $content.css('background-color', 'rgba(50, 106, 124,' + opacity + '');
    $title.css('opacity', '' + (1 - (opacity)) + '');
});