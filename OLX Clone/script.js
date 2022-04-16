let country = document.getElementById('country'),
moving = document.getElementById('moving'),
text = document.getElementById('text'),
list = document.getElementById('list');

country.addEventListener('click', () => {
    list.classList.toggle('hidden');
    moving.classList.toggle('rotted');
});

function myfunction(anyone) {
    text.innerHTML = anyone;
}

let eng_tag = document.getElementById('eng_tag'),
hin_eng = document.querySelector('.hin_eng'),
language = document.querySelector('.language');

language.addEventListener('click', () => {
    hin_eng.classList.toggle('display_div');
});

function languages (anyone) {
    eng_tag.innerHTML = anyone;
}

let myImage_Id = document.getElementById('myImage_Id');
let gropdownId = document.getElementById('gropdownId');

myImage_Id.addEventListener('click', () => {
    gropdownId.classList.toggle('block_div');
});

let ad_img = document.querySelector('.ad_img');
let ad_icon = document.getElementById('ad_icon');


ad_icon.addEventListener('click' , () => {
    ad_img.style = `display: none`;
})

let load_more_id = document.getElementById('load_more_id'),
load_more_products_id = document.getElementById('load_more_products_id');

load_more_id.addEventListener('click', () => {
    load_more_products_id.style='display:block';
    load_more_id.style = 'display:none';
});


let ads_img2 = document.querySelector('.ads_img2');
let ad_icon2 = document.getElementById('ad_icon2');


ad_icon2.addEventListener('click' , () => {
    ads_img2.style = `display: none`;
})

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });