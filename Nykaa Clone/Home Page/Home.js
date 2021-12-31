let KidsProductData=[
    {brand:"Swayam",img:"./images/img1.jpg", catagory:"Bedding",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XXS"],Extra:[]},
    {brand:"Swayam",img:"./images/img2.jpg", catagory:"Kitchen & Dining",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XS"],Extra:[]},
    {brand:"Swayam",img:"./images/img3.jpg", catagory:"Decor",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["S"],Extra:[]},
    {brand:"Swayam",img:"./images/img4.jpg", catagory:"Storage",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["M"],Extra:[]},
    {brand:"Swayam",img:"./images/img5.jpg", catagory:"Bath",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"SPACES",img:"./images/img1.jpg", catagory:"Bedding",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XL"],Extra:[]},
    {brand:"SPACES",img:"./images/img2.jpg", catagory:"Kitchen & Dining",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"SPACES",img:"./images/img3.jpg", catagory:"Decor",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XL"],Extra:[]},
    {brand:"SPACES",img:"./images/img4.jpg", catagory:"Storage",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["M"],Extra:[]},
    {brand:"SPACES",img:"./images/img5.jpg", catagory:"Bath",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XXS"],Extra:[]},
    {brand:"Chumbak",img:"./images/img1.jpg", catagory:"Bedding",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["S"],Extra:[]},
    {brand:"Chumbak",img:"./images/img2.jpg", catagory:"Kitchen & Dining",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["M"],Extra:[]},
    {brand:"Chumbak",img:"./images/img3.jpg", catagory:"Decor",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Chumbak",img:"./images/img4.jpg", catagory:"Storage",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XL"],Extra:[]},
    {brand:"Chumbak",img:"./images/img5.jpg", catagory:"Bath",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["S"],Extra:[]},
    {brand:"Maspar",img:"./images/img2.jpg", catagory:"Bedding",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["M"],Extra:[]},
    {brand:"Maspar",img:"./images/img3.jpg", catagory:"Kitchen & Dining",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XL"],Extra:[]},
    {brand:"Maspar",img:"./images/img4.jpg", catagory:"Decor",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Maspar",img:"./images/img5.jpg", catagory:"Storage",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XXS"],Extra:[]},
    {brand:"Maspar",img:"./images/img1.jpg", catagory:"Bath",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["S"],Extra:[]},
    {brand:"Freelance",img:"./images/img1.jpg", catagory:"Bedding",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["M"],Extra:[]},
    {brand:"Freelance",img:"./images/img2.jpg", catagory:"Kitchen & Dining",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Freelance",img:"./images/img3.jpg", catagory:"Decor",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["S"],Extra:[]},
    {brand:"Freelance",img:"./images/img4.jpg", catagory:"Storage",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XL"],Extra:[]},
    {brand:"Freelance",img:"./images/img5.jpg", catagory:"Bath",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["M"],Extra:[]},
    {brand:"Dreams",img:"./images/img1.jpg", catagory:"Bedding",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XS"],Extra:[]},
    {brand:"Dreams",img:"./images/img2.jpg", catagory:"Kitchen & Dining",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["S"],Extra:[]},
    {brand:"Dreams",img:"./images/img3.jpg", catagory:"Decor",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XS"],Extra:[]},
    {brand:"Dreams",img:"./images/img4.jpg", catagory:"Storage",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["XXS"],Extra:[]},
    {brand:"Dreams",img:"./images/img5.jpg", catagory:"Bath",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]}
]

let products=document.getElementById("products");
function ShowProducts(data){
    let count=0;
    data.forEach(element => {
        let card= document.createElement("div");
        card.setAttribute("class","card");

        let img=document.createElement("div");
        img.setAttribute("class", "card-img");
        img.style.backgroundImage=`url(${element.img})`
        card.appendChild(img);

        let text=document.createElement("div");
        text.setAttribute("class","card-text");
        let h3=document.createElement("h3");
        h3.textContent=element.brand.toUpperCase()+" "+element.catagory;
        text.appendChild(h3);
        let p=document.createElement("p");
        p.textContent=element.detail;
        p.setAttribute("class","card-text-detail")
        text.appendChild(p);
        let p2=document.createElement("p");
        p2.textContent="Price:- $"+element.price;
        p2.setAttribute("class","card-text-price")
        text.appendChild(p2);
        card.appendChild(text);
        products.appendChild(card);
        count++;
    });
    products.style.height=`${count/3*450}px`
}
ShowProducts(KidsProductData);

