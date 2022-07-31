$(document).ready(function() {
    
    $(window).scroll(function(){
        $('.tez').css("opacity", 1- $(window).scrollTop() / 300) 
    })

});