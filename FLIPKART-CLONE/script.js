const header = document.querySelector('.Header');
const nav = document.querySelector('.Navbar')
const topOfNav = header.offsetTop;

function fixNav(){
    if (window.scrollY >= topOfNav){
        nav.style.paddingTop = header.offsetHeight + 2 + 'px';
    }
    else{
        nav.style.paddingTop = 0;
    }
}
// for fixing the navbar at top
window.addEventListener('scroll',fixNav);
