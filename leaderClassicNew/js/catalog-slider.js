export const catalogSlider = () => {
  new Swiper(".slider-catalog", {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 140,
    mousewheel: {
      forceToAxis: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: "8%",
      },
      375: {
        slidesPerView: 2.5,
        spaceBetween: "8%",
      },
      // when window width is >= 480px
      425: {
        slidesPerView: 2.5,
        spaceBetween: "3%",
      },
      576: {
        slidesPerView: 3.5,
        spaceBetween: "3%",
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: "4%",
      },
      1100: {
        slidesPerView: 6,
        spaceBetween: "4%",
      },
      // when window width is >= 640px
      1250: {
        slidesPerView: 6,
        spaceBetween: "6%",
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: "9%",
      },
    },
  });
};
