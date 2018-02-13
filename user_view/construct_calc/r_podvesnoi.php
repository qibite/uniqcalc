<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="результат_подвесного" style="left:-4999px;width:100%">
	<div style="float:left">
		<h2 style="text-align:left;padding-left:30px">Результаты расчётов</h2>
		<img class="" src="{$url}images/1.2.png" alt="" style="width:430px">
		<br>
		<p class="ended">Срок изготовления крана: <span id="sroki_p"></span> рабочих дней</p>
		<p class="ended">Базовая стоимость крана: <span id="summa_p"></span> руб</p>
		<p class="ended">Стоимость путей и токоподвода: <span id="summa1_p"></span> руб</p>
		<p class="ended">Стоимость доп. оборудования: <span id="summa2_p"></span> руб</p>
		<p class="ended">Стоимость услуг: <span id="summa3_p"></span> руб</p>
		<hr>
		<p class="ended">Общая стоимость: <span id="summa4_p" style="font-weight:900"></span> руб</p>
	</div>
	<table class="res" style="width:55%;;float:right;background-color:transparent">
		<tbody>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i7" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="cgpP">изменить</i>
					</div>
				</td>
				<td class="">Грузоподъёмность - <span id="Pgp"></span><span> кг</span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i5b2_2" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>						
					</div>
					<i class="hover" id="cdpP">изменить</i>
				</td>
				<td class="">Длинна пролёта - <span id="Pdp"></span><span> мм</span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i data-info="i5b2_4" class="hover" id="cdkP">изменить</i>
					</div>					
				</td>
				<td class="">Длинна консолей - <span id="Pdk"></span><span> мм</span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="cicP">изменить</i>
					</div>					
				</td>
				<td data-info="i2" class="">Исполнение крана - <span id="Pic"></span></td>
			</tr>
			<tr>
				<td><i class="hover"></i></td>
				<td class="">Режим работы - <span id="Prr"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i8_0" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="ctemperP">изменить</i>
					</div>					
				</td>
				<td class="">Температурный режим - <span>От </span><span id="Ptr"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i8" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="razmeshP">изменить</i>
					</div>					
				</td>
				<td class="">Климатические условия - <span id="Pcu"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="i3" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="type_uprP">изменить</i>
					</div>					
				</td>
				<td class="">Тип управления краном - <span id="Ptc"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="irazrez" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="CrazrezP">изменить</i>
					</div>					
				</td>
				<td class="">Разрезной тип конструкции - <span id="Ptk"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="istroyvisota" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="CPvc">изменить</i>
					</div>					
				</td>
				<td class="">Строительная высота крана - <span id="Pvc"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="izashita" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="cPszo">изменить</i>
					</div>					
				</td>
				<td class="">Степень защиты оборудования - <span id="Pszo"></span></td>
			</tr>
			<tr><td><i class="hover"></i></td>
				<td class="">Система электропитания - <span id="Pep">3-х фазная (380 В)</span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="inapryag" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="cPvolt">изменить</i>
					</div>					
				</td>
				<td class="">Напряжение цепи управления - <span id="Pvolt"></span></td>
			</tr>
			<tr>
				<td>
					<div class="container_button">
						<span class="inform animated table_info">
							<i data-info="ispeed" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<i class="hover" id="сPspeed">изменить</i>
					</div>					
				</td>
				<td class="">Скорость перемещения крана - <span id="Pspeed"></span></td>
			</tr>
		</tbody>
	</table>
	<button type="button" class="buttons kommerP" style="font-size:.7em;margin-top:10px">Получить Коммерческое предложение</button>
</article>
EOT;
?>