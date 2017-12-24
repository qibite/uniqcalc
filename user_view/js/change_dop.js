jQuery(document).ready(($)=>{
/************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																						Функции для изменения пульта / джойстика управления
*																																	
*																											ДОП ОПЦИИ
*
*
*
*
*
*
***********************************************************************************************************************************************************************************************************************************/

	$('.dop_menu_open').on('click', '.pult_change', function(event) {

		let pult_upravleniya = document.createElement('div'); // Главное окно выбора пульта
		pult_upravleniya.className = 'pultslider';	

		let pult_upravleniya_close = document.createElement('span'); // Закрыть окно выбора пульта
		pult_upravleniya_close.id = 'closePult';
		pult_upravleniya_close.innerHTML = '<i class="fa fa-times-circle-o" aria-hidden="true"></i>';
		pult_upravleniya.append(pult_upravleniya_close);

		let pult_upravleniya_h2 = document.createElement('H2'); // Заголовок окна выбора пульта
		pult_upravleniya_h2.innerText = 'Выберите тип радиоуправления краном';
		pult_upravleniya_h2.style.marginBottom = '50px';
		pult_upravleniya.append(pult_upravleniya_h2);

		let pult_upravleniya_PULTP = document.createElement('div'); // блок пульт
		pult_upravleniya_PULTP.className = 'pult_upravleniya_PULTP animated zoomInLeft'
		pult_upravleniya_PULTP.style.marginBottom = '50px';
		pult_upravleniya.append(pult_upravleniya_PULTP);
			let pult_upravleniya_PULTP_img = document.createElement('img'); //Картинка подвесого пульта
				pult_upravleniya_PULTP_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.3.png';
				pult_upravleniya_PULTP_img.className = 'allimg change_on_PULTP';
				pult_upravleniya_PULTP.append(pult_upravleniya_PULTP_img);
					pult_upravleniya_PULTP_img.addEventListener('click', function () {
						cran._3Type = 'Подвесной пульт';
					});
			let pult_upravleniya_PULTP_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				pult_upravleniya_PULTP_h4.className = 'change_on_PULTP';
				pult_upravleniya_PULTP_h4.innerText = 'Подвесной пульт - беспланто';
				pult_upravleniya_PULTP.append(pult_upravleniya_PULTP_h4);
					pult_upravleniya_PULTP_h4.addEventListener('click', function () {
						cran._3Type = 'Подвесной пульт';						
					});

		let pult_upravleniya_PULT = document.createElement('div'); // блок пульт
		pult_upravleniya_PULT.className = 'pult_upravleniya_PULT animated zoomIn'
		pult_upravleniya_PULT.style.marginBottom = '50px';
		pult_upravleniya.append(pult_upravleniya_PULT);
			let pult_upravleniya_PULT_img = document.createElement('img'); //Картинка радио пульта
				pult_upravleniya_PULT_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.5.png';
				pult_upravleniya_PULT_img.className = 'allimg change_on_PULT';
				pult_upravleniya_PULT.append(pult_upravleniya_PULT_img);
					pult_upravleniya_PULT_img.addEventListener('click', function () {
						creat_pult_model('Пульт');
						$('h4.change_on_PULT').css({'background-color':'#b5212e','color':'#FFFFFF'});					
						$('h4.change_on_JOY').css({'background-color':'#e4ded5','color':'##242526'});
					});
			let pult_upravleniya_PULT_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				pult_upravleniya_PULT_h4.className = 'change_on_PULT';
				pult_upravleniya_PULT_h4.innerText = 'Радиоуправление с пульта';
				pult_upravleniya_PULT.append(pult_upravleniya_PULT_h4);
					pult_upravleniya_PULT_h4.addEventListener('click', function () {
						creat_pult_model('Пульт');
						$('h4.change_on_PULT').css({'background-color':'#b5212e','color':'#FFFFFF'});					
						$('h4.change_on_JOY').css({'background-color':'#e4ded5','color':'##242526'});
					});
				

		let pult_upravleniya_JOY = document.createElement('div'); // блок джойстик
		pult_upravleniya_JOY.className = 'pult_upravleniya_JOY animated zoomInRight';
		pult_upravleniya_JOY.style.marginBottom = '50px';
		pult_upravleniya.append(pult_upravleniya_JOY);
			let pult_upravleniya_JOY_img = document.createElement('img');
				pult_upravleniya_JOY_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.6.png';
				pult_upravleniya_JOY_img.className = 'allimg change_on_JOY';
				pult_upravleniya_JOY.append(pult_upravleniya_JOY_img);
					pult_upravleniya_JOY_img.addEventListener('click', function () {
						creat_pult_model();
						$('h4.change_on_JOY').css({'background-color':'#b5212e','color':'#FFFFFF'});
						$('h4.change_on_PULT').css({'background-color':'#e4ded5','color':'##242526'});
					});
			let pult_upravleniya_JOY_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				pult_upravleniya_JOY_h4.className = 'change_on_JOY';
				pult_upravleniya_JOY_h4.innerText = 'Радиоуправление с джойстика';
				pult_upravleniya_JOY.append(pult_upravleniya_JOY_h4);
					pult_upravleniya_JOY_h4.addEventListener('click', function () {
						creat_pult_model();
						$('h4.change_on_JOY').css({'background-color':'#b5212e','color':'#FFFFFF'});
						$('h4.change_on_PULT').css({'background-color':'#e4ded5','color':'##242526'});
					});
				

		
		$('html, body').animate({ 'scrollTop':'170px' }, 350)
		$('.zzz').after(pult_upravleniya);

		//////////////////////////////////////////////////////
		function creat_pult_model (pult_or_joy) {			
			if (pult_or_joy == 'Пульт')
			{
				var data_pult = { action: 'calc_pults', _pult_TELECRANE_id:get_pult_id('Пульт Telecrane', 'id'), _pult_IKUSI_id:get_pult_id('Пульт Ikusi', 'id'), _pult_HBC_id:get_pult_id('Пульт HBC', 'id') }
				$.post( calc_ajaxurl.url, data_pult, function (response) {
					let results = JSON.parse(response);

					if ($('div').is('.joy_d')) {$('.pultslider').children('.pult_upravleniya_TELECRANE, .pult_upravleniya_IKUSI, .pult_upravleniya_HBRRadiomatic').remove()}
					if ($('div').is('.pult_d')) {return}
						easyscroll(380);
					let pult_upravleniya_TELECRANE = document.createElement('div'); // блок пульт
						pult_upravleniya_TELECRANE.className = 'pult_d pult_upravleniya_TELECRANE animated fadeInLeftBig'
						pult_upravleniya.append(pult_upravleniya_TELECRANE);
					let pult_upravleniya_TELECRANE_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_TELECRANE_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.7.png';
						pult_upravleniya_TELECRANE.style.marginLeft = '4%';
						pult_upravleniya_TELECRANE_img.className = 'allimg change_on_TELECRANE';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_img);
							pult_upravleniya_TELECRANE_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с пультом Telecrane (Тайвань)';
							});

					let pult_upravleniya_TELECRANE_price = document.createElement('span');
						pult_upravleniya_TELECRANE_price.className = 'price_in_change';
						pult_upravleniya_TELECRANE_price.innerText = String(Number(results.pTELECRANE).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_price);

					let pult_upravleniya_TELECRANE_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_TELECRANE_h4.className = 'change_on_TELECRANE';
						pult_upravleniya_TELECRANE_h4.innerText = 'Telecrane (Тайвань)';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_h4);
							pult_upravleniya_TELECRANE_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с пультом Telecrane (Тайвань)';
							});


					let pult_upravleniya_IKUSI = document.createElement('div'); // блок пульт
						pult_upravleniya_IKUSI.className = 'pult_upravleniya_IKUSI animated zoomIn'
						pult_upravleniya.append(pult_upravleniya_IKUSI);
					let pult_upravleniya_IKUSI_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_IKUSI_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.8.png';
						pult_upravleniya_IKUSI_img.className = 'allimg change_on_IKUSI';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_img);
							pult_upravleniya_IKUSI_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с пультом Ikusi (Испания)';
							});
							
					let pult_upravleniya_IKUSI_price = document.createElement('span');
						pult_upravleniya_IKUSI_price.className = 'price_in_change';
						pult_upravleniya_IKUSI_price.innerText = String(Number(results.pIKUSI).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_price);

					let pult_upravleniya_IKUSI_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_IKUSI_h4.className = 'change_on_IKUSI';
						pult_upravleniya_IKUSI_h4.innerText = 'Ikusi (Испания)';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_h4);
							pult_upravleniya_IKUSI_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с пультом Ikusi (Испания)';
							});


					let pult_upravleniya_HBRRadiomatic = document.createElement('div'); // блок пульт
						pult_upravleniya_HBRRadiomatic.className = 'pult_upravleniya_HBRRadiomatic animated fadeInRightBig'
						pult_upravleniya.append(pult_upravleniya_HBRRadiomatic);
					let pult_upravleniya_HBRRadiomatic_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_HBRRadiomatic_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.9.png';
						pult_upravleniya_HBRRadiomatic_img.className = 'allimg change_on_HBRRadiomatic';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_img);
							pult_upravleniya_HBRRadiomatic_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с пультом HBC-Radiomatic (Германия)';
							});
							
					let pult_upravleniya_HBRRadiomatic_price = document.createElement('span');
						pult_upravleniya_HBRRadiomatic_price.className = 'price_in_change';
						pult_upravleniya_HBRRadiomatic_price.innerText = String(Number(results.pHBC).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_price);

					let pult_upravleniya_HBRRadiomatic_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_HBRRadiomatic_h4.className = 'change_on_HBRRadiomatic';
						pult_upravleniya_HBRRadiomatic_h4.innerText = 'HBC - Radiomatic (Германия)';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_h4);
							pult_upravleniya_HBRRadiomatic_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с пультом HBC-Radiomatic (Германия)';
							});
					
				});
			}
			else
			{
				var data_pult = { action: 'calc_joy', _joy_TELECRANE_id:get_pult_id('Joy Telecrane', 'id'), _joy_IKUSI_id:get_pult_id('Joy Ikusi', 'id'), _joy_HBC_id:get_pult_id('Joy HBC', 'id') }
				$.post( calc_ajaxurl.url, data_pult, function (response) {
					let results = JSON.parse(response);

					if ($('div').is('.pult_d')) {$('.pultslider').children('.pult_upravleniya_TELECRANE, .pult_upravleniya_IKUSI, .pult_upravleniya_HBRRadiomatic').remove()}						
					if ($('div').is('.joy_d')) {return}
						easyscroll(380);
					let pult_upravleniya_TELECRANE = document.createElement('div'); // блок пульт
						pult_upravleniya_TELECRANE.className = 'joy_d pult_upravleniya_TELECRANE animated fadeInLeftBig'
						pult_upravleniya.append(pult_upravleniya_TELECRANE);
					let pult_upravleniya_TELECRANE_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_TELECRANE_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.7.png';
						pult_upravleniya_TELECRANE.style.marginLeft = '4%';
						pult_upravleniya_TELECRANE_img.className = 'allimg change_on_TELECRANE';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_img);
							pult_upravleniya_TELECRANE_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком Telecrane (Тайвань)';
							});

					let pult_upravleniya_TELECRANE_price = document.createElement('span');
						pult_upravleniya_TELECRANE_price.className = 'price_in_change';
						pult_upravleniya_TELECRANE_price.innerText = String(Number(results.jTELECRANE).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_price);

					let pult_upravleniya_TELECRANE_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_TELECRANE_h4.className = 'change_on_TELECRANE';
						pult_upravleniya_TELECRANE_h4.innerText = 'Telecrane (Тайвань)';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_h4);
							pult_upravleniya_TELECRANE_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком Telecrane (Тайвань)';
							});


					let pult_upravleniya_IKUSI = document.createElement('div'); // блок пульт
						pult_upravleniya_IKUSI.className = 'pult_upravleniya_IKUSI animated zoomIn'
						pult_upravleniya.append(pult_upravleniya_IKUSI);
					let pult_upravleniya_IKUSI_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_IKUSI_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.8.png';
						pult_upravleniya_IKUSI_img.className = 'allimg change_on_IKUSI';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_img);
							pult_upravleniya_IKUSI_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком Ikusi (Испания)';
							});
							
					let pult_upravleniya_IKUSI_price = document.createElement('span');
						pult_upravleniya_IKUSI_price.className = 'price_in_change';
						pult_upravleniya_IKUSI_price.innerText = String(Number(results.jIKUSI).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_price);

					let pult_upravleniya_IKUSI_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_IKUSI_h4.className = 'change_on_IKUSI';
						pult_upravleniya_IKUSI_h4.innerText = 'Ikusi (Испания)';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_h4);
							pult_upravleniya_IKUSI_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком Ikusi (Испания)';
							});


					let pult_upravleniya_HBRRadiomatic = document.createElement('div'); // блок пульт
						pult_upravleniya_HBRRadiomatic.className = 'pult_upravleniya_HBRRadiomatic animated fadeInRightBig'
						pult_upravleniya.append(pult_upravleniya_HBRRadiomatic);
					let pult_upravleniya_HBRRadiomatic_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_HBRRadiomatic_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.9.png';
						pult_upravleniya_HBRRadiomatic_img.className = 'allimg change_on_HBRRadiomatic';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_img);
							pult_upravleniya_HBRRadiomatic_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком HBC-Radiomatic (Германия)';
							});
							
					let pult_upravleniya_HBRRadiomatic_price = document.createElement('span');
						pult_upravleniya_HBRRadiomatic_price.className = 'price_in_change';
						pult_upravleniya_HBRRadiomatic_price.innerText = String(Number(results.jHBC).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_price);

					let pult_upravleniya_HBRRadiomatic_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_HBRRadiomatic_h4.className = 'change_on_HBRRadiomatic';
						pult_upravleniya_HBRRadiomatic_h4.innerText = 'HBC - Radiomatic (Германия)';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_h4);
							pult_upravleniya_HBRRadiomatic_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком HBC-Radiomatic (Германия)';
							});
					
				})
			}
		}
			
	})

	$('body').on('click', '#closePult', function(event) {
		$(this).parent('.pultslider').detach();
		$('html, body').animate({ 'scrollTop':'900px' }, 400)
	})
	$('body').on('click', '.change_on_PULTP, .change_on_TELECRANE, .change_on_IKUSI, .change_on_HBRRadiomatic', function(event) {
		$(this).parent().parent('.pultslider').detach();
		$('.pult_change').parent('.dop_parametr').detach();
		$('html, body').animate({ 'scrollTop':'900px' }, 400);
		cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;
		if ($(this).parent('.pult_upravleniya_PULTP')) {
			$('#option_2 .dop_parametr:last-child').before(()=>{
				let new_html = '<div class="dop_parametr"> \
					<span class="change_this_option pult_change">Изменить \
						<i class="fa fa-pencil-square" aria-hidden="true"></i> \
					</span> \
					<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.3.png" alt="" class="pult_change" style="width:200px"> \
					<h4>Подвесной пульт</h4> \
					<p> \
						<span class="opisanie_parametra">Входит в стоимость крана</span> \
						<br> \
						<span class="stoimost_parametra">Без доплаты</span><i class="id_bro">b3</i> \
					</p>';
					return new_html;
			});
		}
	})

/************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																						Функции для изменения мотор-редуктора
*																																	
*																								      ДОП ОПЦИИ
*
*
*
*
*
*
***********************************************************************************************************************************************************************************************************************************/
	$('.dop_menu_open').on('click', '.motor_reductor_change', function(event) {
		var data_motor = { action: 'calc_motors', _motor_gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
		$.post( calc_ajaxurl.url, data_motor, function (response) { 
			let results = JSON.parse(response)

			let motor_reductor = document.createElement('div'); // Главное окно выбора пульта
			motor_reductor.className = 'motor_reductor_slider';	

			let motor_reductor_close = document.createElement('span'); // Закрыть окно выбора пульта
			motor_reductor_close.id = 'closeMotorReductor';
			motor_reductor_close.innerHTML = '<i class="fa fa-times-circle-o" aria-hidden="true"></i>';
			motor_reductor.append(motor_reductor_close);

			let motor_reductor_h2 = document.createElement('H2'); // Заголовок окна выбора пульта
			motor_reductor_h2.innerText = 'Выберите мотор-редуктор';
			motor_reductor_h2.style.marginBottom = '50px';
			motor_reductor.append(motor_reductor_h2);
			/*********************************************************************************************************************************/
		
			let motor_reductor_9_1 = document.createElement('div'); // блок пульт
			motor_reductor_9_1.className = 'motor_reductor_9_1 animated zoomInLeft'
			motor_reductor_9_1.style.marginBottom = '50px';
			motor_reductor.append(motor_reductor_9_1);
			let motor_reductor_9_1_img = document.createElement('img'); //Картинка радио пульта
				motor_reductor_9_1_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/9.1.png';
				motor_reductor_9_1_img.className = 'allimg change_on_9_1';
				motor_reductor_9_1.append(motor_reductor_9_1_img);
					motor_reductor_9_1_img.addEventListener('click', function () {
						cran.code_of_motor = 9.1;
						cran.setmotor = 'Червячная передача ABLE (Италия)';
					});
			let motor_reductor_9_1_price = document.createElement('span');
				motor_reductor_9_1_price.className = 'price_in_change';
				motor_reductor_9_1_price.innerText ='Без доплаты';
				motor_reductor_9_1.append(motor_reductor_9_1_price);

			let motor_reductor_9_1_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				motor_reductor_9_1_h4.className = 'change_on_9_1';
				motor_reductor_9_1_h4.innerText = 'Червячная передача ABLE (Италия)';
				motor_reductor_9_1.append(motor_reductor_9_1_h4);
					motor_reductor_9_1_h4.addEventListener('click', function () {
						cran.code_of_motor = 9.1;
						cran.setmotor = 'Червячная передача ABLE (Италия)';
					});
			/*********************************************************************************************************************************/
			/*********************************************************************************************************************************/
		
			let motor_reductor_9_2 = document.createElement('div'); // блок пульт
			motor_reductor_9_2.className = 'motor_reductor_9_2 animated zoomIn'
			motor_reductor_9_2.style.marginBottom = '50px';
			motor_reductor.append(motor_reductor_9_2);
			let motor_reductor_9_2_img = document.createElement('img'); //Картинка радио пульта
				motor_reductor_9_2_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/9.2.png';
				motor_reductor_9_2_img.className = 'allimg change_on_9_2';
				motor_reductor_9_2.append(motor_reductor_9_2_img);
					motor_reductor_9_2_img.addEventListener('click', function () {
						cran.code_of_motor = 9.2;
						cran.setmotor = 'Червячная передача NORD (Германия)';
					});
			let motor_reductor_9_2_price = document.createElement('span');
				motor_reductor_9_2_price.className = 'price_in_change';
				motor_reductor_9_2_price.innerText = String(Number(results.p9_2).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
				motor_reductor_9_2.append(motor_reductor_9_2_price);

			let motor_reductor_9_2_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				motor_reductor_9_2_h4.className = 'change_on_9_2';
				motor_reductor_9_2_h4.innerText = 'Червячная передача NORD (Германия)';
				motor_reductor_9_2.append(motor_reductor_9_2_h4);
					motor_reductor_9_2_h4.addEventListener('click', function () {
						cran.code_of_motor = 9.2;
						cran.setmotor = 'Червячная передача NORD (Германия)';
					});
			/*********************************************************************************************************************************/
			let motor_reductor_9_3 = document.createElement('div'); // блок пульт
			motor_reductor_9_3.className = 'motor_reductor_9_3 animated zoomInRight'
			motor_reductor_9_3.style.marginBottom = '50px';
			motor_reductor.append(motor_reductor_9_3);
				let motor_reductor_9_3_img = document.createElement('img'); //Картинка радио пульта
					motor_reductor_9_3_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/9.3.png';
					motor_reductor_9_3_img.className = 'allimg change_on_9_3';
					motor_reductor_9_3.append(motor_reductor_9_3_img);
						motor_reductor_9_3_img.addEventListener('click', function () {
							cran.code_of_motor = 9.3;
							cran.setmotor = 'Циллиндрическая передача Балкан Эхо (Болгария)';
						});

				let motor_reductor_9_3_price = document.createElement('span');
					motor_reductor_9_3_price.className = 'price_in_change';
					motor_reductor_9_3_price.innerText = String(Number(results.p9_3).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
					motor_reductor_9_3.append(motor_reductor_9_3_price);

				let motor_reductor_9_3_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
					motor_reductor_9_3_h4.className = 'change_on_9_3';
					motor_reductor_9_3_h4.innerText = 'Циллиндрическая передача Балкан Эхо (Болгария)';
					motor_reductor_9_3.append(motor_reductor_9_3_h4);
						motor_reductor_9_3_h4.addEventListener('click', function () {
							cran.code_of_motor = 9.3;
							cran.setmotor = 'Циллиндрическая передача Балкан Эхо (Болгария)';
						});
		/*********************************************************************************************************************************/
			let motor_reductor_9_4 = document.createElement('div'); // блок пульт
			motor_reductor_9_4.className = 'motor_reductor_9_4 animated zoomInLeft'
			motor_reductor_9_4.style.margin = '0 0 50px 22%';
			motor_reductor.append(motor_reductor_9_4);
				let motor_reductor_9_4_img = document.createElement('img'); //Картинка радио пульта
					motor_reductor_9_4_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/9.4.png';
					motor_reductor_9_4_img.className = 'allimg change_on_9_4';
					motor_reductor_9_4.append(motor_reductor_9_4_img);
						motor_reductor_9_4_img.addEventListener('click', function () {
							cran.code_of_motor = 9.4;
							cran.setmotor = 'Циллиндрическая передача NORD (Германия)';
						});
						
				let motor_reductor_9_4_price = document.createElement('span');
					motor_reductor_9_4_price.className = 'price_in_change';
					motor_reductor_9_4_price.innerText = String(Number(results.p9_4).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
					motor_reductor_9_4.append(motor_reductor_9_4_price);

				let motor_reductor_9_4_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
					motor_reductor_9_4_h4.className = 'change_on_9_4';
					motor_reductor_9_4_h4.innerText = 'Циллиндрическая передача NORD (Германия)';
					motor_reductor_9_4.append(motor_reductor_9_4_h4);
						motor_reductor_9_4_h4.addEventListener('click', function () {
							cran.code_of_motor = 9.4;
							cran.setmotor = 'Циллиндрическая передача NORD (Германия)';
					});
		/*********************************************************************************************************************************/
			let motor_reductor_9_5 = document.createElement('div'); // блок пульт
			motor_reductor_9_5.className = 'motor_reductor_9_5 animated zoomInRight'
			motor_reductor_9_5.style.marginLeft = '6.5%'
			motor_reductor_9_5.style.marginBottom = '50px';
			motor_reductor.append(motor_reductor_9_5);
				let motor_reductor_9_5_img = document.createElement('img'); //Картинка радио пульта
					motor_reductor_9_5_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/9.5.png';
					motor_reductor_9_5_img.className = 'allimg change_on_9_5';
					motor_reductor_9_5.append(motor_reductor_9_5_img);
						motor_reductor_9_5_img.addEventListener('click', function () {
							cran.code_of_motor = 9.5;
							cran.setmotor = 'Циллиндрическая передача Европривод (Россия)';
						});
						
				let motor_reductor_9_5_price = document.createElement('span');
					motor_reductor_9_5_price.className = 'price_in_change';
					motor_reductor_9_5_price.innerText = String(Number(results.p9_5).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
					motor_reductor_9_5.append(motor_reductor_9_5_price);

				let motor_reductor_9_5_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
					motor_reductor_9_5_h4.className = 'change_on_9_5';
					motor_reductor_9_5_h4.innerText = 'Циллиндрическая передача Европривод (Россия)';
					motor_reductor_9_5.append(motor_reductor_9_5_h4);
						motor_reductor_9_5_h4.addEventListener('click', function () {
							cran.code_of_motor = 9.5;
							cran.setmotor = 'Циллиндрическая передача Европривод (Россия)';
					});
		
			
				$('html, body').animate({ 'scrollTop':'170px' }, 350)
				$('.zzz').after(motor_reductor);
		});
	})

	$('body').on('click', '#closeMotorReductor', function(event) {
		$(this).parent('.motor_reductor_slider').detach();
		$('html, body').animate({ 'scrollTop':'900px' }, 400)
	})
	$('body').on('click', '.change_on_9_1, .change_on_9_2, .change_on_9_3, .change_on_9_4, .change_on_9_5', function(event) {
		$(this).parent().parent('.motor_reductor_slider').detach();
		$('.motor_reductor_change').parent('.dop_parametr').detach();
		cran.motor_price(cran.code_of_motor)
		$('html, body').animate({ 'scrollTop':'900px' }, 400);
	})
/************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																						Функции для изменения ПРЕОБРАЗОВАТЕЛЯ
*																																	
*																									  ДОП ОПЦИИ
*
*
*
*
*
*
***********************************************************************************************************************************************************************************************************************************/
	$('.dop_menu_open').on('click', '.preobrazovatel_change', function(event) {

		console.log(get_preobrazovatel_id(8.5))
		console.log(get_preobrazovatel_id(8.6))
		console.log(get_preobrazovatel_id(8.7))
		var data_preobrazovatel = { action: 'calc_preobrazovatel',  _preobrazovatel_id_8_5:get_preobrazovatel_id(8.5), _preobrazovatel_id_8_6:get_preobrazovatel_id(8.6), _preobrazovatel_id_8_7:get_preobrazovatel_id(8.7), _motor_code:cran.code_of_motor,  _motor_gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP  }
		$.post( calc_ajaxurl.url, data_preobrazovatel, function (response) {
			let results = JSON.parse(response)

			let preobrazovatel = document.createElement('div'); // Главное окно выбора пульта
			preobrazovatel.className = 'preobrazovatel_slider';	

			let preobrazovatel_close = document.createElement('span'); // Закрыть окно выбора пульта
			preobrazovatel_close.id = 'closePreobrazovatel';
			preobrazovatel_close.innerHTML = '<i class="fa fa-times-circle-o" aria-hidden="true"></i>';
			preobrazovatel.append(preobrazovatel_close);

			let preobrazovatel_h2 = document.createElement('H2'); // Заголовок окна выбора пульта
			preobrazovatel_h2.innerText = 'Выберите тип движения крана';
			preobrazovatel_h2.style.marginBottom = '50px';
			preobrazovatel.append(preobrazovatel_h2);
		/*********************************************************************************************************************************/
		
		let preobrazovatel_8_3 = document.createElement('div'); // блок пульт
			preobrazovatel_8_3.className = 'preobrazovatel_8_3 animated zoomInLeft'
			preobrazovatel_8_3.style.marginBottom = '50px';
			preobrazovatel_8_3.style.marginLeft = '216px';
			preobrazovatel.append(preobrazovatel_8_3);
			let preobrazovatel_8_3_img = document.createElement('img'); //Картинка радио пульта
				preobrazovatel_8_3_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.3.png';
				preobrazovatel_8_3_img.className = 'allimg change_on_8_3';
				preobrazovatel_8_3.append(preobrazovatel_8_3_img);
					preobrazovatel_8_3_img.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.3';
						cran.setspeed = 'Одна скорость движения';
					});
			let preobrazovatel_8_3_price = document.createElement('span');
				preobrazovatel_8_3_price.className = 'price_in_change';
				preobrazovatel_8_3_price.innerText =  'Без доплаты';
				preobrazovatel_8_3.append(preobrazovatel_8_3_price);

			let preobrazovatel_8_3_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_3_h4.className = 'change_on_8_3';
				preobrazovatel_8_3_h4.innerText = 'Релейно-контакторный одна скорость движения';
				preobrazovatel_8_3.append(preobrazovatel_8_3_h4);
					preobrazovatel_8_3_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.3';
						cran.setspeed = 'Одна скорость движения';

					});
		/*********************************************************************************************************************************/
		
		let preobrazovatel_8_4 = document.createElement('div'); // блок пульт
			preobrazovatel_8_4.className = 'preobrazovatel_8_4 animated zoomInRight'
			preobrazovatel_8_4.style.marginBottom = '50px';
			preobrazovatel_8_4.style.marginLeft = '96px';
			preobrazovatel.append(preobrazovatel_8_4);
			let preobrazovatel_8_4_img = document.createElement('img'); //Картинка радио пульта
				preobrazovatel_8_4_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.4.png';
				preobrazovatel_8_4_img.className = 'allimg change_on_8_4';
				preobrazovatel_8_4.append(preobrazovatel_8_4_img);
					preobrazovatel_8_4_img.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.4';
						cran.setspeed = 'Несколько скоростей движения';
					});
			let preobrazovatel_8_4_price = document.createElement('span');
				preobrazovatel_8_4_price.className = 'price_in_change';
				preobrazovatel_8_4_price.innerText =  String(Number(results.preo8_4).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
				preobrazovatel_8_4.append(preobrazovatel_8_4_price);

			let preobrazovatel_8_4_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_4_h4.className = 'change_on_8_4';
				preobrazovatel_8_4_h4.innerText = 'Релейно-контакторный Несколько скоростей движения';
				preobrazovatel_8_4.append(preobrazovatel_8_4_h4);
					preobrazovatel_8_4_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.4';
						cran.setspeed = 'Несколько скоростей движения';

					});
			let  clr_pr = document.createElement('div'); clr_pr.style.clear = 'both'; preobrazovatel.append(clr_pr);
		/*********************************************************************************************************************************/
		
		let preobrazovatel_8_5 = document.createElement('div'); // блок пульт
			preobrazovatel_8_5.className = 'preobrazovatel_8_5 animated zoomInLeft'
			preobrazovatel_8_5.style.marginBottom = '50px';
			preobrazovatel.append(preobrazovatel_8_5);
			let preobrazovatel_8_5_img = document.createElement('img'); //Картинка радио пульта
				preobrazovatel_8_5_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.5.png';
				preobrazovatel_8_5_img.className = 'allimg change_on_8_5';
				preobrazovatel_8_5.append(preobrazovatel_8_5_img);
					preobrazovatel_8_5_img.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.5';
						cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';
					});
			let preobrazovatel_8_5_price = document.createElement('span');
				preobrazovatel_8_5_price.className = 'price_in_change';
				preobrazovatel_8_5_price.innerText = String(Number(results.preo8_5).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
				preobrazovatel_8_5.append(preobrazovatel_8_5_price);

			let preobrazovatel_8_5_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_5_h4.className = 'change_on_8_5';
				preobrazovatel_8_5_h4.innerText = 'Плавный пуск + 2 и более скорости ESQ (Китай)';
				preobrazovatel_8_5.append(preobrazovatel_8_5_h4);
					preobrazovatel_8_5_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.5';
						cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';

					});
		/*********************************************************************************************************************************/
		
		let preobrazovatel_8_6 = document.createElement('div'); // блок пульт
			preobrazovatel_8_6.className = 'preobrazovatel_8_6 animated zoomIn'
			preobrazovatel_8_6.style.marginBottom = '50px';
			preobrazovatel.append(preobrazovatel_8_6);
			let preobrazovatel_8_6_img = document.createElement('img'); //Картинка радио пульта
				preobrazovatel_8_6_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.6.png';
				preobrazovatel_8_6_img.className = 'allimg change_on_8_6';
				preobrazovatel_8_6.append(preobrazovatel_8_6_img);
					preobrazovatel_8_6_img.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.6';
						cran.setspeed = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';
					});
			let preobrazovatel_8_6_price = document.createElement('span');
				preobrazovatel_8_6_price.className = 'price_in_change';
				preobrazovatel_8_6_price.innerText = String(Number(results.preo8_6).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
				preobrazovatel_8_6.append(preobrazovatel_8_6_price);

			let preobrazovatel_8_6_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_6_h4.className = 'change_on_8_6';
				preobrazovatel_8_6_h4.innerText = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';
				preobrazovatel_8_6.append(preobrazovatel_8_6_h4);
					preobrazovatel_8_6_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.6';
						cran.setspeed = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';

					});
		/*********************************************************************************************************************************/
		
		let preobrazovatel_8_7 = document.createElement('div'); // блок пульт
			preobrazovatel_8_7.className = 'preobrazovatel_8_7 animated zoomInRight'
			preobrazovatel_8_7.style.marginBottom = '50px';
			preobrazovatel.append(preobrazovatel_8_7);
			let preobrazovatel_8_7_img = document.createElement('img'); //Картинка радио пульта
				preobrazovatel_8_7_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.7.png';
				preobrazovatel_8_7_img.className = 'allimg change_on_8_7';
				preobrazovatel_8_7.append(preobrazovatel_8_7_img);
					preobrazovatel_8_7_img.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.7';
						cran.setspeed = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';	
					});
			let preobrazovatel_8_7_price = document.createElement('span');
				preobrazovatel_8_7_price.className = 'price_in_change';
				preobrazovatel_8_7_price.innerText = String(Number(results.preo8_7).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' руб';
				preobrazovatel_8_7.append(preobrazovatel_8_7_price);

			let preobrazovatel_8_7_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_7_h4.className = 'change_on_8_7';
				preobrazovatel_8_7_h4.innerText = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';
				preobrazovatel_8_7.append(preobrazovatel_8_7_h4);
					preobrazovatel_8_7_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.7';
						cran.setspeed = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';	

					});
			
			$('html, body').animate({ 'scrollTop':'170px' }, 350)
			$('.zzz').after(preobrazovatel);
		});
	})

	$('body').on('click', '#closePreobrazovatel', function(event) {
		$(this).parent('.preobrazovatel_slider').detach();
		$('html, body').animate({ 'scrollTop':'900px' }, 400)
	})
	$('body').on('click', '.change_on_8_5, .change_on_8_6, .change_on_8_7', function(event) {
		$(this).parent().parent('.preobrazovatel_slider').detach();
		$('.preobrazovatel_change').parent('.dop_parametr').detach();
		cran.chastotnik_price(cran.code_of_chastotnik)
		$('html, body').animate({ 'scrollTop':'900px' }, 400);
		if ($('.return_pult_default')) {$('.return_pult_default').parent().detach();cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;}
	})
	$('body').on('click', '.change_on_8_4', function(event) {
		$(this).parent().parent('.preobrazovatel_slider').detach();
		$('.preobrazovatel_change').parent('.dop_parametr').detach();
		cran.double_speed(cran.code_of_chastotnik)
		$('html, body').animate({ 'scrollTop':'900px' }, 400);
		if ($('.return_pult_default')) {$('.return_pult_default').parent().detach();cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;}
	})
	$('body').on('click', '.change_on_8_3', function(event) {
		$(this).parent().parent('.preobrazovatel_slider').detach();
		$('.preobrazovatel_change').parent('.dop_parametr').detach();
		$('#option_2 .dop_parametr:last-child').before(()=>{
			let new_html = '<div class="dop_parametr"> \
				<span class="change_this_option preobrazovatel_change">Изменить \
					<i class="fa fa-pencil-square" aria-hidden="true"></i> \
				</span> \
				<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.3.png" alt="" class="preobrazovatel_change" style="width:200px"> \
				<h4>Система управления</h4> \
				<p> \
					<span class="opisanie_parametra">Релейно-контакторная одна скорость движения</span> \
						<br> \
					<span class="stoimost_parametra">Без доплаты</span><i class="id_bro">b8</i> \
				</p>';
			return new_html;
		});
		$('html, body').animate({ 'scrollTop':'900px' }, 400);
		if ($('.return_pult_default')) {$('.return_pult_default').parent().detach();cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;}
	})
/************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																						Функции для изменения ПРЕОБРАЗОВАТЕЛЯ
*																																	
*																									  ДОП ОПЦИИ
*
*
*
*
*
*
***********************************************************************************************************************************************************************************************************************************/
	$('.dop_menu_open').on('click', '.preobrazovatel_change', function(event) {
	//	var data_motor = { action: 'calc_motors', _motor_id_9_2:get_motor_id(9.2, 'id'), _motor_id_9_3:get_motor_id(9.3, 'id'), _motor_id_9_4:get_motor_id(9.4, 'id'), _motor_id_9_5:get_motor_id(9.5, 'id') }
		//$.post( calc_ajaxurl.url, data_motor, function (response) {
			//let results = JSON.parse(response)

			let preobrazovatel = document.createElement('div'); // Главное окно выбора пульта
			preobrazovatel.className = 'preobrazovatel_slider';	

			let preobrazovatel_close = document.createElement('span'); // Закрыть окно выбора пульта
			preobrazovatel_close.id = 'closePreobrazovatel';
			preobrazovatel_close.innerHTML = '<i class="fa fa-times-circle-o" aria-hidden="true"></i>';
			preobrazovatel.append(preobrazovatel_close);

			let preobrazovatel_h2 = document.createElement('H2'); // Заголовок окна выбора пульта
			preobrazovatel_h2.innerText = 'Выберите преобразователь';
			preobrazovatel_h2.style.marginBottom = '50px';
			preobrazovatel.append(preobrazovatel_h2);
		/*********************************************************************************************************************************/
		
		let preobrazovatel_8_4 = document.createElement('div'); // блок пульт
			preobrazovatel_8_4.className = 'preobrazovatel_8_4 animated zoomInLeft'
			preobrazovatel_8_4.style.marginBottom = '50px';
			preobrazovatel.append(preobrazovatel_8_4);
			let preobrazovatel_8_4_img = document.createElement('img'); //Картинка радио пульта
				preobrazovatel_8_4_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/nophotos.png';
				preobrazovatel_8_4_img.className = 'allimg change_on_8_4';
				preobrazovatel_8_4.append(preobrazovatel_8_4_img);
					preobrazovatel_8_4_img.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.4';
						cran.setspeed = 'Несколько скоростей движения';
					});
			let preobrazovatel_8_4_price = document.createElement('span');
				preobrazovatel_8_4_price.className = 'price_in_change';
				preobrazovatel_8_4_price.innerText = '800 руб';
				preobrazovatel_8_4.append(preobrazovatel_8_4_price);

			let preobrazovatel_8_4_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_4_h4.className = 'change_on_8_4';
				preobrazovatel_8_4_h4.innerText = 'Несколько скоростей движения';
				preobrazovatel_8_4.append(preobrazovatel_8_4_h4);
					preobrazovatel_8_4_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.4';
						cran.setspeed = 'Несколько скоростей движения';

					});
		/*********************************************************************************************************************************/

	//	});
	})

	$('body').on('click', '#closePreobrazovatel', function(event) {
		$(this).parent('.preobrazovatel_slider').detach();
		$('html, body').animate({ 'scrollTop':'900px' }, 400)
	})
	$('body').on('click', '.change_on_8_4, .change_on_8_5, .change_on_8_6, .change_on_8_7', function(event) {
		$(this).parent().parent('.preobrazovatel_slider').detach();
		$('.preobrazovatel_change').parent('.dop_parametr').detach();
		//cran.calculate_tal()
		$('html, body').animate({ 'scrollTop':'900px' }, 400);
	})


















/****************************************************************************************************************************************************************************************************************************************
*********************************************************************************************          Функции для фильтрации         ***************************************************************************************************
****************************************************************************************************************************************************************************************************************************************/
// ВЫЧИСЛЕНИЕ ПУЛЬТА
function get_pult_id (pult_model, type /*option*/) {
	var pult_code;
	switch (pult_model) {
		case 'Пульт Telecrane':
			pult_code = 
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3') ? {id:1, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.2' || '8.4') ? {id:2, img:'3.7'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran.code_of_chastotnik == '8.3') ? {id:3, img:'3.7'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran.code_of_chastotnik == '8.2' || '8.4') ? {id:4, img:'3.7'}:false)
				||				
				0;
				switch (type) {
					case 'img':
						return pult_code.img;
						break;
					default:
						return pult_code.id;
						break;
				}	
			break;
		case 'Пульт Ikusi':
			pult_code =
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3') ? {id:6, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.2' || '8.4') ? {id:7, img:'3.8'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran.code_of_chastotnik == '8.3') ? {id:8, img:'3.8'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran.code_of_chastotnik == '8.2' || '8.4') ? {id:9, img:'3.8'}:false)
				||
				0;
				switch (type) {
					case 'img':
						return pult_code.img;
						break;
					default:
						return pult_code.id;
						break;
				}	
			break;
		case 'Пульт HBC':
			pult_code =
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3') ? {id:11, img:'3.9'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.2' || '8.4') ? {id:12, img:'3.9'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran.code_of_chastotnik == '8.3') ? {id:13, img:'3.9'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran.code_of_chastotnik == '8.2' || '8.4') ? {id:14, img:'3.9'}:false)
				||
				0;
				switch (type) {
					case 'img':
						return pult_code.img;
						break;
					default:
						return pult_code.id;
						break;
				}	
			break;
		case 'Joy Telecrane':
			pult_code =
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3' || '8.2' || '8.4') ? {id:5, img:'3.7'}:false)
				||
				0;
				switch (type) {
					case 'img':
						return pult_code.img;
						break;
					default:
						return pult_code.id;
						break;
				}	
			break;
		case 'Joy Ikusi':
			pult_code =
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3' || '8.2' || '8.4') ? {id:10, img:'3.8'}:false)
				||
				0;
				switch (type) {
					case 'img':
						return pult_code.img;
						break;
					default:
						return pult_code.id;
						break;
				}	
			break;
		case 'Joy HBC':
			pult_code =
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3' || '8.2' || '8.4') ? {id:15, img:'3.9'}:false)
				||
				0;
				switch (type) {
					case 'img':
						return pult_code.img;
						break;
					default:
						return pult_code.id;
						break;
				}	
			break;
		default:
			pult_code = 0;
				console.log('Ошибка выбора!!!')
			break;
	}
}

// ВЫЧИСЛЕНИЕ МОТОРА
function get_motor_id (model, type) {
	switch (model) {
		case 9.2:
			let moto_price_9_2 =	
				(cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:51, img:'9.2'} :
				(cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:52, img:'9.2'} :

				 	(cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:53, img:'9.2'} :
				 	(cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:54, img:'9.2'} :

				 		(cran.gp == 12500 || cran.gp == 16000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:55, img:'9.2'} :
				 		(cran.gp == 12500 || cran.gp == 16000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:56, img:'9.2'} :
				false;
				switch (type) {
					case 'img':
						return moto_price_9_2.img;
						break;
					default:
						return moto_price_9_2.id;
						break;
				}				
			break;
		case 9.3:
			let moto_price_9_3 =
				(cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:57, img:'9.3'} :
				(cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:58, img:'9.3'} :

				 	(cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:59, img:'9.3'} :
				 	(cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:60, img:'9.3'} :

				 		(cran.gp == 12500 || cran.gp == 16000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:61, img:'9.3'} :
				 		(cran.gp == 12500 || cran.gp == 16000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:62, img:'9.3'} :
				false;
				switch (type) {
					case 'img':
						return moto_price_9_3.img;
						break;
					default:
						return moto_price_9_3.id;
						break;
				}				
			break;
		case 9.4:
			let moto_price_9_4 =
				(cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:63, img:'9.4'} :
				(cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:64, img:'9.4'} :

			 		(cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:65, img:'9.4'} :
			 		(cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:66, img:'9.4'} :

			 			(cran.gp == 12500 || cran.gp == 16000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:67, img:'9.4'} :
			 			(cran.gp == 12500 || cran.gp == 16000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:68, img:'9.4'} :
			 	false;
				switch (type) {
					case 'img':
						return moto_price_9_4.img;
						break;
					default:
						return moto_price_9_4.id;
						break;
				}				
			break;
		case 9.5:
			let moto_price_9_5 =
				(cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:69, img:'9.5'} :
				(cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:70, img:'9.5'} :

			 		(cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:71, img:'9.5'} :
			 		(cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:72, img:'9.5'} :

			 			(cran.gp == 12500 || cran.gp == 16000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO < 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP < 16500 : false) ? {id:73, img:'9.5'} :
			 			(cran.gp == 12500 || cran.gp == 16000) && (cran._1 == 'Опорный' ? cran.paramsO.shpO > 16500 : cran._1 == 'Подвесной' ? cran.paramsP.shpP > 16500 : false) ? {id:74, img:'9.5'} :
			 	false;
				switch (type) {
					case 'img':
						return moto_price_9_5.img;
						break;
					default:
						return moto_price_9_5.id;
						break;
				}				
			break;
		default:
			break;
	}
}

function get_preobrazovatel_id (model, img)
{
	let price =	
			model == 8.5 && (cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) ? {id:16, img:'8.5'} : 
				model == 8.5 && (cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) ? {id:17, img:'8.5'} :
					model == 8.5 && (cran.gp == 12500 || cran.gp == 16000) ? {id:18, img:'8.5'} :
			 			model == 8.6 && (cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) ? {id:19, img:'8.6'} :
			 				model == 8.6 && (cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) ? {id:20, img:'8.6'} :
			 					model == 8.6 && (cran.gp == 12500 || cran.gp == 16000) ? {id:21, img:'8.6'} :
			 							model == 8.7 && (cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000) ? {id:22, img:'8.7'} :
			 								model == 8.7 && (cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000) ? {id:23, img:'8.7'} :
			 									model == 8.7 && (cran.gp == 12500 || cran.gp == 16000) ? {id:24, img:'8.7'} : false;
	if (img == 'img') {
		return price.img;
	} return price.id;
}








	$('.dop_menu_open, .dop_menu').on('click', '.del_this_option',function(event) {
		if ($(this).hasClass('return_pult_default')) {
			$('#option_2 .dop_parametr:last-child').before(()=>{
				let new_html = '<div class="dop_parametr"> \
									<span class="change_this_option pult_change">Изменить \
										<i class="fa fa-pencil-square" aria-hidden="true"></i> \
									</span> \
									<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.3.png" alt="" class="pult_change" style="width:200px"> \
									<h4>Подвесной пульт</h4> \
									<p> \
										<span class="opisanie_parametra">Входит в стоимость крана</span> \
											<br> \
										<span class="stoimost_parametra">Без доплаты</span><i class="id_bro">b3</i> \
									</p>';
				return new_html;
			});
			cran._3Type = 'Подвесной пульт';
		}
		if ($(this).hasClass('return_motor_default')) {
			$('#option_2 .dop_parametr:last-child').before(()=>{
				let new_html = '<div class="dop_parametr"> \
					<span class="change_this_option motor_reductor_change">Изменить \
						<i class="fa fa-pencil-square" aria-hidden="true"></i> \
					</span> \
					<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/9.1.png" alt="" class="motor_reductor_change" style="width:200px"> \
					<h4>Червячная передача ABLE (Италия)</h4> \
					<p> \
						<span class="opisanie_parametra">Входит в стоимость крана</span> \
						<br> \
						<span class="stoimost_parametra">Без доплаты</span><i class="id_bro">b3</i> \
					</p>';
				return new_html;
			});
			cran.setmotor = 'Червячная передача ABLE (Италия) - стандартно';
			cran.code_of_motor = 9.1;
		}
		if ($(this).hasClass('return_preobrazovatel_default')) {
			$('#option_2 .dop_parametr:last-child').before(()=>{
				let new_html = '<div class="dop_parametr"> \
					<span class="change_this_option preobrazovatel_change">Изменить \
						<i class="fa fa-pencil-square" aria-hidden="true"></i> \
					</span> \
					<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.3.png" alt="" class="preobrazovatel_change" style="width:200px"> \
					<h4>Система управления</h4> \
					<p> \
						<span class="opisanie_parametra">Релейно-контакторная одна скорость движения</span> \
						<br> \
						<span class="stoimost_parametra">Без доплаты</span><i class="id_bro">b8</i> \
					</p>';
				return new_html;
			});
			cran.setspeed = 'Одна скорость движения';
			cran.code_of_chastotnik = '8.3';
			if ($('.return_pult_default')) {$('.return_pult_default').parent().detach();cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;}
		}
		if ($(this).parent().hasClass('rels_crane')) {
			$('.rels_montazh').detach();
		}
		if ($(this).parent().hasClass('tokoprovod')) {
			$('.tok_montazh').detach();
		}
		$(this).parent().detach();
		if ($(this)) {}
		$('#first_opt .ul_change > li').each(function(index, el) {
			if (cran._3 == 'Ручное') {
				if ($('#option_1').children('.dop_parametr').length+1 > 3) {
					$('.add_dop_1').parent().css('display', 'none');
				}
				else {
					$('.add_dop_1').parent().css('display', 'inline-block');
				}
			}
			else {			
				if (cran._3 != 'Ручное') {
					if ($('#option_1').children('.dop_parametr').length+1 > 4) {
						$('.add_dop_1').parent().css('display', 'none');
					}
					else {
					$('.add_dop_1').parent().css('display', 'inline-block');
					}
				}
			}
		});
		$('#second_opt .ul_change > li').each(function(index, el) {
			if (cran._3 == 'Ручное') {
				if ($('#option_2').children('.dop_parametr').length+1 > 3) {
					$('.add_dop_2').parent().css('display', 'none');
				}
				else {
					$('.add_dop_2').parent().css('display', 'inline-block');
				}
			}
			else {			
				if (cran._3 != 'Ручное') {
					if ($('#option_2').children('.dop_parametr').length+1 >= 13) {
						$('.add_dop_2').parent().css('display', 'none');
					}
					else {
					$('.add_dop_2').parent().css('display', 'inline-block');
					}
				}
			}
		});
	});
function easyscroll(scrollTo) { $('html, body').animate({ scrollTop: (document.body.scrollTop + scrollTo) + 'px' }, 700) }





/*
*
*
*  Тали в доп опциях
*
*
*/

	$('#second_opt').on('click', '#b17_1', function(event) {
		tal.upravlenie = 'Ручное';
		tal.type = 'Цепная';		
		if (cran._2.search(/Взрывобезопасное/i) == 0)
		{
			tal.country = 'Россия';
			tal.img = '17.8.png';
			tal.type = 'Взрывобезопасная'
			cran.calculate_tal();
			setTimeout(()=>{
				hideOptions();
				$('.cat').css('width', '20%');
				$('.cat').siblings('li').css('display', 'inline-block');
				$('.cat').children('div').css('display', 'none');
				$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
			},200);		
		}
		else
		{
			$('#conteinert_talei_1').css('display', 'block');
			$('.e_tal').css('display', 'none');
			$('.r_tal').css('display', 'inline-block');	
		}
		$.post( calc_ajaxurl.url, { action: 'tal_insert', _gp:cran.gp, _upravlenie:tal.upravlenie, _visota:tal.visota, _ispolnenie:tal.ispolnnie }, function(response)
		{
			tal.priceAJAX = JSON.parse(response);
			$('#b17_8 .hiddened').text(String(Number(tal.priceAJAX.rt_r).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#b17_9 > .hiddened').text(String(Number(tal.priceAJAX.ct_r).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#b17_10 > .hiddened').text(String(Number(tal.priceAJAX.st_r).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');			
		});
		$('.tal_canat').css('display', 'none');
		$('.tal_cep').css('display', 'none');
		$('.tal_std_height').css('display', 'none');
		$('.tal_mini_std_height').css('display', 'none');
	});

	$('#second_opt').on('click', '#b17_2', function(event) {
		tal.upravlenie = 'Электро';
		if (cran._2.search(/Взрывобезопасное/i) == 0)
		{
			tal.country = 'Болгария';
			tal.type = 'Канатная';
			$('#conteinert_talei_3').css('display', 'block');
			$('.tal_std_height').css('display', 'inline-block');
			$('.tal_mini_std_height').css('display', 'inline-block');
		}
		else
		{
			$('#conteinert_talei_1').css('display', 'block');
			$('.r_tal').css('display', 'none');
			$('.e_tal').css('display', 'inline-block');			
		}
		$.post( calc_ajaxurl.url, { action: 'tal_insert', _gp:cran.gp, _upravlenie:tal.upravlenie, _visota:tal.visota, _ispolnenie:tal.ispolnnie }, function(response)
		{
			$('#b17_5 .hiddened').text('От ' + String(Number(tal.priceAJAX.bolgariya_el_cep_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#b17_6 > .hiddened').text(String(Number(tal.priceAJAX.russia_el_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#b17_7 > .hiddened').text('От ' + String(Number(tal.priceAJAX.china_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			
		});	
	});
// РУЧНЫЕ ТАЛИ
		$('.tal_r_RUS').click(()=>{
			tal.country = 'Россия';
			tal.img = '17.8.png';
			cran.calculate_tal();
			setTimeout(()=>{
				hideOptions();
				$('.cat').css('width', '20%');
				$('.cat').siblings('li').css('display', 'inline-block');
				$('.cat').children('div').css('display', 'none');
				$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
			},200);
		});

		$('.tal_r_CHN').click(()=>{
			tal.country = 'Китай';
			tal.img = '17.9.png';
			cran.calculate_tal();			
			setTimeout(()=>{
				hideOptions();
				$('.cat').css('width', '20%');
				$('.cat').siblings('li').css('display', 'inline-block');
				$('.cat').children('div').css('display', 'none');
				$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
			},200);
		});

		$('.tal_r_SHVED').click(()=>{
			tal.country = 'Швеция';
			tal.img = '17.10.png';
			cran.calculate_tal();
			setTimeout(()=>{
				hideOptions();
				$('.cat').css('width', '20%');
				$('.cat').siblings('li').css('display', 'inline-block');
				$('.cat').children('div').css('display', 'none');
				$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
			},200);
		});
// РУЧНЫЕ ТАЛИ



// ЭЛЕКТРО ТАЛИ БОЛГАРИЯ
$('.tal_e_BOLG').click(()=>{
	if (tal.gp <= 2000 && tal.visota <= 12000) {
		$('#conteinert_talei_2').css('display', 'block');
		$('.tal_canat').css('display', 'inline-block');
		$('.tal_cep').css('display', 'inline-block');
		$('#b17_3 .hiddened').text('От ' + String(Number(tal.priceAJAX.bolgariya_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
		$('#b17_4 .hiddened').text(String(Number(tal.priceAJAX.bolgariya_el_cep_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
	} else {
		$('#conteinert_talei_3').css('display', 'block');
		$('.tal_std_height').css('display', 'inline-block');
		$('.tal_mini_std_height').css('display', 'inline-block');
		tal.type = 'Канатная';
		if (cran._2.search(/Взрывобезопасное/i) == 0) {
				$('#b17_5_1 .hiddened').text(String(Number(tal.priceAJAX.bolgariya_el_canatVBI_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
				$('#b17_5_2 .hiddened').text(String(Number(tal.priceAJAX.bolgariya_el_canatUSVVBI_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			}
			else {
				$('#b17_5_1 .hiddened').text(String(Number(tal.priceAJAX.bolgariya_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
				$('#b17_5_2 .hiddened').text(String(Number(tal.priceAJAX.bolgariya_el_canatUSV_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			}
	 	}
	tal.country = 'Болгария';
	tal.img = '17.5.png';
});

	$('.tal_canat').click(()=>{
		if (tal.country == 'Болгария') {
			$('#conteinert_talei_3').css('display', 'block');
			$('.tal_std_height').css('display', 'inline-block');
			$('.tal_mini_std_height').css('display', 'inline-block');
			tal.type = 'Канатная';
		} else {
			tal.type = 'Канатная';
			tal.img = '17.3.png';
			cran.calculate_tal();
			setTimeout(()=>{
				hideOptions();
				$('.cat').css('width', '20%');
				$('.cat').siblings('li').css('display', 'inline-block');
				$('.cat').children('div').css('display', 'none');
				$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
			},200);
		}
		$('#b17_5_1 .hiddened').text(String(Number(tal.priceAJAX.bolgariya_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
		$('#b17_5_2 .hiddened').text(String(Number(tal.priceAJAX.bolgariya_el_canatUSV_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
	})
	$('.tal_cep').click(()=>{
		tal.type = 'Цепная';
		tal.img = '17.4.png';
		cran.calculate_tal();
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '20%');
			$('.cat').siblings('li').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
		},200);
	})

		$('.tal_std_height').click(()=>{
			cran._2.search(/Взрывобезопасное/i) == 0 ? tal.type = 'Канатная ВБИ' : tal.type = 'Канатная';
			tal.img = '17.5.1.png';
			cran.calculate_tal();
			setTimeout(()=>{
				hideOptions();
				$('.cat').css('width', '20%');
				$('.cat').siblings('li').css('display', 'inline-block');
				$('.cat').children('div').css('display', 'none');
				$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
			},200);
		})
		$('.tal_mini_std_height').click(()=>{
			cran._2.search(/Взрывобезопасное/i) == 0 ? tal.type = 'Канатная УСВ ВБИ' : tal.type = 'Канатная УСВ';
			tal.img = '17.5.2.png';
			cran.calculate_tal();
			setTimeout(()=>{
				hideOptions();
				$('.cat').css('width', '20%');
				$('.cat').siblings('li').css('display', 'inline-block');
				$('.cat').children('div').css('display', 'none');
				$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
			},200);
		})
// ЭЛЕКТРО ТАЛИ БОЛГАРИЯЫ

// ЭЛЕКТРО ТАЛИ РОССИЯ
$('.tal_e_RUS').click(()=>{
	tal.type = 'Канатная';
	tal.country = 'Россия';
	tal.img = '17.6.png';
	cran.calculate_tal();
	setTimeout(()=>{
		hideOptions();
		$('.cat').css('width', '20%');
		$('.cat').siblings('li').css('display', 'inline-block');
		$('.cat').children('div').css('display', 'none');
		$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
	},200);
})
// ЭЛЕКТРО ТАЛИ РОССИЯ

// ЭЛЕКТРО ТАЛИ КИТАЙ
$('.tal_e_CHN').click(()=>{
	tal.country = 'Китай';
	tal.img = '17.7.png';
	if ((tal.gp <= 500 && tal.visota <= 6000) || (tal.gp <= 10000 && tal.visota <= 9000)) {
		$('#conteinert_talei_2').css('display', 'block');
	//	$('#conteinert_talei_3').css('display', 'none');
		$('.tal_canat').css('display', 'inline-block');
		$('.tal_cep').css('display', 'inline-block');
	} else {
		tal.type = 'Канатная';
		cran.calculate_tal();
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '20%');
			$('.cat').siblings('li').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
				$('#second_opt .ul_change > li').each(function(index, el) {
					if (cran._3 == 'Ручное') {
						if ($('#option_2').children('.dop_parametr').length+1 > 2) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
							$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
					else {			
						if (cran._3 != 'Ручное') {
							if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
								$('.add_dop_2').parent().css('display', 'none');
							}
							else {
							$('.add_dop_2').parent().css('display', 'inline-block');
							}
						}
					}
				});
		},200);
	}
	$('.tal_std_height').css('display', 'none');
	$('.tal_mini_std_height').css('display', 'none');
	$('#b17_3 .hiddened').text(String(Number(tal.priceAJAX.china_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
	$('#b17_4 .hiddened').text(String(Number(tal.priceAJAX.china_el_cep_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
})
// ЭЛЕКТРО ТАЛИ КИТАЙ

function hideOptions () {
	$('.hidden_options').removeClass('hidden_options_show').addClass('zzz hidden_options_hide');
	$('.hidden_options div.modal_change_show').removeClass('modal_change_show').addClass('modal_change_hide');
}

});