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
				pult_upravleniya_PULTP_h4.innerText = 'Подвесной пульт - бесплатно';
				pult_upravleniya_PULTP.append(pult_upravleniya_PULTP_h4);
					pult_upravleniya_PULTP_h4.addEventListener('click', function () {
						cran._3Type = 'Подвесной пульт';
					});
					let pult_upravleniya_PULTP_inf = document.createElement('div');
						pult_upravleniya_PULTP_inf.classList = 'container_button';
						pult_upravleniya_PULTP_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_3" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						pult_upravleniya_PULTP.append(pult_upravleniya_PULTP_inf);

		let pult_upravleniya_PULT = document.createElement('div'); // блок пульт
		pult_upravleniya_PULT.className = 'pult_upravleniya_PULT animated zoomIn'
		pult_upravleniya_PULT.style.marginBottom = '50px';
		pult_upravleniya.append(pult_upravleniya_PULT);
			let pult_upravleniya_PULT_img = document.createElement('img'); //Картинка радио пульта
				pult_upravleniya_PULT_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.5.png';
				pult_upravleniya_PULT_img.className = 'allimg change_on_PULT';
				pult_upravleniya_PULT.append(pult_upravleniya_PULT_img);
					pult_upravleniya_PULT_img.addEventListener('click', function () {
						if ( cran._2.search(/Взрывобезопасное/i) != -1 ) {
							let clr = document.createElement('div');
							clr.style.clear = 'both';
							pult_upravleniya.append(clr);
						}
						creat_pult_model('Пульт');
						$('h4.change_on_PULT').css({'background-color':'#b5212e','color':'#FFFFFF'});
						$('h4.change_on_JOY').css({'background-color':'#e4ded5','color':'##242526'});
					});
			let pult_upravleniya_PULT_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				pult_upravleniya_PULT_h4.className = 'change_on_PULT';
				pult_upravleniya_PULT_h4.innerText = 'Радиоуправление с пульта';
				pult_upravleniya_PULT.append(pult_upravleniya_PULT_h4);
					pult_upravleniya_PULT_h4.addEventListener('click', function () {
						if ( cran._2.search(/Взрывобезопасное/i) != -1 ) {
							let clr = document.createElement('div');
							clr.style.clear = 'both';
							pult_upravleniya.append(clr);
						}
						creat_pult_model('Пульт');
						$('h4.change_on_PULT').css({'background-color':'#b5212e','color':'#FFFFFF'});
						$('h4.change_on_JOY').css({'background-color':'#e4ded5','color':'##242526'});
					});

		if (cran._2.search(/Взрывобезопасное/i) == -1) {
			let pult_upravleniya_JOY = document.createElement('div'); // блок джойстик
			pult_upravleniya_JOY.className = 'pult_upravleniya_JOY animated zoomInRight';
			pult_upravleniya_JOY.style.marginBottom = '50px';
			pult_upravleniya.append(pult_upravleniya_JOY);
				let pult_upravleniya_JOY_img = document.createElement('img');
					pult_upravleniya_JOY_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.6.png';
					pult_upravleniya_JOY_img.className = 'allimg change_on_JOY';
					pult_upravleniya_JOY.append(pult_upravleniya_JOY_img);
						pult_upravleniya_JOY_img.addEventListener('click', function () {
							let clr = document.createElement('div');
							clr.style.clear = 'both';
							pult_upravleniya.append(clr);
							creat_pult_model();
							$('h4.change_on_JOY').css({'background-color':'#b5212e','color':'#FFFFFF'});
							$('h4.change_on_PULT').css({'background-color':'#e4ded5','color':'##242526'});
						});
				let pult_upravleniya_JOY_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
					pult_upravleniya_JOY_h4.className = 'change_on_JOY';
					pult_upravleniya_JOY_h4.innerText = 'Радиоуправление с джойстика';
					pult_upravleniya_JOY.append(pult_upravleniya_JOY_h4);
						pult_upravleniya_JOY_h4.addEventListener('click', function () {
							let clr = document.createElement('div');
							clr.style.clear = 'both';
							pult_upravleniya.append(clr);
							creat_pult_model();
							$('h4.change_on_JOY').css({'background-color':'#b5212e','color':'#FFFFFF'});
							$('h4.change_on_PULT').css({'background-color':'#e4ded5','color':'##242526'});
						});
		}
		else {
			pult_upravleniya_PULTP.style.marginLeft = '222px';
			pult_upravleniya_PULTP.style.marginRight = '36px';
		}


		$('html, body').animate({ 'scrollTop':'170px' }, 350);
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
								cran._3Type = cran._2.search(/Взрывобезопасное/i) != -1 ? 'Радиоуправление с пультом Telecrane (Тайвань) ВБИ':'Радиоуправление с пультом Telecrane (Тайвань)';
							});

					let pult_upravleniya_TELECRANE_price = document.createElement('span');
						pult_upravleniya_TELECRANE_price.className = 'price_in_change';
						pult_upravleniya_TELECRANE_price.innerText = String(Number(results.pTELECRANE).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_price);

					let pult_upravleniya_TELECRANE_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_TELECRANE_h4.className = 'change_on_TELECRANE';
						pult_upravleniya_TELECRANE_h4.innerText = 'Telecrane (Тайвань)';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_h4);
							pult_upravleniya_TELECRANE_h4.addEventListener('click', function () {
								cran._3Type = cran._2.search(/Взрывобезопасное/i) != -1 ? 'Радиоуправление с пультом Telecrane (Тайвань) ВБИ':'Радиоуправление с пультом Telecrane (Тайвань)';
							});
					if ( cran._2 == 'Общепромышленное' || cran._2 == 'Пожаробезопасное' ) {
						let pult_upravleniya_TELECRANE_inf = document.createElement('div');
						pult_upravleniya_TELECRANE_inf.classList = 'container_button';
						pult_upravleniya_TELECRANE_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_7" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_inf);
					}
					if ( cran._2.search(/Взрывобезопасное/i) != -1 ) {
						let pult_upravleniya_TELECRANE_inf = document.createElement('div');
						pult_upravleniya_TELECRANE_inf.classList = 'container_button';
						pult_upravleniya_TELECRANE_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_7vbi" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_inf);
					}



					let pult_upravleniya_IKUSI = document.createElement('div'); // блок пульт
						pult_upravleniya_IKUSI.className = 'pult_upravleniya_IKUSI animated zoomIn'
						pult_upravleniya.append(pult_upravleniya_IKUSI);
					let pult_upravleniya_IKUSI_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_IKUSI_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.8.png';
						pult_upravleniya_IKUSI_img.className = 'allimg change_on_IKUSI';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_img);
							pult_upravleniya_IKUSI_img.addEventListener('click', function () {
								cran._3Type = cran._2.search(/Взрывобезопасное/i) != -1 ? 'Радиоуправление с пультом Ikusi (Испания) ВБИ':'Радиоуправление с пультом Ikusi (Испания)';
							});

					let pult_upravleniya_IKUSI_price = document.createElement('span');
						pult_upravleniya_IKUSI_price.className = 'price_in_change';
						pult_upravleniya_IKUSI_price.innerText = String(Number(results.pIKUSI).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_price);

					let pult_upravleniya_IKUSI_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_IKUSI_h4.className = 'change_on_IKUSI';
						pult_upravleniya_IKUSI_h4.innerText = 'Ikusi (Испания)';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_h4);
							pult_upravleniya_IKUSI_h4.addEventListener('click', function () {
								cran._3Type = cran._2.search(/Взрывобезопасное/i) != -1 ? 'Радиоуправление с пультом Ikusi (Испания) ВБИ':'Радиоуправление с пультом Ikusi (Испания)';
							});
					if ( cran._2 == 'Общепромышленное' || cran._2 == 'Пожаробезопасное' ) {
						let pult_upravleniya_IKUSI_inf = document.createElement('div');
						pult_upravleniya_IKUSI_inf.classList = 'container_button';
						pult_upravleniya_IKUSI_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_8" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_inf);
					}
					if ( cran._2.search(/Взрывобезопасное/i) != -1 ) {
						let pult_upravleniya_IKUSI_inf = document.createElement('div');
						pult_upravleniya_IKUSI_inf.classList = 'container_button';
						pult_upravleniya_IKUSI_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_8vbi" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_inf);
					}


					let pult_upravleniya_HBRRadiomatic = document.createElement('div'); // блок пульт
						pult_upravleniya_HBRRadiomatic.className = 'pult_upravleniya_HBRRadiomatic animated fadeInRightBig'
						pult_upravleniya.append(pult_upravleniya_HBRRadiomatic);
					let pult_upravleniya_HBRRadiomatic_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_HBRRadiomatic_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.9.png';
						pult_upravleniya_HBRRadiomatic_img.className = 'allimg change_on_HBRRadiomatic';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_img);
							pult_upravleniya_HBRRadiomatic_img.addEventListener('click', function () {
								cran._3Type = cran._2.search(/Взрывобезопасное/i) != -1 ? 'Радиоуправление с пультом HBC-Radiomatic (Германия) ВБИ':'Радиоуправление с пультом HBC-Radiomatic (Германия)';
							});

					let pult_upravleniya_HBRRadiomatic_price = document.createElement('span');
						pult_upravleniya_HBRRadiomatic_price.className = 'price_in_change';
						pult_upravleniya_HBRRadiomatic_price.innerText = String(Number(results.pHBC).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_price);

					let pult_upravleniya_HBRRadiomatic_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_HBRRadiomatic_h4.className = 'change_on_HBRRadiomatic';
						pult_upravleniya_HBRRadiomatic_h4.innerText = 'HBC - Radiomatic (Германия)';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_h4);
							pult_upravleniya_HBRRadiomatic_h4.addEventListener('click', function () {
								cran._3Type = cran._2.search(/Взрывобезопасное/i) != -1 ? 'Радиоуправление с пультом HBC-Radiomatic (Германия) ВБИ':'Радиоуправление с пультом HBC-Radiomatic (Германия)';
							});
					if ( cran._2 == 'Общепромышленное' || cran._2 == 'Пожаробезопасное' ) {
						let pult_upravleniya_HBRRadiomatic_inf = document.createElement('div');
						pult_upravleniya_HBRRadiomatic_inf.classList = 'container_button';
						pult_upravleniya_HBRRadiomatic_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_9" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_inf);
					}
					if ( cran._2.search(/Взрывобезопасное/i) != -1 ) {
						let pult_upravleniya_HBRRadiomatic_inf = document.createElement('div');
						pult_upravleniya_HBRRadiomatic_inf.classList = 'container_button';
						pult_upravleniya_HBRRadiomatic_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_9vbi" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_inf);
					}
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
						pult_upravleniya_TELECRANE_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.7a.png';
						pult_upravleniya_TELECRANE.style.marginLeft = '4%';
						pult_upravleniya_TELECRANE_img.className = 'allimg change_on_TELECRANE';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_img);
							pult_upravleniya_TELECRANE_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком Telecrane (Тайвань)';
							});

					let pult_upravleniya_TELECRANE_price = document.createElement('span');
						pult_upravleniya_TELECRANE_price.className = 'price_in_change';
						pult_upravleniya_TELECRANE_price.innerText = String(Number(results.jTELECRANE).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_price);

					let pult_upravleniya_TELECRANE_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_TELECRANE_h4.className = 'change_on_TELECRANE';
						pult_upravleniya_TELECRANE_h4.innerText = 'Telecrane (Тайвань)';
						pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_h4);
							pult_upravleniya_TELECRANE_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком Telecrane (Тайвань)';
							});
							let pult_upravleniya_TELECRANE_inf = document.createElement('div');
							pult_upravleniya_TELECRANE_inf.classList = 'container_button';
							pult_upravleniya_TELECRANE_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_7j" class="fa fa-info-circle" aria-hidden="true"></i></span>';
							pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_inf);


					let pult_upravleniya_IKUSI = document.createElement('div'); // блок пульт
						pult_upravleniya_IKUSI.className = 'pult_upravleniya_IKUSI animated zoomIn'
						pult_upravleniya.append(pult_upravleniya_IKUSI);
					let pult_upravleniya_IKUSI_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_IKUSI_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.8b.png';
						pult_upravleniya_IKUSI_img.className = 'allimg change_on_IKUSI';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_img);
							pult_upravleniya_IKUSI_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком Ikusi (Испания)';
							});

					let pult_upravleniya_IKUSI_price = document.createElement('span');
						pult_upravleniya_IKUSI_price.className = 'price_in_change';
						pult_upravleniya_IKUSI_price.innerText = String(Number(results.jIKUSI).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_price);

					let pult_upravleniya_IKUSI_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_IKUSI_h4.className = 'change_on_IKUSI';
						pult_upravleniya_IKUSI_h4.innerText = 'Ikusi (Испания)';
						pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_h4);
							pult_upravleniya_IKUSI_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком Ikusi (Испания)';
							});
							let pult_upravleniya_IKUSI_inf = document.createElement('div');
							pult_upravleniya_IKUSI_inf.classList = 'container_button';
							pult_upravleniya_IKUSI_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_8j" class="fa fa-info-circle" aria-hidden="true"></i></span>';
							pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_inf);


					let pult_upravleniya_HBRRadiomatic = document.createElement('div'); // блок пульт
						pult_upravleniya_HBRRadiomatic.className = 'pult_upravleniya_HBRRadiomatic animated fadeInRightBig'
						pult_upravleniya.append(pult_upravleniya_HBRRadiomatic);
					let pult_upravleniya_HBRRadiomatic_img = document.createElement('img'); //Картинка радио пульта
						pult_upravleniya_HBRRadiomatic_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.9c.png';
						pult_upravleniya_HBRRadiomatic_img.className = 'allimg change_on_HBRRadiomatic';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_img);
							pult_upravleniya_HBRRadiomatic_img.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком HBC-Radiomatic (Германия)';
							});

					let pult_upravleniya_HBRRadiomatic_price = document.createElement('span');
						pult_upravleniya_HBRRadiomatic_price.className = 'price_in_change';
						pult_upravleniya_HBRRadiomatic_price.innerText = String(Number(results.jHBC).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_price);

					let pult_upravleniya_HBRRadiomatic_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
						pult_upravleniya_HBRRadiomatic_h4.className = 'change_on_HBRRadiomatic';
						pult_upravleniya_HBRRadiomatic_h4.innerText = 'HBC - Radiomatic (Германия)';
						pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_h4);
							pult_upravleniya_HBRRadiomatic_h4.addEventListener('click', function () {
								cran._3Type = 'Радиоуправление с джойстиком HBC-Radiomatic (Германия)';
							});
							let pult_upravleniya_HBRRadiomatic_inf = document.createElement('div');
							pult_upravleniya_HBRRadiomatic_inf.classList = 'container_button';
							pult_upravleniya_HBRRadiomatic_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i3_9j" class="fa fa-info-circle" aria-hidden="true"></i></span>';
							pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_inf);
				})
			}
		}

	})

	$('body').on('click', '#closePult', function(event) {
		$(this).parent('.pultslider').detach();
		$('html, body').animate({ 'scrollTop':'700px' }, 400)
	})
	$('body').on('click', '.change_on_PULTP, .change_on_TELECRANE, .change_on_IKUSI, .change_on_HBRRadiomatic', function(event) {
		console.log(event)
		$(this).parent().parent('.pultslider').detach();
		$('.pult_change').parent('.dop_parametr').detach();
		$('html, body').animate({ 'scrollTop':'700px' }, 400);
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
						cran.setmotor = 'Червячная передача NMRV (Китай)';
					});
			let motor_reductor_9_1_price = document.createElement('span');
				motor_reductor_9_1_price.className = 'price_in_change';
				motor_reductor_9_1_price.innerText ='Без доплаты';
				motor_reductor_9_1.append(motor_reductor_9_1_price);

			let motor_reductor_9_1_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				motor_reductor_9_1_h4.className = 'change_on_9_1';
				motor_reductor_9_1_h4.innerText = 'Червячная передача NMRV (Китай)';
				motor_reductor_9_1.append(motor_reductor_9_1_h4);
					motor_reductor_9_1_h4.addEventListener('click', function () {
						cran.code_of_motor = 9.1;
						cran.setmotor = 'Червячная передача NMRV (Китай)';
					});
					let motor_reductor_9_1_inf = document.createElement('div');
						motor_reductor_9_1_inf.classList = 'container_button';
						motor_reductor_9_1_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i9_1" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						motor_reductor_9_1.append(motor_reductor_9_1_inf);
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
				motor_reductor_9_2_price.innerText = String(Number(results.p9_2).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
				motor_reductor_9_2.append(motor_reductor_9_2_price);

			let motor_reductor_9_2_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				motor_reductor_9_2_h4.className = 'change_on_9_2';
				motor_reductor_9_2_h4.innerText = 'Червячная передача NORD (Германия)';
				motor_reductor_9_2.append(motor_reductor_9_2_h4);
					motor_reductor_9_2_h4.addEventListener('click', function () {
						cran.code_of_motor = 9.2;
						cran.setmotor = 'Червячная передача NORD (Германия)';
					});
					let motor_reductor_9_2_inf = document.createElement('div');
						motor_reductor_9_2_inf.classList = 'container_button';
						motor_reductor_9_2_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i9_2" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						motor_reductor_9_2.append(motor_reductor_9_2_inf);
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
					motor_reductor_9_3_price.innerText = String(Number(results.p9_3).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
					motor_reductor_9_3.append(motor_reductor_9_3_price);

				let motor_reductor_9_3_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
					motor_reductor_9_3_h4.className = 'change_on_9_3';
					motor_reductor_9_3_h4.innerText = 'Циллиндрическая передача Балкан Эхо (Болгария)';
					motor_reductor_9_3.append(motor_reductor_9_3_h4);
						motor_reductor_9_3_h4.addEventListener('click', function () {
							cran.code_of_motor = 9.3;
							cran.setmotor = 'Циллиндрическая передача Балкан Эхо (Болгария)';
						});
					let motor_reductor_9_3_inf = document.createElement('div');
						motor_reductor_9_3_inf.classList = 'container_button';
						motor_reductor_9_3_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i9_3" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						motor_reductor_9_3.append(motor_reductor_9_3_inf);
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
					motor_reductor_9_4_price.innerText = String(Number(results.p9_4).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
					motor_reductor_9_4.append(motor_reductor_9_4_price);

				let motor_reductor_9_4_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
					motor_reductor_9_4_h4.className = 'change_on_9_4';
					motor_reductor_9_4_h4.innerText = 'Циллиндрическая передача NORD (Германия)';
					motor_reductor_9_4.append(motor_reductor_9_4_h4);
						motor_reductor_9_4_h4.addEventListener('click', function () {
							cran.code_of_motor = 9.4;
							cran.setmotor = 'Циллиндрическая передача NORD (Германия)';
					});
					let motor_reductor_9_4_inf = document.createElement('div');
						motor_reductor_9_4_inf.classList = 'container_button';
						motor_reductor_9_4_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i9_4" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						motor_reductor_9_4.append(motor_reductor_9_4_inf);
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
					motor_reductor_9_5_price.innerText = String(Number(results.p9_5).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
					motor_reductor_9_5.append(motor_reductor_9_5_price);

				let motor_reductor_9_5_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
					motor_reductor_9_5_h4.className = 'change_on_9_5';
					motor_reductor_9_5_h4.innerText = 'Циллиндрическая передача Европривод (Россия)';
					motor_reductor_9_5.append(motor_reductor_9_5_h4);
						motor_reductor_9_5_h4.addEventListener('click', function () {
							cran.code_of_motor = 9.5;
							cran.setmotor = 'Циллиндрическая передача Европривод (Россия)';
					});
					let motor_reductor_9_5_inf = document.createElement('div');
						motor_reductor_9_5_inf.classList = 'container_button';
						motor_reductor_9_5_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i9_5" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						motor_reductor_9_5.append(motor_reductor_9_5_inf);


				$('html, body').animate({ 'scrollTop':'170px' }, 350)
				$('.zzz').after(motor_reductor);
		});
	})

	$('body').on('click', '#closeMotorReductor', function(event) {
		$(this).parent('.motor_reductor_slider').detach();
		$('html, body').animate({ 'scrollTop':'700px' }, 400)
	})
	$('body').on('click', '.change_on_9_1, .change_on_9_2, .change_on_9_3, .change_on_9_4, .change_on_9_5', function(event) {
		$(this).parent().parent('.motor_reductor_slider').detach();
		cran.motor_price(cran.code_of_motor)
		cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
		calculate_tormoz();
		$('html, body').animate({ 'scrollTop':'700px' }, 400);
	})
	function calculate_tormoz () {
		if (cran._3 != 'Ручное') {
				/////////////
				var data_tormoz = { action: 'calc_tormoz',  _motor_code:cran.code_of_motor,  _motor_gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
				$.post( calc_ajaxurl.url, data_tormoz, function(response) {
					$('.tormoz .stoimost_parametra').text(String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
				});
				/////////////
		}
	}
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
					let preobrazovatel_8_3_inf = document.createElement('div');
						preobrazovatel_8_3_inf.classList = 'container_button';
						preobrazovatel_8_3_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i8_3" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						preobrazovatel_8_3.append(preobrazovatel_8_3_inf);
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
						cran.setspeed = 'Две скорости движения';
					});
			let preobrazovatel_8_4_price = document.createElement('span');
				preobrazovatel_8_4_price.className = 'price_in_change';
				preobrazovatel_8_4_price.innerText =  String(Number(results.preo8_4).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
				preobrazovatel_8_4.append(preobrazovatel_8_4_price);

			let preobrazovatel_8_4_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_4_h4.className = 'change_on_8_4';
				preobrazovatel_8_4_h4.innerText = 'Релейно-контакторный две скорости движения';
				preobrazovatel_8_4.append(preobrazovatel_8_4_h4);
					preobrazovatel_8_4_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.4';
						cran.setspeed = 'Две скорости движения';
					});
					let preobrazovatel_8_4_inf = document.createElement('div');
						preobrazovatel_8_4_inf.classList = 'container_button';
						preobrazovatel_8_4_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i8_4" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						preobrazovatel_8_4.append(preobrazovatel_8_4_inf);
			let  clr_pr = document.createElement('div'); clr_pr.style.clear = 'both'; preobrazovatel.append(clr_pr);
		/*********************************************************************************************************************************/
/*
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
				preobrazovatel_8_5_price.innerText = String(Number(results.preo8_5).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
				preobrazovatel_8_5.append(preobrazovatel_8_5_price);

			let preobrazovatel_8_5_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_5_h4.className = 'change_on_8_5';
				preobrazovatel_8_5_h4.innerText = 'Плавный пуск + 2 и более скорости ESQ (Китай)';
				preobrazovatel_8_5.append(preobrazovatel_8_5_h4);
					preobrazovatel_8_5_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.5';
						cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';
					});
					let preobrazovatel_8_5_inf = document.createElement('div');
						preobrazovatel_8_5_inf.classList = 'container_button';
						preobrazovatel_8_5_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i8_5" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						preobrazovatel_8_5.append(preobrazovatel_8_5_inf);
		/*********************************************************************************************************************************/
/*
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
				preobrazovatel_8_6_price.innerText = String(Number(results.preo8_6).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
				preobrazovatel_8_6.append(preobrazovatel_8_6_price);

			let preobrazovatel_8_6_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_6_h4.className = 'change_on_8_6';
				preobrazovatel_8_6_h4.innerText = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';
				preobrazovatel_8_6.append(preobrazovatel_8_6_h4);
					preobrazovatel_8_6_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.6';
						cran.setspeed = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';
					});
					let preobrazovatel_8_6_inf = document.createElement('div');
						preobrazovatel_8_6_inf.classList = 'container_button';
						preobrazovatel_8_6_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i8_6" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						preobrazovatel_8_6.append(preobrazovatel_8_6_inf);
		/*********************************************************************************************************************************/
/*
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
				preobrazovatel_8_7_price.innerText = String(Number(results.preo8_7).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
				preobrazovatel_8_7.append(preobrazovatel_8_7_price);

			let preobrazovatel_8_7_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
				preobrazovatel_8_7_h4.className = 'change_on_8_7';
				preobrazovatel_8_7_h4.innerText = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';
				preobrazovatel_8_7.append(preobrazovatel_8_7_h4);
					preobrazovatel_8_7_h4.addEventListener('click', function () {
						cran.code_of_chastotnik = '8.7';
						cran.setspeed = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';
					});
					let preobrazovatel_8_7_inf = document.createElement('div');
						preobrazovatel_8_7_inf.classList = 'container_button';
						preobrazovatel_8_7_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="i8_7" class="fa fa-info-circle" aria-hidden="true"></i></span>';
						preobrazovatel_8_7.append(preobrazovatel_8_7_inf);
*/
			$('html, body').animate({ 'scrollTop':'170px' }, 350)
			$('.zzz').after(preobrazovatel);
		});
	})

	$('body').on('click', '#closePreobrazovatel', function(event) {
		$(this).parent('.preobrazovatel_slider').detach();
		$('html, body').animate({ 'scrollTop':'700px' }, 400)
	})
	$('body').on('click', '.change_on_8_5, .change_on_8_6, .change_on_8_7', function(event) {
		$(this).parent().parent('.preobrazovatel_slider').detach();
		$('.preobrazovatel_change').parent('.dop_parametr').detach();
		cran.chastotnik_price(cran.code_of_chastotnik)
		$('html, body').animate({ 'scrollTop':'700px' }, 400);
		if ($('.return_pult_default')) {$('.return_pult_default').parent().detach();cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;}
	})
	$('body').on('click', '.change_on_8_4', function(event) {
		if (cran._1 == 'Опорный') {
			cran.dvs = document.querySelector('#Odvs').innerText = 'Двухскоростнй';
		}
		else {
			cran.dvs = document.querySelector('#Pdvs').innerText = 'Двухскоростнй';
		}		
		cran.setspeed = 'Две скорости движения';
		$(this).parent().parent('.preobrazovatel_slider').detach();
		$('.preobrazovatel_change').parent('.dop_parametr').detach();
		cran.double_speed(cran.code_of_chastotnik)
		$('html, body').animate({ 'scrollTop':'700px' }, 400);
		if ($('.return_pult_default')) {$('.return_pult_default').parent().detach();cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;}
	})
	$('body').on('click', '.change_on_8_3', function(event) {
		if (cran._1 == 'Опорный') {
			cran.dvs = document.querySelector('#Odvs').innerText = 'Односкоростной';
		}
		else {
			cran.dvs = document.querySelector('#Pdvs').innerText = 'Односкоростной';
		}
		cran.setspeed = 'Одна скорость движения';
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
		$('html, body').animate({ 'scrollTop':'700px' }, 400);
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


	$('body').on('click', '#closePreobrazovatel', function(event) {
		$(this).parent('.preobrazovatel_slider').detach();
		$('html, body').animate({ 'scrollTop':'700px' }, 400)
	})
	$('body').on('click', '.change_on_8_4, .change_on_8_5, .change_on_8_6, .change_on_8_7', function(event) {
		$(this).parent().parent('.preobrazovatel_slider').detach();
		$('.preobrazovatel_change').parent('.dop_parametr').detach();
		//cran.calculate_tal()
		$('html, body').animate({ 'scrollTop':'700px' }, 400);
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
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3' || '8.2' || '8.4') ? {id:5, img:'3.7a'}:false)
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
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3' || '8.2' || '8.4') ? {id:10, img:'3.8b'}:false)
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
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran.code_of_chastotnik == '8.3' || '8.2' || '8.4') ? {id:15, img:'3.9c'}:false)
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
					<h4>Червячная передача NMRV (Китай)</h4> \
					<p> \
						<span class="opisanie_parametra">Входит в стоимость крана</span> \
						<br> \
						<span class="stoimost_parametra">Без доплаты</span><i class="id_bro">b3</i> \
					</p>';
				return new_html;
			});
			cran.setmotor = 'Червячная передача NMRV (Китай) - стандартно';
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
		if ($(this).parent().hasClass('tali')) {
			tal.yes=0;
		}
		if ($(this).parent().hasClass('rels_crane')) {
			$('.rels_montazh').detach();
		}
		if ($(this).parent().hasClass('tokoprovod')) {
			$('.tok_montazh').detach();
		}
		$(this).parent().detach();
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
					if ($('#option_2').children('.dop_parametr').length+1 >= 21) {
						$('.add_dop_2').parent().css('display', 'none');
					}
					else {
					$('.add_dop_2').parent().css('display', 'inline-block');
					}
				}
			}
		});
		$('#third_opt .ul_change > li').each(function(index, el) {
			if (cran._3 == 'Ручное') {
				if ($('#option_3').children('.dop_parametr').length+1 > 9) {
					$('.add_dop_3').parent().css('display', 'none');
				}
				else {
					$('.add_dop_3').parent().css('display', 'inline-block');
				}
			}
			else {
				if (cran._3 != 'Ручное') {
					if ($('#option_3').children('.dop_parametr').length+1 >= 11) {
						$('.add_dop_3').parent().css('display', 'none');
					}
					else {
					$('.add_dop_3').parent().css('display', 'inline-block');
					}
				}
			}
		});
		calc_all_tokopodvod_i_puti();
		calc_all_dop();
		calc_all_uslugi();
	});
function easyscroll(scrollTo) { $('html, body').animate({ scrollTop: (document.body.scrollTop + scrollTo) + 'px' }, 700) }





/*
*
*
*  Тали в доп опциях
*
*
*/
function hideOptions () {
	$('.hidden_options').removeClass('hidden_options_show').addClass('zzz hidden_options_hide');
	$('.hidden_options div.modal_change_show').removeClass('modal_change_show').addClass('modal_change_hide');
}
$('body').on('click', '#b17, .tal_remake', function(event) {
	try {
		prompt_city.remove();
	}
	catch (e) {
		console.log(e);
	}
	finally {
		hideOptions();
		$('.cat').css('width', '15%');
		$('.ul_change > .change_li').css('display', 'inline-block');
		$('.cat').children('div').css('display', 'none');
		if (cran._3 == 'Ручное')
		{
			document.getElementById('b10').style.display = 'none';
			document.getElementById('b10opt').style.display = 'none';
			document.getElementById('b11').style.display = 'none';
			document.getElementById('b13').style.display = 'none';
			document.getElementById('b12_1').style.display = 'none';
			document.getElementById('b12_2').style.display = 'none';
			document.getElementById('b14').style.display = 'none';
			document.getElementById('b15').style.display = 'none';
			document.getElementById('b16').style.display = 'none';
			document.getElementById('b78').style.display = 'none';
			document.getElementById('b79').style.display = 'none';
			document.getElementById('b21').style.display = 'none';
			document.getElementById('b22').style.display = 'none';
			document.getElementById('b28').style.display = 'none';
		}
	}
	console.log(event);
	console.log('Изменение тали');
	easyscroll(0);
	let window_tal = document.createElement('div');
		window_tal.id = 'new_tal_window';

	let win_tal_close = document.createElement('span'); // Закрыть окно выбора пульта
		win_tal_close.id = 'closeTal';
		win_tal_close.innerHTML = '<i class="fa fa-times-circle-o" aria-hidden="true"></i>';
		window_tal.append(win_tal_close);

	let win_tal_zag = document.createElement('h2');
		win_tal_zag.innerText = 'Пожалуйста выберите таль'
		win_tal_zag.style.marginBottom = '2em';
		window_tal.append(win_tal_zag);
/*
*
* РУЧНОЕ УПРАВЛЕНИЕ ТАЛИ
* AJAX на цены для талей выполняется при открытии доп опций
*/	
	let min_tal_r = Math.min(tal.priceAJAX.rt_r, tal.priceAJAX.ct_r, tal.priceAJAX.st_r);
	let min_tal_eж
	switch (tal.ispolnnie) {
		case 'Общепромышленное':
			min_tal_e = Math.min(tal.priceAJAX.russia_el_t, tal.priceAJAX.china_el_canat_t, tal.priceAJAX.china_el_cep_t, tal.priceAJAX.bolgariya_el_canat_t, tal.priceAJAX.bolgariya_el_cep_t);
			break;
		case 'Взрывобезопасное':
			min_tal_e = Math.min(tal.priceAJAX.bolgariya_el_canatVBI_t, tal.priceAJAX.bolgariya_el_canatUSVVBI_t);
			break;
		case 'Пожаробезопасное':
			min_tal_e = Math.min(tal.priceAJAX.russia_el_t, tal.priceAJAX.bolgariya_el_canat_t, tal.priceAJAX.bolgariya_el_cep_t);
			break;
		default:
			min_tal_e = tal.priceAJAX.russia_el_t;
			break;
	}
	

	body_tal_element('ruchnaya', '17.1.png', 'ruchnaya_t_ch', 'Ручное управление', 'i17_2', 'Left', ruchnie_t, window_tal, min_tal_r /*минимальная цена на ручную таль от $$$$ */, '');

	function ruchnie_t (el) {
		try {
			document.querySelector('#bolg_tal_e').remove();
			document.querySelector('#rus_tal_e').remove();
			document.querySelector('#ch_tal_e').remove();
		} catch(e) {
			console.log(e);
		}
		try {			
			document.querySelector('#kanatnaya').remove();
			document.querySelector('#tcepnaya').remove();
		} catch(e) {
			console.log(e);
		}
		try {			
			document.querySelector('#std_visota').remove();
			document.querySelector('#middle_visota').remove();
		} catch(e) {
			console.log(e);
		}
		try {$('#rte, #bte').remove()}catch(e){console.log(e)}
		tal.yes = 1;
		tal.upravlenie = 'Ручное';
		tal.type = 'Цепная';
		if (el.target.localName == 'img') {
			if (this.nextSibling.nextSibling.style.backgroundColor == 'rgb(230, 2, 22)') {
				return alert('Данный пункт уже выбран!');
			}
			else {
				this.nextSibling.nextSibling.style.backgroundColor = 'rgb(230, 2, 22)';
				document.querySelector('button.electro_t_ch').style.backgroundColor = 'rgb(181, 33, 46)';
			}
		}
		if (el.target.localName == 'button') {
			if (this.style.backgroundColor == 'rgb(230, 2, 22)') {
				return alert('Данный пункт уже выбран!');
			}
			else {
				this.style.backgroundColor = 'rgb(230, 2, 22)';
				document.querySelector('button.electro_t_ch').style.backgroundColor = 'rgb(181, 33, 46)';
			}
		}
		easyscroll(250);
		if (cran._2.search(/Взрывобезопасное/i) == 0) {
			tal.country = 'Россия';
			tal.img = '17.8.png';
			cran.calculate_tal();
			this.parentElement.parentElement.remove();
			setTimeout(()=>{calc_all_dop()},2200)
			easyscroll(1178);
		}
		else {
			body_tal_element('rus_tal_r', '17.8.png', 'rus_t_Rch', 'Россия', 'i17_8', 'Left', rusr_t, window_tal, '', tal.priceAJAX.rt_r);
			body_tal_element('ch_tal_r', '17.9.png', 'ch_t_Rch', 'Китай', 'i17_9', '', chr_t, window_tal, '', tal.priceAJAX.ct_r);
			body_tal_element('sh_tal_r', '17.10.png', 'sh_t_Rch', 'Швейцария', 'i17_10', 'Right', shr_t, window_tal, '', tal.priceAJAX.st_r);
		}
		function rusr_t () {
			tal.country = 'Россия';
			tal.img = '17.8.png';
			cran.calculate_tal();
			this.parentElement.parentElement.remove();
			setTimeout(()=>{calc_all_dop()},2200)
			easyscroll(1178);
		}

		function chr_t () {
			tal.country = 'Китай';
			tal.img = '17.9.png';
			cran.calculate_tal();
			this.parentElement.parentElement.remove();
			setTimeout(()=>{calc_all_dop()},2200)
			easyscroll(1178);
		}

		function shr_t () {
			tal.country = 'Швейцария';
			tal.img = '17.10.png';
			cran.calculate_tal();
			this.parentElement.parentElement.remove();
			setTimeout(()=>{calc_all_dop()},2200)
			easyscroll(1178);
		}

	}

/*
*
* ЭЛЕКТРО УПРАВЛЕНИЕ ТАЛИ
*
*/

	body_tal_element('elektricheskaya', '17.2.png', 'electro_t_ch', 'Электро управление', 'i17_2', 'Right', elektro_t, window_tal, min_tal_e /*минимальная цена на ручную таль от $$$$ */, '')

	function elektro_t (el) {
		try {
			document.querySelector('#rus_tal_r').remove();
			document.querySelector('#ch_tal_r').remove();
			document.querySelector('#sh_tal_r').remove();
		} catch(e) {
			console.log(e);
		}		
		tal.yes = 1;
		tal.upravlenie = 'Электро';
		tal.type = '';
		if (el.target.localName == 'img') {
			if (this.nextSibling.nextSibling.style.backgroundColor == 'rgb(230, 2, 22)') {
				return alert('Данный пункт уже выбран!');
			}
			else {
				this.nextSibling.nextSibling.style.backgroundColor = 'rgb(230, 2, 22)';
				document.querySelector('button.ruchnaya_t_ch').style.backgroundColor = 'rgb(181, 33, 46)';
			}
		}
		if (el.target.localName == 'button') {
			if (this.style.backgroundColor == 'rgb(230, 2, 22)') {
				return alert('Данный пункт уже выбран!');
			}
			else {
				this.style.backgroundColor = 'rgb(230, 2, 22)';
				document.querySelector('button.ruchnaya_t_ch').style.backgroundColor = 'rgb(181, 33, 46)';
			}
		}
		easyscroll(300);

		if (cran._2.search(/Взрывобезопасное/i) == 0) {
			tal.type = 'Канатная';
			body_tal_element('bolg_tal_e', '17.5.png', 'bolg_t_Ech', 'Болгария', 'i17_5', 'Left', bolge_t, window_tal, Math.min(tal.priceAJAX.bolgariya_el_canatVBI_t, tal.priceAJAX.bolgariya_el_canatUSVVBI_t));
			$('#bolg_tal_e').css({
				display: 'block',
				margin: '0 auto'
			})
		}
		else {
			body_tal_element('bolg_tal_e', '17.5.png', 'bolg_t_Ech', 'Болгария', 'i17_5', 'Left', bolge_t, window_tal, Math.min(tal.priceAJAX.bolgariya_el_canat_t, tal.priceAJAX.bolgariya_el_canatUSV_t));
			if (cran.temper[0] != '-50' && cran.temper[1] != '+60') {
				body_tal_element('rus_tal_e', '17.6.png', 'rus_t_Ech', 'Россия', 'i17_6', '', ruse_t, window_tal, '', tal.priceAJAX.russia_el_t);
			}
			else {
				$('#bolg_tal_e').css({
					display: 'block',
					margin: '0 auto'
				})
			}
			$('.hide_country_e').removeClass('hide_country_e').addClass('show_country_e');
			$('.show_country_r').removeClass('show_country_r').addClass('hide_country_r');
		}
		if (tal.ispolnnie != 'Пожаробезопасное' && cran._2.search(/Взрывобезопасное/i) != 0 && ( cran.temper[0] != '-50' && cran.temper[1] != '+60' )) {
			body_tal_element('ch_tal_e', '17.7.png', 'ch_t_Ech', 'Китай', 'i17_7', 'Right', che_t, window_tal, Math.min(tal.priceAJAX.china_el_canat_t, tal.priceAJAX.china_el_cep_t));
		}
		else {
			if (document.getElementById('rus_tal_e') != null) {
				$('#bolg_tal_e').css('margin-left', '17%');
			}
		}

		function bolge_t () {
			try {$('#rte, #bte').remove()}catch(e){console.log(e)}
			console.log('bolge_t')
			easyscroll(700);
			tal.country = 'Болгария';
			tal.img = '17.5.png';
			if (tal.gp <= 2000 && tal.visota <= 12000 && (cran.temper[1] != '+60') && cran._2.search(/Взрывобезопасное/i) != 0 ) {
				try {
					document.querySelector('#std_visota').remove();
					document.querySelector('#middle_visota').remove();
				} catch(e) {
					console.log(e);
				}
				try {
					document.querySelector('#kanatnaya').remove();
					document.querySelector('#tcepnaya').remove();
				} catch(e) {
					console.log(e);
				}
				body_tal_element('kanatnaya', '17.3.png', 'electro_t_kanat', 'Канатная', 'i17_3', 'Left', kanatnaya, window_tal)
				body_tal_element('tcepnaya', '17.4.png', 'electro_t_tcep', 'Цепная', 'i17_4', 'Right', tcepnaya, window_tal)
				$('#kanatnaya .prt').text('От ' + String(Number(tal.priceAJAX.bolgariya_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
				$('#tcepnaya .prt').text(String(Number(tal.priceAJAX.bolgariya_el_cep_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
			}
			else {
				tal.type = 'Канатная';
				if (cran._2.search(/Взрывобезопасное/i) == 0) {
					body_tal_element('std_visota', '17.5.1.png', 'electro_t_ch', 'Стандартная высота', 'i17_5_1', 'Left', stdv, window_tal);
					body_tal_element('middle_visota', '17.5.2.png', 'electro_t_ch', 'Уменьшенная высота', 'i17_5_2', 'Right', mdlv, window_tal);
					$('#std_visota .prt').text(String(Number(tal.priceAJAX.bolgariya_el_canatVBI_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
					$('#middle_visota .prt').text(String(Number(tal.priceAJAX.bolgariya_el_canatUSVVBI_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
				}
				else {
					body_tal_element('std_visota', '17.5.1.png', 'electro_t_ch', 'Стандартная высота', 'i17_5_1', 'Left', stdv, window_tal);
					body_tal_element('middle_visota', '17.5.2.png', 'electro_t_ch', 'Уменьшенная высота', 'i17_5_2', 'Right', mdlv, window_tal);
					$('#std_visota .prt').text(String(Number(tal.priceAJAX.bolgariya_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
					$('#middle_visota .prt').text(String(Number(tal.priceAJAX.bolgariya_el_canatUSV_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
				}
				$('.show_type_tal').removeClass('show_type_tal').addClass('hide_type_tal');
			}
		}
		function ruse_t () {
			console.log('ruse_t')
			tal.type = 'Канатная';
			tal.country = 'Россия';
			tal.img = '17.6.png';
			try {
				document.querySelector('#std_visota').remove();
				document.querySelector('#middle_visota').remove();
			} catch(e) {
				console.log(e);
			}
			try {
				document.querySelector('#kanatnaya').remove();
				document.querySelector('#tcepnaya').remove();
			} catch(e) {
				console.log(e);
			}
			dop_opcii_rte();
			easyscroll(700);
		}
		function che_t () {
			try {
				document.querySelector('#std_visota').remove();
				document.querySelector('#middle_visota').remove();
			} catch(e) {
				console.log(e);
			}
			try {
				document.querySelector('#kanatnaya').remove();
				document.querySelector('#tcepnaya').remove();
			} catch(e) {
				console.log(e);
			}
			try {$('#rte').remove()}catch(e){console.log(e)}
			tal.country = 'Китай';
			tal.img = '17.7.png';
			if ((tal.gp <= 500 && tal.visota <= 6000) || (tal.gp <= 10000 && tal.visota <= 9000)) {
				body_tal_element('kanatnaya', '17.3.png', 'electro_t_kanat', 'Канатная', 'i17_3', 'Left', kanatnaya, window_tal)
				body_tal_element('tcepnaya', '17.4.png', 'electro_t_tcep', 'Цепная', 'i17_4', 'Right', tcepnaya, window_tal)
				$('#kanatnaya .prt').text('От ' + String(Number(tal.priceAJAX.china_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
				$('#tcepnaya .prt').text(String(Number(tal.priceAJAX.china_el_cep_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
				easyscroll(800);
			}
			else {
				tal.type = 'Канатная';
				cran.calculate_tal();
				this.parentElement.parentElement.remove();
				setTimeout(()=>{calc_all_dop()},2200)
				easyscroll(800);
			}
		}

		function kanatnaya () {
			console.log('kanatnaya');
			try {$('#rte, #bte').remove()}catch(e){console.log(e)}
			easyscroll(1100);
			if (tal.country == 'Болгария') {
				tal.type = 'Канатная';
				body_tal_element('std_visota', '17.5.1.png', 'electro_t_ch', 'Стандартная высота', 'i17_5_1', 'Left', stdv, window_tal);
				body_tal_element('middle_visota', '17.5.2.png', 'electro_t_ch', 'Уменьшенная высота', 'i17_5_2', 'Right', mdlv, window_tal);
				$('#std_visota .prt').text(String(Number(tal.priceAJAX.bolgariya_el_canat_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
				$('#middle_visota .prt').text(String(Number(tal.priceAJAX.bolgariya_el_canatUSV_t).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽');
				document.querySelector('.container .av-content-full.units').offsetHeight < document.getElementById('new_tal_window').scrollHeight ? document.querySelector('.container .av-content-full.units').style.height = (document.getElementById('new_tal_window').scrollHeight+200)+'px':false;
			}
			else {
				tal.type = 'Канатная';
				cran.calculate_tal();
				this.parentElement.parentElement.remove();
				setTimeout(()=>{calc_all_dop()},2200)
			}
		}
		function tcepnaya () {
			console.log('tcepnaya');
			try {$('#rte, #bte').remove()}catch(e){console.log(e)}
			try {
				document.querySelector('#std_visota').remove();
				document.querySelector('#middle_visota').remove();
			} catch(e) {
				console.log(e);
			}
			tal.type = 'Цепная';
			if (tal.country != 'Болгария') {
				cran.calculate_tal();
				this.parentElement.parentElement.remove();
				setTimeout(()=>{calc_all_dop()},2200)
				easyscroll(700);
				console.log('china cepnaya')
			}
			else {
				console.log('bolgariya cepnaya')
				dop_opcii_bte();
				easyscroll(978);
				document.querySelector('.container .av-content-full.units').offsetHeight < document.getElementById('new_tal_window').scrollHeight ? document.querySelector('.container .av-content-full.units').style.height = (document.getElementById('new_tal_window').scrollHeight+200)+'px':false;
			}
		}

		function stdv () {
			cran._2.search(/Взрывобезопасное/i) == 0 ? tal.type = 'Канатная ВБИ' : tal.type = 'Канатная';
			tal.img = '17.5.1.png';
			dop_opcii_bte();
			document.querySelector('.container .av-content-full.units').offsetHeight < document.getElementById('new_tal_window').scrollHeight ? document.querySelector('.container .av-content-full.units').style.height = (document.getElementById('new_tal_window').scrollHeight+200)+'px':false;
		}

		function mdlv () {
			cran._2.search(/Взрывобезопасное/i) == 0 ? tal.type = 'Канатная УСВ ВБИ' : tal.type = 'Канатная УСВ';
			tal.img = '17.5.2.png';
			dop_opcii_bte();
			document.querySelector('.container .av-content-full.units').offsetHeight < document.getElementById('new_tal_window').scrollHeight ? document.querySelector('.container .av-content-full.units').style.height = (document.getElementById('new_tal_window').scrollHeight+200)+'px':false;
		}

		function dop_opcii_bte () {
			try {
				$('#bte').remove();
			} catch(e) {
				// statements
				console.log(e);
			}
			easyscroll(1200);
			let block_opcii = document.createElement('div');
				block_opcii.id = 'bte';
				block_opcii.style.marginTop = '1em';
				block_opcii.style.position = 'relative';

			let zagolovok_do = document.createElement('h2');
				zagolovok_do.innerText = 'Предлагаем дополнительные опции для болгарской канатной тали';
				zagolovok_do.style.textAlign = 'center';

			block_opcii.appendChild(zagolovok_do);
			if (tal.ispolnnie == 'Взрывобезопасное' && tal.type == 'Канатная ВБИ') {
				dopopciitalelement('i17_101', 'dop_himagrsreda', 'dop_bolg_kanat_1', 'Химическая агрессивная среда ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.himagrsreda[2]);
				dopopciitalelement('i17_102', 'dop_tropikisp', 'dop_bolg_kanat_2', 'Тропическое исполнение ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.tropikisp[2]);
				dopopciitalelement('i17_105', 'dop_konc_vikl', 'dop_bolg_kanat_5', 'Концевой выключатель на передвижение ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.konc_vikl[2]);
				dopopciitalelement('i17_106', 'dop_seismichnost9', 'dop_bolg_kanat_6', 'Сейсмичность 9 баллов ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.seismichnost9[2]);
				dopopciitalelement('i17_108', 'dop_micropodiom', 'dop_bolg_kanat_8', 'Микроподъем ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.micropodiom[2]);
				dopopciitalelement('i17_110', 'dop_mikroperemeshenie', 'dop_bolg_kanat_10', 'Микроперемещение ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]);
				try {
					setTimeout(()=>{
						$('#dop_himagrsreda').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.himagrsreda) );
						$('#dop_tropikisp').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.tropikisp) );
						$('#dop_konc_vikl').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.konc_vikl) );
						$('#dop_seismichnost9').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.seismichnost9) );
						$('#dop_micropodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.micropodiom) );
						$('#dop_mikroperemeshenie').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.mikroperemeshenie) );
						check_dop_opcii_taley();
				},700)
				}
				catch (e) {
					console.log(e)
				}
			}
			else if (tal.ispolnnie != 'Взрывобезопасное' && tal.type == 'Канатная') {
				dopopciitalelement('i17_101', 'dop_himagrsreda', 'dop_bolg_kanat_1', 'Химическая агрессивная среда ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.himagrsreda[2]);
				dopopciitalelement('i17_102', 'dop_tropikisp', 'dop_bolg_kanat_2', 'Тропическое исполнение ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.tropikisp[2]);
				dopopciitalelement('i17_103', 'dop_morskor', 'dop_bolg_kanat_3', 'Морское исполнение ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.morskor[2]);
				dopopciitalelement('i17_104', 'dop_zashcran', 'dop_bolg_kanat_4', 'Защитный экран ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.zashcran[2]);
				dopopciitalelement('i17_105', 'dop_konc_vikl', 'dop_bolg_kanat_5', 'Концевой выключатель на передвижение ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.konc_vikl[2]);
				dopopciitalelement('i17_106', 'dop_seismichnost9', 'dop_bolg_kanat_6', 'Сейсмичность 9 баллов ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.seismichnost9[2]);
				dopopciitalelement('i17_107', 'dop_vtoroitormoz', 'dop_bolg_kanat_7', 'Второй тормоз на подъем ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.vtoroitormoz[2]);
				dopopciitalelement('i17_108', 'dop_micropodiom', 'dop_bolg_kanat_8', 'Микроподъем ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.micropodiom[2]);
				dopopciitalelement('i17_109', 'dop_skorost_podiomaV2', 'dop_bolg_kanat_9', 'Скорость подъема V2 ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.skorost_podiomaV2[2]);
				dopopciitalelement('i17_110', 'dop_mikroperemeshenie', 'dop_bolg_kanat_10', 'Микроперемещение ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]);
				try {
					setTimeout(()=>{
						$('#dop_himagrsreda').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.himagrsreda) );
						$('#dop_tropikisp').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.tropikisp) );
						$('#dop_morskor').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.morskor) );
						$('#dop_zashcran').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.zashcran) );
						$('#dop_konc_vikl').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.konc_vikl) );
						$('#dop_seismichnost9').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.seismichnost9) );
						$('#dop_vtoroitormoz').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.vtoroitormoz) );
						$('#dop_micropodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.micropodiom) );
						$('#dop_skorost_podiomaV2').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.skorost_podiomaV2) );
						$('#dop_mikroperemeshenie').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.mikroperemeshenie) );
						check_dop_opcii_taley();
					},700)
				}
				catch (e) {
					console.log(e)
				}
			}
			else if (tal.ispolnnie == 'Взрывобезопасное' && tal.type == 'Канатная УСВ ВБИ') {
				dopopciitalelement('i17_101', 'dop_himagrsreda', 'dop_bolg_kanat_1', 'Химическая агрессивная среда ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.himagrsreda[2]);
				dopopciitalelement('i17_102', 'dop_tropikisp', 'dop_bolg_kanat_2', 'Тропическое исполнение ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.tropikisp[2]);
				dopopciitalelement('i17_105', 'dop_konc_vikl', 'dop_bolg_kanat_5', 'Концевой выключатель на передвижение ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.konc_vikl[2]);
				dopopciitalelement('i17_106', 'dop_seismichnost9', 'dop_bolg_kanat_6', 'Сейсмичность 9 баллов ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.seismichnost9[2]);
				dopopciitalelement('i17_108', 'dop_micropodiom', 'dop_bolg_kanat_8', 'Микроподъем ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.micropodiom[2]);
				dopopciitalelement('i17_110', 'dop_mikroperemeshenie', 'dop_bolg_kanat_10', 'Микроперемещение ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]);

				try {
					setTimeout(()=>{
						$('#dop_himagrsreda').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.himagrsreda) );
						$('#dop_tropikisp').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.tropikisp) );
						$('#dop_konc_vikl').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.konc_vikl) );
						$('#dop_seismichnost9').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.seismichnost9) );
						$('#dop_micropodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.micropodiom) );
						$('#dop_mikroperemeshenie').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.mikroperemeshenie) );
						check_dop_opcii_taley();
					}, 700)
				}
				catch (e) {
					console.log(e);
				}
			}
			else if (tal.ispolnnie != 'Взрывобезопасное' && tal.type == 'Канатная УСВ') {
				dopopciitalelement('i17_101', 'dop_himagrsreda', 'dop_bolg_kanat_1', 'Химическая агрессивная среда ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.himagrsreda[2]);
				dopopciitalelement('i17_102', 'dop_tropikisp', 'dop_bolg_kanat_2', 'Тропическое исполнение ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.tropikisp[2]);
				dopopciitalelement('i17_103', 'dop_morskor', 'dop_bolg_kanat_3', 'Морское исполнение ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.morskor[2]);
				dopopciitalelement('i17_104', 'dop_zashcran', 'dop_bolg_kanat_4', 'Защитный экран ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.zashcran[2]);
				dopopciitalelement('i17_105', 'dop_konc_vikl', 'dop_bolg_kanat_5', 'Концевой выключатель на передвижение ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.konc_vikl[2]);
				dopopciitalelement('i17_106', 'dop_seismichnost9', 'dop_bolg_kanat_6', 'Сейсмичность 9 баллов ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.seismichnost9[2]);
				dopopciitalelement('i17_107', 'dop_vtoroitormoz', 'dop_bolg_kanat_7', 'Второй тормоз на подъем ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.vtoroitormoz[2]);
				dopopciitalelement('i17_108', 'dop_micropodiom', 'dop_bolg_kanat_8', 'Микроподъем ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.micropodiom[2]);
				dopopciitalelement('i17_109', 'dop_skorost_podiomaV2', 'dop_bolg_kanat_9', 'Скорость подъема V2 ', 1, block_opcii, tal.dopopcii.bolgariya_kanat.skorost_podiomaV2[2]);
				dopopciitalelement('i17_110', 'dop_mikroperemeshenie', 'dop_bolg_kanat_10', 'Микроперемещение ', 2, block_opcii, tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]);
				try {
					setTimeout(()=>{
						$('#dop_himagrsreda').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.himagrsreda) );
						$('#dop_tropikisp').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.tropikisp) );
						$('#dop_morskor').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.morskor) );
						$('#dop_zashcran').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.zashcran) );
						$('#dop_konc_vikl').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.konc_vikl) );
						$('#dop_seismichnost9').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.seismichnost9) );
						$('#dop_vtoroitormoz').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.vtoroitormoz) );
						$('#dop_micropodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.micropodiom) );
						$('#dop_skorost_podiomaV2').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.skorost_podiomaV2) );
						$('#dop_mikroperemeshenie').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.mikroperemeshenie) );
						check_dop_opcii_taley();
					},700)
				}
				catch (e) {
					console.log(e);
				}
			}
			else if (tal.type == 'Цепная') {
				dopopciitalelement('i17_114', 'dop_telezhkaelektroprivod', 'dop_bolg_cep_1', 'Тележка передвижения с электо приводом ', 1, block_opcii, tal.dopopcii.bolgariya_cep.telezhkaelektroprivod[2]);
				dopopciitalelement('i17_115', 'dop_telezhkaruchnoyprivod', 'dop_bolg_cep_2', 'Тележка передвижения с ручным приводом ', 2, block_opcii, tal.dopopcii.bolgariya_cep.telezhkaruchnoyprivod[2]);
				try {
					setTimeout(()=>{
						$('#dop_telezhkaelektroprivod').text( return_price_doptal(tal.priceAJAX.bolgariya_el_cep_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_cep.telezhkaelektroprivod) );
						$('#dop_telezhkaruchnoyprivod').text( return_price_doptal(tal.priceAJAX.bolgariya_el_cep_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_cep.telezhkaruchnoyprivod) );
						check_dop_opcii_taley();
					},700)
				} catch(e) {
					// statements
					console.log(e);
				}
			}

			let but = document.createElement('button');
				but.id = 'chengetal';
				but.innerText = 'Добавить таль';
				but.addEventListener('click', function () {
					cran.calculate_tal();
					setTimeout(()=>{calc_all_dop();this.parentElement.parentElement.remove()},2200)
					easyscroll(1178);
				})
				but.addEventListener('mouseover', set_check_dop_opcii_taley);

			block_opcii.appendChild(but);
			window_tal.appendChild(block_opcii);


		}

		function dop_opcii_rte () {
			try {$('#bte, #rte').remove()}catch(e){console.log(e)}
			try {
				document.querySelector('#std_visota').remove();
				document.querySelector('#middle_visota').remove();
			} catch(e) {
				// statements
				console.log(e);
			}
			try {
				document.querySelector('#kanatnaya').remove();
				document.querySelector('#tcepnaya').remove();
			} catch(e) {
				// statements
				console.log(e);
			}
			let block_opcii = document.createElement('div');
				block_opcii.id = 'rte';
				block_opcii.style.marginTop = '1em';
				block_opcii.style.position = 'relative';

			let zagolovok_do = document.createElement('h2');
				zagolovok_do.innerText = 'Предлагаем дополнительные опции для российской канатной тали';
				zagolovok_do.style.textAlign = 'center';
			block_opcii.appendChild(zagolovok_do);


			let but = document.createElement('button');
				but.id = 'chengetal';
				but.innerText = 'Добавить таль';
				but.addEventListener('click', function () {
					cran.calculate_tal();
					setTimeout(()=>{calc_all_dop();this.parentElement.parentElement.remove()},2200)
					easyscroll(1178);
				})
			dopopciitalelement('i17_113', 'dop_vtoroitormoznapodiom', 'dop_russia_kanat_1', 'Второй тормоз на подъем ', 1, block_opcii, tal.dopopcii.russia_kanat.vtoroitormoznapodiom[2]);
			try {
				setTimeout(()=>{
					$('#dop_vtoroitormoznapodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_cep_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.russia_kanat.vtoroitormoznapodiom) );
					check_dop_opcii_taley();
				},700)
			} catch(e) {
				// statements
				console.log(e);
			}

			block_opcii.appendChild(but);
			window_tal.appendChild(block_opcii);
		}
	}
	document.getElementById('dop_block').appendChild(window_tal);
});

function dopopciitalelement (informid, priceid, fo, txt, chet, par, cheked) {
	let blok = document.createElement('div');
		blok.className = 'conteiner_dopov';

	let info = document.createElement('span');
		info.className = 'inform';
		info.innerHTML = '<i data-info="'+informid+'" class="fa fa-info-circle" aria-hidden="true"></i>';
	blok.appendChild(info);

	let lab = document.createElement('label');
		lab.className = 'opt_tali bolgarskaya_kanat';
		lab.setAttribute('for', fo);
		lab.innerText = txt;

	let idprice = document.createElement('b');
		idprice.id = priceid;

	lab.appendChild(idprice);

	let inp = document.createElement('input');
		inp.setAttribute('type', 'checkbox');
		inp.id = fo;
		cheked?inp.cheked=true:inp.cheked=false;

	if (chet == 1) {
		lab.insertBefore(inp, lab.firstChild);
	}
	else {
		lab.appendChild(inp)
	}
	blok.appendChild(lab);
	par.appendChild(blok);
}

function body_tal_element (main_id, image, class_img_button, zagolovok, spravka, position, func, par, prctlot, prctl) {
	let win_tal = document.createElement('div');
		win_tal.id = main_id;
		win_tal.className = 'animated zoomIn'+position;

		let win_tal_img = document.createElement('img');
			win_tal_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+image;
			win_tal_img.className = 'allimg '+class_img_button;
			win_tal_img.addEventListener('click', func);
		win_tal.append(win_tal_img);

		let win_tal_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
			win_tal_h4.className = 'electro_t_ch';
			win_tal_h4.innerText = zagolovok;
		win_tal.append(win_tal_h4);

		let win_tal_button = document.createElement('button');
			win_tal_button.type = 'button';
			win_tal_button.innerText = 'Выбрать';
			win_tal_button.classList = 'buttonslil '+class_img_button;
			win_tal_button.addEventListener('click', func);
		win_tal.append(win_tal_button);

		let clearer = document.createElement('div');
			clearer.style.width = '100%';
			clearer.style.clear = 'both';
		win_tal.append(clearer);

		let win_tal_price = document.createElement('span'); // подпись под картнкой / КНОПКА
			win_tal_price.className = 'prt';
			win_tal_price.innerText = prctlot ? 'От '+String(Number(prctlot).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽': prctl ? String(Number(prctl).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '):'';
		win_tal.append(win_tal_price);

		let win_tal_inf = document.createElement('div'); // Кнопка ИНФО
			win_tal_inf.classList = 'container_button';
			win_tal_inf.innerHTML = '<span class="inform inforeateble animated"><i data-info="'+spravka+'" class="fa fa-info-circle" aria-hidden="true"></i></span>';
		win_tal.append(win_tal_inf);

	par.append(win_tal);
}

$('body').on('click', '#closeTal', function(event) {
	$(this).parent('#new_tal_window').detach();
	$('html, body').animate({ 'scrollTop':'700px' }, 400)
	tal.yes=0;
})

function return_price_doptal (price, one_euro, element) {
	let res;
	switch (element[0]) {
		case '%': // Percents
			res = price * element[1] /100;
			break;
		case 'e': // EURO calculate
			res = one_euro * element[1];
			break;
		case 'r': //  Plus ruble
			res = element[1];
			break;
		default:
			// statements_def
			break;
	}
	return String(Number(res).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')+' ₽';
}

});