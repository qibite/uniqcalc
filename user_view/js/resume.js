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
		$('.savetemper').click(()=>{$('#Otr').text('От '+cran.temper[0]+' до '+cran.temper[1]);setTimeout(()=>{hideChange()},300)})

	$('#razmeshO').click(()=>{showChange($('#размещение'))})
		$('#Улица').click(()=>{cran.climat = 'Расположение на открытой местности';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});
		$('#Навес').click(()=>{cran.climat = 'Расположение под навесом';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});
		$('#Помещение').click(()=>{cran.climat = 'Расположение в помещении';setTimeout(()=>{hideChange()},300);$('#Ocu').text(cran.climat)});

	$('#type_uprO').click(()=>{showChange($('#тип_управления'))})
		$('#Ручное').click(()=>{cran._3 = 'Ручное';cran._3Type = 'Отсутствует при ручном управлении';setTimeout(()=>{hideChange()},300);$('#Otc').text(cran._3);$('#Ouc').text(cran._3Type);
			$('#gpO > ul li:nth-child(9)').css('display','none');$('#gpO > ul li:nth-child(10)').css('display','none');
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			$('#Ogp').text(cran.gp);
			calculate_oporniy_crane();
		});
		$('#Электро').click(()=>{cran._3 = 'Электро';setTimeout(()=>{showChange($('#способ_управления'))},100);$('#Otc').text(cran._3);
			$('#gpO > ul li:nth-child(9)').css('display','inline-block');$('#gpO > ul li:nth-child(10)').css('display','inline-block')});

	$('#sposob_uprO').click(()=>{showChange($('#способ_управления'))})
		$('#Пульт_подвесной').click(()=>{cran._3 = 'Электро';cran._3Type = 'Подвесной пульт';setTimeout(()=>{hideChange()},300);$('#Ouc').text(cran._3Type);$('#Otc').text(cran._3);calculate_oporniy_crane()});
		$('#Радио_управление').click(()=>{setTimeout(()=>{showChange($('#тип_радио'))}, 300)});
		$('sposob_uprO').click(()=>{showChange($('#тип_радио'))});
			$('#Пульт').click(()=>{cran._3Type = 'Управление с пульта';setTimeout(()=>{showChange($('#производитель_пульта'))}, 300)});
			$('#Джойстик').click(()=>{cran._3Type = 'Джойстик';setTimeout(()=>{showChange($('#производитель_пульта'))}, 300)});
				$('#telecrane').click(()=>{cran._3 = 'Электро';cran._3Type = cran._3Type + ' Telecrane (Тайвань)';setTimeout(()=>{hideChange()},300);$('#Ouc').text(cran._3Type);$('#Otc').text(cran._3);calculate_oporniy_crane()});
				$('#ikusi').click(()=>{cran._3 = 'Электро';cran._3Type = cran._3Type + ' Ikusi (Испания)';setTimeout(()=>{hideChange()},300);$('#Ouc').text(cran._3Type);$('#Otc').text(cran._3);calculate_oporniy_crane()});
				$('#HBC').click(()=>{cran._3 = 'Электро';cran._3Type = cran._3Type + ' HBC-Radiomatic (Германия)';setTimeout(()=>{hideChange()},300);$('#Ouc').text(cran._3Type);$('#Otc').text(cran._3);calculate_oporniy_crane()});
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


	$('#cOttk').click(()=>{showChange($('#тип_токопровода'))});
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
		$('.savetemperP').click(()=>{$('#Ptr').text('От '+cran.temper[0]+' до '+cran.temper[1]);setTimeout(()=>{hideChange()},300)})

	$('#razmeshP').click(()=>{showChange($('#размещениеP'))})
		$('#УлицаP').click(()=>{cran.climat = 'Расположение на открытой местности';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat)});
		$('#НавесP').click(()=>{cran.climat = 'Расположение под навесом';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat)});
		$('#ПомещениеP').click(()=>{cran.climat = 'Расположение в помещении';setTimeout(()=>{hideChange()},300);$('#Pcu').text(cran.climat)});

	$('#type_uprP').click(()=>{showChange($('#тип_управленияP'))})
		$('#РучноеP').click(()=>{cran._3 = 'Ручное';cran._3Type = 'Отсутствует при ручном управлении';setTimeout(()=>{hideChange()},300);$('#Ptc').text(cran._3);$('#Puc').text(cran._3Type);
			$('#gpP > ul li:nth-child(9)').css('display','none');$('#gpP > ul li:nth-child(10)').css('display','none');
			if (cran.gp > 10000) {cran.gp = 10000; alert('Грузоподъемность была уменьшена до 10000 кг для крана с ручным управлением!')}
			$('#Pgp').text(cran.gp);
	});
		$('#ЭлектроP').click(()=>{cran._3 = 'Электро';setTimeout(()=>{showChange($('#способ_управленияP'))},100);$('#Ptc').text(cran._3);
			$('#gpP > ul li:nth-child(9)').css('display','inline-block');$('#gpP > ul li:nth-child(10)').css('display','inline-block')
	});

	$('#sposob_uprP').click(()=>{showChange($('#способ_управленияP'))})
		$('#Пульт_подвеснойP').click(()=>{cran._3 = 'Электро';cran._3Type = 'Подвесной пульт';setTimeout(()=>{hideChange()},300);$('#Puc').text(cran._3Type);$('#Ptc').text(cran._3)});
		$('#Радио_управлениеP').click(()=>{setTimeout(()=>{showChange($('#тип_радиоP'))}, 300)});
		$('sposob_uprP').click(()=>{showChange($('#тип_радиоP'))});
			$('#ПультP').click(()=>{cran._3Type = 'Управление с пульта';setTimeout(()=>{showChange($('#производитель_пультаP'))}, 300)});
			$('#ДжойстикP').click(()=>{cran._3Type = 'Джойстик';setTimeout(()=>{showChange($('#производитель_пультаP'))}, 300)});
				$('#telecraneP').click(()=>{cran._3 = 'Электро';cran._3Type = cran._3Type + ' Telecrane (Тайвань)';setTimeout(()=>{hideChange()},300);$('#Puc').text(cran._3Type);$('#Ptc').text(cran._3)});
				$('#ikusiP').click(()=>{cran._3 = 'Электро';cran._3Type = cran._3Type + ' Ikusi (Испания)';setTimeout(()=>{hideChange()},300);$('#Puc').text(cran._3Type);$('#Ptc').text(cran._3)});
				$('#HBCP').click(()=>{cran._3 = 'Электро';cran._3Type = cran._3Type + ' HBC-Radiomatic (Германия)';setTimeout(()=>{hideChange()},300);$('#Puc').text(cran._3Type);$('#Ptc').text(cran._3)});
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


	$('#cPttk').click(()=>{showChange($('#тип_токопроводаP'))});
		$('#кскP').click(()=>{cran.setttk = 'Кабельный с кольцами';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#кстP').click(()=>{cran.setttk = 'Кабельный с тележками';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#фP').click(()=>{cran.setttk = 'Фестонный (с-профиль)';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#отP').click(()=>{cran.setttk = 'Откртые троллеи';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#зтP').click(()=>{cran.setttk = 'Закрытые троллеи';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});
		$('#нетребуетсяP').click(()=>{cran.setttk = 'Не требуется';setTimeout(()=>{hideChange()},300);$('#Pttk').text(cran.ttk)});


	$('#cOmotor').click(()=>{showChange($('#motorO'))});
		$('#м1O').click(()=>{cran.setmotor = 'Червячная передача  ABLE (Италия)';setTimeout(()=>{hideChange()},300);$('#Omotor').text(cran.motor)});
		$('#м2O').click(()=>{cran.setmotor = 'Червячная передача  NORD (Германия)';setTimeout(()=>{hideChange()},300);$('#Omotor').text(cran.motor)});
		$('#м3O').click(()=>{cran.setmotor = 'Циллиндрическая передача  Балкан Эхо (Болгария)';setTimeout(()=>{hideChange()},300);$('#Omotor').text(cran.motor)});
		$('#м4O').click(()=>{cran.setmotor = 'Циллиндрическая передача  NORD (Германия)';setTimeout(()=>{hideChange()},300);$('#Omotor').text(cran.motor)});
		$('#м5O').click(()=>{cran.setmotor = 'Циллиндрическая передача  Европривод (Россия)';setTimeout(()=>{hideChange()},300);$('#Omotor').text(cran.motor)});
	$('#cPmotor').click(()=>{showChange($('#motorP'))});
		$('#м1P').click(()=>{cran.setmotor = 'Червячная передача  ABLE (Италия)';setTimeout(()=>{hideChange()},300);$('#Pmotor').text(cran.motor)});
		$('#м2P').click(()=>{cran.setmotor = 'Червячная передача  NORD (Германия)';setTimeout(()=>{hideChange()},300);$('#Pmotor').text(cran.motor)});
		$('#м3P').click(()=>{cran.setmotor = 'Циллиндрическая передача  Балкан Эхо (Болгария)';setTimeout(()=>{hideChange()},300);$('#Pmotor').text(cran.motor)});
		$('#м4P').click(()=>{cran.setmotor = 'Циллиндрическая передача  NORD (Германия)';setTimeout(()=>{hideChange()},300);$('#Pmotor').text(cran.motor)});
		$('#м5P').click(()=>{cran.setmotor = 'Циллиндрическая передача  Европривод (Россия)';setTimeout(()=>{hideChange()},300);$('#Pmotor').text(cran.motor)});

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
			
		} else {
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
			let new_html = '<div class="dop_parametr"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'+ that.children().children('img').attr('src') +'" alt="" style="width:200px"> \
								<h4>'+ that.children().children().children('b.hz4').text() +'</h4> \
								<p><span class="opisanie_parametra">'+ that.children().children().children('.opisanie_parametra').text() +'</span><br> \
								<span class="stoimost_parametra">'+ that.children('.hiddened').text() +'</span><i class="id_bro">'+that.attr('id')+'</i></p>';
								console.log(that.attr('id'));
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





//Удалить опцию
	$('.dop_menu_open').on('click', '.del_this_option',function(event) {
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
*					ФУНКЦИЯ УДАЛЕНИЯ ЭЛЕМЕНТОВ ИЗ БЛОКА ВЫБОРА ОПЦИЙ, ТОКОПРОВОДА И Т.П.
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
				if (tal.summa > 0) {
					calculate_tal();
				}
			//////////////
	}
	function calculate_tal (argument) {	
			//////////////
				var data_tal = { action: 'calc_tal', _upravlenie:tal.upravlenie, _type:tal.type, _country:tal.country, _visota:tal.visota, _ispolnenie:tal.ispolnnie, _gp:tal.gp }
				$.post( calc_ajaxurl.url, data_tal, function(response) {
					tal.summa = response;
					$('#option_2 .dop_parametr:last-child').before('<div class="dop_parametr"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="# \
			'+ 'ssasa' +'" alt="" style="width:230px"><h4>Таль '
			+ tal.country +'</h4> \
			<p> \
				<span class="stoimost_parametra">'+ String(Number(tal.summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') +' руб</span> \
			</p>');
					//$('#summa').text(String(Number(tal.summa).toFixed(2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
					//alert(String(Number(tal.summa).toFixed(0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
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



/*******************************************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																																	Функции для раздела
*																																	
*																																	ПУТИ И ТОКОПРОВОД
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
		var rels =	{ gp:cran.gp, shirinamp:cran.paramsO.shpO, upravlenie:cran._3 }
	}
	/////////////
	var data_rels = { action: 'postavka_rels', _rels_gp:rels.gp, _rels_shirinamp:rels.shirinamp, _rels_upravlenie:rels.upravlenie, rels_url_img:location.origin+'/wp-content/plugins/uniqcalc/user_view/construct_calc/' }
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





















});