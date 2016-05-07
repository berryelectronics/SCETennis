function resizeElements() {
    var screenWidth = $(window).width();
    
    
    if (screenWidth >= 1200) { //Large devices >= 1200px
        $('#navigation').css('height', '4em');
        $('#navigation').find('a').each(function () {
            $(this).css('font-size', '1.5em');
            $(this).css('padding', '14px 16px');
        });
    } else if (screenWidth >= 992) { //Medium devices >= 992
        $('#navigation').css('height', '2.8em');
        $('#navigation').find('a').each(function () {
            $(this).css('font-size', '1.2em');
            $(this).css('padding', '8px 18px');
        });
    } else if (screenWidth >= 768) { //Small devices >= 768
        $('#navigation').css('height', '2em');
        $('#navigation').find('a').each(function () {
            $(this).css('font-size', '1em');
            $(this).css('padding', '6px 6px');
        });
    } else { //Extra small devices < 768
        $('#navigation').css('height', '2em');
        $('#navigation').find('a').each(function () {
            $(this).css('font-size', '1em');
            $(this).css('padding', '6px 4px');
        });
    }
}

$(document).ready(function () {
    resizeElements();
    $('#fullpage').fullpage({
        anchors: ['a-startseite', 'a-about-us', 'a-gallerie', 'a-mannschaft', 'a-terminkalender', 'a-trainingszeiten', 'a-mitglied-werden'],
        sectionsColor: ['#1E824C', '#1D7D49', '#1C7846', '#1A7343', '#196E40', '#18693D', '#17633A'],
        loopBottom: true,
        menu: '#navigation',
        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 3500);
        }
    });
});

/*
$(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = document.height();
    
    if (y_scroll_pos > scroll_pos_test) {

    }
});
*/

$(window).on('resize', function () {
    resizeElements();
});

