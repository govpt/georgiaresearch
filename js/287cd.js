(function($){$('.accordion span').click(function(j){var dropDown=$(this).closest('li').find('.faq__cont');var rotate=$(this).closest('li');$(this).closest('.accordion').find('.faq__cont').not(dropDown).slideUp();if($(this).hasClass('active')){$(this).removeClass('active');rotate.removeClass('rotate');}else{$(this).closest('.accordion').find('span.active').removeClass('active');$(this).closest('.accordion').find('li.rotate').removeClass('rotate');$(this).addClass('active');rotate.addClass('rotate');}
dropDown.stop(false,true).slideToggle();j.preventDefault();});var focusableElements='button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';$('[data-hook="js-sidebar-toggle"]').on('click',function(e){$('.c-sidebar__container').show().find(focusableElements).eq(0).focus()});$('.c-sidebar__container').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){var isOpen=$('body').hasClass('m-sidebar');if(!isOpen){$('.c-sidebar__container').hide();}});if(window.matchMedia("only screen and (max-width: 999px)").matches){$('.c-header').attr('aria-hidden','true')}
$('.c-timeline__item .c-timeline__link').on('click',function(e){var elems=document.querySelectorAll(".c-timeline [aria-hidden='false']");for(var i=0;i<elems.length;i++){var elem=elems[i];elem.setAttribute('aria-hidden',true);console.log(elem);}
$('#'+e.currentTarget.nextElementSibling.id).attr('aria-hidden','false');});})(jQuery);