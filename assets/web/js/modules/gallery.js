import Swiper, { Navigation, Pagination } from 'swiper';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'photoswipe/style.css';

export default class Gallery {
	constructor()
	{
		this.swiper = null;
		this.lightbox = null;

		this.photo_swipe_options = {
			gallery: '#my-gallery',
			pswpModule: PhotoSwipe,
			// set background opacity
			bgOpacity: 1,
			showHideOpacity: true,
			children: 'a',
			loop: true,
			showHideAnimationType: 'zoom', /* options: fade, zoom, none */

			/* Click on image moves to the next slide */
			imageClickAction: 'next',
			tapAction: 'next',

			/* ## Hiding a specific UI element ## */
			zoom: false,
			close: true,
			counter: true,
			arrowKeys: true,
			wheelToZoom: true, /* deafult: undefined */
		};

		this.initSwiper();
		this.initLightbox();
	}

	initSwiper()
	{
		this.swiper = new Swiper(".mySwiper", {
			modules: [ Navigation, Pagination ],
			slidesPerView: 1,
			spaceBetween: 10,
			centeredSlides: true,
			grabCursor: true,
			// If we need pagination
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function(index, className) {
					return '<div class="' + className + '"><span class="visually-hidden">' + (index + 1) + "</span></div>";
				}
			},
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			// keyboard control
			keyboard: {
				enabled: true,
			}
		});



	}

	initLightbox() {
		this.lightbox = new PhotoSwipeLightbox(this.photo_swipe_options);

		this.lightbox.init();

		this.lightbox.on('change', () => {
			const { pswp } = this.lightbox;
			this.swiper.slideTo(pswp.currIndex, 0, false);
		});

		this.lightbox.on('afterInit', () => {
			const { pswp } = this.lightbox;
		});


		this.lightbox.on('closingAnimationStart', () => {
			const { pswp } = this.lightbox;
			this.swiper.slideTo(pswp.currIndex, 0, false);
		});
	}
}





