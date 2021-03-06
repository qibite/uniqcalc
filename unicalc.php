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
	// Цена на остальное montazh_rels_submit montazh_provod_submit stoimost_rels_result_submit stoimost_provod_submit montazh_ruchnih_cran_submit montazh_electro_cran_submit km_viezd_submit shef_montazh_submit
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
		echo '<div class="dop_parametr"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'.$url_img.'" alt="" style="width:200px"><h4>'.$stoimost_provod_result[0]->type.'</h4><p><span class="opisanie_parametra">Цена за 1 метр '.$stoimost_provod_result[0]->price.' руб</span><br><span class="stoimost_parametra">'.number_format($stoimost_provod_result[0]->price*($provod_dlinna/1000), 0, ',', ' ').' руб</span></p>';
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


/*
								'<span><img src="'.$url_img.'images/_5.12.png" alt="" style="width:140px"><p><b class="hz4">'.$stoimost_provod_result[0]->type.'</b><br><span class="opisanie_parametra">подобран в соответствии с параметрами крана</span></p></span><span class="hiddened">'.number_format($stoimost_provod_result[0]->price*($provod_dlinna/1000), 0, ',', ' ').' руб</span>';
								*/