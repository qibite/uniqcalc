<?php
/*
Plugin Name: Калькулятор UNICALC
Description: Плагин для расчета производства кранов компании unicrane. Для работы плагина требуется создать новую страницу (без слайдеров и т.п.), и написать в тектсте статьи шорткод [unicalc], больше ничего не требуется.
Version: 1.0
Author: Алексей Сергеевич
Author URI: https://kwork.ru/user/qibite
*/
function activate_unicalc()
{
	global $wpdb;
	$wpdb->show_errors();

	$electro_tali = $wpdb->prefix . 'electro_tali';
	if ($wpdb->get_var("SHOW TABLES LIKE '$electro_tali'") != $electro_tali) {
		$sql = "CREATE TABLE IF NOT EXISTS `$electro_tali` (
		`id` int NOT NULL AUTO_INCREMENT,
		`gp` int(10) NOT NULL,
		`visota` int NOT NULL,
		`strana` varchar(60) NOT NULL,
		`type_tali` varchar(60) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_electro_tali.php");	
	}

	$ruchnie_tali = $wpdb->prefix . 'ruchnie_tali';
	if ($wpdb->get_var("SHOW TABLES LIKE '$ruchnie_tali'") != $ruchnie_tali) {
		$sql = "CREATE TABLE IF NOT EXISTS `$ruchnie_tali` (
		`id` int NOT NULL AUTO_INCREMENT,
		`gp` int(10) NOT NULL,
		`visota` int NOT NULL,
		`strana` varchar(60) NOT NULL,
		`ispolnenie` varchar(60) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_ruchnie_tali.php");	
	}

	$opornie_crani = $wpdb->prefix . 'opornie_crani';
	if ($wpdb->get_var("SHOW TABLES LIKE '$opornie_crani'") != $opornie_crani) {
		$sql = "CREATE TABLE IF NOT EXISTS `$opornie_crani` (
		`id` int NOT NULL AUTO_INCREMENT,
		`gp` int(10) NOT NULL,
		`shirina_mezh_putami` int NOT NULL,
		`rels` varchar(60) NOT NULL,
		`upravlenie` varchar(60) NOT NULL,
		`sroki` int NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_opornie_crani.php");	
	}

	$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
	if ($wpdb->get_var("SHOW TABLES LIKE '$podvesnie_crani'") != $podvesnie_crani) {
		$sql = "CREATE TABLE IF NOT EXISTS `$podvesnie_crani` (
		`id` int NOT NULL AUTO_INCREMENT,
		`gp` int(10) NOT NULL,
		`shirina_mezh_putami` int NOT NULL,
		`rels` varchar(60) NOT NULL,
		`upravlenie` varchar(60) NOT NULL,
		`sroki` int NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_podvesnie_crani.php");	
	}

	$montazh_provod = $wpdb->prefix . 'montazh_provod';
	if ($wpdb->get_var("SHOW TABLES LIKE '$montazh_provod'") != $montazh_provod) {
		$sql = "CREATE TABLE IF NOT EXISTS `$montazh_provod` (
		`id` int (10) NOT NULL AUTO_INCREMENT,
		`type` varchar(60) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		$wpdb->insert($montazh_provod,array('type'=>'Кабельный с кольцами', 'price'=>850 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_provod,array('type'=>'Кабельный с тележками', 'price'=>850 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_provod,array('type'=>'Фкстонный (С профиль)', 'price'=>850 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_provod,array('type'=>'Открытые троллеи', 'price'=>1200 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_provod,array('type'=>'Закрытые троллеи', 'price'=>1200 ),array( '%s', '%d' ));
	}

	$stoimost_provod = $wpdb->prefix . 'stoimost_provod';
	if ($wpdb->get_var("SHOW TABLES LIKE '$stoimost_provod'") != $stoimost_provod) {
		$sql = "CREATE TABLE IF NOT EXISTS `$stoimost_provod` (
		`id` int (10) NOT NULL AUTO_INCREMENT,
		`gp` varchar(60) NOT NULL,
		`type` varchar(60) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		$wpdb->insert($stoimost_provod,array('gp'=>'Любая', 'type'=>'Кабельный с кольцами', 'price'=>550 ),array( '%s', '%s', '%d' ));
		$wpdb->insert($stoimost_provod,array('gp'=>'Любая', 'type'=>'Кабельный с тележками', 'price'=>0 ),array( '%s', '%s', '%d' ));
		$wpdb->insert($stoimost_provod,array('gp'=>'Любая', 'type'=>'Фкстонный (С профиль)', 'price'=>0 ),array( '%s', '%s', '%d' ));
		$wpdb->insert($stoimost_provod,array('gp'=>'Любая', 'type'=>'Открытые троллеи', 'price'=>0 ),array( '%s', '%s', '%d' ));
		$wpdb->insert($stoimost_provod,array('gp'=>'Любая', 'type'=>'Закрытые троллеи', 'price'=>0 ),array( '%s', '%s', '%d' ));
	}

	$montazh_rels = $wpdb->prefix . 'montazh_rels';
	if ($wpdb->get_var("SHOW TABLES LIKE '$montazh_rels'") != $montazh_rels) {
		$sql = "CREATE TABLE IF NOT EXISTS `$montazh_rels` (
		`id` int (10) NOT NULL AUTO_INCREMENT,
		`type` varchar(60) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		$wpdb->insert($montazh_rels,array('type'=>'Квадрат 40x40', 'price'=>1150 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'Квадрат 50x50', 'price'=>1250 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'Квадрат 60x60', 'price'=>1450 ),array( '%s', '%d' ));
	}

	$stoimost_rels = $wpdb->prefix . 'stoimost_rels';
	if ($wpdb->get_var("SHOW TABLES LIKE '$stoimost_rels'") != $stoimost_rels) {
		$sql = "CREATE TABLE IF NOT EXISTS `$stoimost_rels` (
		`id` int (10) NOT NULL AUTO_INCREMENT,
		`type` varchar(60) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		$wpdb->insert($stoimost_rels,array('type'=>'Квадрат 40x40', 'price'=>1150 ),array( '%s', '%d' ));
		$wpdb->insert($stoimost_rels,array('type'=>'Квадрат 50x50', 'price'=>1250 ),array( '%s', '%d' ));
		$wpdb->insert($stoimost_rels,array('type'=>'Квадрат 60x60', 'price'=>1450 ),array( '%s', '%d' ));
	}

	$montazh_ruchnih_cran = $wpdb->prefix . 'montazh_ruchnih_cran';
	if ($wpdb->get_var("SHOW TABLES LIKE '$montazh_ruchnih_cran'") != $montazh_ruchnih_cran) {
		$sql = "CREATE TABLE IF NOT EXISTS `$montazh_ruchnih_cran` (
		`id` int (10) NOT NULL AUTO_INCREMENT,		
		`gp` int(255) NOT NULL,
		`shirina_mezh_putami` int(255) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_montazh_ruchnih_cran.php");	
	}

	$montazh_electro_cran = $wpdb->prefix . 'montazh_electro_cran';
	if ($wpdb->get_var("SHOW TABLES LIKE '$montazh_electro_cran'") != $montazh_electro_cran) {
		$sql = "CREATE TABLE IF NOT EXISTS `$montazh_electro_cran` (
		`id` int (10) NOT NULL AUTO_INCREMENT,		
		`gp` int(255) NOT NULL,
		`shirina_mezh_putami` int(255) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_montazh_electro_cran.php");	
	}	

	$dostavka_cranbalok = $wpdb->prefix . 'dostavka_cranbalok';
	if ($wpdb->get_var("SHOW TABLES LIKE '$dostavka_cranbalok'") != $dostavka_cranbalok) {
		$sql = "CREATE TABLE IF NOT EXISTS `$dostavka_cranbalok` (
		`id` int (10) NOT NULL AUTO_INCREMENT,
		`rasstoyanie` int(255) NOT NULL,
		`obshiyL` int(255) NOT NULL,		
		`type` varchar(60) NOT NULL,
		`price` int(255) NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_dostavka_cranbalok.php");	
	}	

	$km_viezd = $wpdb->prefix . 'km_viezd';
	if ($wpdb->get_var("SHOW TABLES LIKE '$km_viezd'") != $km_viezd) {
		$sql = "CREATE TABLE IF NOT EXISTS `$km_viezd` (
		`id` int (10) NOT NULL AUTO_INCREMENT,
		`type` varchar(255) NOT NULL,
		`price` int(255) NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);		
		$wpdb->insert($km_viezd,array('type'=>'Проживание', 'price'=>18000 ),array( '%s', '%d' ));
		$wpdb->insert($km_viezd,array('type'=>'Выезд эксперта', 'price'=>8000 ),array( '%s', '%d' ));
		$wpdb->insert($km_viezd,array('type'=>'0', 'price'=>0 ),array( '%s', '%d' ));
		$wpdb->insert($km_viezd,array('type'=>'1000', 'price'=>22 ),array( '%s', '%d' ));
		$wpdb->insert($km_viezd,array('type'=>'3000', 'price'=>16 ),array( '%s', '%d' ));
		$wpdb->insert($km_viezd,array('type'=>'3001', 'price'=>13 ),array( '%s', '%d' ));
	}

	$shef_montazh = $wpdb->prefix . 'shef_montazh';
	if ($wpdb->get_var("SHOW TABLES LIKE '$shef_montazh'") != $shef_montazh) {
		$sql = "CREATE TABLE IF NOT EXISTS `$shef_montazh` (
		`id` int (10) NOT NULL AUTO_INCREMENT,
		`gp` int(255) NOT NULL,
		`shirina_mezh_putami` int(255) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_shef_montazh.php");	
	}

	$variants = $wpdb->prefix . 'variants';
	if ($wpdb->get_var("SHOW TABLES LIKE '$variants'") != $variants) {
		$sql = "CREATE TABLE IF NOT EXISTS `$variants` (
		`id` int (30) NOT NULL AUTO_INCREMENT,		
		`code_option` varchar(255) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_variants.php");	
	}

	$mr = $wpdb->prefix . 'mr';
	if ($wpdb->get_var("SHOW TABLES LIKE '$mr'") != $mr) {
		$sql = "CREATE TABLE IF NOT EXISTS `$mr` (
		`id` int (30) NOT NULL AUTO_INCREMENT,
		`model` varchar(255) NOT NULL,
		`code` varchar(255) NOT NULL,
		`gp` int(255) NOT NULL,
		`shirina` int(255) NOT NULL,
		`base_price` int NOT NULL,
		`double_speed_price` int NOT NULL,
		`brake_price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_m-r.php");	
	}

	$eshit = $wpdb->prefix . 'eshit';
	if ($wpdb->get_var("SHOW TABLES LIKE '$eshit'") != $eshit) {
		$sql = "CREATE TABLE IF NOT EXISTS `$eshit` (
		`id` int (30) NOT NULL AUTO_INCREMENT,
		`gp` int(255) NOT NULL,
		`shirina` int(255) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_shit.php");	
	}
}

function deactivate_unicalc()
{	
	return true;
}

function uninstall_unicalc()
{
	return false;
}
register_activation_hook( __FILE__, 'activate_unicalc' );
register_deactivation_hook(__file__, 'deactivate_unicalc');
register_uninstall_hook(__file__, 'uninstall_unicalc');

function add_menu_calc()
{
	add_menu_page( 'Администрирование калькулятора', 'Unicalc', 10, 'unicalcplugin', 'calc_view', plugin_dir_url( __FILE__ ).'icon.png' );
}
add_action( 'admin_menu', 'add_menu_calc' );

function calc_view () {
	$urlplgn = plugin_dir_url( __FILE__ );
	switch ($_GET['view']) {
		case 'editprice':
			$view = 'edit_price';
			break;
		case 'delettable':
			$view = 'delettable';
			break;
		default:
			$view = 'main';
			break;
	}
	include_once ("admin_view/$view.php");
}

function vivod () {
	ob_start();
	include_once('user_view/index.php');
	return ob_get_clean();
}
add_shortcode('unicalc', 'vivod');


add_action('wp_ajax_change_price_base', 'change_price');
// Изменение цены в прайсах
function change_price ($value='')
{

	global $wpdb;
	$table = $_POST['db'];
	$name_price = $_POST['name_price'];
	$id = $_POST['edited_id'];
	$new_price = $_POST['new_price'];
	// Цена на доставку кранбалок в копейках пересчет!
	if ( $table == ($wpdb->prefix.'dostavka_cranbalok')) {
		$table = $_POST['db'];
		$id = $_POST['edited_id'];
		$new_price = $_POST['new_price'];
		$new_price = $new_price*100;
		$res = $wpdb->update(
				$table, 
				array( $name_price => $new_price),
				array('id' => $id),
				array( '%d' ),
				array( '%d' )
			);
		echo $new_price/100;
	}
	// Цена на остальное 
	elseif 	( $table == $wpdb->prefix.'electro_tali_submit' || $wpdb->prefix.'ruchnie_tali_submit' || $wpdb->prefix.'opornie_crani_submit' || $wpdb->prefix.'podvesnie_crani_submit' || $wpdb->prefix.'variants_submit' || $wpdb->prefix.'montazh_rels_submit' || $wpdb->prefix.'montazh_provod_submit' || $wpdb->prefix.'stoimost_rels_result_submit' || $wpdb->prefix.'montazh_ruchnih_cran_submit' || $wpdb->prefix.'montazh_electro_cran_submit' || $wpdb->prefix.'km_viezd_submit' || $wpdb->prefix.'shef_montazh_submit' || $wpdb->prefix.'mr' ) {
		$table = $_POST['db'];
		$id = $_POST['edited_id'];
		$new_price = $_POST['new_price'];
		//$new_price = $new_price*100;
		global $wpdb;
		$res = $wpdb->update(
				$table, 
				array( $name_price => $new_price),
				array('id' => $id),
				array( '%d' ),
				array( '%d' )
			);
	echo $new_price;
	}
	else echo "---";
	wp_die();
}

add_action('wp_ajax_calc_cran', 'stoimost_crana');
add_action('wp_ajax_nopriv_calc_cran', 'stoimost_crana');
function stoimost_crana() {
	$gp = $_POST['_gp'];
	$shir = $_POST['_shir'];
	$upravl = '\''.$_POST['_upravl'].'\'';

	global $wpdb;$wpdb->show_errors();
	$opornie_crani = $wpdb->prefix . 'opornie_crani';
	$opornie_crani_result = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, rels, upravlenie, sroki, price FROM $opornie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shir AND upravlenie = $upravl");
		if ($opornie_crani_result) {
			print_r($opornie_crani_result[0]->price);
		}
//		sleep(2);
 //echo  $upravl;

	wp_die();
}

add_action('wp_ajax_calc_sroki', 'sroki_crana');
add_action('wp_ajax_nopriv_calc_sroki', 'sroki_crana');
function sroki_crana() {
	$gp = $_POST['_gp'];
	$shir = $_POST['_shir'];
	$upravl = '\''.$_POST['_upravl'].'\'';

	global $wpdb;$wpdb->show_errors();
	$opornie_crani = $wpdb->prefix . 'opornie_crani';
	$opornie_crani_result = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, rels, upravlenie, sroki, price FROM $opornie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shir AND upravlenie = $upravl");
		if ($opornie_crani_result) {
			print_r($opornie_crani_result[0]->sroki);
		}

	wp_die();
}


//ТАЛИ
add_action('wp_ajax_calc_tal', 'tal');
add_action('wp_ajax_nopriv_calc_tal', 'tal');
function tal () {
	$upravlenie_t = $_POST['_upravlenie'];
	$type_t = '\''.$_POST['_type'].'\'';
	$country_t = '\''.$_POST['_country'].'\'';
	$visota_t = $_POST['_visota'];
	$ispolnenie_t = '\''.$_POST['_ispolnenie'].'\'';
	$gp_t = $_POST['_gp'];

	global $wpdb; $wpdb->show_errors();
//if ($upravlenie_t == 'Электро') {echo 'Yes';}else echo 'No';
	if ($upravlenie_t == 'Электро') {
		$tal_table = $wpdb->prefix . 'electro_tali';
		$tal_result = $wpdb->get_results("SELECT id, gp, visota, strana, type_tali, price FROM $tal_table WHERE gp = $gp_t AND visota>=$visota_t AND strana = $country_t AND type_tali = $type_t");
		if ($tal_result) {
			if ($country_t == '\'Болгария\'') {
				// Получаем текущие курсы валют в rss-формате с сайта www.cbr.ru 
				$content = get_curs_euro(); 
				// Разбираем содержимое, при помощи регулярных выражений 
				$pattern = "#<Valute ID=\"([^\"]+)[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>([^<]+)#i"; 
				preg_match_all($pattern, $content, $out, PREG_SET_ORDER); 
				$dollar = ""; 
				$euro = ""; 
				foreach($out as $cur) 
				{
				if($cur[2] == 978) $euro   = str_replace(",",".",$cur[4]); 
				}
				print_r($tal_result[0]->price*$euro);
			} else print_r($tal_result[0]->price);
		}
	} else {
		$tal_table = $wpdb->prefix . 'ruchnie_tali';
		$tal_result = $wpdb->get_results("SELECT id, gp, visota, strana, ispolnenie, price FROM $tal_table WHERE gp = $gp_t AND visota>=$visota_t AND strana = $country_t AND ispolnenie = $ispolnenie_t");
		if ($tal_result) {
			print_r($tal_result[0]->price);
		}
	  }
	

	
	

	wp_die();
}


function get_curs_euro() { 
					// Формируем сегодняшнюю дату 
					$date = date("d/m/Y"); 
					// Формируем ссылку 
					$link = "http://www.cbr.ru/scripts/XML_daily.asp?date_req=$date"; 
					// Загружаем HTML-страницу 
					$fd = fopen($link, "r"); 
					$text=""; 
					if (!$fd) echo "Запрашиваемая страница не найдена"; 
					else 
					{ 
					// Чтение содержимого файла в переменную $text 
					while (!feof ($fd)) $text .= fgets($fd, 4096); 
					} 
					// Закрыть открытый файловый дескриптор 
					fclose ($fd); 
					return $text;
				}

// Стоимость пульта электро управления
add_action('wp_ajax_calc_crane_electro_upravleniya', 'price_pulta');
add_action('wp_ajax_nopriv_calc_crane_electro_upravleniya', 'price_pulta');
function price_pulta () {
	$variant_id = $_POST['_variant_id'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	$variants_result = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $variant_id");
		if ($variants_result) {
			print_r($variants_result[0]->price);
		}

	wp_die();
}
// Стоимость пульта электро управления

// Стоимость пульта электро управления МНОЖЕСТВЕННЫЙ ВЫБОР _pult_TELECRANE_id _pult_IKUSI_id _pult_HBC_id
add_action('wp_ajax_calc_pults', 'price_pultov');
add_action('wp_ajax_nopriv_calc_pults', 'price_pultov');
function price_pultov () {
	$pult_TELECRANE_id = $_POST['_pult_TELECRANE_id'];
	$pult_IKUSI_id = $_POST['_pult_IKUSI_id'];
	$pult_HBC_id = $_POST['_pult_HBC_id'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	$variants_result_TELECRANE = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $pult_TELECRANE_id");
	$variants_result_IKUSI = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $pult_IKUSI_id");
	$variants_result_HBC = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $pult_HBC_id");
	if ($variants_result_TELECRANE && variants_result_IKUSI && variants_result_HBC)
	{
		$TELECRANE = $variants_result_TELECRANE[0]->price;
		$IKUSI = $variants_result_IKUSI[0]->price;
		$HBC = $variants_result_HBC[0]->price;
	}
	$pult_rsult = array('pTELECRANE' => $TELECRANE, 'pIKUSI' => $IKUSI, 'pHBC' => $HBC);
	echo json_encode($pult_rsult);

	wp_die();
}
//// _joy_TELECRANE_id _joy_IKUSI_id _joy_HBC_id
add_action('wp_ajax_calc_joy', 'price_joy');
add_action('wp_ajax_nopriv_calc_joy', 'price_joy');
function price_joy () {
	$joy_TELECRANE_id = $_POST['_joy_TELECRANE_id'];
	$joy_IKUSI_id = $_POST['_joy_IKUSI_id'];
	$joy_HBC_id = $_POST['_joy_HBC_id'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	$variants_result_TELECRANE = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $joy_TELECRANE_id");
	$variants_result_IKUSI = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $joy_IKUSI_id");
	$variants_result_HBC = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $joy_HBC_id");
	if ($variants_result_TELECRANE && variants_result_IKUSI && variants_result_HBC)
	{
		$TELECRANE = $variants_result_TELECRANE[0]->price;
		$IKUSI = $variants_result_IKUSI[0]->price;
		$HBC = $variants_result_HBC[0]->price;
	}
	$pult_rsult = array('jTELECRANE' => $TELECRANE, 'jIKUSI' => $IKUSI, 'jHBC' => $HBC);
	echo json_encode($pult_rsult);

	wp_die();
}
// Стоимость пульта электро управления МНОЖЕСТВЕННЫЙ ВЫБОР

// Стоимость преобразователя
add_action('wp_ajax_calc_chastotnik', 'price_chastotnika');
add_action('wp_ajax_nopriv_calc_chastotnik', 'price_chastotnika');
function price_chastotnika () {
	$chastotnik_id = $_POST['_chastotnik_id'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	$variants_result = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $chastotnik_id");
		if ($variants_result) {
			print_r($variants_result[0]->price);
		}

	wp_die();
}
// 8.4 преобразователь
add_action('wp_ajax_calc_double_speed', 'price_preobrazovatelya');
add_action('wp_ajax_nopriv_calc_double_speed', 'price_preobrazovatelya');
function price_preobrazovatelya () {

	$motor_code = '\''.$_POST['_motor_code'].'\'';
	$motor_gp = $_POST['_motor_gp'];
	$shirina = $_POST['_shirina'];	

	global $wpdb;
	$mrtable = $wpdb->prefix . 'mr';
	$mr_result = $wpdb->get_results("SELECT id, model, code, gp, shirina, base_price, double_speed_price, brake_price FROM $mrtable WHERE code = $motor_code AND gp = $motor_gp AND shirina >= $shirina");
		if ($mr_result) {
			print_r($mr_result[0]->double_speed_price);
		}

	wp_die();
}
// Стоимость преобразователя

// Стоимость всех преобразователей _preobrazovatel_id_8_5 _preobrazovatel_id_8_6 _preobrazovatel_id_8_7
add_action('wp_ajax_calc_preobrazovatel', 'price_chastotnikov');
add_action('wp_ajax_nopriv_calc_preobrazovatel', 'price_chastotnikov');
function price_chastotnikov () {
	$preobrazovatel_id_8_5 = $_POST['_preobrazovatel_id_8_5'];
	$preobrazovatel_id_8_6 = $_POST['_preobrazovatel_id_8_6'];
	$preobrazovatel_id_8_7 = $_POST['_preobrazovatel_id_8_7'];

	$motor_code = '\''.$_POST['_motor_code'].'\''; 
	$motor_gp = $_POST['_motor_gp'];
	$shirina = $_POST['_shirina'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	$variants_result_8_5 = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $preobrazovatel_id_8_5");
	$variants_result_8_6 = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $preobrazovatel_id_8_6");
	$variants_result_8_7 = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $preobrazovatel_id_8_7");


	$mrtable = $wpdb->prefix . 'mr';
	$mr_result = $wpdb->get_results("SELECT id, model, code, gp, shirina, base_price, double_speed_price, brake_price FROM $mrtable WHERE code = $motor_code AND gp = $motor_gp AND shirina >= $shirina");

		if ($variants_result_8_5 && variants_result_8_6 && variants_result_8_7 && mr_result) {
			$result_8_5 = $variants_result_8_5[0]->price;
			$result_8_6 = $variants_result_8_6[0]->price;
			$result_8_7 = $variants_result_8_7[0]->price;
			$result_8_4 = $mr_result[0]->double_speed_price;

			$preobrazovatel_result = array('preo8_4' => $result_8_4, 'preo8_5' => $result_8_5, 'preo8_6' => $result_8_6, 'preo8_7' => $result_8_7/*, 'p9_5' => $m9_5*/);
			echo json_encode($preobrazovatel_result);			
		}

	

	wp_die();
}
// Стоимость всех преобразователей

//Стоимость мотора
add_action('wp_ajax_calc_motor', 'price_motor');
add_action('wp_ajax_nopriv_calc_motor', 'price_motor');
function price_motor () {
	$motor_code = '\''.$_POST['_motor_code'].'\''; 
	$motor_gp = $_POST['_motor_gp'];
	$shirina = $_POST['_shirina'];

	global $wpdb;
	$mrtable = $wpdb->prefix . 'mr';
	$mr_result = $wpdb->get_results("SELECT id, model, code, gp, shirina, base_price, double_speed_price, brake_price FROM $mrtable WHERE code = $motor_code AND gp = $motor_gp AND shirina >= $shirina");
		if ($mr_result) {
			//print_r($mr_result[0]->base_price);
			$result_motor = array( 'id' => $mr_result[0]->id, 'code' => $mr_result[0]->code, 'base_price' => $mr_result[0]->base_price, 'double_speed_price' => $mr_result[0]->double_speed_price, 'brake_price' => $mr_result[0]->brake_price );
			echo json_encode($result_motor);
		}
		

	wp_die();
}
//Стоимость мотора

//Стоимость моторов
add_action('wp_ajax_calc_motors', 'price_motors');
add_action('wp_ajax_nopriv_calc_motors', 'price_motors');
function price_motors () {
	 
	$motor_gp = $_POST['_motor_gp'];
	$shirina = $_POST['_shirina'];

	global $wpdb;$wpdb->show_errors();
	$mrtable = $wpdb->prefix . 'mr';
	$mr_result = $wpdb->get_results("SELECT id, code, gp, shirina, base_price FROM $mrtable WHERE code = '9.2' AND gp = $motor_gp AND shirina >= $shirina");
		if ($mr_result) {
			$m9_2 = $mr_result[0]->base_price;
		}
	$mr_result = $wpdb->get_results("SELECT id, code, gp, shirina, base_price FROM $mrtable WHERE code = '9.3' AND gp = $motor_gp AND shirina >= $shirina");
		if ($mr_result) {
			$m9_3 = $mr_result[0]->base_price;
		}
	$mr_result = $wpdb->get_results("SELECT id, code, gp, shirina, base_price FROM $mrtable WHERE code = '9.4' AND gp = $motor_gp AND shirina >= $shirina");
		if ($mr_result) {
			$m9_4 = $mr_result[0]->base_price;
		}
	$mr_result = $wpdb->get_results("SELECT id, code, gp, shirina, base_price FROM $mrtable WHERE code = '9.5' AND gp = $motor_gp AND shirina >= $shirina");
		if ($mr_result) {
			$m9_5 = $mr_result[0]->base_price;
		}
	$moto_result = array('p9_2' => $m9_2, 'p9_3' => $m9_3, 'p9_4' => $m9_4, 'p9_5' => $m9_5);
	echo json_encode($moto_result);
	wp_die();
}
//Стоимость моторов

//Стоимость электрощита
add_action('wp_ajax_calc_shit', 'price_shit');
add_action('wp_ajax_nopriv_calc_shit', 'price_shit');
function price_shit () {
	$shit_gp = $_POST['_gp'];
	$shit_shirina = $_POST['_shirina'];

	global $wpdb;$wpdb->show_errors();
	$eshit = $wpdb->prefix . 'eshit';
	$eshit_result = $wpdb->get_results("SELECT id, gp, shirina, price FROM $eshit WHERE gp = $shit_gp AND shirina >= $shit_shirina");
		if ($eshit_result) {
			print_r($eshit_result[0]->price);
		}

	wp_die();
}
//Стоимость  электрощита

//Стоимость Аварийного выключателя
add_action('wp_ajax_calc_stop', 'price_stop');
add_action('wp_ajax_nopriv_calc_stop', 'price_stop');
function price_stop () {
	$stop_id = $_POST['_stop_id'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	$variants_result = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $stop_id");
		if ($variants_result) {
			print_r($variants_result[0]->price);
		}

	wp_die();
}
//Стоимость Аварийного выключателя

//Стоимость тормоза кранового
add_action('wp_ajax_calc_tormoz', 'price_tormoz');
add_action('wp_ajax_nopriv_calc_tormoz', 'price_tormoz');
function price_tormoz () {
	$motor_code = '\''.$_POST['_motor_code'].'\'';
	$motor_gp = $_POST['_motor_gp'];
	$shirina = $_POST['_shirina'];

	global $wpdb;$wpdb->show_errors();
	$mrtable = $wpdb->prefix . 'mr';
	$mr_result = $wpdb->get_results("SELECT id, code, gp, shirina, brake_price FROM $mrtable WHERE code = $motor_code AND gp = $motor_gp AND shirina >= $shirina");
		if ($mr_result) {
			$tormoz = $mr_result[0]->brake_price;
		}
		echo $tormoz;

	wp_die();
}
//Стоимость тормоза кранового 

//Стоимость Аварийного выключателя
add_action('wp_ajax_calc_pokraska', 'price_pokraska');
add_action('wp_ajax_nopriv_calc_pokraska', 'price_pokraska');
function price_pokraska () {
	$pokraska_id = $_POST['_pokraska_id'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	$variants_result = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $pokraska_id");
		if ($variants_result) {
			print_r($variants_result[0]->price);
		}

	wp_die();
}
//Стоимость Аварийного выключателяca pokraska


/*******************************************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																																	Функции для раздела
*																																	
*																																	ПУТИ И ТОКОПОДВОД
*
*
*
*
*
*
*******************************************************************************************************************************************************************************************************************************************************************/

// Рельс
add_action('wp_ajax_postavka_rels', 'postavka_rels');
add_action('wp_ajax_nopriv_postavka_rels', 'postavka_rels');
function postavka_rels () {
	$rels_gp = $_POST['_rels_gp'];
	$rels_upravlenie = '\''.$_POST['_rels_upravlenie'].'\'';
	$rels_shirinamp = $_POST['_rels_dlinna'];
	$url_img = $_POST['rels_url_img'];

	global $wpdb;$wpdb->show_errors();
	$opornie_crani = $wpdb->prefix . 'opornie_crani';
	$opornie_crani_result = $wpdb->get_results("SELECT gp, shirina_mezh_putami, rels, upravlenie, price FROM $opornie_crani WHERE gp = $rels_gp AND shirina_mezh_putami >= $rels_shirinamp AND upravlenie = $rels_upravlenie");

	$name_relsa = '\''.$opornie_crani_result[0]->rels.'\'';

	$podborka_rels = $wpdb->prefix . 'stoimost_rels';
	$podborka_rels_result = $wpdb->get_results("SELECT type, price FROM $podborka_rels WHERE type = $name_relsa");
	if ($podborka_rels_result) {
		echo '<span><img src="'.$url_img.'images/_5.11.png" alt="" style="width:140px"><p><b class="hz4">Рельс '.($rels_shirinamp/1000).'м. '.$podborka_rels_result[0]->type.'</b><br><span class="opisanie_parametra">подобран в соответствии с параметрами крана</span></p></span><span class="hiddened">'.number_format($podborka_rels_result[0]->price*($rels_shirinamp/1000), 0, ',', ' ').' руб</span>';
	}

	wp_die();
}
// Рельс '<p><b class="hz4">Разработка проектной документации</b><br><span class="opisanie_parametra">'.$podborka_rels_result[0]->type.'</span></p></span><span class="hiddened">'.$podborka_rels_result[0]->price.' руб</span>'

// Провод
add_action('wp_ajax_postavka_provod', 'postavka_provod');
add_action('wp_ajax_nopriv_postavka_provod', 'postavka_provod');
function postavka_provod () {
	$name_provod = '\''.$_POST['_name_provod'].'\'';
	$provod_dlinna = $_POST['_provod_dlinna'];
	$url_img = $_POST['provod_url_img'];

	global $wpdb;$wpdb->show_errors();
	$stoimost_provod = $wpdb->prefix . 'stoimost_provod';
	$stoimost_provod_result = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = $name_provod ");
	if ($stoimost_provod_result) {
		echo '<div class="dop_parametr tokoprovod"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'.$url_img.'" alt="" style="width:200px"><h4>'.$stoimost_provod_result[0]->type.'</h4><p><span class="opisanie_parametra">Цена за 1 метр '.$stoimost_provod_result[0]->price.' руб</span><br><span class="stoimost_parametra">'.number_format($stoimost_provod_result[0]->price*($provod_dlinna/1000), 0, ',', ' ').' руб</span></p>';
	}
	wp_die();
}

add_action('wp_ajax_tokopodvod_all', 'tok_all');
add_action('wp_ajax_nopriv_tokopodvod_all', 'tok_all');
function tok_all () {
	$dlinna = $_POST['_dlinna'];
	global $wpdb;$wpdb->show_errors();
	$stoimost_provod = $wpdb->prefix . 'stoimost_provod';
	$cabkol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Кабельный с кольцами' ");
	$cabtel = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Кабельный с тележками' ");
	$feston = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Фестонный (С профиль)' ");
	$opentrol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Открытые троллеи' ");
	$closetrol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Закрытые троллеи' ");
	$prices = array('tok1' => $cabkol[0]->price * ($dlinna/1000), 'tok2' => $cabtel[0]->price * ($dlinna/1000), 'tok3' => $feston[0]->price * ($dlinna/1000), 'tok4' => $opentrol[0]->price * ($dlinna/1000), 'tok5' => $closetrol[0]->price * ($dlinna/1000) );
	echo json_encode($prices);
	wp_die();
}
// Провод


/*******************************************************************************************************************************************************************************************************************************************************************
*
*
*
*
*																															  Функции для раздела
*																																	
*																																	УСЛУГИ
*
*
*
*
*
*
*******************************************************************************************************************************************************************************************************************************************************************/


// МОНТАЖ КРАНА
add_action('wp_ajax_montazh_crana_r', 'calc_montazh_crana');
add_action('wp_ajax_nopriv_montazh_crana_r', 'calc_montazh_crana');
function calc_montazh_crana () {
 $gp = $_POST['_gp'];
 $uprav = boolval($_POST['_uprav']);
 $shirina = $_POST['_shirina'];
 global $wpdb;$wpdb->show_errors();
 $table_montazha = $wpdb->prefix . 'montazh_ruchnih_cran';
 $table_montazha_res = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, price FROM $table_montazha WHERE gp = $gp AND shirina_mezh_putami >= $shirina ");
 if ($table_montazha_res) {
 	echo '<span name="montazh"><img src="http://'.$_SERVER['SERVER_NAME'].'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/nophotos.png" alt="" style="width:140px"><p><b class="hz4">Монтаж кран-балок</b><br><span class="opisanie_parametra">Тут нужно приписку</span></p></span><span class="hiddened">'.$table_montazha_res[0]->price.' руб</span>';
 }
 wp_die();
}

add_action('wp_ajax_montazh_crana_el', 'calc_montazh_crana_el');
add_action('wp_ajax_nopriv_montazh_crana_el', 'calc_montazh_crana_el');
function calc_montazh_crana_el () {
 $gp = $_POST['_gp'];
 $uprav = boolval($_POST['_uprav']);
 $shirina = $_POST['_shirina'];
 global $wpdb;$wpdb->show_errors();
 $table_montazha = $wpdb->prefix . 'montazh_electro_cran';
 $table_montazha_res = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, price FROM $table_montazha WHERE gp = $gp AND shirina_mezh_putami >= $shirina ");
 if ($table_montazha_res) {
 	echo '<span><img src="http://'.$_SERVER['SERVER_NAME'].'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/nophotos.png" alt="" style="width:140px"><p><b class="hz4">Монтаж кран-балок</b><br><span class="opisanie_parametra">Тут нужно приписку</span></p></span><span class="hiddened">'.$table_montazha_res[0]->price.' руб</span>';
 }
 wp_die();
}
// МОНТАЖ КРАНАid

// SHEF MONTAZH
add_action('wp_ajax_shef_montazh', 'calc_shef_montazh_crana');
add_action('wp_ajax_nopriv_shef_montazh', 'calc_shef_montazh_crana');
function calc_shef_montazh_crana () {
 $gp = $_POST['_gp'];
 $shirina = $_POST['_shirina'];
 global $wpdb;$wpdb->show_errors();
 $table_montazha = $wpdb->prefix . 'shef_montazh';
 $table_montazha_res = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, price FROM $table_montazha WHERE gp = $gp AND shirina_mezh_putami >= $shirina ");
 if ($table_montazha_res) {
 	echo '<span><img src="http://'.$_SERVER['SERVER_NAME'].'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/nophotos.png" alt="" style="width:140px"><p><b class="hz4">Шеф-монтаж</b><br><span class="opisanie_parametra">Гарант корректной установки</span></p></span><span class="hiddened">'.$table_montazha_res[0]->price.' руб</span>';
 }
 wp_die();
}
// SHEF MONTAZH

// RELS MONTAZH
add_action('wp_ajax_rels_montazh', 'rels_montazh');
add_action('wp_ajax_nopriv_rels_montazh', 'rels_montazh');
function rels_montazh () {
	$gp = $_POST['_gp'];
	$shir = $_POST['_shir'];
	$upravl = '\''.$_POST['_upravl'].'\'';
	$dlinna = $_POST['_dlinna'];

	global $wpdb;$wpdb->show_errors();


	$opornie_cr = $wpdb->prefix . 'opornie_crani';
	$opornie_cr_result = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, rels, upravlenie FROM $opornie_cr WHERE gp = $gp AND shirina_mezh_putami>=$shir AND upravlenie = $upravl");
	if ($opornie_cr_result) {
		$rels_type = '\''.$opornie_cr_result[0]->rels.'\'';
	}

	$stoimost_rels = $wpdb->prefix . 'montazh_rels';
	$stoimost_rels_result = $wpdb->get_results("SELECT id, type, price FROM $stoimost_rels WHERE type = $rels_type ");
	if ($stoimost_rels_result) {
		echo '<span><img src="http://'.$_SERVER['SERVER_NAME'].'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/_5.11.png" alt="" style="width:140px"><p><b class="hz4">Монтаж рельса</b><br><span class="opisanie_parametra">'.$stoimost_rels_result[0]->type.'</span></p></span><span class="hiddened">'.number_format($stoimost_rels_result[0]->price*($dlinna/1000), 0, ',', ' ').' руб</span>';
	}
	wp_die();
}
// RELS MONTAZH

// TOKOPODVOD MONTAZH
add_action('wp_ajax_tokopodvod_montazh', 'tok_montazh');
add_action('wp_ajax_nopriv_tokopodvod_montazh', 'tok_montazh');
function tok_montazh () {
	$dlinna = $_POST['_dlinna'];
	global $wpdb;$wpdb->show_errors();
	$stoimost_provod = $wpdb->prefix . 'montazh_provod';
	$cabkol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Кабельный с кольцами' ");
	$cabtel = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Кабельный с тележками' ");
	$feston = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Фестонный (С профиль)' ");
	$opentrol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Открытые троллеи' ");
	$closetrol = $wpdb->get_results("SELECT type, price FROM $stoimost_provod WHERE type = 'Закрытые троллеи' ");
	$prices = array('tok1' => $cabkol[0]->price * ($dlinna/1000), 'tok2' => $cabtel[0]->price * ($dlinna/1000), 'tok3' => $feston[0]->price * ($dlinna/1000), 'tok4' => $opentrol[0]->price * ($dlinna/1000), 'tok5' => $closetrol[0]->price * ($dlinna/1000) );
	echo json_encode($prices);
	wp_die();
}
// TOKOPODVOD MONTAZH

// РАССЧЕТ РАССТОЯНИЯ ПАРСЕР ОТ МОСКВЫ ДО ГОРОДА ВВЕДЕННОГО В ПОЛЕ
add_action('wp_ajax_myway', 'myway');
add_action('wp_ajax_nopriv_myway', 'myway');

function myway () {
	$city = $_POST['_city'];
	$cran_type = $_POST['cran_type'];
	$dlinna = $_POST['_dlinna'];
	$razrez = '\'' . $_POST['razrez'] . '\'';



	$request_WINDOWS1251 = iconv("utf-8","windows-1251",$city);
	$request_URL = urlencode($request_WINDOWS1251);
	$dom_html_ati = file_get_contents("http://ati.su/TRACE/default.aspx?EntityType=Trace&City1=3611&City5={$request_URL}&Zimnik=false&FastWay=false");
	$convert_UTF8_html_ati = iconv("windows-1251","utf-8", $dom_html_ati);
	
	//$city = urldecode('%CC%EE%F1%EA%E2%E0');
	//$city_UTF8 = iconv("windows-1251","utf-8",$city);

	$way = parse_way ($convert_UTF8_html_ati, '<span id="ctl00_ctl00_main_PlaceHolderMain_atiTrace_lblTotalDistance" class="total-value-lbl">', '</span>');


	global $wpdb;$wpdb->show_errors();
	$price_way = $wpdb->prefix . 'dostavka_cranbalok';

	if ($way == 0) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 0 AND obshiyL >= $dlinna AND type = $razrez");
		$responed_data = array (
			'km' => $way,
			'price' => $price_way_result[0]->price/100
		);
	}
	else if ($way > 3000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 3000 AND obshiyL >= $dlinna AND type = $razrez");

		$responed_data = array (
			'km' => $way,
			'price' => ($price_way_result[0]->price/100)*$way
		);
	}
	else {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie >= $way AND obshiyL >= $dlinna AND type = $razrez");

		$responed_data = array (
			'km' => $way,
			'price' => ($price_way_result[0]->price/100)*$way
		);
	}	
	echo json_encode($responed_data);	
	wp_die();
}

add_action('wp_ajax_expertway', 'expertway');
add_action('wp_ajax_nopriv_mywexpertway', 'expertway');

function expertway () {
	$city = $_POST['_city'];



	$request_WINDOWS1251 = iconv("utf-8","windows-1251",$city);
	$request_URL = urlencode($request_WINDOWS1251);
	$dom_html_ati = file_get_contents("http://ati.su/TRACE/default.aspx?EntityType=Trace&City1=3611&City5={$request_URL}&Zimnik=false&FastWay=false");
	$convert_UTF8_html_ati = iconv("windows-1251","utf-8", $dom_html_ati);

	$way = parse_way ($convert_UTF8_html_ati, '<span id="ctl00_ctl00_main_PlaceHolderMain_atiTrace_lblTotalDistance" class="total-value-lbl">', '</span>');


	global $wpdb;$wpdb->show_errors();
	$price_way = $wpdb->prefix . 'km_viezd';
	$fixed_prise = $wpdb->get_results("SELECT price FROM $price_way WHERE id = 2");
	$fixed_taxa = $fixed_prise[0]->price;

	if ($way == 0) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE id = 3");
		$responed_data = array (
			'km' => $way,
			'price' => $price_way_result[0]->price + $fixed_taxa
		);
	}
	else if ($way < 1000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE id = 4");

		$responed_data = array (
			'km' => $way,
			'price' => ($price_way_result[0]->price*$way) + $fixed_taxa
		);
	}
	else if ($way > 1000 && $way < 3000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE id = 5");

		$responed_data = array (
			'km' => $way,
			'price' => ($price_way_result[0]->price*$way) + $fixed_taxa
		);
	}
	else if ($way > 3000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE id = 6");

		$responed_data = array (
			'km' => $way,
			'price' => ($price_way_result[0]->price*$way) + $fixed_taxa
		);
	}
	else {
		$responed_data = array (
			'km' => $way,
			'price' => 000000
		);
	}
	echo json_encode($responed_data);
	wp_die();
}

function parse_way($html_text, $start, $end)
{
	$first_concat = strpos($html_text, $start);
	if ($first_concat === false) {
		echo "Неверные данные, сообщите администратору!";
	}
	$second_concat = substr($html_text, $first_concat);
	$km = strip_tags(substr($second_concat, 0, strpos($second_concat, $end)));
	return $km;
}

/*****************************************************************************************************************************************/

add_action('wp_ajax_gp_insert', 'gp_insert');
add_action('wp_ajax_nopriv_gp_insert', 'gp_insert');
function gp_insert () {
	$type = $_POST['type_cran'];
	$upr = '\''.$_POST['upr_cran'].'\'';
	if ($type == 'Опорный') {
		global $wpdb;$wpdb->show_errors();
		$cr = $wpdb->prefix . 'opornie_crani';
		$cr_result_500 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 500 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_1000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 1000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_2000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 2000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_3200 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 3200 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_5000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 5000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_6300 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 6300 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_8000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 8000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_10000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 10000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_12500 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 12500 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_16000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 16000 AND upravlenie = $upr ORDER BY price ASC");
		$gp_price = array(
			'_500' => $cr_result_500[0]->price,
			'_1000' => $cr_result_1000[0]->price,
			'_2000' => $cr_result_2000[0]->price,
			'_3200' => $cr_result_3200[0]->price,
			'_5000' => $cr_result_5000[0]->price,
			'_6300' => $cr_result_6300[0]->price,
			'_8000' => $cr_result_8000[0]->price,
			'_10000' => $cr_result_10000[0]->price,
			'_12500' => $cr_result_12500[0]->price,
			'_16000' => $cr_result_16000[0]->price
		);
		echo json_encode($gp_price);
	}
	if ($type == 'Подвесной') {
		global $wpdb;$wpdb->show_errors();
		$cr = $wpdb->prefix . 'podvesnie_crani';
		$cr_result_500 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 500 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_1000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 1000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_2000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 2000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_3200 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 3200 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_5000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 5000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_6300 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 6300 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_8000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 8000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_10000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 10000 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_12500 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 12500 AND upravlenie = $upr ORDER BY price ASC");
		$cr_result_16000 = $wpdb->get_results("SELECT id, price FROM $cr WHERE gp = 16000 AND upravlenie = $upr ORDER BY price ASC");
		$gp_price = array(
			'_500' => $cr_result_500[0]->price,
			'_1000' => $cr_result_1000[0]->price,
			'_2000' => $cr_result_2000[0]->price,
			'_3200' => $cr_result_3200[0]->price,
			'_5000' => $cr_result_5000[0]->price,
			'_6300' => $cr_result_6300[0]->price,
			'_8000' => $cr_result_8000[0]->price,
			'_10000' => $cr_result_10000[0]->price,
			'_12500' => $cr_result_12500[0]->price,
			'_16000' => $cr_result_16000[0]->price
		);
		echo json_encode($gp_price);
	}
wp_die();
}

add_action('wp_ajax_chastotniki_insert', 'chastotniki_insert');
add_action('wp_ajax_nopriv_chastotniki_insert', 'chastotniki_insert');
function chastotniki_insert () {
	$gp = $_POST['_gp'];
	global $wpdb;$wpdb->show_errors();
	$chst = $wpdb->prefix . 'variants';
	$dbls = $wpdb->prefix . 'mr';
	if ( $gp <= 5000 ) {
		$chst_result_85 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 16");
		$chst_result_86 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 19");
		$chst_result_87 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 22");
	}
	if ( $gp > 5000 && $gp <= 10000 ) {
		$chst_result_85 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 17");
		$chst_result_86 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 20");
		$chst_result_87 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 23");
	}
	if ( $gp > 10000 ) {
		$chst_result_85 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 18");
		$chst_result_86 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 21");
		$chst_result_87 = $wpdb->get_results("SELECT id, price FROM $chst WHERE id = 24");
	}
	$dbls_result = $wpdb->get_results("SELECT id, double_speed_price FROM $dbls ORDER BY double_speed_price ASC");
	$chstot = array(
		'_85' => $chst_result_85[0]->price,
		'_86' => $chst_result_86[0]->price,
		'_87' => $chst_result_87[0]->price,
		'dbls' => $dbls_result[0]->double_speed_price
	);
	echo json_encode($chstot);
wp_die();
}

add_action('wp_ajax_motor_insert', 'motor_insert');
add_action('wp_ajax_nopriv_motor_insert', 'motor_insert');
function motor_insert () {
	$gp = $_POST['_gp'];
	$shir = $_POST['_shir'];
	global $wpdb;$wpdb->show_errors();
	$dbls = $wpdb->prefix . 'mr';
	$motor92 = $wpdb->get_results("SELECT base_price FROM $dbls WHERE gp = $gp AND shirina >= $shir AND code = '9.2' ");
	$motor93 = $wpdb->get_results("SELECT base_price FROM $dbls WHERE gp = $gp AND shirina >= $shir AND code = '9.3' ");
	$motor94 = $wpdb->get_results("SELECT base_price FROM $dbls WHERE gp = $gp AND shirina >= $shir AND code = '9.4' ");
	$motor95 = $wpdb->get_results("SELECT base_price FROM $dbls WHERE gp = $gp AND shirina >= $shir AND code = '9.5' ");
	$motor_res = array (
		'_92' => $motor92[0]->base_price,
		'_93' => $motor93[0]->base_price,
		'_94' => $motor94[0]->base_price,
		'_95' => $motor95[0]->base_price
	);
	echo json_encode($motor_res);
wp_die();
}


add_action('wp_ajax_tal_insert', 'tal_insert');
add_action('wp_ajax_nopriv_tal_insert', 'tal_insert');
function tal_insert ()
{
	$upravlenie_t = $_POST['_upravlenie'];
	$visota_t = $_POST['_visota'];
	$ispolnenie_t = '\''.$_POST['_ispolnenie'].'\'';
	$gp_t = $_POST['_gp'];

	global $wpdb; $wpdb->show_errors();	
		$tal_table = $wpdb->prefix . 'electro_tali';
		$tal_r_table = $wpdb->prefix . 'ruchnie_tali';
		$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная' AND strana = 'Болгария'");
		if ($bolgariya_t) {
			// Получаем текущие курсы валют в rss-формате с сайта www.cbr.ru 
			$content = get_curs_euro(); 
			// Разбираем содержимое, при помощи регулярных выражений 
			$pattern = "#<Valute ID=\"([^\"]+)[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>([^<]+)#i"; 
			preg_match_all($pattern, $content, $out, PREG_SET_ORDER); 
			$dollar = ""; 
			$euro = ""; 
			foreach($out as $cur) 
			{
			if($cur[2] == 978) $euro   = str_replace(",",".",$cur[4]); 
			}
			$bolgariya_el_canat_t = $bolgariya_t[0]->price*$euro;
		}
		$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Цепная' AND strana = 'Болгария'");
		if ($bolgariya_t) {
			// Получаем текущие курсы валют в rss-формате с сайта www.cbr.ru 
			$content = get_curs_euro(); 
			// Разбираем содержимое, при помощи регулярных выражений 
			$pattern = "#<Valute ID=\"([^\"]+)[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>([^<]+)#i"; 
			preg_match_all($pattern, $content, $out, PREG_SET_ORDER); 
			$dollar = ""; 
			$euro = ""; 
			foreach($out as $cur) 
			{
			if($cur[2] == 978) $euro   = str_replace(",",".",$cur[4]); 
			}
			$bolgariya_el_cep_t = $bolgariya_t[0]->price*$euro;
		}
		$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная УСВ' AND strana = 'Болгария'");
		if ($bolgariya_t) {
			// Получаем текущие курсы валют в rss-формате с сайта www.cbr.ru 
			$content = get_curs_euro(); 
			// Разбираем содержимое, при помощи регулярных выражений 
			$pattern = "#<Valute ID=\"([^\"]+)[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>([^<]+)#i"; 
			preg_match_all($pattern, $content, $out, PREG_SET_ORDER); 
			$dollar = ""; 
			$euro = ""; 
			foreach($out as $cur) 
			{
			if($cur[2] == 978) $euro   = str_replace(",",".",$cur[4]); 
			}
			$bolgariya_el_canatUSV_t = $bolgariya_t[0]->price*$euro;
		}
		$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная ВБИ' AND strana = 'Болгария'");
		if ($bolgariya_t) {
			// Получаем текущие курсы валют в rss-формате с сайта www.cbr.ru 
			$content = get_curs_euro(); 
			// Разбираем содержимое, при помощи регулярных выражений 
			$pattern = "#<Valute ID=\"([^\"]+)[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>([^<]+)#i"; 
			preg_match_all($pattern, $content, $out, PREG_SET_ORDER); 
			$dollar = ""; 
			$euro = ""; 
			foreach($out as $cur) 
			{
			if($cur[2] == 978) $euro   = str_replace(",",".",$cur[4]); 
			}
			$bolgariya_el_canatVBI_t = $bolgariya_t[0]->price*$euro;
		}
		$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная УСВ ВБИ' AND strana = 'Болгария'");
		if ($bolgariya_t) {
			// Получаем текущие курсы валют в rss-формате с сайта www.cbr.ru 
			$content = get_curs_euro(); 
			// Разбираем содержимое, при помощи регулярных выражений 
			$pattern = "#<Valute ID=\"([^\"]+)[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>([^<]+)#i"; 
			preg_match_all($pattern, $content, $out, PREG_SET_ORDER); 
			$dollar = ""; 
			$euro = ""; 
			foreach($out as $cur) 
			{
			if($cur[2] == 978) $euro   = str_replace(",",".",$cur[4]); 
			}
			$bolgariya_el_canatUSVVBI_t = $bolgariya_t[0]->price*$euro;
		}




		$russia_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND strana = 'Россия'");
		$russia_el_t = $russia_t[0]->price;

		$china_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная' AND strana = 'Китай'");
		$china_el_canat_t = $china_t[0]->price;
		$china_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Цепная' AND strana = 'Китай'");
		$china_el_cep_t = $china_t[0]->price;

		$shved_tt = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_r_table WHERE gp = $gp_t AND visota >= $visota_t AND ispolnenie = $ispolnenie_t AND strana = 'Швеция'");
		$shved_r_t = $shved_tt[0]->price;

		$russia_tt = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_r_table WHERE gp = $gp_t AND visota >= $visota_t AND ispolnenie = $ispolnenie_t AND strana = 'Россия'");
		$russia_r_t = $russia_tt[0]->price;

		$china_tt = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_r_table WHERE gp = $gp_t AND visota >= $visota_t AND ispolnenie = $ispolnenie_t AND strana = 'Китай'");
		$china_r_t = $china_tt[0]->price;
	$tali_res = array (
		'bolgariya_el_canat_t' => $bolgariya_el_canat_t,
		'bolgariya_el_cep_t' => $bolgariya_el_cep_t,
		'bolgariya_el_canatUSV_t' => $bolgariya_el_canatUSV_t,
		'bolgariya_el_canatVBI_t' => $bolgariya_el_canatVBI_t,
		'bolgariya_el_canatUSVVBI_t' => $bolgariya_el_canatUSVVBI_t,
		'russia_el_t' => $russia_el_t,
		'china_el_canat_t' => $china_el_canat_t,
		'china_el_cep_t' => $china_el_cep_t,
		'st_r' => $shved_r_t,
		'rt_r' => $russia_r_t,
		'ct_r' => $china_r_t
	);
	echo json_encode($tali_res);
	wp_die();
}