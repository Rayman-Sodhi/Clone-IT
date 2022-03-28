
let smallemail_ = document.querySelector(".smallemail")

if(localStorage.getItem("userData") === null) {
  localStorage.setItem("userData", JSON.stringify([]))
}

let getuserData = JSON.parse(localStorage.getItem("userData"))

smallemail_.textContent = getuserData[getuserData.length-1].email

localStorage.setItem("userData" , JSON.stringify(getuserData))



let savedADDRESSES = document.querySelector(".savedADDRESSES")
let newADDRESSES = document.querySelector(".newADDRESSES")
let newaddress_box = document.querySelector("#newaddress-box")
let saved_addresses_cont = document.querySelector(".saved-addresses-cont")
let add_edit_btn = document.querySelector(".add-edit-btn")

newADDRESSES.addEventListener("click" , fnnewADDRESSES)
savedADDRESSES.addEventListener("click" , fnsavedADDRESSES)
add_edit_btn.addEventListener("click" , ShownewADDRESSE)

function fnnewADDRESSES() {
    saved_addresses_cont.style.display = "none"
    savedADDRESSES.style.borderRight = "none"
    newADDRESSES.style.borderRight = "3px solid #fc2779"
    newaddress_box.style.display = "flex"
}

function fnsavedADDRESSES() {
  saved_addresses_cont.style.display = "block"
  savedADDRESSES.style.borderRight = "3px solid #fc2779"
  newADDRESSES.style.borderRight = "none"
  newaddress_box.style.display = "none"
}

function ShownewADDRESSE() {
  saved_addresses_cont.style.display = "none"
  savedADDRESSES.style.borderRight = "none"
  newADDRESSES.style.borderRight = "3px solid #fc2779"
  newaddress_box.style.display = "flex"
}

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

let redirect_paybtn = document.querySelector(".redirect_paybtn")
redirect_paybtn.addEventListener("click" , delivery)

let ship = document.getElementById("ship");
ship.addEventListener("click",()=>{
    delivery();
})

function delivery()
{
    let name  = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pc = document.getElementById("pc").value;
    let add = document.getElementById("add").value;

    let userdetail = {
        Address: add,
        MobileNo : phone,
        Postel : pc,
        name : name 
    };
   

    let addressl = JSON.parse(localStorage.getItem("MyNykaaAddress"));

    if(name != ""  &&  phone != ""  &&  pc != ""  &&  add != "") {

    addressl.push(userdetail);
    
    }

    localStorage.setItem("MyNykaaAddress", JSON.stringify(addressl));


    name.value = "";
    phone.value = "";
    pc.value = "";
    add.value = "";
    
    window.location.href = "payment.html";
}



let Uname = document.querySelector(".Uname")
let Uaddress = document.querySelector(".Uaddress")
let Upostel  = document.querySelector(".Upostel")
let Umobile = document.querySelector(".Umobile")

let getLOCalAddreSS = JSON.parse(localStorage.getItem("MyNykaaAddress"))
let LasTadd = getLOCalAddreSS[getLOCalAddreSS.length-1]

Uname.textContent = LasTadd.name
Uaddress.textContent = LasTadd.Address
Upostel.textContent ="Pin Code : "+ LasTadd.Postel
Umobile.textContent = LasTadd.MobileNo