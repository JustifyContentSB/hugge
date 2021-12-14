"use strict";

$(document).ready(function(){
    $('.header__burger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('header__burger--open');
        $('body').toggleClass('no-scroll');
        $('.header__nav').toggleClass('header__nav--active');
    });

    if($(window).width() < 1020) {
        var clockSwiper = new Swiper(".clock__swiper", {
            slidesPerView: 'auto',
            spaceBetween: 0,
            loop: false,
            navigation: {
                nextEl: ".clock-next",
            },
        });
    }
});

// Your functions here

