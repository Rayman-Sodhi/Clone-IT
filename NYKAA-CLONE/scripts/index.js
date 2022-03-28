

import {navbar} from "../component/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

import {FOOTER} from "../component/pagefooter.js"



if(localStorage.getItem("userData") === null) {
    localStorage.setItem("userData" , JSON.stringify([]))
}

let footerpage = document.querySelector("footer")
footerpage.innerHTML = FOOTER()



//nykaa dhamaka
let nykaa_dhamaka = document.getElementById("nykaa-dhamaka")
let flag = true

setInterval(() => {

    if(flag == true){
        nykaa_dhamaka.style.opacity = "0"
        flag = false
    }else {
        nykaa_dhamaka.style.opacity = "1"
        flag = true
    }
},2500)

//nykaa dhamaka end

//brand section navbar

let BRAND = document.querySelector(".show-brandbox")
BRAND.addEventListener("mouseover" , ShowBrandBox)
BRAND.addEventListener("mouseleave" , HideBOxes1)

let brand_box = document.querySelector(".brand-box")
brand_box.addEventListener("mouseleave" , HideBrandBox)

function ShowBrandBox() {
    brand_box.style.display = "grid"
    
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")
mainnykaa_fahsionBox.style.display = "none"

    
let beauty_advice_box = document.querySelector(".beauty-advice-box")
beauty_advice_box.style.display = "none"

}
function HideBrandBox() {
    brand_box.style.display = "none"
}

function HideBOxes1() {

}

let popular_btn = document.querySelector(".popular-btn")
popular_btn.addEventListener("mouseover" , showPopularBrand)

let brand_popular_img = document.querySelector(".brand-imagesherepopular")
let brand_featured_img = document.querySelector(".brand-imageshereFeatured")

function showPopularBrand() {
    brand_popular_img.style.display = "grid"
    brand_featured_img.style.display = "none"
}

let featured_btn = document.querySelector(".Featured-btn")
featured_btn.addEventListener("mouseover" , ShowFeaturedimg)

function ShowFeaturedimg() {
    brand_popular_img.style.display = "none"
    brand_featured_img.style.display = "grid"
}

let onlyat_btn = document.querySelector(".onlynykaa")
onlyat_btn.addEventListener("mouseover" , showPopularBrand)

let new_launches = document.querySelector(".newlaunches")
new_launches.addEventListener("mouseover" , ShowFeaturedimg)


//brand section navbar end


// nykaa fashion section navbar
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")

mainnykaa_fahsionBox.addEventListener("mouseleave" , HideNykaaFashionBox)

let show_nykaa_fashionBox = document.querySelector(".show-nykaa_fashionBox")
show_nykaa_fashionBox.addEventListener("mouseover" , Show_Nykaa_Fashion_Box)

function Show_Nykaa_Fashion_Box() {
    mainnykaa_fahsionBox.style.display = "block"
    let brand_box = document.querySelector(".brand-box")
    brand_box.style.display = "none"

    let beauty_advice_box = document.querySelector(".beauty-advice-box")
    beauty_advice_box.style.display = "none"
}

function HideNykaaFashionBox() {
    mainnykaa_fahsionBox.style.display = "none"
}


let Lingerie_more = document.querySelector(".Lingerie-and-more")
Lingerie_more.addEventListener("mouseover" , ShowLingerie)


let Nykaa_Fashion = document.querySelector(".Nykaa-Fashion")
Nykaa_Fashion.addEventListener("mouseover" , ShowNykaaFashionBox)

let Clothing_more = document.querySelector(".Clothing-and-more")
Clothing_more.addEventListener("mouseover" , ShowClothingBox)

let Bags_Footwear = document.querySelector(".Bags-and-Footwear")
Bags_Footwear.addEventListener("mouseover" , ShowBagsFootBox)

let Jewellery_acc = document.querySelector(".Jewellery-and-acc")
Jewellery_acc.addEventListener("mouseover" , ShowJewelleryBox)

let GadgetsTech_acc = document.querySelector(".Gedgets-and-Tech-acc")
GadgetsTech_acc.addEventListener("mouseover" , ShowGadgetTechBOx)



let Lingerie__box = document.querySelector(".Lingerie-box")

let nykaafashion__box = document.querySelector(".nykaa-fashion--box")

let clothing__box = document.querySelector(".clothing--box")

let bagfoot__box = document.querySelector(".bag-foot--box")

let Jewelleryacc__box = document.querySelector(".Jewellery-acc--box")

let gadgets__box = document.querySelector(".gadgets--box")


function ShowLingerie() {
    Lingerie__box.style.display = "grid"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowNykaaFashionBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "grid"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowClothingBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "grid"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowBagsFootBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "grid"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "none"
}

function ShowJewelleryBox() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "grid"
    gadgets__box.style.display = "none"
}

function ShowGadgetTechBOx() {
    Lingerie__box.style.display = "none"
    nykaafashion__box.style.display = "none"
    clothing__box.style.display = "none"
    bagfoot__box.style.display = "none"
    Jewelleryacc__box.style.display = "none"
    gadgets__box.style.display = "grid"
}


// nykaa fashion section navbar end 1341

// nykaa beauty advice box navbar

let Show_nykaa_beautybox = document.querySelector(".Show-nykaa-beautybox")
Show_nykaa_beautybox.addEventListener("mouseover" , Shownykaabeautybox)

let beauty_advice_box = document.querySelector(".beauty-advice-box")
beauty_advice_box.addEventListener("mouseleave" , Hidebeautyadvicebox)

function Shownykaabeautybox() {
    beauty_advice_box.style.display = "flex"
    let brand_box = document.querySelector(".brand-box")
    brand_box.style.display = "none"
        
let mainnykaa_fahsionBox = document.querySelector(".nykaa-fahsionBox")
mainnykaa_fahsionBox.style.display = "none"
}
function Hidebeautyadvicebox() {
    beauty_advice_box.style.display = "none"
}


//shopping cart work

let cart__icon = document.querySelector(".cart--icon")

cart__icon.addEventListener("click" , ShowShoppingBag)

let shoppingBag = document.querySelector(".Shopping-bag-box")
let chat_ty = document.querySelector(".chatbox")
let arrowto_UP = document.querySelector(".arrow") 
function ShowShoppingBag() {
    shoppingBag.style.display = "block"
    chat_ty.style.display = "none"
    arrowto_UP.style.display = "none"
}

let shoppingBackBtn = document.querySelector(".shoppingback-btn")

shoppingBackBtn.addEventListener("click" , HideShoppingBag)

function HideShoppingBag() {
    shoppingBag.style.display = "none"
    chat_ty.style.display = "block"
    arrowto_UP.style.display = "block"
}





//shopping bag start


let Show_products_boxescont = document.querySelector(".Show-products-boxescont")
let ifempty = document.querySelector(".ifempty")


if(localStorage.getItem("NykaaCart") === null) {
    localStorage.setItem("NykaaCart" , JSON.stringify([]))
  }

  if(JSON.parse(localStorage.getItem("NykaaCart")).length == 0) {
      ifempty.style.display = "block"
      Show_products_boxescont.style.display = "none"
  }

  if(localStorage.getItem("NykaaTotal") === null) {
      localStorage.setItem("NykaaTotal" , JSON.stringify([]))
  }

  let getLocalCart = JSON.parse(localStorage.getItem("NykaaCart"))

  //let showCart_Products = document.querySelector(".showCart-Products")
  let multiple_prod_box = document.querySelector(".multiple_prod_box")

  function appendtobag(art) {
    
let grandtotal = 0
    multiple_prod_box.innerHTML = null
  art.forEach((produ) => {

    grandtotal = grandtotal + Number(produ.price)
    let showCart_Products = document.createElement("div")
    showCart_Products.setAttribute("class" , "showCart-Products")

    let img_div = document.createElement("div")
    img_div.setAttribute("class" , "cart-product-img")


    let proima = document.createElement("img")
    proima.src = produ.img1

    img_div.append(proima)

    let pronm_div = document.createElement("div")

    let pronm = document.createElement("p")
    pronm.setAttribute("class" , "cart-product-name")
    pronm.textContent = produ.name.substring(0,30)

    pronm_div.append(pronm)

    let dlt_div = document.createElement("div")

    let dlt_btn = document.createElement("button")
    dlt_btn.setAttribute("class" , "cart-delete-btn")
    dlt_btn.innerHTML = `<img src="https://th.bing.com/th/id/OIP.EKnSPMgkce4XjqWPt-FIzgHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7" alt="">`

    dlt_btn.onclick = function() {
        DeleteFrom_Bag(produ,dlt_btn)
    }

    dlt_div.append(dlt_btn)

    let qty_price_div = document.createElement("div")
    qty_price_div.setAttribute("class" , "qty-price")

    let span = document.createElement("span")
   // span.setAttribute("class" , "QTY-NUM")
    span.setAttribute("id" , `${produ.id}`)
    span.textContent = "1"

    let qty_p11 = document.createElement("p")
    qty_p11.setAttribute("class" , "Quantity")
    qty_p11.innerText = `Quantity : ${span.textContent} ▼`



    qty_p11.onclick = function() {
        changeContent(produ.id)
    }


    let qty_p12 = document.createElement("p")
    qty_p12.setAttribute("class" , "PRODUCT-PRICE")

    qty_p12.textContent = "₹" + produ.price

    

    qty_price_div.append(qty_p11, qty_p12)

    showCart_Products.append(img_div, pronm_div, dlt_div, qty_price_div)
    multiple_prod_box.append(showCart_Products)

  })

  let NykaaTotal = JSON.parse(localStorage.getItem("NykaaTotal"))
    NykaaTotal.push(grandtotal)
    localStorage.setItem("NykaaTotal" , JSON.stringify(NykaaTotal))
    
}

let NykaaTotal = JSON.parse(localStorage.getItem("NykaaTotal"))

let grand_text = document.querySelector(".Toatlrupee")
grand_text.textContent = "₹" +  NykaaTotal[NykaaTotal.length-1]

localStorage.setItem("NykaaTotal" , JSON.stringify(NykaaTotal))




function DeleteFrom_Bag(produ, dlt_btn) {
    let getCartStORE = JSON.parse(localStorage.getItem("NykaaCart"))
    let index = getCartStORE.indexOf(produ)
    getCartStORE.splice(index, 1)
    localStorage.setItem("NykaaCart" , JSON.stringify(getCartStORE))

    dlt_btn.parentNode.parentNode.remove()

}




function changeContent(ID) {
    let QTY_BOX = document.querySelector(".QTY--BOX")
    QTY_BOX.style.display = "grid"
    
    let getpitem = document.getElementById(`${ID}`)

let qty1 = document.querySelector(".qty1")
let qty2 = document.querySelector(".qty2")
let qty3 = document.querySelector(".qty3")
let qty4 = document.querySelector(".qty4")
let qty5 = document.querySelector(".qty5")

qty1.addEventListener("click" , EDITPrice1)
qty2.addEventListener("click" , EDITPrice2)
qty3.addEventListener("click" , EDITPrice3)
qty4.addEventListener("click" , EDITPrice4)
qty5.addEventListener("click" , EDITPrice5)

//let Quantity = document.querySelector(".Quantity")

let PRODUCT_PRICE = document.querySelector(".PRODUCT-PRICE")



function EDITPrice1() {
    qty1.style.backgroundColor = "#FC2779"


    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty1.style.backgroundColor = "#fff"
        getpitem.textContent = "1"
    },1500)
    
}


function EDITPrice2() {
    qty2.style.backgroundColor = "#FC2779"

    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty2.style.backgroundColor = "#fff"
        PRODUCT_PRICE.textContent = Number(PRODUCT_PRICE.textContent) * 2
        getpitem.textContent = "2"
    },1500)
    
}


function EDITPrice3() {
    qty3.style.backgroundColor = "#FC2779"

    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty3.style.backgroundColor = "#fff"
        getpitem.textContent = "3"
    },1500)
    
}


function EDITPrice4() {
    qty4.style.backgroundColor = "#FC2779"

    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty4.style.backgroundColor = "#fff"
        getpitem.textContent = "4"
    },1500)
    
}



function EDITPrice5() {
    qty5.style.backgroundColor = "#FC2779"

    setTimeout(() => {
        QTY_BOX.style.display = "none"
        qty5.style.backgroundColor = "#fff"
        getpitem.textContent = "5"
    },1500)
    
}

}



appendtobag(getLocalCart)
localStorage.setItem("NykaaCart" , JSON.stringify(getLocalCart))




// QUANTITY WORK FOR NAVBAR


// let qty1 = document.querySelector(".qty1")
// let qty2 = document.querySelector(".qty2")
// let qty3 = document.querySelector(".qty3")
// let qty4 = document.querySelector(".qty4")
// let qty5 = document.querySelector(".qty5")

// let Quantity = document.querySelector(".Quantity")
// let QTY_NUM = document.querySelector(".QTY-NUM")

// let QTY_BOX = document.querySelector(".QTY--BOX")


// let PRODUCT_PRICE = document.querySelector(".PRODUCT-PRICE")

// Quantity.addEventListener("click" , SHOWQTYBOX)

// function SHOWQTYBOX() {
//     QTY_BOX.style.display = "grid"
// }

// //PENDING.......
// qty1.addEventListener("click" , EDITPrice1)
// qty2.addEventListener("click" , EDITPrice2)
// qty3.addEventListener("click" , EDITPrice3)
// qty4.addEventListener("click" , EDITPrice4)
// qty5.addEventListener("click" , EDITPrice5)

// function EDITPrice1() {
//     qty1.style.backgroundColor = "#FC2779"


//     setTimeout(() => {
//         QTY_BOX.style.display = "none"
//         qty1.style.backgroundColor = "#fff"
//         QTY_NUM.textContent = "1"
//     },1500)
    
// }


// function EDITPrice2() {
//     qty2.style.backgroundColor = "#FC2779"

//     setTimeout(() => {
//         QTY_BOX.style.display = "none"
//         qty2.style.backgroundColor = "#fff"
//         QTY_NUM.textContent = "2"
//     },1500)
    
// }


// function EDITPrice3() {
//     qty3.style.backgroundColor = "#FC2779"

//     setTimeout(() => {
//         QTY_BOX.style.display = "none"
//         qty3.style.backgroundColor = "#fff"
//         QTY_NUM.textContent = "3"
//     },1500)
    
// }


// function EDITPrice4() {
//     qty4.style.backgroundColor = "#FC2779"

//     setTimeout(() => {
//         QTY_BOX.style.display = "none"
//         qty4.style.backgroundColor = "#fff"
//         QTY_NUM.textContent = "4"
//     },1500)
    
// }



// function EDITPrice5() {
//     qty5.style.backgroundColor = "#FC2779"

//     setTimeout(() => {
//         QTY_BOX.style.display = "none"
//         qty5.style.backgroundColor = "#fff"
//         QTY_NUM.textContent = "5"
//     },1500)
    
// }


//for search result

let second_search = document.querySelector(".second-search")
let search_resultbox = document.querySelector(".search-resultbox")
let search__container = document.querySelector(".search__container")
let body = document.querySelector("body")

second_search.addEventListener("input" , ShowSearchResultBox)
body.addEventListener("click" , HIDESearchResultBox)

function ShowSearchResultBox() {
    search_resultbox.style.display = "flex"
    search__container.style.border = "2px solid #FC2779"
    search__container.style.backgroundColor = "#F4F4F4"
}
function HIDESearchResultBox() {
    second_search.value = null
    search_resultbox.style.display = "none"
    search__container.style.border = "none"
    search__container.style.backgroundColor = "#fff"
}

// THIRD BAR WORK START


window.addEventListener("scroll",()=>{

    let move = document.getElementById("nav---thirdbar");

   let scrollbar = window.scrollY;
    
     if(scrollbar>=100)
     {
        move.style.display = "none";
     }
     else{
         move.style.display="flex"
     }
     
})


let make_text = document.querySelector(".makeup-text")
let skin_text = document.querySelector(".skin-text")
let hair_text = document.querySelector(".hair-text")
let appliances_text = document.querySelector(".appliances-text")
let personalcare_text = document.querySelector(".personalcare-text")
let natural_text = document.querySelector(".natural-text")
let mombaby_text = document.querySelector(".mombaby-text")
let healthwellness_text = document.querySelector(".healthwellness-text")
let men_text = document.querySelector(".men-text")
let fragrance_text = document.querySelector(".fragrance-text")
let luxe_text = document.querySelector(".luxe-text")



let makeup_box = document.querySelector(".Makeup-box")
let skin_box = document.querySelector(".Skin-box")
let hair_box = document.querySelector(".Hair-box")
let appliances_box = document.querySelector(".Appliances-box")
let personalcare_box = document.querySelector(".Personal-care-box")
let natural_box = document.querySelector(".Natural-third-box")
let mombaby_box = document.querySelector(".MOM-baby-box")
let healthwell_box = document.querySelector(".Health-well-box")
let men_box = document.querySelector(".MEN-box")
let fragrance_box = document.querySelector(".Fragrance-box")
let Luxe_box = document.querySelector(".LUXE-box")

make_text.addEventListener("mouseover" , Showmakeup_Box)
make_text.addEventListener("mouseleave" , HIDEmakeup_Box)

function Showmakeup_Box() {
    makeup_box.style.display = "grid"
}

function HIDEmakeup_Box() {
    makeup_box.style.display = "none"
}


skin_text.addEventListener("mouseover" , Showskin_Box)
skin_text.addEventListener("mouseleave" , HIDEskin_Box)

function Showskin_Box() {
    skin_box.style.display = "grid"
}
function HIDEskin_Box() {
    skin_box.style.display = "none"
}

hair_text.addEventListener("mouseover" , Showhair_Box)
hair_text.addEventListener("mouseleave" , HIDEhair_Box)

function Showhair_Box() {
    hair_box.style.display = "grid"
}
function HIDEhair_Box() {
    hair_box.style.display = "none"
}

appliances_text.addEventListener("mouseover" , Showappliances_Box)
appliances_text.addEventListener("mouseleave" , HIDEappliances_Box)

function Showappliances_Box() {
    appliances_box.style.display = "grid"
}
function HIDEappliances_Box() {
    appliances_box.style.display = "none"
}

personalcare_text.addEventListener("mouseover" , Showpersonalcare_Box)
personalcare_text.addEventListener("mouseleave" , HIDEpersonalcare_Box)

function Showpersonalcare_Box() {
    personalcare_box.style.display = "grid"
}
function HIDEpersonalcare_Box() {
    personalcare_box.style.display = "none"
}

natural_text.addEventListener("mouseover" , Shownatural_box)
natural_text.addEventListener("mouseleave" , HIDEnatural_box)

function Shownatural_box() {
    natural_box.style.display = "grid"
}
function HIDEnatural_box() {
    natural_box.style.display = "none"
}

mombaby_text.addEventListener("mouseover" , Showmombaby_Box)
mombaby_text.addEventListener("mouseleave" , HIDEmombaby_Box)

function Showmombaby_Box() {
    mombaby_box.style.display = "grid"
}
function HIDEmombaby_Box() {
    mombaby_box.style.display = "none"
}

healthwellness_text.addEventListener("mouseover" , Showhealthwellness_Box)
healthwellness_text.addEventListener("mouseleave" , HIDEhealthwellness_Box)

function Showhealthwellness_Box() {
    healthwell_box.style.display = "grid"
}

function HIDEhealthwellness_Box() {
    healthwell_box.style.display = "none"
}

men_text.addEventListener("mouseover" , Showmen_Box)
men_text.addEventListener("mouseleave" , HIDEmen_Box)

function Showmen_Box() {
    men_box.style.display = "grid"
}
function HIDEmen_Box() {
    men_box.style.display = "none"
}

fragrance_text.addEventListener("mouseover", Showfragrance_Box)
fragrance_text.addEventListener("mouseleave", HIDEfragrance_Box)

function Showfragrance_Box() {
    fragrance_box.style.display = "grid"
}
function HIDEfragrance_Box() {
    fragrance_box.style.display = "none"
}


luxe_text.addEventListener("mouseover", Showluxe_Box)
luxe_text.addEventListener("mouseleave", HIDEluxe_Box)

function Showluxe_Box() {
    Luxe_box.style.display = "grid"
}
function HIDEluxe_Box() {
    Luxe_box.style.display = "none"
}



// FOR SIGN IN -> SIGN OUT

let SIGNIN = document.getElementById("FOR-Sign")
let Logged = document.getElementById("FOR-Logged")
let userName = document.querySelector(".user-name")
let Account_Box = document.querySelector(".Account-BOX")
let Profile_BOX = document.querySelector(".PROFILE-NAVIGATE")

let GetUserData = JSON.parse(localStorage.getItem("userData")) 
let Account_text = document.querySelector(".account-text")

userName.textContent = GetUserData[GetUserData.length-1].name





if(GetUserData !== null || GetUserData.length > 0) {
    Logged.style.display = "block"
    SIGNIN.style.display = "none"
}

// SIGNIN.addEventListener("click" , GoToSignInPage)

// function GoToSignInPage () {
    
//     if(GetUserData === null || GetUserData.length == 0) {
//         window.location.href = "http://localhost:5500/Signin.html"
//     }
// }

Account_Box.addEventListener("mouseover", SHOWProfileBox)
Account_Box.addEventListener("mouseleave" , HIDEProfileBox)

function SHOWProfileBox() {
    if(GetUserData !== null || GetUserData.length > 0) {
        Profile_BOX.style.display = "flex"
    }
}
function HIDEProfileBox() {
    if(GetUserData !== null || GetUserData.length > 0) {
        Profile_BOX.style.display = "none"
    }
}

localStorage.setItem("userData" , JSON.stringify(GetUserData))



// LOGOUT

let sign_out = document.querySelector(".Sign-Out")


sign_out.addEventListener("click" , SIGNOUT)

function SIGNOUT() {
    JSON.parse(localStorage.removeItem("userData"))
}



// APPLY COUPON CODE 

let Apply_Button = document.querySelector(".apply__btn")
let input_coupon = document.querySelector(".input_coupon")

Apply_Button.addEventListener("click" , UpdateGrandPrice)

function UpdateGrandPrice() {

    let NykaaTotal = JSON.parse(localStorage.getItem("NykaaTotal"))

    if(input_coupon.value == "masai30" || input_coupon.value == "teamBoom") {
        let grand_text = document.querySelector(".Toatlrupee")
    let grandto = NykaaTotal[NykaaTotal.length-1]
    let total_ = (Number(grandto) -  (Number(grandto) * 0.3)).toFixed(2)
    NykaaTotal.push(total_)
        grand_text.textContent = total_

}else {
    alert("Invalid Coupon Code")
}

localStorage.setItem("NykaaTotal", JSON.stringify(NykaaTotal))
    input_coupon.value = ""
}