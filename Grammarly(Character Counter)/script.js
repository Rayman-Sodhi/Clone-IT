const charVal=document.getElementById("textarea");
let total=document.getElementById("total-counter");
let remain=document.getElementById("remaining-counter");
let char=0;
const updateCounter=()=>{
  Userchar=charVal.value.length;
  total.innerHTML=Userchar;
  remain.innerHTML=150-Userchar;

}
charVal.addEventListener("keyup",()=>updateCounter());


//text Copying

const copyText=()=>{
  charVal.select();
  charVal.setSelectionRange(0,9999);
  navigator.clipboard.writeText(charVal.value); //API 
};
