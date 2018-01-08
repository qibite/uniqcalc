<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="пути_для_опорного" style="left:-4999px">
			<h2>Крановые пути</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>			
			<div class="block" style="position:relative;display:inline-block;margin:1em 2em 0 0">			
			<img class="allimg есть_путь" src="{$url}images/5а1.png" alt="" style="width:500px">
				<h3 class="btns">У нас уже <br>есть крановый путь</h3>
				<button type="button" class="есть_путь">Выбрать</button>		
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 2em">			
				<img class="allimg нужен_монтаж_пути" src="{$url}images/5а2.png" alt="" style="width:500px">		
				<h3 class="btns">Необходима поставка <br>кранового пути</h3>
				<button type="button" class="нужен_монтаж_пути">Далее</button>
			</div>

			<article id="rels_oporniy" style="display:none;left:-18px;top:610px">
				<h3>Крановые рельсы</h3>		
				<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">			
				<img class="allimg есть_рельс" src="{$url}images/5а3.jpg" alt="" style="width:250px">
					<h4 class="btns">У нас уже <br>есть крановый рельс</h4>
					<button type="button" class="есть_рельс">Выбрать</button>		
				</div>
				<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">			
					<img class="allimg нужен_монтаж_рельс" src="{$url}images/5а4.jpg" alt="" style="width:250px">		
					<h4 class="btns">Необходим монтаж <br>кранового рельса</h4>
					<button type="button" class="нужен_монтаж_рельс">Далее</button>
				</div>
				<br>
				<br>
				<ul id="список_моделей_рельс" style="position:absolute;left:0;top:9978px">
				<h3>Модель кранового рельса</h3>
					<li><img id="p24" class="allimg нужен_монтаж_рельс" src="{$url}images/5.5.png" alt="" style="width:220px"><br>Рельс Р24</li>
					<li><img id="p43" class="allimg нужен_монтаж_рельс" src="{$url}images/5.6.png" alt="" style="width:220px"><br>Рельс Р43</li>
					<li><img id="p50" class="allimg нужен_монтаж_рельс" src="{$url}images/5.7.png" alt="" style="width:220px"><br>Рельс Р50</li>
					<li><img id="kp65" class="allimg нужен_монтаж_рельс" src="{$url}images/5.8.png" alt="" style="width:220px"><br>Рельс КР65</li>
					<li><img id="kp70" class="allimg нужен_монтаж_рельс" src="{$url}images/5.9.png" alt="" style="width:220px"><br>Рельс КР70</li>
					<li><img id="kp80" class="allimg нужен_монтаж_рельс" src="{$url}images/5.10.png" alt="" style="width:220px"><br>Рельс КР80</li>
					<li><img id="kubik40" class="allimg нужен_монтаж_рельс" src="{$url}images/5.11.png" alt="" style="width:220px"><br>Квадрат  40х40</li>
					<li><img id="kubik50" class="allimg нужен_монтаж_рельс" src="{$url}images/5.12.png" alt="" style="width:220px"><br>Квадрат  50х50</li>
					<li><img id="kubik60" class="allimg нужен_монтаж_рельс" src="{$url}images/5.13.png" alt="" style="width:220px"><br>Квадрат  60х60</li>
				</ul>
			</article>
		</article>
EOT;
?>