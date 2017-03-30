'use strict'

document.addEventListener("DOMContentLoaded", () => {
	const playerSlider = new Flickity('#playerSlider', {
		cellSelector: '.player-item',
		wrapAround: !0,
		contain: !0,
		prevNextButtons: 1
	});

	const clientsSlider = new Flickity('#clientsSlider', {
		cellSelector: '.clients-item',
		wrapAround: true,
		arrowShape: { x0: 25, x1: 60, y1: 40, x2: 65, y2: 35, x3: 35 }
	});

});
