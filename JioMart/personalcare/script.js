function dummy(){
    document.getElementById("dummy").className="dummy-scroll";
}
function nondummy(){
    document.getElementById("dummy").className="";
}
$(document).ready(function () {
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        nondummy();
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        dummy();
    });
});


document.addEventListener("DOMContentLoaded", function(){
// make it as accordion for smaller screens
if (window.innerWidth > 992) {

document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){

everyitem.addEventListener('mouseover', function(e){

    let el_link = this.querySelector('a[data-bs-toggle]');

    if(el_link != null){
        let nextEl = el_link.nextElementSibling;
        el_link.classList.add('show');
        nextEl.classList.add('show');
    }

});
everyitem.addEventListener('mouseleave', function(e){
    let el_link = this.querySelector('a[data-bs-toggle]');

    if(el_link != null){
        let nextEl = el_link.nextElementSibling;
        el_link.classList.remove('show');
        nextEl.classList.remove('show');
    }


})
});

}
// end if innerWidth
}); 
/*Show content functions*/
function hideAll() {
    $(".my-content-haircare").hide();
    $(".staples").hide();
    $(".bev").hide();
    $(".fruitsandveggies").hide();
}
function showHairCare() {
    hideAll();
 $(".my-content-haircare").show();
}
function showStaples() {
    hideAll();
    $(".staples").show();
   }
function showFruitsandVeggies() {
    hideAll();
    $(".fruitsandveggies").show();
   }
   function showBev() {
    hideAll();
    $(".bev").show();
   }