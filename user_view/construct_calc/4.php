<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="razmeshenie" style="left:-4999px">
			<h2 id="razmeshenieH2">Где предпологается размещение</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>
			<!-- Температурный режим -->
			<div id="temperature">
			<br>
			<h3>Укажите температурный диапазон характерный для места работы с краном ОТ и ДО</h3>
			<br>
				<ul id="temp">
					<li id="m50" class="celsM cels"></li>
					<li id="m40" class="cels celsM"></li>
					<li id="m20" class="cels celsM"></li>
					<li id="p40" class="cels celsP"></li>
					<li id="p60" class="celsP cels"></li>
				</ul>
			</div>
			<!-- Температурный режим -->
			<br><br>
			<h3>Тип предполагаемого места размещения крана</h3>
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="allimg ulica" src="{$url}images/4.1.png" alt="" style="width:320px">
				<h3 class="btns">Улица</h3>
				<div class="container_button">
					<span class="inform animated">
						<i class="fa fa-info-circle" aria-hidden="true"></i>
					</span>
					<button type="button" class="ulica">Далее</button>
				</div>
				<p>Доплата 9000 руб.</p>
			</div>				
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 1em">
				<img class="allimg naves" src="{$url}images/4.2.png" alt="" style="width:320px">		
				<h3 class="btns">Навес</h3>
				<div class="container_button">
					<span class="inform animated">
						<i class="fa fa-info-circle" aria-hidden="true"></i>
					</span>
					<button type="button" class="naves">Далее</button>
				</div>
				<p>Без доплаты</p>
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">
				<img class="allimg pomeshenie" src="{$url}images/4.3.png" alt="" style="width:320px">		
				<h3 class="btns">Помещение</h3>
				<div class="container_button">
					<span class="inform animated">
						<i class="fa fa-info-circle" aria-hidden="true"></i>
					</span>
					<button type="button" class="pomeshenie">Далее</button>
				</div>
				<p>Без доплаты</p>
			</div>
		</article>
EOT;
?>