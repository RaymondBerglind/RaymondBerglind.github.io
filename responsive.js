$(document).ready(function() {
    var responsiveClass = 'responsive';

    function getWindowWidth() {
        return $(window).width();
    }

    function menuIsVisible() {
        return $('ul.nav li').is(':visible');
    }

    function menuIsInline() {
        return $('ul.nav li').css('display') === 'inline';
    }

    function widthCheck() {
        if (getWindowWidth() > 800) {
            $('ul.nav').removeClass(responsiveClass);
            $('ul.nav li').css('display', 'inline');
        } else if (!menuIsVisible() || menuIsInline()){
            $('ul.nav li').css('display', 'none');
        }
    }

    $('.icon, ul.nav li').click(function() {
        if (getWindowWidth() <= 800) {
            if (!menuIsVisible()) {
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