let KidsProductData=[
    {brand:"Gap",img:"./images/img1.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Gap",img:"./images/img2.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Gap",img:"./images/img3.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Gap",img:"./images/img4.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Gap",img:"./images/img5.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Baby Moo",img:"./images/img1.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Baby Moo",img:"./images/img2.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Baby Moo",img:"./images/img3.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Baby Moo",img:"./images/img4.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Baby Moo",img:"./images/img5.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Kanitroot",img:"./images/img1.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Kanitroot",img:"./images/img2.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Kanitroot",img:"./images/img3.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Kanitroot",img:"./images/img4.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Kanitroot",img:"./images/img5.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Bee Bay",img:"./images/img1.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Bee Bay",img:"./images/img2.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Bee Bay",img:"./images/img3.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Bee Bay",img:"./images/img4.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Bee Bay",img:"./images/img5.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Pepe Jeans",img:"./images/img1.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Pepe Jeans",img:"./images/img2.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Pepe Jeans",img:"./images/img3.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Pepe Jeans",img:"./images/img4.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Pepe Jeans",img:"./images/img5.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Puma",img:"./images/img1.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Puma",img:"./images/img2.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Puma",img:"./images/img3.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Puma",img:"./images/img4.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]},
    {brand:"Puma",img:"./images/img5.jpg",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",size:["L"],Extra:[]}
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
        h3.textContent=element.brand.toUpperCase();
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
