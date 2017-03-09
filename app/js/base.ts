(function() {
    $('[data-roll]').on('click', function(e) {
        e.preventDefault();
        let
            $this = $(this),
            target = $this.data('roll'),
            anchor = $('[id="' + target + '"]');
        $('html, body').animate({
            scrollTop: anchor.offset().top
        }, 750);
    });
})();

'use strict'

document.addEventListener('DOMContentLoaded', () => {
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

	// Header Menu trigger
	document.getElementById('trigger').addEventListener('click', () => {
		document.getElementById('headerMenu').classList.toggle('_opened')
	});

	// Form Logic

	const messages: string[] = [
		'только размещение',
		'только производство',
		'производство и размещение'
	];

	$("#RangeSlider").on("change", function() {
		calculator()
	});

	$(":radio").on('change', function() {
		calculator()
	});

	function calculator(): void {
		let counter: string = $("#RangeSlider").prop("value");
		let period: string = $('[name=period]:checked').val();
		let choice: string = $('[name=choice]:checked').val();
		let choiceText: any = document.getElementById('choice');

		let periodPrice: string = '';

		if (counter == '10' && period == '1') {
			periodPrice = '5 700';
		} else if (counter == '10' && period == '2') {
			periodPrice = '11 320'
		} else if (counter == '10' && period == '3') {
			periodPrice = '17 000'
		} else if (counter == '15' && period == '1') {
			periodPrice = '8 500'
		} else if (counter == '15' && period == '2') {
			periodPrice = '17 000'
		} else if (counter == '15' && period == '3') {
			periodPrice = '25 500'
		} else if (counter == '20' && period == '1') {
			periodPrice = '11 500'
		} else if (counter == '20' && period == '2') {
			periodPrice = '23 000'
		} else if (counter == '20' && period == '3') {
			periodPrice = '34 000'
		};

		switch (choice) {
			case '1': choiceText.innerText = messages[0]; break;
			case '2': choiceText.innerText = messages[1]; break;
			default: choiceText.innerText = messages[2];
		};

		let pricePlaces: any = document.querySelectorAll('[periodPrice]');
		let counterPlaces: any = document.querySelectorAll('[counterPlace]');
		let placingNode: any = document.querySelectorAll('[placingNode]');
		let productionNode: any = document.querySelectorAll('[productionNode]');

		for (let item of pricePlaces) {
			item.innerText = `${periodPrice} рублей`
		};
		for (let item of counterPlaces) {
			item.innerText = counter
		};
		for (let item of placingNode) {
			if (choice == '2') {
				item.style.display = 'none'
			} else {
				item.style.display = 'block'
			}
		};
		for (let item of productionNode) {
			if (choice == '1') {
				item.style.display = 'none'
			} else {
				item.style.display = 'block'
			}
		};
	};

	document.getElementById('footerButton').addEventListener('click', (e) => {
		e.preventDefault();
		document.getElementById('overlay').classList.toggle('_opened')
	});

	document.getElementById('modalClose').addEventListener('click', (e) => {
		e.preventDefault();
		document.getElementById('overlay').classList.remove('_opened')
	});

	const confirm = {
		title: 'Секундочку!',
		text: 'Отправляем данные...',
		type: 'info',
		showConfirmButton: false,
		allowOutsideClick: false
	},
		success = {
			title: 'Отлично!',
			text: 'Мы скоро с Вами свяжемся!',
			type: 'success',
			showCloseButton: true
		},
		error = {
			title: 'Упс...',
			text: 'Что-то пошло не так! Проверьте правильность данных!',
			type: 'error',
			showCloseButton: true
		};


	document.getElementById('modalButton').addEventListener('click', modalSend() );

	function modalSend(): any {

		let modalName: string = $('#modalName').val();
		let modalPhone: string = $('#modalPhone').val();
		let modalMessage: string = $('#formMsg').val();

		let modalCounter: string = $("#RangeSlider").prop("value");
		let modalPeriod: string = $('[name=period]:checked').val();
		let modalChoice: string = $('[name=choice]:checked').val();

		swal(confirm),
			$.ajax({
				type: 'POST',
				url: '../php/sendmail.php',
				data: {
					modalName,
					modalPhone,
					modalMessage,
					modalCounter,
					modalPeriod,
					modalChoice
				},
				cache: false,
				success: function(response) {
					console.log(data);
					if (response == 1) {
						swal(success)
					} else {
						swal(error)
					}
				}
			})
    }

});
