(function ($) {
	
	"use strict";

	$(document).ready(function() {

		// Comments
		$(".commentlist li").addClass("panel panel-default");
		$(".comment-reply-link").addClass("btn btn-default");
	
		// Forms
		$('select, input[type=text], input[type=email], input[type=password], textarea').addClass('form-control');
		$('input[type=submit]').addClass('btn btn-primary');
		
		// You can put your own code in here



		// DISABLED - Show specific section, class needs to be added though $(".page1").css("display", "block");



		// Show/hide content with 'read more' buttons
		/*
		$(".recent-posts .read-more").click(function(){
			$('.press-section .excerpt').slideToggle('fast');
			$(this).prev('.content').slideToggle('fast');
			$(window).trigger('resize').trigger('scroll');
		});

		function hidePressContents(){
		    $(".recent-posts .content").each(function(){
		    	$(this).hide();
			});
		}
		hidePressContents();
		*/

	// Innitialise bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

		// jQuery for page scrolling feature - requires jQuery Easing plugin - used on home page
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });

		$(".click-show-more").click(function () {
		    var $closestContent = $(this).closest('.press-article').find('.content');
		    var $closestExcerpt = $(this).closest('.press-article').find('.excerpt');

		    if ($closestContent.hasClass("show-more")) {
		        $(this).text("Show Less");
		        /// $('.press-section .excerpt').slideToggle('fast');
		    } else {
		        $(this).text("Read more...");
		        // $('.press-section .excerpt').slideToggle('fast');
		    }
		    $closestContent.toggleClass('show-more');
		    $closestExcerpt.toggleClass('excerpt-hidden');
		    $(window).trigger('resize').trigger('scroll');
		});

		// - add active class to tabs 
		
		// $('.steps ul.nav a').click(function (e) {
		// $('.steps ul.nav div active').removeClass('active')
		// $(this).parent('div').addClass('active')
		// });



		$('.steps ul li a').hover( function(){
			$(this).tab('show');
		});

// jQuery to collapse the navbar on scroll
(function() {
    var $navbar = $(".navbar");
    var $navbarFixed = $(".navbar-fixed-top");
    var $navbarBrand = $(".navbar-brand");
    
    $(window).scroll(function() {
        if ($navbar.offset().top > 50) {
            $navbarFixed.addClass("top-nav-collapse");
        } else {
            $navbarFixed.removeClass("top-nav-collapse");
        }
    });    
})();


		/*
		 * Replace all SVG images with inline SVG
		*/

		jQuery('img.svg').each(function(){
		    var $img = jQuery(this);
		    var imgID = $img.attr('id');
		    var imgClass = $img.attr('class');
		    var imgURL = $img.attr('src');

		    jQuery.get(imgURL, function(data) {
		        // Get the SVG tag, ignore the rest
		        var $svg = jQuery(data).find('svg');

		        // Add replaced image's ID to the new SVG
		        if(typeof imgID !== 'undefined') {
		            $svg = $svg.attr('id', imgID);
		        }
		        // Add replaced image's classes to the new SVG
		        if(typeof imgClass !== 'undefined') {
		            $svg = $svg.attr('class', imgClass+' replaced-svg');
		        }

		        // Remove any invalid XML tags as per http://validator.w3.org
		        $svg = $svg.removeAttr('xmlns:a');

		        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
		        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
		            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		        }

		        // Replace image with new SVG
		        $img.replaceWith($svg);

		    }, 'xml');

		}); 


		(function() {
    	var $navbar = $(".navbar");
    	var $navbarFixed = $(".navbar-fixed-top");
    
	    	$(window).scroll(function() {
		        if ($navbar.offset().top > 50) {
		            $navbarFixed.addClass("top-nav-collapse");
	        } else {
	            	$navbarFixed.removeClass("top-nav-collapse");
	        }
	    	});    
		});


	});

}(jQuery));
