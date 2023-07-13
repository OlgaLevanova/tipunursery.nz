if (document.querySelector('.carousel')) {
	import('./modules/slider').then((Slider) => {
		new Slider.default();
	});
}

import('./modules/gallery').then((Gallery) => {
	new Gallery.default();
});

if(document.querySelectorAll('.collapse')) {
	import('./modules/toggle').then((Toggle) => {
		new Toggle.default();
	});
}