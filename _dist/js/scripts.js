$( document ).ready(function() {

if (window.location.pathname === '/' && sessionStorage.getItem('anchor') != undefined) {

	setTimeout(function() {
		$('html').animate({scrollTop: $(sessionStorage.getItem('anchor')).offset().top - $('.header').height() }, 1000);
		sessionStorage.removeItem('anchor')
	},500)
}

$('<span></span>').insertAfter('.main-menu__item_parent a');

window.matchMedia('(max-width: 1023px)').addEventListener('change', windowSize)

function windowSize(ma) {
	if ((ma && ma.matches) || $(window).width() <= 1023) {

		$('.main-menu__item_parent > span').on('click', function() {

			$('.main-menu__sub').not($(this).parent().find('.main-menu__sub')).hide();
			$(this).parent().find('.main-menu__sub').toggle();

			$('.main-menu__item_parent').not($(this).parent()).removeClass('_active');
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

$('._anchor a').on('click', function (e) {
	e.preventDefault()
	e.stopPropagation()

	if (window.location.pathname === '/') {

		if($('.header').hasClass('_active')) {
			$('.main-nav__burger').trigger('click');
		}

		$('html').animate({scrollTop: $($(this).attr('href')).offset().top - $('.header').height() }, 500);
	} else {
		sessionStorage.setItem("anchor", $(this).attr('href'));
		window.location.pathname = '/'
	}
})

if($('.swiper').length) {

	new Swiper('.article-slider__swiper', {

		navigation: {
			nextEl: '.article-slider__arrow_right',
			prevEl: '.article-slider__arrow_left',
		},
		loop: true,
	});

	new Swiper('.trending__slider', {

		navigation: {
			nextEl: '.trending__arrow',
		},
		loop: true,
		spaceBetween: 15,
		slidesPerView: 1,
		breakpoints: {
			
			550: {
				slidesPerView: 1.2,
			},
			768: {
				slidesPerView: 1.6,
			},
		},
	});

	new Swiper('.top-category__slider', {

		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		freeMode: true,
		speed: 500,
	});
}

$('.category-slide__button').on('click', function () {
	
	$('.category-slide__button').removeClass('_active');
	$(this).addClass('_active');
})

$('.article-pagination__arrow_next').on('click', function () {
	
	$('.bottom-content__col._active').removeClass('_active').next().addClass('_active');;
})

$('.article-pagination__arrow_prev').on('click', function () {
	
	$('.bottom-content__col._active').removeClass('_active').prev().addClass('_active');;
})

$('.article-pagination__arrow').on('click', function () {
	
	$('.article-pagination__arrow').removeClass('_disable');
	$('html').animate({scrollTop: $('.bottom-content').offset().top - $('header').height() }, 500);

	if ($('.bottom-content .bottom-content__col:first-child').hasClass('_active')) {

		$(this).addClass('_disable');
	}
	else if ($('.bottom-content .bottom-content__col:last-child').hasClass('_active')) {

		$(this).addClass('_disable');
	}
})

//<############################################################## ANIMATIONS ###############################################################>\\

//<============================================================== MAINSCREEN ===============================================================>\\

const header = gsap.timeline({
	defaults: {
		duration: 0.4
	}
})

header.from(
	'.main-nav__logo', {
		opacity: 0,
		y: -20,
		delay: 0.3,
	}
).from(
	'.main-menu__item', {
		opacity: 0,
		y: -20,
		stagger: 0.1,
	}
).from(
	'.main-nav__join', {
		opacity: 0,
		y: -20,
		onComplete: function() {
			$('.main-nav__join').css('transition', 'all linear 0.2s')
		},
	}
)

const mainscreen = gsap.timeline({
	defaults: {
		duration: 0.6
	}
})

mainscreen.from(
	'.mainscreen__title', {
		delay: 0.3,
		opacity: 0,
		y: 20,
		scale: 0.8,
		transformOrigin: 'bottom left',
	}
).from(
	'.mainscreen__text, .mainscreen__sub-text', {
		opacity: 0,
		y: 20,
		scale: 0.8,
		transformOrigin: 'bottom left',
		// duration: 0.5,
	}
).from(
	'.mainscreen__button', {
		opacity: 0,
		y: 20,
		scale: 0.8,
		transformOrigin: 'bottom left',
		// duration: 0.5,
		onComplete: function() {
			$('.mainscreen__button').css('transition', 'all linear 0.2s')
		},
	}
)

gsap.from('.mainscreen__social a', {
	scrollTrigger: {
		trigger: '.mainscreen__social',
		start: 'top bottom',
	},
	opacity: 0,
	x: -20,
	stagger: 0.1,
	onComplete: function() {
		$('.mainscreen__social a').css('transition', 'all linear 0.2s')
	},
})

gsap.from('.partners__item', {
	scrollTrigger: {
		trigger: '.partners',
		start: 'top bottom',
	},
	opacity: 0,
	x: -20,
	stagger: 0.2
})

//<================================================================= TOKEN =================================================================>\\

const token_img = gsap.timeline({
	scrollTrigger: {
		trigger: '.token',
		start: 'top 80%',
	},
	defaults: {
		duration: 0.2
	},
	repeat: -1,
	repeatDelay: 1.5,
})

token_img.to(
	'.token__left img', {
		delay: 0.5,
		rotate: -3,
	}
).to(
	'.token__left img', {
		rotate: 3,
	}
).to(
	'.token__left img', {
		rotate: -3,
	}
).to(
	'.token__left img', {
		rotate: 0,
	}
)

const token_info = gsap.timeline({
	scrollTrigger: {
		trigger: '.token',
		start: 'top 80%',
	},
	defaults: {
		duration: 0.4
	},
})

token_info.from(
	'.right-token__title', {
		opacity: 0,
		x: -20,
	}
).from(
	'.right-token__list li', {
		opacity: 0,
		x: -20,
		stagger: 0.2,
	}
).from(
	'.right-token__button', {
		opacity: 0,
		x: -20,
		stagger: 0.2,
		onComplete: function() {
			$('.right-token__button').css('transition', 'all linear 0.2s')
		}
	}
)

//<================================================================ MISSION ================================================================>\\

const mission_top = gsap.timeline({
	scrollTrigger: {
		trigger: '.mission',
		start: 'top 80%',
	},
	defaults: {
		duration: 0.4
	},
})

mission_top.from(
	'.mission__title', {
		opacity: 0,
		y: -20,
	}
).from(
	'.industry-mission__title', {
		opacity: 0,
		y: -20,
	}
).from(
	'.industry-mission__video', {
		opacity: 0,
		x: -20,
	},
).from(
	'.industry-mission__tbox', {
		opacity: 0,
		x: 20,
	}
).from(
	'.industry-bottom__button', {
		opacity: 0,
		y: -20,
		onComplete: function() {
			$('.industry-bottom__button').css('transition', 'all linear 0.2s')
		},
	}
)

const mission_bottom = gsap.timeline({
	scrollTrigger: {
		trigger: '.ecosystem-mission',
		start: 'top 80%',
	},
	defaults: {
		duration: 0.4,
	},
})

mission_bottom.from(
	'.ecosystem-mission__title', {
		opacity: 0,
		y: -20,
	}
).from(
	'.ecosystem-mission__text', {
		opacity: 0,
		y: -20,
	}
)
// .from(
// 	'.ecosystem-mission__ibox', {
// 		opacity: 0,
// 		x: -20,
// 		scale: 0.8,
// 		transformOrigin: 'top center',
// 		duration: 1,
// 	},
// )

//<================================================================ CHARTERS ===============================================================>\\

const charters = gsap.timeline({
	scrollTrigger: {
		trigger: '.charters',
		start: 'top 80%',
	},
	defaults: {
		duration: 0.4,
	},
})

charters.from(
	'.charters__title', {
		opacity: 0,
		y: -20,
	}
).from(
	'.charters__subtitle', {
		opacity: 0,
		y: -20,
	}
)
// .from(
// 	'.charters__content', {
// 		opacity: 0,
// 		x: -20,
// 		scale: 0.8,
// 		transformOrigin: 'top center',
// 		duration: 0.5,
// 	},
// ).from(
// 	'.charters__text', {
// 		opacity: 0,
// 		x: -20,
// 		scale: 0.8,
// 		transformOrigin: 'top center',
// 		duration: 0.5,
// 	},
// ).from(
// 	'.charters__button', {
// 		opacity: 0,
// 		x: -20,
// 		scale: 0.8,
// 		transformOrigin: 'top center',
// 		duration: 0.5,
// 		onComplete: function() {
// 			$('.charters__button').css('transition', 'all linear 0.2s')
// 		},
// 	},
// )

//<================================================================= ROADMAP ===============================================================>\\

gsap.from(
	'.top-roadmap__title', {
		scrollTrigger: {
			trigger: '.roadmap',
			start: 'top 80%',
		},
		opacity: 0,
		x: 20,
		duration: 0.4,
	}
)

gsap.from(
	'.top-roadmap__quote', {
		scrollTrigger: {
			trigger: '.roadmap',
			start: 'top 80%',
		},
		delay: 0.4,
		opacity: 0,
		x: 20,
		duration: 0.4,
	}
)

gsap.from(
	'.top-roadmap__tab-nav li', {
		scrollTrigger: {
			trigger: '.roadmap',
			start: 'top 80%',
		},
		delay: 0.4,
		opacity: 0,
		x: -20,
		duration: 0.4,
		stagger: 0.1,
		onComplete: function() {
			$('.top-roadmap__tab-nav li').css('transition', 'all linear 0.2s')
		},
	}
)

gsap.from(
	'.tab-roadmap__item', {
		scrollTrigger: {
			trigger: '.tab-roadmap__item',
			start: 'top 80%',
		},
		opacity: 0,
		y: -20,
		duration: 0.6,
		stagger: 0.4
	}
)

//<================================================================= ROADMAP ===============================================================>\\

const footer = gsap.timeline({
	scrollTrigger: {
		trigger: '.footer',
		start: 'top bottom',
	},
	defaults: {
		duration: 0.4,
	},
})

footer.from(
	'.info-footer', {
		opacity: 0,
		y: -20,
	}
).from(
	'.nav-footer__column', {
		opacity: 0,
		y: -20,
		stagger: 0.2,
	}
).from(
	'.social-footer a', {
		opacity: 0,
		y: -20,
		stagger: 0.1,
		onComplete: function() {
			$('.social-footer a').css('transition', 'all linear 0.2s')
		},
	}
)

gsap.from(
	'.main-nav__content._active .main-menu .main-menu__item', {
		opacity: 0,
		y: -20,
		stagger: 0.2,
	}
)

function mouseparallax(cont, el, rotateIndex, translateIndex){

	$(cont).mousemove(function(e) {
		
		cx = Math.ceil($(window).width() / 2.0);
		cy = Math.ceil($(window).height() / 2.0);
		dx = e.clientX - cx;
		dy = e.clientY - cy;
		
		tiltx = (dy / cy);
		tilty = - (dx / cx);
		radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
		degree = (radius * rotateIndex);
	
		if (translateIndex) {
			$(el, cont).css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)translate(' + tilty * translateIndex + 'px,' + -tiltx * translateIndex + 'px)');
			$(el, cont).css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)translate(' + tilty * translateIndex + 'px,' + -tiltx * translateIndex + 'px)');
		} else {
			$(el, cont).css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
			$(el, cont).css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
		}
	});
}

mouseparallax('.mainscreen', '.mainscreen__tbox', 13, 20);
mouseparallax('.ecosystem-mission', '.ecosystem-mission__ibox img', 15, 25);
mouseparallax('.charters', '.charters__content', 15, 20);
mouseparallax('.charters', '.charters__text', 15, 25);
mouseparallax('.charters', '.charters__button a', 15, 25);
mouseparallax('.roadmap', '.tab-roadmap__item', 10, 15);
mouseparallax('.roadmap', '.roadmap-item__info', 10, 5);
mouseparallax('.roadmap', '.roadmap-item__list', 10, 5);

const deviceOrientation = window.DeviceOrientationEvent || window.OrientationEvent;

// Створити обробник подій для DeviceOrientation
const handleOrientation = (event) => {
  // Отримати показники гіроскопу
  const alpha = event.originalEvent.alpha;
  const beta = event.originalEvent.beta;
  const gamma = event.originalEvent.gamma;

  // Обробка даних гіроскопу
  $('.alpha').text(alpha)
  $('.beta').text(beta)
  $('.gamma').text(gamma)
//   console.log(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);
};

// Додати обробник подій до DeviceOrientation
if (deviceOrientation) {
  $(window).on('deviceorientation', handleOrientation);
}

});