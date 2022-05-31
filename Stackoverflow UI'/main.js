/*Hamburger Menu */
var hamburger_menu = document.querySelector('.hamburger-menu-container');
var button = hamburger_menu.querySelector('.hamburger-menu')
button.addEventListener('click', (event) => {
    hamburger_menu.classList.toggle('open')
})


/*Questions Section */

let questions_img=[
    'https://cdn.sstatic.net/Img/home/illo-feats-ask.svg?v=b6cd07f0765a',
    'https://cdn.sstatic.net/Img/home/illo-feats-vote.svg?v=9d2eb0efdc17',
    'https://cdn.sstatic.net/Img/home/illo-feats-answer.svg?v=b637b99bc32a',
    'https://cdn.sstatic.net/Img/home/illo-feats-tags.svg?v=0655cbe6bffa',
    'https://cdn.sstatic.net/Img/home/illo-feats-accept.svg?v=f2be4b8dfdac',
    'https://cdn.sstatic.net/Img/home/illo-feats-recognize.svg?v=4f011d7173e8'
]

var questionsBody=document.querySelector('.questions-body');
var question_items=questionsBody.querySelectorAll('.questions-body-item')
var question_content_img=questionsBody.querySelector('.question-item-content-img')
var question_item_isSelected=false;

function resetActive(){
    question_items.forEach(item=>{
        item.classList.remove("active");
    })
}
function getDataId(item){
    return item.getAttribute('data-id');
}
function changeImage(id){
    question_content_img.src=questions_img[id];
}

question_items.forEach(item=>{
    item.addEventListener('click',function (event){
        question_item_isSelected=true;
        resetActive();
        this.classList.add('active')
        changeImage(getDataId(item))
    })
})

/*Questions Animation*/
var index=0;
firstSlider();
durationSlider();

function firstSlider(){
    changeImage(index)
    question_items[index].classList.add('active');
    index++;
}

function durationSlider(){
    setInterval(()=>{
        if (!question_item_isSelected){
            changeImage(index)
            resetActive();
            question_items[index].classList.add('active');
            index<questions_img.length-1 ? index++ : index=0;
        }
    },3000);
}

/* Nav Search Hints */
var nav_search=document.querySelector('.nav-search');
var search=nav_search.querySelector('.search-container');
var search_hint=nav_search.querySelector('.search-hints');
var search_btn=document.querySelector('.search-btn');
var search_input=search.querySelector('input');

search.addEventListener('click',()=>{
    search_hint.classList.add('open');
})

window.addEventListener('click', function(e){
    if (!(nav_search.contains(e.target) || search_btn.contains(e.target))){
        search_hint.classList.remove('open');
    }
});

search_btn.addEventListener('click',()=>{

    if (!nav_search.classList.contains('open')){
        search_hint.classList.remove('open');
    }
    nav_search.classList.toggle('open');
    search_input.focus();
        setTimeout(()=>{
            search_hint.classList.toggle('open');
        },50)
});

