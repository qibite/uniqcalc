<div class="hidden_options zzz" style="overflow:auto">
<span id="close2">&#10006;</span>
<span id="revers"><i class="fa fa-repeat" aria-hidden="true"></i></span>

	<div id="first_opt" class="modal_change modal_change_hide">
		<ul class="ul_change">	
			<li id="a1" class="change_li"><span><img src="<?=$url;?>images/puti1.png" alt="" style="width:140px"><p><b class="hz4">Разработка проектной документации</b><br><span class="opisanie_parametra">10 рабочих дней</span></p></span><span class='hiddened'>65 000 руб</span></li>
			<li id="a2" class="change_li"></li>
			<li id="a3" class="change_li cat" name='tokoprovod'><span><img src="<?=$url;?>images/6.1.jpg" alt="" style="width:140px"><p><b class="hz4">Токоподвод</b></p></span><span class='hiddened'></span>
				<div id='tokoprovod1' class='change_li tokoprovod' name='tokoprovod'><span><img src='wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.3.png' style='width:140px'><p><b class='hz4'>Кабельный с кольцами</b><span class='opisanie_parametra'>Без учета монтажа</span></p></span><span class='hiddened'></span></div>
				<div id='tokoprovod2' class='change_li tokoprovod' name='tokoprovod'><span><img src='wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.4.png' style='width:140px'><p><b class='hz4'>Кабельный с тележками</b><span class='opisanie_parametra'>Без учета монтажа</span></p></span><span class='hiddened'></span></div>
				<div id='tokoprovod3' class='change_li tokoprovod' name='tokoprovod'><span><img src='wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.5.png' style='width:140px'><p><b class='hz4'>Фестонный (С профиль)</b><span class='opisanie_parametra'>Без учета монтажа</span></p></span><span class='hiddened'></span></div>
				<div id='tokoprovod4' class='change_li tokoprovod' name='tokoprovod'><span><img src='wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.6.png' style='width:140px'><p><b class='hz4'>Открытые троллеи</b><span class='opisanie_parametra'>Без учета монтажа</span></p></span><span class='hiddened'></span></div>
				<div id='tokoprovod5' class='change_li tokoprovod' name='tokoprovod'><span><img src='wp-content/plugins/uniqcalc/user_view/construct_calc/images/6.7.png' style='width:140px'><p><b class='hz4'>Закрытые троллеи</b><span class='opisanie_parametra'>Без учета монтажа</span></p></span><span class='hiddened'></span></div>
			</li>
		</ul>
	</div>

	<div id="second_opt" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="b10" class="change_li cat" name='vikluchateli'><span><img src="<?=$url;?>images/10.png" alt="" style="width:140px"><p><b class="hz4">Концевые выключатели</b></p></span><span class='hiddened'></span>
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
						echo "<div id='b{$id}' class='change_li' name='vikluchateli'><span><img src='{$url}images/10.{$nimg}.png' style='width:140px'><p><b class='hz4'>{$code_option}</b></p></span><span class='hiddened'>{$price} руб</span></div>";
					}
				}
			?>
			</li>		
			<li id="b11" class="change_li" name="shit_electro"><span><img src="<?=$url;?>images/11.png" alt="" style="width:140px"><p><b class="hz4">Электрический щит крана</b><br><span class="opisanie_parametra">с импортными компонентами</span></p></span><span class='hiddened'></span></li>
			<?php
				$variants = $wpdb->prefix . 'variants';
				$name_result = $wpdb->get_results("SELECT id, code_option, price FROM $variants WHERE id = 32");
				if ($name_result) {
					$svet_sirena = $name_result[0]->price;
				}
				$name_result = $wpdb->get_results("SELECT id, code_option, price FROM $variants WHERE id = 33");
				if ($name_result) {
					$zvuk_sirena = $name_result[0]->price;
				}
			?>
			<li id="b12_1" class="change_li" name="sirena"><span><img src="<?=$url;?>images/12.1.png" alt="" style="width:140px"><p><b class="hz4">Световая сирена</b></span></p></span><span class='hiddened'><?=$svet_sirena;?> руб</span></li>
			<li id="b12_2" class="change_li" name="sirena"><span><img src="<?=$url;?>images/12.2.png" alt="" style="width:140px"><p><b class="hz4">Звуковая сирена</b></span></p></span><span class='hiddened'><?=$zvuk_sirena;?> руб</span></li>

			<li id="b13" class="change_li" name="stop"><span><img src="<?=$url;?>images/13.png" alt="" style="width:140px"><p><b class="hz4">Аварийный стоп</b><br><span class="opisanie_parametra">с линейным выключателем</span></p></span><span class='hiddened'></span></li>
			<li id="b14" class="change_li" name="tormoz"><span><img src="<?=$url;?>images/14.png" alt="" style="width:140px"><p><b class="hz4">Тормоз на передвижение</b></p></span><span class='hiddened'></span></li>
			<li id="b17" class="change_li cat tali_dop" name="tali"  style="position:relative"><span><img src="<?=$url;?>images/17.8.png" alt="" style="width:140px"><p>Таль</p></span><span class='hiddened'></span>
				<?php
					global $wpdb; $wpdb->show_errors();
					$e_tal_table = $wpdb->prefix . 'electro_tali';
					$e_tal_result = $wpdb->get_results("SELECT price FROM $e_tal_table WHERE strana = 'Россия' OR strana = 'Китай' ORDER BY price ASC");
					$r_tal_table = $wpdb->prefix . 'ruchnie_tali';
					$r_tal_result = $wpdb->get_results("SELECT price FROM $r_tal_table ORDER BY price ASC");
				?>
				<div id='b17_1' class='pod_cat_cat tal_r'><span><img src="<?=$url?>images/17.1.png" style='width:140px'><p><b class='hz4'>Ручная</b></p></span><span class='hiddened'>От <?php print_r($r_tal_result[0]->price)?> руб</span></div>
				<div id='b17_2' class='pod_cat_cat tal_e'><span><img src="<?=$url?>images/17.2.png" style='width:140px'><p><b class='hz4'>Электрическая</b></p></span><span class='hiddened'>От <?php print_r($e_tal_result[0]->price)?> руб</span></div>

				<div id="conteinert_talei_1" style="display:block;width:100%;margin-top:16px">
					<div id='b17_8' class='pod_cat_cat tal_r_RUS r_tal' style="display:none"><span><img src="<?=$url?>images/17.8.png" style='width:140px'><p><b class='hz4'>Россия</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
					<div id='b17_9' class='pod_cat_cat tal_r_CHN r_tal' style="display:none"><span><img src="<?=$url?>images/17.9.png" style='width:140px'><p><b class='hz4'>Китай</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
					<div id='b17_10' class='pod_cat_cat tal_r_SHVED r_tal' style="display:none"><span><img src="<?=$url?>images/17.10.png" style='width:140px'><p><b class='hz4'>Швеция</b></p></span><span class='hiddened'>Идет рассчет..</span></div>

					<div id='b17_5' class='pod_cat_cat tal_e_BOLG e_tal' style="display:none"><span><img src="<?=$url?>images/17.5.png" style='width:140px'><p><b class='hz4'>Болгария</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
					<div id='b17_6' class='pod_cat_cat tal_e_RUS e_tal' style="display:none"><span><img src="<?=$url?>images/17.6.png" style='width:140px'><p><b class='hz4'>Россия</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
					<div id='b17_7' class='pod_cat_cat tal_e_CHN e_tal' style="display:none"><span><img src="<?=$url?>images/17.7.png" style='width:140px'><p><b class='hz4'>Китай</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
				</div>

					<div id="conteinert_talei_2" style="display:block;width:100%;margin-top:16px">
						<div id='b17_3' class='pod_cat_cat tal_canat' style="display:none"><span><img src="<?=$url?>images/17.3.png" style='width:140px'><p><b class='hz4'>Канатная</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
						<div id='b17_4' class='pod_cat_cat tal_cep' style="display:none"><span><img src="<?=$url?>images/17.4.png" style='width:140px'><p><b class='hz4'>Цепная</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
					</div>

						<div id="conteinert_talei_3" style="display:block;width:100%;margin-top:16px">
							<div id='b17_5_1' class='pod_cat_cat tal_std_height' style="display:none"><span><img src="<?=$url?>images/17.5.1.png" style='width:140px'><p><b class='hz4'>Стандартная высота</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
							<div id='b17_5_2' class='pod_cat_cat tal_mini_std_height' style="display:none"><span><img src="<?=$url?>images/17.5.2.png" style='width:140px'><p><b class='hz4'>Уменьшенная высота</b></p></span><span class='hiddened'>Идет рассчет..</span></div>
						</div>
			</li>
			<li id="b18" class="change_li"><span><img src="<?=$url;?>images/18.png" alt="" style="width:140px"><p><b class="hz4">Индивидуальная покраска</b><br><span class="opisanie_parametra">требуется согласование цвета</span></p></span><span class='hiddened'></span></li>
		</ul>
	</div>
	<div id="third_opt" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="c1" class="change_li" name="montazh"></li>
			<li id="c2" class="change_li" name="shef_montazh"></li>
			<!--<li id="c3" class="change_li" name="dostavka"></li>-->
			<li id="c4" class="change_li" name="rels_montazh"></li>
			<li id="c5" class="change_li" name="tok_montazh"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p><b class="hz4">Монтаж токоподвода</b><br><span class="opisanie_parametra"></span></p></span><span class="hiddened"></span></li>
			<li id="c7" class="change_li" name="rels_montazh"><span><img src="<?=$url;?>images/nophotos.png" alt="" style="width:140px"><p><b class="hz4">Разработка габаритного чертежа крана</b><br><span class="opisanie_parametra"></span></p></span><span class="hiddened">Без доплаты</span></li>
			
		</ul>
	</div>
</div>