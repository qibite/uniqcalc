jQuery(document).ready(($)=>{
	$('#cgpO').click(()=>{
		showChange($('#gpO'));
		setTimeout(()=>{
			gp_insert_price();
		}, 1200);
	})
		$('#gpO > ul').on('click', 'li', function(event) {
			let countLi = $(this).index() + 1;
			let Ogp = $('#Ogp');
			switch (countLi) {
						case 1: {
		    				tal.gp=cran.gp = 500;
		    				break
		    			}
		    			case 2: {
		    				tal.gp=cran.gp = 1000;
		    				break
		    			}
		    			case 3: {
		    				tal.gp=cran.gp = 2000;
		    				break
		    			}
		    			case 4: {
		    				tal.gp=cran.gp = 3200;
		    				break
		    			}
		    			case 5: {
		    				tal.gp=cran.gp = 5000;
		    				break
		    			}
		    			case 6: {
		    				tal.gp=cran.gp = 6300;
		    				break
		    			}
		    			case 7: {
		    				tal.gp=cran.gp = 8000;
		    				break
		    			}
		    			case 8: {
		    				tal.gp=cran.gp = 10000;
		    				break
		    			}
		    			case 9: {
		    				tal.gp=cran.gp = 12500;
		    				break
		    			}
		    			case 10: {
		    				tal.gp=cran.gp = 16000;
		    				break
		    			}
		    			default: {
		    				tal.gp=cran.gp = 500;
		    				break
		    			}

			}
			$('#Ogp').text(cran.gp);
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
			if (cran._3 != 'Ручное') {
				if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
				cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
				calculate_tormoz()
			}
		});


	$('#cdpO').click(()=>{showChange($('#dpO2'))})
		$('.cOdp').click(()=>{
			if(document.getElementById('valdpO').value > 32000){
				alert('Внимание! Ширина пролёта у опорного крана не может привышать 32000 мм.');
				return
			}
			cran.paramsO.shpO = document.getElementById('valdpO').value;$('#Odp').text(document.getElementById('valdpO').value);
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
			if (cran._3 != 'Ручное') {
				if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
				cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
				calculate_tormoz()
			}
		})

	$('#cicO').click(()=>{
		showChange($('#icO2'));
		var data_cran = { action: 'calc_cran', _gp:cran.gp, _shir:cran.paramsO.shpO, _upravl:cran._3 }
			$.post( calc_ajaxurl.url, data_cran, function(response) {
				let price_crane = parseInt(response);

				if (cran.temper[0] == '-50') {
					price_crane += (price_crane*25/100);
				}
				if (cran.temper[0] == '-40') {
					price_crane += (price_crane*10/100);
				}
				if (cran.temper[1] == '+60') {
					price_crane += (price_crane*10/100);
				}
				if (cran.ncuprav == '24В') {
					price_crane += 5000;
				}
				if (cran.visota == 'Увеличенная') {
					price_crane += 70000;
				}
				if (cran.climat == 'Расположение на открытой местности') {
					price_crane += 9000;
				}

				let vzr = price_crane + (price_crane*35/100);
				let pozh = price_crane + (price_crane*10/100);
				$('#obshprm').siblings('strong').text(pars_summ(price_crane));
				$('#vzrivoshow').siblings('strong').text(pars_summ(vzr));
				$('#pozharshow').siblings('strong').text(pars_summ(pozh));
		});
	});
		$('#obshprm').click(()=>{
			cran.setszo = 'IP44';
			tal.ispolnnie = cran._2 = 'Общепромышленное';
			$('#Oic').text('Общепромышленное');
			$('#pozharselect').css('display','none');
			$('#vzrivoselect').css('display','none');
			setTimeout(()=>{hideChange()},300);
			if (cran._3 != 'Ручное') {
				if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
				cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
				calculate_tormoz()
			}
			cran.calculate_oporniy_crane();
			if (document.querySelector('#option_2 > .tal_for_search') != null) {
				alert('После смены исполнения крана следует повторно выбрать таль в разделе доп. оборудования!');
				$('div.tal_for_search').remove();
			}
			$('#Джойстик').css('display','inline-block');
			document.querySelector('#pozharselect').selectedIndex = -1;
			document.querySelector('#vzrivoshow').selectedIndex = -1;
		});
		$('#vzrivoshow').click(()=>{
			cran.setszo = 'IP65';			
			$('#vzrivoselect').css('display','block');
			$('#pozharselect').css('display','none')})
			$('#vzrivoselect').change(()=>{
				document.querySelector('#pozharselect').selectedIndex = -1;
				cran._2 = 'Взрывобезопасное класса '+document.getElementById('vzrivoselect').value;
				$('#Oic').text(cran._2);setTimeout(()=>{hideChange()},300);
				cran.calculate_oporniy_crane();
				if (cran._3 != 'Ручное') {
					if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
					cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
					calculate_tormoz()
				}
				$('#Джойстик').css('display','none');
				tal.ispolnnie = 'Взрывобезопасное';
				if ( cran._3 != 'Ручное' ) {
					if (document.querySelector('#option_2 > .tal_for_search') != null) {
						alert('После смены исполнения крана следует повторно выбрать ТАЛЬ и ПУЛЬТ в разделе доп. оборудования!');
						$('div.tal_for_search').remove();
					}
					$('.dop_parametr:has("span.pult_change")').remove();
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
			})
		$('#pozharshow').click(()=>{
			cran.setszo = 'IP54';
			$('#pozharselect').css('display','block');
			$('#vzrivoselect').css('display','none')})
			$('#pozharselect').change(()=>{
				document.querySelector('#vzrivoselect').selectedIndex = -1;
				cran._2 = 'Пожаробезопасное класса '+document.getElementById('pozharselect').value;
				$('#Oic').text(cran._2);setTimeout(()=>{hideChange()},300);
				cran.calculate_oporniy_crane();
				if (cran._3 != 'Ручное') {
					if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
					cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
					calculate_tormoz()
				}
				$('#Джойстик').css('display','inline-block');
				tal.ispolnnie = 'Пожаробезопасное';
				if (document.querySelector('#option_2 > .tal_for_search') != null) {
					alert('После смены исполнения крана следует повторно выбрать ТАЛЬ в разделе доп. оборудования!');
					$('div.tal_for_search').remove();
				}
			})

	$('#ctemperO').click(()=>{showChange($('#temperO'))})
		$('#m50_2').click(()=>{cran.temper[0] = '-50'});
		$('#m40_2').click(()=>{cran.temper[0] = '-40'});
		$('#m20_2').click(()=>{cran.temper[0] = '-20'});
		$('#p40_2').click(()=>{cran.temper[1] = '+40'});
		$('#p60_2').click(()=>{cran.temper[1] = '+60'});
		$('.savetemper').click(()=>{
			$('#Otr').text(cran.temper[0]+' до '+cran.temper[1]);
			setTimeout(()=>{hideChange()},300);
			if (tal.country == 'Болгария' && tal.type=='Цепная' && cran.temper[1] == '+60') {tal.type='Канатная';alert('Уважаемый посетитель, для данного температурного режима цепная таль будет изменена на канатную.')}
			else if (tal.country != 'Болгария' && tal.upravlenie != 'Ручное') {$('#option_2 > .tali').remove();alert('Уважаемый посетитель, для данного температурного режима требуется повторный выбор тали.')}
			cran.calculate_oporniy_crane();
		})

	$('#razmeshO').click(()=>{
		showChange($('#размещение'));
		let summ = $('#summa').text().replace(/[\s₽]/g, '');
		$('#Навес > strong.price_').text(pars_summ(summ));
		$('#Помещение > strong.price_').text(pars_summ(summ));
		if (cran.gp >= 500 && cran.gp <= 3200) {
			summ = Number(summ) + 13000;
		}
		else if (cran.gp > 3200 && cran.gp <= 10000) {
			summ = Number(summ) + 18000;
		}
		else if (cran.gp > 10000) {
			summ = Number(summ) + 23500;
		}
		$('#Улица > strong.price_').text(pars_summ(summ));
	})
		$('#Улица').click(()=>{cran.climat = 'Расположение на открытой местности';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat);cran.calculate_oporniy_crane()});
		$('#Навес').click(()=>{cran.climat = 'Расположение под навесом';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat);cran.calculate_oporniy_crane()});
		$('#Помещение').click(()=>{cran.climat = 'Расположение в помещении';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat);cran.calculate_oporniy_crane()});

	$('#type_uprO').click(()=>{showChange($('#тип_управления'))})
		$('#Ручное').click(()=>{
			cran._3 = 'Ручное';
			cran.dvs = document.querySelector('#Odvs').innerText ='Нет при ручном управлении';
			$('#Odvs').text(cran.dvs);
			cran.setszo = 'IP44';
			cran._3Type = 'Нет при ручном управлении';
			setTimeout(()=>{hideChange()},300);
			$('#Otc').text(cran._3);
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			$('#Ogp').text(cran.gp);
			cran.calculate_oporniy_crane();
			$('.dop_parametr:has("span.pult_change"),.dop_parametr:has("span.motor_reductor_change"),.dop_parametr:has("span.preobrazovatel_change"),#option_1 > .tokoprovod,#option_2 > .chastotnie_preobrazovateli,#option_2 > .sirena,#option_2 > .opticheskiy_datchik,#option_2 > .registrator,#option_2 > .ogranicitel,#option_2 > .vesi,#option_2 > .chastotniyprivodtali,#option_2 > .uzob,#option_2 > .telezhka,#option_2 > .chetirekolesa,#option_2 > .stop,#option_2 > .tormoz,#option_2 > .shit_electro,#option_2 > .vikluchateli,#option_2 > .vikluchatelioptik,#option_3 > .tok_montazh').remove();
			$('#gpO > ul li:nth-child(9),#gpO > ul li:nth-child(10)').css('display','none');
			$('#Oep').text('Нет при ручном управлении');
			cran.setncuprav = 'Нет при ручном управлении';
			$('#Ovolt').text(cran.ncuprav);
			cran.setspeedmetr = 'Ручное перемещение';
			$('#Ospeed').text(cran.speedmetr);
			cran.setszo = 'Нет при ручном управлении';
			$('#Oszo').text(cran.szo);
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			cran.resetparam();
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
						if ($('#option_2').children('.dop_parametr').length+1 >= 19) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
						$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
				}
			});
		});
		$('#Электро').click(()=>{
			if (cran._3 == 'Электро') {alert('Уже выбран кран с электро управлением!');setTimeout(()=>{hideChange()},300); return}
			cran._3 = 'Электро';
			cran.dvs = document.querySelector('#Odvs').innerText = 'Односкоростной';
			$('#Odvs').text(cran.dvs);
			$('#Otc').text(cran._3);
			$('#Oep').text('3-х фазная (380 В)');
			cran.setncuprav = '42В';
			$('#Ovolt').text(cran.ncuprav);
			cran.setspeedmetr = '20 м/мин';
			$('#Ospeed').text(cran.speedmetr);
			cran.setszo = cran._2.search(/Пожар/i) != -1 ? 'IP54' : cran._2.search(/Взрыв/i) != -1 ? 'IP65' : 'IP44';
			$('#Oszo').text(cran.szo);


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
						<span class="stoimost_parametra">Без доплаты</span><i class="id_bro">b9</i> \
						</p>';
				return new_html;
			});
			cran.calculate_oporniy_crane();
			$('#gpO > ul li:nth-child(9)').css('display','inline-block');$('#gpO > ul li:nth-child(10)').css('display','inline-block')
			setTimeout(()=>{hideChange()},300);
			cran.setmotor = 'Червячная передача NMRV (Китай) - стандартно';
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
			cran.code_of_chastotnik = 8.3;

			cran.resetparam();
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
						if ($('#option_2').children('.dop_parametr').length+1 >= 19) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
						$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
				}
			});
		});

	$('#CrazrezO').click(()=>{showChange($('#razrezO'))})
		$('#Разрезной').click(()=>{cran.razrez = 'Разрезной';setTimeout(()=>{hideChange()},300);$('#Otk').text('Да')});
		$('#Неразрезной').click(()=>{cran.razrez = 'Неразрезной';setTimeout(()=>{hideChange()},300);$('#Otk').text('Нет')});

	$('#COvc').click(()=>{showChange($('#высота_крана'))});
		$('#std').click(()=>{cran.visota = 'Стандартная';setTimeout(()=>{hideChange()},300);$('#Ovc').text(cran.visota);cran.calculate_oporniy_crane()});
		$('#middl').click(()=>{cran.visota = 'Уменьшенная';setTimeout(()=>{hideChange()},300);$('#Ovc').text(cran.visota);cran.calculate_oporniy_crane()});
		$('#largest').click(()=>{cran.visota = 'Увеличенная';setTimeout(()=>{hideChange()},300);$('#Ovc').text(cran.visota);cran.calculate_oporniy_crane()});


	$('#cOszo').click(()=>{showChange($('#степень_защиты'))});
		//$('#IP31').click(()=>{cran.setszo = 'IP31';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});
		$('#IP44').click(()=>{
			if(cran._2.search(/Пожар/i) != -1){alert('При пожаробезопасном исполнении крана этот вариант защиты невозможен!'); return};
			if(cran._2.search(/Взрыв/i) != -1){alert('При взрывобезопасном исполнении крана этот вариант защиты невозможен!'); return};
			cran.setszo = 'IP44';
			setTimeout(()=>{hideChange()},300);
			$('#Oszo').text(cran.szo);
			cran.calculate_oporniy_crane()
		});
		$('#IP54').click(()=>{if(cran._2.search(/Взрыв/i) != -1){alert('При взрывобезопасном исполнении крана этот вариант защиты невозможен!'); return};cran.setszo = 'IP54';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo);cran.calculate_oporniy_crane()});
		$('#IP65').click(()=>{cran.setszo = 'IP65';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo);cran.calculate_oporniy_crane()});

	$('#cOvolt').click(()=>{showChange($('#напряжение_цепи'))});
		$('#42В').click(()=>{cran.setncuprav = '42В';setTimeout(()=>{hideChange()},300);$('#Ovolt').text(cran.ncuprav);cran.calculate_oporniy_crane()});
		$('#24В').click(()=>{cran.setncuprav = '24В';setTimeout(()=>{hideChange()},300);$('#Ovolt').text(cran.ncuprav);cran.calculate_oporniy_crane()});

	$('#сOspeed').click(()=>{showChange($('#скорость'))});
		$('#metr20').click(()=>{
			cran.setspeedmetr = '20 м/мин';
			setTimeout(()=>{hideChange()},300);
			$('#Ospeed').text(cran.speedmetr);
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;
		});
		$('#metr35').click(()=>{
			cran.setspeedmetr = '35 м/мин';
			setTimeout(()=>{hideChange()},300);
			$('#Ospeed').text(cran.speedmetr);
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;
		});
		$('#metr10').click(()=>{
			cran.setspeedmetr = '10 м/мин';
			setTimeout(()=>{hideChange()},300);
			$('#Ospeed').text(cran.speedmetr)
			cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';
			cran.code_of_chastotnik = 8.5;
			cran.chastotnik_price(8.5);
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya(cran.code_of_chastotnik) : false;
		});
	$('#сOrelsi').click(()=>{showChange($('#рельс'))});
		$('#relsP24').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'Р24';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
		$('#relsP43').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'Р43';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
		$('#relsP50').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'Р50';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
		$('#relsP65').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'КР65';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
		$('#relsP70').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'КР70';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
		$('#relsP80').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'КР80';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
		$('#kvadrat40').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'Квадрат 40x40';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			montazh_rels(1);
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
		$('#kvadrat50').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'Квадрат 50x50';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			montazh_rels(1);
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
		$('#kvadrat60').on('click', function(event) {
			cran.relsO = document.querySelector('#Orelsi').innerText = 'Квадрат 60x60';
			$('#option_1 > .rels_crane').remove();
			$('#option_3 > .rels_montazh').remove();
			montazh_rels(1);
			setTimeout(()=>{hideChange()},300);
			cran.calculate_oporniy_crane();
		});
	function rels_change (r) {
		// body...
	}


	$('#сOdvs').on('click', function(event) {
		showChange($('#двигатель'))
	});
		$('#onespeed').on('click', function(event) {
			cran.dvs = document.querySelector('#Odvs').innerText = 'Односкоростной';
			cran.setspeed = 'Одна скорость движения';
			cran.code_of_chastotnik = 8.3;
			$('.preobrazovatel_change').parent('.dop_parametr').detach();
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.4') : false;
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
			setTimeout(()=>{hideChange()},300);
		});
		$('#double').on('click', function(event) {
			cran.dvs = document.querySelector('#Odvs').innerText = 'Двухскоростнй';
			cran.setspeed = 'Две скорости движения';
			cran.code_of_chastotnik = 8.4;
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.4') : false;
			cran.double_speed(cran.code_of_chastotnik);
			setTimeout(()=>{hideChange()},300);
		});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




	$('#cgpP').click(()=>{
			$('.кг500_resume_p > strong.price_').text('Расчитываем...');
			$('.кг1000_resume_p > strong.price_').text('Расчитываем...');
			$('.кг2000_resume_p > strong.price_').text('Расчитываем...');
			$('.кг3200_resume_p > strong.price_').text('Расчитываем...');
			$('.кг5000_resume_p > strong.price_').text('Расчитываем...');
			$('.кг6300_resume_p > strong.price_').text('Расчитываем...');
			$('.кг8000_resume_p > strong.price_').text('Расчитываем...');
			$('.кг10000_resume_p > strong.price_').text('Расчитываем...');
			$('.кг12500_resume_p > strong.price_').text('Расчитываем...');
			$('.кг16000_resume_p > strong.price_').text('Расчитываем...');
		showChange($('#gpP'));
		setTimeout(()=>{
			gp_insert_price();
		}, 1800);
	})
		$('#gpP > ul').on('click', 'li', function(event) {
		let countLi = $(this).index() + 1;
		let Ogp = $('#Pgp');
		switch (countLi) {
					case 1: {
	    				tal.gp=cran.gp = 500;
	    				break
	    			}
	    			case 2: {
	    				tal.gp=cran.gp = 1000;
	    				break
	    			}
	    			case 3: {
	    				tal.gp=cran.gp = 2000;
	    				break
	    			}
	    			case 4: {
	    				tal.gp=cran.gp = 3200;
	    				break
	    			}
	    			case 5: {
	    				tal.gp=cran.gp = 5000;
	    				break
	    			}
	    			case 6: {
	    				tal.gp=cran.gp = 6300;
	    				break
	    			}
	    			case 7: {
	    				tal.gp=cran.gp = 8000;
	    				break
	    			}
	    			case 8: {
	    				tal.gp=cran.gp = 10000;
	    				break
	    			}
	    			case 9: {
	    				tal.gp=cran.gp = 12500;
	    				break
	    			}
	    			case 10: {
	    				tal.gp=cran.gp = 16000;
	    				break
	    			}
	    			default: {
	    				tal.gp=cran.gp = 500;
	    				break
	    			}

		}
		$('#Pgp').text(cran.gp);
		setTimeout(()=>{hideChange()},300);
		cran.calculate_podvesnoy_crane();
		if (cran._3 != 'Ручное') {
			if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
			cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
			calculate_tormoz()
		}
	});


	$('#cdpP').click(()=>{showChange($('#dpP2'))})
	$('.cPdp').click(() => {
		if (document.getElementById('valdpP').value > 15000) {
			alert('Внимание! Ширина пролёта у опорного крана не может привышать 15000 мм.');
			return
		}
		cran.paramsP.shpP = document.getElementById('valdpP').value;
		if (cran.paramsP.vpP > (cran.paramsP.shpP * 40 / 100)) {
			alert('Длина консолей '+cran.paramsP.vpP+' мм. и не может превышать 40% от ширины между путями крана! Минимальное значение для данной конфигурации '+ (cran.paramsP.vpP * 2.5) +' мм.');
			return
		}
	    $('#Pdp').text(document.getElementById('valdpP').value);
		    setTimeout(() => { hideChange() }, 300);
		    cran.calculate_podvesnoy_crane();
		    if (cran._3 != 'Ручное') {
				if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
				cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
				calculate_tormoz()
			}
		})


	$('#cdkP').click(() => { showChange($('#dkP2')) })
	$('.cPdk').click(() => {
		cran.paramsP.vpP = document.getElementById('valdpPk').value;
		if (cran.paramsP.vpP > (cran.paramsP.shpP * 40 / 100)) {
			alert('Длина консолей '+cran.paramsP.vpP+' мм. и не может превышать 40% от ширины между путями крана! Максимальное значение для данной конфигурации '+ (cran.paramsP.shpP * 40 / 100) +' мм.');
			return
		}
	    $('#Pdk').text(document.getElementById('valdpPk').value);
	    setTimeout(() => { hideChange() }, 300);
	    cran.calculate_podvesnoy_crane();
	})


	$('#cicP').click(()=>{
		showChange($('#icP2'));
		var data_cran_p = { action: 'calc_cran_p', _gp:cran.gp, _shir:cran.paramsP.shpP, _upravl:cran._3 }
			$.post( calc_ajaxurl.url, data_cran_p, function(response) {
				let price_crane = parseInt(response);

				if (cran.temper[0] == '-50') {
					price_crane += (price_crane*25/100);
				}
				if (cran.temper[0] == '-40') {
					price_crane += (price_crane*10/100);
				}
				if (cran.temper[1] == '+60') {
					price_crane += (price_crane*10/100);
				}
				if (cran.ncuprav == '24В') {
					price_crane += 5000;
				}
				if (cran.visota == 'Увеличенная') {
					price_crane += 70000;
				}
				if (cran.climat == 'Расположение на открытой местности') {
					price_crane += 9000;
				}

				let vzr = price_crane + (price_crane*35/100);
				let pozh = price_crane + (price_crane*10/100);
				$('#obshprm2').siblings('strong').text(pars_summ(price_crane));
				$('#vzrivoshow2').siblings('strong').text(pars_summ(vzr));
				$('#pozharshow2').siblings('strong').text(pars_summ(pozh));
			})
	})
		$('#obshprm2').click(()=>{cran.setszo = 'IP44';cran._2 = 'Общепромышленное';$('#Pic').text('Общепромышленное');$('#pozharselect2').css('display','none');$('#vzrivoselect2').css('display','none');setTimeout(()=>{hideChange()},300);
			cran.calculate_podvesnoy_crane();
			if (cran._3 != 'Ручное') {
				if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
				cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
				calculate_tormoz()
			}
		})
		$('#vzrivoshow2').click(()=>{$('#vzrivoselect2').css('display','block');$('#pozharselect2').css('display','none')})
			$('#vzrivoselect2').change(()=>{
				cran.setszo = 'IP65';
				cran._2 = 'Взрывобезопасное класса '+document.getElementById('vzrivoselect2').value;
				$('#Pic').text('Взрывобезопасное класса '+document.getElementById('vzrivoselect2').value);
				setTimeout(()=>{hideChange()},300);
				cran.calculate_podvesnoy_crane();
				if (cran._3 != 'Ручное') {
					if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
					cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
					calculate_tormoz()
				}
		if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {$('.return_motor_default').parent().detach();cran.motor_price(cran.code_of_motor)}
				$('#Джойстик').css('display','none');
				tal.ispolnnie = 'Взрывобезопасное';
				if ( cran._3 != 'Ручное' ) {
					if (document.querySelector('#option_2 > .tal_for_search') != null) {
						alert('После смены исполнения крана следует повторно выбрать ТАЛЬ и ПУЛЬТ в разделе доп. оборудования!');
						$('div.tal_for_search').remove();
					}
					$('.dop_parametr:has("span.pult_change")').remove();
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
			})
		$('#pozharshow2').click(()=>{$('#pozharselect2').css('display','block');$('#vzrivoselect2').css('display','none')})
			$('#pozharselect2').change(()=>{cran.setszo = 'IP54';cran._2 = 'Пожаробезопасное класса '+document.getElementById('pozharselect2').value;$('#Pic').text('Пожаробезопасное класса '+document.getElementById('pozharselect2').value);setTimeout(()=>{hideChange()},300);cran.calculate_podvesnoy_crane();
				if (cran._3 != 'Ручное') {
					if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {cran.motor_price(cran.code_of_motor)}
					cran.code_of_chastotnik == '8.4' ? cran.double_speed(cran.code_of_chastotnik) : cran.chastotnik_price(cran.code_of_chastotnik);
					calculate_tormoz()
				}
		})

	$('#ctemperP').click(()=>{showChange($('#temperP'))})
		$('#m50_2P').click(()=>{cran.temper[0] = '-50'});
		$('#m40_2P').click(()=>{cran.temper[0] = '-40'});
		$('#m20_2P').click(()=>{cran.temper[0] = '-20'});
		$('#p40_2P').click(()=>{cran.temper[1] = '+40'});
		$('#p60_2P').click(()=>{cran.temper[1] = '+60'});
		$('.savetemperP').click(()=>{
			$('#Ptr').text(cran.temper[0]+' до '+cran.temper[1]);
			setTimeout(()=>{hideChange()},300);
			if (tal.country == 'Болгария' && tal.type=='Цепная' && cran.temper[1] == '+60') {tal.type='Канатная';alert('Уважаемый посетитель, для данного температурного режима цепная таль будет изменена на канатную.')}
			else if (tal.country != 'Болгария' && tal.upravlenie != 'Ручное') {$('#option_2 > .tali').remove();alert('Уважаемый посетитель, для данного температурного режима требуется повторный выбор тали.')}
			cran.calculate_podvesnoy_crane();
		})

	$('#razmeshP').click(()=>{
		showChange($('#размещениеP'));
		let summ = $('#summa_p').text().replace(/[\s₽]/g, '');
		$('#НавесP > strong.price_').text(pars_summ(summ));
		$('#ПомещениеP > strong.price_').text(pars_summ(summ));
		if (cran.gp >= 500 && cran.gp <= 3200) {
			summ = Number(summ) + 13000;
		}
		else if (cran.gp > 3200 && cran.gp <= 10000) {
			summ = Number(summ) + 18000;
		}
		else if (cran.gp > 10000) {
			summ = Number(summ) + 23500;
		}
		$('#УлицаP > strong.price_').text(pars_summ(summ));
	})
		$('#УлицаP').click(()=>{cran.climat = 'Расположение на открытой местности';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat);cran.calculate_podvesnoy_crane()});
		$('#НавесP').click(()=>{cran.climat = 'Расположение под навесом';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat);cran.calculate_podvesnoy_crane()});
		$('#ПомещениеP').click(()=>{cran.climat = 'Расположение в помещении';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat);cran.calculate_podvesnoy_crane()});

	$('#type_uprP').click(()=>{showChange($('#тип_управленияP'))})
		$('#РучноеP').click(()=>{
			cran._3 = 'Ручное';
			cran.dvs = document.querySelector('#Pdvs').innerText = 'Нет при ручном управлении';
			$('#Odvs').text(cran.dvs);
			cran.setszo = 'IP44';
			cran._3Type = 'Нет при ручном управлении';
			setTimeout(()=>{hideChange()},300);
			$('#Ptc').text(cran._3);
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			$('#Pgp').text(cran.gp);
			cran.calculate_podvesnoy_crane();
			$('.dop_parametr:has("span.pult_change"),.dop_parametr:has("span.motor_reductor_change"),.dop_parametr:has("span.preobrazovatel_change"),#option_1 > .tokoprovod,#option_2 > .chastotnie_preobrazovateli,#option_2 > .sirena,#option_2 > .opticheskiy_datchik,#option_2 > .registrator,#option_2 > .ogranicitel,#option_2 > .vesi,#option_2 > .chastotniyprivodtali,#option_2 > .uzob,#option_2 > .telezhka,#option_2 > .chetirekolesa,#option_2 > .stop,#option_2 > .tormoz,#option_2 > .shit_electro,#option_2 > .vikluchateli,#option_2 > .vikluchatelioptik,#option_3 > .tok_montazh').remove();
			$('#gpP > ul li:nth-child(9),#gpP > ul li:nth-child(10)').css('display','none');
			$('#Pep').text('Нет при ручном управлении');
			cran.setncuprav = 'Нет при ручном управлении';
			$('#Pvolt').text(cran.ncuprav);
			cran.setspeedmetr = 'Ручное перемещение';
			$('#Pspeed').text(cran.speedmetr);
			cran.setszo = 'Нет при ручном управлении';
			$('#Pszo').text(cran.szo);
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			cran.resetparam();
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
						if ($('#option_2').children('.dop_parametr').length+1 >= 19) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
						$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
				}
			});
		});
		$('#ЭлектроP').click(()=>{
			if (cran._3 == 'Электро') {alert('Уже выбран кран с электро управлением!');setTimeout(()=>{hideChange()},300); return}
			cran._3 = 'Электро';
			cran.dvs = document.querySelector('#Pdvs').innerText = 'Односкоростной';
			$('#Odvs').text(cran.dvs);
			$('#Ptc').text(cran._3);
			$('#Pep').text('3-х фазная (380 В)');
			cran.setncuprav = '42В';
			$('#Pvolt').text(cran.ncuprav);
			cran.setspeedmetr = '20 м/мин';
			$('#Pspeed').text(cran.speedmetr);
			cran.setszo =  cran._2.search(/Пожар/i) != -1 ? 'IP54' : cran._2.search(/Взрыв/i) != -1 ? 'IP65' : 'IP44';
			$('#Pszo').text(cran.szo);


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
						<span class="stoimost_parametra">Без доплаты</span><i class="id_bro">b9</i> \
						</p>';
				return new_html;
			});
			cran.calculate_podvesnoy_crane();
			$('#gpP > ul li:nth-child(9)').css('display','inline-block');$('#gpP > ul li:nth-child(10)').css('display','inline-block')
			setTimeout(()=>{hideChange()},300);
			cran.setmotor = 'Червячная передача NMRV (Китай) - стандартно';
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
			cran.code_of_chastotnik = 8.3;

			cran.resetparam();
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
						if ($('#option_2').children('.dop_parametr').length+1 >= 19) {
							$('.add_dop_2').parent().css('display', 'none');
						}
						else {
						$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
				}
			});
		});

	$('#CrazrezP').click(()=>{showChange($('#razrezP'))})
		$('#РазрезнойP').click(()=>{cran.razrez = 'Разрезной';setTimeout(()=>{hideChange()},300);$('#Ptk').text('Да')});
		$('#НеразрезнойP').click(()=>{cran.razrez = 'Неразрезной';setTimeout(()=>{hideChange()},300);$('#Ptk').text('Нет')});

	$('#CPvc').click(()=>{showChange($('#высота_кранаP'))});
		$('#stdP').click(()=>{cran.visota = 'Стандартная';setTimeout(()=>{hideChange()},300);$('#Pvc').text(cran.visota);cran.calculate_podvesnoy_crane()});
		$('#middlP').click(()=>{cran.visota = 'Уменьшенная';setTimeout(()=>{hideChange()},300);$('#Pvc').text(cran.visota);cran.calculate_podvesnoy_crane()});
		$('#largestP').click(()=>{cran.visota = 'Увеличенная';setTimeout(()=>{hideChange()},300);$('#Pvc').text(cran.visota);cran.calculate_podvesnoy_crane()});


	$('#cPszo').click(()=>{showChange($('#степень_защитыP'))});
		//$('#IP31P').click(()=>{cran.setszo = 'IP31';setTimeout(()=>{hideChange()},300);$('#Pszo').text(cran.szo)});
		$('#IP44P').click(()=>{
			if(cran._2.search(/Пожар/i) != -1){alert('При пожаробезопасном исполнении крана этот вариант защиты невозможен!'); return};
			if(cran._2.search(/Взрыв/i) != -1){alert('При взрывобезопасном исполнении крана этот вариант защиты невозможен!'); return};
			cran.setszo = 'IP44';
			setTimeout(()=>{hideChange()},300);
			$('#Pszo').text(cran.szo)
			;cran.calculate_podvesnoy_crane()
		});
		$('#IP54P').click(()=>{if(cran._2.search(/Взрыв/i) != -1){alert('При взрывобезопасном исполнении крана этот вариант защиты невозможен!'); return};cran.setszo = 'IP54';setTimeout(()=>{hideChange()},300);$('#Pszo').text(cran.szo);cran.calculate_podvesnoy_crane()});
		$('#IP65P').click(()=>{cran.setszo = 'IP65';setTimeout(()=>{hideChange()},300);$('#Pszo').text(cran.szo);cran.calculate_podvesnoy_crane()});


	$('#cPvolt').click(()=>{showChange($('#напряжение_цепиP'))});
		$('#42ВP').click(()=>{cran.setncuprav = '42В';setTimeout(()=>{hideChange()},300);$('#Pvolt').text(cran.ncuprav);cran.calculate_podvesnoy_crane()});
		$('#24ВP').click(()=>{cran.setncuprav = '24В';setTimeout(()=>{hideChange()},300);$('#Pvolt').text(cran.ncuprav);cran.calculate_podvesnoy_crane()});


	$('#сPspeed').click(()=>{showChange($('#скоростьP'))});
		$('#metr20P').click(()=>{
			cran.setspeedmetr = '20 м/мин';
			setTimeout(()=>{hideChange()},300);
			$('#Pspeed').text(cran.speedmetr);
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;
			cran.calculate_podvesnoy_crane()
		});
		$('#metr35P').click(()=>{
			cran.setspeedmetr = '35 м/мин';
			setTimeout(()=>{hideChange()},300);
			$('#Pspeed').text(cran.speedmetr);
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;
			cran.calculate_podvesnoy_crane()
		});
		$('#metr10P').click(()=>{
			cran.setspeedmetr = '10 м/мин';
			setTimeout(()=>{hideChange()},300);
			$('#Pspeed').text(cran.speedmetr)
			cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';
			cran.code_of_chastotnik = 8.5;
			cran.chastotnik_price(8.5);
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.2') : false;
			cran.calculate_podvesnoy_crane()
		});

	$('#сPrelsi').click(()=>{showChange($('#рельсP'))});
		$('#rbalka24').on('click', function(event) {
			cran.relsP = 'Балка 24М';
			//cran.add_rels('5.5');
			$('#option_1 > .rels_crane').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_podvesnoy_crane();
		});
		$('#rbalka30').on('click', function(event) {
			cran.relsP = 'Балка 30М';
			//cran.add_rels('5.6');
			$('#option_1 > .rels_crane').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_podvesnoy_crane();
		});
		$('#rbalka36').on('click', function(event) {
			cran.relsP = 'Балка 36М';
			//cran.add_rels('5.7');
			$('#option_1 > .rels_crane').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_podvesnoy_crane();
		});
		$('#rbalka45').on('click', function(event) {
			cran.relsP = 'Балка 45М';
			//cran.add_rels('5.8');
			$('#option_1 > .rels_crane').remove();
			setTimeout(()=>{hideChange()},300);
			cran.calculate_podvesnoy_crane();
		});

	$('#сPdvs').on('click', function(event) {
		showChange($('#двигательP'))
	});
		$('#onespeedP').on('click', function(event) {
			cran.dvs = document.querySelector('#Pdvs').innerText = 'Односкоростной';
			cran.setspeed = 'Одна скорость движения';
			cran.code_of_chastotnik = 8.3;
			$('.preobrazovatel_change').parent('.dop_parametr').detach();
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.4') : false;
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
			setTimeout(()=>{hideChange()},300);
		});
		$('#doubleP').on('click', function(event) {
			cran.dvs = document.querySelector('#Pdvs').innerText = 'Двухскоростнй';
			cran.setspeed = 'Две скорости движения';
			cran.code_of_chastotnik = 8.4;
			cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? cran.price_crane_electro_upravleniya('8.4') : false;
			cran.double_speed(cran.code_of_chastotnik);
			setTimeout(()=>{hideChange()},300);
		});










/*//////////////////////////////////////////////////////////////////////////////**********************************************/////////////////////////////////////////////////////////////////////////////////////////////////////*/


	$('.add_dop_1 i').click(()=>{
		if (cran._3 != 'Ручное')
		{
			postavka_tokopodvoda();
			document.getElementById('a3').style.display = 'inline-block';
		} else {
			document.getElementById('a3').style.display = 'none';
		}
		delete_doble('#option_1', $('#first_opt'));
		showOptions($('#first_opt'));
		postavka_rels();
		if ($('#option_1').children('.tokoprovod').length>0) {
			$('#first_opt .cat[name$="tokoprovod"]').css('display', 'none');
		}
	});
	$('#first_opt').on('click', 'li:not(".cat"), .cat>div.change_li', function (e) {
		if (e.srcElement.classList.contains('dopinf')) {return}
		var that = $(this);
		//that.firstChild.nextSibling.nextSibling.ubbind();
		$('#option_1 .dop_parametr:last-child').before(()=>{
			let new_html = '<div class="dop_parametr '+ that.attr('name') +'"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
								<h4>'+ that.children().children().children('b.hz4').text() +'</h4> \
								<p><span class="opisanie_parametra">'+ that.children().children().children('.opisanie_parametra').html() +'</span><br> \
								<span class="stoimost_parametra">'+ that.children('.hiddened').text() +'</span><i class="id_bro">'+that.attr('id')+'</i></p>';
			return new_html;
		});
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '15%');
			$('.cat').siblings('li, div').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
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
			calc_all_tokopodvod_i_puti();
		},200);


	});

	$('.add_dop_2 i').click(()=>{
		document.getElementById('b17').style.display = 'inline-block';
		$.post( calc_ajaxurl.url, { action: 'tal_insert', _gp:cran.gp, _upravlenie:tal.upravlenie, _visota:tal.visota, _ispolnenie:tal.ispolnnie, _cranisp:cran._2, temper_minus:cran.temper[0], temper_plus:cran.temper[1] }, function(response){tal.priceAJAX = JSON.parse(response)});
		if (cran._3 != 'Ручное')
		{
			cl_chastotniki_crana(); // Частотный преобразователь
			calculate_tormoz(); // Тормоз на передвижение крана
			calculate_shit();  // Установить цену для щита
			calculate_stop(); // Установить цену для Аварийный стоп на передвижение
			calculate_chstotniyPrivodTali(); // Стоимость частотных приводов тали
			calculate_ogranichitel() // Стоимость ограничителей грузоподъемности
			calculate_vesi(); //VESI
			document.getElementById('b8_2').style.display = 'inline-block';
			document.getElementById('b10').style.display = 'inline-block';
			document.getElementById('b10opt').style.display = 'inline-block';
			document.getElementById('b11').style.display = 'inline-block';
			document.getElementById('b13').style.display = 'inline-block';
			document.getElementById('b12_1').style.display = 'inline-block';
			document.getElementById('b12_2').style.display = 'inline-block';
			document.getElementById('b14').style.display = 'inline-block';
			document.getElementById('b15').style.display = 'inline-block';
			document.getElementById('b16').style.display = 'inline-block';
			if (cran._1 == 'Подвесной') {
				document.getElementById('b78').style.display = 'inline-block';
				document.getElementById('b79').style.display = cran.gp < 10000 ? 'inline-block':'none';
			}
			else {
				document.getElementById('b78').style.display = 'none';
				document.getElementById('b79').style.display = 'none';
			}
			document.getElementById('b21').style.display = 'inline-block';
			cran.gp > 6300 ? document.getElementById('b21_1').style.display = 'none':false;
			document.getElementById('b22').style.display = 'inline-block';
			document.getElementById('b28').style.display = 'inline-block';

		} else {
			document.getElementById('b8_2').style.display = 'none';
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
		delete_doble('#option_2', $('#second_opt'));
		showOptions($('#second_opt'));
		calculate_pokraska(); // Стоимость покраски
		if ($('#option_2').children('.vikluchateli').length>0) {
			$('#second_opt .cat[name$="vikluchateli"]').css('display', 'none');
		}
		if ($('#option_2').children('.chastotnie_preobrazovateli').length>0) {
			$('#second_opt .cat[name$="chastotnie_preobrazovateli"]').css('display', 'none');
		}
		if ($('#option_2').children('.vikluchatelioptik').length>0) {
			$('#second_opt .cat[name$="vikluchatelioptik"]').css('display', 'none');
		}
		if ($('#option_2').children('.registrator').length>0) {
			$('#second_opt .cat[name$="registrator"]').css('display', 'none');
		}
		if ($('#option_2').children('.chastotniyprivodtali').length>0) {
			$('#second_opt .cat[name$="chastotniyprivodtali"]').css('display', 'none');
		}
		if ($('#option_2').children('.tali').length>0) {
			$('#second_opt .cat[name$="tali"]').css('display', 'none');
		}
		if ($('#option_2').children('.ogranicitel').length>0) {
			$('#second_opt .cat[name$="ogranicitel"]').css('display', 'none');
		}
		if ($('#option_2').children('.vesi').length>0) {
			$('#second_opt .cat[name$="vesi"]').css('display', 'none');
		}
	});
	$('#second_opt').on('click', 'li:not(".cat"), .cat>div.change_li', function (e) {
		if (e.srcElement.classList.contains('dopinf')) {return}
		var that = $(this);
		$(this).css('display', 'none');
		$('#option_2 .dop_parametr:last-child').before(()=>{
			var new_html = '<div class="dop_parametr '+ that.attr('name') +'"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
								<h4>'+ that.children().children().children('b.hz4').text() +'</h4> \
								<p><span class="opisanie_parametra">'+ that.children().children().children('.opisanie_parametra').html() +'</span><br> \
								<span class="stoimost_parametra">'+ that.children('.hiddened').text() +'</span><i class="id_bro">'+that.attr('id')+'</i></p>';
			return new_html;
		});
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '15%');
			$('.cat').siblings('li, div').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
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
		calc_all_dop();
		},200);


	});

	$('.add_dop_3 i').click(()=>{
		//montazh_cranov(); // Вычисление цены монтажа крана
		//shef_montazh_cranov(); // ШЕФ монтаж крана
		price_from_distance();
		montazh_rels(0); // Монтаж рельс
		montazh_tokopodvoda(); // Монтаж токоподвода
		delete_doble('#option_3', $('#third_opt'));
		showOptions($('#third_opt'));
		if ($('#option_3').children('.montazh').length > 0) {
			document.getElementById('c2').style.display = 'none';
		}
		if ($('#option_3').children('.shef_montazh').length > 0) {
			document.getElementById('c1').style.display = 'none';
		}
	});
	$('#third_opt').on('click', '.change_li', function (e) {
		if (e.srcElement.classList.contains('dopinf')) {return}
		var that = $(this);
		$('#option_3 .dop_parametr:last-child').before(()=>{
			let new_html = '<div class="dop_parametr '+ that.attr('name') +'"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
								<h4>'+ that.children().children().children('b.hz4').text() +'</h4> \
								<p><span class="opisanie_parametra">'+ that.children().children().children('.opisanie_parametra').html() +'</span><br> \
								<span class="stoimost_parametra">'+ that.children('.hiddened').text() +'</span><i class="id_bro">'+that.attr('id')+'</i></p>';
			return new_html;
		});
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '15%');
			$('.cat').siblings('li, div').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
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
			calc_all_uslugi();
			$('.ul_change > .change_li').css('display', 'inline-block');
		},200);


	});
/************************************************************************************************************************************************************************************************************************************/
//Удалить опцию или изменить
$('#first_opt, #second_opt, #third_opt').on('click', '.cat', function(event) {
	$(this).siblings('li, div').css('display', 'none');
	$(this).css('width', '100%');
	if ($(this).hasClass('tali_dop')) {
		if (cran.gp > 10000 && cran._2.search(/Взрыв/i) != 0) {
			$('#conteinert_talei_1').css('display', 'block');
			$('.e_tal').css('display', 'inline-block');
			if (tal.gp > 12500 && tal.visota > 15000) {
				$('.tal_e_RUS').css('display', 'none');
			}
			tal.upravlenie = 'Электро';
		}
		else if (cran._2.search(/Взрыв/i) == 0 && tal.gp <= 10000)
		{
			$(this).children('.tal_r').css('display', 'inline-block');
			$(this).children('.tal_e').css('display', 'inline-block');
		}
		else {
			$(this).children('.tal_r').css('display', 'inline-block');
			$(this).children('.tal_e').css('display', 'inline-block');
		}
	}
	else {
		$(this).children('div').css('display', 'inline-block');
	}
	$('#revers').css('display', 'block');
	delete_doble('#option_1', $('#first_opt'));
	delete_doble('#option_2', $('#second_opt'));
	delete_doble('#option_3', $('#third_opt'));
});

$('#revers').on('click', function() {
	$('.cat').css('width', '15%');
	$('.cat').siblings('li, div').css('display', 'inline-block');
	$('.cat').children('div').css('display', 'none');
	if ($('#option_1').children('div.rels_crane').length == 0) {$('#c4').css('display', 'none')}
	if ($('#option_1').children('div.tokoprovod').length == 0) {$('#c5').css('display', 'none')}
	$('#revers').css('display', 'none');


	if (cran._3 == 'Ручное')
		{
			document.getElementById('a3').style.display = 'none';
			document.getElementById('b8_2').style.display = 'none';
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
			document.getElementById('c5').style.display = 'none';
		}
	delete_doble('#option_1', $('#first_opt'));
	delete_doble('#option_2', $('#second_opt'));
	delete_doble('#option_3', $('#third_opt'));
	if ($('#option_2').children('.vikluchateli').length>0) {
		$('#second_opt .cat[name$="vikluchateli"]').css('display', 'none');
	}
	if ($('#option_2').children('.chastotnie_preobrazovateli').length>0) {
		$('#second_opt .cat[name$="chastotnie_preobrazovateli"]').css('display', 'none');
	}
	if ($('#option_2').children('.vikluchatelioptik').length>0) {
		$('#second_opt .cat[name$="vikluchatelioptik"]').css('display', 'none');
	}
	if ($('#option_2').children('.registrator').length>0) {
		$('#second_opt .cat[name$="registrator"]').css('display', 'none');
	}
	if ($('#option_2').children('.chastotniyprivodtali').length>0) {
		$('#second_opt .cat[name$="chastotniyprivodtali"]').css('display', 'none');
	}
	if ($('#option_2').children('.ogranicitel').length>0) {
		$('#second_opt .cat[name$="ogranicitel"]').css('display', 'none');
	}
	if ($('#option_2').children('.vesi').length>0) {
		$('#second_opt .cat[name$="vesi"]').css('display', 'none');
	}
	cran._1 == 'Подвесной' && cran._3 != 'Ручное' && $('#option_2').children('.telezhka').length == 0 ? document.getElementById('b78').style.display = 'inline-block': document.getElementById('b78').style.display = 'none';
	cran._1 == 'Подвесной' && cran._3 != 'Ручное' && $('#option_2').children('.chetirekolesa').length == 0 ? document.getElementById('b79').style.display = cran.gp < 10000 ? 'inline-block':'none':document.getElementById('b79').style.display = 'none';
})
/**
*
*
*
*					ФУНКЦИЯ СКРЫТИЯ ЭЛЕМЕНТОВ ИЗ БЛОКА ВЫБОРА ОПЦИЙ, ТОКОПОДВОДА И Т.П.
*
*
*
*/

function delete_doble (context /* string: #option_1, #option_2, #option_3 */, container /* [$(#first_opt), $(#second_opt), $(#third_opt)]*/) {
	let hidden_elements;
	$(context+' > .dop_parametr:not(:last-child) > p > i.id_bro').each(function(index, el) {
		hidden_elements  = $(this).text();
		container.children().children('#'+hidden_elements).css('display', 'none');
		container.children().children('.cat').children('#'+hidden_elements).css('display', 'none');
	});
}
/**************************************************************************************************************************************/
function showChange (showMenu) {
	$('.modal_view').removeClass('mmm modal_view_hide').addClass('modal_view_show');
	showMenu.removeClass('modal_change_hide').addClass('modal_change_show');
}
function showOptions (showOption) {
	$('.hidden_options').removeClass('zzz hidden_options_hide').addClass('hidden_options_show');
	showOption.removeClass('modal_change_hide').addClass('modal_change_show');
}
function hideChange () {
	$('.modal_view').removeClass('modal_view_show').addClass('mmm modal_view_hide');
	$('.modal_view div.modal_change_show').removeClass('modal_change_show').addClass('modal_change_hide');
}
function hideOptions () {
	$('.hidden_options').removeClass('hidden_options_show').addClass('zzz hidden_options_hide');
	$('.hidden_options div.modal_change_show').removeClass('modal_change_show').addClass('modal_change_hide');
}

function hideThisChange (this_Change) {
	this_Change.removeClass('modal_change_show').addClass('modal_change_hide');
}


	$('#close').click(()=>{hideChange()});
	$('#close2').click(()=>{
		//document.getElementById('savecity').removeEventListener('click', savci);
		try {
			prompt_city.remove();
		}
		catch (e) {
			return;
		}
		finally {
			hideOptions();
			$('.cat').css('width', '15%');
			$('.ul_change > .change_li').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			if (cran._3 == 'Ручное')
			{
				document.getElementById('b8_2').style.display = 'none';
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
	});
	$('html, body').keyup(function(e) {
		if (e.keyCode == 27 && $('.modal_view_show')) {hideChange()}
		if (e.keyCode == 27 && $('.hidden_options_show')) {
			try {
			prompt_city.remove();
			}
			catch (e) {
				return;
			}
			finally {
				hideOptions();
				$('.cat').css('width', '15%');
				$('.ul_change > .change_li').css('display', 'inline-block');
				$('.cat').children('div').css('display', 'none');
				if (cran._3 == 'Ручное')
				{
					document.getElementById('b8_2').style.display = 'none';
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
		}
	});
/*******************************************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																																	Функции для раздела
*
*																															ОБОРУДОВАНИЕ И ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ
*
*
*
*
*
*
*******************************************************************************************************************************************************************************************************************************************************************/
	function cl_chastotniki_crana () {
		$.post( calc_ajaxurl.url, { action: 'chastotniki_insert', _gp:cran.gp, _vbi:cran._2.search(/Взрыв/i) != -1?1:0 }, function(response)
		{
			let chst_resp = JSON.parse(response);
			$('#b8_2_5 > .hiddened').text(pars_summ(chst_resp._85));
			$('#b8_2_6 > .hiddened').text(pars_summ(chst_resp._86));
			$('#b8_2_7 > .hiddened').text(pars_summ(chst_resp._87));
			console.log(pars_summ(chst_resp._85))
			if (cran._2.search(/Взрыв/i) != -1 && cran.gp != 500) {
				$('#b8_2_5 .opisanie_parametra').text('ESQ (Китай) ВБИ')
				$('#b8_2_6 .opisanie_parametra').text('Hyundai (Корея) ВБИ')
				$('#b8_2_7 .opisanie_parametra').text('Danfoss (Германия) ВБИ')
			}
			else {
				$('#b8_2_5 .opisanie_parametra').text('ESQ (Китай)')
				$('#b8_2_6 .opisanie_parametra').text('Hyundai (Корея)')
				$('#b8_2_7 .opisanie_parametra').text('Danfoss (Германия)')
			}
		});
	}

	function calculate_tal (argument) {
			//////////////
				var data_tal = { action: 'calc_tal', _upravlenie:tal.upravlenie, _type:tal.type, _country:tal.country, _visota:tal.visota, _ispolnenie:tal.ispolnnie, _gp:tal.gp }
				$.post( calc_ajaxurl.url, data_tal, function(response) {
					tal.summa = response;
					$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr tal_for_search"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
					'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ tal.img +'" alt="" style="width:230px"><h4>Таль '
					+ tal.country +'</h4> \
					<p> \
						<span class="stoimost_parametra">'+ pars_summ(tal.summa) +' ₽</span> \
					</p>');
				});
			//////////////
	}

	function calculate_shit () {
			//////////////
				var data_shit = { action: 'calc_shit', _gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP}
				$.post( calc_ajaxurl.url, data_shit, function(response) {
					$('#b11 > .hiddened').text(pars_summ(response));
				});
			//////////////
	}

	function calculate_stop () {
		if (cran._3 != 'Ручное') {
			document.getElementById('b13').style.display = 'inline-block';
			let stop =
				cran._3Type.search(/Подвесной/) != -1 ? {id:32} :
					cran._3Type.search(/Радиоуправление/) != -1 ? {id:33} : $('#b13 > .hiddened').css('display', 'none');;
				/////////////
				var data_stop = { action: 'calc_stop', _stop_id:stop.id }
					$.post( calc_ajaxurl.url, data_stop, function(response) {
						$('#b13 .hiddened').text(pars_summ(response));
					});
				/////////////
		}
	}

	function calculate_tormoz () {
		if (cran._3 != 'Ручное') {
				/////////////
				var data_tormoz = { action: 'calc_tormoz',  _motor_code:cran.code_of_motor,  _motor_gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
				$.post( calc_ajaxurl.url, data_tormoz, function(response) {
					$('#b14 > .hiddened').text(pars_summ(response));
					$('.tormoz .stoimost_parametra').text(pars_summ(response));
				});
				/////////////
		}
	}

	function calculate_pokraska () {
			if (cran._1 == 'Опорный')
			{
			var pokraska =	cran.paramsO.shpO < 12000 ? {id:37} :
								cran.paramsO.shpO > 12000 && cran.paramsO.shpO < 22000? {id:38} :
									cran.paramsO.shpO > 22000 ? {id:39} : false;
			}
			if (cran._1 == 'Подвесной')
			{
			var pokraska =	cran.paramsP.shpP < 12000 ? {id:37} :
								cran.paramsP.shpP > 12000 && cran.paramsP.shpP < 22000? {id:38} :
									cran.paramsP.shpP > 22000 ? {id:39} : false;
			}

			/////////////
			var data_pokraska = { action: 'calc_pokraska', _pokraska_id:pokraska.id }
				$.post( calc_ajaxurl.url, data_pokraska, function(response) {
					$('#b18 > .hiddened').text(pars_summ(response));
				});
			/////////////
	}

	function calculate_chstotniyPrivodTali () {
			/////////////
			var data_chpt = { action: 'calc_chstotniy_privod_tali', _gp:cran.gp }
				$.post( calc_ajaxurl.url, data_chpt, function(response) {
					let chpt = JSON.parse(response);
					$('#b28_1 > .hiddened').text(pars_summ(chpt.ESQ));
					$('#b28_2 > .hiddened').text(pars_summ(chpt.HYUNDAI));
					$('#b28_3 > .hiddened').text(pars_summ(chpt.DANFOSS));
				});
			/////////////
	}

	function calculate_ogranichitel () {
			/////////////
			var data_chpt = { action: 'calc_ogranichitel', _gp:cran.gp }
				$.post( calc_ajaxurl.url, data_chpt, function(response) {
					let ogr = JSON.parse(response);
					$('#b21_1 > .hiddened').text(pars_summ(ogr.ctifrovoy));
					$('#b21_2 > .hiddened').text(pars_summ(ogr.kanatniy));
				});
			/////////////
	}

	function calculate_vesi () {
			/////////////
			var data_chpt = { action: 'calculate_vesi', _gp:cran.gp }
				$.post( calc_ajaxurl.url, data_chpt, function(response) {
					let vesi = JSON.parse(response);
					$('#b22_1 > .hiddened').text(pars_summ(vesi.russia));
					$('#b22_2 > .hiddened').text(pars_summ(vesi.korea));
				});
			/////////////
	}
/*******************************************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																																	Функции для раздела
*
*																																	ПУТИ И ТОКОПОДВОД
*
*
*
*
*
*
*******************************************************************************************************************************************************************************************************************************************************************/


function postavka_rels () {
	var rels =	{ gp:cran.gp, upravlenie:cran._3, shirinamp:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP }
	/////////////
	var data_rels = { action: 'postavka_rels', _justprice:0, _rels_gp:rels.gp, _rels_dlinna:rels.shirinamp, _rels_upravlenie:rels.upravlenie, rels_url_img:location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/', type_cran:cran._1, _dop:1 }
	$.post( calc_ajaxurl.url, data_rels, function(response)
	{
		$('#a2').html(response);
	});
	/////////////
}

function postavka_tokopodvoda () {
	let m = cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP;
	$('#tokoprovod1 .opisanie_parametra').html('Без учета монтажа<br>кол-во материала - '+ m/1000 +' м.');
	$('#tokoprovod2 .opisanie_parametra').html('Без учета монтажа<br>кол-во материала - '+ m/1000 +' м.');
	$('#tokoprovod3 .opisanie_parametra').html('Без учета монтажа<br>кол-во материала - '+ m/1000 +' м.');
	$('#tokoprovod4 .opisanie_parametra').html('Без учета монтажа<br>кол-во материала - '+ m/1000 +' м.');
	$('#tokoprovod5 .opisanie_parametra').html('Без учета монтажа<br>кол-во материала - '+ m/1000 +' м.');
	/////////////
	var data_all_tok = { action: 'tokopodvod_all',  _dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP  };
		$.post( calc_ajaxurl.url, data_all_tok, function (response) {
			let result = JSON.parse(response);
			$('#tokoprovod1 > span.hiddened').text(pars_summ(result.tok1));
			$('#tokoprovod2 > span.hiddened').text(pars_summ(result.tok2));
			$('#tokoprovod3 > span.hiddened').text(pars_summ(result.tok3));
			$('#tokoprovod4 > span.hiddened').text(pars_summ(result.tok4));
			$('#tokoprovod5 > span.hiddened').text(pars_summ(result.tok5));
		})
	/////////////
}

/*$('#a3').on('click', '.tokoprovod', function(event) {
	var stoim = $(this).children().children().children('.opisanie_parametra').text();
	stoim = stoim.match(/\d+/g);
	stoim = stoim[0];
	{
		var summa = stoim * (cran.paramsO.dpO/1000);
		$(this).children('.hiddened').text(pars_summ(summa));
	}
});	*/


/*******************************************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																															  Функции для раздела
*
*																																	УСЛУГИ
*
*
*
*
*
*
*******************************************************************************************************************************************************************************************************************************************************************/

function price_from_distance (argument) {
	let dlinna = cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP;
	let shirina = cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP;
	let uprav = cran._3 == 'Ручное' ? 1:0;
	if (cran.city == null) {
		$('#c1 .hiddened').text('Считаем..');
		$('#c2 .hiddened').text('Считаем..');
		$('#c3 .hiddened').text('Считаем..');
		$('#c6 .hiddened').text('Считаем..');
		let prompt_city = document.createElement('div');
			prompt_city.id = 'prompt_city';
			prompt_city.innerHTML = '<h2>Введите пункт назначения</h2>\
									<h4 style="line-height:1.3em;margin-top:.7em">Исходя из Вашего местоположения<br>будут произведены расчеты стоимости некоторых услуг</h4>\
									<label for="inpcity" style="margin:1em 0;width:40%"><input type="text" id="inpcity" name="inpcity" placeholder="Москва"></label><br>\
									<button type="button" id="savecity" class="buttons">Сохранить</button>';
			third_opt.appendChild(prompt_city);
			savecity.addEventListener('click', function savci () {
				//this.removeEventListener('click', savci);
				cran.city = inpcity.value;
				var data_distance = { action: 'distance', _cran_type: cran._1, _gp:cran.gp, _city: cran.city , _razrez:cran.razrez, _dlinna:dlinna, _shirina:shirina, _uprav:uprav }
				$.post( calc_ajaxurl.url, data_distance, function(response)
				{
					let result = JSON.parse(response);
					result.distance == 0 ? cran.city = 'Москва':0;
					$('#c1 .opisanie_parametra').html('в пункте '+cran.city+'<br>включая проживание');
					$('#c1 .hiddened').text(pars_summ(result.price_montazh));
					$('#c2 .opisanie_parametra').html('в пункте '+cran.city+'<br>включая проживание');
					$('#c2 .hiddened').text(pars_summ(result.price_shef_montazh));
					$('#c3 .opisanie_parametra').html('до пункта '+cran.city+'<br>Расстояние - '+result.distance+' км');
					$('#c3 .hiddened').text(pars_summ(result.dostavka_price));
					$('#c6 .opisanie_parametra').html('до пункта '+cran.city+'<br>Расстояние - '+result.distance+' км');
					$('#c6 .hiddened').text(pars_summ(result.price_expert));
				});
				prompt_city.remove();
			})
	}
	else
	{
		return
	}

}
$('#city_change').on('click', function(event) {
	$('#option_3').children('.montazh').remove();
	$('#option_3').children('.shef_montazh').remove();
	$('#option_3').children('.dostavka').remove();
	$('#option_3').children('.rels_montazh').remove();
	$('#option_3').children('.tok_montazh').remove();
	$('#option_3').children('.viezd').remove();
	$('#option_3').children('.gabarit_chertej').remove();
	cran.city = null;
	let dlinna = cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP;
	let shirina = cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP;
	let uprav = cran._3 == 'Ручное' ? 1:0;
	$('#c1 .hiddened').text('Считаем..');
	$('#c2 .hiddened').text('Считаем..');
	$('#c3 .hiddened').text('Считаем..');
	$('#c6 .hiddened').text('Считаем..');
	let prompt_city = document.createElement('div');
		prompt_city.id = 'prompt_city';
		prompt_city.innerHTML = '<h2>Введите пункт назначения</h2>\
								<h4 style="line-height:1.3em;margin-top:.7em">Исходя из Вашего местоположения<br>будут произведены расчеты стоимости некоторых услуг</h4>\
								<label for="inpcity" style="margin:1em 0;width:40%"><input type="text" id="inpcity" name="inpcity" placeholder="Москва"></label><br>\
								<button type="button" id="savecity" class="buttons">Сохранить</button>';
		third_opt.appendChild(prompt_city);
		savecity.addEventListener('click', function savci () {
			//this.removeEventListener('click', savci);
			cran.city = inpcity.value;
			var data_distance = { action: 'distance', _cran_type: cran._1, _gp:cran.gp, _city: cran.city , _razrez:cran.razrez, _dlinna:dlinna, _shirina:shirina, _uprav:uprav }
				$.post( calc_ajaxurl.url, data_distance, function(response)
			{
				let result = JSON.parse(response);
				$('#c1 .opisanie_parametra').html('в пункте '+cran.city+'<br>включая проживание');
				$('#c1 .hiddened').text(pars_summ(result.price_montazh));
				$('#c2 .opisanie_parametra').html('в пункте '+cran.city+'<br>включая проживание');
				$('#c2 .hiddened').text(pars_summ(result.price_shef_montazh));
				$('#c3 .opisanie_parametra').html('до пункта '+cran.city+'<br>Расстояние - '+result.distance+' км');
				$('#c3 .hiddened').text(pars_summ(result.dostavka_price));
				$('#c6 .opisanie_parametra').html('до пункта '+cran.city+'<br>Расстояние - '+result.distance+' км');
				$('#c6 .hiddened').text(pars_summ(result.price_expert));
			});
			prompt_city.remove();
		});
	setTimeout(()=>{
		$('#c1,#c2,#c3,#c6,#c7').css('display', 'inline-block');
	}, 300)
});

function montazh_rels (rls) {
	if ($('#option_1').children('div.rels_crane').length > -1) {
		/////////////
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

function montazh_tokopodvoda () {
	/////////////
	var data_all_tok = { action: 'tokopodvod_montazh',  _dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP  };
		$.post( calc_ajaxurl.url, data_all_tok, function (response) {
			let result = JSON.parse(response);
			if ($('#option_1 div.tokoprovod > h4').text() == 'Кабельный с кольцами') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.3.png');
				$('#c5 > span > p > .opisanie_parametra').text('Кабельный с кольцами')
				$('#c5 > .hiddened').text(pars_summ(result.tok1));
			}
			else if ($('#option_1 div.tokoprovod > h4').text() == 'Кабельный с тележками') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.4.png');
				$('#c5 > span > p > .opisanie_parametra').text('Кабельный с тележками')
				$('#c5 > .hiddened').text(pars_summ(result.tok2));
			}
			else if ($('#option_1 div.tokoprovod > h4').text() == 'Фестонный (С профиль)') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.5.png');
				$('#c5 > span > p > .opisanie_parametra').text('Фестонный (С профиль)')
				$('#c5 > .hiddened').text(pars_summ(result.tok3));
			}
			else if ($('#option_1 div.tokoprovod > h4').text() == 'Открытые троллеи') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.6.png');
				$('#c5 > span > p > .opisanie_parametra').text('Открытые троллеи')
				$('#c5 > .hiddened').text(pars_summ(result.tok4));
			}
			else if ($('#option_1 div.tokoprovod > h4').text() == 'Закрытые троллеи') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.7.png');
				$('#c5 > span > p > .opisanie_parametra').text('Закрытые троллеи')
				$('#c5 > .hiddened').text(pars_summ(result.tok5));
			}
			else {
				$('#c5').css('display', 'none');
			}
			return;
		})
	/////////////
}

/****************************************************************************************************************************************************************************************************
*
*
*
*
*
******************************************************************************************************************************************************************************************************/

function gp_insert_price ()
{
	let gp = 0;
	let summa;
	for (let i=1; i<=10; i++) {
		switch (i) {
			case 1:
				gp=500;
				break;
			case 2:
				gp=1000;
				break;
			case 3:
				gp=2000;
				break;
			case 4:
				gp=3200;
				break;
			case 5:
				gp=5000;
				break;
			case 6:
				gp=6300;
				break;
			case 7:
				gp=8000;
				break;
			case 8:
				gp=10000;
				break;
			case 9:
				gp=12500;
				break;
			case 10:
				gp=16000;
				break;
			default:
				gp=0;
				break;
		}
		let data_cran = cran._1 == 'Опорный' ? { action: 'calc_cran', _gp:gp, _shir:cran.paramsO.shpO, _upravl:cran._3 } : { action: 'calc_cran_p', _gp:gp, _shir:cran.paramsP.shpP, _upravl:cran._3 };
		$.post( calc_ajaxurl.url, data_cran, function(response) {
			let price_crane = response;
			if (cran._2.search(/Пожар/i) != -1) {
				summa = (price_crane*10)/100 + Number(price_crane);
			}
			if (cran._2.search(/Взрыв/i) != -1) {
				summa = (price_crane*35)/100 + Number(price_crane);
			}
			if (cran._2.search(/Общ/i) != -1) {
				summa = price_crane;
			}
			if (cran.temper[0] == '-50') {
				summa = (price_crane*25)/100 + Number(summa);
			}
			if (cran.temper[0] == '-40') {
				summa = (price_crane*10)/100 + Number(summa);
			}
			if (cran.temper[1] == '+60') {
				summa = (price_crane*10)/100 + Number(summa);
			}
			if (cran.ncuprav == '24В') {
				summa = 5000 + Number(summa);
			}
			if (cran.visota == 'Увеличенная') {
				summa = 70000 + Number(summa);
			}
			if (cran.climat == 'Расположение на открытой местности') {
				summa = 9000 + Number(summa);
			}
			if (cran._1 == 'Опорный') {
				switch (i) {
					case 1:
						$('.кг500_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 2:
						$('.кг1000_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 3:
						$('.кг2000_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 4:
						$('.кг3200_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 5:
						$('.кг5000_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 6:
						$('.кг6300_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 7:
						$('.кг8000_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 8:
						$('.кг10000_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 9:
						$('.кг12500_resume_o > strong.price_').text(pars_summ(summa));
						break;
					case 10:
						$('.кг16000_resume_o > strong.price_').text(pars_summ(summa));
						break;
					default:
						gp=false;
						break;
				}
			}
			else {
				switch (i) {
					case 1:
						$('.кг500_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 2:
						$('.кг1000_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 3:
						$('.кг2000_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 4:
						$('.кг3200_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 5:
						$('.кг5000_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 6:
						$('.кг6300_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 7:
						$('.кг8000_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 8:
						$('.кг10000_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 9:
						$('.кг12500_resume_p > strong.price_').text(pars_summ(summa));
						break;
					case 10:
						$('.кг16000_resume_p > strong.price_').text(pars_summ(summa));
						break;
					default:
						gp=false;
						break;
				}
			}
		});

	}
}

function easyscroll(scrollTo) { $('html, body').animate({ scrollTop: (document.body.scrollTop + scrollTo) + 'px' }, 700) }

$('.kommerO, .kommerP').on('click', function(event) {
	let dlpr = cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP;
	calc_all_tokopodvod_i_puti();
	calc_all_dop();
	calc_all_uslugi();
	let mail_vars = {
		action: 'sendmail',
		type_cran: cran._1,
		type_manipl: cran._3,
		gp: cran.gp,
		prolet: dlpr,
		ispolnnie: cran._2,
		razmeshenie: cran.climat,
		summa: cran.summa,
		temper_ot: cran.temper[0],
		temper_do: cran.temper[1],
		dops: dop_parametri,
		price_puti: cran._1 == 'Опорный' ? $('#summa1').text() : $('#summa1_p').text(),
		price_dop: cran._1 == 'Опорный' ? $('#summa2').text() : $('#summa2_p').text(),
		price_uslug: cran._1 == 'Опорный' ? $('#summa3').text() : $('#summa3_p').text()
		};
	$.post( calc_ajaxurl.url, mail_vars, function (response) {
		console.log('response')
	});
});

});

