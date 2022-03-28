
let getNykaaTOTaal = JSON.parse(localStorage.getItem("NykaaTotal"))

let final_payment_text = document.getElementById("final_payment_text")
final_payment_text.innerText = "PAY" +"₹" +  getNykaaTOTaal[getNykaaTOTaal.length-1] + "NOW >"

localStorage.setItem("NykaaTotal" , JSON.stringify(getNykaaTOTaal))



let smallemail_ = document.querySelector(".smallemail")

if(localStorage.getItem("userData") === null) {
  localStorage.setItem("userData", JSON.stringify([]))
}

let getuserData = JSON.parse(localStorage.getItem("userData"))

smallemail_.textContent = getuserData[getuserData.length-1].email

localStorage.setItem("userData" , JSON.stringify(getuserData))



let cartiteam = document.getElementById("cartiteam")

let getNykaaCArt = JSON.parse(localStorage.getItem("NykaaCart")) 


let number__cart = document.querySelector(".number__cart")
number__cart.textContent = getNykaaCArt.length



function AppendtoCartItem(getNykaaCArt) {
cartiteam.innerHTML = null
getNykaaCArt.forEach((prod) => {

  let maindiv = document.createElement("div")
  maindiv.setAttribute("class" , "main__div")

  let img_div = document.createElement("div")
  img_div.setAttribute("class" , "cartimg_div")

  let text_div = document.createElement("div")
  text_div.setAttribute("class" , "text__div")

  let img = document.createElement("img")
  img.src = prod.img1

  img_div.append(img)

  let pname = document.createElement("p")
  pname.setAttribute("class" , "Pname")
  pname.textContent = prod.name.substring(0,30)

  let qpdiv = document.createElement("div")
  qpdiv.setAttribute("class" , "qpdiv")

  let Qtyp = document.createElement("p")
  Qtyp.innerText = "Qty : 1"


  let pri = document.createElement("p")
  pri.textContent = "₹" + prod.price

  qpdiv.append(Qtyp, pri)

  text_div.append(pname, qpdiv)

  maindiv.append(img_div, text_div)

  cartiteam.append(maindiv)
})

}
AppendtoCartItem(getNykaaCArt)

localStorage.setItem("NykaaCart" , JSON.stringify(getNykaaCArt))


let NYkaaTotal = JSON.parse(localStorage.getItem("NykaaTotal"))

let subt = document.querySelector("#subt")
subt.textContent = "₹" + NYkaaTotal[NYkaaTotal.length-1]

let usrewt = document.getElementById("usrewt")

usrewt.textContent = "₹" + NYkaaTotal[NYkaaTotal.length-1]




let getNykaaAD = JSON.parse(localStorage.getItem("MyNykaaAddress"))

let lastel = getNykaaAD[getNykaaAD.length-1]

let unaame = document.querySelector(".unaame")
let uaddress = document.querySelector(".uaddress")
let upostel = document.querySelector(".upostel")
let umobile = document.querySelector(".umobile")

unaame.textContent = lastel.name
uaddress.textContent = lastel.Address
upostel.textContent = lastel.Postel
umobile.textContent = lastel.MobileNo




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

if (localStorage.getItem("MyNykaaAddress") === null) {
  localStorage.setItem("MyNykaaAddress", JSON.stringify([]));
}


if(localStorage.getItem("MyNykaaOrder") === null) {
  localStorage.setItem("MyNykaaOrder" , JSON.stringify([]))
}

let final_payMent_text = document.querySelector("#final_payment_text")

final_payMent_text.addEventListener("click" , funfinal_payment_text)

function funfinal_payment_text() {

  let MyNykaaOrDer = JSON.parse(localStorage.getItem("MyNykaaOrder"))

  let getCartT = JSON.parse(localStorage.getItem("NykaaCart"))

  getCartT.forEach((prod) => {
    MyNykaaOrDer.push(prod)
  })



  // if(JSON.parse(localStorage.getItem("NykaaCart")).length > 0) {
  // localStorage.setItem("NykaaCart", JSON.stringify([]))
  // }

  localStorage.setItem("MyNykaaOrder" , JSON.stringify(MyNykaaOrDer))

  setTimeout(() => {
    localStorage.setItem("NykaaCart" , JSON.stringify([]))
    window.location.href = "sucess.html"
  },2000)
  


}