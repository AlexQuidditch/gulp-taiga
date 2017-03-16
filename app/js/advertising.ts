document.addEventListener("DOMContentLoaded", () => {
	const clientsSlider = new Flickity('#clientsSlider', {
		cellSelector: '.clients-item',
		wrapAround: true,
		arrowShape: {
			x0: 25,
			x1: 60,
			y1: 40,
			x2: 65,
			y2: 35,
			x3: 35
		}
	})
});
