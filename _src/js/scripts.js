
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
}

windowSize();



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