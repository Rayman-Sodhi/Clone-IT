

// let orders = [
//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/0/e/0e16a77minim00000022.jpg",

//         name: "Minimalist Super Value Vitamin C 10% Stable Serum Combo",

//         price: 1258,

//         quantity: 2,
//     },

//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/b/2/b2ad938minim00000027.jpg",

//         name: "Minimalist Multi-vitamin SPF 50 PA ++++ Sunscreen For Complete Sun Protection",

//         price: 379,

//         quantity: 1,
//     },

//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/8/1/81fe938minim00000019.jpg",

//         name: "Minimalist 2% Salicylic Acid + Lha Face Cleanser For Oil Control & Acne",

//         price: 284,

//         quantity: 5,
//     },

//     {
//         image: "https://images-static.nykaa.com/media/catalog/product/9/b/9b3ee7fminim00000020.jpg",

//         name: "Minimalist Ctm Combo",

//         price: 942,

//         quantity: 1
//     }
// ]


// if(localStorage.getItem("MyNykaaOrder") === null){
//     localStorage.setItem("MyNykaaOrder", JSON.stringify([]));
// }


let parent = document.getElementById("parent_box");


let data = JSON.parse(localStorage.getItem("MyNykaaOrder"));

// console.log(data);

data.forEach((item)=>{

    let card = document.createElement("div");

    card.setAttribute("class", "order_card");




    let img_div = document.createElement("div");

    img_div.setAttribute("class", "img_div");

    let image = document.createElement("img");

    image.src = item.img1;

    img_div.append(image);




    let text_div = document.createElement("div");

    text_div.setAttribute("class", "text_div");


    let title = document.createElement("p");

    title.innerText = item.name.substring(0,40);


    let price_div = document.createElement("div");

    price_div.setAttribute("class", "price_div");

    let quantity = document.createElement("p");

    quantity.setAttribute("class", "quantity_text");

    quantity.innerText = "1";

    let price = document.createElement("p");

    price.setAttribute("class", "price_text");

    price.innerText = item.price;

    price_div.append(quantity, price);


    text_div.append(title, price_div);

    card.append(img_div, text_div);


    parent.append(card);


})
