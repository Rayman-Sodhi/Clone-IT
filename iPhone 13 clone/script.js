//  ADDED CUSTOM SCROLL BAR USING WEBKIT FOR BETTER LOOK
document.addEventListener("scroll", (e) => {
  if (this.scrollY > 180) {
  // TO CHANGE THE APPEARANCE OF NAVBAR AFTER SCROLL
    document.querySelector("#navbar").style.background = "rgba(0,0,0,.8)";
    document.querySelectorAll("#navbar a").forEach((a) => (a.style.color = "white"));
  } else {
    // REMOVING CLASS
    document.querySelector("#navbar").style.background = "unset";
    document.querySelectorAll("#navbar a").forEach((a) => (a.style.color = "black"));
  }
});

//  SETTING DARK/LIGHT MODE CONFIGURATIONS HERE
const toggler = "theChange";
let theChange = localStorage.getItem(toggler);
if (theChange && theChange === "dark") {
  dark();
} else {
  light();
}

// MODE CHANGING EVENT HANDLER
const toggle = document.getElementById('toggle')
toggle.addEventListener("click", (e) => {
  theChange = localStorage.getItem(toggler);
  if (theChange && theChange === "dark") {
    localStorage.setItem(toggler, "light");
    light();
  } else {
    localStorage.setItem(toggler, "dark");
    dark();
  }
});

// FUNCTION FOR SETTING UP DARK MODE
function light() {
  document.querySelector("#toggle").innerText = "Enable Dark Mode";
  document.body.style.filter = "unset";
  document.querySelector("#appleLogo").filter = "unset";
  document.querySelectorAll("iframe").forEach((iframe) => (iframe.style.filter = "unset"));
  document.querySelectorAll("img").forEach((img) => (img.style.filter = "unset"));
}

// FUNCTION FOR SETTING UP LIGHT MODE
function dark() {
  document.querySelector("#appleLogo").style.filter = "unset";
  document.body.style.filter = "invert(1)";
  document.querySelector("#toggle").innerText = "Enable Light Mode";
  document.querySelectorAll("img").forEach((img) => (img.style.filter = "invert(1)"));
  document.querySelectorAll("iframe").forEach((iframe) => (iframe.style.filter = "invert(1)"));
}

