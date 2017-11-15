<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="_3" style="left:-4999px">
			<h2 id="upravlenieH2">Укажите тип управления краном</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>
			<div class="block" style="position:relative;display:inline-block;margin:1em 3em 0 0">
				<img class="allimg _31" src="{$url}images/3.1.jpg" alt="" style="width:430px">
				<h3 class="btns">Ручное</h3>
				<button type="button" class="_31">Выбрать</button>	
			</div>

			<!--Электро-->		
			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 3em">
				<img class="allimg _32" src="{$url}images/3.2.jpg" alt="" style="width:430px">		
				<h3 class="btns">Электрическое</h3>
				<button type="button" class="_32">Выбрать</button>
				<div class="hide_dop_el" style="position:absolute;width:120%;left:-74%;padding:1em">
					<h2>Тип пульта управления</h2>
					<hr>
					<ul style="text-align:center">
						<li class="dopvar _33_next" style="display:inline-block"><img class="allimg" src="{$url}images/3.3.jpg" style="width:190px;margin:16px"><br>Подвесной пульт</li>
						<li class="dopvar _34" style="display:inline-block"><img class="allimg _34" src="{$url}images/3.4.jpg" style="width:190px;margin:16px"><br>Радиоуправление</li>
					</ul>
					<br><br>
					<div id="vidipultov" style="display: none;">
						<h2>Виды пультов управления</h2>
						<hr>
						<ul style="text-align:center">
							<li class="dopvar _35" style="display:inline-block"><img class="allimg _35" src="{$url}images/3.5.jpg" style="width:200px;margin:10px"><br> С пульта</li>
							<li class="dopvar _36" style="display:inline-block"><img class="allimg _36" src="{$url}images/3.6.jpg" style="width:200px;margin:10px"><br>С джойстика</li>
						</ul>
						<ul id="proizvositeli_pult" style="position:absolute;bottom:-9369px;left:-45px;text-align:left;padding:1em;text-align:center;width:120%">
						<h2>Выберите производителя</h2><hr>
							<li style="display:inline-block"><img class="allimg _37" src="{$url}images/3.7.jpg" style="width:170px;margin:10px"><br> Telecrane<br>(Тайвань)</li>
							<li style="display:inline-block"><img class="allimg _38" src="{$url}images/3.8.jpg" style="width:170px;margin:10px"><br> Ikusi<br>(Испания)</li>
							<li style="display:inline-block"><img class="allimg _39" src="{$url}images/3.9.jpg" style="width:170px;margin:10px"><br> HBC - Radiomatic<br>(Германия)</li>
						</ul>
					</div>
					
				</div>
			</div>
			<!-- Электро -->	
		</article>
EOT;
?>