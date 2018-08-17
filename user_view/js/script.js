var calc_ajaxurl = {url:location.origin+'/wp-admin/admin-ajax.php'}
var locate = location.origin;
document.getElementById('close_spravka').addEventListener('click', hs)
document.querySelector('#spravka>a').addEventListener('click', hs)
function hs () {this.parentElement.classList.remove('slideInDown');this.parentElement.classList.add('slideOutDown');setTimeout(()=>{this.parentElement.style.display = 'none'}, 300)}

jQuery(document).ready(($)=>{
	cran.step = '';
	let steps = document.createElement('span');
		steps.className = 'animated zoomIn';
		steps.id = 'steps';
		steps.innerText = cran.step;
		document.querySelector('#main_block_for_steps').insertBefore(steps, document.querySelector('#main_block_for_steps').firstChild);
	$('html, body').animate({ scrollTop: '0px' }, 700)

	$('._0').on('click', function () {
		$('#steps').css('display', 'block');
		hide($('#_0'));
		cran.step = 'Шаг 1 из 11'
		next_group( $('#_1'), 0 );
		let add_src_resume = document.createElement('script');
			add_src_resume.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/js/resume.js';
		let add_src_change_dop = document.createElement('script');
			add_src_change_dop.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/js/change_dop.js';
		document.getElementById('scripter').appendChild(add_src_resume)
		document.getElementById('scripter').appendChild(add_src_change_dop)
	});
/************************************************************************************************************************
*																														*
*									ВЫБОР КРАНА ОПОРНЫЙ ИЛ Подвесной  ШАГ-1												*
*																														*
************************************************************************************************************************/
	
	$('._11').on('click', function () {
		hide($('#_1'));
		cran.step = 'Шаг 2 из 11'
		next_group( $('#_2'), 10 );
		cran._1 = 'Опорный';
	});

	$('._12').on('click', function () {
		hide($('#_1'));
		cran.step = 'Шаг 2 из 11'
		next_group( $('#_2'), 10 );
		cran._1 = 'Подвесной';
	});
/************************************************************************************************************************
*																														*
*				ВЫБОР ИСПОЛНЕНИЯ КРАНА ОБЩЕПРОМЫШЛЕННЫЙ, ВЗЫВОБЕЗОПАСНОЕ И ПОЖАРОБЕЗОПАСНОЕ	 ШАГ-2						*
*																														*
************************************************************************************************************************/

	$('.obsheprom').click(function () {
		hide($('#_2'));
		cran.step = 'Шаг 3 из 11'
		next_group( $('#_3'), 7.5 );
		cran._2 = tal.ispolnnie = 'Общепромышленное';
	});
	$('.vzrivo').click(function () {easyscroll(280);
		$('.hide_dop_vzr').removeClass('hide_dop_vzr hide_dop_animate_vzr').addClass('back_dop_animate_vzr');
		$('.hide_dop_animate_vzr').removeClass('hide_dop_animate_vzr').addClass('back_dop_animate_vzr');
		$('.back_dop_animate_pozh').removeClass('back_dop_animate_pozh').addClass('hide_dop_animate_pozh');
	});
		$('.vzrivo_next').click(function () {
			let chkvzr = document.getElementsByName('ispbezop');
			for (var i = 0; i < chkvzr.length; i++) {
				if(chkvzr[i].checked == true) {
					cran._2 = 'Взрывобезопасное класса '+chkvzr[i].value;
				}
				continue
			}
			$('.back_dop_animate_vzr').removeClass('back_dop_animate_vzr').addClass('hide_dop_animate_vzr');
			hide($('#_2'));
			cran.step = 'Шаг 3 из 11'
			tal.ispolnnie = 'Взрывобезопасное';
			next_group( $('#_3'), 7.5 );
			$('._36').css('display','none');$('#Джойстик').css('display','none');
			tal.dopopcii.bolgariya_kanat.himagrsreda[1] = 5;
			tal.dopopcii.bolgariya_kanat.tropikisp[1] = 10;
			tal.dopopcii.bolgariya_kanat.konc_vikl[1] = 550;
			tal.dopopcii.bolgariya_kanat.seismichnost9[1] = 10;
			tal.dopopcii.bolgariya_kanat.micropodiom[0] = 'e';
			tal.dopopcii.bolgariya_kanat.micropodiom[1] = 670;
			tal.dopopcii.bolgariya_kanat.mikroperemeshenie[0] = 'e';
			tal.dopopcii.bolgariya_kanat.mikroperemeshenie[1] = 450;
		});


	$('.pozharo').click(function () {easyscroll(280)
		$('.hide_dop_pozh').removeClass('hide_dop_pozh hide_dop_animate_pozh').addClass('back_dop_animate_pozh');
		$('.hide_dop_animate_pozh').removeClass('hide_dop_animate_pozh').addClass('back_dop_animate_pozh');
		$('.back_dop_animate_vzr').removeClass('back_dop_animate_vzr').addClass('hide_dop_animate_vzr');
	});
		$('.pozharo_next').click(function () {
			let chkpozh = document.getElementsByName('isppozh');
			for (var i = 0; i < chkpozh.length; i++) {
				if(chkpozh[i].checked == true) {
					cran._2 = 'Пожаробезопасное класса '+chkpozh[i].value;
				}
				continue
			}
			$('.back_dop_animate_pozh').removeClass('back_dop_animate_pozh').addClass('hide_dop_animate_pozh');
			hide($('#_2'));
			cran.step = 'Шаг 3 из 11'
			tal.ispolnnie = 'Пожаробезопасное';
			cran.setszo = 'IP54';
			next_group( $('#_3'), 7.5 );});


/************************************************************************************************************************
*																														*
*		ВЫБОР СПОСОБА УПРАВЛЕНИЯ КРАНОМ - РУЧНОЕ ИЛИ ЭЛЕКТРО УПРАВЛЕНИЕ, ПОДВЕСНОЙ ПУЛЬТ ИЛИ РАДИОУПРАВЛЕНИЕ ШАГ-3 		*
*																														*
************************************************************************************************************************/
	$('._31').on('click', function () {
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		next_group( $('#грузоподъемность'), 0 );
		cran._3 = 'Ручное';
		cran._3Type = 'Нет при ручном управлении';
		$('#gpO > ul li:nth-child(9)').css('display','none');
		$('#gpO > ul li:nth-child(10)').css('display','none');
		$('#gpP > ul li:nth-child(9)').css('display','none');
		$('#gpP > ul li:nth-child(10)').css('display','none');
		$('#грузоподъемность div:nth-child(10)').css('display','none');
		$('#грузоподъемность div:nth-child(11)').css('display','none');
		gp_insert_price();
	});

	$('._32').click(function () {
		$('.hide_dop_el').removeClass('hide_dop_el hide_dop_animate_el').addClass('back_dop_animate_el');
		easyscroll(480);
		$('#main_block_for_steps').css('height', '1100px');
		cran._3 = 'Электро';
	});
	$('button._33_next, img._33_next').on('click', function () {
		gp_insert_price();
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		cran._3Type = 'Подвесной пульт';
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
		next_group( $('#грузоподъемность'), 0 ); // НОВОЕ
		//next_group( $('#razmeshenie'), 0 ); СТАРОЕ
	});
	$('button._34, img._34').click(function () {
		$('#main_block_for_steps').css('height', '1530px');
		$('#vidipultov').css('display','block');easyscroll(920);
	})
	$('button._35, img._35').click(function () {$('#main_block_for_steps').css('height', '2000px');// Пульт
		$('#proizvositeli_pult').animate({'bottom':'-378px'}, 800);easyscroll(1200);
		cran._3Type = 'Радиоуправление с пультом';
		$('._37_j, ._38_j, ._39_j').parent().css('display', 'none');
		if (cran._2.search(/Взрыв/i) != -1) {
			$('._37vbi, ._38vbi, ._39vbi').parent().css('display', 'inline-block');
			$('._37, ._38, ._39').parent().css('display', 'none');
		} else {
			$('._37vbi, ._38vbi, ._39vbi').parent().css('display', 'none');
			$('._37, ._38, ._39').parent().css('display', 'inline-block');
		}
	});
	$('button._36, img._36').click(function () {$('#main_block_for_steps').css('height', '2000px'); //Джостик
			cran._3Type = 'Радиоуправление с джойстиком';
			$('._37_j, ._38_j, ._39_j').parent().css('display', 'inline-block');
			$('._37, ._38, ._39, ._37vbi, ._38vbi, ._39vbi').parent().css('display', 'none');
			$('#proizvositeli_pult').animate({'bottom':'-378px'}, 800);easyscroll(1200);
		})
	$('button._37, img._37, button._37_j, img._37_j, button._37vbi, img._37vbi').click(function () {$('#main_block_for_steps').css('height', '1000px');
		gp_insert_price();
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		cran._3Type = cran._2.search(/Взрыв/i) != -1 ? cran._3Type + ' Telecrane (Тайвань) ВБИ':cran._3Type + ' Telecrane (Тайвань)';
		next_group( $('#грузоподъемность'), 0 ); // НОВОЕ
		//next_group( $('#razmeshenie'), 0 ); СТАРОЕ
	});
	$('button._38, img._38, button._38_j, img._38_j, button._38vbi, img._38vbi').click(function () {$('#main_block_for_steps').css('height', '1000px');
		gp_insert_price();
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		cran._3Type = cran._2.search(/Взрыв/i) != -1 ? ' cran._3Type + Ikusi (Испания) ВБИ':cran._3Type + ' Ikusi (Испания)';
		next_group( $('#грузоподъемность'), 0 ); // НОВОЕ
		//next_group( $('#razmeshenie'), 0 ); СТАРОЕ
	});
	$('button._39, img._39, button._39_j, img._39_j, button._39vbi, img._39vbi').click(function () {$('#main_block_for_steps').css('height', '1000px');
		gp_insert_price();
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		cran._3Type = cran._2.search(/Взрыв/i) != -1 ? cran._3Type + ' HBC-Radiomatic (Германия) ВБИ':cran._3Type + ' HBC-Radiomatic (Германия)';
		next_group( $('#грузоподъемность'), 0 ); // НОВОЕ
		//next_group( $('#razmeshenie'), 0 ); СТАРОЕ
	});
/************************************************************************************************************************
*																														*
*		ВЫБОР ГРУЗОПОДЪЕМНОСТИ КРАНА, ПРИ РУЧНОМ ОТ 500 КГ ДО 10 000 КГ	И ПРИ ЭЛЕКТРО УПРАВЛЕНИИ ДО 16 000 КГ ШАГ-4		*
*																														*
************************************************************************************************************************/
	$('#грузоподъемность').on('click','div', function () {
		let res = $(this).index() + 1;
		console.log(res)
		switch (res) {
	    			case 2: {
	    				tal.gp=cran.gp = 500;
	    				$('#dopik_ulica').text('Доплата 13 000 ₽')
	    				break
	    			}
	    			case 3: {
	    				tal.gp=cran.gp = 1000;
	    				$('#dopik_ulica').text('Доплата 13 000 ₽')
	    				break
	    			}
	    			case 4: {
	    				tal.gp=cran.gp = 2000;
	    				$('#dopik_ulica').text('Доплата 13 000 ₽')
	    				break
	    			}
	    			case 5: {
	    				tal.gp=cran.gp = 3200;
	    				$('#dopik_ulica').text('Доплата 13 000 ₽')
	    				break
	    			}
	    			case 6: {
	    				tal.gp=cran.gp = 5000;
	    				$('#dopik_ulica').text('Доплата 18 000 ₽')
	    				break
	    			}
	    			case 7: {
	    				tal.gp=cran.gp = 6300;
	    				$('#dopik_ulica').text('Доплата 18 000 ₽')
	    				break
	    			}
	    			case 8: {
	    				tal.gp=cran.gp = 8000;
	    				$('#dopik_ulica').text('Доплата 18 000 ₽')
	    				break
	    			}
	    			case 9: {
	    				tal.gp=cran.gp = 10000;
	    				$('#dopik_ulica').text('Доплата 18 000 ₽')
	    				break
	    			}
	    			case 10: {
	    				tal.gp=cran.gp = 12500;
	    				$('#dopik_ulica').text('Доплата 23 500 ₽')
	    				break
	    			}
	    			case 11: {
	    				tal.gp=cran.gp = 16000;
	    				$('#dopik_ulica').text('Доплата 23 500 ₽')
	    				break
	    			}
	    			default:
	    				tal.gp=cran.gp = 500;
	    				break
	    		}

		if (cran._1 == 'Опорный') {
			//document.getElementById('vO').value = cran._3 == 'Электро'? '6000' : '3000'
			hide($('#грузоподъемность'));
			cran.step = 'Шаг 5 из 11'
			next_group( $('#размеры_помещения_опорный'), 0 );
		}
		if (cran._1 == 'Подвесной') {
			//document.getElementById('vP').value = cran._3 == 'Электро'? '6000' : '3000'
			hide($('#грузоподъемность'));
			cran.step = 'Шаг 5 из 11'
			next_group( $('#размеры_помещения_подвесной'), 0 );
		}
		// ТУТ ВЫЧИСЛЯТЬ ЦЕНУ НА ЧАСТОТНЫЙ ПРИВОД НА ПОДЪЁМ У ТАЛИ ИЗ БАЗЫ В ЗАВИСИМОСТИ ОТ ГП
		chastotnik_insert_price();

	});
/************************************************************************************************************************
*																														*
*									ВВОД РАЗМЕРОВ ПОМЕЩЕНИЯ ДЛЯ ОПОРНОГО КРАНА  ШАГ-5	 								*
*																														*
************************************************************************************************************************/
	$('.параметры_помещения_для_опорный').click(function () {
	$('#dpO, #shpO, #vO, #vpO').css('border-color', '#e9e9e9');
		if ($('#dpO').val() <= 0 || $('#dpO').val() > 99000000) {
			alert('Укажите корректную длинну питей, больше 0 мм., но не более 99 000 000 мм.');
			$('#dpO').css('border-color', '#b5212e');
			return
		}
		if ($('#shpO').val() <= 0) {
			alert('Укажите корректную ширину между путями, больше ноля');
			$('#shpO').css('border-color', '#b5212e');
			return
		}
		if ($('#shpO').val() > 28500) {
			$('#shpO').css('border-color', '#c317fb');
		}
		if ($('#vO').val() <= 0 || $('#vO').val() > 36000) {
			alert('Укажите корректную высоту путей, больше 0 мм и меньше 36000 мм');
			$('#vO').css('border-color', '#b5212e');
			return
		}
		if ($('#vpO').val() < 500) {
			alert('Введите высоту до перекрытий потолка не менее 500мм');
			$('#vpO').css('border-color', '#b5212e');
			return
		}
		cran.paramsO.dpO = document.getElementById('dpO').value;
		cran.paramsO.shpO = document.getElementById('shpO').value;
		document.getElementById('valdpO').value = cran.paramsO.shpO;
		tal.visota = cran.paramsO.vO = document.getElementById('vO').value = cran._3 == 'Электро'? '6000' : '3000';
		cran.paramsO.vpO = document.getElementById('vpO').value;
		hide($('#размеры_помещения_опорный'));
		cran._3 == 'Электро' ? cran.step = 'Шаг 6 из 11' : cran.step = 'Шаг 8 из 11';
		cran._3 == 'Ручное' ? next_group( $('#razmeshenie'), 0 ) : next_group( $('#система_управления_краном'), 0 );
		cran._3 == 'Ручное' ? cran.dvs = 'Нет при ручном управлении' : false;
	});
	$('#shpO').on('change', function(event) {
		if ($(this).val() > 28500) {
			$('#specprO').css('display', 'inline-block');
		}
		else {
			$('#specprO').css('display', 'none');
		}
	});
	$('#vpO').on('change', function(event) {
		if ($(this).val() < 500) {
			console.log('Error!!!');
			$('#error500mmO').css('display', 'inline-block');
		}
		else {
			$('#error500mmO').css('display', 'none');
		}
	});
/************************************************************************************************************************
*																														*
*									ВВОД РАЗМЕРОВ ПОМЕЩЕНИЯ ДЛЯ ПОДВЕСНОГО КРАНА  ШАГ-5	 								*
*																														*
************************************************************************************************************************/
	$('.параметры_помещения_для_подвесной').click(function () {
		$('#dpP, #shpP, #vP, #vpP').css('border-color', '#e9e9e9');
		if ($('#dpP').val() <= 0 || $('#dpP').val() > 99000000) {
			alert('Укажите корректную длинну питей, больше 0 мм., но не более 99 000 000 мм.');
			$('#dpP').css('border-color', '#b5212e');
			return
		}
		if ($('#shpP').val() <= 0) {
			alert('Укажите корректную ширину между путями, больше ноля');
			$('#shpP').css('border-color', '#b5212e');
			return
		}
		if ($('#shpP').val() > 15000) {
			$('#shpP').css('border-color', '#c317fb');
		}
		if ($('#vP').val() <= 0) {
			alert('Укажите корректную высоту путей, больше ноля');
			$('#vP').css('border-color', '#b5212e');
			return
		}
		if ($('#vpP').val() < 150) {
			alert('Введите длинну консолей не менее 150мм');
			$('#vpP').css('border-color', '#b5212e');
			return
		}
		if ($('#vpP').val() > ($('#shpP').val() * 40 / 100)) {
			alert('Длина консолей не может превышать 40% от ширины между путями крана! Максимальное значение для данной конфигурации '+ ($('#shpP').val() * 40 / 100) +' мм.');
			$('#vP').css('border-color', '#b5212e');
			return
		}
		cran.paramsP.dpP = document.getElementById('dpP').value;
		cran.paramsP.shpP = document.getElementById('shpP').value;
		document.getElementById('valdpP').value = cran.paramsP.shpP;
		tal.visota = cran.paramsP.vP = document.getElementById('vP').value;
		cran.paramsP.vpP = document.getElementById('vpP').value;
		document.getElementById('valdpPk').value = cran.paramsP.vpP;
		hide($('#размеры_помещения_подвесной'));
		cran._3 == 'Электро' ? cran.step = 'Шаг 6 из 11' : cran.step = 'Шаг 8 из 11';
		cran._3 == 'Ручное' ? next_group( $('#razmeshenie'), 0 ) : next_group( $('#система_управления_краном'), 0 );
		cran._3 == 'Ручное' ? cran.dvs = 'Нет при ручном управлении' : false;

	});
	$('#shpP').on('change', function(event) {
		if ($(this).val() > 15000) {
			$('#specprP').css('display', 'inline-block');
		}
		else {
			$('#specprP').css('display', 'none');
		}
	});
	$('#vpP').on('change', function(event) {
		if ($(this).val() < 150) {
			console.log('Error!!!')
			$('#error500mmP').css('display', 'inline-block');
		}
		else {
			$('#error500mmP').css('display', 'none');
		}
	});
/************************************************************************************************************************
*																														*
*				ВЫБОР СИСТЕМЫ УПРАВЛЕНИЯ КРАНОМ - РЕЛЕЙНО-КОНТАКТОРНАЯ ИЛИ ЧАСТОТНЫЙ ПРЕОБРАЗОВАТЕЛЬ ШАГ-6 				*
*																														*
************************************************************************************************************************/
	$('.реле').click(function () {//8.1
		$('.скрыть_варианты_ук').removeClass('скрыть_варианты_ук скрыть_варианты_animate_ук').addClass('показать_варианты_animate_ук');
		$('.скрыть_варианты_animate_ук').removeClass('скрыть_варианты_animate_ук').addClass('показать_варианты_animate_ук');
		$('.показать_варианты_animate_чп').removeClass('показать_варианты_animate_чп').addClass('скрыть_варианты_animate_чп');
		$('#main_block_for_steps').css('height', '1150px');easyscroll(380);
	})

		$('.одна_с').click(function () {//8.3
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Одна скорость движения';
			cran.code_of_chastotnik = 8.3;
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '1000px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.3') : false;
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
			motor_insert_price();
			easyscroll(170);
			cran.dvs = 'Односкоростной';
		});
		$('.несколько_с').click(function () {//8.4
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Две скорости движения';
			cran.code_of_chastotnik = 8.4;
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '1000px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.4') : false;
			motor_insert_price();
			easyscroll(170);
			cran.dvs = 'Двухскоростной';
		});

	$('.преобразователь').click(function () {//8.2
		$('.скрыть_варианты_чп').removeClass('скрыть_варианты_чп скрыть_варианты_animate_чп').addClass('показать_варианты_animate_чп');
		$('.скрыть_варианты_animate_чп').removeClass('скрыть_варианты_animate_чп').addClass('показать_варианты_animate_чп');
		$('.показать_варианты_animate_ук').removeClass('показать_варианты_animate_ук').addClass('скрыть_варианты_animate_ук');
		$('#main_block_for_steps').css('height', '1150px');easyscroll(380);
	})

		$('.esq').click(function () {
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';
			cran.code_of_chastotnik = 8.5;
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '1000px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;
			cran.chastotnik_price(8.5);
			motor_insert_price();
			easyscroll(170);
		});
		$('.hyundai').click(function () {
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';
			cran.code_of_chastotnik = 8.6;
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '1000px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;
			cran.chastotnik_price(8.6);
			motor_insert_price();
			easyscroll(170);
		});
		$('.danfross').click(function () {
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';
			cran.code_of_chastotnik = 8.7;
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '1000px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;
			cran.chastotnik_price(8.7);
			motor_insert_price();
			easyscroll(170);
		});
/************************************************************************************************************************
*																														*
*										ВЫБОР ВЫБОР МОТОР-РЕДУКТОРА КРАНА ШАГ-7 										*
*																														*
************************************************************************************************************************/
	$('.чаи').click(function () {
		cran.setmotor = 'Червячная передача NMRV (Китай) - стандартно';
		cran.motor_price(9.1);
		cran.code_of_motor = 9.1;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '850px');
	});
	$('.чнг').click(function () {
		cran.setmotor = 'Червячная передача NORD (Германия)';
		cran.motor_price(9.2);
		cran.code_of_motor = 9.2;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '850px');
	});
	$('.цбб').click(function () {
		cran.setmotor = 'Циллиндрическая передача Балкан Эхо (Болгария)';
		cran.motor_price(9.3);
		cran.code_of_motor = 9.3;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '850px');
	});
	$('.цнг').click(function () {
		cran.setmotor = 'Циллиндрическая передача NORD (Германия)';
		cran.motor_price(9.4);
		cran.code_of_motor = 9.4;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '850px');
	});
	$('.цер').click(function () {
		cran.setmotor = 'Циллиндрическая передача Европривод (Россия)';
		cran.motor_price(9.5);
		cran.code_of_motor = 9.5;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '850px');
	});
/************************************************************************************************************************
*																														*
*	 ВЫБОР ТЕМПЕРАТУРНЫЙ РЕЖИМ В СРЕДЕ НАХОЖДЕНИЯ ОТ -50 ДО +60 И ПРЕДПОЛАГАЕМОЕМЕСТО РАСПОЛОЖЕНИЯ КРАНА	ШАГ-8 		*
*																														*
************************************************************************************************************************/
	$('.celsM').click(function() {
		if ($(this).hasClass('cels_selectedM')) {$(this).removeClass('cels_selectedM')}
		else {$('.celsM').removeClass('cels_selectedM');$(this).addClass('cels_selectedM')}
	});
	$('.celsP').click(function() {
		if ($(this).hasClass('cels_selectedP')) {$(this).removeClass('cels_selectedP')}
		else {$('.celsP').removeClass('cels_selectedP');$(this).addClass('cels_selectedP')}
	});


	$('#m50').click(function() {cran.temper[0] = '-50'}).hover(function() {
		$(this).html('<span class="descript_temper" style="background-color:#5689d0">Плюс 25% к стоимости крана</span>')
	}, function() {
		$(this).html('')
	});
	$('#m40').click(function() {cran.temper[0] = '-40'}).hover(function() {
		$(this).html('<span class="descript_temper" style="background-color:#5689d0">Плюс 10% к стоимости крана</span>')
	}, function() {
		$(this).html('')
	});
	$('#m20').click(function() {cran.temper[0] = '-20'});
	$('#p40').click(function() {cran.temper[1] = '+40'});
	$('#p60').click(function() {cran.temper[1] = '+60'}).hover(function() {
		$(this).html('<span class="descript_temper" style="background-color:#b5212e">Плюс 15% к стоимости крана</span>')
	}, function() {
		$(this).html('')
	});



// Выбор местоположения крана
	$('.ulica').click(function () {
		if (cran.temper[0] == undefined) {return alert('Укажите температурный диапозон ОТ')}
		if (cran.temper[1] == undefined) {return alert('Укажите температурный диапозон ДО')}
		hide($('#razmeshenie'));
		cran.step = 'Шаг 9 из 11'
		cran.climat = 'Расположение на открытой местности';
		if (cran._1 == 'Опорный') {
			next_group( $('#пути_для_опорного'), 1 );
		}
		if (cran._1 == 'Подвесной') {
			next_group( $('#пути_для_подвесного'), 1 );
		}
		cran.double_speed(cran.code_of_chastotnik);
	})
	$('.naves').click(function () {
		if (cran.temper[0] == undefined) {return alert('Укажите температурный диапозон ОТ')}
		if (cran.temper[1] == undefined) {return alert('Укажите температурный диапозон ДО')}
		hide($('#razmeshenie'));
		cran.step = 'Шаг 9 из 11'
		cran.climat = 'Расположение под навесом';
		if (cran._1 == 'Опорный') {
			next_group( $('#пути_для_опорного'), 1 );
		}
		if (cran._1 == 'Подвесной') {
			next_group( $('#пути_для_подвесного'), 1 );
		}
		cran.double_speed(cran.code_of_chastotnik);
	})
	$('.pomeshenie').click(function () {
		if (cran.temper[0] == undefined) {return alert('Укажите температурный диапозон ОТ')}
		if (cran.temper[1] == undefined) {return alert('Укажите температурный диапозон ДО')}
		hide($('#razmeshenie'));
		cran.step = 'Шаг 9 из 11'
		cran.climat = 'Расположение в помещении';
		if (cran._1 == 'Опорный') {
			next_group( $('#пути_для_опорного'), 1 );
		}
		if (cran._1 == 'Подвесной') {
			next_group( $('#пути_для_подвесного'), 1 );
		}
		cran.double_speed(cran.code_of_chastotnik);
	})

/************************************************************************************************************************
*																														*
*	 								ВЫБОР КРАНОВЫХ ПУТЕЙ ДЛЯ ОПОРНОГО КРАНА	ШАГ-9 										*
*																														*
************************************************************************************************************************/
	$('.есть_путь').click(function () {
		$('#main_block_for_steps').css('height', '1300px');
		$('#rels_oporniy').css('display', 'block');
		easyscroll(500)
	}); $('.есть_рельс').click(function () {
			$('#main_block_for_steps').css('height', '1700px');
			$('#список_моделей_рельс').animate({'top':'900px'}, 1000);
			easyscroll(950)
			cran.relsMONTAZH = 0;
		})

	$('.нужна_поставка_пути').click(function () {
		hide($('#пути_для_опорного'));
		cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
		$('#main_block_for_steps').css('height', '820px');
		cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 );
		data_rels = { action: 'postavka_rels', _justprice:0, _rels_gp:cran.gp, _rels_upravlenie:cran._3, rels_url_img:location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/', type_cran:cran._1, _rels_dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP }
		$.post( calc_ajaxurl.url, data_rels, function(response)
		{
			let rrr = JSON.parse(response);
			cran.relsO = rrr.name_rls;
			$('#option_1 .dop_parametr:last-child').before(()=>{
				return rrr.htm;
			});
			$('#option_3 .dop_parametr:last-child').before(()=>{
				return rrr.htmmontazh;
			});
		})
	});



	$('.нужен_монтаж_пути').click(function () {
			hide($('#пути_для_опорного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			$('#main_block_for_steps').css('height', '820px');
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 );
	}); $('.нужен_монтаж_рельс').click(function () {
			hide($('#пути_для_опорного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			$('#main_block_for_steps').css('height', '820px');
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 );
			data_rels = { action: 'postavka_rels', _justprice:0, _rels_gp:cran.gp, _rels_upravlenie:cran._3, rels_url_img:location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/', type_cran:cran._1, _rels_dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP }
			$.post( calc_ajaxurl.url, data_rels, function(response)
			{
				let rrr = JSON.parse(response);
				cran.relsO = rrr.name_rls;
				$('#option_3 .dop_parametr:last-child').before(()=>{
					return rrr.htmmontazh;
				});
			})
		});
		$('.rls').on('click', function(event) {
			hide($('#пути_для_опорного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			$('#main_block_for_steps').css('height', '820px');
			$('#список_моделей_рельс').css('display', 'none');
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 );
		});
			$('#p24').click(function () {cran.relsO = 'Р24'; cran.relsMONTAZH ? montazh_rels(1) : false;});
			$('#p43').click(function () {cran.relsO = 'Р43'; cran.relsMONTAZH ? montazh_rels(1) : false;});
			$('#p50').click(function () {cran.relsO = 'Р50'; cran.relsMONTAZH ? montazh_rels(1) : false;});
			$('#kp65').click(function () {cran.relsO = 'КР65'; cran.relsMONTAZH ? montazh_rels(1) : false;});
			$('#kp70').click(function () {cran.relsO = 'КР70'; cran.relsMONTAZH ? montazh_rels(1) : false;});
			$('#kp80').click(function () {cran.relsO = 'КР80'; cran.relsMONTAZH ? montazh_rels(1) : false;});
			$('#kubik40').click(function () {cran.relsO = 'Квадрат 40x40'; cran.relsMONTAZH ? montazh_rels(1) : false;});
			$('#kubik50').click(function () {cran.relsO = 'Квадрат 50x50'; cran.relsMONTAZH ? montazh_rels(1) : false;});
			$('#kubik60').click(function () {cran.relsO = 'Квадрат 60x60'; cran.relsMONTAZH ? montazh_rels(1) : false;});

		function montazh_rels (rls) {
			if ($('#option_1').children('div.rels_crane').length > -1) {
				let dlinna = cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP;
				let relsi = cran.relsO || cran.relsP || '';
				var data_montazh_rels = { action: 'rels_montazh', cran_vid:cran._1, rls_name:relsi, _gp:cran.gp, _upravl:cran._3, _dlinna:dlinna, _shir:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP, add_element:rls }
				$.post( calc_ajaxurl.url, data_montazh_rels, function(response)
				{
					if (rls) {
						let r = JSON.parse(response);
						$('#c4').html(r.addmenu);
						$('#option_3 .dop_parametr:last-child').before(()=>{
							return r.divinopt;
						});
					}
					else {
						$('#c4').html(response)
					}
				});
				/////////////
			}
			else {
				$('#c4').css('display', 'none');
				return;
			}

		}

/************************************************************************************************************************
*																														*
*	 								ВЫБОР КРАНОВЫХ ПУТЕЙ ДЛЯ ПОДВЕСНОГО КРАНА	ШАГ-9 									*
*																														*
************************************************************************************************************************/
	$('.есть_путь2').click(function () {
		$('#main_block_for_steps').css('height', '1200px');
		$('.скрыть_варианты_подврельс').removeClass('скрыть_варианты_подврельс скрыть_варианты_animate_подврельс').addClass('показать_варианты_animate_подврельс');
		easyscroll(720);
	}); $('.путь_подвесной').click(function () {
			hide($('#пути_для_подвесного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 );
			$('#main_block_for_steps').css('height', '820px');
		});

		$('#balka24').click(function () {cran.relsP = 'Балка 24М';});
		$('#balka30').click(function () {cran.relsP = 'Балка 30М';});
		$('#balka36').click(function () {cran.relsP = 'Балка 36М';});
		$('#balka45').click(function () {cran.relsP = 'Балка 45М';});

	$('.нужна_поставка_пути').click(function () {
		hide($('#пути_для_подвесного'));
		cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
		cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 );
		$('#main_block_for_steps').css('height', '820px');

		data_rels = { action: 'postavka_rels', _justprice:0, _rels_gp:cran.gp, _rels_upravlenie:cran._3, rels_url_img:location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/', type_cran:cran._1, _rels_dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP }
		$.post( calc_ajaxurl.url, data_rels, function(response)
		{
			let rrr = JSON.parse(response);
			cran.relsP = rrr.name_rls;
			$('#option_1 .dop_parametr:last-child').before(()=>{
				return rrr.htmP;
			});
		})
	});

	$('.нужен_монтаж_пути2').click(function () {
			hide($('#пути_для_подвесного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			$('#main_block_for_steps').css('height', '820px');
			$('#пути_подвесной').css('display', 'none');
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 );
	});
/************************************************************************************************************************
*																														*
*	 											ВЫБОР ТОКОПОДВОДА	ШАГ-10 												*
*																														*
************************************************************************************************************************/
	$('.ток_требуется').click(()=>{
		$('#main_block_for_steps').css('height', '1100px');easyscroll(350);
		$('.скрыть_варианты_токоподвод').removeClass('скрыть_варианты_токоподвод скрыть_варианты_animate_токоподвод').addClass('показать_варианты_animate_токоподвод');
		var data_all_tok = { action: 'tokopodvod_all',  _dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP  };
		$.post( calc_ajaxurl.url, data_all_tok, function (response) {
			let result = JSON.parse(response);
			$('#tok1').text(result.tok1+' ₽.');
			$('#tok2').text(result.tok2+' ₽.');
			$('#tok3').text(result.tok3+' ₽.');
			$('#tok4').text(result.tok4+' ₽.');
			$('#tok5').text(result.tok5+' ₽.');
		})
	});
		$('.каб_с_кол').click(()=>{cran.setttk = 'Кабельный с кольцами';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '820px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.3.png')});
		$('.каб_с_тел').click(()=>{cran.setttk = 'Кабельный с тележками';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '820px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.4.png')});
		$('.фесто').click(()=>{cran.setttk = 'Фестонный (С профиль)';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '820px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.5.png')});
		$('.откр_тролл').click(()=>{cran.setttk = 'Открытые троллеи';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '820px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.6.png')});
		$('.закр_тролл').click(()=>{cran.setttk = 'Закрытые троллеи';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '820px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.7.png')});

	$('.ток_нетребуется').click(function () {
		cran.setttk = 'Токоподвод не требуется';
		hide($('#токоподвод'));
		cran.step = 'Шаг 11 из 11';
		$('#main_block_for_steps').css('height', '820px');
		next_group( $('#vibor_tali'), 0 );
	});
/************************************************************************************************************************
*																														*
*	 									БЛОК ВЫБОРА ТАЛЕЙ С ЖЕСТОКОЙ ЛОГИКОЙ =)	ШАГ-11									*
*																														*
************************************************************************************************************************/
	let form_req = '<div id="contacter"><div class="shadow"><h2 class="animated zoomIn">Уже через несколько секунд Вы увидите все цены на выбранное Вами грузоподъёмное оборудование. Осталось только заполнить короткую контактную форму.</h2><input type="text" id="name_contacter" class="cont_inp animated zoomIn" placeholder="Имя*"><input type="text" id="phone_contacter" class="cont_inp animated zoomIn" placeholder="+79999999999*"><input type="text" id="mail_contacter" class="cont_inp animated zoomIn" placeholder="your@mail.ru*"><span id="closecontacter" class="animated bounceInUp">Отправить</span></div></div>';
	$('.tal_yes').click(()=>{
		tali_insert_price();
		if (tal.gp <=10000 && cran._2.search(/Взрыв/i) != 0) {
			$('.hide_type_upravleniya').removeClass('hide_type_upravleniya').addClass('show_type_upravleniya');
			$('#main_block_for_steps').css('height', '1260px');
		}
		  else if (tal.gp > 10000 && cran._2.search(/Взрыв/i) != 0) {
			$('.hide_type_upravleniya').css('display', 'none');
			$('.hide_country_e').removeClass('hide_country_e').addClass('show_country_e')
			tal.gp <= 12500 && tal.visota <= 15000 ?
				$('.rus_e').css('display', 'inline-block')
			:
				$('.rus_e').css('display', 'none');
			tal.upravlenie = 'Электро';
			$('#main_block_for_steps').css('height', '1560px');
		  }
		  	else if (cran._2.search(/Взрыв/i) == 0 && tal.gp <= 10000) {
		  		$('.hide_type_upravleniya').removeClass('hide_type_upravleniya').addClass('show_type_upravleniya');
		    }

		$('#main_block_for_steps').css('height', '1160px');
		easyscroll(660);
	});

		$('.ruchnaya_t').click(()=>{
			$('.bolg_kanat, .bolg_kanat_b, .bolg_cep, .bolg_cep_b, .russia_kanat,.russia_kanat_b, #next_tal, #h2_tal').css('display', 'none');
			$('.show_type_tal').removeClass('show_type_tal').addClass('hide_type_tal')
			$('.show_s_visota_tal').removeClass('show_s_visota_tal').addClass('hide_s_visota_tal')
			tal.upravlenie = 'Ручное';
			tal.type = 'Цепная';
			if (cran._2.search(/Взрыв/i) == 0) {
				tal.country = 'Россия';
				tal.img = '17.8.png';
				tal.yes = 1;
				if (cran._1 == 'Опорный') {
					next_group($('#результат_опорного'), 0);
					cran.calculate_oporniy_crane();
				}
				if (cran._1 == 'Подвесной') {
					next_group($('#результат_подвесного'), 0);
					cran.calculate_podvesnoy_crane();
				}
				hide($('#vibor_tali'));
				$('#main_block_for_steps').css('height', '650px');
				$('#dop_block').css('display', 'block');
				$('.zzz').after(form_req);
				cran.step = 'end';
			}
			else {
				$('#main_block_for_steps').css('height', '1550px');
				$('.hide_country_r').removeClass('hide_country_r').addClass('show_country_r')
				$('.show_country_e').removeClass('show_country_e').addClass('hide_country_e')
				easyscroll(1020);
			}
		})
		$('.electro_t').click(()=>{
			$('#main_block_for_steps').css('height', '1550px');
			easyscroll(1020);
			if (cran._2.search(/Взрыв/i) == 0) {
				$('.hide_s_visota_tal').removeClass('hide_s_visota_tal').addClass('show_s_visota_tal')
				tal.type = 'Канатная';
				tal.country = 'Болгария';
				tal.img = '17.5.png';
				$('.stdV_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_canatVBI_t));
				$('.umenV_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_canatUSVVBI_t));
				$('#micropodiom').parent().parent().html('<span class="inform animated"><i data-info="i17_108" class="fa fa-info-circle" aria-hidden="true"></i></span><label class="opt_tal bolg_kanat animated zoomInLeft" for="bolg_kanat_8" style="display: inline-block;"><input id="bolg_kanat_8" type="checkbox"> Микроподъем <b id="micropodiom"></b></label>').css('top', '0').addClass('taliopt').removeClass('taliopt_r');
			} else {
				if (cran.temper[0] == '-50' || cran.temper[1] == '+60') {
					$('.rus_e, .china_e').css('display', 'none');
				}
				$('.hide_country_e').removeClass('hide_country_e').addClass('show_country_e');
				$('.show_country_r').removeClass('show_country_r').addClass('hide_country_r');
		      }
			tal.upravlenie = 'Электро';
			if (tal.ispolnnie == 'Пожаробезопасное') {
				$('.show_country_e > .block:last').css('display', 'none');
			}
		})

			$('.sheciya_tR').click(()=>{
				tal.country = 'Швейцария';
				tal.img = '17.10.png';
					hide($('#vibor_tali'));
					cran.step = 'end';
					tal.yes = 1;
					if (cran._1 == 'Опорный') {
						next_group($('#результат_опорного'), 0);
						cran.calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						next_group($('#результат_подвесного'), 0);
						cran.calculate_podvesnoy_crane();
					}
					$('#main_block_for_steps').css('height', '650px');
					$('#dop_block').css('display', 'block');
					$('.zzz').after(form_req);
			})

			$('.bolgariya_tE').click(()=>{
				$('.bolg_kanat, .bolg_kanat_b, .bolg_cep, .bolg_cep_b, .russia_kanat, .russia_kanat_b, #next_tal, #h2_tal').css('display', 'none');
				if (tal.gp <= 2000 && tal.visota <= 12000) {
					$('.hide_type_tal').removeClass('hide_type_tal').addClass('show_type_tal')
					$('#main_block_for_steps').css('height', '2386px');
					$('.kanat_t').siblings('.price_').text('От ' + pars_summ(tal.priceAJAX.bolgariya_el_canat_t));
					$('.cep_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_cep_t));
					easyscroll(1300);
				} else {
					$('.hide_s_visota_tal').removeClass('hide_s_visota_tal').addClass('show_s_visota_tal');
					$('#main_block_for_steps').css('height', '2386px');
					easyscroll(1300);
					tal.type = 'Канатная';
					if (cran._2.search(/Взрыв/i) == 0) {
						$('.stdV_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_canatVBI_t));
						$('.umenV_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_canatUSVVBI_t));
					}
					else {
						$('.stdV_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_canat_t));
						$('.umenV_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_canatUSV_t));
					}
					$('.show_type_tal').removeClass('show_type_tal').addClass('hide_type_tal');
				  }
				tal.country = 'Болгария';
				tal.img = '17.5.png';
				$('h4.bolgariya_tE').css({'background-color':'#b5212e', 'color':'#FFFFFF'});
				$('h4.russia_tE').css({'background-color':'#cecece', 'color':'#242526'});
				$('h4.china_tE').css({'background-color':'#cecece', 'color':'#242526'});
			})
				$('.stdV_t').click(()=>{
					if(tal.country == 'Болгария' && $('.hide_type_tal').css('display') == 'none'){easyscroll(2060)}
						else if (tal.country == 'Болгария' && $('.hide_type_tal').css('display') != 'none') {easyscroll(2060)}
					cran._2.search(/Взрыв/i) == 0 ? tal.type = 'Канатная ВБИ' : tal.type = 'Канатная';
					tal.img = '17.5.1.png';
					cran.step = 'end';
					$('.russia_kanat, .russia_kanat_b, .bolg_cep, .bolg_cep_b').removeClass('animated zoomInLeft').css('display', 'none');
					$('.bolg_kanat').addClass('animated zoomInLeft').css('display', 'inline-block');
					$('.bolg_kanat_b').css('display', 'flex');
					$('#next_tal, #h2_tal').css('display', 'block');
					$('h4.stdV_t').css({'background-color':'#b5212e', 'color':'#FFFFFF'});
					$('h4.umenV_t').css({'background-color':'#cecece', 'color':'#242526'});
					if (cran._2.search(/Взрыв/i) != -1 && tal.country == 'Болгария') {$('#main_block_for_steps').css('height', '1930px');}

					if (tal.ispolnnie == 'Взрывобезопасное') {
						//tal.priceAJAX.bolgariya_el_canatVBI_t
						$('#himagrsreda').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.himagrsreda) );
						$('#tropikisp').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.tropikisp) );
						$('#morskor').parent().parent().css('display', 'none');
						$('#zashcran').parent().parent().css('display', 'none');
						$('#konc_vikl').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.konc_vikl) );
						$('#seismichnost9').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.seismichnost9) );
						$('#vtoroitormoz').parent().parent().css('display', 'none');
						$('#micropodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.micropodiom) );
						$('#skorost_podiomaV2').parent().parent().css('display', 'none');
						$('#mikroperemeshenie').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.mikroperemeshenie) );
					}
					else {
						//tal.priceAJAX.bolgariya_el_canat_t
						$('#himagrsreda').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.himagrsreda) );
						$('#tropikisp').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.tropikisp) );
						$('#morskor').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.morskor) );
						$('#zashcran').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.zashcran) );
						$('#konc_vikl').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.konc_vikl) );
						$('#seismichnost9').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.seismichnost9) );
						$('#vtoroitormoz').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.vtoroitormoz) );
						$('#micropodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.micropodiom) );
						$('#skorost_podiomaV2').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.skorost_podiomaV2) );
						$('#mikroperemeshenie').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canat_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.mikroperemeshenie) );
					}
				})
				$('.umenV_t').click(()=>{
					if(tal.country == 'Болгария'){easyscroll(2060)}
					cran._2.search(/Взрыв/i) == 0 ? tal.type = 'Канатная УСВ ВБИ' : tal.type = 'Канатная УСВ';
					tal.img = '17.5.2.png';
					$('.russia_kanat, .russia_kanat_b, .bolg_cep, .bolg_cep_b').removeClass('animated zoomInLeft').css('display', 'none');
					$('.bolg_kanat').addClass('animated zoomInLeft').css('display', 'inline-block');
					$('.bolg_kanat_b').css('display', 'flex');
					$('#next_tal, #h2_tal').css('display', 'block');
					$('h4.stdV_t').css({'background-color':'#cecece', 'color':'#242526'});
					$('h4.umenV_t').css({'background-color':'#b5212e', 'color':'#FFFFFF'});
					if (cran._2.search(/Взрыв/i) != -1 && tal.country == 'Болгария') {$('#main_block_for_steps').css('height', '1930px');}

					if (tal.ispolnnie == 'Взрывобезопасное') {
						//tal.priceAJAX.bolgariya_el_canatVBI_t
						$('#himagrsreda').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.himagrsreda) );
						$('#tropikisp').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.tropikisp) );
						$('#morskor').parent().parent().css('display', 'none');
						$('#zashcran').parent().parent().css('display', 'none');
						$('#konc_vikl').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.konc_vikl) );
						$('#seismichnost9').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.seismichnost9) );
						$('#vtoroitormoz').parent().parent().css('display', 'none');
						$('#micropodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.micropodiom) );
						$('#skorost_podiomaV2').parent().parent().css('display', 'none');
						$('#mikroperemeshenie').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSVVBI_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.mikroperemeshenie) );
					}
					else {
						//tal.priceAJAX.bolgariya_el_canat_t
						$('#himagrsreda').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.himagrsreda) );
						$('#tropikisp').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.tropikisp) );
						$('#morskor').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.morskor) );
						$('#zashcran').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.zashcran) );
						$('#konc_vikl').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.konc_vikl) );
						$('#seismichnost9').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.seismichnost9) );
						$('#vtoroitormoz').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.vtoroitormoz) );
						$('#micropodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.micropodiom) );
						$('#skorost_podiomaV2').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.skorost_podiomaV2) );
						$('#mikroperemeshenie').text( return_price_doptal(tal.priceAJAX.bolgariya_el_canatUSV_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_kanat.mikroperemeshenie) );
					}
				})

			$('.russia_tR').click(()=>{
				tal.country = 'Россия';
				tal.img = '17.8.png';
					hide($('#vibor_tali'));
					cran.step = 'end';
					tal.yes = 1;
					if (cran._1 == 'Опорный') {
						next_group($('#результат_опорного'), 0);
						cran.calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						next_group($('#результат_подвесного'), 0);
						cran.calculate_podvesnoy_crane();
					}
					$('#main_block_for_steps').css('height', '650px');
					$('#dop_block').css('display', 'block');
					$('.zzz').after(form_req);
			})
			$('.russia_tE').click(()=>{
				$('.show_s_visota_tal').removeClass('show_s_visota_tal').addClass('hide_s_visota_tal')
				tal.type = 'Канатная';
				tal.country = 'Россия';
				tal.img = '17.6.png';
				$('.bolg_kanat, .bolg_kanat_b, .bolg_cep, .bolg_cep_b').removeClass('animated zoomInLeft').css('display', 'none');
				$('.russia_kanat').addClass('animated zoomInLeft').css('display', 'inline-block');
				$('.russia_kanat_b').css('display', 'flex');
				$('#next_tal, #h2_tal').css('display', 'block');
				$('#main_block_for_steps').css('height', '1760px');
				easyscroll(1420);
				$('.show_type_tal').removeClass('show_type_tal').addClass('hide_type_tal')
				$('h4.bolgariya_tE').css({'background-color':'#cecece', 'color':'#242526'});
				$('h4.russia_tE').css({'background-color':'#b5212e', 'color':'#FFFFFF'});
				$('h4.china_tE').css({'background-color':'#cecece', 'color':'#242526'});
				$('#vtoroitormoznapodiom').text( return_price_doptal(tal.priceAJAX.bolgariya_el_cep_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.russia_kanat.vtoroitormoznapodiom) );
			})

			$('.china_tR').click(()=>{
				tal.country = 'Китай';
				tal.img = '17.9.png';
					hide($('#vibor_tali'));
					cran.step = 'end';
					tal.yes = 1;
					if (cran._1 == 'Опорный') {
						next_group($('#результат_опорного'), 0);
						cran.calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						next_group($('#результат_подвесного'), 0);
						cran.calculate_podvesnoy_crane();
					}
					$('#main_block_for_steps').css('height', '650px');
					$('#dop_block').css('display', 'block');
					$('.zzz').after(form_req);
			})
			$('.china_tE').click(()=>{
				tal.country = 'Китай';
				tal.img = '17.7.png';
				if ((tal.gp <= 500 && tal.visota <= 6000) || (tal.gp <= 10000 && tal.visota <= 9000)) {
					$('.hide_type_tal').removeClass('hide_type_tal').addClass('show_type_tal').css('display', 'block');
					$('.show_s_visota_tal').removeClass('show_s_visota_tal').addClass('hide_s_visota_tal');
					easyscroll(1300);
					$('#main_block_for_steps').css('height', '1960px');
				} else {
					tal.type = 'Канатная';
					hide($('#vibor_tali'));
					cran.step = 'end';
					tal.yes = 1;
					if (cran._1 == 'Опорный') {
						next_group($('#результат_опорного'), 0);
						cran.calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						next_group($('#результат_подвесного'), 0);
						cran.calculate_podvesnoy_crane();
					}
					$('#main_block_for_steps').css('height', '650px');
					$('#dop_block').css('display', 'block');
					$('.zzz').after(form_req);
				  }
				$('.kanat_t').siblings('.price_').text(pars_summ(tal.priceAJAX.china_el_canat_t));
				$('.cep_t').siblings('.price_').text(pars_summ(tal.priceAJAX.china_el_cep_t));
				$('h4.bolgariya_tE').css({'background-color':'#cecece', 'color':'#242526'});
				$('h4.russia_tE').css({'background-color':'#cecece', 'color':'#242526'});
				$('h4.china_tE').css({'background-color':'#b5212e', 'color':'#FFFFFF'});
				$('.bolg_kanat, .bolg_kanat_b, .bolg_cep,  .bolg_cep_b, .russia_kanat, .russia_kanat_b, #next_tal, #h2_tal').removeClass('animated zoomInLeft').css('display', 'none');
			})

				$('.kanat_t').click(()=>{
					if (tal.country == 'Болгария') {
						$('.hide_s_visota_tal').removeClass('hide_s_visota_tal').addClass('show_s_visota_tal')
						easyscroll(1720);
						tal.type = 'Канатная';
						$('#main_block_for_steps').css('height', '2760px');
						$('.stdV_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_canat_t));
						$('.umenV_t').siblings('.price_').text(pars_summ(tal.priceAJAX.bolgariya_el_canatUSV_t));
					} else {
						tal.type = 'Канатная';
						tal.img = '17.3.png';
							hide($('#vibor_tali'));
							cran.step = 'end';
							tal.yes = 1;
							if (cran._1 == 'Опорный') {
								next_group($('#результат_опорного'), 0);
								cran.calculate_oporniy_crane();
							}
							if (cran._1 == 'Подвесной') {
								next_group($('#результат_подвесного'), 0);
								cran.calculate_podvesnoy_crane();
							}
							$('#main_block_for_steps').css('height', '650px');
							$('#dop_block').css('display', 'block');
							$('.zzz').after(form_req);
					}
					$('.russia_kanat, .russia_kanat_b, .bolg_kanat, .bolg_kanat_b, .bolg_cep, .bolg_cep_b').removeClass('animated zoomInLeft').css('display', 'none');
					$('#next_tal, #h2_tal').css('display', 'none');
					$('h4.kanat_t').css({'background-color':'#b5212e', 'color':'#FFFFFF'});
					$('h4.cep_t').css({'background-color':'#cecece', 'color':'#242526'});
				})
				$('.cep_t').click(()=>{
					tal.type = 'Цепная';
					tal.img = '17.4.png';
					if (tal.country != 'Болгария') {
						hide($('#vibor_tali'));
						cran.step = 'end';
						tal.yes = 1;
						if (cran._1 == 'Опорный') {
							next_group($('#результат_опорного'), 0);
							cran.calculate_oporniy_crane();
						}
						if (cran._1 == 'Подвесной') {
							next_group($('#результат_подвесного'), 0);
							cran.calculate_podvesnoy_crane();
						}
						$('#main_block_for_steps').css('height', '650px');
						$('#dop_block').css('display', 'block');
						$('.zzz').after(form_req);
					} else {
						easyscroll(1820);
						$('.show_s_visota_tal').removeClass('show_s_visota_tal').addClass('hide_s_visota_tal')
						$('.russia_kanat, .russia_kanat_b, .bolg_kanat, .bolg_kanat_b').removeClass('animated zoomInLeft').css('display', 'none');
						$('#main_block_for_steps').css('height', '2100px');
						$('.bolg_cep').addClass('animated zoomInLeft').css('display', 'inline-block');
						$('.bolg_cep_b').css('display', 'flex');
						$('#next_tal, #h2_tal').css('display', 'block');
						$('h4.cep_t').css({'background-color':'#b5212e', 'color':'#FFFFFF'});
						$('h4.kanat_t').css({'background-color':'#cecece', 'color':'#242526'});

						$('#telezhkaelektroprivod').text( return_price_doptal(tal.priceAJAX.bolgariya_el_cep_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_cep.telezhkaelektroprivod) );
						$('#telezhkaruchnoyprivod').text( return_price_doptal(tal.priceAJAX.bolgariya_el_cep_t, Math.ceil(tal.priceAJAX.oneeuro), tal.dopopcii.bolgariya_cep.telezhkaruchnoyprivod) );
					}
				})


				$('#next_tal').click(()=>{
					console.log('check guest');
					$.post( calc_ajaxurl.url, { action: 'isguest' }, function (response) {
						console.log(response)
						console.log(response==1)
						if (response==1) {
							hide($('#vibor_tali'));
							cran.step = 'end';
							tal.yes = 1;
							if (cran._1 == 'Опорный') {
								next_group($('#результат_опорного'), 0);
								cran.calculate_oporniy_crane();
							}
							if (cran._1 == 'Подвесной') {
								next_group($('#результат_подвесного'), 0);
								cran.calculate_podvesnoy_crane();
							}
							$('#main_block_for_steps').css('height', '650px');
							$('#dop_block').css('display', 'block');
							$('.zzz').after(form_req);
						}
						else {
							hide($('#vibor_tali'));
							cran.step = 'end';
							tal.yes = 1;
							if (cran._1 == 'Опорный') {
								next_group($('#результат_опорного'), 0);
								cran.calculate_oporniy_crane();
							}
							if (cran._1 == 'Подвесной') {
								next_group($('#результат_подвесного'), 0);
								cran.calculate_podvesnoy_crane();
							}
							$('#main_block_for_steps').css('height', '650px');
							$('#dop_block').css('display', 'block');
						}
					});
				});


	$('.tal_no').click(()=>{
		tal.yes = 0;
		$('body').append('\
			')
		hide($('#vibor_tali'));
		cran.step = 'end';
		if (cran._1 == 'Опорный') {
			next_group($('#результат_опорного'), 0);
			cran.calculate_oporniy_crane();
		}
		if (cran._1 == 'Подвесной') {
			next_group($('#результат_подвесного'), 0);
			cran.calculate_podvesnoy_crane();
		}
		$('#main_block_for_steps').css('height', '650px');
		$('#dop_block').css('display', 'block');
		$('.zzz').after(form_req);
	})

	$('html, body').on('click', '#closecontacter', function(event) {
		if ($('#name_contacter').val() == '' || ($('#phone_contacter').val() == '' || $('#phone_contacter').val().length < 11) || $('#mail_contacter').val() == '') {
			alert('Введите контактную информацию корректно!');
			return
		}
		let send_cont = { action:'sender_contact_calc', name:$('#name_contacter').val(), phone:$('#phone_contacter').val(), mail:$('#mail_contacter').val() }
		$.post( calc_ajaxurl.url, send_cont, function (response) {
			console.log('Mail sended')
		})
		$(this).parent().parent().remove();
	});
//////////////////////////////////////////////////////////////

	$('#option_click1').click(()=>{
		if ($('#option_click1').hasClass('head_dop_menu')) {easyscroll(600)
			$('#option_click1').removeClass('head_dop_menu').addClass('head_dop_menu_open');
			$('#option_1').removeClass('dop_menu').addClass('dop_menu_open');
		}
		else {
			$('#option_click1').removeClass('head_dop_menu_open').addClass('head_dop_menu');
			$('#option_1').removeClass('dop_menu_open').addClass('dop_menu');
		}
	});

	$('#option_click2').click(()=>{
		if ($('#option_click2').hasClass('head_dop_menu')) {easyscroll(900)
			$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
			$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
		}
		else {
			$('#option_click2').removeClass('head_dop_menu_open').addClass('head_dop_menu');
			$('#option_2').removeClass('dop_menu_open').addClass('dop_menu');
		}
	});

	$('#option_click3').click(()=>{
		if ($('#option_click3').hasClass('head_dop_menu')) {easyscroll(1300)
			$('#option_click3').removeClass('head_dop_menu').addClass('head_dop_menu_open');
			$('#option_3').removeClass('dop_menu').addClass('dop_menu_open');
		}
		else {
			$('#option_click3').removeClass('head_dop_menu_open').addClass('head_dop_menu');
			$('#option_3').removeClass('dop_menu_open').addClass('dop_menu');
		}
	});

	$('.dop_menu_open, .dop_menu').on('mouseenter', '.dop_parametr',function(event) {
		$(this).children('.del_this_option').css('visibility','visible')
		$(this).children('.change_this_option').css('visibility','visible')
		$(this).children('.change_this_option_with_del').css('visibility','visible')
	});
	$('#option_1').on('mouseleave', '.dop_parametr',function(event) {
		$(this).children('.del_this_option').css('visibility','hidden')
		$(this).children('.change_this_option').css('visibility','hidden')
		$(this).children('.change_this_option_with_del').css('visibility','hidden')
	});
	$('#option_2').on('mouseleave', '.dop_parametr',function(event) {
		$(this).children('.del_this_option').css('visibility','hidden')
		$(this).children('.change_this_option').css('visibility','hidden')
		$(this).children('.change_this_option_with_del').css('visibility','hidden')
	});
	$('#option_3').on('mouseleave', '.dop_parametr',function(event) {
		$(this).children('.del_this_option').css('visibility','hidden')
		$(this).children('.change_this_option').css('visibility','hidden')
		$(this).children('.change_this_option_with_del').css('visibility','hidden')
	});



function hide(arg) {
		document.querySelector('#main_block_for_steps').firstChild.remove();
        $('#steps').css('visibility', 'hidden');
    	arg.animate({ 'top': '-650px' }, 500, function() {
        $(this).remove();
    })
}

function next_group(arg, left) {
    arg.animate({ 'left': left + '%' }, 1200, function() {
        $(this).css({ 'position': 'relative', 'left': '0' })
        if (cran.step != 'end') {
        	let steps = document.createElement('span');
			steps.className = 'animated zoomIn';
			steps.id = 'steps';
			steps.innerText = cran.step;
			document.querySelector('#main_block_for_steps').insertBefore(steps, document.querySelector('#main_block_for_steps').firstChild);
	        }
    });
    $('html, body').animate({ scrollTop: '0px' }, 700)
}
function easyscroll(scrollTo) {$('html, body').animate({scrollTop: scrollTo + 'px' },600)}

cran.price_crane_electro_upravleniya = function (_8punkt) {
			let price =
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.3') ? {id:1, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:2, img:'3.7'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожар/i) == -1 && cran._2.search(/Взрыв/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.3') ? {id:3, img:'3.7'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожар/i) == -1 && cran._2.search(/Взрыв/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:4, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.3' || '8.2' || '8.4') ? {id:5, img:'3.7a'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.3') ? {id:6, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:7, img:'3.8'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожар/i) == -1 && cran._2.search(/Взрыв/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.3') ? {id:8, img:'3.8'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожар/i) == -1 && cran._2.search(/Взрыв/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:9, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.3' || '8.2' || '8.4') ? {id:10, img:'3.8b'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.3') ? {id:11, img:'3.9'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:12, img:'3.9'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожар/i) == -1 && cran._2.search(/Взрыв/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.3') ? {id:13, img:'3.9'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожар/i) == -1 && cran._2.search(/Взрыв/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:14, img:'3.9'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожар/i) != -1 && cran._2.search(/Взрыв/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.3' || '8.2' || '8.4') ? {id:15, img:'3.9c'}:false)
				||
				0;
			if (price.id == 0) return false;
				var data_crane_electro_upravleniya = { action: 'calc_crane_electro_upravleniya', _variant_id:price.id }
				$.post( calc_ajaxurl.url, data_crane_electro_upravleniya, function (response) {
					$('.pult_change').parent('.dop_parametr').detach();
					$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr"><span class="change_this_option_with_del pult_change"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span><span class="del_this_option return_pult_default"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
						'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ price.img +'.png" alt="" class="pult_change" style="width:200px"><h4>Управление краном</h4> \
						<p><span class="opisanie_parametra">'+String(cran._3Type)+'</span><br> \
						<span class="stoimost_parametra">'+ pars_summ(response) +'</span><i class="id_bro">b3</i></p>');
					calc_all_dop();
				});
}



function postavka_provoda (img) {
	var provod = { name:cran.ttk, dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP }
	var data_provod = { action: 'postavka_provod', _name_provod:provod.name, _provod_dlinna:provod.dlinna, provod_url_img:location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+img }
	$.post( calc_ajaxurl.url, data_provod, function(response)
	{
		$('#option_1 .dop_parametr:last-child').before(()=>{
			let new_html = response;
			return new_html;
		});
	});
}



cran.chastotnik_price = function (model) {
	$('.preobrazovatel_change').parent('.dop_parametr').detach();
	if (model == 8.3) {
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
		return
	}
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
	var data_chastotnik = { action: 'calc_chastotnik', _chastotnik_id:price.id, _gp:cran.gp, _vbi:cran._2.search(/Взрыв/i) != -1?1:0 }
	$.post( calc_ajaxurl.url, data_chastotnik, function (response) {
		$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr"><span class="change_this_option_with_del preobrazovatel_change"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span><span class="del_this_option return_preobrazovatel_default"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
			'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ price.img +'.png" alt="" class="preobrazovatel_change" style="width:200px"><h4>Частотный преобразователь</h4> \
			<p><span class="opisanie_parametra">'+String(cran.speed)+'</span><br> \
			<span class="stoimost_parametra">'+ pars_summ(response) +'</span></p>');
		calc_all_dop();
	});
}

cran.double_speed = function (code_preobrazovatelya) {
	if (code_preobrazovatelya != '8.4') {return}
	$('.preobrazovatel_change').parent('.dop_parametr').detach();
	let data_preobrazovatel = { action: 'calc_double_speed', _motor_code:cran.code_of_motor,  _motor_gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
	$.post( calc_ajaxurl.url, data_preobrazovatel, function (response) {
		$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr"><span class="change_this_option_with_del preobrazovatel_change"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span><span class="del_this_option return_preobrazovatel_default"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
			'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.4.png" alt="" class="preobrazovatel_change" style="width:200px"><h4>Релейно-контакторный преобразователь</h4> \
			<p><span class="opisanie_parametra">'+String(cran.speed)+'</span><br> \
			<span class="stoimost_parametra">'+ pars_summ(response)+'</span></p>');
		calc_all_dop();
	});
}




//Рассчет стоимости мотор-редуктора
cran.motor_price = function (model) {
	$('.motor_reductor_change').parent('.dop_parametr').detach();
	let price;
	var data_motor = { action: 'calc_motor', _motor_code:model, _motor_gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
		switch (model) {
			case 9.1:
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
				})
				break;
			default:
				$.post( calc_ajaxurl.url, data_motor, function (response) {
					let answer = JSON.parse(response);
					$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr"><span class="change_this_option_with_del motor_reductor_change"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span><span class="del_this_option return_motor_default"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
						'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ answer.code +'.png" alt="" class="motor_reductor_change" style="width:200px"><h4>Мотор-редуктор</h4> \
						<p><span class="opisanie_parametra">'+String(cran.motor)+'</span><br> \
						<span class="stoimost_parametra">'+ pars_summ(answer.base_price)+'</span></p>');
						$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
						$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
					calc_all_dop();
				})
				break;
		}
		//$.post( calc_ajaxurl.url, data_motor, function (response) {return console.log(response)})
}
//Рассчет стоимости мотор-редуктора



cran.calculate_oporniy_crane = function  () {
				$('#результат_опорного').css('display', 'none');
				$('.preloader').css('display', 'flex');
				var data_cran = { action: 'calc_cran', _gp:cran.gp, _shir:cran.paramsO.shpO, _upravl:cran._3 }
				$.post( calc_ajaxurl.url, data_cran, function(response) {
					let price_crane;
					cran.summa = price_crane = response;

					// СТРОИТЕЛЬНАЯ ВЫСОТА
					if (cran.visota == 'Уменьшенная') {
						$('#Ovc').parent().siblings('.doplata').text('Без доплаты');
					}
					if (cran.visota == 'Стандартная') {
						$('#Ovc').parent().siblings('.doplata').text('Без доплаты');
					}
					if (cran.visota == 'Увеличенная') {
						$('#Ovc').parent().siblings('.doplata').text('70 000 ₽');
					}

					// РАСПОЛОЖЕНИЕ
					if (cran._2.search(/Пожар/i) != -1) {
						$('#Oic').parent().siblings('.doplata').text(pars_summ((price_crane*10)/100));
					}
					if (cran._2.search(/Взрыв/i) != -1) {
						$('#Oic').parent().siblings('.doplata').text(pars_summ((price_crane*35)/100));
					}
					if (cran._2.search(/Общ/i) != -1) {
						$('#Oic').parent().siblings('.doplata').text('Без доплаты');
					}

					// ТЕМПЕРАТУРА
					if (cran.temper[0] == '-50') {
						$('#Otr').parent().siblings('.doplataTEMPER').children('#tminsO').text(pars_summ((price_crane*25)/100));
					}
					if (cran.temper[0] == '-40') {
						$('#Otr').parent().siblings('.doplataTEMPER').children('#tminsO').text(pars_summ((price_crane*10)/100));
					}
					if (cran.temper[0] == '-20') {
						$('#Otr').parent().siblings('.doplataTEMPER').children('#tminsO').text('Без доплаты');
					}
					if (cran.temper[1] == '+40') {
						$('#Otr').parent().siblings('.doplataTEMPER').children('#tplusO').text('Без доплаты');
					}
					if (cran.temper[1] == '+60') {
						$('#Otr').parent().siblings('.doplataTEMPER').children('#tplusO').text(pars_summ((price_crane*15)/100));
					}

					// ПИТАНИЕ
					if (cran.ncuprav == '24В') {
						$('#Ovolt').parent().siblings('.doplata').text('5 000 ₽');
					}
					if (cran.ncuprav == '42В') {
						$('#Ovolt').parent().siblings('.doplata').text('Без доплаты');
					}

					// РАСПОЛОЖЕНИЕ
					if (cran.climat == 'Расположение на открытой местности') {
						console.log('Расположение на открытой местности')
						if (cran.gp >= 500 && cran.gp <= 3200) {
							$('#Ocu').parent().siblings('.doplata').text('13 000 ₽');
						}
						if (cran.gp > 3200 && cran.gp <= 10000) {
							$('#Ocu').parent().siblings('.doplata').text('18 000 ₽');
						}
						if (cran.gp > 10000) {
							$('#Ocu').parent().siblings('.doplata').text('23 500 ₽');
						}
					}
					if (cran.climat == 'Расположение под навесом') {
						$('#Ocu').parent().siblings('.doplata').text('Без доплаты');
					}
					if (cran.climat == 'Расположение в помещении') {
						$('#Ocu').parent().siblings('.doplata').text('Без доплаты');
					}

					// СТЕПЕНЬ ЗАЩИТЫ
					if (cran.szo == 'IP44') {
						$('#Oszo').parent().siblings('.doplata').text('Без доплаты');
						$('#Oszo').text(cran.szo);
					}
					if (cran.szo == 'IP54') {
						$('#Oszo').parent().siblings('.doplata').text(pars_summ((price_crane*8)/100));
						$('#Oszo').text(cran.szo);
					}
					if (cran.szo == 'IP65') {
						$('#Oszo').parent().siblings('.doplata').text(pars_summ((price_crane*30)/100));
						$('#Oszo').text(cran.szo);
					}
					if (cran.szo == 'IP65' && cran._2.search(/Пожар/i) != -1) {
						$('#Oszo').parent().siblings('.doplata').text(pars_summ((price_crane*25)/100));
						$('#Oszo').text(cran.szo);
					}
					if (cran.szo == 'IP65' && cran._2.search(/Взрыв/i) != -1) {
						$('#Oszo').parent().siblings('.doplata').text(pars_summ((price_crane*30)/100));
						$('#Oszo').text(cran.szo);
					}

					{
						if (cran.paramsO.shpO > 28500) {
							$('#summa').parent().html('Базовая стоимость крана: <span id="summa">Цена по запросу</span>')
						}
						else {
							$('#summa').parent().html('Базовая стоимость крана: <span id="summa">'+pars_summ(cran.summa)+'</span>');
						}
					}
				});
				var data_sroki_cran = { action: 'calc_sroki', _gp:cran.gp, _shir:cran.paramsO.shpO, _upravl:cran._3 }
				$.post( calc_ajaxurl.url, data_sroki_cran, function(response) {
					if (cran.paramsP.shpP > 28500) {
						$('#sroki').parent().html('Срок изготовления крана: <span id="sroki">Индивидуально</span>');
					}
					else {
						$('#sroki').parent().html('Срок изготовления крана: <span id="sroki">'+response+'</span> дней');
					}
					if (tal.img!='' && tal.yes == 1 && (((cran.temper[1] == '+60' || cran.temper[0] == '-50') && tal.country == 'Болгария') || (cran.temper[1] == '+40' && (cran.temper[0] == '-40' || cran.temper[0] == '-20') || tal.upravlenie == 'Ручное'))) {cran.calculate_tal()}
					setTimeout(() => {
						resultatiO();
						calc_all_doplati();
						calc_all_tokopodvod_i_puti();
						calc_all_dop();
						calc_all_uslugi();
						$('.preloader').css('display', 'none');
						$('#результат_опорного').css('display', 'block');
					}, 2000);
				});
			//////////////
}

cran.calculate_podvesnoy_crane = function  () {
				$('#результат_подвесного').css('display', 'none');
				$('.preloader').css('display', 'flex');
				var data_cran_p = { action: 'calc_cran_p', _gp:cran.gp, _shir:cran.paramsP.shpP, _upravl:cran._3 }
				$.post( calc_ajaxurl.url, data_cran_p, function(response) {
					let price_crane;
					cran.summa = price_crane = response;

					// СТРОИТЕЛЬНАЯ ВЫСОТА
					if (cran.visota == 'Уменьшенная') {
						$('#Pvc').parent().siblings('.doplata').text('Без доплаты');
					}
					if (cran.visota == 'Стандартная') {
						$('#Pvc').parent().siblings('.doplata').text('Без доплаты');
					}
					if (cran.visota == 'Увеличенная') {
						$('#Pvc').parent().siblings('.doplata').text('70 000 ₽');
					}

					// РАСПОЛОЖЕНИЕ
					if (cran._2.search(/Пожар/i) != -1) {
						$('#Pic').parent().siblings('.doplata').text(pars_summ((price_crane*10)/100));
					}
					if (cran._2.search(/Взрыв/i) != -1) {
						$('#Pic').parent().siblings('.doplata').text(pars_summ((price_crane*35)/100));
					}
					if (cran._2.search(/Общ/i) != -1) {
						$('#Pic').parent().siblings('.doplata').text('Без доплаты');
					}

					// ТЕМПЕРАТУРА
					if (cran.temper[0] == '-50') {
						$('#Ptr').parent().siblings('.doplataTEMPER').children('#tminsP').text(pars_summ((price_crane*25)/100));
					}
					if (cran.temper[0] == '-40') {
						$('#Ptr').parent().siblings('.doplataTEMPER').children('#tminsP').text(pars_summ((price_crane*10)/100));
					}
					if (cran.temper[0] == '-20') {
						$('#Ptr').parent().siblings('.doplataTEMPER').children('#tminsP').text('Без доплаты');
					}
					if (cran.temper[1] == '+40') {
						$('#Ptr').parent().siblings('.doplataTEMPER').children('#tplusP').text('Без доплаты');
					}
					if (cran.temper[1] == '+60') {
						$('#Ptr').parent().siblings('.doplataTEMPER').children('#tplusP').text(pars_summ((price_crane*15)/100));
					}

					//
					{
						if (cran.paramsP.shpP <= 6000 && cran.paramsP.vpP >= 900) {
							$('#Pdk').parent().siblings('.doplata').text(pars_summ((price_crane*15)/100));
						}
						else {
							$('#Pdk').parent().siblings('.doplata').text('Без доплаты');
						}
					}

					// ПИТАНИЕ
					if (cran.ncuprav == '24В') {
						$('#Pvolt').parent().siblings('.doplata').text('5 000 ₽');
					}
					if (cran.ncuprav == '42В') {
						$('#Pvolt').parent().siblings('.doplata').text('Без доплаты');
					}

					// РАСПОЛОЖЕНИЕ
					if (cran.climat == 'Расположение на открытой местности') {
						console.log('Расположение на открытой местности')
						if (cran.gp >= 500 && cran.gp <= 3200) {
							$('#Pcu').parent().siblings('.doplata').text('13 000 ₽');
						}
						if (cran.gp > 3200 && cran.gp <= 10000) {
							$('#Pcu').parent().siblings('.doplata').text('18 000 ₽');
						}
						if (cran.gp > 10000) {
							$('#Pcu').parent().siblings('.doplata').text('23 500 ₽');
						}
					}
					if (cran.climat == 'Расположение под навесом') {
						$('#Pcu').parent().siblings('.doplata').text('Без доплаты');
					}
					if (cran.climat == 'Расположение в помещении') {
						$('#Pcu').parent().siblings('.doplata').text('Без доплаты');
					}

					// СТЕПЕНЬ ЗАЩИТЫ
					if (cran.szo == 'IP44') {
						$('#Pszo').parent().siblings('.doplata').text('Без доплаты');
						$('#Pszo').text(cran.szo);
					}
					if (cran.szo == 'IP54') {
						$('#Pszo').parent().siblings('.doplata').text(pars_summ((price_crane*8)/100));
						$('#Pszo').text(cran.szo);
					}
					if (cran.szo == 'IP65') {
						$('#Pszo').parent().siblings('.doplata').text(pars_summ((price_crane*30)/100));
						$('#Pszo').text(cran.szo);
					}
					if (cran.szo == 'IP65' && cran._2.search(/Пожар/i) != -1) {
						$('#Pszo').parent().siblings('.doplata').text(pars_summ((price_crane*25)/100));
						$('#Pszo').text(cran.szo);
					}
					if (cran.szo == 'IP65' && cran._2.search(/Взрыв/i) != -1) {
						$('#Pszo').parent().siblings('.doplata').text(pars_summ((price_crane*30)/100));
						$('#Pszo').text(cran.szo);
					}
					{
						if (cran.paramsP.shpP > 15000) {
							$('#summa_p').parent().html('Базовая стоимость крана: <span id="summa_p">Цена по запросу</span>')
						}
						else {
							$('#summa_p').parent().html('Базовая стоимость крана: <span id="summa_p">'+pars_summ(cran.summa)+'</span>');
						}
					}

				});
				var data_sroki_cran_p = { action: 'calc_sroki_p', _gp:cran.gp, _shir:cran.paramsP.shpP, _upravl:cran._3 }
				$.post( calc_ajaxurl.url, data_sroki_cran_p, function(response) {
					if (cran.paramsP.shpP > 15000) {
						$('#sroki_p').parent().html('Срок изготовления крана: <span id="sroki_p">Индивидуально</span>');
					}
					else {
						$('#sroki_p').parent().html('Срок изготовления крана: <span id="sroki_p">'+response+'</span> дней');
					}
					if (tal.img!='' && tal.yes == 1 && (((cran.temper[1] == '+60' || cran.temper[0] == '-50') && tal.country == 'Болгария') || (cran.temper[1] == '+40' && (cran.temper[0] == '-40' || cran.temper[0] == '-20') || tal.upravlenie == 'Ручное'))) {cran.calculate_tal()}
					setTimeout(() => {
						resultatiP();
						calc_all_doplati();
						calc_all_tokopodvod_i_puti();
						calc_all_dop();
						calc_all_uslugi();
						$('.preloader').css('display', 'none');
						$('#результат_подвесного').css('display', 'block');
					}, 2000)
				});
}

cran.calculate_tal = function  (argument) {

	if ($('#second_opt').find('div.tal_for_search')) {
		$('div.tal_for_search').remove();
	}
	//////////////
	var data_tal = { action: 'calc_tal', _upravlenie:tal.upravlenie, _type:tal.type, _country:tal.country, _visota:tal.visota, _ispolnenie:tal.ispolnnie, _gp:tal.gp }
	$.post( calc_ajaxurl.url, data_tal, function(response) {
		tal.summa = parseInt(response);
		if (cran._2 == 'Пожаробезопасное класса П-II / П-IIa / П-III' && tal.country == 'Болгария') {
			tal.summa = (parseInt(response) * 5 / 100) + Number(tal.summa);
		}
		if (cran._2 == 'Пожаробезопасное класса П-II / П-IIa / П-III' && tal.country == 'Россия') {
			tal.summa = (parseInt(response) * 18 / 100) + Number(tal.summa);
		}
		if (cran._2 == "Взрывобезопасное класса B1a, IIС Т5" && tal.country == 'Болгария') {
			tal.summa = (parseInt(response) * 25 / 100) + Number(tal.summa);
		}
		if (cran.temper[0] == '-50' && tal.country == 'Болгария') {
			tal.summa = (parseInt(response)*20)/100 + Number(tal.summa);
		}
		if (cran.temper[0] == '-40' && tal.country == 'Болгария') {
			tal.summa = (parseInt(response)*5)/100 + Number(tal.summa);
		}
		if (cran.temper[0] == '-40' && tal.country == 'Россия') {
			tal.summa = (parseInt(response)*10)/100 + Number(tal.summa);
		}
		if (cran.temper[1] == '+60' && tal.country == 'Болгария') {
			tal.summa = ( tal.dopopcii.bolgariya_kanat.temper60[1] * tal.priceAJAX.oneeuro ) + Number(tal.summa);
		}
		if (tal.country == 'Болгария' && (tal.type == "Канатная" || tal.type == "Канатная УСВ" || tal.type == "Канатная ВБИ" || tal.type == "Канатная УСВ ВБИ")) {
			if (document.getElementById('new_tal_window') == null) {
				$('.bolg_kanat_b > label.opt_tal > input:checked').each( function(index, el) {
					tal.summa += parseInt($(this).siblings('b').text().replace(/[\s₽]/g, ''));
				});
			}
			else {
				$('.conteiner_dopov > label.opt_tali > input:checked').each( function(index, el) {
					tal.summa += parseInt($(this).siblings('b').text().replace(/[\s₽]/g, ''));
					console.log(tal.summa)
				});
			}
			console.log(tal.summa)
		}
		if (tal.country == 'Болгария' && tal.type == "Цепная") {
			if (document.getElementById('new_tal_window') == null) {
				$('.bolg_cep_b > label.opt_tal > input:checked').each( function(index, el) {
					tal.summa += parseInt($(this).siblings('b').text().replace(/[\s₽]/g, ''));
				});
			}
			else {
				$('.conteiner_dopov > label.opt_tali > input:checked').each( function(index, el) {
					tal.summa += parseInt($(this).siblings('b').text().replace(/[\s₽]/g, ''));
					console.log(tal.summa)
				});
			}
			console.log(tal.summa)
		}
		if (tal.country == 'Россия' && tal.upravlenie == "Электро") {
			if (document.getElementById('new_tal_window') == null) {
				$('.russia_kanat_b > label.opt_tal > input:checked').each( function(index, el) {
					tal.summa += parseInt($(this).siblings('b').text().replace(/[\s₽]/g, ''));
				});
			}
			else {
				$('.conteiner_dopov > label.opt_tali > input:checked').each( function(index, el) {
					tal.summa += parseInt($(this).siblings('b').text().replace(/[\s₽]/g, ''));
					console.log(tal.summa)
				});
			}
			console.log(tal.summa)
		}

		let iii = tal.ispolnnie =="Пожаробезопасное" && tal.upravlenie == "Электро"?" ПБИ":"";

		$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr tal_for_search tali"><span class="change_this_option_with_del tal_remake"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span> \
			<span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
			'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ tal.img +'" alt="Таль uniqcrane" class="tal_remake" style="width:200px"><h4>Таль '+ tal.country +'</h4> \
			<p><span class="opisanie_parametra">'+String(tal.upravlenie)+'<br>'+String(tal.type)+iii+'</span><br> \
				<span class="stoimost_parametra">'+ pars_summ(tal.summa)+'</span><i class="id_bro">b17</i> \
			</p>');
	});
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
				if ($('#option_2').children('.dop_parametr').length+1 >= 21) {
					$('.add_dop_2').parent().css('display', 'none');
				}
				else {
				$('.add_dop_2').parent().css('display', 'inline-block');
				}
			}
		}
	});

}


$('.bolgariya_tE').hover(function() {
	$('#ception_TB').css('display', 'block');
}, function() {
	$('#ception_TB').css('display', 'none');
});

/*
*
* Установка цены на грузоподъемность
*
*/
function gp_insert_price ()
{
	let upr_cr = cran._3 == 'Ручное' ? 'Ручное' : 'Электро';
	let type_cr = cran._1 == 'Опорный' ? 'Опорный':'Подвесной';
	let gp_data = { action: 'gp_insert', type_cran: type_cr, upr_cran: upr_cr }
	$.post( calc_ajaxurl.url, gp_data, function(response) {
		let gp_resp = JSON.parse(response);
		if (cran.step != 'end') {
			$('.кг500 > span > .price_').text('От ' + pars_summ(gp_resp._500));
			$('.кг1000 > span > .price_').text('От ' + pars_summ(gp_resp._1000));
			$('.кг2000 > span > .price_').text('От ' + pars_summ(gp_resp._2000));
			$('.кг3200 > span > .price_').text('От ' + pars_summ(gp_resp._3200));
			$('.кг5000 > span > .price_').text('От ' + pars_summ(gp_resp._5000));
			$('.кг6300 > span > .price_').text('От ' + pars_summ(gp_resp._6300));
			$('.кг8000 > span > .price_').text('От ' + pars_summ(gp_resp._8000));
			$('.кг10000 > span > .price_').text('От ' + pars_summ(gp_resp._10000));
			$('.кг12500 > span > .price_').text('От ' + pars_summ(gp_resp._12500));
			$('.кг16000 > span > .price_').text('От ' + pars_summ(gp_resp._16000));
		}
	});
}

function chastotnik_insert_price ()
{
	$.post( calc_ajaxurl.url, { action: 'chastotniki_insert', _gp:cran.gp, _vbi:cran._2.search(/Взрыв/i) != -1?1:0 }, function(response)
	{
		let chst_resp = JSON.parse(response);
		$('.esq').siblings('.price_').text(pars_summ(chst_resp._85));
		$('.hyundai').siblings('.price_').text(pars_summ(chst_resp._86));
		$('.danfross').siblings('.price_').text(pars_summ(chst_resp._87));
		$('.несколько_с').siblings('.price_').text('От ' + pars_summ(chst_resp.dbls));
	});
}

function motor_insert_price ()
{
	$.post( calc_ajaxurl.url, { action: 'motor_insert', _gp:cran.gp, _shir:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }, function(response)
	{
		let motor_resp = JSON.parse(response);
		$('.чнг').siblings('.price_').text(pars_summ(motor_resp._92));
		$('.цбб').siblings('.price_').text(pars_summ(motor_resp._93));
		$('.цнг').siblings('.price_').text(pars_summ(motor_resp._94));
		$('.цер').siblings('.price_').text(pars_summ(motor_resp._95));
	});
}




function tali_insert_price ()
{
	$.post( calc_ajaxurl.url, { action: 'tal_insert', _gp:cran.gp, _upravlenie:tal.upravlenie, _visota:tal.visota, _ispolnenie:tal.ispolnnie, _cranisp:cran._2, temper_minus:cran.temper[0], temper_plus:cran.temper[1] }, function(response)
	{
		tal.priceAJAX = JSON.parse(response);
		$('.russia_tR').siblings('.price_').text(pars_summ(tal.priceAJAX.rt_r));
		$('.china_tR').siblings('.price_').text(pars_summ(tal.priceAJAX.ct_r));
		$('.sheciya_tR').siblings('.price_').text(pars_summ(tal.priceAJAX.st_r));
		$('.bolgariya_tE').siblings('.price_').text('От ' + pars_summ(tal.priceAJAX.bolgariya_el_cep_t == null? tal.priceAJAX.bolgariya_el_canat_t : tal.priceAJAX.bolgariya_el_cep_t < tal.priceAJAX.bolgariya_el_canat_t ? tal.priceAJAX.bolgariya_el_cep_t : tal.priceAJAX.bolgariya_el_canat_t ));
		$('.russia_tE').siblings('.price_').text(pars_summ(tal.priceAJAX.russia_el_t));
		$('.china_tE').siblings('.price_').text('От ' + pars_summ(tal.priceAJAX.china_el_canat_t));
	});
}

function return_price_doptal (price, one_euro, element) {
	let res;
	console.log(price)
	console.log(one_euro)
	console.log(element)
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
	console.log(res)
	return pars_summ(res);
}


$('body').on('click', '.fa-info-circle', function(event) {
	//console.log(this.id)
	$('#spravka').css('display', 'none').removeClass('slideInDown').addClass('slideOutDown');
	$.post( calc_ajaxurl.url, { action: 'getinfo', _codeinfo:this.getAttribute('data-info') }, function(response)
	{
		let spravka_obj = JSON.parse(response);
		$('#spravka > #spravka_html').text(spravka_obj.descript);
		$('#spravka > #spravka_html').siblings('a').attr('href', location.origin + '/' + spravka_obj.link);
		//console.log(spravka_obj.descript+' '+spravka_obj.link)
	});
	setTimeout(()=>{$('#spravka').css('display', 'block').removeClass('slideOutDown').addClass('slideInDown');}, 300)
});


// END!!!!!!
});





var cran = {
	_1:'',
	_2:'',
	_3:'',
	_3Type:'',
	paramsO:{
		dpO:'',
		shpO:'',
		vO:'',
		vpO:''
	},
	paramsP:{
		dpP:'',
		shpP:'',
		vP:'',
		vpP:''
	},
	temper:[],
	climat:'',
	relsO:'',
	relsP:'',
	dvs:'',
	gp:0,
	speed:'',
	set setspeed (s) {this._3 == 'Ручное' ? this.speed =  'Нет при ручном управлении' : s ? this.speed = s : this.speed = this.speed },
	speedmetr:'20 м/мин',
	set setspeedmetr (s) {this._3 == 'Ручное' ? this.speedmetr =  'Ручное перемещение' : s ? this.speedmetr = s : this.speedmetr = this.speedmetr},
	razrez:'Разрезной',
	visota:'Стандартная',
	szo:'IP44',
	set setszo (s) {this._3 == 'Ручное' ? this.szo =  'Нет при ручном управлении' : s ? this.szo = s : this.szo = this.szo},
	ncuprav:'42В',
	set setncuprav (s) {this._3 == 'Ручное' ? this.ncuprav =  'Нет при ручном управлении' : s ? this.ncuprav = s : this.ncuprav = this.ncuprav},
	ttk:'',
	set setttk (s) {this._3 == 'Ручное' ? this.ttk =  'Нет при ручном управлении' : s ? this.ttk = s : this.ttk = this.ttk },
	motor:'Червячная передача NMRV (Китай) - стандартно',
	code_of_chastotnik:'8.3',
	code_of_motor:9.1,
	set setmotor (s) {this._3 == 'Ручное' ? this.motor =  'Нет при ручном управлении' : s ? this.motor = s : this.motor = this.motor },
	resetparam:function(){this.setspeed = this.setspeedmetr = this.setszo = this.setncuprav = this.setmotor = cran.setttk = false; },
	get getep () {return this._3 == 'Ручное' ? 'Нет при ручном управлении' : '3-х фазная (380 В)'},
	step:'Шаг 1 из 11',
	city:null,
	summa:0
};

dop_parametri = {
	puti_i_tokopodvod:[],
	dop_oborudovanie:[],
	uslugi:[]
}

var tal = {
	upravlenie:'',
	type:'',
	country:'',
	visota:'',
	ispolnnie:'',
	gp:'',
	img:'',
	summa:0,
	dopopcii: {
		bolgariya_kanat: {
			himagrsreda:['%', 15, 0],
			tropikisp:['%', 10, 0],
			morskor:['%', 10, 0],
			zashcran:['e', 490, 0],
			konc_vikl:['e', 160, 0],
			seismichnost9:['%', 10, 0],
			vtoroitormoz:['e', 220, 0],
			micropodiom:['%', 16, 0],
			skorost_podiomaV2:['%', 5, 0],
			mikroperemeshenie:['%', 10, 0],
			temper60:['e', 190, 0]
		},
		russia_kanat: {
			vtoroitormoznapodiom:['r', 27000, 0],
		},
		bolgariya_cep: {
			telezhkaelektroprivod:['e', 90, 0],
			telezhkaruchnoyprivod:['e', 150, 0]
		}
	}

}
// Функция парсер цен, для выставления пробелов
function pars_summ (d) {return (String(Number(d).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽')}
/************************************************************************************************************************
*																														*
*	 					БЛОК ПРИМЕНЕНИЯ ЗАПОЛНЕННЫХ ДАННЫХ ЭЛЕМЕНТАМ НА КЛИЕНТСКОЙ ЧАСТИ ДЛЯ ОПОРНЫХ					*
*																														*
************************************************************************************************************************/
function resultatiO(){cran.resetparam();document.getElementById("Ogp").innerText=cran.gp;document.getElementById("Odp").innerText=cran.paramsO.shpO;document.getElementById("Oic").innerText=cran._2;document.getElementById("Orr").innerText="\u0421\u0440\u0435\u0434\u043d\u0438\u0439 - \u04105";document.getElementById("Otr").innerHTML=cran.temper[0]+"&deg; \u0434\u043e "+cran.temper[1]+"&deg;";document.getElementById("Ocu").innerText=cran.climat;document.getElementById("Otc").innerText=cran._3;document.getElementById("Orelsi").innerText=cran.relsO?cran.relsO:"\u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d";document.getElementById("Otk").innerText=cran.razrez;document.getElementById("Ovc").innerText=cran.visota;document.getElementById("Oszo").innerText=cran.szo;document.getElementById("Oep").innerText=cran.getep;document.getElementById("Ovolt").innerText=cran.ncuprav;document.getElementById("Ospeed").innerText=cran.speedmetr;document.getElementById("Odvs").innerText=cran.dvs}
/************************************************************************************************************************
*																														*
*	 					БЛОК ПРИМЕНЕНИЯ ЗАПОЛНЕННЫХ ДАННЫХ ЭЛЕМЕНТАМ НА КЛИЕНТСКОЙ ЧАСТИ ДЛЯ ПОДВЕСНЫХ					*
*																														*
************************************************************************************************************************/
function resultatiP(){cran.resetparam();document.getElementById("Pgp").innerText=cran.gp;document.getElementById("Pdp").innerText=cran.paramsP.shpP;document.getElementById("Pdk").innerText=cran.paramsP.vpP;document.getElementById("Pic").innerText=cran._2;document.getElementById("Prr").innerText="\u0421\u0440\u0435\u0434\u043d\u0438\u0439 - \u04105";document.getElementById("Ptr").innerHTML=cran.temper[0]+"&#176; \u0434\u043e "+cran.temper[1]+"&#176;";document.getElementById("Pcu").innerText=cran.climat;document.getElementById("Ptc").innerText=cran._3;document.getElementById("Prelsi").innerText=cran.relsP?cran.relsP:"\u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d";document.getElementById("Ptk").innerText=cran.razrez;document.getElementById("Pvc").innerText=cran.visota;document.getElementById("Pszo").innerText=cran.szo;document.getElementById("Pep").innerText=cran.getep;document.getElementById("Pvolt").innerText=cran.ncuprav;document.getElementById("Pspeed").innerText=cran.speedmetr;document.getElementById("Pdvs").innerText=cran.dvs};
/**********************************************************************************************************************************************************/
function calc_all_tokopodvod_i_puti(){var b=0;document.querySelectorAll("#option_1 > div.dop_parametr:not(:last-child)").forEach(function(a,d){isNaN(parseInt(a.children[3].children[2].innerText.replace(/\s/g,"")))||(b+=parseInt(a.children[3].children[2].innerText.replace(/\s/g,"")))});"\u041e\u043f\u043e\u0440\u043d\u044b\u0439"==cran._1?(document.getElementById("summa1").innerText=pars_summ(b),document.getElementById("summa4").innerText="\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."):
(document.getElementById("summa1_p").innerText=pars_summ(b),document.getElementById("summa4_p").innerText="\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...");setTimeout(function(){"\u041e\u043f\u043e\u0440\u043d\u044b\u0439"==cran._1?calc_all_oporniy():calc_all_podvesnoy()},1200)}
function calc_all_doplati(){var b=0;"\u041e\u043f\u043e\u0440\u043d\u044b\u0439"==cran._1?(document.querySelectorAll("#\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442_\u043e\u043f\u043e\u0440\u043d\u043e\u0433\u043e > .res tbody .doplata, #\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442_\u043e\u043f\u043e\u0440\u043d\u043e\u0433\u043e > .res tbody .doplataTEMPER > span").forEach(function(a,d){isNaN(parseInt(a.innerText.replace(/\s/g,"")))||(console.log(parseInt(a.innerText.replace(/\s/g,
""))),b+=parseInt(a.innerText.replace(/\s/g,"")))}),document.getElementById("doplata").innerText=pars_summ(b),document.getElementById("summa4").innerText="\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...",setTimeout(function(){calc_all_oporniy()},1200)):(document.querySelectorAll("#\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442_\u043f\u043e\u0434\u0432\u0435\u0441\u043d\u043e\u0433\u043e > .res tbody .doplata, #\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442_\u043f\u043e\u0434\u0432\u0435\u0441\u043d\u043e\u0433\u043e > .res tbody .doplataTEMPER > span").forEach(function(a,
d){isNaN(parseInt(a.innerText.replace(/\s/g,"")))||(console.log(parseInt(a.innerText.replace(/\s/g,""))),b+=parseInt(a.innerText.replace(/\s/g,"")))}),document.getElementById("doplata_p").innerText=pars_summ(b),document.getElementById("summa4_p").innerText="\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...",setTimeout(function(){calc_all_podvesnoy()},1200))}
function calc_all_dop(){var b=0;dop_parametri.dop_oborudovanie=[];document.querySelectorAll("#option_2 > div.dop_parametr:not(:last-child)").forEach(function(a,d){a.children[0].classList.contains("pult_change")||a.children[0].classList.contains("preobrazovatel_change")||a.children[0].classList.contains("motor_reductor_change")||a.children[0].classList.contains("tal_remake")?a.children[1].classList.contains("return_motor_default")||a.children[1].classList.contains("return_preobrazovatel_default")||
a.children[1].classList.contains("return_pult_default")||a.children[0].classList.contains("tal_remake")?(b+=parseInt(a.children[4].children[2].innerText.replace(/\s/g,"")),dop_parametri.dop_oborudovanie.push([a.children[3].innerText,a.children[4].children[2].innerText])):dop_parametri.dop_oborudovanie.push([a.children[2].innerText,a.children[3].children[2].innerText]):isNaN(parseInt(a.children[3].children[2].innerText.replace(/\s/g,"")))||(b+=parseInt(a.children[3].children[2].innerText.replace(/\s/g,
"")))});"\u041e\u043f\u043e\u0440\u043d\u044b\u0439"==cran._1?(document.getElementById("summa2").innerText=pars_summ(b),document.getElementById("summa4").innerText="\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."):(document.getElementById("summa2_p").innerText=pars_summ(b),document.getElementById("summa4_p").innerText="\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...");
setTimeout(function(){"\u041e\u043f\u043e\u0440\u043d\u044b\u0439"==cran._1?calc_all_oporniy():calc_all_podvesnoy()},1200)}
function calc_all_uslugi(){var b=0;dop_parametri.uslugi=[];document.querySelectorAll("#option_3 > div.dop_parametr:not(:last-child)").forEach(function(a,d){isNaN(parseInt(a.children[3].children[2].innerText.replace(/\s/g,"")))||(b+=parseInt(a.children[3].children[2].innerText.replace(/\s/g,"")));dop_parametri.uslugi.push([a.children[2].innerText,a.children[3].children[2].innerText])});"\u041e\u043f\u043e\u0440\u043d\u044b\u0439"==cran._1?(document.getElementById("summa3").innerText=pars_summ(b),document.getElementById("summa4").innerText="\u0421\u0447\u0438\u0442\u0430\u0435\u043c.."):(document.getElementById("summa3_p").innerText=pars_summ(b),document.getElementById("summa4_p").innerText="\u0421\u0447\u0438\u0442\u0430\u0435\u043c..");setTimeout(function(){"\u041e\u043f\u043e\u0440\u043d\u044b\u0439"==cran._1?calc_all_oporniy():calc_all_podvesnoy()},1200)}
function calc_all_oporniy(){var b=document.getElementById("summa"),a=document.getElementById("summa1"),d=document.getElementById("doplata"),e=document.getElementById("summa2"),c=document.getElementById("summa3");isNaN(b.innerText.replace(/\s/g,""))||isNaN(a.innerText.replace(/\s/g,""))||isNaN(d.innerText.replace(/\s/g,""))||isNaN(e.innerText.replace(/\s/g,""))||isNaN(c.innerText.replace(/\s/g,""))?(b=parseInt(a.innerText.replace(/\s/g,"")),d=parseInt(d.innerText.replace(/\s/g,"")),e=parseInt(e.innerText.replace(/\s/g,
"")),c=parseInt(c.innerText.replace(/\s/g,"")),c=b+d+e+c):(b=parseInt(b.innerText.replace(/\s/g,"")),a=parseInt(a.innerText.replace(/\s/g,"")),d=parseInt(d.innerText.replace(/\s/g,"")),e=parseInt(e.innerText.replace(/\s/g,"")),c=parseInt(c.innerText.replace(/\s/g,"")),c=b+a+d+e+c);document.getElementById("summa4").innerText=pars_summ(c)}
function calc_all_podvesnoy(){var b=document.getElementById("summa_p"),a=document.getElementById("summa1_p"),d=document.getElementById("doplata_p"),e=document.getElementById("summa2_p"),c=document.getElementById("summa3_p");isNaN(b.innerText.replace(/\s/g,""))||isNaN(a.innerText.replace(/\s/g,""))||isNaN(d.innerText.replace(/\s/g,""))||isNaN(e.innerText.replace(/\s/g,""))||isNaN(c.innerText.replace(/\s/g,""))?(b=parseInt(a.innerText.replace(/\s/g,"")),d=parseInt(d.innerText.replace(/\s/g,"")),e=parseInt(e.innerText.replace(/\s/g,
"")),c=parseInt(c.innerText.replace(/\s/g,"")),c=b+d+e+c):(b=parseInt(b.innerText.replace(/\s/g,"")),a=parseInt(a.innerText.replace(/\s/g,"")),d=parseInt(d.innerText.replace(/\s/g,"")),e=parseInt(e.innerText.replace(/\s/g,"")),c=parseInt(c.innerText.replace(/\s/g,"")),c=b+a+d+e+c);document.getElementById("summa4_p").innerText=pars_summ(c)}document.getElementById("next_tal").addEventListener("mouseover",check_dop_opcii_taley);
function check_dop_opcii_taley(){if(null==document.getElementById("new_tal_window")){try{document.getElementById("bolg_kanat_1").checked?tal.dopopcii.bolgariya_kanat.himagrsreda[2]=1:tal.dopopcii.bolgariya_kanat.himagrsreda[2]=0,document.getElementById("bolg_kanat_2").checked?tal.dopopcii.bolgariya_kanat.tropikisp[2]=1:tal.dopopcii.bolgariya_kanat.tropikisp[2]=0,document.getElementById("bolg_kanat_5").checked?tal.dopopcii.bolgariya_kanat.konc_vikl[2]=1:tal.dopopcii.bolgariya_kanat.konc_vikl[2]=0,
document.getElementById("bolg_kanat_6").checked?tal.dopopcii.bolgariya_kanat.seismichnost9[2]=1:tal.dopopcii.bolgariya_kanat.seismichnost9[2]=0,document.getElementById("bolg_kanat_8").checked?tal.dopopcii.bolgariya_kanat.micropodiom[2]=1:tal.dopopcii.bolgariya_kanat.micropodiom[2]=0,document.getElementById("bolg_kanat_10").checked?tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]=1:tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]=0}catch(b){console.log(b)}try{document.getElementById("bolg_kanat_3").checked?
tal.dopopcii.bolgariya_kanat.morskor[2]=1:tal.dopopcii.bolgariya_kanat.morskor[2]=0,document.getElementById("bolg_kanat_4").checked?tal.dopopcii.bolgariya_kanat.zashcran[2]=1:tal.dopopcii.bolgariya_kanat.zashcran[2]=0,document.getElementById("bolg_kanat_7").checked?tal.dopopcii.bolgariya_kanat.vtoroitormoz[2]=1:tal.dopopcii.bolgariya_kanat.vtoroitormoz[2]=0,document.getElementById("bolg_kanat_9").checked?tal.dopopcii.bolgariya_kanat.skorost_podiomaV2[2]=1:tal.dopopcii.bolgariya_kanat.skorost_podiomaV2[2]=
0}catch(b){console.log(b)}try{document.getElementById("bolg_cep_1").checked?tal.dopopcii.bolgariya_cep.telezhkaelektroprivod[2]=1:tal.dopopcii.bolgariya_cep.telezhkaelektroprivod[2]=0,document.getElementById("bolg_cep_2").checked?tal.dopopcii.bolgariya_cep.telezhkaruchnoyprivod[2]=1:tal.dopopcii.bolgariya_cep.telezhkaruchnoyprivod[2]=0}catch(b){console.log(b)}try{document.getElementById("russia_kanat_1").checked?tal.dopopcii.russia_kanat.vtoroitormoznapodiom[2]=1:tal.dopopcii.russia_kanat.vtoroitormoznapodiom[2]=
0}catch(b){console.log(b)}}else{try{tal.dopopcii.bolgariya_kanat.himagrsreda[2]?document.getElementById("dop_bolg_kanat_1").checked=!0:document.getElementById("dop_bolg_kanat_1").checked=!1,tal.dopopcii.bolgariya_kanat.tropikisp[2]?document.getElementById("dop_bolg_kanat_2").checked=!0:document.getElementById("dop_bolg_kanat_2").checked=!1,tal.dopopcii.bolgariya_kanat.konc_vikl[2]?document.getElementById("dop_bolg_kanat_5").checked=!0:document.getElementById("dop_bolg_kanat_5").checked=!1,tal.dopopcii.bolgariya_kanat.seismichnost9[2]?
document.getElementById("dop_bolg_kanat_6").checked=!0:document.getElementById("dop_bolg_kanat_6").checked=!1,tal.dopopcii.bolgariya_kanat.micropodiom[2]?document.getElementById("dop_bolg_kanat_8").checked=!0:document.getElementById("dop_bolg_kanat_8").checked=!1,tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]?document.getElementById("dop_bolg_kanat_10").checked=!0:document.getElementById("dop_bolg_kanat_10").checked=!1}catch(b){console.log(b)}try{tal.dopopcii.bolgariya_kanat.morskor[2]?document.getElementById("dop_bolg_kanat_3").checked=
!0:document.getElementById("dop_bolg_kanat_3").checked=!1,tal.dopopcii.bolgariya_kanat.zashcran[2]?document.getElementById("dop_bolg_kanat_4").checked=!0:document.getElementById("dop_bolg_kanat_4").checked=!1,tal.dopopcii.bolgariya_kanat.vtoroitormoz[2]?document.getElementById("dop_bolg_kanat_7").checked=!0:document.getElementById("dop_bolg_kanat_7").checked=!1,tal.dopopcii.bolgariya_kanat.skorost_podiomaV2[2]?document.getElementById("dop_bolg_kanat_9").checked=!0:document.getElementById("dop_bolg_kanat_9").checked=
!1}catch(b){console.log(b)}try{tal.dopopcii.bolgariya_cep.telezhkaelektroprivod[2]?document.getElementById("dop_bolg_cep_1").checked=!0:document.getElementById("bolg_cep_1").checked=!1,tal.dopopcii.bolgariya_cep.telezhkaruchnoyprivod[2]?document.getElementById("dop_bolg_cep_2").checked=!0:document.getElementById("bolg_cep_2").checked=!1}catch(b){console.log(b)}try{tal.dopopcii.russia_kanat.vtoroitormoznapodiom[2]?document.getElementById("dop_russia_kanat_1").checked=!0:document.getElementById("russia_kanat_1").checked=
!1}catch(b){console.log(b)}}}
function set_check_dop_opcii_taley(b){try{document.getElementById("dop_bolg_kanat_1").checked?tal.dopopcii.bolgariya_kanat.himagrsreda[2]=1:tal.dopopcii.bolgariya_kanat.himagrsreda[2]=0,document.getElementById("dop_bolg_kanat_2").checked?tal.dopopcii.bolgariya_kanat.tropikisp[2]=1:tal.dopopcii.bolgariya_kanat.tropikisp[2]=0,document.getElementById("dop_bolg_kanat_5").checked?tal.dopopcii.bolgariya_kanat.konc_vikl[2]=1:tal.dopopcii.bolgariya_kanat.konc_vikl[2]=0,document.getElementById("dop_bolg_kanat_6").checked?tal.dopopcii.bolgariya_kanat.seismichnost9[2]=
1:tal.dopopcii.bolgariya_kanat.seismichnost9[2]=0,document.getElementById("dop_bolg_kanat_8").checked?tal.dopopcii.bolgariya_kanat.micropodiom[2]=1:tal.dopopcii.bolgariya_kanat.micropodiom[2]=0,document.getElementById("dop_bolg_kanat_10").checked?tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]=1:tal.dopopcii.bolgariya_kanat.mikroperemeshenie[2]=0}catch(a){console.log(a)}try{document.getElementById("dop_bolg_kanat_3").checked?tal.dopopcii.bolgariya_kanat.morskor[2]=1:tal.dopopcii.bolgariya_kanat.morskor[2]=
0,document.getElementById("dop_bolg_kanat_4").checked?tal.dopopcii.bolgariya_kanat.zashcran[2]=1:tal.dopopcii.bolgariya_kanat.zashcran[2]=0,document.getElementById("dop_bolg_kanat_7").checked?tal.dopopcii.bolgariya_kanat.vtoroitormoz[2]=1:tal.dopopcii.bolgariya_kanat.vtoroitormoz[2]=0,document.getElementById("dop_bolg_kanat_9").checked?tal.dopopcii.bolgariya_kanat.skorost_podiomaV2[2]=1:tal.dopopcii.bolgariya_kanat.skorost_podiomaV2[2]=0}catch(a){console.log(a)}try{document.getElementById("dop_bolg_cep_1").checked?
tal.dopopcii.bolgariya_cep.telezhkaelektroprivod[2]=1:tal.dopopcii.bolgariya_cep.telezhkaelektroprivod[2]=0,document.getElementById("dop_bolg_cep_2").checked?tal.dopopcii.bolgariya_cep.telezhkaruchnoyprivod[2]=1:tal.dopopcii.bolgariya_cep.telezhkaruchnoyprivod[2]=0}catch(a){console.log(a)}try{document.getElementById("dop_russia_kanat_1").checked?tal.dopopcii.russia_kanat.vtoroitormoznapodiom[2]=1:tal.dopopcii.russia_kanat.vtoroitormoznapodiom[2]=0}catch(a){console.log(a)}};