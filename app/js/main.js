'use strict';
document.addEventListener("DOMContentLoaded", function () {
    var newsSlider = new Flickity('#newsSlider', {
        cellSelector: '.news-item',
        wrapAround: !0,
        contain: !0,
        groupCells: 2,
        bgLazyLoad: !0,
        prevNextButtons: 0,
        freeScroll: !0
    });
    document.getElementById('newsNext').addEventListener('click', function () { return newsSlider.next(!0, 0); });
    document.getElementById('newsPrev').addEventListener('click', function () { return newsSlider.previous(!0, 0); });
    var clientsSlider = new Flickity('#clientsSlider', {
        cellSelector: '.clients-item',
        wrapAround: true,
        arrowShape: { x0: 25, x1: 60, y1: 40, x2: 65, y2: 35, x3: 35 }
    });
});
