document.addEventListener("DOMContentLoaded", function () {
    var clientsSlider = new Flickity('#clientsSlider', {
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
    });
});

var offer = new Vue({
    el: '#Offer',
    data: {
        title: 'Расчитать стоимость',
        headline: 'Длительность ролика',
        Choice: {
            counter: '10',
            message: '',
            value: '3'
        },
        footerMsg: 'Ваша заявка получена!',
        isVisible: 0,
        placeholder: 'Дополнительная информация...',
        priceHeadline: 'Стоимость:',
        Prices: [{
                pretext: 'Размещение: ',
                value: '11 200 рублей / месяц'
            }, {
                pretext: 'Производство: ',
                value: 'от 3 000 рублей / ролик'
            }]
    },
    methods: {
        onSubmit: function () {
            swal({
                html: "\n\t<span>\n\t\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0440\u043E\u043B\u0438\u043A\u0430: " + this.Choice.counter + "<br />\n\t\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: " + this.Choice.value + "<br />\n\t\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435; " + this.Choice.message + "\n\t</span>"
            });
            this.isVisible = !0;
            this.$http.post("some.json", this.Choice)
                .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        },
        get: function () {
            var _this = this;
            this.$http.get('some.json')
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                var getData = [];
                for (var key in data) {
                    getData.push(data[key]);
                }
                _this.Getted = getData;
            });
        }
    },
    mounted: function () {
        $("#RangeSlider").ionRangeSlider({
            type: "single",
            min: 10,
            max: 20,
            step: 1,
            grid: true,
            grid_num: 2
        });
        $("#RangeSlider").on("change", function () {
            offer.Choice.counter = $(this).prop("value");
        });
        $(":radio").labelauty({
            same_width: true
        });
    }
});
