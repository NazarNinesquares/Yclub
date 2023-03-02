$( document ).ready(function() {

window.matchMedia('(max-width: 768px)').addEventListener('change', windowSize)

function windowSize(ma) {
	if ((ma && ma.matches) || $(window).width() <= 768) {
		$('.main-menu__item_parent').on('click', function() {
			$('.main-menu__sub').not($(this).children('.main-menu__sub')).hide();
			$(this).children('.main-menu__sub').toggle();
			$(this).toggleClass('_active');
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
		$('.header, .main-menu__sub, .burger').addClass('_scroll');
	} else {
		$('.header, .main-menu__sub, .burger').removeClass('_scroll');
	}
})

});