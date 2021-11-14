const header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 60) {
//     !header.matches(".header-shirk") && header.classList.add("header-shirk");
//   } else {
//     header.matches(".header-shirk") && header.classList.remove("header-shirk");
//   }
// });

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
scroller.on("scroll", ({ scroll }) => {
  if (scroll.y >= 60) {
    !header.matches(".header-shirk") && header.classList.add("header-shirk");
  } else {
    header.matches(".header-shirk") && header.classList.remove("header-shirk");
  }
});

const headerMenu = document.querySelector(".header-main");
const menuMobile = document.querySelector(".menu-mobile");
const menuMbileClose = document.querySelector(".menu-mobile-close");

const menuMobileTransEnd = () => {
  menuMobile.removeEventListener("transitionend", menuMobileTransEnd);
  headerMenu.classList.add("active");
};

menuMobile.addEventListener("click", () => {
  menuMobile.addEventListener("transitionend", menuMobileTransEnd);
  menuMobile.classList.add("active");
});

menuMbileClose.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  headerMenu.classList.remove("active");
});
