document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.showcase-carusel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-navigation_next',
			prevEl: '.showcase-navigation_prev'
		}
	})

	document.querySelector('video').playbackRate = 2 

})
