<?php 
$url_this = plugin_dir_url( __FILE__ );
$url = $_SERVER['PHP_SELF'];
global $wpdb;
$wpdb->show_errors();
?>
<link rel="stylesheet" href="<?=$url_this;?>/css/style.css">
<section class="wrap">
	<h1>Управление калькулятором</h1>
<!--<a href="#"><?=plugin_dir_url( __FILE__ )?></a>
<button type="" id="add_open">Добавить</button>-->
<table class="tabla">
<caption class="close_table"><span class="close">Открыть</span>Подвесные краны</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Ширина между путями</th>
			<th>Устанавливаемый рельс</th>
			<th>Тип управления</th>
			<th>Сроки изготовления</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
		$podvesnie_crani_result = $wpdb->get_results(
		"SELECT id, gp, shirina_mezh_putami, rels, upravlenie, sroki, price 
		FROM $podvesnie_crani");
		if ($podvesnie_crani_result) {
			foreach ($podvesnie_crani_result as $cran) {
				$id = $cran->id;
				$gp = $cran->gp;
				$shirina_mezh_putami = $cran->shirina_mezh_putami;
				$rels = $cran->rels;
				$upravlenie = $cran->upravlenie;
				$sroki = $cran->sroki;
				$price = $cran->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp} кг</td>
						<td>до {$shirina_mezh_putami} мм включительно</td>
						<td>- {$rels} -</td>
						<td>{$upravlenie}</td>
						<td>{$sroki} рабочих дней</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$podvesnie_crani'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Подвесные краны' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>
<table class="tabla">
<caption class="close_table"><span class="close">Открыть</span>Опорные краны</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Ширина между путями</th>
			<th>Устанавливаемый рельс</th>
			<th>Тип управления</th>
			<th>Сроки изготовления</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$opornie_crani = $wpdb->prefix . 'opornie_crani';
		$opornie_crani_result = $wpdb->get_results(
		"SELECT id, gp, shirina_mezh_putami, rels, upravlenie, sroki, price 
		FROM $opornie_crani");
		if ($opornie_crani_result) {
			foreach ($opornie_crani_result as $cran) {
				$id = $cran->id;
				$gp = $cran->gp;
				$shirina_mezh_putami = $cran->shirina_mezh_putami;
				$rels = $cran->rels;
				$upravlenie = $cran->upravlenie;
				$sroki = $cran->sroki;
				$price = $cran->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp} кг</td>
						<td>до {$shirina_mezh_putami} мм включительно</td>
						<td>- {$rels} -</td>
						<td>{$upravlenie}</td>
						<td>{$sroki} рабочих дней</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$opornie_crani'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Опорные краны' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>
<table class="tabla">
<caption class="close_table"><span class="close">Открыть</span>Тали электрические</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Высота до - перекрытий / путей</th>
			<th>Страна производитель</th>
			<th>Тип тали</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
	<?php
		$electro_tali = $wpdb->prefix . 'electro_tali';
		$electro_tali_result = $wpdb->get_results(
		"SELECT id, gp, visota, strana, type_tali, price 
		FROM $electro_tali");
		if ($electro_tali_result) {
			foreach ($electro_tali_result as $tal) {
				$id = $tal->id;
				$gp = $tal->gp;
				$visota = $tal->visota;
				$strana = $tal->strana;
				$type_tali = $tal->type_tali;
				$price = $tal->price;
				$strana=='Болгария'?$valuta='&euro;':$valuta='&#8381;';
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp} кг</td>
						<td>до {$visota} мм включительно</td>
						<td>{$strana}</td>
						<td>{$type_tali}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> {$valuta}
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$electro_tali'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Тали электрические' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>
<table class="tabla">
<caption class="close_table"><span class="close">Открыть</span>Тали ручные</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Высота до - перекрытий / путей</th>
			<th>Страна производитель</th>
			<th>Тип тали</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$ruchnie_tali = $wpdb->prefix . 'ruchnie_tali';
		$ruchnie_tali_result = $wpdb->get_results(
		"SELECT id, gp, visota, strana, ispolnenie, price 
		FROM $ruchnie_tali");
		if ($ruchnie_tali_result) {
			foreach ($ruchnie_tali_result as $tal) {
				$id = $tal->id;
				$gp = $tal->gp;
				$visota = $tal->visota;
				$strana = $tal->strana;
				$ispolnenie = $tal->ispolnenie;
				$price = $tal->price;
				$strana=='Болгария'?$valuta='&euro;':$valuta='&#8381;';
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp} кг</td>
						<td>до {$visota} мм включительно</td>
						<td>{$strana}</td>
						<td>{$ispolnenie}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> {$valuta}
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$ruchnie_tali'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Тали ручные' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:right">
<caption class="close_table"><span class="close">Открыть</span>Монтаж рельса</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Рельс</th>
			<th>Цена за 1м</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$montazh_rels = $wpdb->prefix . 'montazh_rels';
		$montazh_rels_result = $wpdb->get_results(
		"SELECT id, type, price FROM $montazh_rels");
		if ($montazh_rels_result) {
			foreach ($montazh_rels_result as $rels) {
				$id = $rels->id;
				$type = $rels->type;
				$price = $rels->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$type}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$montazh_rels'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Монтаж рельса' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:left">
<caption class="close_table"><span class="close">Открыть</span>Монтаж токоподвода</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Токоподвод</th>
			<th>Цена за 1м</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$montazh_provod = $wpdb->prefix . 'montazh_provod';
		$montazh_provod_result = $wpdb->get_results(
		"SELECT id, type, price FROM $montazh_provod");
		if ($montazh_provod_result) {
			foreach ($montazh_provod_result as $provod) {
				$id = $provod->id;
				$type = $provod->type;
				$price = $provod->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$type}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$montazh_provod'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Монтаж токоподвода' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:right">
<caption class="close_table"><span class="close">Открыть</span>Поставка рельса</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Рельс</th>
			<th>Цена за 1м</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$stoimost_rels = $wpdb->prefix . 'stoimost_rels';
		$stoimost_rels_result = $wpdb->get_results(
		"SELECT id, type, price FROM $stoimost_rels");
		if ($stoimost_rels_result) {
			foreach ($stoimost_rels_result as $rels) {
				$id = $rels->id;
				$type = $rels->type;
				$price = $rels->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$type}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$stoimost_rels'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Монтаж рельса' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:left">
<caption class="close_table"><span class="close">Открыть</span>Поставка токоподвода</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Токоподвод</th>
			<th>Цена за 1м</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$stoimost_provod = $wpdb->prefix . 'stoimost_provod';
		$stoimost_provod_result = $wpdb->get_results(
		"SELECT id, gp, type, price FROM $stoimost_provod");
		if ($stoimost_provod_result) {
			foreach ($stoimost_provod_result as $provod) {
				$id = $provod->id;
				$gp = $provod->gp;
				$type = $provod->type;
				$price = $provod->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp}</td>
						<td>{$type}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$stoimost_provod'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Поставка токоподвода' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:left">
<caption class="close_table"><span class="close">Открыть</span>Монтаж кран - балок с ручным управлением</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Ширина между путями</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$montazh_ruchnih_cran = $wpdb->prefix . 'montazh_ruchnih_cran';
		$montazh_ruchnih_cran_result = $wpdb->get_results(
		"SELECT id, gp, shirina_mezh_putami, price FROM $montazh_ruchnih_cran");
		if ($montazh_ruchnih_cran_result) {
			foreach ($montazh_ruchnih_cran_result as $rels) {
				$id = $rels->id;
				if ($rels->shirina_mezh_putami < 18001) {
					$shirina_mezh_putami = 'до '.$rels->shirina_mezh_putami.' мм включительно';
				} else $shirina_mezh_putami = 'свыше '.($rels->shirina_mezh_putami - 1) .' мм';
				$gp = $rels->gp;;
				$price = $rels->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp}</td>
						<td>{$shirina_mezh_putami}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$montazh_ruchnih_cran'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Монтаж кран - балок с ручным управлением' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:right">
<caption class="close_table"><span class="close">Открыть</span>Монтаж кран - балок с электро управлением</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Ширина между путями</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$montazh_electro_cran = $wpdb->prefix . 'montazh_electro_cran';
		$montazh_electro_cran_result = $wpdb->get_results(
		"SELECT id, gp, shirina_mezh_putami, price FROM $montazh_electro_cran");
		if ($montazh_electro_cran_result) {
			foreach ($montazh_electro_cran_result as $rels) {
				$id = $rels->id;
				if ($rels->shirina_mezh_putami < 18001) {
					$shirina_mezh_putami = 'до '.$rels->shirina_mezh_putami.' мм включительно';
				} else $shirina_mezh_putami = 'свыше '.($rels->shirina_mezh_putami - 1) .' мм';
				$gp = $rels->gp;
				$price = $rels->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp}</td>
						<td>{$shirina_mezh_putami}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$montazh_electro_cran'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Монтаж кран - балок с ручным управлением' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:left">
<caption class="close_table"><span class="close">Открыть</span>Доставка кран - балок</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Расстояние</th>
			<th>Общий L крана</th>
			<th>Вид конструкции</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$dostavka_cranbalok = $wpdb->prefix . 'dostavka_cranbalok';
		$dostavka_cranbalok_result = $wpdb->get_results(
		"SELECT id, rasstoyanie, obshiyL, type, price FROM $dostavka_cranbalok");
		if ($dostavka_cranbalok_result) {
			foreach ($dostavka_cranbalok_result as $dostavka) {
				$id = $dostavka->id;
				$rasstoyanie = $dostavka->rasstoyanie;
				if ($rasstoyanie == 0) {
								$rasstoyanie = 'Москва';
				} else $rasstoyanie = 'до '.$rasstoyanie.' км включительно';
				$obshiyL = $dostavka->obshiyL;
				if ($dostavka->obshiyL < 12001) {
					$obshiyL = 'до '.$dostavka->obshiyL.' мм включительно';
				} else $obshiyL = 'свыше '.($dostavka->obshiyL - 1) .' мм';
				$type = $dostavka->type;
				$price = $dostavka->price;
				$price = $price/100;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$rasstoyanie} км</td>
						<td>{$obshiyL}</td>
						<td>{$type}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$dostavka_cranbalok'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' step='0.1' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Монтаж кран - балок с ручным управлением' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:right">
<caption class="close_table"><span class="close">Открыть</span>Стоимость проезда</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Проезд</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$km_viezd = $wpdb->prefix . 'km_viezd';
		$km_viezd_result = $wpdb->get_results(
		"SELECT id, type, price FROM $km_viezd");
		if ($km_viezd_result) {
			foreach ($km_viezd_result as $rels) {
				$id = $rels->id;
				$type = $rels->type;
				if ($type > 3000) {
					$type = 'свыше '.($type -1).' км (за 1 км)';
				} elseif ($type == 'Проживание') {
					$type = 'Проживание за одни сутки';
				} elseif ($type == 'Выезд эксперта') {
					$type = 'Выезд эксперта';
				} elseif ($type == 0) {
					$type = 'Москва';
				}
				else $type = 'до '.$type.' км включительно (за 1 км)';
				$price = $rels->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$type}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$km_viezd'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Стоимость проезда' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:left">
<caption class="close_table"><span class="close">Открыть</span>Шеф - монтаж</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Ширина между путями</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$shef_montazh = $wpdb->prefix . 'shef_montazh';
		$shef_montazh_result = $wpdb->get_results(
		"SELECT id, gp, shirina_mezh_putami, price FROM $shef_montazh");
		if ($shef_montazh_result) {
			foreach ($shef_montazh_result as $montazh) {
				$id = $montazh->id;
				if ($montazh->shirina_mezh_putami < 18001) {
					$shirina_mezh_putami = 'до '.$montazh->shirina_mezh_putami.' мм включительно';
				} else $shirina_mezh_putami = 'свыше '.($montazh->shirina_mezh_putami - 1) .' мм';
				$gp = $montazh->gp;;
				$price = $montazh->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp}</td>
						<td>{$shirina_mezh_putami}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$shef_montazh'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Монтаж кран - балок с ручным управлением' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:right">
<caption class="close_table"><span class="close">Открыть</span>Варианты выбора пользовалеля (оборудование и опции) <!--<a href="<?php echo $url.'?page=unicalcplugin&view=delettable'; $_GET='variants';?>"> Удалить таблицу</a>--></caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Кодовое имя</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
	<tr><td colspan="5" style="background-color:#fff429">3.4 Радиоуправление</td></tr>
	<?php print_ops(0, 15, 'variants_radio_result');?>

	<tr><td colspan="5" style="background-color:#fff429">8.2 Частотный приобразователь</td></tr>
	<?php print_ops(15, 24, 'variants_chastot_result');?>

	<tr><td colspan="5" style="background-color:#fff429">10 Концевые выключатели / оптические датчики</td></tr>
	<?php print_ops(24, 28, 'variants_vikl_result');?>

	<tr><td colspan="5" style="background-color:#fff429">11 Электрический щит крана с импортными компонентами</td></tr>
	<?php print_ops(28, 31, 'variants_shit_result');?>

	<tr><td colspan="5" style="background-color:#fff429">12 Световая / Звуковая сирена</td></tr>
	<?php print_ops(31, 33, 'variants_svet_result');?>

	<tr><td colspan="5" style="background-color:#fff429">13 Аварийный СТОП с линейным выключателем</td></tr>
	<?php print_ops(33, 35, 'variants_stop_result');?>

	<tr><td colspan="5" style="background-color:#fff429">14 Тормоз на передвижение крана</td></tr>
	<?php print_ops(35, 41, 'variants_tormoz_result');?>

	<tr><td colspan="5" style="background-color:#fff429">18 Индивидуальная покраска крана</td></tr>
	<?php print_ops(41, 44, 'variants_paint_result');?>

	<tr><td colspan="5" style="background-color:#fff429">21 Ограничитель грузоподъёмности</td></tr>
	<?php print_ops(74, 76, 'variants_stopgp_result');?>

	<tr><td colspan="5" style="background-color:#fff429">22 Крановые весы</td></tr>
	<?php print_ops(76, 78, 'variants_stopgp_result');?>
	</tbody>
</table>

<table class="tabla" style="width:100%;float:left">
<caption class="close_table"><span class="close">Открыть</span>Мотор-редукторы прайс</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Модель</th>
			<th>Кодовое имя</th>
			<th>Грузоподъемность</th>
			<th>Ширина между путями</th>
			<th>Базовая цена</th>			
			<th class="ch_price">Редактировать цену</th>
			<th>Надбавка за вторую скорость</th>			
			<th class="ch_price">Редактировать цену</th>
			<th>Надбавка за тормоз</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$mr = $wpdb->prefix . 'mr';
		$mr_result = $wpdb->get_results(
		"SELECT id, model, code, gp, shirina, base_price, double_speed_price, brake_price FROM $mr");
		if ($mr_result) {
			foreach ($mr_result as $motor) {
				$id = $motor->id;
				$model = $motor->model;
				$code = $motor->code;
				$gp = $motor->gp;
				$shirina = $motor->shirina;
				$base_price = $motor->base_price;
				$double_speed_price = $motor->double_speed_price;
				$brake_price = $motor->brake_price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$model}</td>
						<td>{$code}</td>
						<td>{$gp}</td>
						<td>{$shirina}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$base_price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$mr'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$base_price' placeholder=''>
									<input type='button' name='base_price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$double_speed_price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$mr'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$double_speed_price' placeholder=''>
									<input type='button' name='double_speed_price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$brake_price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$mr'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$brake_price' placeholder=''>
									<input type='button' name='brake_price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Мотор-редукторы' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:99.5%;float:left">
<caption class="close_table"><span class="close">Открыть</span>Справочник</caption>
	<thead>
		<tr>
			<th style="width:30px">ID</th>
			<th style="width:50px">Код справки</th>
			<th style="width:400px">Текст</th>
			<th class="ch_price" style="width:40px">Редактировать текст</th>
			<th>Ссылка</th>
			<th class="ch_price" style="width:40px">Редактировать ссылку</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$spravka = $wpdb->prefix . 'spravka';
		$spravka_result = $wpdb->get_results(
		"SELECT id, codeinfo, descript, link FROM $spravka");
		if ($spravka_result) {
			foreach ($spravka_result as $info) {
				$id = $info->id;
				$codeinfo = $info->codeinfo;
				$descript = $info->descript;
				$link = $info->link;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$codeinfo}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$descript}</span>
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$spravka'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='text' name='new_price' value='$descript' placeholder='' style='width:610px;margin-left:40px'>
									<input type='button' name='chdescript' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$link}</span>
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$spravka'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='text' name='new_price' value='$link' placeholder='' style='width:140px;margin-left:10px'>
									<input type='button' name='chlink' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Электрический щит' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<table class="tabla" style="width:49.5%;float:right">
<caption class="close_table"><span class="close">Открыть</span>Электрический щит</caption>
	<thead>
		<tr>
			<th>ID</th>
			<th>Грузоподъемность</th>
			<th>Ширина между путями</th>
			<th>Цена</th>
			<th class="ch_price">Редактировать цену</th>
		</tr>
	</thead>
	<tbody>
		<?php
		$eshit = $wpdb->prefix . 'eshit';
		$eshit_result = $wpdb->get_results(
		"SELECT id, gp, shirina, price FROM $eshit");
		if ($eshit_result) {
			foreach ($eshit_result as $shit) {
				$id = $shit->id;
				$gp = $shit->gp;
				$shirina = $shit->shirina;
				$price = $shit->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$gp}</td>
						<td>{$shirina}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form>
									<input type='hidden' name='db' value='$eshit'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'Электрический щит' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
	?>
	</tbody>
</table>

<script type="text/javascript">
	jQuery(document).ready(function($) {
		$('.close').toggle(function() {
			$(this).parent().removeClass('close_table').addClass('open_table');
			$(this).text('Свернуть');
		}, function() {
			$(this).parent().removeClass('open_table').addClass('close_table');
			$(this).text('Открыть');
		});
		$('.open').toggle(function() {
			$(this).parent().removeClass('open_table').addClass('close_table');
			$(this).text('Открыть');
		}, function() {
			$(this).parent().removeClass('close_table').addClass('open_table');
			$(this).text('Свернуть');
		});

		$('#add_open').on('click', function(event) {
			$('.add_row').css('display', 'table-row');
		});
		$('tbody').on('click', '.edit_price', function(event) {
			$('.editing_price').css('display', 'none');
			let thats = $(this);
			let frend_price = event.currentTarget.parentElement.previousElementSibling.children[1];
			frend_price.style.display = 'block';
			frend_price.style.opacity = '1';
		});

		$('.tabla').on('click', 'input[type="button"]', function(event) {
			let that = $(this);
			let that_table = $(this).siblings('input[name="db"]').val();
			let identificator = $(this).siblings('input[name="edited_id"]').val();
			let change_price = $(this).siblings('input[name="new_price"]').val();
			let data_price = { action:'change_price_base', name_price: $(this).attr('name'), edited_id:identificator, new_price: change_price, db: that_table }
			$.post( ajaxurl, data_price, function(data, textStatus, xhr) {				
				that.parent().parent().parent('.price').children('.ipaniy_price').text(data);
				that.parent().parent().parent('.price').css({'background-color': '#c34a4a', 'color': '#FFF', 'font-weight':'bold'})
			});
			that.parent().parent('.editing_price').css({
				display: 'none',
				opacity: '0'
			});
		});
		//
	});
</script>

<?php 







echo '</section>';

/*
Грузоподъёмность, высота список, страна список, вид тали в зависимости от страны список
*/



function print_ops($from, $to, $name_result)
{
	global $wpdb;
	$variants = $wpdb->prefix . 'variants';
	$name_result = $wpdb->get_results("SELECT id, code_option, price FROM $variants WHERE id > $from AND id <= $to");
	if ($name_result) {
			foreach ($name_result as $ops) {
				$id = $ops->id;
				$code_option = $ops->code_option;
				$price = $ops->price;
				echo "<tr>
						<td class='id'>{$id}</td>
						<td>{$code_option}</td>
						<td class='price' style='position:relative'>
							<span class='ipaniy_price'>{$price}</span> &#8381;
							<div class='editing_price'>
								<form action='{$url}?page=unicalcplugin&view=editprice' method='post'>
									<input type='hidden' name='db' value='$variants'>
									<input type='hidden' name='edited_id' value='$id'>
									<input type='number' name='new_price' value='$price' placeholder=''>
									<input type='button' name='price' value='Ок'>
								</form>
							</div>
						</td>
						<td><i class='edit_price'>Изменить</i></td>
					</tr>";
			}
		} else echo "<span style='font-size:1.3em;color:red'>База данных 'OPTIONS' не существует </span><a href='https://kwork.ru/user/qibite' target='blank'>Сообщить разработчику</a>";
}
