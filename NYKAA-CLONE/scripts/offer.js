let toptaken = document.getElementById('toptaken')
toptaken.addEventListener('mouseover', get)
toptaken.addEventListener('mouseleave', normal)
function get() {
  let toptwo = document.getElementById('toptwo')
  toptwo.style.color = '#E91E63'
  toptwo.style.fontWeight = '600'
  let topone = document.getElementById('topone')
  topone.style.display = 'block'
}
function normal() {
  let toptwo = document.getElementById('toptwo')
  toptwo.style.color = 'black'
  toptwo.style.fontWeight = '400'
  let topone = document.getElementById('topone')
  topone.style.display = 'none'
}
let toptakentwo = document.getElementById('toptakentwo')
toptakentwo.addEventListener('mouseleave', normaltwo)
toptakentwo.addEventListener('mouseover', sec)
function sec() {
  let topthree = document.getElementById('topthree')

  topthree.style.color = '#E91E63'
  topthree.style.fontWeight = '600'
  let topfour = document.getElementById('topfour')
  topfour.style.display = 'block'
}
function normaltwo() {
  let topthree = document.getElementById('topthree')
  topthree.style.color = 'black'
  topthree.style.fontWeight = '400'
  let topfour = document.getElementById('topfour')
  topfour.style.display = 'none'
}
let toptakenthree = document.getElementById('toptakenthree')
toptakenthree.addEventListener('mouseleave', normalthree)
toptakenthree.addEventListener('mouseover', secthree)

function normalthree() {
  let topfive = document.getElementById('topfive')
  topfive.style.color = 'black'
  topfive.style.fontWeight = '400'
  let topsix = document.getElementById('topsix')
  topsix.style.display = 'none'
}
function secthree() {
  let topfive = document.getElementById('topfive')

  topfive.style.color = '#E91E63'
  topfive.style.fontWeight = '600'
  let topsix = document.getElementById('topsix')
  topsix.style.display = 'block'
}
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