document.addEventListener("scroll", (e) => {
    if (this.scrollY > 180) {
    // TO CHANGE THE APPEARANCE OF NAVBAR AFTER SCROLL
      document.querySelector("#navbar").style.background = "rgba(0,0,0,1)";
      document.querySelectorAll("#navbar a").forEach((a) => (a.style.color = "white"));
    } else {
      // REMOVING CLASS
      document.querySelector("#navbar").style.background = "unset";
      document.querySelectorAll("#navbar a").forEach((a) => (a.style.color = "white"));
    }
  });


  document.addEventListener("scroll", (e) => {
    if (this.scrollY > 1400) {
    // TO CHANGE THE APPEARANCE OF NAVBAR AFTER SCROLL
      document.querySelector("#foot").style.display = "block";
      document.querySelectorAll("#foot a").forEach((a) => (a.style.color = "white"));
    } else {
      // REMOVING CLASS
      document.querySelector("#foot").style.display = "none";
      document.querySelectorAll("#foot a").forEach((a) => (a.style.color = "black"));
    }
  });
