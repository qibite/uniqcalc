<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="пути_для_подвесного" style="left:-4999px">
			<h2>Крановые пути</h2>
			<!--<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>-->
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">			
				<img class="allimg есть_путь2" src="{$url}images/5.1.jpg" alt="" style="width:500px">
				<h3 class="btns">У нас уже <br>есть крановый путь</h3>				
				<div class="container_button">
					<span class="inform animated" style="margin-left:-38px;margin-right:13px">
						<i data-info="i5b_1" class="fa fa-info-circle" aria-hidden="true"></i>
					</span>
					<button type="button" class="есть_путь2">Выбрать</button>
				</div>
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">			
				<img class="allimg нужна_поставка_пути" src="{$url}images/5б2.jpg" alt="" style="width:500px">		
				<h3 class="btns">Необходима поставка<br>кранового пути</h3>				
				<div class="container_button">
					<span class="inform animated" style="margin-left:-38px;margin-right:13px">
						<i data-info="i5b_2" class="fa fa-info-circle" aria-hidden="true"></i>
					</span>
					<button type="button" class="нужна_поставка_пути">Далее</button>
				</div>
			</div>
			<article class="скрыть_варианты_подврельс" style="margin-top:80px">
				<h3>Модель кранового пути</h3>
				<br>
				<ul id="список_моделей_путей">
					<li>
						<img id="balka24" class="allimg путь_подвесной" src="{$url}images/5.13p.png" alt="" style="width:220px">
						<br>
						<div class="container_button">
							<span class="inform animated" style="margin-left:-38px;margin-right:13px">
								<i data-info="i5b_3" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							Балка 24М
						</div>						
					</li>
					<li>
						<img id="balka30" class="allimg путь_подвесной" src="{$url}images/5.14.png" alt="" style="width:220px">
						<br>
						<div class="container_button">
							<span class="inform animated" style="margin-left:-38px;margin-right:13px">
								<i data-info="i5b_4" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							Балка 30М
						</div>
					</li>
					<li>
						<img id="balka36" class="allimg путь_подвесной" src="{$url}images/5.15.png" alt="" style="width:220px">
						<br>
						<div class="container_button">
							<span class="inform animated" style="margin-left:-38px;margin-right:13px">
								<i data-info="i5b_5" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							Балка 36М
						</div>
					</li>
					<li>
						<img id="balka45" class="allimg путь_подвесной" src="{$url}images/5.16.png" alt="" style="width:220px">
						<br>
						<div class="container_button">
							<span class="inform animated" style="margin-left:-38px;margin-right:13px">
								<i data-info="i5b_6" class="fa fa-info-circle" aria-hidden="true"></i>
							</span>
							Балка 45М
						</div>
					</li>
				</ul>
			</article>
</article>
EOT;
?>