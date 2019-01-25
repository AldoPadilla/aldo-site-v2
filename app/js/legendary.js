(function($) {
    "use strict";


    // WINDOW.LOAD FUNCTION start
    $(window).load(function() {

        // preloader
        $("#preloader").fadeOut(1000);
        $("#preloader-status").delay(300).fadeOut("fast");

        // elements.Timeout
        setTimeout(function() {
            $(".introduction, #particles-holder").delay(500).css({
                display: "none"
            }).fadeIn(1000);
        }, 0);
        setTimeout(function() {
            $("#header").removeClass("top-position");
        }, 1000);
        setTimeout(function() {
            $("#footer").removeClass("bottom-position");
        }, 500);
        setTimeout(function() {
            $(".hero-center-container").removeClass("left-position");
        }, 1000);

        // hero scale IN
        $(".hero-bg").addClass("hero-bg-show");

    });
    // WINDOW.LOAD FUNCTION end


    // DOCUMENT.READY FUNCTION start

    // panels
    // expand
    $("#open-contents").on("click", function() {
        // effect type
        var effect = 'slide';
        // effect options
        var options = {
            direction: 'right' // DEMO ONLY - comment it, ADD '//'
            // direction: 'right' // OPTIONS: right, left, up, down - uncomment it, REMOVE '//'
        };
        // duration
        var duration = 600;
        $('#panel-contents').toggle(effect, options, duration);
        $("#overlay").fadeIn({
            duration: 600,
            easing: "easeInOutQuad"
        });
    });
    // collapse - switch
    $(".bar-hidden-close, #overlay").on("click", function() {
        // effect type
        var effect = 'slide';
        // effect options
        var options = {
            direction: 'right' // DEMO ONLY - comment it, ADD '//'
            // direction: 'right' // OPTIONS: right, left, up, down - uncomment it, REMOVE '//'
        };
        // duration
        var duration = 400;
        $('#panel-contents').toggle(effect, options, duration);
        $("#overlay").fadeOut(600, "easeInOutQuad", function() {});
    });

    // owlCarousel HERO slider
    $(".hero-slider").owlCarousel({
        autoPlay: true,
        navigation: false,
        navigationText: ["<img src='img/hero-slider-arrow-left.png'>", "<img src='img/hero-slider-arrow-right.png'>"],
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        autoHeight: true,
        addClassActive: true,
        beforeMove: function() {
            // slide BEFORE (hide captions)
        },
        afterMove: function() {
            // slide AFTER (show captions)
        }
    });

    // owlCarousel HERO slider SPLIT
    $(".hero-slider-split").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 800,
        singleItem: false,
        items: 2,
        autoHeight: true
    });

    // owlCarousel HERO slider ZOOM
    $(".hero-slider-zoom").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fade", // fade, backSlide, goDown, fadeUp
        slideSpeed: 300,
        paginationSpeed: 100,
        singleItem: true,
        items: 1,
        autoHeight: true
    });

    // owlCarousel HERO slider CUSTOM NAVIGATION EVENTS
    var owl = $('.hero-slider, .hero-slider-split, .hero-slider-zoom').data('owlCarousel');
    $(".navigation-button-next").on("click", function(e) {
        e.preventDefault();
        owl.next();
    });
    $(".navigation-button-prev").on("click", function(e) {
        e.preventDefault();
        owl.prev();
    });

    // social icons share
    $(".social-toggle-wrap").hover(function() {
        $(this).find(".social-widgets-wrap").stop().fadeIn("slow");
    }, function() {
        $(this).find(".social-widgets-wrap").stop().delay(50).fadeOut("slow");
    });

    // show/hide launcher INTRO
    $(".progress-launcher").on("click", function() {
        $(".intro-content-visible").hasClass("hide") ? ($(".intro-content-visible").removeClass("hide"), $(".intro-content-visible").toggleClass("show")) : ($(".intro-content-visible").toggleClass(
            "show"), $(".intro-content-visible").addClass("hide"), $(".intro-content-visible").addClass("hide"));
    }), $(".progress-launcher").on("click", function(e) {
        e.preventDefault(), $(this).toggleClass("open"), $(".intro-content-hidden").toggleClass("show");
    });

    // progress
    function showprogresss() {
        $(".show-progress").removeClass("isHidden");
        $(".progress-holder");
        $({
            value: 0
        }).animate({
            value: $(".num2").attr("name")
        }, {
            duration: 2200,
            easing: 'swing',
            step: function() {
                $(".num2").val(Math.ceil(this.value)).trigger("change");
            }
        });
    }

    function hideprogresss() {
        $(".show-progress").addClass("isHidden");
    }
    $(".num").knob();
    $(".show-progress").on("click", function() {
        if ($(this).hasClass("isHidden")) {
            showprogresss();
        } else {
            hideprogresss();
        }
        return false;
    });

    // kenburnsy
    $("#kenburnsy-bg").kenburnsy({
        fullscreen: false
    });

    // countdown setup start
    $("#countdown").countdown({
        date: "11 August 2017 12:00:00", // countdown target date settings
        format: "on"
    }, function() {});

    // contact form
    $("form#form").submit(function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                "inputError"), s = !0;
            else if ($(this).hasClass("email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                    "inputError"), s = !0);
            }
        }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });

    // newsletter form
    $("form#subscribe").submit(function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                $(this).addClass("inputError"), s = !0;
            else if ($(this).hasClass("subscribe-email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'), $(
                    this).addClass("inputError"), s = !0);
            }
        }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });

    // YTPlayer
    $(function() {
        $(".player").mb_YTPlayer();
    });

    // Vimeofy
    $('#videoContainment-vimeo').vimeofy({
        'url': 'https://vimeo.com/144403557', // Vimeo VIDEO URL
        'color': '#00D8D8',
        'autoplay': true,
        'loop': true,
        'delay': 5000
    });

	// snow
    $(function() {
        $("#snow").each(function() {
            snowBind();
        });
    });

    // twitter ticker
    $("#ticker").tweet({
        username: "aldopadilla123", // user name settings
        page: 1,
        avatar_size: 0,
        count: 20, // number of tweets settings
        loading_text: ""
    }).bind("loaded", function() {
        var ul = $(this).find(".tweet_list");
        var ticker = function() {
            setTimeout(function() {
                ul.find('li:first').animate({
                    marginTop: '-75px'
                }, 500, function() {
                    $(this).detach().appendTo(ul).removeAttr('style');
                });
                ticker();
            }, 8000);
        };
        ticker();
    });

    $(document).ready(function() {
        $(this).find(".tweet_list").list_ticker({
            speed: 8000, // transition speed settings
            effect: 'fade' // OPTIONS: fade, slide
        });
    });

    // DOCUMENT.READY FUNCTION end


    // MOBILE DETECT start
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // MOBILE DETECT end


})(jQuery);
