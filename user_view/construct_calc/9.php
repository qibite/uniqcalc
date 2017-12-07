<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="мотор_редуктора" style="left:-4999px;width:100%">
	<h2>Мотор редуктора</h2>
	<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg чаи" src="{$url}images/9.1.png" alt="" style="width:260px"><br>
		<h4 class="btns чаи">Червячная передача<br>ABLE (Италия) - стандартно</h4>
		<span class="price_">Без доплаты</span>
	</div>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg чнг" src="{$url}images/9.2.png" alt="" style="width:260px"><br>
		<h4 class="btns чнг">Червячная передача<br>NORD (Германия)</h4>
		<span class="price_"></span>
	</div>
		<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg цбб" src="{$url}images/9.3.png" alt="" style="width:260px"><br>
		<h4 class="btns цбб">Циллиндрическая передача<br>Балкан Эхо (Болгария)</h4>
		<span class="price_"></span>
	</div>
		<br>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg цнг" src="{$url}images/9.4.png" alt="" style="width:260px"><br>
		<h4 class="btns цнг">Циллиндрическая передача<br>NORD (Германия)</h4>
		<span class="price_"></span>
	</div>
	<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
		<img class="allimg цер" src="{$url}images/9.5.png" alt="" style="width:260px"><br>
		<h4 class="btns цер">Циллиндрическая передача<br>Европривод (Россия)</h4>
		<span class="price_"></span>
	</div>
</article>
EOT;
?>