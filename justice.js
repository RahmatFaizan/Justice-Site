/* ---- --- JavaScript --- ----*/

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
