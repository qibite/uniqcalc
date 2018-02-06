<?php
$url = plugin_dir_url( __FILE__ );
global $wpdb;$wpdb->show_errors();
	$stoimost_provod = $wpdb->prefix . 'stoimost_provod';
	$cabkol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Кабельный с кольцами' ");
	$cabtel = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Кабельный с тележками' ");
	$feston = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Фестонный (С профиль)' ");
	$opentrol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Открытые троллеи' ");
	$closetrol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Закрытые троллеи' ");

	$cabkol_p = number_format($cabkol[0]->price, 0, ',', ' ');	
	$cabtel_p = number_format($cabtel[0]->price, 0, ',', ' ');
	$feston_p = number_format($feston[0]->price, 0, ',', ' ');
	$opentrol_p = number_format($opentrol[0]->price, 0, ',', ' ');
	$closetrol_p = number_format($closetrol[0]->price, 0, ',', ' ');
echo <<<EOT
<article id="токоподвод" style="left:-4999px">
			<h2>Токоподвод</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>			
			<div class="block" style="position:relative;display:inline-block;margin:1em 3em 0 0">
				<img class="allimg ток_требуется" src="{$url}images/6.1.jpg" alt="" style="width:350px"><br>
				<h3 class="btns">Требуется</h3>
				<div class="container_button">
					<span class="inform animated">
						<i data-info="i10_1" class="fa fa-info-circle" aria-hidden="true"></i>
					</span>
					<button type="button" class="ток_требуется">Выбрать</button>
				</div>
				<p>От {$cabkol_p} руб.</p>	
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 3em">
				<img class="allimg ток_нетребуется" src="{$url}images/6.2.jpg" alt="" style="width:350px"><br>
				<h3 class="btns">Не требуется</h3>
				<button type="button" class="ток_нетребуется">Далее</button>
				<p><span style="color:#FFF">/</span></p>	
			</div>
			<article class="скрыть_варианты_токоподвод" style="margin-top:10px">
				<h3>Тип токоподвода</h3>
				<br>
				<ul id="список_токоподводов">
					<li><img class="allimg каб_с_кол" src="{$url}images/6.3.png" alt="" style="width:210px">
						<h4>Кабельный с кольцами<br><i>{$cabkol_p} руб. метр</i></h4>
						<div class="container_button">
							<span class="inform animated">
								<i data-info="i10_2" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<button type="button" class="buttons каб_с_кол">Далее</button>
						</div>
						<span id="tok1" class="price_"></span>
					</li>
					<li><img class="allimg каб_с_тел" src="{$url}images/6.4.png" alt="" style="width:210px">
						<h4>Кабельный с тележками<br><i>{$cabtel_p} руб. метр</i></h4>
						<div class="container_button">
							<span class="inform animated">
								<i data-info="i10_3" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<button type="button" class="buttons каб_с_тел">Далее</button>
						</div>
						<span id="tok2" class="price_"></span>
					</li>
					<li><img class="allimg фесто" src="{$url}images/6.5.png" alt="" style="width:210px">
						<h4>Фестонный (С профиль)<br><i>{$feston_p} руб. метр</i></h4>
						<div class="container_button">
							<span class="inform animated">
								<i data-info="i10_4" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<button type="button" class="buttons фесто">Далее</button>
						</div>
						<span id="tok3" class="price_"></span>
					</li>
					<li><img class="allimg откр_тролл" src="{$url}images/6.6.png" alt="" style="width:210px">
						<h4>Открытые троллеи<br><i>{$opentrol_p} руб. метр</i></h4>
						<div class="container_button">
							<span class="inform animated">
								<i data-info="i10_5" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<button type="button" class="buttons откр_тролл">Далее</button>
						</div>
						<span id="tok4" class="price_"></span>
					</li>					
					<li><img class="allimg закр_тролл" src="{$url}images/6.7.png" alt="" style="width:210px">
						<h4>Закрытые троллеи<br><i>{$closetrol_p} руб. метр</i></h4>
						<div class="container_button">
							<span class="inform animated">
								<i data-info="i10_6" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							<button type="button" class="buttons закр_тролл">Далее</button>
						</div>
						<span id="tok5" class="price_"></span>
					</li>
				</ul>
			</article>
</article>
EOT;
?>