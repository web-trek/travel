var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    centeredSlides: true,
    autoHeight: true,
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //     },
    //     700: {
    //         slidesPerView: 1,
    //     },
    //     1000: {
    //         slidesPerView: 1,
    //     },
    // }
});

var swiper = new Swiper(".product-slider", {
    grabCursor: true,
    // centeredSlides: true,
    // autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 4,
        },
    }
});