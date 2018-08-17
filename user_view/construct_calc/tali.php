<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="vibor_tali" style="left:-4999px;width:100%">
	<h2>Таль</h2>
	<!--<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>-->
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg tal_yes" src="{$url}images/t_yes.png" style="height:320px" alt="">
		<h3 class="btns">Нам требуется таль</h3>
		<div class="container_button">
			<span class="inform animated">
				<i data-info="i17_0" class="fa fa-info-circle" aria-hidden="true"></i>
			</span>
			<button type="button" class="tal_yes">Выбрать</button>
		</div>
	</div>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg tal_no" src="{$url}images/t_no.png" style="height:320px" alt="">
		<h3 class="btns">Нам не требуется таль</h3>
		<button type="button" class="tal_no">Далее</button>
	</div>

		<div class="hide_type_upravleniya" style="width:100%;padding:1em">
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="allimg ruchnaya_t" src="{$url}images/17.1.png" style="height:240px" alt="">
				<h4 class="">Ручная</h4>
				<div class="container_button">
					<span class="inform animated">
						<i data-info="i17_1" class="fa fa-info-circle" aria-hidden="true"></i>
					</span>
					<button type="button" class="buttonslil ruchnaya_t">Выбрать</button>
				</div>
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">
				<img class="allimg electro_t" src="{$url}images/17.2.png" style="height:240px" alt="">
				<h4 class="">Электрическая</h4>
				<div class="container_button">
					<span class="inform animated">
						<i data-info="i17_2" class="fa fa-info-circle" aria-hidden="true"></i>
					</span>
					<button type="button" class="buttonslil electro_t">Выбрать</button>
				</div>
			</div>
		</div>

			<div class="hide_country_r" style="width:100%;padding:1em">
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg russia_tR" src="{$url}images/17.8.png" style="height:240px" alt="">
					<h4>Россия</h4>
					<div class="container_button">
						<span class="inform animated">
							<i data-info="i17_8" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<button type="button" class="buttonslil russia_tR">Далее</button>
					</div>
					<span class="price_"></span>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg china_tR" src="{$url}images/17.9.png" style="height:240px" alt="">
					<h4>Китай</h4>
					<div class="container_button">
						<span class="inform animated">
							<i data-info="i17_9" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<button type="button" class="buttonslil china_tR">Далее</button>
					</div>
					<span class="price_"></span>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg sheciya_tR" src="{$url}images/17.10.png" style="height:240px" alt="">
					<h4>Швейцария</h4>
					<div class="container_button">
						<span class="inform animated">
							<i data-info="i17_10" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<button type="button" class="buttonslil sheciya_tR">Далее</button>
					</div>
					<span class="price_"></span>
				</div>
			</div>

			<div class="hide_country_e" style="width:100%;padding:1em">
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg bolgariya_tE" src="{$url}images/17.5.png" style="height:240px" alt="">
					<h4>Болгария</h4>
					<p id="ception_TB" style="display:none;font-size:.6em;position:absolute;left:12px;bottom:-52px">Внимание! Стоимость болгарских талей пересчитывается<br>в ₽ по курсу ЕВРО на сегодняшний день.</p>
					<div class="container_button">
						<span class="inform animated">
							<i data-info="i17_5" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<button type="button" class="buttonslil bolgariya_tE">Выбрать</button>
					</div>
					<span class="price_"></span>
				</div>
				<div class="block rus_e" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg russia_tE" src="{$url}images/17.6.png" style="height:240px" alt="">
					<h4>Россия</h4>
					<div class="container_button">
						<span class="inform animated">
							<i data-info="i17_6" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<button type="button" class="buttonslil russia_tE">Выбрать</button>
					</div>
					<span class="price_"></span>
				</div>
				<div class="block china_e" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg china_tE" src="{$url}images/17.7.png" style="height:240px" alt="">
					<h4>Китай</h4>
					<div class="container_button">
						<span class="inform animated">
							<i data-info="i17_7" class="fa fa-info-circle" aria-hidden="true"></i>
						</span>
						<button type="button" class="buttonslil china_tE">Выбрать</button>
					</div>
					<span class="price_"></span>
				</div>
			</div>

				<div class="hide_type_tal" style="width:100%;padding:1em">
					<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
						<img class="allimg kanat_t" src="{$url}images/17.3.png" style="height:240px" alt="">
						<h4>Канатная</h4>
						<div class="container_button">
							<span class="inform animated">
								<i data-info="i17_3" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<button type="button" class="buttonslil kanat_t">Выбрать</button>
						</div>
						<span class="price_"></span>
					</div>
					<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
						<img class="allimg cep_t" src="{$url}images/17.4.png" style="height:240px" alt="">
						<h4>Цепная</h4>
						<div class="container_button">
							<span class="inform animated">
								<i data-info="i17_4" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<button type="button" class="buttonslil cep_t">Выбрать</button>
						</div>
						<span class="price_"></span>
					</div>
				</div>

					<div class="hide_s_visota_tal" style="width:100%;padding:1em">
						<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
							<img class="allimg stdV_t" src="{$url}images/17.5.1.png" style="height:240px" alt="">
							<h4>Стандартная высота</h4>
							<div class="container_button">
								<span class="inform animated">
									<i data-info="i17_5_1" class="fa fa-info-circle" aria-hidden="true"></i>
								</span>
								<button type="button" class="buttonslil stdV_t">Выбрать</button>
							</div>
							<span class="price_"></span>
						</div>
						<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
							<img class="allimg umenV_t" src="{$url}images/17.5.2.png" style="height:240px" alt="">
							<h4>Уменьшенная высота</h4>
							<div class="container_button">
								<span class="inform animated">
									<i data-info="i17_5_2" class="fa fa-info-circle" aria-hidden="true"></i>
								</span>
								<button type="button" class="buttonslil umenV_t">Выбрать</button>
							</div>
							<span class="price_"></span>
						</div>
					</div>

					<div class="options_tali" style="width:90%;padding:1em;margin-left:4%;margin-top:1.4em">
					<h2 id="h2_tal" style="margin-bottom:1.5em">Предлагаем дополнительные опции для выбраной тали</h2>
						<div class="container_button taliopt bolg_kanat_b">
							<span class="inform animated">
								<i data-info="i17_101" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<label class="opt_tal bolg_kanat" for="bolg_kanat_1"><input id="bolg_kanat_1" type="checkbox"> Химическая агрессивная среда <b id="himagrsreda"></b> </label>
						</div>
						<div class="container_button taliopt_r bolg_kanat_b">
							<label class="opt_tal bolg_kanat" for="bolg_kanat_2">Тропическое исполнение <b id="tropikisp"></b> <input id="bolg_kanat_2" type="checkbox"></label>
							<span class="inform animated">
								<i data-info="i17_102" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
						</div>
						<div class="container_button taliopt bolg_kanat_b">
							<span class="inform animated">
								<i data-info="i17_103"  class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<label class="opt_tal bolg_kanat" for="bolg_kanat_3"><input id="bolg_kanat_3" type="checkbox"> Морское исполнение <b id="morskor"></b> </label>
						</div>
						<div class="container_button taliopt_r bolg_kanat_b">
							<label class="opt_tal bolg_kanat" for="bolg_kanat_4">Защитный экран <b id="zashcran"></b> <input id="bolg_kanat_4" type="checkbox"></label>
							<span class="inform animated">
								<i data-info="i17_104" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
						</div>
						<div class="container_button taliopt bolg_kanat_b">
							<span class="inform animated">
								<i data-info="i17_105" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<label class="opt_tal bolg_kanat" for="bolg_kanat_5"><input id="bolg_kanat_5" type="checkbox"> Концевой выключатель на передвижение <b id="konc_vikl"></b> </label>
						</div>
						<div class="container_button taliopt_r bolg_kanat_b">
							<label class="opt_tal bolg_kanat" for="bolg_kanat_6">Сейсмичность 9 баллов <b id="seismichnost9"></b> <input id="bolg_kanat_6" type="checkbox"></label>
							<span class="inform animated">
								<i data-info="i17_106" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
						</div>
						<div class="container_button taliopt bolg_kanat_b">
							<span class="inform animated">
								<i data-info="i17_107" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<label class="opt_tal bolg_kanat" for="bolg_kanat_7"><input id="bolg_kanat_7" type="checkbox"> Второй тормоз на подъем <b id="vtoroitormoz"></b> </label>
						</div>
						<div class="container_button taliopt_r bolg_kanat_b">
							<label class="opt_tal bolg_kanat" for="bolg_kanat_8">Микроподъем <b id="micropodiom"></b> <input id="bolg_kanat_8" type="checkbox"></label>
							<span class="inform animated">
								<i data-info="i17_108" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
						</div>
						<div class="container_button taliopt bolg_kanat_b">
							<span class="inform animated">
								<i data-info="i17_109" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<label class="opt_tal bolg_kanat" for="bolg_kanat_9"><input id="bolg_kanat_9" type="checkbox"> Скорость подъема V2 <b id="skorost_podiomaV2"></b> </label>
						</div>
						<div class="container_button taliopt_r bolg_kanat_b">
							<label class="opt_tal bolg_kanat" for="bolg_kanat_10">Микроперемещение <b id="mikroperemeshenie"></b>  <input id="bolg_kanat_10" type="checkbox"></label>
							<span class="inform animated">
								<i data-info="i17_110" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
						</div>
						<!--<div class="container_button taliopt bolg_kanat_b">
							<span class="inform animated">
								<i data-info="i17_111" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<label class="opt_tal bolg_kanat" for="bolg_kanat_11"><input id="bolg_kanat_11" type="checkbox"> Частотный привод на подъем <b id="chastotniy_privod_podiom"></b></label>
						</div>
						<div class="container_button taliopt_r bolg_kanat_b">
							<label class="opt_tal bolg_kanat" for="bolg_kanat_12">Частотный привод на передвижение <b id="chastotniy_privod_peredvizhenie"></b> <input id="bolg_kanat_12" type="checkbox"></label>
							<span class="inform animated">
								<i data-info="i17_112" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
						</div>		-->


						<div class="container_button taliopt russia_kanat_b">
							<span class="inform animated">
								<i data-info="i17_113" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<label class="opt_tal russia_kanat" for="russia_kanat_1"><input id="russia_kanat_1" type="checkbox"> Второй тормоз на подъем <b id="vtoroitormoznapodiom"></b></label>
						</div>


						<div class="container_button taliopt bolg_cep_b">
							<span class="inform animated">
								<i data-info="i17_114" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<label class="opt_tal bolg_cep" for="bolg_cep_1"><input id="bolg_cep_1" type="checkbox"> Тележка передвижения с электо приводом <b id="telezhkaelektroprivod"></b> </label>
						</div>
						<div class="container_button taliopt_r bolg_cep_b">
							<label class="opt_tal bolg_cep" for="bolg_cep_2">Тележка передвижения с ручным приводом <b id="telezhkaruchnoyprivod"></b> <input id="bolg_cep_2" type="checkbox"></label>
							<span class="inform animated">
								<i data-info="i17_115" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
						</div>

						<div style="clear:both;margin-bottom:0px"></div>
						<h4 id="next_tal" class="talbtn" style="width:200px;margin:0 auto">Далее</h4>
					</div>
</article>
EOT;
?>