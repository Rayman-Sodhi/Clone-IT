document.querySelector(".hamburger").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector(".hamburger").classList.toggle("change")

    document.querySelector(".hamnames").classList.toggle("category")

}




var bestOfAdidas = [{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/35d9418ae1414117be14ac46010c5827_9366/GN3495_21_model.jpg",
    price: "2099.00",
    name: "Adicolor Classics Long Sleeve Tee",
    type: "Originals"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ff323c8256c434ebf03add1001fd962_9366/HE9548_21_model.jpg",
    price: "4999.00",
    name: "Adicolor Classics Chunky Velour Pants",
    type: "Originals"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c9e9c6c7f244e0388dfac8400c91747_9366/GN5707_21_model.jpg",
    price: "2800.00",
    name: "COLD.RDY Cover - Up",
    type: "Performance"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b905f217ee2f4a21a737ae180010b204_9366/GL5349_21_model.jpg",
    price: "3599.00",
    name: "Tights with Velvet Stripes and Trefoil Rivet",
    type: "Originals"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/194a0afed2fc483d8ce4ae17018ad0d6_9366/HC3908_21_model.jpg",
    price: "3599.00",
    name: "Tights with Velvet Stripes and Trefoil Rivet",
    type: "Originals"
}
];

var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || []
var len = wishlist.length;
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || []
var le = cartlist.length;

displaybestOfAdidasData(bestOfAdidas);
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#cartLen").textContent = le;

function displaybestOfAdidasData(arr) {
    arr.map(function (element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var cartSymDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");
        symDiv.innerHTML = '<i class="far fa-heart"></i>';
        img.setAttribute("src", element.imgURL);

        var count = 1

        symDiv.addEventListener("click", symbalcolor)
        function symbalcolor() {
            count++
            if (count % 2 == 0) {
                console.log("solid");
                symDiv.innerHTML = '<i class="fas fa-heart"></i>';
                wishlist.push(element);
                localStorage.setItem('wishlistdb', JSON.stringify(wishlist));
                displaybestOfAdidasData(bestOfAdidas);

            }
            else {
                console.log("dull");
                symDiv.innerHTML = '<i class="far fa-heart"></i>';
                symDiv.addEventListener("click", function () {
                    deleteRow(index, count)
                })

            }

        }
        symDiv.setAttribute("class", "wishlistSymbol");
        cartSymDiv.innerHTML = '<i class="fas fa-cart-plus"></i>';
        cartSymDiv.addEventListener("click", function () {
            addtocart(element, cartSymDiv);
        })

        cartSymDiv.setAttribute("class", "cartSym");
        priceDiv.setAttribute("class", "price");
        priceDiv.innerHTML = '<p>' + "Rs. " + element.price + '</p>';
        name.textContent = element.name;
        type.textContent = element.type;

        div.append(img, symDiv, cartSymDiv, priceDiv, name, type);
        document.querySelector("#bestOfAdidas").append(div);
    });
}
function deleteRow(index) {
    console.log("delete");
    wishlist.splice(index, 1)
    localStorage.setItem("wishlistdb", JSON.stringify(wishlist));

}
function addtocart(element, cartSymDiv) {
    cartSymDiv.innerHTML = '<i class="fas fa-shopping-bag"></i>';
    cartlist.push(element);
    localStorage.setItem('cartlistdb', JSON.stringify(cartlist));
    displaybestOfAdidasData(bestOfAdidas);
}