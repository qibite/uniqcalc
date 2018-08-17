<?php 
$url_this = plugin_dir_url( __FILE__ );
ini_set('error_reporting', E_ALL);
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
global $wpdb;
$wpdb->show_errors();
?>
<link rel="stylesheet" href="<?=$url_this;?>css/style.css">
<section id="first">
	<div id="main_block_for_steps" style="position: relative;width:100%;height:800px;margin:0 auto;/*min-width:1440px;*/text-align:center">	
		<?php $cu = wp_get_current_user(); ?>
		<?= $cu->ID ?>
		<?php require_once("construct_calc/0.php"); ?>
		<?php require_once("construct_calc/1.php"); ?>
		<?php require_once("construct_calc/2.php"); ?>
		<?php require_once("construct_calc/3.php"); ?>
		<?php require_once("construct_calc/7.php"); ?>
		<?php require_once("construct_calc/5a2.php"); ?>
		<?php require_once("construct_calc/5b2.php"); ?>
		<?php require_once("construct_calc/8.php"); ?>
		<?php require_once("construct_calc/9.php"); ?>
		<?php require_once("construct_calc/4.php"); ?>
		<?php require_once("construct_calc/5a.php"); ?>
		<?php require_once("construct_calc/5b.php"); ?>
		<?php require_once("construct_calc/6.php"); ?>
		<?php require_once("construct_calc/tali.php"); ?>
		<?php
			require_once("construct_calc/r_oporniy.php");
			require_once("construct_calc/r_podvesnoi.php");
		?>
		<!-- РЕЗЮМЕ -->
		
		<div class="preloader">
		  <div class="item-1"><div></div></div>
		  <div class="item-2"><div></div></div>
		  <div class="item-3"><div></div></div>
		  <div class="item-4"><div></div></div>
		  <div class="item-5"><div></div></div>
		  <div class="item-6"><div></div></div>
		  <div class="item-7"><div></div></div>
		  <div class="item-8"><div></div></div>
		  <div class="item-9"><div></div></div>
		</div>
		
	</div>
</section>
<!--END-->

<aside class="modal_view mmm">
<span id="close">&#10006;</span>
<!-- Изменить грузоподъемность -->
	<div id="gpO" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li class="change_li кг500_resume_o"><span>500 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг1000_resume_o"><span>1000 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг2000_resume_o"><span>2000 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг3200_resume_o"><span>3200 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг5000_resume_o"><span>5000 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг6300_resume_o"><span>6300 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг8000_resume_o"><span>8000 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг10000_resume_o"><span>10000 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг12500_resume_o"><span>12500 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li кг16000_resume_o"><span>16000 кг.</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
		</ul>
	</div>
<!-- Изменить грузоподъемность -->

<!-- Изменить длинну пролёта -->
	<div id="dpO2" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li class="change_li" style="width:60%;height:240px;background-color:#FFF;color:#444">
				<h3>Длинна пролёта:</h3>
				<nobr><input style="display:inline-block;margin:10px 0 0 30px;font-size:4em;height:1em;width:80%;color: #444;" type="number" name="" value="" min="0" max="32000" step="100" id="valdpO" placeholder=""> мм</nobr><button type="button" class="cOdp buttons">Применить</button></li>
		</ul>
	</div>
<!-- Изменить длинну пролёта -->

<!-- Изменить исполнение крана -->
<style>
	 select#pozharselect:-internal-list-box
	 {
	 	overflow-y: hidden;
	 }
</style>
	<div id="icO2" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li class="change_li" style="width:285px"><span id="obshprm">Общепромышленное</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li" style="width:355px">
				<span id="vzrivoshow">Взрывобезопасное</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong>
				<select name="vzriv" id="vzrivoselect" style="display:none;width: 70%;font-size:1.2em;margin:0 auto 17px auto" size="2" multiple="multiple">
					<option value="B1a, IIB Т5 (B1а, IIА Т5)">B1a, IIB Т5 (B1а, IIА Т5)</option>
					<option value="B1a, IIС Т5">B1a, IIС Т5</option>
				</select>
			</li>
			<li class="change_li" style="width:285px">
				<span id="pozharshow">Пожаробезопасное</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong>
				<select name="pozhar" id="pozharselect" style="display:none;width: 70%;font-size:1.2em;margin:0 auto 17px auto" size="2" multiple="multiple">
					<option value="П-I">П-I</option>
					<option value="П-II / П-IIa / П-III">П-II / П-IIa / П-III</option>
				</select>
			</li>
		</ul>
	</div>
<!-- Изменить исполнение крана -->

<!-- Температурный режим -->
	<div id="temperO" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="m50_2" class="celsM cels"></li>
			<li id="m40_2" class="cels celsM"></li>
			<li id="m20_2" class="cels celsM"></li>
			<li id="p40_2" class="cels celsP"></li>
			<li id="p60_2" class="celsP cels"></li>		
		</ul>
		<br>
		<button type="button" class="savetemper buttons">Применить</button>
	</div>
<!-- Температурный режим -->

<!-- Размещение -->
	<div id="размещение" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="Улица" class="change_li">
				<span>Улица</span>
				<strong class="price_" style="font-size:.9em">Расчитываем...</strong>
			</li>
			<li id="Навес" class="change_li">
				<span>Навес</span>
				<strong class="price_" style="font-size:.9em">Расчитываем...</strong>
			</li>
			<li id="Помещение" class="change_li">
				<span>Помещение</span>
				<strong class="price_" style="font-size:.9em">Расчитываем...</strong>
			</li>
		</ul>
	</div>
<!-- Размещение -->

<!-- ТИП УПРАВЛЕНИЯ КРАНОМ -->
	<div id="тип_управления" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="Ручное" class="change_li"><span>Ручное</span></li>
			<li id="Электро" class="change_li"><span>Электрическое</span></li>
		</ul>
	</div>
<!-- ТИП УПРАВЛЕНИЯ КРАНОМ -->

<!-- РАЗРЕЗНОЙ -->
	<div id="razrezO" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="Разрезной" class="change_li"><span>Разрезной</span></li>
			<li id="Неразрезной" class="change_li"><span>Неразрезной</span></li>
		</ul>
	</div>
<!-- РАЗРЕЗНОЙ -->

<!-- СТРОИТЕЛЬНАЯ ВЫСОТА КРАНА -->
	<div id="высота_крана" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="std" class="change_li"><span>Стандартная</span></li>
			<li id="middl" class="change_li"><span>Уменьшенная</span></li>			
			<li id="largest" class="change_li"><span>Увеличенная</span></li>
		</ul>
	</div>
<!-- СТРОИТЕЛЬНАЯ ВЫСОТА КРАНА -->

<!-- Степень защиты -->
	<div id="степень_защиты" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<!--<li id="IP31" class="change_li"><span>IP31</span></li>-->
			<li id="IP44" class="change_li"><span>IP44</span></li>
			<li id="IP54" class="change_li"><span>IP54</span></li>		
			<li id="IP65" class="change_li"><span>IP65</span></li>
		</ul>
	</div>
<!-- Степень защиты -->

<!-- Напряжение цепи -->
	<div id="напряжение_цепи" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="42В" class="change_li"><span>42 Вольта</span></li>
			<li id="24В" class="change_li"><span>24 Вольта</span></li>
		</ul>
	</div>
<!-- Напряжение цепи -->

<!-- Скорость -->
	<div id="скорость" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="metr20" class="change_li"><span>20 м/мин</span></li>
			<li id="metr40" class="change_li"><span>35 м/мин</span></li>
			<li id="metr8" class="change_li"><span>10 м/мин</span></li>
		</ul>
	</div>
<!-- Скорость -->

<!-- рельс -->
	<div id="рельс" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="relsP24" class="change_li"><span>Рельс Р24</span></li>
			<li id="relsP43" class="change_li"><span>Рельс Р43</span></li>
			<li id="relsP50" class="change_li"><span>Рельс Р50</span></li>
			<li id="relsP65" class="change_li"><span>Рельс КР65</span></li>
			<li id="relsP70" class="change_li"><span>Рельс КР70</span></li>
			<li id="relsP80" class="change_li"><span>Рельс КР80</span></li>
			<li id="kvadrat40" class="change_li"><span>Квадрат 40х40</span></li>
			<li id="kvadrat50" class="change_li"><span>Квадрат 50x50</span></li>
			<li id="kvadrat60" class="change_li"><span>Квадрат 60x60</span></li>
		</ul>
	</div>
<!-- рельс -->

<!-- двигатель -->
	<div id="двигатель" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="onespeed" class="change_li"><span>Одна скорость</span></li>
			<li id="double" class="change_li"><span>Две скорости</span></li>
		</ul>
	</div>
<!-- двигатель -->

<!---------------------------------------------------------------------------------------------------------->



<!-- Изменить грузоподъемность -->
	<div id="gpP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li class="change_li кг500_resume_p"><span>500 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг1000_resume_p"><span>1000 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг2000_resume_p"><span>2000 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг3200_resume_p"><span>3200 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг5000_resume_p"><span>5000 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг6300_resume_p"><span>6300 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг8000_resume_p"><span>8000 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг10000_resume_p"><span>10000 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг12500_resume_p"><span>12500 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
			<li class="change_li кг16000_resume_p"><span>16000 кг.</span><strong class="price_" style="font-size:.7em"></strong></li>
		</ul>
	</div>
<!-- Изменить грузоподъемность -->

<!-- Изменить длинну пролёта -->
	<div id="dpP2" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li class="change_li" style="width:60%;height:240px;background-color:#FFF;color:#444">
				<h3>Длинна пролёта:</h3>
				<nobr><input style="display:inline-block;margin:10px 0 0 30px;font-size:4em;height:1em;width:80%;color: #444;" type="number" name="" value="" min="0" max="15000" step="100" id="valdpP" placeholder=""> мм</nobr><button type="button" class="cPdp buttons">Применить</button></li>
		</ul>
	</div>
<!-- Изменить длинну пролёта -->

<!-- Изменить длинну консолей -->
	<div id="dkP2" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li class="change_li" style="width:60%;height:240px;background-color:#FFF;color:#444">
				<h3>Длинна пролёта:</h3>
				<nobr><input style="display:inline-block;margin:10px 0 0 30px;font-size:4em;height:1em;width:80%;color: #444;" type="number" name="" value="" min="0" step="100"  id="valdpPk" placeholder=""> мм</nobr><button type="button" class="cPdk buttons">Применить</button></li>
		</ul>
	</div>
<!-- Изменить длинну консолей -->


<!-- Изменить исполнение крана -->
	<div id="icP2" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li class="change_li" style="width:285px"><span id="obshprm2">Общепромышленное</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong></li>
			<li class="change_li" style="width:355px">
				<span id="vzrivoshow2">Взрывобезопасное</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong>
				<select name="vzriv2" id="vzrivoselect2" style="display:none;width: 70%;font-size:1.2em;margin:0 auto 17px auto" size="2" multiple="multiple">
					<option value="B1a, IIB Т5 (B1а, IIА Т5)">B1a, IIB Т5 (B1а, IIА Т5)</option>
					<option value="B1a, IIС Т5">B1a, IIС Т5</option>
				</select>
			</li>
			<li class="change_li" style="width:285px">
				<span id="pozharshow2">Пожаробезопасное</span><strong class="price_" style="font-size:.9em">Расчитываем...</strong>
				<select name="pozhar2" id="pozharselect2" style="display:none;width: 70%;font-size:1.2em;margin:0 auto 17px auto" size="2" multiple="multiple">
					<option value="П-I">П-I</option>
					<option value="П-II / П-IIa / П-III">П-II / П-IIa / П-III</option>
				</select>
			</li>
		</ul>
	</div>
<!-- Изменить исполнение крана -->

<!-- Температурный режим -->
	<div id="temperP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="m50_2P" class="cels celsM"></li>
			<li id="m40_2P" class="cels celsM"></li>
			<li id="m20_2P" class="cels celsM"></li>
			<li id="p40_2P" class="cels celsP"></li>
			<li id="p60_2P" class="cels celsP"></li>		
		</ul>
		<br>
		<button type="button" class="savetemperP buttons">Применить</button>
	</div>
<!-- Температурный режим -->

<!-- Размещение -->
	<div id="размещениеP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="УлицаP" class="change_li">
				<span>Улица</span>
				<strong class="price_" style="font-size:.9em">Расчитываем...</strong>
			</li>
			<li id="НавесP" class="change_li">
				<span>Навес</span>
				<strong class="price_" style="font-size:.9em">Расчитываем...</strong>
			</li>
			<li id="ПомещениеP" class="change_li">
				<span>Помещение</span>
				<strong class="price_" style="font-size:.9em">Расчитываем...</strong>
			</li>
		</ul>
	</div>
<!-- Размещение -->

<!-- ТИП УПРАВЛЕНИЯ КРАНОМ -->
	<div id="тип_управленияP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="РучноеP" class="change_li"><span>Ручное</span></li>
			<li id="ЭлектроP" class="change_li"><span>Электрическое</span></li>
		</ul>
	</div>
<!-- ТИП УПРАВЛЕНИЯ КРАНОМ -->

<!-- РАЗРЕЗНОЙ -->
	<div id="razrezP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="РазрезнойP" class="change_li"><span>Разрезной</span></li>
			<li id="НеразрезнойP" class="change_li"><span>Неразрезной</span></li>
		</ul>
	</div>
<!-- РАЗРЕЗНОЙ -->

<!-- СТРОИТЕЛЬНАЯ ВЫСОТА КРАНА -->
	<div id="высота_кранаP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="stdP" class="change_li"><span>Стандартная</span></li>
			<li id="middlP" class="change_li"><span>Уменьшенная</span></li>			
			<li id="largestP" class="change_li"><span>Увеличенная</span></li>
		</ul>
	</div>
<!-- СТРОИТЕЛЬНАЯ ВЫСОТА КРАНА -->

<!-- Степень защиты -->
	<div id="степень_защитыP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<!--<li id="IP31P" class="change_li"><span>IP31</span></li>-->
			<li id="IP44P" class="change_li"><span>IP44</span></li>
			<li id="IP54P" class="change_li"><span>IP54</span></li>		
			<li id="IP65P" class="change_li"><span>IP65</span></li>
		</ul>
	</div>
<!-- Степень защиты -->

<!-- Напряжение цепи -->
	<div id="напряжение_цепиP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="42ВP" class="change_li"><span>42 Вольта</span></li>
			<li id="24ВP" class="change_li"><span>24 Вольта</span></li>
		</ul>
	</div>
<!-- Напряжение цепи -->

<!-- Скорость -->
	<div id="скоростьP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="metr20P" class="change_li"><span>20 м/мин</span></li>
			<li id="metr35P" class="change_li"><span>35 м/мин</span></li>
			<li id="metr10P" class="change_li"><span>10 м/мин</span></li>
		</ul>
	</div>
<!-- Скорость -->

<!-- рельс -->
	<div id="рельсP" class="modal_change modal_change_hide">
		<ul class="ul_change">			
			<li id="rbalka24" class="change_li"><span>Балка 24М</span></li>
			<li id="rbalka30" class="change_li"><span>Балка 30М</span></li>
			<li id="rbalka36" class="change_li"><span>Балка 36М</span></li>
			<li id="rbalka45" class="change_li"><span>Балка 45М</span></li>
		</ul>
	</div>
<!-- рельс -->

<!-- двигатель -->
	<div id="двигательP" class="modal_change modal_change_hide">
		<ul class="ul_change">
			<li id="onespeedP" class="change_li"><span>Одна скорость</span></li>
			<li id="doubleP" class="change_li"><span>Две скорости</span></li>
		</ul>
	</div>
<!-- двигатель -->
</aside>

<aside id="dop_block">
	<h2 style="text-align:center;margin-bottom:20px">ДОПОЛНИТЕЛЬНО ВКЛЮЧЕНО В СТОИМОСТЬ КОММЕРЧЕСКОГО ПРЕДЛОЖЕНИЯ</h2>
	<span id="option_click1" class="head_dop_menu_open">Пути и токоподвод</span>
	<div id="option_1" class="dop_menu_open">
		<div class="dop_parametr"><i></i>
			<span class="add_dop_1"><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
			<p class="add_dop_option_paragraf">Добавить услугу<br>или оборудование</p>
		</div>
	</div>
	<span id="option_click2" class="head_dop_menu_open">Доп. оборудование и опции</span>
	<div id="option_2" class="dop_menu_open">
		<div class="dop_parametr"><i></i>
			<span class="add_dop_2"><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
			<p class="add_dop_option_paragraf">Добавить услугу<br>или оборудование</p>
		</div>
	</div>
	<span id="option_click3" class="head_dop_menu_open">Услуги</span>
	<div id="option_3" class="dop_menu_open">
		<div class="dop_parametr"><i></i>
			<span class="add_dop_3"><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
			<p class="add_dop_option_paragraf">Добавить услугу<br>или оборудование</p>
		</div>
	</div>
</aside>
<!-- Опции для блоков ТОКОПОДВОД, ДОП. ОПЦИИ И УСЛУГИ -->
<?php require_once("construct_calc/menu_dop.php"); ?>
<!-- Опции для блоков ТОКОПОДВОД, ДОП. ОПЦИИ И УСЛУГИ -->
<div style="clear:both"></div>
<div id="spravka" class="animated" style="display:none">
	<span id="close_spravka"><i class="fa fa-times" aria-hidden="true"></i></span>
	<span id="spravka_html">Подсказка и</span>
	<a href="http://uniqcrane.ru" target="blank" title="Перейти для справки">подробнее</a>
</div>
<link rel="stylesheet" href="<?=$url_this;?>css/animate.css">
<div id="scripter">
	<script src="<?=$url_this;?>js/script.js" type="text/javascript" charset="utf-8"></script>
</div>
<link rel="stylesheet" href="<?=$url_this;?>css/font-awesome.min.css">
<?php
//require_once("construct_calc/podscheti.php");