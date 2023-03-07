$( document ).ready(function() {

$('<span></span>').insertAfter('.main-menu__item_parent a');

window.matchMedia('(max-width: 768px)').addEventListener('change', windowSize)

function windowSize(ma) {
	if ((ma && ma.matches) || $(window).width() <= 768) {
		$('.main-menu__item_parent > span').on('click', function() {
			$('.main-menu__sub').not($(this).parent().find('.main-menu__sub')).hide();
			$('.main-menu__item_parent > span').not($(this)).removeClass('_active');
			$(this).toggleClass('_active');
			$(this).parent().find('.main-menu__sub').toggle();
			$(this).parent().toggleClass('_active');
		})
	} else {
		$('.main-menu__item_parent').mouseenter(function () {
			$(this).addClass('_active');
			$(this).children('.main-menu__sub').addClass('_active');
		})
		
		$('.main-menu__item_parent').mouseleave(function () {
			$(this).removeClass('_active');
			$(this).children('.main-menu__sub').removeClass('_active');
		})
	}
}windowSize();

$('.main-nav__burger').on('click', function() {
	$(this).toggleClass('_active');
	$('body').toggleClass('_lock');
	$('.main-nav__content').toggleClass('_active');
	$('.header').toggleClass('_active');
})

$('.top-roadmap__tab-nav li').on('click', function () {
	$('.top-roadmap__tab-nav li').removeClass('_active');
	$(this).addClass('_active');
	$('.tab-roadmap').removeClass('_active');
	$('.tab-roadmap[data-tab="' + $(this).data('tab') + '"]').addClass('_active');
})

$('.scroll-top').on('click', function () {

	$('html').animate({scrollTop: $('body').offset().top }, 500);
})

$('.top-ecosystem__nav li').on('click', function () {
	
	$('.top-ecosystem__nav li').removeClass('_active');
	$(this).addClass('_active');

	$('.mid-item').removeClass('_active');
	$('.mid-item[data-anchor="' + $(this).data('anchor') + '"]').addClass('_active');
	$('html').animate({scrollTop: $('.mid-item[data-anchor="' + $(this).data('anchor') + '"]').offset().top - $('.header').height() - 15}, 500);
})

$(document).scroll(function() {

	let scrollDistance = 0
	let scrollTop = $(window).scrollTop();

	if (scrollTop > scrollDistance) {
		$('.header, .main-menu__sub, .burger, .main-nav__logo, .main-menu__item').addClass('_scroll');
	} else {
		$('.header, .main-menu__sub, .burger, .main-nav__logo, .main-menu__item').removeClass('_scroll');
	}
})

$('.swap-right__adress button').click(function() {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($('.swap-right__adress p').text()).select();
	document.execCommand("copy");
	$temp.remove();

	$(this).find('span').text('Adress copied!');
});

$('.swap-right__adress button').mouseleave(function () {
	setTimeout(()=>$(this).find('span').text('Copy adress!'), 500);
})

$('.swap-left__nav li').on('click', function () {
	
	$('.swap-left__nav li').removeClass('_active');
	$(this).addClass('_active');
	$('.swap-tab, .swap-right__content').removeClass('_active');
	$('.swap-tab[data-tab="' + $(this).data('tab') + '"], .swap-right__content[data-tab="' + $(this).data('tab') + '"]').addClass('_active');
})

if($('.swap-right__link_adress').length) {

	let text1 = $('.swap-right__link_adress a').text().slice(0, 5)
	let text2 = $('.swap-right__link_adress a').text().slice(-2)

	$('.swap-right__link_adress a').text(text1 + '..' + text2)
}

$.each($('.swap-stake__radio'), function() {
	if($(this).find('input').prop('checked')==true) {
		$(this).addClass('_active');
	}
})

$('.swap-stake__radio').on('click', function () {
	$('.swap-stake__radio').removeClass('_active');
	$('.swap-stake__radio input').prop('checked', false);
	$(this).toggleClass('_active');
	$(this).find('input').prop('checked', true);
})

$('.swap-deposits__tab-menu li').on('click', function () {
	
	$('.swap-deposits__tab-menu li').removeClass('_active');
	$(this).addClass('_active');
	$('.swap-deposits__tab-item').removeClass('_active');
	$('.swap-deposits__tab-item[data-tab="' + $(this).data('tab') + '"]').addClass('_active');
})

});