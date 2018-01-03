<?php
$url = plugin_dir_url( __FILE__ );
global $wpdb;
$variants = $wpdb->prefix . 'variants';
$variants_result = $wpdb->get_results("SELECT price FROM $variants WHERE id <= 15 ORDER BY price ASC");
$minimal_price_electro_pult = $variants_result[0]->price;
$variants_result = $wpdb->get_results("SELECT price FROM $variants WHERE id = 5 OR id = 10 OR id = 15 ORDER BY price ASC");
$minimal_price_joy_pult_1 = number_format($variants_result[0]->price, 0, ',', ' ');
$minimal_price_joy_pult_2 = number_format($variants_result[1]->price, 0, ',', ' ');
$minimal_price_joy_pult_3 = number_format($variants_result[2]->price, 0, ',', ' ');
$variants_result2 = $wpdb->get_results("SELECT price FROM $variants WHERE id < 5 OR id > 5 AND id < 10 OR id > 10 AND id < 15 ORDER BY price ASC");
$minimal_price_radio_pult_1 = number_format($variants_result2[0]->price, 0, ',', ' ');
$minimal_price_radio_pult_2 = number_format($variants_result2[1]->price, 0, ',', ' ');
$minimal_price_radio_pult_3 = number_format($variants_result2[2]->price, 0, ',', ' ');
$variants_result2vbi = $wpdb->get_results("SELECT price FROM $variants WHERE id = 3 OR id = 8 OR id = 13 ORDER BY price ASC");
$minimal_price_radio_pult_1vbi = number_format($variants_result2vbi[0]->price, 0, ',', ' ');
$minimal_price_radio_pult_2vbi = number_format($variants_result2vbi[1]->price, 0, ',', ' ');
$minimal_price_radio_pult_3vbi = number_format($variants_result2vbi[2]->price, 0, ',', ' ');
echo <<<EOT
<article id="_3" style="left:-4999px">
			<h2 id="upravlenieH2">Укажите тип управления краном</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>
			<div class="block" style="position:relative;display:inline-block;margin:1em 3em 0 0">
				<img class="allimg _31" src="{$url}images/3.1.png" alt="" style="width:430px">
				<h3 class="btns">Ручное</h3>
				<div class="container_button">
					<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
					<button type="button" class="_31">Выбрать</button>
				</div>
			</div>

			<!--Электро-->		
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 3em">
				<img class="allimg _32" src="{$url}images/3.2.png" alt="" style="width:430px">		
				<h3 class="btns">Электрическое</h3>
				<div class="container_button">
					<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
					<button type="button" class="_32">Выбрать</button>
				</div>
				<div class="hide_dop_el" style="position:absolute;width:120%;left:-74%;padding:1em">
					<h2>Тип пульта управления</h2>
					<hr>
					<ul style="text-align:center">
						<li class="dopvar _33_next" style="display:inline-block"><img class="allimg" src="{$url}images/3.3.png" style="width:190px;margin:16px">
							<br>Подвесной пульт
							<br>
							<div class="container_button">
								<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
								<button type="button" class="buttonslil _33_next">Выбрать</button>
							</div>
							<br>
							<span class="price_">Без доплаты</span>
						</li>
						<li class="dopvar _34" style="display:inline-block"><img class="allimg _34" src="{$url}images/3.4.png" style="width:190px;margin:16px">							
							<br>Радиоуправление
							<br>
							<div class="container_button">
								<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
								<button type="button" class="buttonslil _34">Выбрать</button>
							</div>
							<br>
							<span class="price_">От {$minimal_price_electro_pult} руб.</span>
						</li>
					</ul>
					<br><br>
					<div id="vidipultov" style="display: none;">
						<h2>Виды пультов управления</h2>
						<hr>
						<ul style="text-align:center">
							<li class="dopvar _35" style="display:inline-block"><img class="allimg _35" src="{$url}images/3.5.png" style="width:200px;margin:10px">
								<br> С пульта<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _35">Выбрать</button>
								</div>
								<br>
								<span class="price_">От {$minimal_price_radio_pult_1} руб.</span>
							</li>
							<li class="dopvar _36" style="display:inline-block"><img class="allimg _36" src="{$url}images/3.6.png" style="width:200px;margin:10px">
								<br>С джойстика<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _36">Выбрать</button>
								</div>
								<br>
								<span class="price_">От {$minimal_price_joy_pult_1} руб.</span>
							</li>
						</ul>
						<ul id="proizvositeli_pult" style="position:absolute;bottom:-9369px;left:-45px;text-align:left;padding:1em;text-align:center;width:120%">
						<h2>Выберите производителя</h2><hr>
							<li style="display:inline-block"><img class="allimg _37" src="{$url}images/3.7.png" style="width:164px;margin:10px">
								<br> Telecrane<br>(Тайвань)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _37">Выбрать</button>
								</div>
								<br>
								<span class="price_">От {$minimal_price_radio_pult_1} руб.</span>
							</li>
							<li style="display:inline-block"><img class="allimg _38" src="{$url}images/3.8.png" style="width:164px;margin:10px">
								<br> Ikusi<br>(Испания)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _38">Выбрать</button>
								</div>
								<br>
								<span class="price_">От {$minimal_price_radio_pult_2} руб.</span>
							</li>
							<li style="display:inline-block"><img class="allimg _39" src="{$url}images/3.9.png" style="width:164px;margin:10px">
								<br> HBC - Radiomatic<br>(Германия)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _39">Выбрать</button>
								</div>
								<br>
								<span class="price_">От {$minimal_price_radio_pult_3} руб.</span>
							</li>

							<li style="display:inline-block"><img class="allimg _37_j" src="{$url}images/3.7a.png" style="width:164px;margin:10px">
								<br> Telecrane<br>(Тайвань)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _37_j">Выбрать</button>
								</div>
								<br>
								<span class="price_">{$minimal_price_joy_pult_1} руб.</span>
							</li>
							<li style="display:inline-block"><img class="allimg _38_j" src="{$url}images/3.8b.png" style="width:164px;margin:10px">
								<br> Ikusi<br>(Испания)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _38_j">Выбрать</button>
								</div>
								<br>
								<span class="price_">{$minimal_price_joy_pult_2} руб.</span>
							</li>
							<li style="display:inline-block"><img class="allimg _39_j" src="{$url}images/3.9c.png" style="width:164px;margin:10px">
								<br> HBC - Radiomatic<br>(Германия)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _39_j">Выбрать</button>
								</div>
								<br>
								<span class="price_">{$minimal_price_joy_pult_3} руб.</span>
							</li>

							<li style="display:inline-block"><img class="allimg _37vbi" src="{$url}images/3.7.png" style="width:164px;margin:10px">
								<br> Telecrane<br>(Тайвань)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _37vbi">Выбрать</button>
								</div>
								<br>
								<span class="price_">{$minimal_price_radio_pult_1vbi} руб.</span>
							</li>
							<li style="display:inline-block"><img class="allimg _38vbi" src="{$url}images/3.8.png" style="width:164px;margin:10px">
								<br> Ikusi<br>(Испания)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _38vbi">Выбрать</button>
								</div>
								<br>
								<span class="price_">{$minimal_price_radio_pult_2vbi} руб.</span>
							</li>
							<li style="display:inline-block"><img class="allimg _39vbi" src="{$url}images/3.9.png" style="width:164px;margin:10px">
								<br> HBC - Radiomatic<br>(Германия)<br>
								<div class="container_button">
									<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
									<button type="button" class="buttonslil _39vbi">Выбрать</button>
								</div>
								<br>
								<span class="price_">{$minimal_price_radio_pult_3vbi} руб.</span>
							</li>
						</ul>
					</div>
					
				</div>
			</div>
			<!-- Электро -->	
		</article>
EOT;
?>