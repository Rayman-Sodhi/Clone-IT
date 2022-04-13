window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});