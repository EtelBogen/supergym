// Swiper 7.4.1
import './vendor/swiper';

const sliderTrainers = new Swiper('.trainers__slider', {
  slidesPerView: 1,
  loop: true,
  direction: 'horizontal',
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.trainers__slider-button--next',
    prevEl: '.trainers__slider-button--prev',
  },
});

swiper.activeindex = 0;

const sliderReviews = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
});

export {sliderTrainers, sliderReviews};
