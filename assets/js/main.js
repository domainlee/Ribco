;(function () {
    'use strict';

    var isMobile = function () {
        let isMobile = false;
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
            isMobile = true;
        }
        return isMobile;
    }

    var loading = function () {
        $(window).on("load", function () {
            $('.loading').delay(666).fadeOut('slow');
            $('body').delay(666);
            animation();
            skill();
            typing();
        });
    }

    var loadingMobile = function () {
        $('.loading').css('display', 'none');
        animation();
        skill();
        typing();
    }

    var typing = function () {
        var elements = document.getElementsByClassName('type--js');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TextType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        // css.innerHTML = "";
        document.body.appendChild(css);
    }

    var slider = function () {
        var item_image = $('.hero__images figure');
        if(item_image.length){
            var images = item_image.attr('data-images').split(",");
            var index = 0;
            var time = 5000;
            var updateImage = function() {
                if (index >= images.length) {
                    index = 0;
                }
                item_image.attr('style', 'background-image: url('+images[index]+')');
                index++;
            }
            updateImage();
            setInterval(updateImage, time);
        }
    }

    var nav = function () {
        var button_nav = $('.header__button-menu');
        button_nav.click(function (e) {
            $('body').toggleClass('nav-open-js');
            $(this).toggleClass('active')
        });

        $('.header__button--close').click(function () {
            $('body').removeClass('nav-open-js');
        });

        $(window).scroll(function() {
            var scrollTop = $('html').scrollTop();
            if(scrollTop >= 70) {
                $('body').addClass('head__fix');
            } else {
                $('body').removeClass('head__fix');
            }
            if(scrollTop >= 600) {
                $('body').addClass('head__show');
            } else {
                $('body').removeClass('head__show');
            }
        });

        if(isMobile()){
            var header__navigation = $('.header__navigation');
            header__navigation.each(function () {
                var button = $(this).find('a');
                button.click(function () {
                    setTimeout(function () {
                        $('body').removeClass('nav-open-js');
                        button_nav.removeClass('active');
                    },600);
                });
            });
        }
        hashtag();

        var section 		= jQuery('.section-animation');
        var allLi 			= jQuery('.header__navigation li');
        var button			= jQuery('.header__navigation a');
        var wrapper 		= jQuery('.home');

        button.on('click',function(){
            var element 	= $(this);
            var href		= element.attr('href');
            if(element.parent().hasClass('home__button') || element.parent().hasClass('header__button-hire')){
                $('.header__nav .header__navigation a.nav-link[href="'+href+'"]').trigger('click');
                hashtag();
                return false;
            }
            $('body').removeClass('nav-open-js');
            $('.header__button-menu').removeClass('active');
            $("html, body").animate({ scrollTop: 0 }, "slow");
            var sectionID 	= $(href);
            var parent	 	= element.closest('li');
            if(!parent.hasClass('active')) {
                allLi.removeClass('active');
                wrapper.find(section).removeClass('active');
                $('.nav-link').removeClass('active');
                element.addClass('active');
                $(sectionID).addClass('active');
            }
            return false;
        });

        function hashtag(){
            var ccc 			= $('.header__nav .nav-active');
            var element 		= $('.header__nav .header__navigation .nav-item a.active');

            $('.header__nav .header__navigation a').on('mouseenter',function(){
                var e 			= $(this);
                currentLink(ccc,e);
            });
            $('.header__nav .header__navigation').on('mouseleave',function(){
                element 		= $('.header__nav .header__navigation .nav-item a.active');
                currentLink(ccc,element);
                element.parent().siblings().removeClass('mleave');
            });
            currentLink(ccc,element);

        }

        function currentLink(ccc,e){
            if(!e.length){return false;}
            var left 		= e.offset().left;
            var width		= e.outerWidth();
            var menuleft 	= $('.header__nav').offset().left;
            e.parent().removeClass('mleave');
            e.parent().siblings().addClass('mleave');
            ccc.css({left: (left-menuleft) + 'px',width: width + 'px'});
        }

    }

    var lazy = function () {
        if($('.scroll').length) {
            $('.lazy').Lazy({
                effect: "fadeIn",
                effectTime: 500,
                appendScroll: $('.scroll')
            });
        } else {
            $('.lazy').Lazy({
                effect: "fadeIn",
                effectTime: 500,
            });
        }
    };

    var owlCarousel = function() {
        var client_slider = $('.my-client__js');
        var client_slider_thumbnail = $('.my-client__js--thumb');
        var syncedSecondary = true;
        var slidesPerPage = 4;

        client_slider.owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            lazyLoad: true,
            autoplay: true,
            items: 1,
            navText : ["<i class='icofont-caret-left'></i>","<i class='icofont-caret-right'></i>"],
            responsive: {
                0: {
                    nav: false,
                },
                480: {
                    nav: false,
                },
                768: {
                    nav: true,
                }
            }
        }).on('changed.owl.carousel', syncPosition);

        client_slider_thumbnail.on('initialized.owl.carousel', function() {
            client_slider_thumbnail.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            lazyLoad: true,
            smartSpeed: 200,
            slideSpeed: 500,
            autoWidth: true,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            client_slider_thumbnail.find(".owl-item").removeClass("current").eq(current).addClass("current");
            var onscreen = client_slider_thumbnail.find('.owl-item.active').length - 1;
            var start = client_slider_thumbnail.find('.owl-item.active').first().index();
            var end = client_slider_thumbnail.find('.owl-item.active').last().index();
            if (current > end) {
                client_slider_thumbnail.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                client_slider_thumbnail.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                client_slider.data('owl.carousel').to(number, 100, true);
            }
        }

        client_slider_thumbnail.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            client_slider.data('owl.carousel').to(number, 300, true);
        });

        $('.pricing__js').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            lazyLoad: true,
            autoWidth: true,
            autoplay: true,
            items: 1,
            navText : ["<i class='i-left'></i>","<i class='i-right'></i>"],
            responsive: {
                0: {
                    nav: true,
                },
                480: {
                    nav: true,
                },
                768: {
                    nav: true,
                    items: 2,
                }
            }
        });

        $('.my-experience__js').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            lazyLoad: true,
            autoplay: true,
            items: 1,
            navText : ["<i class='i-left'></i>","<i class='i-right'></i>"],
            responsive: {
                0: {
                    nav: true,
                },
                480: {
                    nav: true,
                },
                768: {
                    nav: true,
                    items: 2,
                }
            }
        });

        $('.client-reviews__js').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            lazyLoad: true,
            autoplay: true,
            items: 1,
            navText : ["<i class='i-left'></i>","<i class='i-right'></i>"],
            responsive: {
                0: {
                    nav: true,
                },
                480: {
                    nav: true,
                },
                768: {
                    nav: true,
                    items: 2,
                }
            }
        });

        $('.brands__js').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            lazyLoad: true,
            autoplay: true,
            items: 2,
            navText : ["<i class='i-left'></i>","<i class='i-right'></i>"],
            responsive: {
                0: {
                    nav: true,
                },
                480: {
                    nav: true,
                    items: 2,
                },
                768: {
                    nav: true,
                    items: 4,
                }
            }
        });

    };

    var skill = function () {
        let skill_item = $('.my-resume__skill--item');
        skill_item.each(function (k, v) {
            var t = $(this);
            let count = t.find('.my-resume__skill--precent');
            let precent = count.attr('data-precent');
            count.find('div').addClass('width-' + precent);
            count.find('span').text(precent + '%');
        });
    }

    var animation = function () {
        let viewPorts = $('*[data-viewport]');
        viewPorts.each(function() {
            let that = $(this);
            if(that.attr('data-viewport') != '') {
                that.addClass(that.attr('data-viewport'));
                if(isInViewport(that)) {
                    var time = 200;
                    if(isMobile() || that.attr('data-delay-mobile')){
                        time = that.attr('data-delay-mobile');
                    } else if(that.attr('data-delay')) {
                        time = that.attr('data-delay');
                    }
                    setInterval(function(){
                        that.addClass('is-on');
                    }, time);
                }
            }
        });
    }

    var isInViewport = function (e) {
        let elementTop = e.offset().top + 50;
        let elementBottom = elementTop + e.outerHeight();
        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    var popup = function() {
        $('.button-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled:true
            }
        });
        $('.button-iframe').magnificPopup({
            type: 'iframe',
        });
    }

    var form = function () {
        $('.contact__form').validate({
            submitHandler: function (form) {
                $.ajax({
                    url: "assets/php/contact.php",
                    type: "POST",
                    data: $(form).serialize(),
                    cache: false,
                    processData: false,
                    success: function(data) {
                        const result = JSON.parse(data);
                        if(result.code == 1) {
                            alert('We have received your message, thank you for your message.');
                            location.reload();
                        } else if(result.code == 0) {
                            alert('Form submit data invalid')
                        }
                    }
                });
                return false;
            },
            rules: {
                name: "required",
                email: {required : true, email: true},
                message: "required",
            },
            messages: {
                name: "Please specify your name",
                email: "Please specify your email",
                message: "Please enter message",
            }
        });
    }

    var dark = function ( ) {
        // init
        var button = $('.dark-light input');

        let theme_default = $('html').attr('data-theme-default');

        if(theme_default === 'true') {
            localStorage.removeItem("data-theme");
        }

        let theme = localStorage.getItem('data-theme');
        if(theme){
            $('html').attr('data-theme', theme);
        }

        if(theme === 'light') {
            button.attr("checked", true);
        } else {
            button.attr("checked", false);
        }

        var default_theme = $('html').attr('data-theme');
        localStorage.setItem("data-theme", default_theme);

        // action
        button.change(function () {
            if($(this).is(":checked")) {
                to_light();
            } else {
                to_dark();
            }
        });

        // to light
        function to_light(){
            $('html').attr("data-theme", "light");
            localStorage.setItem("data-theme", "light");
        }
        // to dark
        function to_dark(){
            $('html').attr("data-theme", "dark");
            localStorage.setItem("data-theme", "dark");
        }
    }

    var TextType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    TextType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function() {
            that.tick();
        }, delta);
    }

    var masonry = function () {
        var $ = require('jquery');
        var jQueryBridget = require('jquery-bridget');
        var Isotope = require('isotope-layout');
        jQueryBridget( 'isotope', Isotope, $ );

        var $grid = $('.grid');
        $grid.isotope({
            itemSelector: '.portfolio__item',
            layoutMode: 'masonry'
        });

        $('.filter-button-group').on( 'click', 'button', function() {
            var button = $('.filter-button-group button');
            button.removeClass('active');
            $(this).addClass('active');

            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

    }

    $(document).ready(function() {
        window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
        if(!isMobile()) {
            loading();
        } else {
            loadingMobile();
        }
        slider();
        nav();
        lazy();
        owlCarousel();
        popup();
        form();
        skill();
        dark();
        masonry();

        $(document).on( 'scroll', function(){
            animation();
        });

        $('.scroll').on( 'scroll', function(){
            animation();
        });

    });
}());