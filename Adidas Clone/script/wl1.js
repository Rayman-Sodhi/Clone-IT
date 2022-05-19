var wishlist = JSON.parse(localStorage.getItem("wishlistdb")) || []
var len = wishlist.length;
var cartlist = JSON.parse(localStorage.getItem("cartlistdb")) || []
var le = cartlist.length;

displaywishlist(wishlist);
document.querySelector("#wishlistLen").textContent = len;
document.querySelector("#myWishLen").textContent = len;
document.querySelector("#cartLen").textContent = le;

function displaywishlist(wishlist) {
    wishlist.map(function (element, index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var symDiv = document.createElement("div");
        var cartSymDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var type = document.createElement("h6");
        symDiv.innerHTML = '<i class="fas fa-heart"></i>';
        img.setAttribute("src", element.imgURL);

        var count = 1

        symDiv.addEventListener("click", symbalcolor)
        function symbalcolor() {




            symDiv.innerHTML = '<i class="fas fa-heart"></i>';
            symDiv.addEventListener("click", function () {
                deleteRow(index)
            })



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
        document.querySelector("#womenOriginals").append(div);


    });
}
function deleteRow(index) {

    wishlist.splice(index, 1)
    localStorage.setItem("wishlistdb", JSON.stringify(wishlist));

}