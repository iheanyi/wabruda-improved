
$(document).ready(function() {
    'use strict';

    console.log('\'Allo \'Allo!');

    $.stellar();
    $('#nav-menu').onePageNav();

    $('a[href=\'#\']').click(function() {
        //$('.brand').scrollTo();
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
            $(this).after( function() {
                //$('.current > a').css('color', '#fff');
            });
        });
        //$('.current > a').css('color', '#fff');
        console.log('LINK CLICKED');
        /*$('html.body').animate({
            scrollTop: $('#').top()
        }, 2000);*/
    });
});
//});