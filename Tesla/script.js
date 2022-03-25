const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu_btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.crose_button')
const blurOverlay = document.querySelector('.blur_background')

// storing class name "is active" in variable

const IS_ACTIVE = 'is--active'

// Function to toggle the navigation

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
    blurOverlay.classList.toggle(IS_ACTIVE)
    fullpageEl.classList.toggle('no-scroll')
}

// event listner to menu button & nav close btn 

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)


new fullpage('#fullpage', {
    autoscrolling: true,
    scrollBar: true, 
})