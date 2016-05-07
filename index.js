function resizeElements() {
    var screenWidth = $(window).width();
    
    //For Ham Menue / Navigation
    if ($('#ham').hasClass('ham-visible')) {
        
        if (screenWidth >= 1200) { //Large devices >= 1200px
            $('#navigation').css('width', '25%');
            $('#navigation').animate({
                left: "0"
            }, 600);
            $('#ham').animate({
               margin: "0 0 0 25%"
            }, 600);
        } else if (screenWidth >= 992) { //Medium devices >= 992
            $('#navigation').css('width', '25%');
            $('#navigation').animate({
                left: "0"
            }, 600);
            $('#ham').animate({
               margin: "0 0 0 25%"
            }, 600);
        } else if (screenWidth >= 768) { //Small devices >= 768
            $('#navigation').css('width', '25%');
            $('#navigation').animate({
                left: "0"
            }, 600);
            $('#ham').animate({
               margin: "0 0 0 25%"
            }, 600);
        } else { //Extra small devices < 768
            $('#navigation').css('width', '50%');
            $('#navigation').animate({
                left: "0"
            }, 600);
            $('#ham').animate({
               margin: "0 0 0 50%"
            }, 600);
            
        }
    } else {
        $('#ham').animate({
           margin: "0 0 0 0"
        }, 600);
        
        if (screenWidth >= 768) {
            $('#navigation').animate({
                left: "-25%"
            }, 600);
        } else {
            $('#navigation').animate({
                left: "-50%"
            }, 600);
        }
    }
    
    //General Purpose
    if (screenWidth >= 1200) { //Large devices >= 1200px
        $('#startseite').find('.startseite-branding').css('font-size', '6em');
        $('#startseite').find('.startseite-branding').css('top', '45%');
        
        $('#ham').find('span').css('font-size', '2em');
        
        $('#about-us').find('h1').css('font-size', '5em');
        $('#about-us').find('p').css('font-size', '1.5em');
    } else if (screenWidth >= 992) { //Medium devices >= 992
        $('#startseite').find('.startseite-branding').css('font-size', '5em');
        $('#startseite').find('.startseite-branding').css('top', '45%');
        
        $('#ham').find('span').css('font-size', '2em');
        
        $('#about-us').find('h1').css('font-size', '5em');
        $('#about-us').find('p').css('font-size', '1.5em');
    } else if (screenWidth >= 768) { //Small devices >= 768
        $('#startseite').find('.startseite-branding').css('font-size', '4.1em');
        $('#startseite').find('.startseite-branding').css('top', '45%');
        
        $('#ham').find('span').css('font-size', '2em');
        
        $('#about-us').find('h1').css('font-size', '4em');
        $('#about-us').find('p').css('font-size', '1.5em');
    } else if (screenWidth > 390) { //Extra small devices < 768
        $('#startseite').find('.startseite-branding').css('font-size', '4.1em');
        $('#startseite').find('.startseite-branding').css('top', '40%');
        
        $('#ham').find('span').css('font-size', '2em');
        
        $('#about-us').find('h1').css('font-size', '4em');
        $('#about-us').find('p').css('font-size', '1.2em');
    } else {
        $('#startseite').find('.startseite-branding').css('font-size', '3em');
        $('#startseite').find('.startseite-branding').css('top', '40%');
        
        $('#ham').find('span').css('font-size', '1.5em');
        
        $('#about-us').find('h1').css('font-size', '3.5em');
        $('#about-us').find('p').css('font-size', '1.2em');
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

$('#ham').click(function () {
    if ($('#ham').hasClass('ham-visible')) {
        $('#ham').removeClass('ham-visible');
    } else {
        $('#ham').addClass('ham-visible');
    }
    resizeElements();
});

$(window).on('resize', function () {
    resizeElements();
    $.fn.fullpage.reBuild();

});

$('#scroll-arrow-up').click(function () {
    $.fn.fullpage.moveSectionUp();
});

$('#scroll-arrow-down').click(function () {
    $.fn.fullpage.moveSectionDown();
});

