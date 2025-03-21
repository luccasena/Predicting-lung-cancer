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

      500: {
        slidesPerView: 1,
        spaceBetween: 18
      },
     
      820: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      
      1120: {
        slidesPerView: 2,
        spaceBetween: 24
      }
    }
});