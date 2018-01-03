<?php
$url = plugin_dir_url( __FILE__ );
global $wpdb;
$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
$podvesnie_crani_result = $wpdb->get_results("SELECT price FROM $podvesnie_crani ORDER BY price ASC");
$minimal_price_podvesnoi_cran = number_format($podvesnie_crani_result[0]->price, 0, ',', ' ');

$opornie_crani = $wpdb->prefix . 'opornie_crani';
$opornie_crani_result = $wpdb->get_results("SELECT price FROM $opornie_crani ORDER BY price ASC");
$minimal_price_opornii_cran = number_format($opornie_crani_result[0]->price, 0, ',', ' ');
echo <<<EOT
<article id="_1" style="position:relative;left:0">
	<h2>Выберите тип крана</h2>
	<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>			
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">			
	<img class="allimg _11" src="{$url}images/1.1.png" alt="" style="width:530px">
		<h3 class="btns">Опорный</h3>
		<div class="container_button">
			<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
			<button type="button" class="_11">Выбрать</button>
		</div>
		<p>От {$minimal_price_opornii_cran} руб.</p>
	</div>
	<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">			
		<img class="allimg _12" src="{$url}images/1.2.png" alt="" style="width:530px">		
		<h3 class="btns">Подвесной</h3>
		<div class="container_button">
			<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
			<button type="button" class="_12">Выбрать</button>
		</div>
		<p>От {$minimal_price_podvesnoi_cran} руб.</p>
	</div>
</article>
EOT;
?>