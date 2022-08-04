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
