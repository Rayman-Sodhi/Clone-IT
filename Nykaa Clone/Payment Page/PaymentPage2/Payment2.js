let detailCard = document.getElementById("details-card");
let detailUPI = document.getElementById("details-upi");
let detailGpay = document.getElementById("details-google");
let detailCash = document.getElementById("details-cash");
let main = document.querySelector("main");

let payBtn = document.getElementById("payBtn");
let paymentOption = 0;

let Paymentdone = false;

let cardNumber = document.getElementById("card-number"); //
let cardExpiry = document.getElementById("card-expiry");
let cardCvv = document.getElementById("card-cvv");
let gPay = document.getElementById("gpay");
let upi = document.getElementById("upi");
let okwindow = document.querySelector(".window");

let p = [
  document.getElementById("p1"),
  document.getElementById("p2"),
  document.getElementById("p3"),
  document.getElementById("p4"),
  document.getElementById("p5"),
];

let data = JSON.parse(localStorage.getItem("nykaa-cart"));
let totalPrice = 0;
CartTotal();
payBtn.textContent = `Pay $ ${totalPrice} Now`;

let detailCardBtn = document.getElementById("methods1");
detailCardBtn.addEventListener("click", function () {
  detailCard.style.display = "block";
  detailUPI.style.display = "none";
  detailGpay.style.display = "none";
  detailCash.style.display = "none";
  payBtn.textContent = `Pay $ ${totalPrice} Now`;
  paymentOption = 0;
});

let detailUPIBtn = document.getElementById("methods2");
detailUPIBtn.addEventListener("click", function () {
  detailCard.style.display = "none";
  detailUPI.style.display = "block";
  detailGpay.style.display = "none";
  detailCash.style.display = "none";
  payBtn.textContent = `Pay $ ${totalPrice} Now`;
  paymentOption = 1;
});

let detailGpayBtn = document.getElementById("methods3");
detailGpayBtn.addEventListener("click", function () {
  detailCard.style.display = "none";
  detailUPI.style.display = "none";
  detailGpay.style.display = "block";
  detailCash.style.display = "none";
  payBtn.textContent = `Pay $ ${totalPrice} Now`;
  paymentOption = 2;
});

let detailCashBtn = document.getElementById("methods4");
detailCashBtn.addEventListener("click", function () {
  detailCard.style.display = "none";
  detailUPI.style.display = "none";
  detailGpay.style.display = "none";
  detailCash.style.display = "block";
  payBtn.textContent = `Pay $ ${totalPrice} After Delivery In Cash`;
  paymentOption = 3;
  console.log(paymentOption);
});

function CartTotal() {
  data.forEach((element) => {
    totalPrice = totalPrice + Number(element.price);
  });
  p[0].textContent = "$ " + totalPrice;
  p[1].textContent = "$ " + totalPrice;
  p[2].textContent = "$ " + 0;
  if (totalPrice > 400) {
    p[3].textContent = "$ " + 0;
    p[4].textContent = "$ " + totalPrice;
  } else {
    p[3].textContent = "$ " + 50;
    p[4].textContent = "$ " + (totalPrice + 50);
  }
}

function PaymentDone(param = 0) {
  if (param == 0) {
    if (
      cardNumber.value != null &&
      cardNumber.value != "" &&
      cardExpiry.value != null &&
      cardExpiry.value != "" &&
      cardCvv.value != null &&
      cardCvv.value != ""
    ) {
      okwindow.style.display = "block";
      Paymentdone = true;
      paid();
    }
  } else if (param == 2) {
    if (gPay.value != null && gPay.value != "") {
      okwindow.style.display = "block";
      Paymentdone = true;
      paid();
    }
  } else if (param == 1) {
    console.log(gpay.value);
    if (upi.value != null && upi.value != "") {
      okwindow.style.display = "block";
      Paymentdone = true;
      paid();
    }
  } else if (param == 3) {
    okwindow.style.display = "block";
    Paymentdone = true;
    paid();
  }
}

payBtn.addEventListener("click", function () {
  PaymentDone(paymentOption);
});

let close = document.getElementById("close");
let shopagain = document.getElementById("shopagain");
let delivered;

close.addEventListener("click", function () {
  okwindow.style.display = "none";
  delivered.style.opacity = "1";
});
shopagain.addEventListener("click", function () {
  window.location.href = "../../LandingPage/index.html";
});
function paid() {
  if (Paymentdone == true) {
    main.innerHTML = null;
    delivered = document.createElement("img");
    delivered.src = "./delivery3.jpg";
    delivered.style.opacity = "0.4";
    // main.style.backgroundColor = "#ECEFF1";
    main.appendChild(delivered);
  }
}
