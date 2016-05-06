$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#1E824C'],
        loopBottom: true,
        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 3500);
        }
    });
});