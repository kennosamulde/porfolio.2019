
$(document).ready(function() {
    $(".container").addClass("hide");
    
    /* TweenMax Container */
    TweenMax.to(".container", 3, {
       opacity: 1,
       visibility: "visible"
    });
    TweenMax.from(".container__rule__2", 2, {
            height: 0,
            ease: Expo.easeIn
    });
    TweenMax.from(".container__rule__3", 2.2, {
        delay: .5,
            height: 0,
            ease: Expo.easeIn 
    });
    TweenMax.from(".container__rule__4", 2.4, {
        delay: .7,
            height: 0,
            ease: Expo.easeIn 
    });
    TweenMax.from(".container__rule__5", 2.6, {
        delay: .9,
            height: 0,
            ease: Expo.easeIn 
    });
    TweenMax.from(".container__rule__6", 2.8, {
        delay: 1.1,
            height: 0,
            ease: Expo.easeIn 
    });

    /* TweenMax Home */
    TweenMax.from(".h3-1", 1, {
        delay: 2.3,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });
    TweenMax.from(".h3-2", 1, {
        delay: 2.6,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });
    TweenMax.from(".home__h1__1", 1, {
        delay: 2.9,
            opacity: 0,
            x: 30,
            ease: Expo.easeInOut
    });
    TweenMax.from(".home__plus", 1, {
        delay: 3.1,
            opacity: 0,
            ease: Expo.easeInOut
    });  
    TweenMax.from(".home__h1__2", 1, {
        delay: 3.3,
            opacity: 0,
            x: 30,
            ease: Expo.easeInOut
    });
    TweenMax.from(".home__text", 1, {
        delay: 3.6,
            opacity: 0,
            x: 30,
            ease: Expo.easeInOut
    });
    TweenMax.to(".home__btn", 1, {
        delay: 3.4,
            opacity: 1,
            x: 0,
            ease: Expo.easeIn      
    });
    TweenMax.from(".home__bar", 2, {
        delay: 4,
            width: 0,
            ease: Expo.easeInOut
    });

    /* TweenMax Header */
    TweenMax.from(".sidebar__main", 1, {
        delay: 4.1,
            opacity: 0,
            w: 0,
            x: 20,
            ease: Expo.easeInOut
    });
    TweenMax.from(".sidebar__menu__menu", 1, {
        delay: 4.2,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });
    TweenMax.from(".sidebar__menu__icon", 1, {
        delay: 4.3,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });
    TweenMax.from(".fa-behance", 1, {
        delay: 4.5,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });   
    TweenMax.from(".fa-dribbble", 1, {
        delay: 4.6,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });   
    TweenMax.from(".fa-instagram", 1, {
        delay: 4.7,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });   
    TweenMax.from(".fa-facebook-f", 1, {
        delay: 4.8,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });

     /* TweenMax Right */
     TweenMax.from(".right__ribbon", 1, {
        delay: 4.1,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });
    TweenMax.from(".right__hello", 1, {
        delay: 4.2,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });
    TweenMax.from(".right__scroll__text", 1, {
        delay: 4.4,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });
    TweenMax.from(".right__scroll__arrow", 1, {
        delay: 4.5,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
    });   
    TweenMax.from(".hero-video", 2, {
        delay: 4.2,
            height: 0,
            ease: Expo.easeInOut
    });   


    /* Navigation */
    var t1 = new TimelineMax({paused: true});
    
    t1.to(".nav", 0, { 
        visibility: "visible"
    });  

    t1.to(".nav__rule", .7, { 
        width: "100%",
        ease: Expo.easeInOut
    }); 
    
    t1.to(".sidebar__menu__icon__one", 0.3, {
        delay: -.6,
        rotation: 45,
        y: -8,
        backgroundColor: "black",
        ease: Expo.easeInOut
    });

    t1.to(".sidebar__menu__icon__two", 0.3, {
        delay: -.6,
        rotation: -45,
        y: 8,
        backgroundColor: "black",
        ease: Expo.easeInOut
    });

    t1.staggerTo(".navigation__item", .5, {
        x: 0,
        visibility: "visible",
        opacity: 1,
        ease: Expo.easeOut
    }, 0.05); 

    t1.to(".nav__main__logo", .5, {
        delay: -1.1,
        opacity: 1,
        ease: Expo.easeInOut
    });

    t1.to(".fab", .3, {
        delay: -1.1,
        color: "black",
        ease: Expo.easeInOut
    });

    t1.to(".sidebar__menu__menu", .3, {
        delay: -.07,
        color: "black",
        ease: Expo.easeInOut
    });

    t1.reverse();

    $('.sidebar__menu').on("click", function(){
       t1.reversed(!t1.reversed());
        setTimeout(function(){
            $('.sidebar__menu__menu').text($('.sidebar__menu__menu').text() === 'Menu' ? 'Close' : 'Menu');
        },1100);
    });


    /* Scroll on buttons */
    $('.js--scroll-to-contact').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });

    $('.js--scroll-to-work').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-work').offset().top}, 1000);
    });

    $('.js--scroll-to-contact').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });











});