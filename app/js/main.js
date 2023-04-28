const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    slidesPerView: "2.5",
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});