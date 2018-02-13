<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="результат_опорного" style="left:-4999px;width:100%">
	<div style="float:left">
		<h2 style="text-align:left;padding-left:30px">Результаты расчётов</h2>
		<img class="" src="{$url}images/1.1.png" alt="" style="width:430px">
		<br>
		<p class="ended">Срок изготовления крана: <span id="sroki"></span> рабочих дней</p>
		<p class="ended">Базовая стоимость крана: <span id="summa"></span> руб</p>
		<p class="ended">Стоимость путей и токоподвода: <span id="summa1"></span> руб</p>
		<p class="ended">Стоимость доп. оборудования: <span id="summa2"></span> руб</p>
		<p class="ended">Стоимость услуг: <span id="summa3"></span> руб</p>
		<hr>
		<p class="ended">Общая стоимость: <span id="summa4" style="font-weight:900"></span> руб</p>
	</div>
	<table class="res" style="width:55%;;float:right;background-color:transparent">
		<tbody>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i7" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="cgpO">изменить</i>
					</div>					
				</td>
				<td class="">Грузоподъёмность - <span id="Ogp"></span><span> кг</span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i5b2_2" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
					</div>
					<i class="hover" id="cdpO">изменить</i>
				</td>
				<td class="">Длинна пролёта - <span id="Odp"></span> <span>мм</span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i2" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
					</div>
					<i class="hover" id="cicO">изменить</i>
				</td>
				<td class="">Исполнение крана - <span id="Oic"></span></td>
			</tr>
			<tr>
				<td>
					<i class="hover"></i>
				</td>
				<td class="">Режим работы - <span id="Orr"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i8_0" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="ctemperO">изменить</i>
					</div>					
				</td>
				<td class="">Температурный режим - <span>От </span><span id="Otr"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i8" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="razmeshO">изменить</i>
					</div>					
				</td>
				<td class="">Климатические условия - <span id="Ocu"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i3" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="type_uprO">изменить</i>
					</div>					
				</td>
				<td class="">Тип управления краном - <span id="Otc"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="irazrez" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="CrazrezO">изменить</i>
					</div>					
				</td>
				<td class="">Разрезной тип конструкции - <span id="Otk"></span>
				</td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="istroyvisota" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="COvc">изменить</i>
					</div>					
				</td>
				<td class="">Строительная высота крана - <span id="Ovc"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="izashita" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="cOszo">изменить</i>
					</div>					
				</td>
				<td class="">Степень защиты оборудования - <span id="Oszo"></span></td>
			</tr>
			<tr>
				<td>
					<i class="hover"></i>					
				</td>
				<td class="">Система электропитания - <span id="Oep"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="inapryag" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="cOvolt">изменить</i>
					</div>					
				</td>
				<td class="">Напряжение цепи управления - <span id="Ovolt"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="ispeed" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="сOspeed">изменить</i>
					</div>					
				</td>
				<td class="">Скорость перемещения крана - <span id="Ospeed"></span></td>
			</tr>
		</tbody>
	</table>
	<button type="button" class="buttons kommerO" style="font-size:.7em;margin-top:10px">Получить Коммерческое предложение</button>
</article>
EOT;
?>