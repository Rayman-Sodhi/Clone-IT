




const dropdownItems = document.querySelectorAll(".dropdown-hover");
const navbarWrapper = document.querySelector(".navbar-wrapper");
if (window.innerWidth < 1000) {
  const navbar = document.querySelector(".navbar");
  const menu = document.querySelector(".menu");
  menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    if (!navbar.classList.contains("change")) {
      document.querySelectorAll(".nav-dropdown").forEach((drop) => {
        drop.style.cssText = "opacity:0; visibility:hidden; left: -30rem";
      });
    }
  });

  document.querySelectorAll(".show-dropdown").forEach((drop) => {
    drop.addEventListener("click", () => {
      drop.nextElementSibling.style.cssText =
        "opacity:1; visibility:visible; left: 0";
    });
  });

  document.querySelectorAll(".nav-item-heading").forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.style.cssText =
        "opacity:0; visibility:hidden; left: -30rem";
    });
  });
} else {
  dropdownItems.forEach((item, i) => {
    item.addEventListener("mouseover", (e) => {
      document.querySelector(`.nav-dropdown-${i + 1}`).style.cssText =
        "opacity:1;visibility: visible";

      navbarWrapper.style.background =
        "linear-gradient(to right,  #066399, #2f8fdf, #066399)";
      item.querySelector("i").style.transform = "rotate(180deg)";
    });

    
  });

  window.addEventListener("resize", () => {
    window.location.reload();
  });
}


const frontPage = document.querySelector(".front-page");
const login = document.querySelector(".login-page");

console.log(login);

}
pageNavigate(".logo", "block");
pageNavigate(".login", "none", "block");
pageNavigate(".signup", "none", "none", "block");

