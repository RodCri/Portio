const navOptions = document.querySelector('.nav__options');
const hamburguer = document.querySelector('#hamburger');

hamburguer.addEventListener('click',()=>{
  if(hamburguer.checked){
    navOptions.classList.add('show');
  }
  else{
    navOptions.classList.remove('show');
  }
})

const swiper = document.querySelector('.mySwiper');
const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    340:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

Object.assign(swiper, swiperParams);

swiper.initialize();