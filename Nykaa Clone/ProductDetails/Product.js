let productImg=document.getElementById("main-product-img")
let data=JSON.parse(localStorage.getItem("nykaa-product"));//Here I am getting the data from local storage
productImg.style.background=`url(${data.img})`;//Making a div with background image of product image
productImg.style.backgroundSize="cover";

let productBrand=document.getElementById("main-product-data-brand");//showing product brand
productBrand.textContent=data.brand.toUpperCase();

let productName=document.getElementById("main-product-data-name");//showing product name;
productName.textContent=data.name;

let productPrice=document.getElementById("main-product-data-price");//showing product price
productPrice.textContent="$"+Number(data.price).toLocaleString();


let productSize=document.getElementById("main-product-data-size");//Adding buttons for product size
let sizearr=data.size.trim().split(",");
sizearr.forEach(element => {
    if(element !=""){
    let btn=document.createElement("button");
    btn.textContent=element;
    btn.addEventListener("click",function(){sizeUpdate(`${data.name} (${btn.textContent})`)});
    productSize.appendChild(btn);
    }
});
function sizeUpdate(text){
 productName.textContent=text;
}
let delvInput=document.getElementById("delivery-input");
let delvBtn=document.getElementById("delivery-btn");
let delvDate=document.getElementById("delivery-date");
delvBtn.addEventListener("click",function(){
    if(delvInput.value != null && delvInput.value !="" && delvInput.value.length == 6 && Number.isNaN(Number(delvInput.value))==false){
        delvDate.textContent="The Delivery Will be within 7 Days"
        delvDate.style.color="green";
    }else{
        delvDate.textContent="Please Enter a valid PINCODE";
        delvDate.style.color="red";
    }
})
if(localStorage.getItem("nykaa-cart")==null){
    localStorage.setItem("nykaa-cart",JSON.stringify([]));// Adding Empty Cart data to local Storage
}
let addToBag=document.getElementById("main-product-data-btn");
addToBag.addEventListener("click",function(){
    let Bagdata=JSON.parse(localStorage.getItem("nykaa-cart"));
    let productPresent=false;
    Bagdata.forEach(function(element){
      if(data.productID == element.productID){
          productPresent=true;
      }
    })
    if(productPresent==false){
        Bagdata.push(data);
    }
    localStorage.setItem("nykaa-cart",JSON.stringify(Bagdata));
})
let recomended=document.getElementById("recomended");
function ShowSimilar(){
    let allData=JSON.parse(localStorage.getItem("nykaa-women-page-data"));
    allData.forEach(function(element){
      if(element.brand==data.brand && data.productID !=element.productID){
        let card = document.createElement("div");
        card.setAttribute("class", "card");
    
        let img = document.createElement("div");
        img.setAttribute("class", "card-img");
        img.style.backgroundImage = `url(${element.img})`
        card.appendChild(img);
    
        let text = document.createElement("div");
        text.setAttribute("class", "card-text");
        let h4 = document.createElement("h4");
        h4.textContent = element.brand.toUpperCase();
        text.appendChild(h4);
        let p = document.createElement("p");
        p.textContent = element.name;
        p.setAttribute("class", "card-text-detail")
        text.appendChild(p);
        let p2 = document.createElement("p");
        p2.textContent = "$" + element.price;
        p2.setAttribute("class", "card-text-price")
        text.appendChild(p2);
        card.appendChild(text);
        card.addEventListener("click",function(){ProductPageLoad(element)});
        recomended.appendChild(card);
      }
    })
}
ShowSimilar();
function ProductPageLoad(product){
    localStorage.setItem("nykaa-product",JSON.stringify(product));
    window.location.href="../ProductDetails/Product.html";
   }
