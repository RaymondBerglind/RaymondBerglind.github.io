$(document).ready(function() {
    var responsiveClass = 'responsive';

    function getWindowWidth() {
        return $(window).width();
    }
    function widthCheck() {
        if (getWindowWidth() > 800) {
            $('ul.nav').removeClass(responsiveClass);
            $('ul.nav li').css('display', 'inline');
        } else {
            $('ul.nav li').css('display', 'none');
        }
    }

    $('.icon, ul.nav li').click(function() {
        if (getWindowWidth() <= 800) {
            var isVisible = $('ul.nav li').is(':visible');
            if (!isVisible) {
                $('ul.nav').toggleClass(responsiveClass);
                $('ul.nav li').slideDown(200);
            } else {
                $('ul.nav li').slideUp(200, function() {
                    $('ul.nav').toggleClass(responsiveClass);
                });
            }
        }
    });

    widthCheck();
    $(window).resize(widthCheck);
});