<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="vibor_tali" style="left:-4999px;width:100%">
	<h2>Таль</h2>
	<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg tal_yes" src="{$url}images/t_yes.png" style="height:320px" alt="">
		<h3 class="btns">Нам требуется таль</h3>
		<div class="container_button">
			<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
			<button type="button" class="tal_yes">Выбрать</button>
		</div>
	</div>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg tal_no" src="{$url}images/t_no.png" style="height:320px" alt="">
		<h3 class="btns">Нам не требуется таль</h3>
		<div class="container_button">
			<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
			<button type="button" class="tal_no">Выбрать</button>
		</div>
	</div>

		<div class="hide_type_upravleniya" style="width:100%;padding:1em">
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="allimg ruchnaya_t" src="{$url}images/17.1.png" style="height:240px" alt="">
				<h4 class="">Ручная</h4>
				<div class="container_button">
					<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
					<button type="button" class="buttonslil ruchnaya_t">Выбрать</button>
				</div>
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">
				<img class="allimg electro_t" src="{$url}images/17.2.png" style="height:240px" alt="">
				<h4 class="">Электрическая</h4>
				<div class="container_button">
					<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
					<button type="button" class="buttonslil electro_t">Выбрать</button>
				</div>
			</div>
		</div>

			<div class="hide_country_r" style="width:100%;padding:1em">
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg russia_tR" src="{$url}images/17.8.png" style="height:240px" alt="">
					<h4 class=" talbtn russia_tR">Россия</h4>
					<span class="price_"></span>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg china_tR" src="{$url}images/17.9.png" style="height:240px" alt="">
					<h4 class=" talbtn china_tR">Китай</h4>
					<span class="price_"></span>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg sheciya_tR" src="{$url}images/17.10.png" style="height:240px" alt="">
					<h4 class=" talbtn sheciya_tR">Швеция</h4>
					<span class="price_"></span>
				</div>				
			</div>

			<div class="hide_country_e" style="width:100%;padding:1em">
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg bolgariya_tE" src="{$url}images/17.5.png" style="height:240px" alt="">
					<h4 class=" talbtn bolgariya_tE">Болгария</h4>
					<p style="display:none;font-size:.6em;position:absolute;left:12px;bottom:86px">Внимание! Стоимость болгарских талей пересчитывается<br>в рубли с ЕВРО по курсу на сегодняшний день.</p>
					<span class="price_"></span>
				</div>
				<div class="block rus_e" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg russia_tE" src="{$url}images/17.6.png" style="height:240px" alt="">
					<h4 class=" talbtn russia_tE">Россия</h4>
					<span class="price_"></span>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg china_tE" src="{$url}images/17.7.png" style="height:240px" alt="">
					<h4 class=" talbtn china_tE">Китай</h4>
					<span class="price_"></span>
				</div>
			</div>

				<div class="hide_type_tal" style="width:100%;padding:1em">
					<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
						<img class="allimg kanat_t" src="{$url}images/17.3.png" style="height:240px" alt="">
						<h4 class=" talbtn kanat_t">Канатная</h4>
						<span class="price_"></span>
					</div>
					<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
						<img class="allimg cep_t" src="{$url}images/17.4.png" style="height:240px" alt="">
						<h4 class=" talbtn cep_t">Цепная</h4>
						<span class="price_"></span>
					</div>
				</div>

					<div class="hide_s_visota_tal" style="width:100%;padding:1em">
						<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
							<img class="allimg stdV_t" src="{$url}images/17.5.1.png" style="height:240px" alt="">
							<h4 class=" talbtn stdV_t">Стандартная высота</h4>
							<span class="price_"></span>
						</div>
						<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
							<img class="allimg umenV_t" src="{$url}images/17.5.2.png" style="height:240px" alt="">
							<h4 class=" talbtn umenV_t">Уменьшенная высота</h4>
							<span class="price_"></span>
						</div>
					</div>

					<div class="options_tali" style="width:90%;padding:1em;margin-left:4%;margin-top:3em">
					<h2 id="h2_tal" style="margin-bottom:.5em">Предлагаем дополнительные опции для выбраной тали</h2>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_1"><input id="bolg_kanat_1" type="checkbox"> Химическая агрессивная среда +5%</label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_2">Тропическое исполнение +10% <input id="bolg_kanat_2" type="checkbox"></label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_3"><input id="bolg_kanat_3" type="checkbox"> Морское исполнение +10%</label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_4">Защитный экран +490 EUR<input id="bolg_kanat_4" type="checkbox"></label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_5"><input id="bolg_kanat_5" type="checkbox"> Концевой переключатель на передвижение +16 EUR</label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_6">Сейсмичность 9 баллов +10% <input id="bolg_kanat_6" type="checkbox"></label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_7"><input id="bolg_kanat_7" type="checkbox"> Второй тормоз на подъем +220EUR</label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_8">Микроподъем +16% <input id="bolg_kanat_8" type="checkbox"></label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_9"><input id="bolg_kanat_9" type="checkbox"> Скорость подъема V2 +5%</label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_10">Скорость подъема V2 +7%<input id="bolg_kanat_10" type="checkbox"></label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_11"><input id="bolg_kanat_11" type="checkbox"> Частотный привод на подъем</label>
						<label class="opt_tal bolg_kanat" for="bolg_kanat_12">Частотный привод на передвижение +300EUR<input id="bolg_kanat_12" type="checkbox"></label>

						<label class="opt_tal russia_kanat" for="russia_kanat_1"><input id="russia_kanat_1" type="checkbox"> Второй тормоз на подъем +27 000 руб</label>

						<label class="opt_tal bolg_cep" for="bolg_cep_1"><input id="bolg_cep_1" type="checkbox"> Тележка передвижения с электо приводом +90EUR</label>
						<label class="opt_tal bolg_cep" for="bolg_cep_2">Тележка передвижения с с ручным приводом +150EUR <input id="bolg_cep_2" type="checkbox"></label>

						<div style="clear:both;margin-bottom:30px"></div>
						<h4 id="next_tal" class="talbtn" style="width:200px;margin:0 auto">Далее</h4>
					</div>
</article>
EOT;
?>