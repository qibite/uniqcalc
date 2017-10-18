<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="результат_подвесного" style="left:-4999px;width:100%">
	<div style="float:left">
		<h2 style="text-align:left;padding-left:30px">Результаты расчётов</h2>
		<img class="" src="{$url}images/1.2.png" alt="" style="width:430px">
		<br>
		<p class="ended">Сроки изготовления: <span id="sroki"></span></p>
		<p class="ended">Общая стоимость производства: <span id="summa"></span></p>
	</div>
	<table class="res" style="width:55%;;float:right;margin:-8px 0 0 0;background-color:transparent">
		<tbody>
			<tr>
				<td><i class="hover" id="cgpP">изменить</i></td>
				<td class="">Грузоподъёмность - <span id="Pgp"></span><span> кг</span></td>
			</tr>
			<tr>
				<td><i class="hover" id="cdpP">изменить</i></td>
				<td class="">Длинна пролёта - <span id="Pdp"></span><span> мм</span></td>
			</tr>
			<tr>
				<td><i class="hover" id="cdkP">изменить</i></td>
				<td class="">Длинна консолей - <span id="Pdk"></span><span> мм</span></td>
			</tr>
			<tr>
				<td><i class="hover" id="cicP">изменить</i></td>
				<td class="">Исполнение крана - <span id="Pic"></span></td>
			</tr>
			<tr>
				<td><i class="hover"></i></td>
				<td class="">Режим работы - <span id="Prr"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="ctemperP">изменить</i></td>
				<td class="">Температурный режим - <span>От </span><span id="Ptr"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="razmeshP">изменить</i></td>
				<td class="">Климатические условия - <span id="Pcu"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="type_uprP">изменить</i></td>
				<td class="">Тип управления краном - <span id="Ptc"></span></td>
			</tr>
			<tr>
				<td><i class="hover"  id="sposob_uprP">изменить</i></td>
				<td class="">Способ управления краном - <span id="Puc"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="CrazrezP">изменить</i></td>
				<td class="">Разрезной тип конструкции - <span id="Ptk"></span></td>
			</tr>
			<tr>
				<td><i class="hover">изменить</i></td>
				<td class="">Тип подкранового рельса - <span id="Ptpr"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="CPvc">изменить</i></td>
				<td class="">Строительная высота крана - <span id="Pvc"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="cPszo">изменить</i></td>
				<td class="">Степень защиты оборудования - <span id="Pszo"></span></td>
			</tr>
			<tr>
				<td><i class="hover"></i></td>
				<td class="">Система электропитания - <span id="Pep">3-х фазная (380 В)</span></td>
			</tr>
			<tr>
				<td><i class="hover" id="cPvolt">изменить</i></td>
				<td class="">Напряжение цепи управления - <span id="Pvolt"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="cPis">изменить</i></td>
				<td class="">Исполнение скорости крана - <span id="Pis"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="сPspeed">изменить</i></td>
				<td class="">Скорость перемещения крана - <span id="Pspeed"></span></td>
			</tr>
			<tr>
				<td><i class="hover" id="cPttk">изменить</i></td>
				<td class="">Токопровод к крану - <span id="Pttk"></span></td>
			</tr>
		</tbody>
	</table>
</article>
EOT;
?>