jQuery(document).ready(($)=>{
	$('#cgpO').click(()=>{showChange($('#gpO'))})
	$('#gpO > ul').on('click', 'li', function(event) {
		let countLi = $(this).index() + 1;
		let Ogp = $('#Ogp');
		switch (countLi) {
					case 1: {
	    				cran.gp = 500;
	    				break
	    			}
	    			case 2: {
	    				cran.gp = 1000;
	    				break
	    			}
	    			case 3: {
	    				cran.gp = 2000;
	    				break
	    			}
	    			case 4: {
	    				cran.gp = 3200;
	    				break
	    			}
	    			case 5: {
	    				cran.gp = 5000;
	    				break
	    			}
	    			case 6: {
	    				cran.gp = 6300;
	    				break
	    			}
	    			case 7: {
	    				cran.gp = 8000;
	    				break
	    			}
	    			case 8: {
	    				cran.gp = 10000;
	    				break
	    			}
	    			case 9: {
	    				cran.gp = 12500;
	    				break
	    			}
	    			case 10: {
	    				cran.gp = 16000;
	    				break
	    			}
	    			default: {
	    				cran.gp = 500;
	    				break
	    			}

		}
		$('#Ogp').text(cran.gp);
		setTimeout(()=>{hideChange()},300);
		calculate_oporniy_crane();
	});


	$('#cdpO').click(()=>{showChange($('#dpO2'))})
	$('.cOdp').click(()=>{cran.paramsO.shpO = document.getElementById('valdpO').value;$('#Odp').text(document.getElementById('valdpO').value);setTimeout(()=>{hideChange()},300);calculate_oporniy_crane();})

	$('#cicO').click(()=>{showChange($('#icO2'))})
		$('#obshprm').click(()=>{cran._2 = 'Общепромышленное';$('#Oic').text('Общепромышленное');$('#pozharselect').css('display','none');$('#vzrivoselect').css('display','none');setTimeout(()=>{hideChange()},300);$('#Джойстик').css('display','inline-block')})
		$('#vzrivoshow').click(()=>{$('#vzrivoselect').css('display','block');$('#pozharselect').css('display','none')})
			$('#vzrivoselect').change(()=>{cran._2 = 'Взрывобезопасное класса '+document.getElementById('vzrivoselect').value;$('#Oic').text(document.getElementById('vzrivoselect').value);setTimeout(()=>{hideChange()},300);$('#Джойстик').css('display','none')})
		$('#pozharshow').click(()=>{$('#pozharselect').css('display','block');$('#vzrivoselect').css('display','none')})
			$('#pozharselect').change(()=>{cran._2 = 'Пожаробезопасное класса '+document.getElementById('pozharselect').value;$('#Oic').text(document.getElementById('pozharselect').value);setTimeout(()=>{hideChange()},300);$('#Джойстик').css('display','inline-block')})

	$('#ctemperO').click(()=>{showChange($('#temperO'))})
		$('#m50_2').click(()=>{cran.temper[0] = '-50'});
		$('#m40_2').click(()=>{cran.temper[0] = '-40'});
		$('#m20_2').click(()=>{cran.temper[0] = '-20'});
		$('#p40_2').click(()=>{cran.temper[1] = '+40'});
		$('#p60_2').click(()=>{cran.temper[1] = '+60'});
		$('.savetemper').click(()=>{$('#Otr').text(cran.temper[0]+' до '+cran.temper[1]);setTimeout(()=>{hideChange()},300)})

	$('#razmeshO').click(()=>{showChange($('#размещение'))})
		$('#Улица').click(()=>{cran.climat = 'Расположение на открытой местности';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});
		$('#Навес').click(()=>{cran.climat = 'Расположение под навесом';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});
		$('#Помещение').click(()=>{cran.climat = 'Расположение в помещении';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});

	$('#type_uprO').click(()=>{showChange($('#тип_управления'))})
		$('#Ручное').click(()=>{cran._3 = 'Ручное';cran._3Type = 'Отсутствует при ручном управлении';setTimeout(()=>{hideChange()},300);$('#Otc').text(cran._3);
			$('#gpO > ul li:nth-child(9)').css('display','none');$('#gpO > ul li:nth-child(10)').css('display','none');
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			$('#Ogp').text(cran.gp);
			calculate_oporniy_crane();
			$('.dop_parametr:has("span.pult_change")').remove();
			$('.dop_parametr:has("span.motor_reductor_change")').remove();
			$('#gpO > ul li:nth-child(9)').css('display','none');$('#gpO > ul li:nth-child(10)').css('display','none');
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			cran.resetparam();
		});
		$('#Электро').click(()=>{
			cran._3 = 'Электро';
			$('#Otc').text(cran._3);
			$('#option_2 .dop_parametr:last-child').before(()=>{
			let new_html = '<div class="dop_parametr"> \
								<span class="change_this_option pult_change">Изменить \
									<i class="fa fa-pencil-square" aria-hidden="true"></i> \
								</span> \
								<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/_3.3.jpg" alt="" style="width:200px"> \
								<h4>Подвесной пульт</h4> \
								<p> \
									<span class="opisanie_parametra">Входит в стоимость крана</span> \
										<br> \
									<span class="stoimost_parametra">Бесплатно</span><i class="id_bro">b3</i> \
								</p>';
			return new_html;
			});
			cran._3Type = 'Подвесной пульт';

			$('#option_2 .dop_parametr:last-child').before(()=>{
				let new_html = '<div class="dop_parametr"> \
						<span class="change_this_option motor_reductor_change">Изменить \
						<i class="fa fa-pencil-square" aria-hidden="true"></i> \
						</span> \
						<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/9.1.jpg" alt="" style="width:200px"> \
						<h4>Червячная передача ABLE (Италия)</h4> \
						<p> \
						<span class="opisanie_parametra">Входит в стоимость крана</span> \
						<br> \
						<span class="stoimost_parametra">Бесплатно</span><i class="id_bro">b9</i> \
						</p>';
				return new_html;
			});
			calculate_oporniy_crane();
			$('#gpO > ul li:nth-child(9)').css('display','inline-block');$('#gpO > ul li:nth-child(10)').css('display','inline-block')
			setTimeout(()=>{hideChange()},300);
			cran.setmotor = 'Червячная передача ABLE (Италия) - стандартно';

			cran.resetparam();
	});

	$('#CrazrezO').click(()=>{showChange($('#razrezO'))})
		$('#Разрезной').click(()=>{cran.razrez = 'Разрезной';setTimeout(()=>{hideChange()},300);$('#Otk').text('Да')});
		$('#Неразрезной').click(()=>{cran.razrez = 'Неразрезной';setTimeout(()=>{hideChange()},300);$('#Otk').text('Нет')});

	$('#COvc').click(()=>{showChange($('#высота_крана'))});
		$('#std').click(()=>{cran.visota = 'Стандартная';setTimeout(()=>{hideChange()},300);$('#Ovc').text(cran.visota)});
		$('#middl').click(()=>{cran.visota = 'Уменьшенная';setTimeout(()=>{hideChange()},300);$('#Ovc').text(cran.visota)});
		$('#largest').click(()=>{cran.visota = 'Увеличенная';setTimeout(()=>{hideChange()},300);$('#Ovc').text(cran.visota)});


	$('#cOszo').click(()=>{showChange($('#степень_защиты'))});
		$('#IP31').click(()=>{cran.setszo = 'IP31';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});
		$('#IP54').click(()=>{cran.setszo = 'IP54';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});
		$('#IP44').click(()=>{cran.setszo = 'IP44';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});
		$('#IP65').click(()=>{cran.setszo = 'IP65';setTimeout(()=>{hideChange()},300);$('#Oszo').text(cran.szo)});


	$('#cOvolt').click(()=>{showChange($('#напряжение_цепи'))});
		$('#42В').click(()=>{cran.setncuprav = '42В';setTimeout(()=>{hideChange()},300);$('#Ovolt').text(cran.ncuprav)});
		$('#24В').click(()=>{cran.setncuprav = '24В';setTimeout(()=>{hideChange()},300);$('#Ovolt').text(cran.ncuprav)});



	$('#cOis').click(()=>{showChange($('#исполнение_скорости'))});
		$('#rk').click(()=>{cran.setspeed = 'Релейно-контакторная';showChange($('#релейно'));hideThisChange($('#частотно'))});
			$('#одна_скорость').click(()=>{cran.setspeed = 'Одна скорость движения';setTimeout(()=>{hideChange()},300);$('#Ois').text(cran.speed)});
			$('#несколько_скоростей').click(()=>{cran.setspeed = 'Несколько скоростей движения';setTimeout(()=>{hideChange()},300);$('#Ois').text(cran.speed)});
		$('#chp').click(()=>{cran.setspeed = 'Частотный преобразователь';showChange($('#частотно'));hideThisChange($('#релейно'))});
			$('#esq').click(()=>{cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';setTimeout(()=>{hideChange()},300);$('#Ois').text(cran.speed)});
			$('#hyundai').click(()=>{cran.setspeed = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';setTimeout(()=>{hideChange()},300);$('#Ois').text(cran.speed)});
			$('#danfross').click(()=>{cran.setspeed = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';setTimeout(()=>{hideChange()},300);$('#Ois').text(cran.speed)});


	$('#сOspeed').click(()=>{showChange($('#скорость'))});
		$('#metr20').click(()=>{cran.setspeedmetr = '20 м/мин';setTimeout(()=>{hideChange()},300);$('#Ospeed').text(cran.speedmetr)});
		$('#metr40').click(()=>{cran.setspeedmetr = '40 м/мин';setTimeout(()=>{hideChange()},300);$('#Ospeed').text(cran.speedmetr)});
		$('#metr8').click(()=>{cran.setspeedmetr = '8 м/мин';setTimeout(()=>{hideChange()},300);$('#Ospeed').text(cran.speedmetr)});


	$('#cOttk').click(()=>{showChange($('#тип_токоподвода'))});
		$('#кск').click(()=>{cran.setttk = 'Кабельный с кольцами';setTimeout(()=>{hideChange()},300);$('#Ottk').text(cran.ttk)});
		$('#кст').click(()=>{cran.setttk = 'Кабельный с тележками';setTimeout(()=>{hideChange()},300);$('#Ottk').text(cran.ttk)});
		$('#ф').click(()=>{cran.setttk = 'Фестонный (с-профиль)';setTimeout(()=>{hideChange()},300);$('#Ottk').text(cran.ttk)});
		$('#от').click(()=>{cran.setttk = 'Откртые троллеи';setTimeout(()=>{hideChange()},300);$('#Ottk').text(cran.ttk)});
		$('#зт').click(()=>{cran.setttk = 'Закрытые троллеи';setTimeout(()=>{hideChange()},300);$('#Ottk').text(cran.ttk)});		
		$('#нетребуется').click(()=>{cran.setttk = 'Не требуется';setTimeout(()=>{hideChange()},300);$('#Ottk').text(cran.ttk)});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	
	$('#cgpP').click(()=>{showChange($('#gpP'))})
		$('#gpP > ul').on('click', 'li', function(event) {
		let countLi = $(this).index() + 1;
		let Ogp = $('#Pgp');
		switch (countLi) {
					case 1: {
	    				cran.gp = 500;
	    				break
	    			}
	    			case 2: {
	    				cran.gp = 1000;
	    				break
	    			}
	    			case 3: {
	    				cran.gp = 2000;
	    				break
	    			}
	    			case 4: {
	    				cran.gp = 3200;
	    				break
	    			}
	    			case 5: {
	    				cran.gp = 5000;
	    				break
	    			}
	    			case 6: {
	    				cran.gp = 6300;
	    				break
	    			}
	    			case 7: {
	    				cran.gp = 8000;
	    				break
	    			}
	    			case 8: {
	    				cran.gp = 10000;
	    				break
	    			}
	    			case 9: {
	    				cran.gp = 12500;
	    				break
	    			}
	    			case 10: {
	    				cran.gp = 16000;
	    				break
	    			}
	    			default: {
	    				cran.gp = 500;
	    				break
	    			}

		}
		$('#Pgp').text(cran.gp);
		setTimeout(()=>{hideChange()},300);	
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



	$('#cPis').click(()=>{showChange($('#исполнение_скоростиP'))});
		$('#rkP').click(()=>{cran.setspeed = 'Релейно-контакторная';showChange($('#релейноP'));hideThisChange($('#частотноP'))});
			$('#одна_скоростьP').click(()=>{cran.setspeed = 'Одна скорость движения';setTimeout(()=>{hideChange()},300);$('#Pis').text(cran.speed)});
			$('#несколько_скоростейP').click(()=>{cran.setspeed = 'Несколько скоростей движения';setTimeout(()=>{hideChange()},300);$('#Pis').text(cran.speed)});
		$('#chpP').click(()=>{cran.setspeed = 'Частотный преобразователь';showChange($('#частотноP'));hideThisChange($('#релейноP'))});
			$('#esqP').click(()=>{cran.setspeed = 'Плавный пуск + 2 и более скорости ESQ (Китай)';setTimeout(()=>{hideChange()},300);$('#Pis').text(cran.speed)});
			$('#hyundaiP').click(()=>{cran.setspeed = 'Плавный пуск + 2 и более скорости Hyundai (Корея)';setTimeout(()=>{hideChange()},300);$('#Pis').text(cran.speed)});
			$('#danfrossP').click(()=>{cran.setspeed = 'Плавный пуск + 2 и более скорости Danfoss (Германия)';setTimeout(()=>{hideChange()},300);$('#Pis').text(cran.speed)});


	$('#сPspeed').click(()=>{showChange($('#скоростьP'))});
		$('#metr20P').click(()=>{cran.setspeedmetr = '20 м/мин';setTimeout(()=>{hideChange()},300);$('#Pspeed').text(cran.speedmetr)});
		$('#metr40P').click(()=>{cran.setspeedmetr = '40 м/мин';setTimeout(()=>{hideChange()},300);$('#Pspeed').text(cran.speedmetr)});
		$('#metr8P').click(()=>{cran.setspeedmetr = '8 м/мин';setTimeout(()=>{hideChange()},300);$('#Pspeed').text(cran.speedmetr)});


	$('#cPttk').click(()=>{showChange($('#тип_токоподводаP'))});
		$('#кскP').click(()=>{cran.setttk = 'Кабельный с кольцами';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#кстP').click(()=>{cran.setttk = 'Кабельный с тележками';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#фP').click(()=>{cran.setttk = 'Фестонный (с-профиль)';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#отP').click(()=>{cran.setttk = 'Откртые троллеи';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#зтP').click(()=>{cran.setttk = 'Закрытые троллеи';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#нетребуетсяP').click(()=>{cran.setttk = 'Не требуется';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	$('.add_dop_1 i').click(()=>{
		if (cran._3 != 'Ручное')
		{			
			document.getElementById('a3').style.display = 'inline-block';	
		} else {
			document.getElementById('a3').style.display = 'none';	
		}
		delete_doble('#option_1', $('#first_opt'));
		showOptions($('#first_opt'));
		postavka_rels();
		
				
	});
	$('#first_opt').on('click', 'li:not(".cat"), .cat>div.change_li', function () {
		var that = $(this);
		$('#option_1 .dop_parametr:last-child').before(()=>{
			let new_html = '<div class="dop_parametr"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
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
		},200);
		
		
	});

	$('.add_dop_2 i').click(()=>{
		if (cran._3 != 'Ручное')
		{
			calculate_tormoz(); // Тормоз на передвижение крана
			calculate_shit();  // Установить цену для щита
			calculate_stop(); // Установить цену для Аварийный стоп на передвижение
			document.getElementById('b3').style.display = 'inline-block';
			document.getElementById('b10').style.display = 'inline-block';
			document.getElementById('b11').style.display = 'inline-block';
			document.getElementById('b12').style.display = 'inline-block';
			document.getElementById('b13').style.display = 'inline-block';
			document.getElementById('b14').style.display = 'inline-block';
			
		} else {
			document.getElementById('b3').style.display = 'none';
			document.getElementById('b10').style.display = 'none';
			document.getElementById('b11').style.display = 'none';
			document.getElementById('b12').style.display = 'none';
			document.getElementById('b13').style.display = 'none';
			document.getElementById('b14').style.display = 'none';
		}
		delete_doble('#option_2', $('#second_opt'));
		showOptions($('#second_opt'));
		
		calculate_pokraska (); // Стоимость покраски
	});
	$('#second_opt').on('click', 'li:not(".cat"), .cat>div.change_li', function () {
		var that = $(this);		
		$(this).css('display', 'none');
		$('#option_2 .dop_parametr:last-child').before(()=>{
			if (that.attr('id') == 'b3') {
			var new_html = 	'<div class="dop_parametr"><span class="change_this_option pult_change">Изменить <i class="fa fa-pencil-square" aria-hidden="true"></i></span><img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/_3.3.jpg" alt="" style="width:200px"> \
								<h4>Подвесной пульт</h4> \
								<p><span class="opisanie_parametra">Входит в стоимость крана</span><br> \
								<span class="stoimost_parametra">Бесплатно</span><i class="id_bro">b3</i></p>';
			} else {
			var new_html = '<div class="dop_parametr"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
								<h4>'+ that.children().children().children('b.hz4').text() +'</h4> \
								<p><span class="opisanie_parametra">'+ that.children().children().children('.opisanie_parametra').text() +'</span><br> \
								<span class="stoimost_parametra">'+ that.children('.hiddened').text() +'</span><i class="id_bro">'+that.attr('id')+'</i></p>';
								console.log(that.attr('id'));
			}
			return new_html;
		});
		setTimeout(()=>{
			hideOptions();
			$('.cat').css('width', '20%');
			$('.cat').siblings('li').css('display', 'inline-block');
			$('.cat').children('div').css('display', 'none');
			$('#revers').css('display', 'none');
		},200);
		
		
	});

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
	pult_upravleniya_h2.innerText = 'Выберите пульт радиоуправления краном';
	pult_upravleniya_h2.style.marginBottom = '50px';
	pult_upravleniya.append(pult_upravleniya_h2);

	let pult_upravleniya_PULT = document.createElement('div'); // блок пульт
	pult_upravleniya_PULT.className = 'pult_upravleniya_PULT animated zoomInLeft'
	pult_upravleniya_PULT.style.marginBottom = '50px';
	pult_upravleniya.append(pult_upravleniya_PULT);
		let pult_upravleniya_PULT_img = document.createElement('img'); //Картинка радио пульта
			pult_upravleniya_PULT_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.5.jpg';
			pult_upravleniya_PULT_img.className = 'allimg change_on_PULT';
			pult_upravleniya_PULT.append(pult_upravleniya_PULT_img);
				pult_upravleniya_PULT_img.addEventListener('click', function () {
					creat_pult_model('Пульт');
					$('h4.change_on_PULT').css({'background-color':'#b5212e','color':'#FFFFFF'});					
					$('h4.change_on_JOY').css({'background-color':'#e4ded5','color':'##242526'});
				});
		let pult_upravleniya_PULT_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
			pult_upravleniya_PULT_h4.className = 'change_on_PULT';
			pult_upravleniya_PULT_h4.innerText = 'Пульт';
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
			pult_upravleniya_JOY_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.6.jpg';
			pult_upravleniya_JOY_img.className = 'allimg change_on_JOY';
			pult_upravleniya_JOY.append(pult_upravleniya_JOY_img);
				pult_upravleniya_JOY_img.addEventListener('click', function () {
					creat_pult_model();
					$('h4.change_on_JOY').css({'background-color':'#b5212e','color':'#FFFFFF'});
					$('h4.change_on_PULT').css({'background-color':'#e4ded5','color':'##242526'});
				});
		let pult_upravleniya_JOY_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
			pult_upravleniya_JOY_h4.className = 'change_on_JOY';
			pult_upravleniya_JOY_h4.innerText = 'Джойстик';
			pult_upravleniya_JOY.append(pult_upravleniya_JOY_h4);
				pult_upravleniya_JOY_h4.addEventListener('click', function () {
					creat_pult_model();
					$('h4.change_on_JOY').css({'background-color':'#b5212e','color':'#FFFFFF'});
					$('h4.change_on_PULT').css({'background-color':'#e4ded5','color':'##242526'});
				});
			

	
	$('html, body').animate({ 'scrollTop':'0px' }, 350)
	$('.zzz').after(pult_upravleniya);

	//////////////////////////////////////////////////////
	function creat_pult_model (pult_or_joy) {
		if ($('div').is('.pult_upravleniya_TELECRANE')) {return}
			easyscroll(380);
		let pult_upravleniya_TELECRANE = document.createElement('div'); // блок пульт
			pult_upravleniya_TELECRANE.className = 'pult_upravleniya_TELECRANE animated fadeInLeftBig'
			pult_upravleniya.append(pult_upravleniya_TELECRANE);
		let pult_upravleniya_TELECRANE_img = document.createElement('img'); //Картинка радио пульта
			pult_upravleniya_TELECRANE_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.7.jpg';
			pult_upravleniya_TELECRANE.style.marginLeft = '4%';
			pult_upravleniya_TELECRANE_img.className = 'allimg change_on_TELECRANE';
			pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_img);
				pult_upravleniya_TELECRANE_img.addEventListener('click', function () {
					pult_or_joy == 'Пульт' ? cran._3Type = 'Радиоуправление с пультом':cran._3Type = 'Радиоуправление с джойстиком';
					cran._3Type = cran._3Type + ' Telecrane (Тайвань)';
				});
		let pult_upravleniya_TELECRANE_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
			pult_upravleniya_TELECRANE_h4.className = 'change_on_TELECRANE';
			pult_upravleniya_TELECRANE_h4.innerText = 'Telecrane (Тайвань)';
			pult_upravleniya_TELECRANE.append(pult_upravleniya_TELECRANE_h4);
				pult_upravleniya_TELECRANE_h4.addEventListener('click', function () {
					pult_or_joy == 'Пульт' ? cran._3Type = 'Радиоуправление с пультом':cran._3Type = 'Радиоуправление с джойстиком';
					cran._3Type = cran._3Type + ' Telecrane (Тайвань)';
				});


		let pult_upravleniya_IKUSI = document.createElement('div'); // блок пульт
			pult_upravleniya_IKUSI.className = 'pult_upravleniya_IKUSI animated zoomIn'
			pult_upravleniya.append(pult_upravleniya_IKUSI);
		let pult_upravleniya_IKUSI_img = document.createElement('img'); //Картинка радио пульта
			pult_upravleniya_IKUSI_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.8.jpg';
			pult_upravleniya_IKUSI_img.className = 'allimg change_on_IKUSI';
			pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_img);
				pult_upravleniya_IKUSI_img.addEventListener('click', function () {
					pult_or_joy == 'Пульт' ? cran._3Type = 'Радиоуправление с пультом':cran._3Type = 'Радиоуправление с джойстиком';
					cran._3Type = cran._3Type + ' Ikusi (Испания)';
				});
		let pult_upravleniya_IKUSI_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
			pult_upravleniya_IKUSI_h4.className = 'change_on_IKUSI';
			pult_upravleniya_IKUSI_h4.innerText = 'Ikusi (Испания)';
			pult_upravleniya_IKUSI.append(pult_upravleniya_IKUSI_h4);
				pult_upravleniya_IKUSI_h4.addEventListener('click', function () {
					pult_or_joy == 'Пульт' ? cran._3Type = 'Радиоуправление с пультом':cran._3Type = 'Радиоуправление с джойстиком';
					cran._3Type = cran._3Type + ' Ikusi (Испания)';
				});


		let pult_upravleniya_HBRRadiomatic = document.createElement('div'); // блок пульт
			pult_upravleniya_HBRRadiomatic.className = 'pult_upravleniya_HBRRadiomatic animated fadeInRightBig'
			pult_upravleniya.append(pult_upravleniya_HBRRadiomatic);
		let pult_upravleniya_HBRRadiomatic_img = document.createElement('img'); //Картинка радио пульта
			pult_upravleniya_HBRRadiomatic_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.9.jpg';
			pult_upravleniya_HBRRadiomatic_img.className = 'allimg change_on_HBRRadiomatic';
			pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_img);
				pult_upravleniya_HBRRadiomatic_img.addEventListener('click', function () {
					pult_or_joy == 'Пульт' ? cran._3Type = 'Радиоуправление с пультом':cran._3Type = 'Радиоуправление с джойстиком';
					cran._3Type = cran._3Type + ' HBC-Radiomatic (Германия)';
				});
		let pult_upravleniya_HBRRadiomatic_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
			pult_upravleniya_HBRRadiomatic_h4.className = 'change_on_HBRRadiomatic';
			pult_upravleniya_HBRRadiomatic_h4.innerText = 'HBC - Radiomatic (Германия)';
			pult_upravleniya_HBRRadiomatic.append(pult_upravleniya_HBRRadiomatic_h4);
				pult_upravleniya_HBRRadiomatic_h4.addEventListener('click', function () {
					pult_or_joy == 'Пульт' ? cran._3Type = 'Радиоуправление с пультом':cran._3Type = 'Радиоуправление с джойстиком';
					cran._3Type = cran._3Type + ' HBC-Radiomatic (Германия)';
				});
	}

})

$('body').on('click', '#closePult', function(event) {
	console.log('click')
	$(this).parent('.pultslider').detach();
	$('html, body').animate({ 'scrollTop':'900px' }, 400)
})
$('body').on('click', '.change_on_TELECRANE, .change_on_IKUSI, .change_on_HBRRadiomatic', function(event) {
	console.log('click')
	$(this).parent().parent('.pultslider').detach();
	$('.pult_change').parent('.dop_parametr').detach();
	cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? price_crane_electro_upravleniya() : false;
	$('html, body').animate({ 'scrollTop':'900px' }, 400);
})
/************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																						Функции для изменения мотор-редуктора
*																																	
*																									ДОП ОПЦИИ
*
*
*
*
*
*
***********************************************************************************************************************************************************************************************************************************/
$('.dop_menu_open').on('click', '.motor_reductor_change', function(event) {

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

	let motor_reductor_8_2 = document.createElement('div'); // блок пульт
	motor_reductor_8_2.className = 'motor_reductor_8_2 animated zoomInLeft'
	motor_reductor_8_2.style.marginBottom = '50px';
	motor_reductor.append(motor_reductor_8_2);
		let motor_reductor_8_2_img = document.createElement('img'); //Картинка радио пульта
			motor_reductor_8_2_img.src = location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/3.5.jpg';
			motor_reductor_8_2_img.className = 'allimg change_on_8_2';
			motor_reductor_8_2.append(motor_reductor_8_2_img);
				motor_reductor_8_2_img.addEventListener('click', function () {
					console.log('8.2')
				});
		let motor_reductor_8_2_h4 = document.createElement('h4'); // подпись под картнкой / КНОПКА
			motor_reductor_8_2_h4.className = 'change_on_8_2';
			motor_reductor_8_2_h4.innerText = 'Мотор-редуктор 8.2';
			motor_reductor_8_2.append(motor_reductor_8_2_h4);
				motor_reductor_8_2_h4.addEventListener('click', function () {
					console.log('8.2')
				});

	$('html, body').animate({ 'scrollTop':'0px' }, 350)
	$('.zzz').after(motor_reductor);
})

$('body').on('click', '#closeMotorReductor', function(event) {
	console.log('click')
	$(this).parent('.motor_reductor_slider').detach();
	$('html, body').animate({ 'scrollTop':'900px' }, 400)
})
$('body').on('click', '.change_on_8_2', function(event) {
	console.log('click')
	$(this).parent().parent('.motor_reductor_slider').detach();
	$('.motor_reductor_change').parent('.dop_parametr').detach();
	cran._3Type.search(/пультом/i) != -1 || cran._3Type.search(/джойстиком/i) != -1 ? price_crane_electro_upravleniya() : false;
	$('html, body').animate({ 'scrollTop':'900px' }, 400);
})
/************************************************************************************************************************************************************************************************************************************/
//Удалить опцию или изменить
	$('.dop_menu_open').on('click', '.del_this_option',function(event) {
		if ($(this).hasClass('return_pult_default')) {
			$('#option_2 .dop_parametr:last-child').before(()=>{
			let new_html = '<div class="dop_parametr"> \
								<span class="change_this_option pult_change">Изменить \
									<i class="fa fa-pencil-square" aria-hidden="true"></i> \
								</span> \
								<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/_3.3.jpg" alt="" style="width:200px"> \
								<h4>Подвесной пульт</h4> \
								<p> \
									<span class="opisanie_parametra">Входит в стоимость крана</span> \
										<br> \
									<span class="stoimost_parametra">Бесплатно</span><i class="id_bro">b3</i> \
								</p>';
			return new_html;
		});
		}
		$(this).parent().detach();
	});

$('#first_opt, #second_opt').on('click', '.cat', function(event) {
	$(this).siblings('li').css('display', 'none');
	$(this).css('width', '100%');
	$(this).children('div').css('display', 'inline-block');
	$('#revers').css('display', 'block');
	delete_doble('#option_1', $('#first_opt'));
	delete_doble('#option_2', $('#second_opt'));
});

$('#revers').on('click', function() {
	$('.cat').css('width', '20%');
	$('.cat').siblings('li').css('display', 'inline-block');
	$('.cat').children('div').css('display', 'none');
	$('#revers').css('display', 'none');
	if (cran._3 == 'Ручное')
		{
			document.getElementById('a3').style.display = 'none';
			document.getElementById('b3').style.display = 'none';
			document.getElementById('b10').style.display = 'none';
			document.getElementById('b11').style.display = 'none';
			document.getElementById('b12').style.display = 'none';
			document.getElementById('b13').style.display = 'none';
			document.getElementById('b14').style.display = 'none';
		}
	delete_doble('#option_1', $('#first_opt'));
	delete_doble('#option_2', $('#second_opt'));
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

function delete_doble (context /* string: #option_1, #option_2 */, container /* [$(#first_opt), $(#second_opt)]*/) {
	var hidden_elements;
	$(context+' > .dop_parametr:not(:last-child) >p >i.id_bro').each(function(index, el) {
		hidden_elements  = $(this).text();
		container.children().children('#'+hidden_elements).css('display', 'none');
		container.children().children('.cat').children('#'+hidden_elements).css('display', 'none');
	});
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


	$('#close').click(()=>{
		hideChange();
		$('.cat').css('width', '20%');
		$('.cat').siblings('li').css('display', 'inline-block');
		$('.cat').children('div').css('display', 'none');
		if (cran._3 == 'Ручное')
		{
			document.getElementById('a3').style.display = 'none';
		}	
	});
	$('#close2').click(()=>{
		hideOptions();
		$('.cat').css('width', '20%');
		$('.cat').siblings('li').css('display', 'inline-block');
		$('.cat').children('div').css('display', 'none');
		if (cran._3 == 'Ручное')
		{
			document.getElementById('b3').style.display = 'none';
			document.getElementById('b10').style.display = 'none';
			document.getElementById('b11').style.display = 'none';
			document.getElementById('b12').style.display = 'none';
			document.getElementById('b13').style.display = 'none';
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
	function calculate_oporniy_crane(argument) {	
			//////////////
				var data_cran = { action: 'calc_cran', _gp:cran.gp, _shir:cran.paramsO.shpO, _upravl:cran._3 }
				$.post( calc_ajaxurl.url, data_cran, function(response) {
					cran.summa = response;
					$('#summa').text(String(cran.summa).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
				});
				var data_sroki_cran = { action: 'calc_sroki', _gp:cran.gp, _shir:cran.paramsO.shpO, _upravl:cran._3 }
				$.post( calc_ajaxurl.url, data_sroki_cran, function(response) {
					$('#sroki').text(response);
				});
				if (tal.summa > 0 && ($('#option_2').children('.dop_parametr').hasClass('tal_for_search'))) {
					tal.gp = cran.gp;
					calculate_tal();
					$('.tal_for_search').remove();
				}
			//////////////
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
						<span class="stoimost_parametra">'+ String(Number(tal.summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span> \
					</p>');
				});
			//////////////
	}

	function calculate_shit () {
			let shit =
				cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000 ? {id:29} :
					cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000 ? {id:30} :
						cran.gp == 12500 || cran.gp == 16000 ? {id:31} : false;
			//////////////
				var data_shit = { action: 'calc_shit', _shit_id:shit.id }
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
			let tormoz =
				cran.motor.search(/Червячная передача ABLE/)/* 9.1 */ != -1 || cran.motor.search(/Циллиндрическая передача Европривод/)/* 9.5 */ != -1 && ( cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000 ) ? {id:36} :
						cran.motor.search(/Червячная передача NORD/)/* 9.2 */ != -1 || cran.motor.search(/Циллиндрическая передача NORD/)/* 9.4 */ != -1 && ( cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000 ) ? {id:37} :
								cran.motor.search(/Циллиндрическая передача Балкан Эхо/)/* 9.3 */ != -1 && ( cran.gp == 500 || cran.gp == 1000 || cran.gp == 2000 || cran.gp == 3200 || cran.gp == 5000 ) ? {id:38} :

				cran.motor.search(/Червячная передача ABLE/)/* 9.1 */ != -1 || cran.motor.search(/Циллиндрическая передача Европривод/)/* 9.5 */ != -1 && ( cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000 || cran.gp == 12500 || cran.gp == 16000 ) ? {id:39} :
						cran.motor.search(/Червячная передача NORD/)/* 9.2 */ != -1 || cran.motor.search(/Циллиндрическая передача NORD/)/* 9.4 */ != -1 && ( cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000 || cran.gp == 12500 || cran.gp == 16000 ) ? {id:40} :
								cran.motor.search(/Циллиндрическая передача Балкан Эхо/)/* 9.3 */ != -1 && ( cran.gp == 6300 || cran.gp == 8000 || cran.gp == 10000 || cran.gp == 12500 || cran.gp == 16000 ) ? {id:41} : false;
				/////////////
				var data_tormoz = { action: 'calc_tormoz', _tormoz_id:tormoz.id }
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


	function price_crane_electro_upravleniya () {
			//////////////
			let price = 
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					cran.code_of_motor == '8.3') ? {id:1, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					cran.code_of_motor == '8.2' || '8.4') ? {id:2, img:'3.7'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					cran.code_of_motor == '8.3') ? {id:3, img:'3.7'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					cran.code_of_motor == '8.2' || '8.4') ? {id:4, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/Telecrane/i) != -1) && (
					cran.code_of_motor == '8.3' || '8.2' || '8.4') ? {id:5, img:'3.7'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					cran.code_of_motor == '8.3') ? {id:6, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					cran.code_of_motor == '8.2' || '8.4') ? {id:7, img:'3.8'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					cran.code_of_motor == '8.3') ? {id:8, img:'3.8'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					cran.code_of_motor == '8.2' || '8.4') ? {id:9, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/Ikusi/i) != -1) && (
					cran.code_of_motor == '8.3' || '8.2' || '8.4') ? {id:10, img:'3.8'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					cran.code_of_motor == '8.3') ? {id:11, img:'3.9'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					cran.code_of_motor == '8.2' || '8.4') ? {id:12, img:'3.9'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					cran.code_of_motor == '8.3') ? {id:13, img:'3.9'}:false)
				||
				(( cran._2 != 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) == -1 && cran._2.search(/Взрывобезопасное/i) != -1 ) && (cran._3Type.search(/пультом/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					cran.code_of_motor == '8.2' || '8.4') ? {id:14, img:'3.9'}:false)
				||
				(( cran._2 == 'Общепромышленное' || cran._2.search(/Пожаробезопасное/i) != -1 && cran._2.search(/Взрывобезопасное/i) == -1 ) && (cran._3Type.search(/джойстиком/i) != -1 && cran._3Type.search(/HBC/i) != -1) && (
					cran.code_of_motor == '8.3' || '8.2' || '8.4') ? {id:15, img:'3.9'}:false)
				||
				0;
			if (price.id == 0) return false;
				var data_crane_electro_upravleniya = { action: 'calc_crane_electro_upravleniya', _variant_id:price.id }
				$.post( calc_ajaxurl.url, data_crane_electro_upravleniya, function (response) {				
					$('#option_2 .dop_parametr:last-child').before(()=>{
						let new_html = '<div class="dop_parametr"> \
											<span class="del_this_option return_pult_default"> \
												<i class="fa fa-trash-o" aria-hidden="true"></i> \
											</span> \
											<img src="'+ location.origin +'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'+ price.img +'.jpg" alt="" style="width:200px"> \
											<h4>Управление каном</h4> \
											<p> \
												<span class="opisanie_parametra">'+String(cran._3Type)+'</span> \
													<br> \
												<span class="stoimost_parametra">'+ String(Number(response).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span><i class="id_bro">b3</i> \
											</p>';
						return new_html;
					});
					$('#option_click2').removeClass('head_dop_menu').addClass('head_dop_menu_open');
					$('#option_2').removeClass('dop_menu').addClass('dop_menu_open');
				});
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

$('#a3').on('click', '.tokoprovod', function(event) {
	console.log($(this));
	var stoim = $(this).children().children().children('.opisanie_parametra').text();
	console.log(stoim);
	stoim = stoim.match(/\d+/g);
	stoim = stoim[0];
	{
		var summa = stoim * (cran.paramsO.dpO/1000);
		$(this).children('.hiddened').text(String(Number(summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб');
	}
});	




















function easyscroll(scrollTo) { $('html, body').animate({ scrollTop: (document.body.scrollTop + scrollTo) + 'px' }, 700) }
});