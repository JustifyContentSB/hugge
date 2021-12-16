"use strict";

$(document).ready(function () {
  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('header__burger--open');
    $('body').toggleClass('no-scroll');
    $('.header__nav').toggleClass('header__nav--active');
  });

  if ($(window).width() < 1020) {
    var clockSwiper = new Swiper(".clock__swiper", {
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: ".clock-next"
      }
    });
  }

  var gallerySwiper1 = new Swiper(".gallery-1 .gallery__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 500,
    loop: false,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      prevEl: ".gallery-1 .gallery__prev",
      nextEl: ".gallery-1 .gallery__next"
    }
  });
  var gallerySwiper2 = new Swiper(".gallery-2 .gallery__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 500,
    loop: false,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      prevEl: ".gallery-2 .gallery__prev",
      nextEl: ".gallery-2 .gallery__next"
    }
  });
  var gallerySwiper3 = new Swiper(".gallery-3 .gallery__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 500,
    loop: false,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      prevEl: ".gallery-3 .gallery__prev",
      nextEl: ".gallery-3 .gallery__next"
    }
  });
  var gallerySwiper4 = new Swiper(".gallery-4 .gallery__swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 500,
    loop: false,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      prevEl: ".gallery-4 .gallery__prev",
      nextEl: ".gallery-4 .gallery__next"
    }
  });
  $('.gallery__like-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('gallery__like-btn--clicked');
  });
}); // Your functions here