const navTogglerOpen = document.querySelector(".navbar-toggler-open");
const navTogglerClose = document.querySelector(".navbar-toggler-close");
const navCollapse = document.querySelector(".navbar-collapse");
const search = document.querySelector(".search-icon-group");
const scrollToTopBtn = document.querySelector(".to-surface");
const rootElement = document.documentElement;

const navLeftTogglerOpen = document.querySelector(".navbar__left-toggler-open");
const navLeftTogglerClose = document.querySelector(
  ".navbar__left-toggler-close"
);
const navLeftCollapse = document.querySelector(".navbar__left-collapse");
const whoWeAre = document.querySelector(".who-we-are");
const whoWeAreSub = document.querySelector(".who-we-are-sub");
const aboutUs = document.querySelector(".about-us");
const aboutUsSub = document.querySelector(".about-us-sub");
const whoWeAreCloseButton = document.querySelector(".sub-close-button-1");
const aboutUsCloseButton = document.querySelector(".sub-close-button-2");

const navbarSubCollapse = document.querySelector(".navbar-subcollapse");
const navSubTogglerClose1 = document.querySelector(
  ".navbar-subtoggler-close-1"
);
const navSubTogglerClose2 = document.querySelector(
  ".navbar-subtoggler-close-2"
);

const body = document.querySelector("body");
const nav = document.querySelector(".navbar");

navTogglerOpen.addEventListener("click", () => {
  navCollapse.classList.add("show-navbar");
  search.classList.add("show-search");
});

navTogglerClose.addEventListener("click", () => {
  navCollapse.classList.remove("show-navbar");
  search.classList.remove("show-search");
});

navSubTogglerClose1.addEventListener("click", () => {
  navCollapse.classList.remove("show-navbar");
  whoWeAreSub.classList.remove("show-navbar");
  aboutUsSub.classList.remove("show-navbar");
  search.classList.remove("show-search");
});
navSubTogglerClose2.addEventListener("click", () => {
  navCollapse.classList.remove("show-navbar");
  whoWeAreSub.classList.remove("show-navbar");
  aboutUsSub.classList.remove("show-navbar");
  search.classList.remove("show-search");
});

whoWeAre.addEventListener("click", () => {
  whoWeAreSub.classList.add("show-navbar");
});

aboutUs.addEventListener("click", () => {
  aboutUsSub.classList.add("show-navbar");
});

whoWeAreCloseButton.addEventListener("click", () => {
  whoWeAreSub.classList.remove("show-navbar");

});
aboutUsCloseButton.addEventListener("click", () => {
  aboutUsSub.classList.remove("show-navbar");
});



scrollToTopBtn.addEventListener("click", () => {
  console.log(1);
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

navLeftTogglerOpen.addEventListener("click", () => {
  navLeftCollapse.classList.add("show-navbar__left");
  body.classList.add("hide-scroll");
});

navLeftTogglerClose.addEventListener("click", () => {
  navLeftCollapse.classList.remove("show-navbar__left");
  body.classList.remove("hide-scroll");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    nav.classList.add("navbar-color");
    search.classList.add("search-color");
  } else {
    nav.classList.remove("navbar-color");
    search.classList.remove("search-color");
  }
});
