$(document).ready(function(){
        $("#anchor-link-1").on("click", function(){
            var scroll=$("#carouselExampleIndicators").offset().top;
            $('html, body').animate({scrollTop: scroll}, 3000);
        });
    });