<?php
$url = plugin_dir_url( __FILE__ );
global $wpdb;$wpdb->show_errors();
	$stoimost_provod = $wpdb->prefix . 'stoimost_provod';
	$cabkol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Кабельный с кольцами' ");
	$cabtel = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Кабельный с тележками' ");
	$feston = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Фестонный (С профиль)' ");
	$opentrol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Открытые троллеи' ");
	$closetrol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Закрытые троллеи' ");
echo <<<EOT
<article id="токоподвод" style="left:-4999px">
			<h2>Токоподвод</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>			
			<div class="block" style="position:relative;display:inline-block;margin:1em 3em 0 0">
				<img class="allimg ток_требуется" src="{$url}images/6.1.jpg" alt="" style="width:350px"><br>
				<h3 class="btns">Требуется</h3>
				<button type="button" class="ток_требуется">Выбрать</button>
				<p>От {$cabkol[0]->price} руб.</p>	
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 3em">
				<img class="allimg ток_нетребуется" src="{$url}images/6.2.jpg" alt="" style="width:350px"><br>
				<h3 class="btns">Не требуется</h3>
				<button type="button" class="ток_нетребуется">Выбрать</button>
				<p><span style="color:#FFF">/</span></p>	
			</div>
			<article class="скрыть_варианты_токоподвод" style="margin-top:10px">
				<h3>Тип токоподвода</h3>
				<br>
				<ul id="список_токоподводов">
					<li><img class="allimg каб_с_кол" src="{$url}images/6.3.png" alt="" style="width:220px"><h4>Кабельный с кольцами<br><i>{$cabkol[0]->price} руб. метр</i></h4><span id="tok1" style="font-weight:bold;color:#b5212e"></span></li>
					<li><img class="allimg каб_с_тел" src="{$url}images/6.4.png" alt="" style="width:220px"><h4>Кабельный с тележками<br><i>{$cabtel[0]->price} руб. метр</i></h4><span id="tok2" style="font-weight:bold;color:#b5212e"></span></li>
					<li><img class="allimg фесто" src="{$url}images/6.5.png" alt="" style="width:220px"><h4>Фестонный (С профиль)<br><i>{$feston[0]->price} руб. метр</i></h4><span id="tok3" style="font-weight:bold;color:#b5212e"></span></li>
					<li><img class="allimg откр_тролл" src="{$url}images/6.6.png" alt="" style="width:220px"><h4>Открытые троллеи<br><i>{$opentrol[0]->price} руб. метр</i></h4><span id="tok4" style="font-weight:bold;color:#b5212e"></span></li>					
					<li><img class="allimg закр_тролл" src="{$url}images/6.7.png" alt="" style="width:220px"><h4>Закрытые троллеи<br><i>{$closetrol[0]->price} руб. метр</i></h4><span id="tok5" style="font-weight:bold;color:#b5212e"></span></li>
				</ul>
			</article>
</article>
EOT;
?>