<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="пути_для_подвесного" style="left:-4999px">
			<h2>Крановые пути</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>			
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">			
				<img class="allimg есть_путь2" src="{$url}images/5.1.jpg" alt="" style="width:500px">
				<h3 class="btns">У нас уже <br>есть крановый путь</h3>
				<button type="button" class="есть_путь2">Выбрать</button>		
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">			
				<img class="allimg нужен_монтаж_пути2" src="{$url}images/5б2.jpg" alt="" style="width:500px">		
				<h3 class="btns">Необходима поставка<br>кранового пути</h3>
				<button type="button" class="нужен_монтаж_пути2">Выбрать</button>
			</div>
			<article class="скрыть_варианты_подврельс" style="margin-top:80px">
				<h3>Модель кранового пути</h3>
				<br>
				<ul id="список_моделей_путей">
					<li><img class="allimg путь_подвесной" src="{$url}images/5.13.png" alt="" style="width:220px"><br>Балка 24М</li>
					<li><img class="allimg путь_подвесной" src="{$url}images/5.14.png" alt="" style="width:220px"><br>Балка 30М</li>
					<li><img class="allimg путь_подвесной" src="{$url}images/5.15.png" alt="" style="width:220px"><br>Балка 36М</li>
					<li><img class="allimg путь_подвесной" src="{$url}images/5.16.png" alt="" style="width:220px"><br>Балка 45М</li>
				</ul>
			</article>
</article>
EOT;
?>