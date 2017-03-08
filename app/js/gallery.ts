'use strict'

document.addEventListener("DOMContentLoaded", () => {
	const newsSlider = new Flickity('#newsSlider', {
		cellSelector: '.news-item',
		wrapAround: !0,
		contain: !0,
		groupCells: 2,
		bgLazyLoad: !0,
		prevNextButtons: 0
	});

	document.getElementById('newsNext').addEventListener('click', () => newsSlider.next(!0, 0));
	document.getElementById('newsPrev').addEventListener('click', () => newsSlider.previous(!0, 0));

});
