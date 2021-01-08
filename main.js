
// Swiper Slider init //

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// hamburger Menu Icon //

var haburger = document.querySelector(".haburger-menu")
var nav = document.querySelector("header nav")
haburger.addEventListener("click", () => {
    haburger.classList.toggle("open")
    console.log(nav);
    nav.classList.toggle("show")

})
