// const swiper = new Swiper('.swiper', {
//     autoplay : {
//         delay:2000,
//         disableOnInteraction: false,
//     },
//     loop: true,

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//   });

let sliderSelector = '.swiper',
    option = {
        loop: true,
        slidesPerView:2,
        spaceBetween: 20,
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadow: true
        },
        navigation: {
            nextEl: '.bi-arrow-right-circle',
            prevEl: '.bi-arrow-left-circle',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    };
let mySwiper = new Swiper(sliderSelector, option);
mySwiper.init();



var myvideo=document.getElementById("vid")
function playpause(){
    if(myvideo.paused){
        myvideo.play();
        document.getElementById("playpause-img").style.background='none';
    }
    else {
        myvideo.pause();
        document.getElementById("playpause-img").style.backgroundImage=false;
    }
}
