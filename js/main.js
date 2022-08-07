/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('navbar')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? navbar.classList.add('scroll-nav') 
                       : navbar.classList.remove('scroll-nav')
}
window.addEventListener('scroll', scrollHeader)

//////////////////////// 1 /////////////////////////////////

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },
  });


  ///////////////////// 2 /////////////////

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
  });

////////////////////////////// 3 //////////////////




  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
  });


  ////////////////////////////// 4 //////////////////

  var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        400:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
  });
///////////////////////////// 5 //////////////////

  var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
  });

  //////////////////////// 6 ///////////////////////

  var swiper = new Swiper(".mySwiper6", {
    pagination: {
      el: ".ss",
      clickable: true
    }
  });

  //////////////////////// open haumbergar  ////////////////////////

  const haumbergar = document.getElementById("menu");
  const close = document.getElementById("close");
  const mobnav = document.querySelector(".mob_nav");

  haumbergar.addEventListener("click",()=>{
    mobnav.classList.add("open");
  })

  close.addEventListener("click",()=>{
    mobnav.classList.remove("open");

  })

  //////////////////////////////suggested/////////////////////////

  var swiper = new Swiper(".suggested", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      "@1.70": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
  });



  /*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'40px',
    duration:2000,
    delay:400,
  //reset:true,
  })
  
  sr.reveal(`.body_header, .mob_nav, .mySwiper2`)
  sr.reveal(`.header_img`,{delay: 600,origin: 'bottom'})
//   sr.reveal(`.numberall`,{delay: 600, duration:2000,origin: 'bottom'})
//   sr.reveal(`.new__card, .brand__img`,{interval:100})
//   sr.reveal({origin:'right',delay: 600,})
//   sr.reveal(`.btn_cours`,{origin:'left',delay: 600,})


///////////////////counter////////////////////////

$(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });