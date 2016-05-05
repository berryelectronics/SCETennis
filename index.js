'use strict';

$(function () {
    $("#slides").slidesjs({
        width: 940,
        height: 528,
        
        pagination: {
            active: true,
                // [boolean] Create pagination items.
                // You cannot use your own pagination. Sorry.
            effect: "slide"
                // [string] Can be either "slide" or "fade".
        },
        
        navigation: {
            active: true,
                // [boolean] Generates next and previous buttons.
                // You can set to false and use your own buttons.
                // User defined buttons must have the following:
                // previous button: class="slidesjs-previous slidesjs-navigation"
                // next button: class="slidesjs-next slidesjs-navigation"
            effect: "slide"
                // [string] Can be either "slide" or "fade".
        },
        
        play: {
            active: true,
                // [boolean] Generate the play and stop buttons.
                // You cannot use your own buttons. Sorry.
            effect: "slide",
                // [string] Can be either "slide" or "fade".
            interval: 5000,
                // [number] Time spent on each slide in milliseconds.
            auto: true,
                // [boolean] Start playing the slideshow on load.
            swap: true,
                // [boolean] show/hide stop and play buttons
            pauseOnHover: false,
                // [boolean] pause a playing slideshow on hover
            restartDelay: 2500
                // [number] restart delay on inactive slideshow
        }
    });
});