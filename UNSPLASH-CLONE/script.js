const access_key = 'TLuyYgXGWcRq5EXgoGzEM7eAbDPjPTQ-VBsAhlz9SZc';

let searchParam = location.search.split('=').pop();

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=30`;
const gallery = document.querySelector('.gallery');

let currentImage = 0;

let allImages;

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    });
}

const searchImages = () => {
    fetch(search_photo_url)
    .then(res => res.json())
    .then(data => {
        allImages = data.results;
        makeImages(allImages);
    });
}

if(searchParam == '') {
    getImages();
}
else{
    searchImages();
}

const makeImages = (data) => {
    data.forEach((item, index) => {
        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className='gallery-img';

        gallery.appendChild(img);

        // popup image 

        img.addEventListener('click', () => {
            currentImage = index;
            showPopup(item);
        })
    });
}




const showPopup = (item) => {
    let popup = document.querySelector('.image-popup');
    const downloadBtn = document.querySelector('.download-btn');
    const closeBtn = document.querySelector('.close-btn');
    const image = document.querySelector('.large-img');
    
    popup.classList.remove('hide');
    downloadBtn.href = item.links.html;

    image.src=item.urls.regular;
    closeBtn.addEventListener('click', () => {
       popup.classList.add('hide');
    })
}


const preBtns = document.querySelector('.pre-btns');
const nxtBtns = document.querySelector('.nxt-btns');

preBtns.addEventListener('click', () => {
    if(currentImage > 0){
        currentImage--;
        showPopup(allImages[currentImage]);
    }
})

nxtBtns.addEventListener('click', () => {
    if(currentImage < allImages.length - 1){
        currentImage++;
        showPopup(allImages[currentImage]);
    }
})