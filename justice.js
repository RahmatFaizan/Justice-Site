/* ---- --- JavaScript --- ----*/

/*  ---- --- -- - On reload Transition / Animation - -- --- ---- */

document.querySelector(".home-heading").classList.add("translate-0-perc");
document.querySelector(".home-para-div").classList.add("translate-0-perc");
document.querySelector(".home-btn").classList.add("translate-0-perc");

//

let justiceTranslate = document.querySelectorAll(".justice-translate");
let consultationID = document.querySelector("#consultation");
let consultation = document.querySelector(".consultation");

//
//

justiceTranslate.forEach((e) => {
  var expTop = e.offsetTop - 550;
  if (scrollY >= expTop) {
    e.classList.add("translate-0-perc");
    //
  } else {
  }
});

if (scrollY >= consultationID.offsetTop - 550) {
  consultation.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

//

window.addEventListener("scroll", () => {
  //

  justiceTranslate.forEach((e) => {
    var expTop = e.offsetTop - 550;
    if (scrollY >= expTop) {
      e.classList.add("translate-0-perc");
      //
    } else {
    }
  });

  //

  if (scrollY >= consultationID.offsetTop - 550) {
    consultation.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  }

  //
});

// End's

//

const hamburger = document.querySelector(".hamburger");

const smNavigation = document.querySelector(".sm-navigation");

const closeSmScreen = document.querySelector(".close-sm-screen");

const angleDown = document.querySelectorAll(".sm-angle-down");

const smMenu1 = document.querySelector(".sm-menu1");

const smUl = document.querySelector(".sm-ul");

hamburger.addEventListener("click", () => {
  smUl.style.right = 0;
  smNavigation.classList.add("show-sm-navigation");
});

closeSmScreen.addEventListener("click", () => {
  smUl.style.right = "";
  smNavigation.classList.remove("show-sm-navigation");
});

angleDown.forEach((e) => {
  e.addEventListener("click", () => {
    //
    const parentHeight = document
      .querySelector(".sm-menu1")
      .getBoundingClientRect().height;
    //
    const smHeight =
      e.parentElement.nextElementSibling.firstElementChild.getBoundingClientRect()
        .height;
    //

    const menu = e.parentElement.nextElementSibling;
    //

    if (menu.classList.contains("sm-menu2")) {
      /* --- -- - -- --- */

      if (menu.style.height == 0) {
        menu.style.height = `${smHeight}px`;
        smMenu1.style.height = smHeight + parentHeight + "px";
      } else {
        menu.style.height = ``;
        smMenu1.style.height = `${smHeight}px`;
      }

      /* --- -- - -- --- */
    } else {
      /* --- -- - -- --- */

      if (menu.style.height == 0) {
        menu.style.height = `${smHeight}px`;
      } else {
        menu.style.height = ``;
      }

      /* --- -- - -- --- */
    }
  });
});

/* --- -- Image SLider -- --- */

// <!-- Swiper -->

var swiper = new Swiper(".mySwiper", {
  //

  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,

  //

  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  freeMode: true,
  speed: 1500,

  //

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  //

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //

  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },

  //

  breakpoints: {
    770: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },

  //
});

/* --- -- - Justice Law - -- --- */

/* Opacity Changing */

let justiceLaw = document.querySelectorAll(".justice-law");

justiceLaw.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    e.style.opacity = "1";
  });
  e.addEventListener("mouseleave", () => {
    e.style.opacity = "";
  });
});

// Hide Preloader

document.getElementById("preloader").classList.add("hide-preloader");
