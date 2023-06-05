$(document).ready(function(){
    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed:1000,
        navText:['PREV', 'NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })
});

// PROJECT SLIDER
$(document).ready(function(){
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        smartSpeed:1000,
        responsive:{
            0:{
                nav: false,
            },
            768: {
                nav: true,
            },
            1148: {

            }
        }
    })
});