(function () {
    $('[data-roll]').on('click', function (e) {
        e.preventDefault();
        var $this = $(this), target = $this.data('roll'), anchor = $('[id="' + target + '"]');
        $('html, body').animate({
            scrollTop: anchor.offset().top
        }, 750);
    });
})();
'use strict';
document.addEventListener('DOMContentLoaded', function () {
    $("#RangeSlider").ionRangeSlider({
        type: "single",
        min: 10,
        max: 20,
        step: 5,
        grid: !0,
        grid_num: 2
    });
    $(":radio, :checkbox").labelauty({
        same_width: true
    });
    document.getElementById('trigger').addEventListener('click', function () {
        document.getElementById('headerMenu').classList.toggle('_opened');
    });
    var messages = [
        'только размещение',
        'только производство',
        'производство и размещение'
    ];
    $("#RangeSlider").on("change", function () {
        calculator();
    });
    $(":radio").on('change', function () {
        calculator();
    });
    function calculator() {
        var counter = $("#RangeSlider").prop("value");
        var period = $('[name=period]:checked').val();
        var choice = $('[name=choice]:checked').val();
        var choiceText = document.getElementById('choice');
        var periodPrice = '';
        if (counter == '10' && period == '1') {
            periodPrice = '5 700';
        }
        else if (counter == '10' && period == '2') {
            periodPrice = '11 320';
        }
        else if (counter == '10' && period == '3') {
            periodPrice = '17 000';
        }
        else if (counter == '15' && period == '1') {
            periodPrice = '8 500';
        }
        else if (counter == '15' && period == '2') {
            periodPrice = '17 000';
        }
        else if (counter == '15' && period == '3') {
            periodPrice = '25 500';
        }
        else if (counter == '20' && period == '1') {
            periodPrice = '11 500';
        }
        else if (counter == '20' && period == '2') {
            periodPrice = '23 000';
        }
        else if (counter == '20' && period == '3') {
            periodPrice = '34 000';
        }
        ;
        switch (choice) {
            case '1':
                choiceText.innerText = messages[0];
                break;
            case '2':
                choiceText.innerText = messages[1];
                break;
            default: choiceText.innerText = messages[2];
        }
        ;
        var pricePlaces = document.querySelectorAll('[periodPrice]');
        var counterPlaces = document.querySelectorAll('[counterPlace]');
        var placingNode = document.querySelectorAll('[placingNode]');
        var productionNode = document.querySelectorAll('[productionNode]');
        for (var _i = 0, pricePlaces_1 = pricePlaces; _i < pricePlaces_1.length; _i++) {
            var item = pricePlaces_1[_i];
            item.innerText = periodPrice + " \u0440\u0443\u0431\u043B\u0435\u0439 / \u043C\u0435\u0441\u044F\u0446";
        }
        ;
        for (var _a = 0, counterPlaces_1 = counterPlaces; _a < counterPlaces_1.length; _a++) {
            var item = counterPlaces_1[_a];
            item.innerText = counter;
        }
        ;
        for (var _b = 0, placingNode_1 = placingNode; _b < placingNode_1.length; _b++) {
            var item = placingNode_1[_b];
            if (choice == '2') {
                item.style.display = 'none';
            }
            else {
                item.style.display = 'block';
            }
        }
        ;
        for (var _c = 0, productionNode_1 = productionNode; _c < productionNode_1.length; _c++) {
            var item = productionNode_1[_c];
            if (choice == '1') {
                item.style.display = 'none';
            }
            else {
                item.style.display = 'block';
            }
        }
        ;
    }
    ;
    document.getElementById('footerButton').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('overlay').classList.toggle('_opened');
    });
    document.getElementById('modalClose').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('overlay').classList.remove('_opened');
    });
    document.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key == 27) {
            document.getElementById('overlay').classList.remove('_opened');
        }
    });
});
