// 썸네일 슬라이더를 먼저 정의
var bottomSlider = new Swiper(".bottom-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var topSlider = new Swiper(".top-slider", {
    loop: true,
    // spaceBetween: 10,
    autoplay: {
        delay: 5000,
    },
    effect: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: bottomSlider,
    },
});
