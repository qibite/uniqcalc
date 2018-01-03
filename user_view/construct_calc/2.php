<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="_2" style="left:-4999px">
			<h2 id="ispolnenieH2">Укажите исполнение крана</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>			
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="allimg obsheprom" src="{$url}images/2.1.jpg" alt="" style="width:265px">
				<h3 class="btns">Общепромышленное</h3>
				<div class="container_button">
					<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
					<button type="button" class="obsheprom">Выбрать</button>
				</div>
				<p>Без доплаты</p>
			</div>	



			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 1em">
				<img class="allimg- vzrivo" src="{$url}images/2.2.png" alt="" style="width:265px">		
				<h3 class="btns">Взрывобезопасное</h3>
				<div class="container_button">
					<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
					<button type="button" class="vzrivo">Выбрать</button>
				</div>
				<p>Доплата 35%</p>
			</div>
			<div class="hide_dop_vzr" style="position:absolute;width:30%;left:36%;padding:1em;background-color:#eee">
					<h4>Категория, группа и класс</h4>
					<hr>
					<ul style="text-align:left">
						<li class="dopvar"><label class="custom-check"><input type="radio" class="" name="ispbezop" value="B1a, IIB Т5 (B1а, IIА Т5)" placeholder="" checked="checked"> B1a, IIB Т5 (B1а, IIА Т5)</label></li>
						<li class="dopvar"><label class="custom-check"><input type="radio" class="" name="ispbezop" value="B1a, IIС Т5" placeholder=""> B1a, IIС Т5</label></li>
					</ul>
					<button type="button" class="vzrivo_next  buttonslil">Далее</button>
			</div>

			<div class="block" style="position:relative;display:inline-block;margin:1em 0 0 1em">
				<img class="allimg pozharo" src="{$url}images/2.3.jpg" alt="" style="width:265px">		
				<h3 class="btns">Пожаробезопасное</h3>
				<div class="container_button">
					<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
					<button type="button" class="pozharo">Выбрать</button>
				</div>
				<p>Доплата 10%</p>
			</div>
			<div class="hide_dop_pozh" style="position:absolute;width:30%;left:36%;padding:1em;background-color:#eee">
				<h4>Класс пожарной безопасности</h4>
				<ul style="text-align:left">
					<li class="dopvar"><label class="custom-check"><input type="radio" class="" name="isppozh" value="П-I" placeholder="" checked="checked"> П-I</label></li>
					<li class="dopvar"><label class="custom-check"><input type="radio" class="" name="isppozh" value="П-II / П-Iia / П-III" placeholder=""> П-II / П-Iia / П-III</label></li>
				</ul>
				<button type="button" class="pozharo_next  buttonslil">Далее</button>
			</div>
		</article>
EOT;
?>