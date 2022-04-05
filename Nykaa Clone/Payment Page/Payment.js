let bagData1=document.getElementById("bag-data-1");
let bagData2=document.getElementById("bag-data-2");
let bagData3=document.getElementById("bag-data-3");
let bagData4=document.getElementById("bag-data-4")
let data=JSON.parse(localStorage.getItem("nykaa-cart"));
let totalPrice=0;
data.forEach(element => {
    totalPrice=totalPrice+Number(element.price);
});
bagData1.textContent="$"+totalPrice;
bagData2.textContent="$"+totalPrice;
if(totalPrice<400){
    bagData3.textContent="$"+50;
    bagData4.textContent="$"+(totalPrice+50);
}else{
    bagData3.textContent="$"+0;
    bagData4.textContent="$"+totalPrice
}
let formCancel=document.getElementById("form-btn1");
let formSave = document.getElementById("form-btn2");
let allFormInputArr=[
    document.getElementById("form-pin"),
    document.getElementById("from-address1"),
    document.getElementById("from-address2"),
    document.getElementById("form-city"),
    document.getElementById("form-state"),
    document.getElementById("form-name"),
    document.getElementById("form-phone"),
    document.getElementById("form-email")
]
function CheckForm(arr){
    let out=true;
    let obj={};
    for(let i=0;i<arr.length;i++){
      if(arr[i].value == null || arr[i].value ==""){
          out=false;
          break;
      }
      obj[i]=arr[i].value;
    }
    return [out,obj];
}
let heading1=document.getElementById("change-form-h3");
let heading2=document.getElementById("form-head");

function UpdateAddressData(){
let [out,obj]=CheckForm(allFormInputArr);
if(out){
    localStorage.setItem("nykaa-payment-data",JSON.stringify(obj));
    heading1.textContent="Edit Your Address";
    heading2.textContent="Edit Your Address";
    DataShowInForm();

}
}
formSave.addEventListener("click",UpdateAddressData);

let SavedData=document.getElementById("saved");
let edit=document.getElementById("edit");
function DataShowInSaved(){
    let data=JSON.parse(localStorage.getItem("nykaa-payment-data"));
    SavedData.innerHTML=null;
    let heading= document.createElement("h2")
    heading.textContent="Saved Address";
    SavedData.appendChild(heading);
    let headingName= document.createElement("h3")
    headingName.textContent=data["5"];
    SavedData.appendChild(headingName);
    let SavedAddress=document.createElement("p");
    SavedAddress.textContent=data["1"];
    SavedData.appendChild(SavedAddress);
    let SavedPin=document.createElement("p");
    SavedPin.textContent=data["3"]+","+data["4"]+"-"+data["0"];//
    SavedData.appendChild(SavedPin);
    let SavedMob=document.createElement("p");
    SavedMob.textContent=data["6"];
    SavedData.appendChild(SavedMob);

}
let SavedAdd=document.getElementById("savedAddress");
let EditAdd=document.getElementById("editAddress");
let Buybtn=document.getElementById("buy");
SavedAdd.addEventListener("click",function(){
    SavedData.style.display="block"
    edit.style.display="none";
    SavedAdd.style.borderLeft="2px solid black";
    EditAdd.style.borderLeft="1px solid grey";
})
EditAdd.addEventListener("click",function(){

    SavedData.style.display="none";
    edit.style.display="block";
    SavedAdd.style.borderLeft="1px solid grey";
    EditAdd.style.borderLeft="2px solid black";
})
function DataShowInForm(){
    if(localStorage.getItem("nykaa-payment-data")==null){
        edit.style.display="block";
        SavedAdd.style.display="none";
        Buybtn.style.display="none";
    }else{
        edit.style.display="none";
        SavedData.style.display="block"
        heading1.textContent="Edit Your Address";
        heading2.textContent="Edit Your Address";
        SavedAdd.style.display="block";
        DataShowInSaved()
        Buybtn.style.display="block";
        SavedAdd.style.borderLeft="2px solid black";
        EditAdd.style.borderLeft="1px solid grey";
    }
}
DataShowInForm()
Buybtn.addEventListener("click",function(){
    window.location.href="./PaymentPage2/Payment2.html"
})