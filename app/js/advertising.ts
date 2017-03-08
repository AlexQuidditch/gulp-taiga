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

const offer = new Vue({
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
		onSubmit() {
			swal({
				html: `
	<span>
	Длительность ролика: ${this.Choice.counter}<br />
	Выбранный вариант: ${this.Choice.value}<br />
	Сообщение; ${this.Choice.message}
	</span>`
			});
			this.isVisible = !0;
			this.$http.post(`some.json`, this.Choice)
				.then(response => {
					console.log(response)
				}, error => {
					console.log(error)
				});
		},
		get() {
			this.$http.get('some.json')
				.then(response => {
					return response.json();
				})
				.then(data => {
					const getData = [];
					for (let key in data) {
						getData.push(data[key]);
					}
					this.Getted = getData;
				});
		}
	},
	mounted() {
		$("#RangeSlider").ionRangeSlider({
			type: "single",
			min: 10,
			max: 20,
			step: 1,
			grid: true,
			grid_num: 2
		});
		$("#RangeSlider").on("change", function() {
			offer.Choice.counter = $(this).prop("value")
		});
		$(":radio").labelauty({
			same_width: true
		});
	}
});
