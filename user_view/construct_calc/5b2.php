<?php
$url = plugin_dir_url( __FILE__ );
echo <<<EOT
<article id="размеры_помещения_подвесной" style="left:-4999px">
			<h2>Введите корректные параметры</h2>
			<p>Тут типа какой нибудь продающий текст или что-то в этом роде.</p><p>Можно краткое приветствие и описание типов крана поверхностное.</p>			
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="" src="{$url}images/5б3.jpg" alt="" style="width:260px"><br>
				<label>Длина путей: <br><br><input id="dpP" type="number" name="" value="1000" style="display:inline-block;max-width:100px"> мм</label>
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="" src="{$url}images/5б4.jpg" alt="" style="width:260px"><br>
				<label>Ширина между путями: <br><br><input id="shpP" type="number" name="" value="4200" style="display:inline-block;max-width:100px"> мм</label>
			</div>
			
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="" src="{$url}images/5б5.jpg" alt="" style="width:260px"><br>
				<label>Высота до путей: <br><br><input id="vP" type="number" name="" value="3000" style="display:inline-block;max-width:100px"> мм</label>
			</div>
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<img class="" src="{$url}images/5б6.jpg" alt="" style="width:260px"><br>
				<label>Длина консолей крана: <br><br><input id="vpP" type="number" name="" value="500" style="display:inline-block;max-width:100px"> мм<br><span id="error500mmP">Должно быть не мене 500 мм!</span></label>
			</div>
				<br><br>
				<strong style="font-family:'Rubik Lite';color:red">Расстояние от стены до центра рельса не должно быть меньше 350 мм.</strong>
				<br>
			<div class="block" style="position:relative;display:inline-block;margin:1em 1em 0 0">
				<div class="container_button">
					<span class="inform animated"><a href="http://uniqcrane.ru" target="blank" title="Перейти для справки"><i class="fa fa-info-circle" aria-hidden="true"></i></a></span>
					<button type="button" class="параметры_помещения_для_подвесной">Далее</button>
				</div>
			</div>
</article>
EOT;
?>