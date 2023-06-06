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
        nav:true,
        dots:false,
        smartSpeed:1000,
        margin: 24,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                nav: true,
                items: 2,
            },
            1148: {
                items: 2,
                center: true,
            }
        }
    })
});