import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import 'photoswipe/style.css';

export default class Gallery {
	constructor()
	{
		this.photo_swipe_options = {
			gallery: '.js-plants-gallery',
			pswpModule: PhotoSwipe,
			bgOpacity: 0.85,
			showHideOpacity: true,
			children: 'a',
			loop: false,
			showHideAnimationType: 'zoom',
			imageClickAction: 'next',
			tapAction: 'next',
			zoom: true,
			zoomTitle: 'Zoom the photo',
			close: true,
			counter: true,
			arrowKeys: true,
			wheelToZoom: false,
		};

		this.initLightbox();
	}

	initLightbox() {
		const lightbox = new PhotoSwipeLightbox(this.photo_swipe_options);

		lightbox.init();
	}
}





