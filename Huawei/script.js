var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
  // video js

  var play = document.getElementById("play");
  var range = document.getElementById("range");
  var videoTime = document.getElementById("videoTime");
  var videoDuration = document.getElementById("videoDuration");
  var video = document.getElementById("video");

  play.addEventListener("click", function(){
    if(video.paused) {
      video.play();
      document.querySelector("#play i").classList.replace("fa-play", "fa-pause");
    }else{
      video.pause();
      document.querySelector("#play i").classList.replace("fa-pause", "fa-play");

    }
  });

  video.addEventListener("click", function(){
    if(video.paused) {
      video.play();
      document.querySelector("#play i").classList.replace("fa-play", "fa-pause");
    }else{
      video.pause();
      document.querySelector("#play i").classList.replace("fa-pause", "fa-play");

    }
  });



  range.addEventListener("input", function(){
    video.currentTime = range.value;
    range.max = Math.floor(video.duration);
  });

  video.addEventListener("timeupdate", function(){
    videoTime.innerHTML = Math.floor(video.currentTime);
    range.value = video.currentTime;
    range.max = Math.floor(video.duration);
  });

  window.onload = function(){
    videoTime.innerHTML = video.currentTime;
    videoDuration.innerHTML = Math.floor(video.duration)
  }


  // Scrool GO-TOP


  const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})