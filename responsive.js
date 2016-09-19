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

    function toggleMenu() {
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
    }

    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                    scrollTop: target.offset().top - 72
                    }, 1000);
                    toggleMenu();
                    return false;
                }
            }
        });
    });

    $('.icon, ul.nav li').click(toggleMenu);

    widthCheck();
    $(window).resize(widthCheck);
});