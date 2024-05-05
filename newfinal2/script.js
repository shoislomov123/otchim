// SWIPER

const swiper = new Swiper('.swiper', {



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    slidesPerView: 2,
    spaceBetween: 20,

    breakpoints: {
        1450: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }
});
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')
const product = document.querySelector('.products__links')
const icon = document.querySelector('.icon')
const input = document.querySelector('input')

burger.addEventListener('click', () =>{
    menu.classList.toggle('open')
    
})

icon.addEventListener('click', () =>{
    product.classList.toggle('open')
    
})

input.addEventListener('click',() =>{
input.classList.toggle('close')
})





