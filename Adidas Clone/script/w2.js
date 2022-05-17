var womenOriginalsData = [{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/133f3c15fbc94086a98dad5c0108ce1b_9366/Jeremy_Scott_Crop_Hoodie_Black_H53361_21_model.jpg",
    price: "Sold out",
    name: "Jeremy Scott Crop Hoodie",
    type: "Women lifestyle",
    new: ""
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3ea0e789d3074342a211ad9e017609e5_9366/NMD_R1_Spectoo_Shoes_Black_GZ9288_01_standard.jpg",
    price: "13999.00",
    name: "NMD_R1 Spectoo Shoes",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/49571736fc7e4bca878ead12014c2bcc_9366/Adicolor_Nylon_Track_Top_White_H06697_21_model.jpg",
    price: "7599.00",
    name: "Adicolor Nylon Track Top",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/08965b3d5dd9457e9a8aac840039672b_9366/Adicolor_Classics_Trefoil_Tee_Black_GN2896_21_model.jpg",
    price: "1999.00",
    name: "Adicolor Classics Trefoil Tee",
    type: "Women originals",
    new: "new"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3dd18d13c9204434be24ac7101510a46_9366/Adicolor_Classics_3-Stripes_Tee_White_GN2913_21_model.jpg",
    price: "1999.00",
    name: "Adicolor Classics 3 - Stripes Tee",
    type: "Women originals",
    new: "new"
}
];

var bestOfAdidas = [{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7242e6135ba24b09b9b7ad81010df2ac_9366/H37770_000_plp_model.jpg",
    price: "2099.00",
    name: "Adicolor Classics Long Sleeve Tee",
    type: "Originals"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/29e90e0a297d4a35b67ead6b00dc3284_9366/H37838_21_model.jpg",
    price: "4999.00",
    name: "Adicolor Classics Chunky Velour Pants",
    type: "Originals"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48d9e23ae7a0488189beabce00e601b2_9366/GC6686_000_plp_model.jpg",
    price: "2800.00",
    name: "COLD.RDY Cover - Up",
    type: "Performance"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ce28f2bdf98944a8a389ad8100fb51ff_9366/H18019_21_model.jpg",
    price: "3599.00",
    name: "Tights with Velvet Stripes and Trefoil Rivet",
    type: "Originals"
},
{
    imgURL: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/673c3caf90604715b36bad4900e822cb_9366/H18017_21_model.jpg",
    price: "3599.00",
    name: "Tights with Velvet Stripes and Trefoil Rivet",
    type: "Originals"
}
];
var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || []
var len = wishlist.length;
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || []
var le = cartlist.length;

displayData(womenOriginalsData);
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#cartLen").textContent = le;


function displayData(arr) {
    arr.map(function (element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var cartSymDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");
        var neworNot = document.createElement("h6");

        img.setAttribute("src", element.imgURL);
        symDiv.innerHTML = '<i class="far fa-heart ">';
        var count = 1

        symDiv.addEventListener("click", symbalcolor)
        function symbalcolor() {
            count++
            if (count % 2 == 0) {
                console.log("solid");
                symDiv.innerHTML = '<i class="fas fa-heart"></i>';
                wishlist.push(element);
                localStorage.setItem('wishlistdb', JSON.stringify(wishlist));

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
        cartSymDiv.setAttribute("class", "cartSym");
        cartSymDiv.addEventListener("click", function () {
            addtocart(element, cartSymDiv);
        })
        if (element.price == "Sold out") {
            priceDiv.innerHTML = '<p>' + element.price + '</p>';
        } else if (element.price != "") {
            priceDiv.innerHTML = '<p>' + "Rs. " + element.price + '</p>';
        }

        priceDiv.setAttribute("class", "price1");
        name.textContent = element.name;
        type.textContent = element.type;
        neworNot.textContent = element.new;

        div.append(img, symDiv, priceDiv, cartSymDiv, name, type, neworNot);
        document.querySelector("#womenOriginals").append(div);
    });
}
displaybestOfAdidasData(bestOfAdidas);

function displaybestOfAdidasData(arr) {
    arr.map(function (element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var cartSymDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");

        img.setAttribute("src", element.imgURL);
        symDiv.innerHTML = '<i class="far fa-heart ">';
        var count = 1

        symDiv.addEventListener("click", symbalcolor)
        function symbalcolor() {
            count++
            if (count % 2 == 0) {
                console.log("solid");
                symDiv.innerHTML = '<i class="fas fa-heart"></i>';
                wishlist.push(element);
                localStorage.setItem('wishlistdb', JSON.stringify(wishlist));

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
        cartSymDiv.setAttribute("class", "cartSym");
        cartSymDiv.addEventListener("click", function () {
            addtocart(element, cartSymDiv);
        })

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

}