<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="система_управления_краном" style="left:-4999px">
			<h2>Система управления краном</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
			<img class="allimg реле" src="{$url}images/8.1.png" alt="" style="width:350px"><br>
				<h3 class="btns">Релейно<br>контакторная</h3>				
				<button type="button" class="реле">Выбрать</button>
			</div>
			<div class="скрыть_варианты_ук" style="position:absolute;width:100%;padding:1em">
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg одна_с" src="{$url}images/8.3.png" alt="" style="width:220px"><br>
					<h4 class="одна_с releinokontakt">Одна скорость движения крана</h4>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">
					<img class="allimg несколько_с" src="{$url}images/8.4.png" alt="" style="width:220px"><br>
					<h4 class="несколько_с releinokontakt">Несколько скоростей движения</h4>
				</div>
			</div>

			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
			<img class="allimg преобразователь" src="{$url}images/8.2.png" alt="" style="width:350px"><br>
				<h3 class="btns">Частотный<br>преобразователь<!--<br>(Плавный пуск + 2 и более скорости)--></h3>
				<button type="button" class="преобразователь">Выбрать</button>
			</div>
			<div class="скрыть_варианты_чп" style="position:absolute;width:100%;padding:1em">
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg esq" src="{$url}images/8.5.png" alt="" style="width:220px"><br>
					<h4 class="esq">ESQ (Китай)</h4>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg hyundai" src="{$url}images/8.6.png" alt="" style="width:220px"><br>
					<h4 class="hyundai">Hyundai (Корея)</h4>
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
					<img class="allimg danfross" src="{$url}images/8.7.png" alt="" style="width:220px"><br>
					<h4 class="danfross">Danfoss (Германия)</h4>
				</div>
			</div>
</article>
EOT;
?>