  document.addEventListener('DOMContentLoaded', function () {
  // Home Swiper
  var homeSwiper = new Swiper(".home", {
    spaceBetween: 30,
    autoHeight: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Coming Soon Swiper
  var comingSwiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  });

  // Popular Movies Swiper
  var popularSwiper = new Swiper(".popular-container", {
    spaceBetween: 20,
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  });

  // Navigation Buttons for Coming Soon
  var comingPrevButton = document.querySelector('.coming .swiper-button-prev');
  var comingNextButton = document.querySelector('.coming .swiper-button-next');

  comingPrevButton.addEventListener('click', function () {
    comingSwiper.slidePrev();
  });

  comingNextButton.addEventListener('click', function () {
    comingSwiper.slideNext();
  });

  // Navigation Buttons for Popular Movies
  var popularPrevButton = document.querySelector('.popular-movies .swiper-button-prev');
  var popularNextButton = document.querySelector('.popular-movies .swiper-button-next');

  popularPrevButton.addEventListener('click', function () {
    popularSwiper.slidePrev();
  });

  popularNextButton.addEventListener('click', function () {
    popularSwiper.slideNext();
  });
  
});