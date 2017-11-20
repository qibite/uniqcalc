<div class="hidden_options zzz" style="overflow:auto">
<span id="close2">&#10006;</span>
<span id="revers"><i class="fa fa-repeat" aria-hidden="true"></i></span>

	<div id="first_opt" class="modal_change modal_change_hide">
		<ul class="ul_change">	
			<li id="a1" class="change_li"><span><img src="<?=$url;?>images/puti1.png" alt="" style="width:140px"><p><b class="hz4">Разработка проектной документации</b><br><span class="opisanie_parametra">10 рабочих дней</span></p></span><span class='hiddened'>65 000 руб</span></li>
			<li id="a2" class="change_li"></li>
			<li id="a3" class="change_li  cat"><span><img src="<?=$url;?>images/6.1.jpg" alt="" style="width:140px"><p><b class="hz4">Токоподвод</b></p></span><span class='hiddened'></span>
			<?php
			$stoimost_provod = $wpdb->prefix . 'stoimost_provod';
			$stoimost_provod_result = $wpdb->get_results("SELECT id, type, price FROM $stoimost_provod");
				if ($stoimost_provod_result) {
					$nimg =2;
					foreach ($stoimost_provod_result as $provod) {
						$nimg++;
						$id = $provod->id;
						$type = $provod->type;
						$price = $provod->price;
						echo "<div id='tokoprovod{$id}' class='change_li tokoprovod'><span><img src='{$url}images/6.{$nimg}.png' style='width:140px'><p><b class='hz4'>{$type}</b><span class='opisanie_parametra'>цена за метр <span style='color:#e60216;font-size:1.4em'>{$price}</span></span></p></span><span class='hiddened'></span></div>";
					}
				}
			?>
			</li>
		</ul>
	</div>

	<div id="second_opt" class="modal_change modal_change_hide">
		<ul class="ul_change">
		<li id="b10" class="change_li  cat"><span><img src="<?=$url;?>images/10.png" alt="" style="width:140px"><p><b class="hz4">Концевые выключатели</b></p></span><span class='hiddened'></span>
		<?php
			$variants = $wpdb->prefix . 'variants';
			$name_result = $wpdb->get_results("SELECT id, code_option, price FROM $variants WHERE id > 24 AND id <= 28");
			if ($name_result) {
				$nimg =0;
				foreach ($name_result as $option) {
					$nimg++;
					$id = $option->id;
					$code_option = $option->code_option;
					$price = $option->price;
					echo "<div id='b{$id}' class='change_li'><span><img src='{$url}images/10.{$nimg}.png' style='width:140px'><p><b class='hz4'>{$code_option}</b></p></span><span class='hiddened'>{$price} руб</span></div>";
				}
			}
		?>
		</li>		
		<li id="b11" class="change_li"><span><img src="<?=$url;?>images/11.png" alt="" style="width:140px"><p><b class="hz4">Электрический щит крана</b><br><span class="opisanie_parametra">с импортными компонентами</span></p></span><span class='hiddened'></span></li>
		<li id="b12" class="change_li  cat"><span><img src="<?=$url;?>images/12.png" alt="" style="width:140px"><p><b class="hz4">Световая | звуковая сирена</b></p></span><span class='hiddened'></span>
		<?php
			$variants = $wpdb->prefix . 'variants';
			$name_result = $wpdb->get_results("SELECT id, code_option, price FROM $variants WHERE id > 31 AND id <= 33");
			if ($name_result) {
				$nimg =0;
				foreach ($name_result as $option) {
					$nimg++;
					$id = $option->id;
					$code_option = $option->code_option;
					$price = $option->price;
					echo "<div id='b{$id}' class='change_li'><span><img src='{$url}images/12.{$nimg}.png' style='width:140px'><p><b class='hz4'>{$code_option}</b></p></span><span class='hiddened'>{$price} руб</span></div>";
				}
			}
		?>
		</li>
		<li id="b13" class="change_li"><span><img src="<?=$url;?>images/13.png" alt="" style="width:140px"><p><b class="hz4">Аварийный стоп</b><br><span class="opisanie_parametra">с линейным выключателем</span></p></span><span class='hiddened'></span></li>
		<li id="b14" class="change_li"><span><img src="<?=$url;?>images/14.png" alt="" style="width:140px"><p><b class="hz4">Тормоз на передвижение</b></p></span><span class='hiddened'></span></li>
		<li id="b17" class="change_li cat" style="position:relative"><span><img src="<?=$url;?>images/17.8.png" alt="" style="width:140px"><p>Таль</p></span><span class='hiddened'></span>
			<!--<div id='b17_1' class='change_li pod_cat'><span><img src="<?=$url?>images/17.1.png" style='width:140px'><p><b class='hz4'>Ручная</b></p></span><span class='hiddened'>0 руб</span></div>
			<div id='b17_2' class='change_li pod_cat'><span><img src="<?=$url?>images/17.2.png" style='width:140px'><p><b class='hz4'>Электрическая</b></p></span><span class='hiddened'>0 руб</span></div>-->
		</li>
		<li id="b18" class="change_li"><span><img src="<?=$url;?>images/18.png" alt="" style="width:140px"><p><b class="hz4">Индивидуальная покраска</b><br><span class="opisanie_parametra">требуется согласование цвета</span></p></span><span class='hiddened'></span></li>
			<!--<li id="a" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Первая опция</p></span></li>
			<li id="b" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Вторая опция</p></span></li>
			<li id="c" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Третья опция</p></span></li>
			<li id="d" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Четвертая опция</p></span></li>
			<li id="e" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Пятая опция</p></span></li>
			<li id="f" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Шестая опция</p></span></li>
			<li id="g" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Первая опция</p></span></li>
			<li id="h" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Вторая опция</p></span></li>
			<li id="i" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Третья опция</p></span></li>
			<li id="" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Четвертая опция</p></span></li>
			<li id="" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Пятая опция</p></span></li>
			<li id="p" class="change_li"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p>Шестая опция</p></span></li>-->
		</ul>
	</div>
</div>