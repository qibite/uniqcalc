jQuery(document).ready(($)=>{
	$('#cgpO').click(()=>{
		if (cran._1 == 'Опорный') {
				$('.кг500_resume_o > strong.price_').text('Расчитываем...');
				$('.кг1000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг2000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг3200_resume_o > strong.price_').text('Расчитываем...');
				$('.кг5000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг6300_resume_o > strong.price_').text('Расчитываем...');
				$('.кг8000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг10000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг12500_resume_o > strong.price_').text('Расчитываем...');
				$('.кг16000_resume_o > strong.price_').text('Расчитываем...');
			}
		else if (cran._1 == 'Опорный') {
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
		}
		showChange($('#gpO'));
		setTimeout(()=>{
			gp_insert_price();
		}, 1800);		
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
			if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {$('.return_motor_default').parent().detach();cran.motor_price(cran.code_of_motor)}
		});


	$('#cdpO').click(()=>{showChange($('#dpO2'))})
		$('.cOdp').click(()=>{cran.paramsO.shpO = document.getElementById('valdpO').value;$('#Odp').text(document.getElementById('valdpO').value);setTimeout(()=>{hideChange()},300);cran.calculate_oporniy_crane();})

	$('#cicO').click(()=>{showChange($('#icO2'))})
		$('#obshprm').click(()=>{tal.ispolnnie = cran._2 = 'Общепромышленное';$('#Oic').text('Общепромышленное');$('#pozharselect').css('display','none');$('#vzrivoselect').css('display','none');setTimeout(()=>{hideChange()},300);cran.calculate_oporniy_crane();$('#Джойстик').css('display','inline-block');})
		$('#vzrivoshow').click(()=>{$('#vzrivoselect').css('display','block');$('#pozharselect').css('display','none')})
			$('#vzrivoselect').change(()=>{cran._2 = 'Взрывобезопасное класса '+document.getElementById('vzrivoselect').value;$('#Oic').text(cran._2);setTimeout(()=>{hideChange()},300);cran.calculate_oporniy_crane();$('#Джойстик').css('display','none');tal.ispolnnie = 'Взрывобезопасное';})
		$('#pozharshow').click(()=>{$('#pozharselect').css('display','block');$('#vzrivoselect').css('display','none')})
			$('#pozharselect').change(()=>{cran._2 = 'Пожаробезопасное класса '+document.getElementById('pozharselect').value;$('#Oic').text(cran._2);setTimeout(()=>{hideChange()},300);cran.calculate_oporniy_crane();$('#Джойстик').css('display','inline-block');tal.ispolnnie = 'Пожаробезопасное';})

	$('#ctemperO').click(()=>{showChange($('#temperO'))})
		$('#m50_2').click(()=>{cran.temper[0] = '-50'});
		$('#m40_2').click(()=>{cran.temper[0] = '-40'});
		$('#m20_2').click(()=>{cran.temper[0] = '-20'});
		$('#p40_2').click(()=>{cran.temper[1] = '+40'});
		$('#p60_2').click(()=>{cran.temper[1] = '+60'});
		$('.savetemper').click(()=>{$('#Otr').text(cran.temper[0]+' до '+cran.temper[1]);setTimeout(()=>{hideChange()},300);cran.calculate_oporniy_crane();})

	$('#razmeshO').click(()=>{showChange($('#размещение'))})
		$('#Улица').click(()=>{cran.climat = 'Расположение на открытой местности';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});
		$('#Навес').click(()=>{cran.climat = 'Расположение под навесом';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});
		$('#Помещение').click(()=>{cran.climat = 'Расположение в помещении';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});

	$('#type_uprO').click(()=>{showChange($('#тип_управления'))})
		$('#Ручное').click(()=>{cran._3 = 'Ручное';cran._3Type = 'Отсутствует при ручном управлении';setTimeout(()=>{hideChange()},300);$('#Otc').text(cran._3);
			$('#gpO > ul li:nth-child(9)').css('display','none');$('#gpO > ul li:nth-child(10)').css('display','none');
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			$('#Ogp').text(cran.gp);
			cran.calculate_oporniy_crane();
			$('.dop_parametr:has("span.pult_change")').remove();
			$('.dop_parametr:has("span.motor_reductor_change")').remove();
			$('.dop_parametr:has("span.preobrazovatel_change")').remove();
			$('#option_1 > .tokoprovod').remove();
			$('#option_2 > .sirena').remove();
			$('#option_2 > .stop').remove();
			$('#option_2 > .tormoz').remove();
			$('#option_2 > .shit_electro').remove();
			$('#option_2 > .vikluchateli').remove();
			$('#option_3 > .tok_montazh').remove();
			$('#gpO > ul li:nth-child(9)').css('display','none');$('#gpO > ul li:nth-child(10)').css('display','none');
			$('#Oep').text('Отсутствует при ручном управлении');
			cran.setncuprav = 'Отсутствует при ручном управлении';
			$('#Ovolt').text(cran.ncuprav);
			cran.setspeedmetr = 'Ручное перемещение';
			$('#Ospeed').text(cran.speedmetr);
			cran.setszo = 'Не доступно при ручном управлении';
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
						if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
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
			cran._3 = 'Электро';
			$('#Otc').text(cran._3);
			$('#Oep').text('3-х фазная (380 В)');
			cran.setncuprav = '42В';
			$('#Ovolt').text(cran.ncuprav);
			cran.setspeedmetr = '20 м/мин';
			$('#Ospeed').text(cran.speedmetr);
			cran.setszo = 'IP31';
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
						<h4>Червячная передача ABLE (Италия)</h4> \
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
			cran.setmotor = 'Червячная передача ABLE (Италия) - стандартно';
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
			cran.code_of_chastotnik = '8.3';

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
						if ($('#option_2').children('.dop_parametr').length+1 >= 12) {
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
		$('#IP31').click(()=>{cran.setszo = 'IP31';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});
		$('#IP54').click(()=>{cran.setszo = 'IP54';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});
		$('#IP44').click(()=>{cran.setszo = 'IP44';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});
		$('#IP65').click(()=>{cran.setszo = 'IP65';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});

	$('#cOvolt').click(()=>{showChange($('#напряжение_цепи'))});
		$('#42В').click(()=>{cran.setncuprav = '42В';setTimeout(()=>{hideChange()},300);$('#Ovolt').text(cran.ncuprav);cran.calculate_oporniy_crane()});
		$('#24В').click(()=>{cran.setncuprav = '24В';setTimeout(()=>{hideChange()},300);$('#Ovolt').text(cran.ncuprav);cran.calculate_oporniy_crane()});

	$('#сOspeed').click(()=>{showChange($('#скорость'))});
		$('#metr20').click(()=>{cran.setspeedmetr = '20 м/мин';setTimeout(()=>{hideChange()},300);$('#Ospeed').text(cran.speedmetr)});
		$('#metr40').click(()=>{cran.setspeedmetr = '40 м/мин';setTimeout(()=>{hideChange()},300);$('#Ospeed').text(cran.speedmetr)});
		$('#metr8').click(()=>{cran.setspeedmetr = '8 м/мин';setTimeout(()=>{hideChange()},300);$('#Ospeed').text(cran.speedmetr)});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	
	$('#cgpP').click(()=>{
		if (cran._1 == 'Опорный') {
				$('.кг500_resume_o > strong.price_').text('Расчитываем...');
				$('.кг1000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг2000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг3200_resume_o > strong.price_').text('Расчитываем...');
				$('.кг5000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг6300_resume_o > strong.price_').text('Расчитываем...');
				$('.кг8000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг10000_resume_o > strong.price_').text('Расчитываем...');
				$('.кг12500_resume_o > strong.price_').text('Расчитываем...');
				$('.кг16000_resume_o > strong.price_').text('Расчитываем...');
			}
		else if (cran._1 == 'Опорный') {
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
		}
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
		if ($('.return_motor_default') && cran._3 != 'Ручное' && cran.code_of_motor != 9.1) {$('.return_motor_default').parent().detach();cran.motor_price(cran.code_of_motor)}
	});
	

	$('#cdpP').click(()=>{showChange($('#dpP2'))})
	$('.cPdp').click(()=>{cran.paramsP.shpP = document.getElementById('valdpO').value;cran.paramsP.shpP = document.getElementById('valdpPk').value;$('#Pdp').text(document.getElementById('valdpP').value);setTimeout(()=>{hideChange()},300)})


	$('#cdkP').click(()=>{showChange($('#dkP2'))})
	$('.cPdk').click(()=>{cran.paramsP.vpP = document.getElementById('valdpO').value;cran.paramsP.vpP = document.getElementById('valdpPk').value;$('#Pdk').text(document.getElementById('valdpPk').value);setTimeout(()=>{hideChange()},300)})


	$('#cicP').click(()=>{showChange($('#icP2'))})
		$('#obshprm2').click(()=>{cran._2 = 'Общепромышленное';$('#Pic').text('Общепромышленное');$('#pozharselect2').css('display','none');$('#vzrivoselect2').css('display','none');setTimeout(()=>{hideChange()},300)})
		$('#vzrivoshow2').click(()=>{$('#vzrivoselect2').css('display','block');$('#pozharselect2').css('display','none')})
			$('#vzrivoselect2').change(()=>{cran._2 = 'Взрывобезопасное класса '+document.getElementById('vzrivoselect2').value;$('#Pic').text('Взрывобезопасное класса '+document.getElementById('vzrivoselect2').value);setTimeout(()=>{hideChange()},300)})
		$('#pozharshow2').click(()=>{$('#pozharselect2').css('display','block');$('#vzrivoselect2').css('display','none')})
			$('#pozharselect2').change(()=>{cran._2 = 'Пожаробезопасное класса '+document.getElementById('pozharselect2').value;$('#Pic').text('Пожаробезопасное класса '+document.getElementById('pozharselect2').value);setTimeout(()=>{hideChange()},300)})

	$('#ctemperP').click(()=>{showChange($('#temperP'))})
		$('#m50_2P').click(()=>{cran.temper[0] = '-50'});
		$('#m40_2P').click(()=>{cran.temper[0] = '-40'});
		$('#m20_2P').click(()=>{cran.temper[0] = '-20'});
		$('#p40_2P').click(()=>{cran.temper[1] = '+40'});
		$('#p60_2P').click(()=>{cran.temper[1] = '+60'});
		$('.savetemperP').click(()=>{$('#Ptr').text(cran.temper[0]+' до '+cran.temper[1]);setTimeout(()=>{hideChange()},300)})

	$('#razmeshP').click(()=>{showChange($('#размещениеP'))})
		$('#УлицаP').click(()=>{cran.climat = 'Расположение на открытой местности';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat)});
		$('#НавесP').click(()=>{cran.climat = 'Расположение под навесом';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat)});
		$('#ПомещениеP').click(()=>{cran.climat = 'Расположение в помещении';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat)});

	$('#type_uprP').click(()=>{showChange($('#тип_управленияP'))})
		$('#РучноеP').click(()=>{cran._3 = 'Ручное';cran._3Type = 'Отсутствует при ручном управлении';setTimeout(()=>{hideChange()},300);$('#Ptc').text(cran._3);
			$('#gpP > ul li:nth-child(9)').css('display','none');$('#gpP > ul li:nth-child(10)').css('display','none');
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			$('#Pgp').text(cran.gp);
		});
		$('#ЭлектроP').click(()=>{cran._3 = 'Электро';$('#Ptc').text(cran._3);setTimeout(()=>{hideChange()},300);});

	$('#CrazrezP').click(()=>{showChange($('#razrezP'))})
		$('#РазрезнойP').click(()=>{cran.razrez = 'Разрезной';setTimeout(()=>{hideChange()},300);$('#Ptk').text('Да')});
		$('#НеразрезнойP').click(()=>{cran.razrez = 'Неразрезной';setTimeout(()=>{hideChange()},300);$('#Ptk').text('Нет')});

	$('#CPvc').click(()=>{showChange($('#высота_кранаP'))});
		$('#stdP').click(()=>{cran.visota = 'Стандартная';setTimeout(()=>{hideChange()},300);$('#Pvc').text(cran.visota)});
		$('#middlP').click(()=>{cran.visota = 'Уменьшенная';setTimeout(()=>{hideChange()},300);$('#Pvc').text(cran.visota)});
		$('#largestP').click(()=>{cran.visota = 'Увеличенная';setTimeout(()=>{hideChange()},300);$('#Pvc').text(cran.visota)});


	$('#cPszo').click(()=>{showChange($('#степень_защитыP'))});
		$('#IP31P').click(()=>{cran.setszo = 'IP31';setTimeout(()=>{hideChange()},300);$('#Pszo').text(cran.szo)});
		$('#IP54P').click(()=>{cran.setszo = 'IP54';setTimeout(()=>{hideChange()},300);$('#Pszo').text(cran.szo)});
		$('#IP44P').click(()=>{cran.setszo = 'IP44';setTimeout(()=>{hideChange()},300);$('#Pszo').text(cran.szo)});
		$('#IP65P').click(()=>{cran.setszo = 'IP65';setTimeout(()=>{hideChange()},300);$('#Pszo').text(cran.szo)});


	$('#cPvolt').click(()=>{showChange($('#напряжение_цепиP'))});
		$('#42ВP').click(()=>{cran.setncuprav = '42В';setTimeout(()=>{hideChange()},300);$('#Pvolt').text(cran.ncuprav)});
		$('#24ВP').click(()=>{cran.setncuprav = '24В';setTimeout(()=>{hideChange()},300);$('#Pvolt').text(cran.ncuprav)});


	$('#сPspeed').click(()=>{showChange($('#скоростьP'))});
		$('#metr20P').click(()=>{cran.setspeedmetr = '20 м/мин';setTimeout(()=>{hideChange()},300);$('#Pspeed').text(cran.speedmetr)});
		$('#metr40P').click(()=>{cran.setspeedmetr = '40 м/мин';setTimeout(()=>{hideChange()},300);$('#Pspeed').text(cran.speedmetr)});
		$('#metr8P').click(()=>{cran.setspeedmetr = '8 м/мин';setTimeout(()=>{hideChange()},300);$('#Pspeed').text(cran.speedmetr)});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
	$('#first_opt').on('click', 'li:not(".cat"), .cat>div.change_li', function () {
		var that = $(this);
		$('#option_1 .dop_parametr:last-child').before(()=>{
			let new_html = '<div class="dop_parametr '+ that.attr('name') +'"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
								<h4>'+ that.children().children().children('b.hz4').text() +'</h4> \
								<p><span class="opisanie_parametra">'+ that.children().children().children('.opisanie_parametra').text() +'</span><br> \
								<span class="stoimost_parametra">'+ that.children('.hiddened').text() +'</span><i class="id_bro">'+that.attr('id')+'</i></p>';
			return new_html;
		});
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '20%');
			$('.cat').siblings('li').css('display', 'inline-block');
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
		if (cran._3 != 'Ручное')
		{
			calculate_tormoz(); // Тормоз на передвижение крана
			calculate_shit();  // Установить цену для щита
			calculate_stop(); // Установить цену для Аварийный стоп на передвижение
			document.getElementById('b10').style.display = 'inline-block';
			document.getElementById('b11').style.display = 'inline-block';
			document.getElementById('b13').style.display = 'inline-block';
			document.getElementById('b12_1').style.display = 'inline-block';
			document.getElementById('b12_2').style.display = 'inline-block';
			document.getElementById('b14').style.display = 'inline-block';
			
		} else {
			//document.getElementById('b3').style.display = 'none';
			document.getElementById('b10').style.display = 'none';
			document.getElementById('b11').style.display = 'none';
			document.getElementById('b13').style.display = 'none';
			document.getElementById('b12_1').style.display = 'none';
			document.getElementById('b12_2').style.display = 'none';
			document.getElementById('b14').style.display = 'none';
		}
		delete_doble('#option_2', $('#second_opt'));
		showOptions($('#second_opt'));
		
		calculate_pokraska (); // Стоимость покраски
		if ($('#option_2').children('.sirena').length>0) {
			$('#second_opt .cat[name$="sirena"]').css('display', 'none');
		}
		if ($('#option_2').children('.vikluchateli').length>0) {
			$('#second_opt .cat[name$="vikluchateli"]').css('display', 'none');
		}
		if ($('#option_2').children('.tali').length>0) {
			$('#second_opt .cat[name$="tali"]').css('display', 'none');
		}
	});
	$('#second_opt').on('click', 'li:not(".cat"), .cat>div.change_li', function () {
		var that = $(this);		
		$(this).css('display', 'none');
		$('#option_2 .dop_parametr:last-child').before(()=>{
			var new_html = '<div class="dop_parametr '+ that.attr('name') +'"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
								<h4>'+ that.children().children().children('b.hz4').text() +'</h4> \
								<p><span class="opisanie_parametra">'+ that.children().children().children('.opisanie_parametra').text() +'</span><br> \
								<span class="stoimost_parametra">'+ that.children('.hiddened').text() +'</span><i class="id_bro">'+that.attr('id')+'</i></p>';
			return new_html;
		});
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '20%');
			$('.cat').siblings('li').css('display', 'inline-block');
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
						if ($('#option_2').children('.dop_parametr').length+1 >= 13) {
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
		montazh_cranov(); // Вычисление цены монтажа крана
		shef_montazh_cranov(); // ШЕФ монтаж крана
		montazh_rels(); // Монтаж рельс
		montazh_tokopodvoda(); // Монтаж токоподвода
		delete_doble('#option_3', $('#third_opt'));
		showOptions($('#third_opt'));
	});
	$('#third_opt').on('click', 'li:not(".cat, #c3_1"), .cat>div.change_li', function () {
		var that = $(this);
		$('#option_3 .dop_parametr:last-child').before(()=>{
			let new_html = '<div class="dop_parametr '+ that.attr('name') +'"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
								<h4>'+ that.children().children().children('b.hz4').text() +'</h4> \
								<p><span class="opisanie_parametra">'+ that.children().children().children('.opisanie_parametra').text() +'</span><br> \
								<span class="stoimost_parametra">'+ that.children('.hiddened').text() +'</span><i class="id_bro">'+that.attr('id')+'</i></p>';
			return new_html;
		});
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '20%');
			$('.cat').siblings('li').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
			$('#third_opt .ul_change > li').each(function(index, el) {
				/*if (cran._3 == 'Ручное') {
					if ($('#option_3').children('.dop_parametr').length+1 > 3) {
						$('.add_dop_2').parent().css('display', 'none');
					}
					else {
						$('.add_dop_2').parent().css('display', 'inline-block');
					}
				}
				else {			
					if (cran._3 != 'Ручное') {
						if ($('#option_3').children('.dop_parametr').length+1 >= 12) {
							$('.add_dop_3').parent().css('display', 'none');
						}
						else {
						$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
				}*/
			});
			calc_all_uslugi();
		},200);
		
		
	});
/************************************************************************************************************************************************************************************************************************************/
//Удалить опцию или изменить
$('#first_opt, #second_opt, #third_opt').on('click', '.cat', function(event) {
	$(this).siblings('li').css('display', 'none');
	$(this).css('width', '100%');
	if ($(this).hasClass('tali_dop')) {		
		if (cran.gp > 10000 && cran._2.search(/Взрывобезопасное/i) != 0) {
			$('#conteinert_talei_1').css('display', 'block');
			$('.e_tal').css('display', 'inline-block');
			if (tal.gp > 12500 && tal.visota > 15000) {
				$('.tal_e_RUS').css('display', 'none');
			}
			tal.upravlenie = 'Электро';
		}
		else if (cran._2.search(/Взрывобезопасное/i) == 0 && tal.gp <= 10000)
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
	$('.cat').css('width', '20%');
	$('.cat').siblings('li').css('display', 'inline-block');
	$('.cat').children('div').css('display', 'none');
	if ($('#option_1').children('div.rels_crane').length == 0) {$('#c4').css('display', 'none')}
	if ($('#option_1').children('div.tokoprovod').length == 0) {$('#c5').css('display', 'none')}
	$('#revers').css('display', 'none');
	
	if (cran._3 == 'Ручное')
		{
			document.getElementById('a3').style.display = 'none';
			document.getElementById('b10').style.display = 'none';
			document.getElementById('b11').style.display = 'none';
			document.getElementById('b13').style.display = 'none';
			document.getElementById('b12_1').style.display = 'none';
			document.getElementById('b12_2').style.display = 'none';
			document.getElementById('b14').style.display = 'none';
			document.getElementById('c5').style.display = 'none';
		}
	delete_doble('#option_1', $('#first_opt'));
	delete_doble('#option_2', $('#second_opt'));
	delete_doble('#option_3', $('#third_opt'));
	if ($('#option_2').children('.sirena').length>0) {
			$('#second_opt .cat[name$="sirena"]').css('display', 'none');
		}
	if ($('#option_2').children('.vikluchateli').length>0) {
		$('#second_opt .cat[name$="vikluchateli"]').css('display', 'none');
	}
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
	var hidden_elements;
	$(context+' > .dop_parametr:not(:last-child) >p >i.id_bro').each(function(index, el) {
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
		hideOptions();		
		$('.cat').css('width', '20%');
		$('.ul_change > .change_li').css('display', 'inline-block');
		$('.cat').children('div').css('display', 'none');
		if (cran._3 == 'Ручное')
		{
			document.getElementById('b10').style.display = 'none';
			document.getElementById('b11').style.display = 'none';
			document.getElementById('b13').style.display = 'none';
			document.getElementById('b12_1').style.display = 'none';
			document.getElementById('b12_2').style.display = 'none';
			document.getElementById('b14').style.display = 'none';
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
	function calculate_tal (argument) {	
			//////////////
				var data_tal = { action: 'calc_tal', _upravlenie:tal.upravlenie, _type:tal.type, _country:tal.country, _visota:tal.visota, _ispolnenie:tal.ispolnnie, _gp:tal.gp }
				$.post( calc_ajaxurl.url, data_tal, function(response) {
					tal.summa = response;
					$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr tal_for_search"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src=" \
					'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ tal.img +'" alt="" style="width:230px"><h4>Таль '
					+ tal.country +'</h4> \
					<p> \
						<span class="stoimost_parametra">'+ String(Number(tal.summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span> \
					</p>');
				});
			//////////////
	}

	function calculate_shit () {
			//////////////
				var data_shit = { action: 'calc_shit', _gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP}
				$.post( calc_ajaxurl.url, data_shit, function(response) {
					$('#b11 > .hiddened').text(String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
				});
			//////////////
	}

	function calculate_stop () {
		if (cran._3 != 'Ручное') {
			document.getElementById('b13').style.display = 'inline-block';
			let stop =
				cran._3Type.search(/Подвесной/) != -1 ? {id:34} :
					cran._3Type.search(/Радиоуправление/) != -1 ? {id:35} : $('#b13 > .hiddened').css('display', 'none');;
				/////////////
				var data_stop = { action: 'calc_stop', _stop_id:stop.id }
					$.post( calc_ajaxurl.url, data_stop, function(response) {
						$('#b13 .hiddened').text(String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
					});
				/////////////
		} 
	}

	function calculate_tormoz () {
		if (cran._3 != 'Ручное') {
				/////////////
				var data_tormoz = { action: 'calc_tormoz',  _motor_code:cran.code_of_motor,  _motor_gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
					$.post( calc_ajaxurl.url, data_tormoz, function(response) {
						$('#b14 > .hiddened').text(String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
					});
				/////////////
		}
	}

	function calculate_pokraska () {		
			if (cran._1 == 'Опорный')
			{
			var pokraska =	cran.paramsO.shpO < 12000 ? {id:42} :
								cran.paramsO.shpO > 12000 && cran.paramsO.shpO < 22000? {id:43} :
									cran.paramsO.shpO > 22000 ? {id:44} : false;
			}
			if (cran._1 == 'Подвесной')
			{
			var pokraska =	cran.paramsP.shpP < 12000 ? {id:42} :
								cran.paramsP.shpP > 12000 && cran.paramsP.shpP < 22000? {id:43} :
									cran.paramsP.shpP > 22000 ? {id:44} : false;
			}
			
			/////////////
			var data_pokraska = { action: 'calc_pokraska', _pokraska_id:pokraska.id }
				$.post( calc_ajaxurl.url, data_pokraska, function(response) {
					$('#b18 > .hiddened').text(String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
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
	if (cran._1 == 'Опорный')
	{
		var rels =	{ gp:cran.gp, shirinamp:cran.paramsO.dpO, upravlenie:cran._3 }
	}
	/////////////
	var data_rels = { action: 'postavka_rels', _rels_gp:rels.gp, _rels_dlinna:rels.shirinamp, _rels_upravlenie:rels.upravlenie, rels_url_img:location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/' }
	$.post( calc_ajaxurl.url, data_rels, function(response)
	{
		$('#a2').html(response);
	});
	/////////////
}

function postavka_tokopodvoda () {
	/////////////
	var data_all_tok = { action: 'tokopodvod_all',  _dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP  };
		$.post( calc_ajaxurl.url, data_all_tok, function (response) {
			let result = JSON.parse(response);
			$('#tokoprovod1 > span.hiddened').text(String(Number(result.tok1).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#tokoprovod2 > span.hiddened').text(String(Number(result.tok2).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#tokoprovod3 > span.hiddened').text(String(Number(result.tok3).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#tokoprovod4 > span.hiddened').text(String(Number(result.tok4).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#tokoprovod5 > span.hiddened').text(String(Number(result.tok5).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
		})
	/////////////
}

/*$('#a3').on('click', '.tokoprovod', function(event) {
	var stoim = $(this).children().children().children('.opisanie_parametra').text();
	stoim = stoim.match(/\d+/g);
	stoim = stoim[0];
	{
		var summa = stoim * (cran.paramsO.dpO/1000);
		$(this).children('.hiddened').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
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

function montazh_cranov () {
	/////////////
	let upr = cran._3 == 'Ручное' ? 'montazh_crana_r' : 'montazh_crana_el';
	var data_montazh = { action: upr, _gp:cran.gp, _uprav:upr, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
	$.post( calc_ajaxurl.url, data_montazh, function(response)
	{
		$('#c1').html(response);
	});
	/////////////
}

function shef_montazh_cranov () {
	/////////////
	var data_montazh = { action: 'shef_montazh', _gp:cran.gp, _shirina:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
	$.post( calc_ajaxurl.url, data_montazh, function(response)
	{
		$('#c2').html(response);
	});
	/////////////
}

$('#dostavka_price_rasschet').on('click', function(event) {	
	$('#dostavka_km').html('<br>Подождите пожалуйста...')
	var data_dostavka = { action: 'myway', cran_type: cran._1, _city: $.trim($('#city').val()) , razrez:cran.razrez, _dlinna:cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP }
		$.post( calc_ajaxurl.url, data_dostavka, function(response)
		{
			let resp_data = JSON.parse(response);
			$('#dostavka_km').html('до пункта '+ $('#city').val() +' <br> ' + String(Number(resp_data.km).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' км');
			$('#dostavka_price').text(String(Number(resp_data.price).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#dostavka_price_zakazat').css('display', 'inline-block');
		});
});

$('#dostavka_price_zakazat').on('click', function() {
	$('#option_3 .dop_parametr:last-child').before(()=>{
		let new_html = '<div class="dop_parametr dostavka"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/y3.png" alt="" style="width:200px"> \
			<h4>Доставка крана</h4> \
			<p><span class="opisanie_parametra">'+ $('#dostavka_km').text() +'</span><br> \
				<span class="stoimost_parametra">'+ $('#dostavka_price').text() +'</span><i class="id_bro">c3</i></p>';
			return new_html;
		});
	setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '20%');
			$('.cat').siblings('li').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
			$('#third_opt .ul_change > li').each(function(index, el) {
				/*if (cran._3 == 'Ручное') {
					if ($('#option_3').children('.dop_parametr').length+1 > 3) {
						$('.add_dop_2').parent().css('display', 'none');
					}
					else {
						$('.add_dop_2').parent().css('display', 'inline-block');
					}
				}
				else {			
					if (cran._3 != 'Ручное') {
						if ($('#option_3').children('.dop_parametr').length+1 >= 12) {
							$('.add_dop_3').parent().css('display', 'none');
						}
						else {
						$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
				}*/
			$('#dostavka_price_zakazat').css('display', 'none');
			$('#city').val('')
			$('#dostavka_km').text('')
			$('#dostavka_price').text('')
			});
			calc_all_uslugi();
		},200);
});

$('#viezd_price_rasschet').on('click', function(event) {
	$('#viezd_km').html('<br>Подождите пожалуйста...')
	var data_viezd = { action: 'expertway', _city: $.trim($('#city2').val()) }
		$.post( calc_ajaxurl.url, data_viezd, function(response)
		{
			let resp_data = JSON.parse(response);
			$('#viezd_km').html('Проезд до пункта '+ $('#city2').val() +'<br> ' + String(Number(resp_data.km).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' км');
			$('#viezd_price').text(String(Number(resp_data.price).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			$('#viezd_price_zakazat').css('display', 'inline-block');
		});
});

$('#viezd_price_zakazat').on('click', function() {
	$('#option_3 .dop_parametr:last-child').before(()=>{
		let new_html = '<div class="dop_parametr viezd"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/y6.png" alt="" style="width:200px"> \
			<h4>Выезд эксперта</h4> \
			<p><span class="opisanie_parametra">'+ $('#viezd_km').text() +'</span><br> \
				<span class="stoimost_parametra">'+ $('#viezd_price').text() +'</span><i class="id_bro">c6</i></p>';
			return new_html;
		});
	setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '20%');
			$('.cat').siblings('li').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
			$('#third_opt .ul_change > li').each(function(index, el) {
				/*if (cran._3 == 'Ручное') {
					if ($('#option_3').children('.dop_parametr').length+1 > 3) {
						$('.add_dop_2').parent().css('display', 'none');
					}
					else {
						$('.add_dop_2').parent().css('display', 'inline-block');
					}
				}
				else {			
					if (cran._3 != 'Ручное') {
						if ($('#option_3').children('.dop_parametr').length+1 >= 12) {
							$('.add_dop_3').parent().css('display', 'none');
						}
						else {
						$('.add_dop_2').parent().css('display', 'inline-block');
						}
					}
				}*/
			$('#viezd_price_zakazat').css('display', 'none');
			$('#city').val('')
			$('#viezd_km').text('')
			$('#viezd_price').text('')
			});
			calc_all_uslugi();
		},200);
});

function montazh_rels () {
	if ($('#option_1').children('div.rels_crane').length > 0) {
		/////////////
		let dlinna = cran._1 == 'Опорный' ? cran.paramsO.dpO : cran.paramsP.dpP;
		var data_montazh_rels = { action: 'rels_montazh', _gp:cran.gp, _upravl:cran._3, _dlinna:dlinna, _shir:cran._1 == 'Опорный' ? cran.paramsO.shpO : cran.paramsP.shpP }
		$.post( calc_ajaxurl.url, data_montazh_rels, function(response)
		{
			$('#c4').html(response)
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
				$('#c5 > .hiddened').text(String(Number(result.tok1).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			}
			else if ($('#option_1 div.tokoprovod > h4').text() == 'Кабельный с тележками') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.4.png');
				$('#c5 > span > p > .opisanie_parametra').text('Кабельный с тележками')
				$('#c5 > .hiddened').text(String(Number(result.tok2).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			}
			else if ($('#option_1 div.tokoprovod > h4').text() == 'Фестонный (С профиль)') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.5.png');
				$('#c5 > span > p > .opisanie_parametra').text('Фестонный (С профиль)')
				$('#c5 > .hiddened').text(String(Number(result.tok3).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			}
			else if ($('#option_1 div.tokoprovod > h4').text() == 'Открытые троллеи') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.6.png');
				$('#c5 > span > p > .opisanie_parametra').text('Открытые троллеи')
				$('#c5 > .hiddened').text(String(Number(result.tok4).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			}
			else if ($('#option_1 div.tokoprovod > h4').text() == 'Закрытые троллеи') {
				$('#c5 > span > img').attr('src', location.origin + '/wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.7.png');
				$('#c5 > span > p > .opisanie_parametra').text('Закрытые троллеи')
				$('#c5 > .hiddened').text(String(Number(result.tok5).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
			}
			else {
				$('#c5').css('display', 'none');
			}
			return;
		})
	/////////////
}

/*************************************************************************************************************************************************************************************************************************************
*
*
**
*
*
*
*
*
*
*
*
*
*
************************************************************************************************************************************************************************************************************************************/

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
		let data_cran = { action: 'calc_cran', _gp:gp, _shir:cran.paramsO.shpO, _upravl:cran._3 }
		$.post( calc_ajaxurl.url, data_cran, function(response) {
			let price_crane = response;
			if (cran._2.search(/Пожаробезопасное/i) != -1) {
				summa = (price_crane*10)/100 + Number(price_crane);
			}
			if (cran._2.search(/Взрывобезопасное/i) != -1) {
				summa = (price_crane*35)/100 + Number(price_crane);
			}
			if (cran._2.search(/Общепромышленное/i) != -1) {
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
			if (cran._1 == 'Опорный') {
				switch (i) {
					case 1:
						$('.кг500_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 2:
						$('.кг1000_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 3:
						$('.кг2000_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 4:
						$('.кг3200_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 5:
						$('.кг5000_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 6:
						$('.кг6300_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 7:
						$('.кг8000_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 8:
						$('.кг10000_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 9:
						$('.кг12500_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 10:
						$('.кг16000_resume_o > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					default:
						gp=false;
						break;
				}
			}
			else {
				switch (i) {
					case 1:
						$('.кг500_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 2:
						$('.кг1000_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 3:
						$('.кг2000_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 4:
						$('.кг3200_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 5:
						$('.кг5000_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 6:
						$('.кг6300_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 7:
						$('.кг8000_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 8:
						$('.кг10000_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 9:
						$('.кг12500_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
						break;
					case 10:
						$('.кг16000_resume_p > strong.price_').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
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


function calc_all_tokopodvod_i_puti () {
	let conteiner = 0;
	$('#option_1 > div.dop_parametr:not("#option_1 > .dop_parametr:last-child")').each((index, el) => {
		if (!isNaN(parseInt(el.children[3].children[2].innerText.replace(/\s/g, '')))) {
			conteiner += parseInt(el.children[3].children[2].innerText.replace(/\s/g, ''));
		}
	});
	$('#summa1').text(String(Number(conteiner).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
	$('#summa4').text('Подождите...')
	setTimeout(() => {
		calc_all_oporniy();
	}, 1200)
}


function calc_all_dop () {
	let conteiner = 0;
	$('#option_2 > div.dop_parametr:not("#option_2 > .dop_parametr:last-child")').each((index, el) => {
		if (el.children[1].classList.contains('return_motor_default') || el.children[1].classList.contains('return_preobrazovatel_default') || el.children[1].classList.contains('return_pult_default')) {
			conteiner += parseInt(el.children[4].children[2].innerText.replace(/\s/g, ''));
		}
		else if (!isNaN(parseInt(el.children[3].children[2].innerText.replace(/\s/g, '')))) {
			conteiner += parseInt(el.children[3].children[2].innerText.replace(/\s/g, ''));
		}
	});
	$('#summa2').text(String(Number(conteiner).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
	$('#summa4').text('Подождите...')
	setTimeout(() => {
		calc_all_oporniy();
	}, 1200)
}

function calc_all_uslugi () {
	let conteiner = 0;
	$('#option_3 > div.dop_parametr:not("#option_3 > .dop_parametr:last-child")').each((index, el) => {
		if (!isNaN(parseInt(el.children[3].children[2].innerText.replace(/\s/g, '')))) {
			conteiner += parseInt(el.children[3].children[2].innerText.replace(/\s/g, ''));
		}
	});
	$('#summa3').text(String(Number(conteiner).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
	$('#summa4').text('Подождите...')
	setTimeout(() => {
		calc_all_oporniy();
	}, 1200)
}

function calc_all_oporniy () {
	let conteiner = 0;
	if (!isNaN($('#summa').text().replace(/\s/g, '')) && !isNaN($('#summa1').text().replace(/\s/g, '')) && !isNaN($('#summa2').text().replace(/\s/g, '')) && !isNaN($('#summa3').text().replace(/\s/g, ''))) {
		let summa = parseInt($('#summa').text().replace(/\s/g, ''));
		let summa1 = parseInt($('#summa1').text().replace(/\s/g, ''));
		let summa2 = parseInt($('#summa2').text().replace(/\s/g, ''));
		let summa3 = parseInt($('#summa3').text().replace(/\s/g, ''));
		conteiner = summa + summa1 + summa2 + summa3;
		console.log(summa)
		console.log(summa1)
		console.log(summa2)
		console.log(summa3)
	}
	$('#summa4').text(String(Number(conteiner).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
}


});

