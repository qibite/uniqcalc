<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="токоподвод" style="left:-4999px">
			<h2>Токоподвод</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>			
			<div class="block" style="position:relative;display:inline-block;margin:1em 3em 0 0">
				<img class="allimg ток_требуется" src="{$url}images/6.1.jpg" alt="" style="width:350px"><br>
				<h3 class="btns">Требуется</h3>
				<button type="button" class="ток_требуется">Выбрать</button>
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 3em">
				<img class="allimg ток_нетребуется" src="{$url}images/6.2.jpg" alt="" style="width:350px"><br>
				<h3 class="btns">Не требуется</h3>
				<button type="button" class="ток_нетребуется">Выбрать</button>
			</div>
			<article class="скрыть_варианты_токоподвод" style="margin-top:10px">
				<h3>Модель кранового пути</h3>
				<br>
				<ul id="список_токоподводов">
					<li><img class="allimg каб_с_кол" src="{$url}images/6.3.jpg" alt="" style="width:220px"><br>Кабельный с кольцами</li>
					<li><img class="allimg каб_с_тел" src="{$url}images/6.4.jpg" alt="" style="width:220px"><br>Кабельный с тележками</li>
					<li><img class="allimg фесто" src="{$url}images/6.5.jpg" alt="" style="width:220px"><br>Фестонный (С профиль)</li>
					<li><img class="allimg откр_тролл" src="{$url}images/6.6.jpg" alt="" style="width:220px"><br>Открытые троллеи</li>					
					<li><img class="allimg закр_тролл" src="{$url}images/6.7.jpg" alt="" style="width:220px"><br>Закрытые троллеи</li>
				</ul>
			</article>
</article>
EOT;
?>