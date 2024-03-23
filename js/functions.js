/**
 * Theme functions file
 *
 * Contains handlers for navigation, accessibility, header sizing
 * footer widgets and Featured Content slider
 *
 */

( function( $ ) {
	$(document).ready(function(){
        $('#menu-toggle').click(function(e){
            $('body, #menu-toggle, .c-head__nav').toggleClass('toggled');
            $('.c-head__nav').slideToggle();
            e.preventDefault();
        });
        $('.c-entry-header__nav-toggle-container').on('click', function(e) {
            e.preventDefault();
            var toggle = $('.c-entry-header__nav-toggle'),
                old = toggle.text();
            toggle.text(toggle.data('alt')).data('alt', old);
            $('.c-entry-header__nav-container').slideToggle();
            $(this).find('.c-toggle').toggleClass('toggled');
        });
	});

	$('.sub-menu-toggle').click(function() {
		$(this).toggleClass('active');
		$(this).siblings('.sub-menu').slideToggle();
	});

    $('.p-txtmedia__media--has-slider').each(function() {
        var id = $(this).find('.p-txtmedia__slider').attr('id'),
            idNav = $(this).find('.p-txtmedia__nav').attr('id');
        var nav = new Swiper('#'+idNav, {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1000,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
        });
        new Swiper('#'+id, {
            slidesPerView: 1,
            speed: 800,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: '#'+id+'n',
                prevEl: '#'+id+'p'
            },
            thumbs: {
                swiper: nav
            }
        });
    });

    $('.p-gallery .swiper-container').each(function() {
        var id = $(this).attr('id');
        new Swiper('#'+id, {
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 800,
            grabCursor: true,
            observer: true,
            observeParents: true,
            watchOverflow: true,
            loop: true,
            loopedSlides: 2,
            breakpoints: {
                700: {slidesPerView: 3}
            },
            navigation: {
                nextEl: '#'+id+'n',
                prevEl: '#'+id+'p'
            }
        });
    });
    $('.p-itxtsl__slider').each(function() {
        var id = $(this).attr('id');
        new Swiper('#'+id, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            speed: 20000,
            grabCursor: true,
            watchOverflow: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: true
            },
            freeMode: {
                enabled: true,
                sticky: false
            },
            breakpoints: {
                700: {slidesPerView: 3, spaceBetween: 80},
                500: {slidesPerView: 2, spaceBetween: 40}
            },
            scrollbar: {
                el: '#'+id+'s',
                draggable: true
            },
            mousewheel: {
                invert: false,
                eventsTarget: '#'+id+'s',
                sensitivity: 2
            }
        });
    });

    $('.c-acc__button').on('click', function() {
        var close = $(this).hasClass('active');
        $('.c-acc__collapse').slideUp(300);
        $('.c-acc__button.active').removeClass('active');
        if (!close) {
            $('#'+$(this).attr('id')+'c').slideDown(300);
            $(this).addClass('active');
        }
    });

    $('.c-tabs__button').on('click', function(e) {
        e.preventDefault();
        var close = $(this).hasClass('active'),
            t = $(this),
            transition = 300;
        if (!close) {
            $('.c-tabs__collapse').fadeOut(transition/2);
            $('.c-tabs__button.active').removeClass('active');
            setTimeout(function() {
                $('#'+t.attr('id')+'c').fadeIn(transition/2);
                t.addClass('active');
            }, transition/2)
        }
    });

    var header = $('.c-head');
    function handleScroll() {
        window.scrollY >= 2
        && header.addClass('c-head--shadow')
        || header.removeClass('c-head--shadow');
    }
    $(window).on('load resize scroll', handleScroll);

    function checkLabels() {
        $('.c-label').each(function() {
            if ($(this).find('select,input,textarea')[0].value) $(this).addClass('active');
            else $(this).removeClass('active');
        })
    }
    function setLabelListeners() {
        $('.c-label,input').on('change', checkLabels)
    }
    setLabelListeners();
    $(window).on('load', checkLabels);

    var rellax = new Rellax('.rellax');

    // modals
    $('[data-modal-toggle]').on('click', function() {
        $($(this).attr('data-modal-toggle')).toggleClass('toggled');
        $('body').toggleClass('modal-open');
    });
    $('.c-modal__close').on('click', function() {
        $(this).parents('.c-modal').toggleClass('toggled');
        $('body').toggleClass('modal-open');
    });

    $('a[href*="#"]').on('click', function(e) {
        var url = $(this).attr('href'),
            hash = url.split('#')[1];

        if (hash && $('#' + hash).length) {
            e.preventDefault();
            $('#' + hash).toggleClass('toggled');
            $('body').toggleClass('modal-open');
        }
    })

    $('.c-head__search-toggle').on('click', function() {
        $('.c-head__search-input').focus().select();
    })

    var post_header = $('.c-entry-header-post');
    if (post_header.length) {
        var post_header_height_var = '--rie-post-header-height';
        function resize_post_header() {
            if (window.innerWidth < 800) {
                var post_date = $('.c-entry-header-post__date');
                var post_thumb_height = function() {
                    return  $('.c-entry-header-post__thumb').outerHeight() || 0;
                };
                var post_date_offset = post_date.offset();
                post_header[0].style.setProperty(
                    post_header_height_var,
                    (post_date_offset.top + post_date.outerHeight() + post_thumb_height() / 2) + 'px'
                );
            } else {
                post_header[0].style.removeProperty(post_header_height_var);
            }
        }
        $(window).on('load resize', resize_post_header)
    }

})( jQuery );