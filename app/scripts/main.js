
$(document).ready(function() {
    'use strict';

    console.log('\'Allo \'Allo!');

    $.stellar();

    /*$('responsive-menu-button').sidr( {
        name: 'sidr-main',
        source: '#navigation'
    });*/

    $('#nav-menu').onePageNav();
    $.shifter();

    //$('nav').naver();

    //var nav = responsiveNav('.nav-collapse');

    //console.log(nav);
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