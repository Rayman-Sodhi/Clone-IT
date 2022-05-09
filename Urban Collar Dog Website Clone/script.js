window.sr = ScrollReveal();
	sr.reveal('.navbar', {
	duration: 2000,
	origin: 'bottom'
	});
	sr.reveal('.showcase-left', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
	});
	sr.reveal('.showcase-right', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
	});
	sr.reveal('.showcase-btn', {
	delay: 1500,
	duration: 2000,
	origin: 'right',
	distance: '300px'
	});
	sr.reveal('#price div', {
	duration: 2000,
	origin: 'bottom'
	});
	sr.reveal('.info-left', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2
	});
	sr.reveal('.info-right-1', {
	duration: 2000,
	origin: 'right',
	distance: '300px',
	viewFactor: 0.2
	});
	sr.reveal('.info-right-2', {
	duration: 2000,
	origin: 'right',
	distance: '300px',
	viewFactor: 0.2
	});
	sr.reveal('#info1 .btn', {
	delay: 1000,
	duration: 2000,
	origin: 'right',
	distance: '300px'
	});
	sr.reveal('footer p', {
	duration: 2000,
	origin: 'bottom'
	});
	sr.reveal('#contact', {
	duration: 2000,
	origin: 'bottom'
	});
	sr.reveal('#faq div', {
	duration: 2000,
	origin: 'bottom'
	});

$(document).ready(function(){

$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".navbar-brand, .navbar-nav").show();
      $('.navbar-default').css('background', 'white');
    } else {
        $(".navbar-brand, .navbar-nav").hide();
      $('.navbar-default').css('background', 'transparent');
	}
    this.previousTop = currentTop;
});

$(".navbar-default").mouseover(function(){
  $('.navbar-default').css('background', 'white');
	$(".navbar-brand, .navbar-nav").show();
})	
});

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
	  location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	  $('html, body').animate({
	  scrollTop: target.offset().top
	  }, 1000);
	  return false;
	  }
	  }
	});
});