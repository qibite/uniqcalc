<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="vibor_tali" style="left:-4999px;width:100%">
	<h2>Таль</h2>
	<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg tal_yes" src="{$url}images/t_yes.png" style="height:320px" alt="">
		<h4 class="btns talbtn tal_yes">Нам требуется таль</h4>
	</div>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg tal_no" src="{$url}images/t_no.png" style="height:320px" alt="">
		<h4 class="btns talbtn tal_no">Нам не требуется таль</h4>
	</div>

		<div class="hide_type_upravleniya" style="width:100%;padding:1em">
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="allimg ruchnaya_t" src="{$url}images/17.1.jpg" style="height:240px" alt="">
				<h4 class=" talbtn ruchnaya_t">Ручная</h4>
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">
				<img class="allimg electro_t" src="{$url}images/17.2.jpg" style="height:240px" alt="">
				<h4 class=" talbtn electro_t">Электрическая</h4>
			</div>
		</div>

			<div class="hide_country_r" style="width:100%;padding:1em">
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg russia_tR" src="{$url}images/17.8.jpeg" style="height:240px" alt="">
					<h4 class=" talbtn russia_tR">Россия</h4>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg china_tR" src="{$url}images/17.9.jpg" style="height:240px" alt="">
					<h4 class=" talbtn china_tR">Китай</h4>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg sheciya_tR" src="{$url}images/17.10.jpg" style="height:240px" alt="">
					<h4 class=" talbtn sheciya_tR">Швеция</h4>
				</div>				
			</div>

			<div class="hide_country_e" style="width:100%;padding:1em">
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg bolgariya_tE" src="{$url}images/17.5.jpg" style="height:240px" alt="">
					<h4 class=" talbtn bolgariya_tE">Болгария</h4>
				</div>
				<div class="block rus_e" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg russia_tE" src="{$url}images/17.6.jpg" style="height:240px" alt="">
					<h4 class=" talbtn russia_tE">Россия</h4>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg china_tE" src="{$url}images/17.7.jpg" style="height:240px" alt="">
					<h4 class=" talbtn china_tE">Китай</h4>
				</div>
			</div>

				<div class="hide_type_tal" style="width:100%;padding:1em">
					<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
						<img class="allimg kanat_t" src="{$url}images/17.3.jpg" style="height:240px" alt="">
						<h4 class=" talbtn kanat_t">Канатная</h4>
					</div>
					<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
						<img class="allimg cep_t" src="{$url}images/17.4.jpg" style="height:240px" alt="">
						<h4 class=" talbtn cep_t">Цепная</h4>
					</div>
				</div>

					<div class="hide_s_visota_tal" style="width:100%;padding:1em">
						<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
							<img class="allimg stdV_t" src="{$url}images/17.5.1.jpg" style="height:240px" alt="">
							<h4 class=" talbtn stdV_t">Стандартная высота</h4>
						</div>
						<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
							<img class="allimg umenV_t" src="{$url}images/17.5.2.jpg" style="height:240px" alt="">
							<h4 class=" talbtn umenV_t">Уменьшенная высота</h4>
						</div>
					</div>
</article>
EOT;
?>