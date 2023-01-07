// Module
if (document.querySelector('.carousel')) {
	import('./modules/slider').then((Slider) => {
		new Slider.default();
	});
}