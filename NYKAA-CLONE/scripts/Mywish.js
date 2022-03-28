let MYWISH_BOX = document.querySelector(".MYWISH-BOX")

if(localStorage.getItem("NykaaWish") === null) {
    localStorage.setItem("NykaaWish", JSON.stringify([]))
}


if(localStorage.getItem("NykaaCart") === null) {
    localStorage.setItem("NykaaCart", JSON.stringify([]))
}

let prod_count = document.querySelector(".prod-count")

let getWishStore = JSON.parse(localStorage.getItem("NykaaWish"))

prod_count.textContent = "(" + getWishStore.length + ")"

function AppendtoMYWISH_BOX(getWishStore) {
    MYWISH_BOX.innerHTML = null
    getWishStore.forEach((prod) => {

        
        let div = document.createElement("div")
        div.setAttribute("class" , "wish_div")

        cutbtn = document.createElement("button")
        cutbtn.setAttribute("class" , "cutbtn")
        cutbtn.innerText = "x"

        cutbtn.onclick = function() {
            DLTFROMwish(prod)
        }

        let img = document.createElement("img")
        img.src = prod.img1

        let pname = document.createElement("p")
        pname.textContent = prod.name.substring(0, 40)

        let rate = document.createElement("h3")
        rate.textContent = prod.rating

        let mrp_text = document.createElement("p")
        mrp_text.textContent = "MRP : ₹"

        let MRP = document.createElement("p")
        MRP.textContent = mrp_text.textContent + prod.price

        let movebtn = document.createElement("button") 
        movebtn.setAttribute("class" , "movetobag")
        movebtn.innerText = "MOVE TO BAG"

        movebtn.onclick = function() {
            MOVETOBAGfn(prod)
        }

        div.append(cutbtn,img, pname, rate, MRP, movebtn)

        MYWISH_BOX.append(div)
    })
}

AppendtoMYWISH_BOX(getWishStore)

function DLTFROMwish(prod) {


    let index = getWishStore.indexOf(prod)

    getWishStore.splice(index, 1)


    localStorage.setItem("NykaaWish" , JSON.stringify(getWishStore))

    window.location.href = "Mywish.html"
}

function MOVETOBAGfn(prod) {

    let getCartstore = JSON.parse(localStorage.getItem("NykaaCart"))
    getCartstore.push(prod)
    localStorage.setItem("NykaaCart" , JSON.stringify(getCartstore))

    let index = getWishStore.indexOf(prod)



    getWishStore.splice(index, 1)


    localStorage.setItem("NykaaWish" , JSON.stringify(getWishStore))
    window.location.href = "Mywish.html"

}