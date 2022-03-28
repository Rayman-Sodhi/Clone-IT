// colusal-manula+automatic
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
   

} 

var slidePosition = 0;
SlideShowe();

function SlideShowe() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var j = 0; j < circles.length; j++) {
      circles[j].className = circles[j].className.replace("enable", "");
  }
  
  if (slidePosition > slides.length-1) 
  {
      slidePosition = 0;

}
slidePosition++;
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
setTimeout(SlideShowe, 5000);
   
} 

// coluser-end


// slider-end

// product-slider-trendingstories
right=document.getElementById("left");
left =document.getElementById("getto");
sliderprod=document.getElementById("slider-prod")

right.onclick=function(){
   
    
       
        sliderprod.style.transform="translateX(-65%)";
       
    
  
   
}
left.onclick=function(){
    sliderprod.style.transform="translateX(0.4%)"
}


// productbar for editorial

rightto=document.getElementById("left-2");
leftto =document.getElementById("getto-2");
sliderprodto=document.getElementById("slider-prod-2")

rightto.onclick=function(){
   sliderprodto.style.transform="translateX(-50%)";
}
leftto.onclick=function(){
    sliderprodto.style.transform="translateX(0.4%)"
}
// product bar hidden gems
rightone=document.getElementById("left-1");
leftone =document.getElementById("getto-1");
sliderprodone=document.getElementById("slider-prodone")

rightone.onclick=function(){

   sliderprodone.style.transform="translateX(-65%)";
}
leftone.onclick=function(){
    sliderprodone.style.transform="translateX(0.4%)"
}

// slider-arrow
window.addEventListener("scroll",()=>{

    let move = document.getElementById("move");

    scrollbar = window.scrollY;
    
     if(scrollbar>=100)
     {
        move.style.display = "block";
     }
     else{
         move.style.display="none"
     }
})
let move = document.getElementById("move");
move.addEventListener("click",()=>{
    window.scrollTo({
    top:0,
       left :0,
       behavior:"smooth"
    })
})

// onchan func for hide chat option and explor chatbox
let HideChatBox___ = document.querySelector(".cl")
let ShowChatBox___ = document.querySelector(".chatbox")
ShowChatBox___.addEventListener("click" , exchat)
HideChatBox___.addEventListener("click" , clos)

function exchat()
{
  let explorechat = document.getElementById("explr");
  let chatbox = document.getElementById("cbt");
  explorechat.style.display ="block";
  chatbox.style.display = "none";

}

function clos()
{
  let explorechat = document.getElementById("explr");
  let chatbox = document.getElementById("cbt");
  explorechat.style.display ="none";
  chatbox.style.display = "block";



}