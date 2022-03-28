let getDataToShow = JSON.parse(localStorage.getItem("userData"))

let MyProData = getDataToShow[getDataToShow.length-1] 

let PROFILE_PIC = document.querySelector(".Profile-Pic")
let USER_NAME = document.querySelector(".USER-NAME")
let USER_EMAIL = document.querySelector(".USER-EMAIL")

PROFILE_PIC.src = MyProData.img
USER_NAME.textContent = MyProData.name
USER_EMAIL.innerText = MyProData.email

// new address box

let Add_new_address = document.querySelector(".Add-New_address")
let NewAddressBox = document.querySelector(".NewAddress__Box")
let Cut_NewAddress__Box = document.querySelector(".Cut-NewAddress__Box")

let AddNewName = document.querySelector(".AddNewName")
let AddNewNumber = document.querySelector(".AddNewNumber")
let Address_Textarea = document.querySelector("#Address-Textarea")
let AddPostelCode = document.querySelector(".AddPostelCode")

let Noaddress = document.querySelector(".Noaddress")

let ShowAddress = document.querySelector(".ShowAddress")
let Showpostelcode = document.querySelector(".Showpostelcode")
let ShowMobileno = document.querySelector(".ShowMobileno")
let ShowNewName = document.querySelector(".ShowNewName")


let add_address_btn = document.querySelector(".add-address-btn")
add_address_btn.addEventListener("click" , AppenddataToMyAddress)

Add_new_address.addEventListener("click" , ShowNewAddressBox)
Cut_NewAddress__Box.addEventListener("click" , HideNewAddressBox)


function ShowNewAddressBox() {

NewAddressBox.style.display = "flex"
}

function HideNewAddressBox() {
    NewAddressBox.style.display = "none"
}

if(localStorage.getItem("MyNykaaAddress") === null) {
    localStorage.setItem("MyNykaaAddress" , JSON.stringify([]))
}



function AppenddataToMyAddress (){

    

    if(AddPostelCode.value !== "" && AddNewNumber.value !== "") {

        let getMyNykaaAddress = JSON.parse(localStorage.getItem("MyNykaaAddress"))
        
        Noaddress.style.display = "none"

        let obj = {
            name : AddNewName.value,
            MobileNo : AddNewNumber.value,
            Address : Address_Textarea.value,
            Postel : AddPostelCode.value
        }
        getMyNykaaAddress.push(obj)

        setTimeout(() => {
            window.location.href = "Myprofile.html"
        },1500)

        localStorage.setItem("MyNykaaAddress" , JSON.stringify(getMyNykaaAddress))
        
    }

}


let getLocalNykaaA = JSON.parse(localStorage.getItem("MyNykaaAddress"))

if(getLocalNykaaA.length > 0) {
    Noaddress.style.display = "none"
}

ShowAddress.textContent =  getLocalNykaaA[getLocalNykaaA.length-1].Address
ShowMobileno.textContent ="+91-" + getLocalNykaaA[getLocalNykaaA.length-1].MobileNo
ShowNewName.textContent = getLocalNykaaA[getLocalNykaaA.length-1].name
Showpostelcode.textContent = "Pin Code : " + getLocalNykaaA[getLocalNykaaA.length-1].Postel

localStorage.setItem("MyNykaaAddress" , JSON.stringify(getLocalNykaaA))