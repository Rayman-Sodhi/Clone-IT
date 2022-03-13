const menu = document.querySelector('#menu');
console.log(menu);
const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

menu.addEventListener('click', function () 
  {sidebar.classList.toggle('show-sidebar');
});

//for search bar
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
   if(searchInput.value.length){
     location.href = searchLink + searchInput.value;
     console.log(searchInput);
   }
})