$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['a-startseite', 'a-about-us', 'a-gallerie', 'a-mannschaft', 'a-terminkalender', 'a-trainingszeiten', 'a-mitglied-werden'],
        sectionsColor: ['#1bbc9b', '#1E824C', '#1E824C', '#1E824C', '#1E824C', '#1E824C', '#1E824C'],
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