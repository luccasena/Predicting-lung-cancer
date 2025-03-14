var swiper = new Swiper(".swiper", {
    loop:true,
    grabcursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true
    },
    breakpoints: {
      // when window width is >= 320px
      500: {
        slidesPerView: 1,
        spaceBetween: 18
      },
      // when window width is >= 480px
      820: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      // when window width is >= 640px
      1120: {
        slidesPerView: 2,
        spaceBetween: 24
      }
    }
});