$(document).ready(function() {
    $('.icon, ul.nav li').click(function() {
        var windowWidth = $(window).width();
        if (windowWidth < 800) {
            var isVisible = $('ul.nav li').is(':visible');
            if (!isVisible) {
                $('ul.nav').toggleClass("responsive");
                $('ul.nav li').slideDown(200);
            } else {
                $('ul.nav li').slideUp(200, function() {
                    $('ul.nav').toggleClass("responsive");
                });
            }
        }
    });
});