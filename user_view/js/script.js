var calc_ajaxurl = {url:location.origin+'/wp-admin/admin-ajax.php'}
var locate = location.origin;
jQuery(document).ready(($)=>{
	let steps = document.createElement('span');
		steps.className = 'animated zoomIn';
		steps.id = 'steps';
		steps.innerText = cran.step;
		document.querySelector('#main_block_for_steps').insertBefore(steps, document.querySelector('#main_block_for_steps').firstChild);
	$('html, body').animate({ scrollTop: '0px' }, 700)
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
	$('.vzrivo').click(function () {easyscroll(200);
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
		});


	$('.pozharo').click(function () {easyscroll(200)
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
			next_group( $('#_3'), 7.5 );});


/************************************************************************************************************************
*																														*
*		ВЫБОР СПОСОБА УПРАВЛЕНИЯ КРАНОМ - РУЧНОЕ ИЛИ ЭЛЕКТРО УПРАВЛЕНИЕ, ПОДВЕСНОЙ ПУЛЬТ ИЛИ РАДИОУПРАВЛЕНИЕ ШАГ-3 		*
*																														*
************************************************************************************************************************/
	$('._31').click(function () {
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		next_group( $('#грузоподъемность'), 0 );
		cran._3 = 'Ручное';
		cran._3Type = 'Отсутствует при ручном управлении';
		$('#gpO > ul li:nth-child(9)').css('display','none');
		$('#gpO > ul li:nth-child(10)').css('display','none');
		$('#грузоподъемность div:nth-child(12)').css('display','none');
		$('#грузоподъемность div:nth-child(13)').css('display','none');
	});

	$('._32').click(function () {
		$('.hide_dop_el').removeClass('hide_dop_el hide_dop_animate_el').addClass('back_dop_animate_el');
		easyscroll(380);
		$('#main_block_for_steps').css('height', '900px');
		cran._3 = 'Электро';
	});
	$('._33_next').click(function () {
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
									<span class="stoimost_parametra">Бесплатно</span><i class="id_bro">b3</i> \
								</p>';
			return new_html;
		});
		next_group( $('#грузоподъемность'), 0 ); // НОВОЕ
		//next_group( $('#razmeshenie'), 0 ); СТАРОЕ
	});
	$('._34').click(function () {
		$('#main_block_for_steps').css('height', '1200px');
		$('#vidipultov').css('display','block');easyscroll(720);
	})
	$('._35').click(function () {$('#main_block_for_steps').css('height', '1550px');// Пульт
		$('#proizvositeli_pult').animate({'bottom':'-324px'}, 800);easyscroll(1050);
		cran._3Type = 'Радиоуправление с пультом';
	});
	$('._36').click(function () {$('#main_block_for_steps').css('height', '1550px'); //Джостик
			cran._3Type = 'Радиоуправление с джойстиком';
			$('#proizvositeli_pult').animate({'bottom':'-324px'}, 800);easyscroll(1050);
		})
	$('._37').click(function () {$('#main_block_for_steps').css('height', '800px');
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		cran._3Type = cran._3Type + ' Telecrane (Тайвань)';
		next_group( $('#грузоподъемность'), 0 ); // НОВОЕ
		//next_group( $('#razmeshenie'), 0 ); СТАРОЕ
	});
	$('._38').click(function () {$('#main_block_for_steps').css('height', '800px');
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		cran._3Type = cran._3Type + ' Ikusi (Испания)';
		next_group( $('#грузоподъемность'), 0 ); // НОВОЕ
		//next_group( $('#razmeshenie'), 0 ); СТАРОЕ
	});
	$('._39').click(function () {$('#main_block_for_steps').css('height', '800px');
		hide($('#_3'));
		cran.step = 'Шаг 4 из 11'
		cran._3Type = cran._3Type + ' HBC-Radiomatic (Германия)';
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
		switch (res) {
	    			case 4: {
	    				tal.gp=cran.gp = 500;
	    				break
	    			}
	    			case 5: {
	    				tal.gp=cran.gp = 1000;
	    				break
	    			}
	    			case 6: {
	    				tal.gp=cran.gp = 2000;
	    				break
	    			}
	    			case 7: {
	    				tal.gp=cran.gp = 3200;
	    				break
	    			}
	    			case 8: {
	    				tal.gp=cran.gp = 5000;
	    				break
	    			}
	    			case 9: {
	    				tal.gp=cran.gp = 6300;
	    				break
	    			}
	    			case 10: {
	    				tal.gp=cran.gp = 8000;
	    				break
	    			}
	    			case 11: {
	    				tal.gp=cran.gp = 10000;
	    				break
	    			}
	    			case 12: {
	    				tal.gp=cran.gp = 12500;
	    				break
	    			}
	    			case 13: {
	    				tal.gp=cran.gp = 16000;
	    				break
	    			}
	    			default: 
	    				tal.gp=cran.gp = 500;
	    				break
	    		}
		if (cran._1 == 'Опорный') {
			document.getElementById('vO').value = cran._3 == 'Электро'? '6000' : '3000'
			hide($('#грузоподъемность'));
			cran.step = 'Шаг 5 из 11'
			next_group( $('#размеры_помещения_опорный'), 0 );
		}
		if (cran._1 == 'Подвесной') {
			document.getElementById('vP').value = cran._3 == 'Электро'? '6000' : '3000'
			hide($('#грузоподъемность'));
			cran.step = 'Шаг 5 из 11'
			next_group( $('#размеры_помещения_подвесной'), 0 );
		}		
		//cran._3 == 'Ручное' ? next_group($('#vibor_tali'), 0) : next_group( $('#система_управления_краном'), 8 );
		
	});
/************************************************************************************************************************
*																														*
*									ВВОД РАЗМЕРОВ ПОМЕЩЕНИЯ ДЛЯ ОПОРНОГО КРАНА  ШАГ-5	 								*
*																														*
************************************************************************************************************************/
	$('.параметры_помещения_для_опорный').click(function () {
		cran.paramsO.dpO = document.getElementById('dpO').value;
		cran.paramsO.shpO = document.getElementById('shpO').value;
		document.getElementById('valdpO').value = cran.paramsO.shpO;
		tal.visota = cran.paramsO.vO = document.getElementById('vO').value = cran._3 == 'Электро'? '6000' : '3000';
		cran.paramsO.vpO = document.getElementById('vpO').value;
		hide($('#размеры_помещения_опорный'));
		cran._3 == 'Электро' ? cran.step = 'Шаг 6 из 11' : cran.step = 'Шаг 8 из 11';
		cran._3 == 'Ручное' ? next_group( $('#razmeshenie'), 0 ) : next_group( $('#система_управления_краном'), 0 ); // СЛЕДУЮЩИМ БЫЛ ТОКОПОДВОД
	});
/************************************************************************************************************************
*																														*
*									ВВОД РАЗМЕРОВ ПОМЕЩЕНИЯ ДЛЯ ПОДВЕСНОГО КРАНА  ШАГ-5	 								*
*																														*
************************************************************************************************************************/
	$('.параметры_помещения_для_подвесной').click(function () {
		cran.paramsP.dpP = document.getElementById('dpP').value;
		cran.paramsP.shpP = document.getElementById('shpP').value;
		document.getElementById('valdpPk').value = cran.paramsP.shpP;
		tal.visota = cran.paramsP.vP = document.getElementById('vP').value;
		cran.paramsP.vpP = document.getElementById('vpP').value;
		document.getElementById('valdpPk').value = cran.paramsP.vpP;
		hide($('#размеры_помещения_подвесной'));
		cran._3 == 'Электро' ? cran.step = 'Шаг 6 из 11' : cran.step = 'Шаг 8 из 11';
		cran._3 == 'Ручное' ? next_group( $('#razmeshenie'), 0 ) : next_group( $('#система_управления_краном'), 0 ); // СЛЕДУЮЩИМ БЫЛ ТОКОПОДВОД
		
	});
/************************************************************************************************************************
*																														*
*		ВЫБОР ВЫБОР СИСТЕМЫ УПРАВЛЕНИЯ КРАНОМ - РЕЛЕЙНО-КОНТАКТОРНАЯ ИЛИ ЧАСТОТНЫЙ ПРЕОБРАЗОВАТЕЛЬ ШАГ-6 				*
*																														*
************************************************************************************************************************/
	$('.реле').click(function () {//8.1
		$('.скрыть_варианты_ук').removeClass('скрыть_варианты_ук скрыть_варианты_animate_ук').addClass('показать_варианты_animate_ук');
		$('.скрыть_варианты_animate_ук').removeClass('скрыть_варианты_animate_ук').addClass('показать_варианты_animate_ук');
		$('.показать_варианты_animate_чп').removeClass('показать_варианты_animate_чп').addClass('скрыть_варианты_animate_чп');
		$('#main_block_for_steps').css('height', '950px');easyscroll(380);
	})

		$('.одна_с').click(function () {//8.3
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Одна скорость движения';
			cran.code_of_chastotnik = '8.3';
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '800px');
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
							<span class="stoimost_parametra">Бесплатно</span><i class="id_bro">b8</i> \
							</p>';
					return new_html;
				});
				cran.code_of_chastotnik = '8.3';
		});
		$('.несколько_с').click(function () {//8.4
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Несколько скоростей движения';
			cran.code_of_chastotnik = '8.4';
			next_group($('#мотор_редуктора'), 0);		
			$('#main_block_for_steps').css('height', '800px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.4') : false;
		});

	$('.преобразователь').click(function () {//8.2
		$('.скрыть_варианты_чп').removeClass('скрыть_варианты_чп скрыть_варианты_animate_чп').addClass('показать_варианты_animate_чп');
		$('.скрыть_варианты_animate_чп').removeClass('скрыть_варианты_animate_чп').addClass('показать_варианты_animate_чп');
		$('.показать_варианты_animate_ук').removeClass('показать_варианты_animate_ук').addClass('скрыть_варианты_animate_ук');
		$('#main_block_for_steps').css('height', '950px');easyscroll(380);
	})

		$('.esq').click(function () {
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';		
			cran.code_of_chastotnik = '8.2';
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '800px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;
			cran.chastotnik_price(8.5);
		});
		$('.hyundai').click(function () {
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';		
			cran.code_of_chastotnik = '8.2';
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '800px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;
			cran.chastotnik_price(8.6);
		});
		$('.danfross').click(function () {
			hide($('#система_управления_краном'));
			cran.step = 'Шаг 7 из 11'
			cran.setspeed = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';				
			cran.code_of_chastotnik = '8.2';
			next_group($('#мотор_редуктора'), 0);
			$('#main_block_for_steps').css('height', '800px');
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;	
			cran.chastotnik_price(8.7);
		});
/************************************************************************************************************************
*																														*
*										ВЫБОР ВЫБОР МОТОР-РЕДУКТОРА КРАНА ШАГ-7 										*
*																														*
************************************************************************************************************************/
	$('.чаи').click(function () {
		cran.setmotor = 'Червячная передача ABLE (Италия) - стандартно';
		cran.motor_price(9.1);
		cran.code_of_motor = 9.1;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '540px');
	//	double_speed(cran.code_of_chastotnik);
	});
	$('.чнг').click(function () {
		cran.setmotor = 'Червячная передача NORD (Германия)';
		cran.motor_price(9.2);
		cran.code_of_motor = 9.2;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '540px');
		//double_speed(cran.code_of_chastotnik);
	});
	$('.цбб').click(function () {
		cran.setmotor = 'Циллиндрическая передача Балкан Эхо (Болгария)';
		cran.motor_price(9.3);
		cran.code_of_motor = 9.3;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '540px');
		//double_speed(cran.code_of_chastotnik);
	});
	$('.цнг').click(function () {
		cran.setmotor = 'Циллиндрическая передача NORD (Германия)';
		cran.motor_price(9.4);
		cran.code_of_motor = 9.4;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '540px');
		//double_speed(cran.code_of_chastotnik);
	});
	$('.цер').click(function () {
		cran.setmotor = 'Циллиндрическая передача Европривод (Россия)';
		cran.motor_price(9.5);
		cran.code_of_motor = 9.5;
		hide($('#мотор_редуктора'));
		cran.step = 'Шаг 8 из 11'
		next_group( $('#razmeshenie'), 0 );
		$('#main_block_for_steps').css('height', '540px');
		//double_speed(cran.code_of_chastotnik);
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


	$('#m50').click(function() {cran.temper[0] = '-50'});
	$('#m40').click(function() {cran.temper[0] = '-40'});
	$('#m20').click(function() {cran.temper[0] = '-20'});
	$('#p40').click(function() {cran.temper[1] = '+40'});
	$('#p60').click(function() {cran.temper[1] = '+60'});
	


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
		$('#main_block_for_steps').css('height', '1100px');
		$('#rels_oporniy').css('display', 'block');
		easyscroll(500)
	}); $('.есть_рельс').click(function () {
			$('#main_block_for_steps').css('height', '1500px');
			$('#список_моделей_рельс').animate({'top':'900px'}, 1000);
			easyscroll(950)
		})


	
	$('.нужен_монтаж_пути').click(function () {
			hide($('#пути_для_опорного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			$('#main_block_for_steps').css('height', '620px');
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 ); 
	}); $('.нужен_монтаж_рельс').click(function () {
			hide($('#пути_для_опорного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			$('#main_block_for_steps').css('height', '620px');
			$('#список_моделей_рельс').css('display', 'none');
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 ); 
		});
			$('#p24').click(function () {cran.relsO = 'Р24'});
			$('#p43').click(function () {cran.relsO = 'Р43'});
			$('#p50').click(function () {cran.relsO = 'Р50'});
			$('#kp65').click(function () {cran.relsO = 'КР65'});
			$('#kp70').click(function () {cran.relsO = 'КР70'});
			$('#kp80').click(function () {cran.relsO = 'КР80'});
			$('#kubik40').click(function () {cran.relsO = 'Квадрат 40х40'});
			$('#kubik50').click(function () {cran.relsO = 'Квадрат 50х50'});
			$('#kubik60').click(function () {cran.relsO = 'Квадрат  60х60'});
/************************************************************************************************************************
*																														*
*	 								ВЫБОР КРАНОВЫХ ПУТЕЙ ДЛЯ ПОДВЕСНОГО КРАНА	ШАГ-9 									*
*																														*
************************************************************************************************************************/
	$('.есть_путь2').click(function () {
		$('#main_block_for_steps').css('height', '1000px');
		$('.скрыть_варианты_подврельс').removeClass('скрыть_варианты_подврельс скрыть_варианты_animate_подврельс').addClass('показать_варианты_animate_подврельс');
		easyscroll(720);
	}); $('.путь_подвесной').click(function () {
			hide($('#пути_для_подвесного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 ); 
			$('#main_block_for_steps').css('height', '620px');
		})


	
	$('.нужен_монтаж_пути2').click(function () {
			hide($('#пути_для_подвесного'));
			cran._3 == 'Электро' ? cran.step = 'Шаг 10 из 11' : cran.step = 'Шаг 11 из 11';
			$('#main_block_for_steps').css('height', '620px');
			$('#пути_подвесной').css('display', 'none');
			cran._3 == 'Ручное' ? next_group( $('#vibor_tali'), 0 ) : next_group( $('#токоподвод'), 0 ); 
	});
/************************************************************************************************************************
*																														*
*	 											ВЫБОР ТОКОПОДВОДА	ШАГ-10 												*
*																														*
************************************************************************************************************************/
	$('.ток_требуется').click(()=>{
		$('#main_block_for_steps').css('height', '820px');easyscroll(180);
		$('.скрыть_варианты_токоподвод').removeClass('скрыть_варианты_токоподвод скрыть_варианты_animate_токоподвод').addClass('показать_варианты_animate_токоподвод');
	});
		$('.каб_с_кол').click(()=>{cran.setttk = 'Кабельный с кольцами';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '620px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.3.png')});
		$('.каб_с_тел').click(()=>{cran.setttk = 'Кабельный с тележками';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '620px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.4.png')});
		$('.фесто').click(()=>{cran.setttk = 'Фестонный (С профиль)';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '620px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.5.png')});
		$('.откр_тролл').click(()=>{cran.setttk = 'Открытые троллеи';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '620px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.6.png')});
		$('.закр_тролл').click(()=>{cran.setttk = 'Закрытые троллеи';hide($('#токоподвод'));cran.step = 'Шаг 11 из 11';$('#main_block_for_steps').css('height', '620px');next_group( $('#vibor_tali'), 0 );postavka_provoda('6.7.png')});

	$('.ток_нетребуется').click(function () {
		cran.setttk = 'Токоподвод не требуется';
		hide($('#токоподвод'));
		cran.step = 'Шаг 11 из 11';
		$('#main_block_for_steps').css('height', '620px');
		next_group( $('#vibor_tali'), 0 );
	});
/************************************************************************************************************************
*																														*
*	 									БЛОК ВЫБОРА ТАЛЕЙ С ЖЕСТОКОЙ ЛОГИКОЙ =)	ШАГ-11									*
*																														*
************************************************************************************************************************/
	$('.tal_yes').click(()=>{
		if (tal.gp <=10000 && cran._2.search(/Взрывобезопасное/i) != 0) {
			$('.hide_type_upravleniya').removeClass('hide_type_upravleniya').addClass('show_type_upravleniya');
			easyscroll(520);
			$('#main_block_for_steps').css('height', '1060px');
		}
		  else if (tal.gp > 10000 && cran._2.search(/Взрывобезопасное/i) != 0) {
			$('.hide_type_upravleniya').css('display', 'none');
			$('.hide_country_e').removeClass('hide_country_e').addClass('show_country_e')
			tal.gp <= 12500 && tal.visota <= 15000 ? 
				$('.rus_e').css('display', 'inline-block')
			:
				$('.rus_e').css('display', 'none');
			tal.upravlenie = 'Электро';
			easyscroll(520);
			$('#main_block_for_steps').css('height', '1360px');
		  }	
		  	else if (cran._2.search(/Взрывобезопасное/i) == 0) {
				$('.hide_s_visota_tal').removeClass('hide_s_visota_tal').addClass('show_s_visota_tal');
				tal.upravlenie = 'Электро';
				tal.type = 'Канатная';
				tal.country = 'Болгария';
				tal.img = '17.5.png';
		    }
		
		$('#main_block_for_steps').css('height', '920px');
	});

		$('.ruchnaya_t').click(()=>{
			$('.hide_country_r').removeClass('hide_country_r').addClass('show_country_r')
			$('.show_country_e').removeClass('show_country_e').addClass('hide_country_e')
			tal.upravlenie = 'Ручное';
			tal.type = 'Цепная';
			easyscroll(820);
			$('#main_block_for_steps').css('height', '1300px');
		})
		$('.electro_t').click(()=>{
			if (cran._2.search(/Взрывобезопасное/i) == 0) {
				$('.hide_s_visota_tal').removeClass('hide_s_visota_tal').addClass('show_s_visota_tal')
				easyscroll(820);
				$('#main_block_for_steps').css('height', '1300px');
				tal.type = 'Канатная';
				tal.country = 'Болгария';
				tal.img = '17.5.png';
			} else {
				$('.hide_country_e').removeClass('hide_country_e').addClass('show_country_e')
				$('.show_country_r').removeClass('show_country_r').addClass('hide_country_r')
				easyscroll(820);
				$('#main_block_for_steps').css('height', '1300px');
		      }			
			tal.upravlenie = 'Электро';
		})

			$('.sheciya_tR').click(()=>{
				tal.country = 'Швеция';
				tal.img = '17.10.png';
					hide($('#vibor_tali'));
					cran.step = 'end';
					if (cran._1 == 'Опорный') {
						resultatiO();
						next_group($('#результат_опорного'), 0);
						calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						resultatiP();
						next_group($('#результат_подвесного'), 0);
					}
					$('#main_block_for_steps').css('height', '390px');
					$('#dop_block').css('display', 'block');
					cran.calculate_tal();
			})

			$('.bolgariya_tE').click(()=>{
				if (tal.gp <= 2000 && tal.visota <= 12000) {
					$('.hide_type_tal').removeClass('hide_type_tal').addClass('show_type_tal')
					$('#main_block_for_steps').css('height', '1680px');
					easyscroll(1220);
				} else {
					$('.hide_type_tal').css('display', 'none')
					$('.hide_s_visota_tal').removeClass('hide_s_visota_tal').addClass('show_s_visota_tal')
					$('#main_block_for_steps').css('height', '1680px');
					easyscroll(1220);
					tal.type = 'Канатная';
				  }
				tal.country = 'Болгария';
				tal.img = '17.5.png';
			})
				$('.stdV_t').click(()=>{
					cran._2.search(/Взрывобезопасное/i) == 0 ? tal.type = 'Канатная ВБИ' : tal.type = 'Канатная';
					tal.img = '17.5.1.png';
					hide($('#vibor_tali'));
					cran.step = 'end';
						if (cran._1 == 'Опорный') {
							resultatiO();
							next_group($('#результат_опорного'), 0);
							calculate_oporniy_crane();
						}
						if (cran._1 == 'Подвесной') {
							resultatiP();
							next_group($('#результат_подвесного'), 0);
						}
						$('#main_block_for_steps').css('height', '390px');
						$('#dop_block').css('display', 'block');
						cran.calculate_tal();
				})
				$('.umenV_t').click(()=>{
					cran._2.search(/Взрывобезопасное/i) == 0 ? tal.type = 'Канатная УСВ ВБИ' : tal.type = 'Канатная УСВ';
					tal.img = '17.5.2.png';
						hide($('#vibor_tali'));
						cran.step = 'end';
						if (cran._1 == 'Опорный') {
							resultatiO();
							next_group($('#результат_опорного'), 0);
							calculate_oporniy_crane();
						}
						if (cran._1 == 'Подвесной') {
							resultatiP();
							next_group($('#результат_подвесного'), 0);
						}
						$('#main_block_for_steps').css('height', '390px');
						$('#dop_block').css('display', 'block');
						cran.calculate_tal();
				})

			$('.russia_tR').click(()=>{
				tal.country = 'Россия';
				tal.img = '17.8.png';
					hide($('#vibor_tali'));
					cran.step = 'end';
					if (cran._1 == 'Опорный') {
						resultatiO();
						next_group($('#результат_опорного'), 0);
						calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						resultatiP();
						next_group($('#результат_подвесного'), 0);
					}
					$('#main_block_for_steps').css('height', '390px');
					$('#dop_block').css('display', 'block');
					cran.calculate_tal();
			})
			$('.russia_tE').click(()=>{
				tal.type = 'Канатная';
				tal.country = 'Россия';				
				tal.img = '17.6.png';
					hide($('#vibor_tali'));
					cran.step = 'end';
					if (cran._1 == 'Опорный') {
						resultatiO();
						next_group($('#результат_опорного'), 0);
						calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						resultatiP();
						next_group($('#результат_подвесного'), 0);
					}
					$('#main_block_for_steps').css('height', '390px');
					$('#dop_block').css('display', 'block');
					cran.calculate_tal();
			})

			$('.china_tR').click(()=>{
				tal.country = 'Китай';
				tal.img = '17.9.png';
					hide($('#vibor_tali'));
					cran.step = 'end';
					if (cran._1 == 'Опорный') {
						resultatiO();
						next_group($('#результат_опорного'), 0);
						calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						resultatiP();
						next_group($('#результат_подвесного'), 0);
					}
					$('#main_block_for_steps').css('height', '390px');
					$('#dop_block').css('display', 'block');
					cran.calculate_tal();	
			})
			$('.china_tE').click(()=>{
				tal.country = 'Китай';
				tal.img = '17.7.png';
				if ((tal.gp <= 500 && tal.visota <= 6000) || (tal.gp <= 10000 && tal.visota <= 9000)) {
					$('.hide_type_tal').removeClass('hide_type_tal').addClass('show_type_tal')
					easyscroll(920);
					$('#main_block_for_steps').css('height', '1680px');
				} else {
					tal.type = 'Канатная';
					hide($('#vibor_tali'));
					cran.step = 'end';
					if (cran._1 == 'Опорный') {
						resultatiO();
						next_group($('#результат_опорного'), 0);
						calculate_oporniy_crane();
					}
					if (cran._1 == 'Подвесной') {
						resultatiP();
						next_group($('#результат_подвесного'), 0);
					}
					$('#main_block_for_steps').css('height', '390px');
					$('#dop_block').css('display', 'block');
					cran.calculate_tal();
				  }
			})

				$('.kanat_t').click(()=>{
					if (tal.country == 'Болгария') {						
						$('.hide_s_visota_tal').removeClass('hide_s_visota_tal').addClass('show_s_visota_tal')
						easyscroll(1620);
						tal.type = 'Канатная';
						$('#main_block_for_steps').css('height', '2100px');
					} else {
						tal.type = 'Канатная';
						tal.img = '17.3.png';
							hide($('#vibor_tali'));
							cran.step = 'end';
							if (cran._1 == 'Опорный') {
								resultatiO();
								next_group($('#результат_опорного'), 0);
								calculate_oporniy_crane();
							}
							if (cran._1 == 'Подвесной') {
								resultatiP();
								next_group($('#результат_подвесного'), 0);
							}
							$('#main_block_for_steps').css('height', '390px');
							$('#dop_block').css('display', 'block');
							cran.calculate_tal();
					}
				})
				$('.cep_t').click(()=>{
					tal.type = 'Цепная';
					tal.img = '17.4.png';
						hide($('#vibor_tali'));
						cran.step = 'end';
						if (cran._1 == 'Опорный') {
							resultatiO();
							next_group($('#результат_опорного'), 0);
							calculate_oporniy_crane();
						}
						if (cran._1 == 'Подвесной') {
							resultatiP();
							next_group($('#результат_подвесного'), 0);
						}
						$('#main_block_for_steps').css('height', '390px');
						$('#dop_block').css('display', 'block');
						cran.calculate_tal();
				})
			

	$('.tal_no').click(()=>{
		$('body').append('\
			')
		hide($('#vibor_tali'));
		cran.step = 'end';
		if (cran._1 == 'Опорный') {
			resultatiO();
			next_group($('#результат_опорного'), 0);
			calculate_oporniy_crane();
		}
		if (cran._1 == 'Подвесной') {
			resultatiP();
			next_group($('#результат_подвесного'), 0);
		}
		$('#main_block_for_steps').css('height', '390px');
		$('#dop_block').css('display', 'block');
	})
//////////////////////////////////////////////////////////////

	$('#option_click1').click(()=>{
		if ($('#option_click1').hasClass('head_dop_menu')) {easyscroll(400)
			$('#option_click1').removeClass('head_dop_menu').addClass('head_dop_menu_open');
			$('#option_1').removeClass('dop_menu').addClass('dop_menu_open');
		}
		else {
			$('#option_click1').removeClass('head_dop_menu_open').addClass('head_dop_menu');
			$('#option_1').removeClass('dop_menu_open').addClass('dop_menu');
		}		
	});

	$('#option_click2').click(()=>{
		if ($('#option_click2').hasClass('head_dop_menu')) {easyscroll(700)
			$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
			$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
		}
		else {
			$('#option_click2').removeClass('head_dop_menu_open').addClass('head_dop_menu');
			$('#option_2').removeClass('dop_menu_open').addClass('dop_menu');
		}		
	});

	$('#option_click3').click(()=>{
		if ($('#option_click3').hasClass('head_dop_menu')) {easyscroll(1100)
			$('#option_click3').removeClass('head_dop_menu').addClass('head_dop_menu_open');
			$('#option_3').removeClass('dop_menu').addClass('dop_menu_open');
		}
		else {
			$('#option_click3').removeClass('head_dop_menu_open').addClass('head_dop_menu');
			$('#option_3').removeClass('dop_menu_open').addClass('dop_menu');
		}		
	});

	$('.dop_menu_open').on('mouseenter', '.dop_parametr',function(event) {
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
    	arg.animate({ 'top': '-3000px' }, 700, function() {
        $(this).css('position', 'absolute')
    })
}

function next_group(arg, left) {
    arg.animate({ 'left': left + '%' }, 1300, function() {
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
function easyscroll(scrollTo) { $('html, body').animate({ scrollTop: (document.body.scrollTop + scrollTo) + 'px' }, 700) }
/************************************************************************************************************************
*																														*
*	 					БЛОК ПРИМЕНЕНИЯ ЗАПОЛНЕННЫХ ДАННЫХ ЭЛЕМЕНТАМ НА КЛИЕНТСКОЙ ЧАСТИ ДЛЯ ОПОРНЫХ					*
*																														*
************************************************************************************************************************/
function resultatiO () {
	cran.resetparam();
	$('#Ogp').text(cran.gp);
	$('#Odp').text(cran.paramsO.shpO);
	$('#Oic').text(cran._2);
	$('#Orr').text('Средний - А5');
	$('#Otr').html(cran.temper[0]+'&deg; до '+cran.temper[1]+'&deg;');
	$('#Ocu').text(cran.climat);
	$('#Otc').text(cran._3);
	$('#Otpr').text(cran.relsO?cran.relsO:'Не определён');
	$('#Otk').text(cran.razrez);
	$('#Ois').text(cran.speed);
	$('#Ovc').text(cran.visota);
	$('#Oszo').text(cran.szo);	
	$('#Oep').text(cran.getep);
	$('#Ovolt').text(cran.ncuprav);
	$('#Ospeed').text(cran.speedmetr);
	$('#Ottk').text(cran.ttk);
}
/************************************************************************************************************************
*																														*
*	 					БЛОК ПРИМЕНЕНИЯ ЗАПОЛНЕННЫХ ДАННЫХ ЭЛЕМЕНТАМ НА КЛИЕНТСКОЙ ЧАСТИ ДЛЯ ПОДВЕСНЫХ					*
*																														*
************************************************************************************************************************/
function resultatiP () {
	cran.resetparam();
	$('#Pgp').text(cran.gp);
	$('#Pdp').text(cran.paramsP.shpP);	
	$('#Pdk').text(cran.paramsP.vpP);
	$('#Pic').text(cran._2);
	$('#Prr').text('Средний - А5');
	$('#Ptr').html(cran.temper[0]+'&#176; до '+cran.temper[1]+'&#176;');
	$('#Pcu').text(cran.climat);
	$('#Ptc').text(cran._3);
	$('#Ptpr').text(cran.relsP?cran.relsP:'Не определён');
	$('#Ptk').text(cran.razrez);
	$('#Pis').text(cran.speed);
	$('#Pvc').text(cran.visota);
	$('#Pszo').text(cran.szo);
	$('#Pep').text(cran.getep);
	$('#Pvolt').text(cran.ncuprav);
	$('#Pspeed').text(cran.speedmetr);
	$('#Pttk').text(cran.ttk);
}

cran.price_crane_electro_upravleniya = function (_8punkt) {
			//////////////
			let price = 
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.3') ? {id:1, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:2, img:'3.7'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.3') ? {id:3, img:'3.7'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:4, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					_8punkt == '8.3' || '8.2' || '8.4') ? {id:5, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.3') ? {id:6, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:7, img:'3.8'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.3') ? {id:8, img:'3.8'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:9, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					_8punkt == '8.3' || '8.2' || '8.4') ? {id:10, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.3') ? {id:11, img:'3.9'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:12, img:'3.9'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.3') ? {id:13, img:'3.9'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.2' || '8.4') ? {id:14, img:'3.9'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					_8punkt == '8.3' || '8.2' || '8.4') ? {id:15, img:'3.9'}:false)
				||
				0;
			if (price.id == 0) return false;
				var data_crane_electro_upravleniya = { action: 'calc_crane_electro_upravleniya', _variant_id:price.id }
				$.post( calc_ajaxurl.url, data_crane_electro_upravleniya, function (response) {					
					$('.pult_change').parent('.dop_parametr').detach();
					$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr"><span class="change_this_option_with_del pult_change"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span><span class="del_this_option return_pult_default"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
						'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ price.img +'.png" alt="" class="pult_change" style="width:200px"><h4>Управление каном</h4> \
						<p><span class="opisanie_parametra">'+String(cran._3Type)+'</span><br> \
						<span class="stoimost_parametra">'+ String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span><i class="id_bro">b3</i></p>');
					$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
					$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
				});
			//////////////
}



function postavka_provoda (img) {
	if (cran._1 == 'Опорный')
	{
		var provod = { name_provod:cran.ttk, dlinna:cran.paramsO.dpO, }
	}
	/////////////
	var data_provod = { action: 'postavka_provod', _name_provod:provod.name_provod, _provod_dlinna:provod.dlinna, provod_url_img:location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+img }
	$.post( calc_ajaxurl.url, data_provod, function(response)
	{
		$('#option_1 .dop_parametr:last-child').before(()=>{
			let new_html = response;
			return new_html;
		});
	});
	/////////////
}



cran.chastotnik_price = function (model) {
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
	var data_chastotnik = { action: 'calc_chastotnik', _chastotnik_id:price.id }
				$.post( calc_ajaxurl.url, data_chastotnik, function (response) {
					$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr"><span class="change_this_option_with_del preobrazovatel_change"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span><span class="del_this_option return_preobrazovatel_default"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
						'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ price.img +'.png" alt="" class="preobrazovatel_change" style="width:200px"><h4>Частотный преобразователь</h4> \
						<p><span class="opisanie_parametra">'+String(cran.speed)+'</span><br> \
						<span class="stoimost_parametra">'+ String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span></p>');
					$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
					$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
				});
}

cran.double_speed = function (code_preobrazovatelya) {
	console.log(code_preobrazovatelya)
	if (code_preobrazovatelya != '8.4') {return}
	let data_preobrazovatel = { action: 'calc_double_speed', _motor_code:cran.code_of_motor,  _motor_gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
	$.post( calc_ajaxurl.url, data_preobrazovatel, function (response) {
		$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr"><span class="change_this_option_with_del preobrazovatel_change"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span><span class="del_this_option return_preobrazovatel_default"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
			'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/8.4.png" alt="" class="preobrazovatel_change" style="width:200px"><h4>Релейно-контакторный преобразователь</h4> \
			<p><span class="opisanie_parametra">'+String(cran.speed)+'</span><br> \
			<span class="stoimost_parametra">'+ String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span></p>');
		$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
		$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
	});
}




//Рассчет стоимости мотор-редуктора
cran.motor_price = function (model) {
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
										<h4>Червячная передача ABLE (Италия)</h4> \
										<p> \
											<span class="opisanie_parametra">Входит в стоимость крана</span> \
												<br> \
											<span class="stoimost_parametra">Бесплатно</span><i class="id_bro">b3</i> \
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
						<span class="stoimost_parametra">'+ String(Number(answer.base_price).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span></p>');
						$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
						$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
				})
				break;
		}
		//$.post( calc_ajaxurl.url, data_motor, function (response) {return console.log(response)})
}
//Рассчет стоимости мотор-редуктора



function calculate_oporniy_crane (argument) {	
			//////////////
				var data_cran = { action: 'calc_cran', _gp:cran.gp, _shir:cran.paramsO.shpO, _upravl:cran._3 }
				$.post( calc_ajaxurl.url, data_cran, function(response) {
					cran.summa = response;
					$('#summa').text(String(Number(cran.summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
				});
				var data_sroki_cran = { action: 'calc_sroki', _gp:cran.gp, _shir:cran.paramsO.shpO, _upravl:cran._3 }
				$.post( calc_ajaxurl.url, data_sroki_cran, function(response) {
					$('#sroki').text(response);
				});
			//////////////
}

cran.calculate_tal = function  (argument) {	
			//////////////
				var data_tal = { action: 'calc_tal', _upravlenie:tal.upravlenie, _type:tal.type, _country:tal.country, _visota:tal.visota, _ispolnenie:tal.ispolnnie, _gp:tal.gp }
				$.post( calc_ajaxurl.url, data_tal, function(response) {
					tal.summa = response;
					$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr  tal_for_search"><span class="change_this_option_with_del tal_change"><i class="fa fa-pencil-square" aria-hidden="true"></i> Изменить</span> \
						<span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
					'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ tal.img +'" alt="" class="tal_change" style="width:200px"><h4>Таль '+ tal.country +'</h4> \
					<p><span class="opisanie_parametra">'+String(tal.upravlenie)+'<br>'+String(tal.type)+'</span><br> \
					<span class="stoimost_parametra">'+ String(Number(tal.summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span> \
					</p>');
					//easyscroll(700)
					$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
					$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
				});
			//////////////
}

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
	gp:0,
	speed:'',
	set setspeed (s) {this._3 == 'Ручное' ? this.speed =  'Не доступно при ручном управлении' : s ? this.speed = s : this.speed = this.speed },
	speedmetr:'20 м/мин',
	set setspeedmetr (s) {this._3 == 'Ручное' ? this.speedmetr =  'Не доступно при ручном управлении' : s ? this.speedmetr = s : this.speedmetr = this.speedmetr},
	razrez:'Да',
	visota:'Стандартная',
	szo:'IP31',
	set setszo (s) {this._3 == 'Ручное' ? this.szo =  'Не доступно при ручном управлении' : s ? this.szo = s : this.szo = this.szo},
	ncuprav:'42В',
	set setncuprav (s) {this._3 == 'Ручное' ? this.ncuprav =  'Не доступно при ручном управлении' : s ? this.ncuprav = s : this.ncuprav = this.ncuprav},
	ttk:'',
	set setttk (s) {this._3 == 'Ручное' ? this.ttk =  'Не доступно при ручном управлении' : s ? this.ttk = s : this.ttk = this.ttk },
	motor:'Червячная передача ABLE (Италия) - стандартно',
	code_of_chastotnik:'8.3',
	code_of_motor:9.1,
	set setmotor (s) {this._3 == 'Ручное' ? this.motor =  'Не доступно при ручном управлении' : s ? this.motor = s : this.motor = this.motor },
	resetparam:function(){this.setspeed = this.setspeedmetr = this.setszo = this.setncuprav = this.setmotor = cran.setttk = false; },
	get getep () {return this._3 == 'Ручное' ? 'Не доступно при ручном управлении' : '3-х фазная (380 В)'},
	step:'Шаг 1 из 11',
	summa:0
};


var tal = {
	upravlenie:'',
	type:'',
	country:'',
	visota:'',
	ispolnnie:'',
	gp:'',
	img:'',
	summa:0

}