$(document).ready(function() {

    TweenMax.to(".js--b", 1, {
        delay: .5,
        opacity: 1
    }); 

    paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
        };

        Pace.on('done', function() {
            TweenMax.to(".js--lt", 1, {
                delay: 1,
                className: '+=show'
            }); 
        $('#preloader').delay(4000).animate({top: '20%', opacity: '0'}, 4000, $.bez([0.19,1,0.22,1])).hide(4000);
            
    });

    ////////////////////* Container *//////////////////////////////////

    TweenMax.staggerTo(".js--cr", 8, {
        delay: .5,
        className: '+=show',
        ease: Expo.easeIn,
    }, 0.2);

    //////////////////////////* Home *//////////////////////////////////

    TweenMax.to(".js--hi", 1, {
        delay: 6.7,
        className: '+=show',
        opacity: 1
    }); 

    TweenMax.to(".js--hi-m", 3, {
        delay: 6.7,
        className: '+=scale',
        opacity: 1
    }); 

    TweenMax.staggerTo(".js--h1-m", 2, {
        delay: 7.7,
        className: '+=show',
    },0.1);

    ///////////////////////////* Header *//////////////////////////////////

    TweenMax.from(".js--sb", 1, {
        delay: 8.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.to(".js--cl", 1, {
        delay: 8.4,
        opacity: 1,
        x: 0,
        ease: Expo.easeInOut
    });

    TweenMax.staggerFrom(".js--sb-m", 1, {
        delay: 8.6,
        opacity: 0,
        y: 10,
        ease: Expo.easeInOut
    }, 0.2 );

    TweenMax.staggerFrom(".js--ss", 1, {
        delay: 8.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    }, 0.2 );

    //////////////////////////////* Right *//////////////////////////////////

    TweenMax.staggerFrom(".js--r", 1, {
        delay: 9.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    }, 0.2 ); 

    //////////////////////* Navigation *//////////////////////////////////

    var t1 = new TimelineMax({paused: true});
    
    t1.to(".js--nav", 0.001, { 
        visibility: "visible"
    });  

    t1.to(".js--navr", 1, { 
        className: '+=show',
    });

    t1.to(".js--navm", .05, {
        text: "Close",
        ease: Power3.easeInOut
    });
    
    t1.to(".js--sb-mi", .3, {
        className: "+=active",
        opacity: 1,
        ease: Power3.easeInOut
    });

    t1.staggerTo(".js--navi", .7, {
        className: '+=show',
    }, 0.1,); 

    t1.staggerTo(".js--ns", .5, {
        x: 0,
        opacity: 1,
        ease: Power2.easeOut
    }, 0.1);

    t1.reverse();

    // $('.sidebar__menu').on("click", function(){
    //     t1.reversed(!t1.reversed());
    // });

    $('.sidebar__menu').on("click", function(){
        if (t1.reversed()) {
            t1.play().timeScale(1);
        } else {
            t1.reverse().timeScale(8);
        }
         
        // if(!t1.reversed()) {
        //   t1.reversed(true).timeScale(10);
        // } else {
        //   t1.reversed(false).timeScale(1);
        // }
      });

    //////////////////////* About *//////////////////////////////////

    $('.js--ah-1').waypoint(function(){
    TweenMax.staggerTo(".js--ah-1", 2, {
        opacity: 1,
        x: 0,
        ease: Expo.easeOut
        }); 
    }, {offset: '70%'});

    $('.js--ah-2').waypoint(function(){
    TweenMax.staggerTo(".js--ah-2", 2, {
        opacity: 1,
        x: 0,
        ease: Expo.easeOut
        }); 
    }, {offset: '70%'});

    $('.js--at').waypoint(function(){
        TweenMax.staggerTo(".js--at", 1, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut
            }, 0.1); 
    }, {offset: '60%'});
    
    $('.js--at-2').waypoint(function(){
        TweenMax.staggerTo(".js--at-2", 1, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut
            }, 0.1); 
    }, {offset: '70%'});

    $('.js--ai').waypoint(function(){

        TweenMax.to(".js--ai", .5, {
            className: '+=show',
            opacity: 1
        }); 

        TweenMax.to(".js--ai-m", 2, {
            className: '+=scale',
            opacity: 1
        }); 

    }, {offset: '70%'});

    $('.js--ab').waypoint(function(){
        TweenMax.to(".js--ab", 1, {
            opacity: 1,
            x: 0
            }); 
    }, {offset: '90%'});

    //////////////////////* Skills *//////////////////////////////////

    $('.js--sh').waypoint(function(){
        TweenMax.to(".js--sh", 1.5, {
            opacity: 1,
            x: 0
        });
    },  {offset: '80%'});

    $('.js--si-1').waypoint(function(){

        TweenMax.to(".js--sbr-1", 3, {
            opacity: 1,
            width: "100%"
        });

        TweenMax.to(".js--sh5-1", 1, {
            delay: .5,
            opacity: 1,
            y: 0,
        });

        TweenMax.to(".js--sh2-1", 1, {
            delay: .8,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--sp-1", 1, {
            delay: 1.1,
            opacity: 1,
            y: 0,
        });

    }, {offset: '70%'});

    $('.js--si-2').waypoint(function(){

        TweenMax.to(".js--sbr-2", 3, {
            opacity: 1,
            width: "100%"
        });

        TweenMax.to(".js--sh5-2", 1, {
            delay: .5,
            opacity: 1,
            y: 0,
        });

        TweenMax.to(".js--sh2-2", 1, {
            delay: .8,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--sp-2", 1, {
            delay: 1.1,
            opacity: 1,
            y: 0,
        });

    }, {offset: '70%'});

    $('.js--si-3').waypoint(function(){

        TweenMax.to(".js--sbr-3", 3, {
            opacity: 1,
            width: "100%",
        });

        TweenMax.to(".js--sh5-3", 1, {
            delay: .5,
            opacity: 1,
            y: 0,
        });

        TweenMax.to(".js--sh2-3", 1, {
            delay: .8,
            opacity: 1,
            y: 0,
        });

        TweenMax.to(".js--sp-3", 1, {
            delay: 1.1,
            opacity: 1,
            y: 0,
        });

    }, {offset: '70%'});

    $('.js--si-4').waypoint(function(){

        TweenMax.to(".js--sbr-4", 3, {
            opacity: 1,
            width: "100%",
        });

        TweenMax.to(".js--sh5-4", 1, {
            delay: .5,
            opacity: 1,
            y: 0,
        });

        TweenMax.to(".js--sh2-4", 1, {
            delay: .8,
            opacity: 1,
            y: 0,
        });

        TweenMax.to(".js--sp-4", 1, {
            delay: 1.1,
            opacity: 1,
            y: 0,
        });

    }, {offset: '70%'});

    //////////////////////* Works *//////////////////////////////////

    $('.js--wh').waypoint(function(){
        TweenMax.to(".js--wba", 3, {
            width: "100%",
            ease: Expo.easeOut
        });
    },  {offset: '70%'});

    $('.js--wh1').waypoint(function(){
        TweenMax.to(".js--wh1", 2, {
            className: '+=show',
        });
    },  {offset: '60%'});

    $('.js--wh2').waypoint(function(){
        TweenMax.to(".js--wh2", 2, {
            className: '+=show',
        });
    },  {offset: '60%'});

    $('.js--wpt').waypoint(function(){
        TweenMax.to(".js--wpt", 2, {
            className: '+=show',
        });
    },  {offset: '60%'});

    $('.js--svg').waypoint(function(){
        TweenMax.to(".js--svg", 1, {
            opacity: 1,
            y: 0,
            ease: Expo.easeInOut
        });
    },  {offset: '60%'});

    /////////////////////////// Item 1 /////////////////

    $('.js--wc-1').waypoint(function(){

        TweenMax.to(".js--wc-1", 2, {
            className: '+=show',
            opacity: 1
        }); 

        TweenMax.to(".js--wi-1", 2, {
            className: '+=scale',
            opacity: 1
        }); 

        TweenMax.to(".js--wh3-1", 1, {
            delay: .5,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wh2-1", 1, {
            delay: .8,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wbtn-1", 1, {
            delay: 1,
            opacity: 1,
            y: 0
        });

    },  {offset: '50%'});

    /////////////////////////// Item 2 /////////////////

    $('.js--wc-2').waypoint(function(){

        TweenMax.to(".js--wc-2", .5, {
            className: '+=show',
            opacity: 1
        }); 

        TweenMax.to(".js--wi-2", 2, {
            className: '+=scale',
            opacity: 1
        });  

        TweenMax.to(".js--wh3-2", 1, {
            delay: .5,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wh2-2", 1, {
            delay: .8,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wbtn-2", 1, {
            delay: 1,
            opacity: 1,
            y: 0
        });

    },  {offset: '50%'});

    /////////////////////////// Item 3 /////////////////

    $('.js--wc-3').waypoint(function(){

        TweenMax.to(".js--wc-3", .5, {
            className: '+=show',
            opacity: 1
        }); 

        TweenMax.to(".js--wi-3", 2, {
            className: '+=scale',
            opacity: 1
        }); 
        TweenMax.to(".js--wh3-3", 1, {
            delay: .5,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wh2-3", 1, {
            delay: .8,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wbtn-3", 1, {
            delay: 1,
            opacity: 1.2,
            y: 0
        });

    },  {offset: '50%'});

    /////////////////////////// Item 4 /////////////////
    
    $('.js--wc-4').waypoint(function(){

        TweenMax.to(".js--wc-4", 2, {
            className: '+=show',
            opacity: 1
        }); 

        TweenMax.to(".js--wi-4", 2, {
            className: '+=scale',
            opacity: 1
        }); 

        TweenMax.to(".js--wh3-4", 1, {
            delay: .5,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wh2-4", 1, {
            delay: .8,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wbtn-4", 1, {
            delay: 1,
            opacity: 1,
            y: 0
        });

    },  {offset: '50%'});
    
    /////////////////////////// Item 5 /////////////////

    $('.js--wc-5').waypoint(function(){

        TweenMax.to(".js--wc-5", .5, {
            className: '+=show',
            opacity: 1
        }); 

        TweenMax.to(".js--wi-5", 2, {
            className: '+=scale',
            opacity: 1
        }); 

        TweenMax.to(".js--wh3-5", 1, {
            delay: .5,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wh2-5", 1, {
            delay: .8,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wbtn-5", 1, {
            delay: 1,
            opacity: 1,
            y: 0
        });

    },  {offset: '50%'});
    
    /////////////////////////// Item 6 /////////////////

    $('.js--wc-6').waypoint(function(){

        TweenMax.to(".js--wc-6", .5, {
            className: '+=show',
            opacity: 1
        }); 

        TweenMax.to(".js--wi-6", 2, {
            className: '+=scale',
            opacity: 1
        }); 
        TweenMax.to(".js--wh3-6", 1, {
            delay: .5,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wh2-6", 1, {
            delay: .8,
            opacity: 1,
            y: 0
        });

        TweenMax.to(".js--wbtn-6", 1, {
            delay: 1,
            opacity: 1,
            y: 0
        });

    },  {offset: '50%'});
    
    //////////////////////* Contact *//////////////////////////////////

    $('.js--cs').waypoint(function(){
        TweenMax.to(".js--cb", 2, {
            width: "100%",
            ease: Expo.easeInOut
        });
    },  {offset: '70%'});

    $('.js--ch4').waypoint(function(){
        TweenMax.to(".js--ch4", 2, {
            x: 0,
            opacity: 1,
            ease: Expo.easeInOut
        });
    },  {offset: '70%'});

    $('.js--csvg').waypoint(function(){
        TweenMax.to(".js--csvg", 2, {
            y: 20,
            opacity: 1,
            ease: Expo.easeInOut
        });
    },  {offset: '70%'});

    $('.js--ch-1').waypoint(function(){
        TweenMax.to(".js--ch-1", 2, {
            className: '+=show',
        });
    },  {offset: '70%'});

    $('.js--ch-2').waypoint(function(){
        TweenMax.to(".js--ch-2", 3, {
            className: '+=show',
        });;
    },  {offset: '70%'});

    $('.js--cf').waypoint(function(){
        TweenMax.staggerTo(".js--cfi", 3, {
            opacity: 1,
            y: 0,
            ease: Expo.easeInOut
        }, .1);
    },  {offset: '90%'});

    //////////////////////* footer *//////////////////////////////////

    $('.js--fm').waypoint(function(){
        TweenMax.to(".js--fm", 1, {
            opacity: 1,
            x: 0,
            ease: Expo.easeOut
        });
    },  {offset: '70%'});

    $('.js--fc').waypoint(function(){
        TweenMax.to(".js--fc", 2, {
            opacity: 1,
            x: 0,
            ease: Expo.easeOut
        });
    },  {offset: '70%'});

    $('.js--fs-1').waypoint(function(){
        TweenMax.to(".js--fs-1", 1, {
            opacity: 1,
            x: 0,
            ease: Expo.easeInOut
        });
    },  {offset: '70%'});

    $('.js--fs-2').waypoint(function(){
        TweenMax.to(".js--fs-2", 1, {
            opacity: 1,
            x: 0,
            ease: Expo.easeInOut
        });
    },  {offset: '70%'});

    $('.js--fs-3').waypoint(function(){
        TweenMax.to(".js--fs-3", 1, {
            opacity: 1,
            x: 0,
            ease: Expo.easeInOut
        });
    },  {offset: '70%'});

    $('.js--fs-4').waypoint(function(){
        TweenMax.to(".js--fs-4", 1, {
            opacity: 1,
            x: 0,
            ease: Expo.easeInOut
        });
    },  {offset: '70%'});

    $('.js--fcr').waypoint(function(){
        TweenMax.to(".js--fcr", 2, {
            opacity: 1,
            x: 0,
            ease: Expo.easeOut
        });
    },  {offset: '90%'});

    
    //////////////////////* Scroll on Buttons *//////////////////////////////////

    $('.js--scroll-to-contact').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });

    $('.js--scroll-to-work').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-work').offset().top}, 1000);
    });

    $('.js--scroll-to-contact-2').click(function (){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });

    //////////////////////* Scroll top on Refresh *//////////////////////////////////

    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // }
    
    //////////////////////* Slow Scroll *//////////////////////////////////

    luxy.init();

    // var _ua = (function(u){
    //     return {
    //         Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
    //         || u.indexOf("ipad") != -1
    //         || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
    //         || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
    //         || u.indexOf("kindle") != -1
    //         || u.indexOf("silk") != -1
    //         || u.indexOf("playbook") != -1,
    //         Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
    //         || u.indexOf("iphone") != -1
    //         || u.indexOf("ipod") != -1
    //         || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
    //         || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
    //         || u.indexOf("blackberry") != -1
    //     }
    // })(window.navigator.userAgent.toLowerCase());
    
    // var luxyEl = document.getElementById('luxy');
    // if(luxyEl){
    //     if(!_ua.Mobile&&!_ua.Tablet){
    //         Luxy.init();
    //     }
    // }

    

});