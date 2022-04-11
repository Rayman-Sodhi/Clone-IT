
const signInBtn = document.getElementById("sign-in");
const signOutBtn = document.getElementById("sign-out");
const signedOutStatus = document.getElementById("sign-out__status");
const signedInStatus = document.getElementById("sign-in__status");
const signInBtnTwo = document.getElementById("sign-in-two");
const signOutBtnTwo = document.getElementById("sign-out-two");







signedInStatus.style.display = "none";
signOutBtnTwo.style.display = "none";

signInBtn.addEventListener("click", () => {
  signedInStatus.style.display = "block";
  signedOutStatus.style.display = "none";
  signOutBtnTwo.style.display = "block";
  signInBtnTwo.style.display = "none";
})



signInBtnTwo.addEventListener("click", () => {
  signedInStatus.style.display = "block";
  signedOutStatus.style.display = "none";
  signOutBtnTwo.style.display = "block";
  signInBtnTwo.style.display = "none";
})

signOutBtnTwo.addEventListener("click", () => {
  signedInStatus.style.display = "none";
  signedOutStatus.style.display = "block";
  signOutBtnTwo.style.display = "none";
  signInBtnTwo.style.display = "block";
})









const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");
const cartModal = document.getElementById("cart-modal");
const cartButton = document.getElementById("item__cart--btn");
const checkoutButton = document.getElementById("order__btn");




searchBtn.addEventListener("click", getMealList);
mealList.addEventListener("click", getMealRecipe);
recipeCloseBtn.addEventListener("click", () => {
  mealDetailsContent.parentElement.classList.remove("show__recipe");
});
cartButton.addEventListener("click", toggleModal);
checkoutButton.addEventListener("click", closeModal);




function getMealList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
  .then(response => response.json())
  .then(data => {
    let html = "";
    if(data.meals){
      data.meals.forEach(meal => {
        html += `
          <div class = "meal-item" data-id = "${meal.idMeal}">
            <div class = "meal-img">
              <img src = "${meal.strMealThumb}" alt = "food">
            </div>
            <div class = "meal-name">
              <h3>${meal.strMeal}</h3>
              <a href = "#" class = "recipe-btn">Show Recipe</a>
              <a href = "#" id = "buy-btn" class = "buy-btn">Add to Cart</a>
            </div>
          </div>
        `;
      });
      mealList.classList.remove("not__found");
    } else{
      html = "Sorry, we didn't find any meal!";
      mealList.classList.add("not__found");
    }

    mealList.innerHTML = html;
  });
}



function getMealRecipe(e) {
  e.preventDefault();
  if(e.target.classList.contains("recipe-btn")){
    let mealItem = e.target.parentElement.parentElement;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
    .then(response => response.json())
    .then(data => mealRecipeModal(data.meals));
  }
}



function mealRecipeModal(meal) {
  console.log(meal);
  meal = meal[0];
  let html = `
    <h2 class = "recipe-title">${meal.strMeal}</h2>
    <p class = "recipe-category">${meal.strCategory}</p>
    <div class = "recipe-instruct">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>
    <div class = "recipe-meal-img">
      <img src = "${meal.strMealThumb}" alt = "">
    </div>
    <div class = "recipe-link">
      <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
    </div>
  `;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add("show__recipe");
}
t
let counter = -1;
const count = document.getElementById("item__cart--count");
const modalContent = document.querySelector(".modal__items--list--content")


const addToCart = document.getElementById("meal").addEventListener("click", function(e) {
  if(e.target.id == "buy-btn") {
    counter += 1;
    count.innerHTML = counter;
  }
});


document.getElementById("meal").innerHTML = '<button id="buy-btn" class="submit-btn">Submit</button>';


document.getElementById("buy-btn").click();





cartModal.style.display = "none"

function toggleModal() {
  if(cartModal.style.display === "none") {
    cartModal.style.display = "block";
  } else {
    cartModal.style.display = "none";
  }
}





const modalItems = document.querySelector(".modal__items--list");
const modalLogistics = document.querySelector(".modal__logistics");
const purchaseButton = document.querySelector(".modal__to--checkout--btn");





function closeModal() {
  cartModal.style.display = "none";
}














