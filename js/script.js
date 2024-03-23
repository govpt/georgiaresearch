$(document).ready(function() {
    $('.mobile-btn .mobile-btn-icon-burger').click(function() {
        $('.header-menu-container').addClass('mobile-active');
        $('.mobile-btn-icon-burger').removeClass('active');
        $('.mobile-btn-icon-cross').addClass('active');
    });
    $('.mobile-btn .mobile-btn-icon-cross').click(function() {
        $('.header-menu-container').removeClass('mobile-active');
        $('.mobile-btn-icon-burger').addClass('active');
        $('.mobile-btn-icon-cross').removeClass('active');
    });
    if ($('.history-menu')) {
        $('.mobile-btn .mobile-btn-icon-burger').click(function() {
            $('.header-white-menu-container').addClass('mobile-active');
            $('.mobile-btn-icon-burger').removeClass('active');
            $('.mobile-btn-icon-cross').addClass('active');
        });
        $('.mobile-btn .mobile-btn-icon-cross').click(function() {
            $('.header-white-menu-container').removeClass('mobile-active');
            $('.mobile-btn-icon-burger').addClass('active');
            $('.mobile-btn-icon-cross').removeClass('active');
        });
    }
    $('.mobile-solution-btn').click(function() {
        $('.header-menu-submenu').addClass('active');
        $('.header-submenu-buttons .mobile-btn-icon-cross').addClass('active')
        $('.header-submenu-buttons .mobile-btn-icon-burger').removeClass('active')
    })
    $('.header-submenu-buttons').click(function() {
        $('.header-menu-submenu').removeClass('active');
        $('.header-submenu-buttons .mobile-btn-icon-cross').removeClass('active')
        $('.header-submenu-buttons .mobile-btn-icon-burger').addClass('active')
    })
    $('.icon-override-to-right').click(function() {
        $('.header-menu-submenu').toggleClass('active');
    });
    $('.template__sidebar, .template__content, .template__navigation').click(function() {
        if ($('.header-menu-submenu').hasClass('active')) {
            $('.header-menu-submenu').removeClass('active');
        }
    });
});