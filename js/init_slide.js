const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },

    breakpoints: {
        "@0.00": {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        "@0.75": {
          slidesPerView: 1.5,
          spaceBetween: 50,
        },
        "@1.00": {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
        "@1.50": {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
      },
  });