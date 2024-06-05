$('.navbar-btn').click(function(){
  $('.menu').toggleClass("active");
  $('.menu-list').toggleClass("active");
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grid: {
    rows: 3,
  },
  breakpoints: {
    768: {      
      grid: {
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24,
    }
  }
});
