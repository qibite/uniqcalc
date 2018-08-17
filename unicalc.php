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
		$wpdb->insert($montazh_rels,array('type'=>'Р24', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'Р43', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'Р50', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'КР65', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'КР70', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'КР80', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'Балка 24М', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'Балка 30М', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'Балка 36М', 'price'=>110 ),array( '%s', '%d' ));
		$wpdb->insert($montazh_rels,array('type'=>'Балка 45М', 'price'=>110 ),array( '%s', '%d' ));
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

	$spravka = $wpdb->prefix . 'spravka';
	if ($wpdb->get_var("SHOW TABLES LIKE '$spravka'") != $spravka) {
		$sql = "CREATE TABLE IF NOT EXISTS `$spravka` (
		`id` int (30) NOT NULL AUTO_INCREMENT,
		`codeinfo` varchar(255) NOT NULL,
		`descript` varchar(255) NOT NULL,
		`link` varchar(255) NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_spravka.php");
	}

	$chastotnik_tali = $wpdb->prefix . 'chastotnik_tali';
	if ($wpdb->get_var("SHOW TABLES LIKE '$chastotnik_tali'") != $chastotnik_tali) {
		$sql = "CREATE TABLE IF NOT EXISTS `$chastotnik_tali` (
		`id` int (30) NOT NULL AUTO_INCREMENT,
		`firma` varchar(255) NOT NULL,
		`gp` int(255) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		include_once ("db_inserts/insert_chastotniktal.php");
	}

	$chastotnik_nadbavka = $wpdb->prefix . 'chastotnik_nadbavka';
	if ($wpdb->get_var("SHOW TABLES LIKE '$chastotnik_nadbavka'") != $chastotnik_nadbavka) {
		$sql = "CREATE TABLE IF NOT EXISTS `$chastotnik_nadbavka` (
		`id` int (30) NOT NULL AUTO_INCREMENT,
		`descript` varchar(255) NOT NULL,
		`price` int NOT NULL,
		PRIMARY KEY(`id`)
		)
		COLLATE='utf8_general_ci'
		ENGINE=InnoDB;";
		$wpdb->query($sql);
		$wpdb->insert($chastotnik_nadbavka,array('descript'=>'от 1000кг до 3200кг', 'price'=>60000 ),array( '%s', '%d' ));
		$wpdb->insert($chastotnik_nadbavka,array('descript'=>'от 5000кг до 10000кг', 'price'=>60000 ),array( '%s', '%d' ));
		$wpdb->insert($chastotnik_nadbavka,array('descript'=>'от 12500кг до 16000кг', 'price'=>60000 ),array( '%s', '%d' ));
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
//echo $new_price = $_POST['name_price'];
	global $wpdb;
	$table = $_POST['db'];
	$name_price = $_POST['name_price'];
	$id = $_POST['edited_id'];
	$new_price = $_POST['new_price'];

	/*echo $name_price == 'chdescript'; wp_die();
	return;*/
	// Цена на доставку кранбалок в копейках пересчет!
	if ( $table == ($wpdb->prefix.'dostavka_cranbalok')) {
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
	// Цена на остальное podvesnie_crani
	else if ( $table == $wpdb->prefix.'electro_tali' || $table == $wpdb->prefix.'ruchnie_tali' || $table == $wpdb->prefix.'opornie_crani' || $table == $wpdb->prefix.'podvesnie_crani' || $table == $wpdb->prefix.'variants' || $table == $wpdb->prefix.'montazh_rels' || $table == $wpdb->prefix.'montazh_provod' || $table == $wpdb->prefix.'stoimost_provod' || $table == $wpdb->prefix.'stoimost_rels' || $table == $wpdb->prefix.'montazh_ruchnih_cran' || $table == $wpdb->prefix.'montazh_electro_cran' || $table == $wpdb->prefix.'km_viezd' || $table == $wpdb->prefix.'shef_montazh' || $table == $wpdb->prefix.'mr' || $table == $wpdb->prefix.'chastotnik_tali' || $table == $wpdb->prefix.'chastotnik_nadbavka' ) {
		$res = $wpdb->update(
				$table,
				array( $name_price => $new_price),
				array('id' => $id),
				array( '%d' ),
				array( '%d' )
			);
	echo $new_price;
	}
	else if ( $name_price == "chdescript" ) {
		$res = $wpdb->update(
				$table,
				array('descript' => $new_price),
				array('id' => $id),
				array( '%s' ),
				array( '%d' )
			);
		echo $new_price;
	}
	else if ( $name_price == 'chlink' ) {
		$table = $_POST['db'];
		$id = $_POST['edited_id'];
		$new_price = $_POST['new_price'];
		$res = $wpdb->update(
				$table,
				array('link' => $new_price),
				array('id' => $id),
				array( '%s' ),
				array( '%d' )
			);
		echo $new_price;
	}
	else {echo "---";}
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
	$opornie_crani_result = $wpdb->get_results("SELECT price FROM $opornie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shir AND upravlenie = $upravl");
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

add_action('wp_ajax_calc_cran_p', 'stoimost_crana_p');
add_action('wp_ajax_nopriv_calc_cran_p', 'stoimost_crana_p');
function stoimost_crana_p() {
	$gp = $_POST['_gp'];
	$shir = $_POST['_shir'];
	$upravl = '\''.$_POST['_upravl'].'\'';

	global $wpdb;$wpdb->show_errors();
	$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
	$podvesnie_crani_result = $wpdb->get_results("SELECT price FROM $podvesnie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shir AND upravlenie = $upravl");
		if ($podvesnie_crani_result) {
			print_r($podvesnie_crani_result[0]->price);
		}
		wp_die();
}

add_action('wp_ajax_calc_sroki_p', 'sroki_crana_p');
add_action('wp_ajax_nopriv_calc_sroki_p', 'sroki_crana_p');
function sroki_crana_p() {
	$gp = $_POST['_gp'];
	$shir = $_POST['_shir'];
	$upravl = '\''.$_POST['_upravl'].'\'';

	global $wpdb;$wpdb->show_errors();
	$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
	$podvesnie_crani_result = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, rels, upravlenie, sroki, price FROM $podvesnie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shir AND upravlenie = $upravl");
		if ($podvesnie_crani_result) {
			print_r($podvesnie_crani_result[0]->sroki);
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
				if ($content != 'Запрашиваемая страница не найдена') {
					// Разбираем содержимое, при помощи регулярных выражений
					$pattern = "#<Valute ID=\"([^\"]+)[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>([^<]+)#i";
					preg_match_all($pattern, $content, $out, PREG_SET_ORDER);
					$dollar = "";
					$euro = "";
					foreach($out as $cur)
					{
						if($cur[2] == 978) $euro   = str_replace(",",".",$cur[4]);
					}
				}
				else {$euro=71;}
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
					if (!$fd) return "Запрашиваемая страница не найдена";
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
	$crangp = $_POST['_gp'];
	$vbi = $_POST['_vbi'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	$variants_result = $wpdb->get_results("SELECT id, price FROM $variants WHERE id = $chastotnik_id");

	if ($crangp != 500 && $vbi == 1) {
		$nadbavka = $wpdb->prefix . 'chastotnik_nadbavka';
		switch ($crangp) {
			case 1000 || 2000 || 3200:
				$nadbavka_result = $wpdb->get_results("SELECT price FROM $nadbavka WHERE id = 1");
				break;

			case 5000 || 6300 || 8000 || 10000:
				$nadbavka_result = $wpdb->get_results("SELECT price FROM $nadbavka WHERE id = 2");
				break;

			case 12500 || 16000:
				$nadbavka_result = $wpdb->get_results("SELECT price FROM $nadbavka WHERE id = 3");
				break;

			default:
				false;
				break;
		}
		print_r($variants_result[0]->price+$nadbavka_result[0]->price);
	}
	else {
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


//Стоимость Частотного привода тали
add_action('wp_ajax_calc_chstotniy_privod_tali', 'chstotniy_privod_tali');
add_action('wp_ajax_nopriv_calc_chstotniy_privod_tali', 'chstotniy_privod_tali');
function chstotniy_privod_tali () {
	$gp = $_POST['_gp'];

	global $wpdb;$wpdb->show_errors();
	$chpt = $wpdb->prefix . 'chastotnik_tali';
	$chpt_result_ESQ = $wpdb->get_results("SELECT price FROM $chpt WHERE gp = $gp AND firma='ESQ'");
	$chpt_result_HYUNDAI = $wpdb->get_results("SELECT price FROM $chpt WHERE gp = $gp AND firma='HYUNDAI'");
	$chpt_result_DANFOSS = $wpdb->get_results("SELECT price FROM $chpt WHERE gp = $gp AND firma='DANFOSS'");
	$chpt_array = array(
		'ESQ' => $chpt_result_ESQ[0]->price,
		'HYUNDAI' => $chpt_result_HYUNDAI[0]->price,
		'DANFOSS' => $chpt_result_DANFOSS[0]->price
	);
	echo json_encode($chpt_array);
	wp_die();
}
//Стоимость Частотного привода тали


//Стоимость ограничителей грузоподъемности
add_action('wp_ajax_calc_ogranichitel', 'ogranichitel');
add_action('wp_ajax_nopriv_calc_ogranichitel', 'ogranichitel');
function ogranichitel () {
	$gp = $_POST['_gp'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	switch ($gp) {
		case 500:
			$cifr = $wpdb->get_results("SELECT price FROM $variants WHERE id = 40");
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 48");
			break;
		case 1000:
			$cifr = $wpdb->get_results("SELECT price FROM $variants WHERE id = 41");
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 49");
			break;
		case 2000:
			$cifr = $wpdb->get_results("SELECT price FROM $variants WHERE id = 42");
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 50");
			break;
		case 3200:
			$cifr = $wpdb->get_results("SELECT price FROM $variants WHERE id = 43");
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 51");
			break;
		case 5000:
			$cifr = $wpdb->get_results("SELECT price FROM $variants WHERE id = 44");
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 52");
			break;
		case 6300:
			$cifr = $wpdb->get_results("SELECT price FROM $variants WHERE id = 45");
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 53");
			break;
		case 8000:
			$cifr = $wpdb->get_results("SELECT price FROM $variants WHERE id = 46");
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 54");
			break;
		case 10000:
			$cifr = $wpdb->get_results("SELECT price FROM $variants WHERE id = 47");
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 55");
			break;
		case 12500:
			$cifr = 'Не доступно при таком весе';
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 56");
			break;
		case 16000:
			$cifr = 'Не доступно при таком весе';
			$kanatniy = $wpdb->get_results("SELECT price FROM $variants WHERE id = 57");
			break;

		default:
			# code...
			break;
	}

	$ogr_array = array(
		'ctifrovoy' => $cifr[0]->price,
		'kanatniy' => $kanatniy[0]->price
	);
	echo json_encode($ogr_array);
	wp_die();
}
//Стоимость ограничителей грузоподъемности

//Стоимость vesi
add_action('wp_ajax_calculate_vesi', 'vesi');
add_action('wp_ajax_nopriv_calculate_vesi', 'vesi');
function vesi () {
	$gp = $_POST['_gp'];

	global $wpdb;$wpdb->show_errors();
	$variants = $wpdb->prefix . 'variants';
	switch ($gp) {
		case 500:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 58");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 68");
			break;
		case 1000:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 59");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 69");
			break;
		case 2000:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 60");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 70");
			break;
		case 3200:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 61");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 71");
			break;
		case 5000:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 62");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 72");
			break;
		case 6300:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 63");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 73");
			break;
		case 8000:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 64");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 74");
			break;
		case 10000:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 65");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 75");
			break;
		case 12500:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 66");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 76");
			break;
		case 16000:
			$rus = $wpdb->get_results("SELECT price FROM $variants WHERE id = 67");
			$korea = $wpdb->get_results("SELECT price FROM $variants WHERE id = 77");
			break;

		default:
			# code...
			break;
	}

	$ogr_array = array(
		'russia' => $rus[0]->price,
		'korea' => $korea[0]->price
	);
	echo json_encode($ogr_array);
	wp_die();
}

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

	global $wpdb;$wpdb->show_errors();


	$justprice = boolval($_POST['_justprice']);
	$name_relsa = '\''.$_POST['_name_relsa'].'\'';
	$dop = 0;
	$montaj = 0;

	if ($justprice) {
		$rels_dlinna = $_POST['_rels_dlinna'];

		$stoimost_rels = $wpdb->prefix . 'stoimost_rels';
		$stoimost_rels_result = $wpdb->get_results("SELECT price FROM $stoimost_rels WHERE type = $name_relsa");
		echo $stoimost_rels_result[0]->price*($rels_dlinna/1000);
		wp_die();
	}
	else {
		$type_cran = $_POST['type_cran'];
		$rels_gp = $_POST['_rels_gp'];
		$rels_upravlenie = '\''.$_POST['_rels_upravlenie'].'\'';
		$rels_shirinamp = $_POST['_rels_dlinna'];
		$url_img = $_POST['rels_url_img'];
		if (isset($_POST['_dop'])) {
			$dop = $_POST['_dop'];
		}

		if ($type_cran == 'Опорный' && !$dop) {
			$opornie_crani = $wpdb->prefix . 'opornie_crani';
			$opornie_crani_result = $wpdb->get_results("SELECT rels, price FROM $opornie_crani WHERE gp = $rels_gp AND shirina_mezh_putami >= $rels_shirinamp AND upravlenie = $rels_upravlenie");
			$name_relsa = '\''.$opornie_crani_result[0]->rels.'\'';
			$podborka_rels = $wpdb->prefix . 'stoimost_rels';
			$podborka_rels_result = $wpdb->get_results("SELECT type, price FROM $podborka_rels WHERE type = $name_relsa");

			$stoimost_rels = $wpdb->prefix . 'montazh_rels';
			$stoimost_rels_result = $wpdb->get_results("SELECT price FROM $stoimost_rels WHERE type = $name_relsa");

			if ($podborka_rels_result  && $stoimost_rels_result) {
				$htm = "
					<div class='dop_parametr rels_crane'><span class='del_this_option'><i class='fa fa-trash-o' aria-hidden='true'></i></span><img src='{$url_img}/images/5.11.png' alt='' style='width:200px'><h4>Рельс ".$podborka_rels_result[0]->type." - ".($rels_shirinamp/1000)." м.</h4><p><span class='opisanie_parametra'>подобран в соответствии с параметрами крана</span><br><span class='stoimost_parametra'>".number_format($podborka_rels_result[0]->price*($rels_shirinamp/1000), 0, ',', ' ')."' ₽</span><i class='id_bro'>a2</i></p>
				";
				$htmmontazh = "
					<div class='dop_parametr rels_montazh'><span class='del_this_option' style='visibility: hidden;'><i class='fa fa-trash-o' aria-hidden='true'></i></span><img src='http://uniqcrane.ru/wp-content/plugins/uniqcalc/user_view/construct_calc/images/_5.11.png' alt='Монтаж квадрата' style='width:200px'><h4>Монтаж рельса</h4><p><span class='opisanie_parametra'>{$podborka_rels_result[0]->type}</span><br><span class='stoimost_parametra'>".number_format($stoimost_rels_result[0]->price*($rels_shirinamp/1000), 0, ',', ' ')." ₽</span><i class='id_bro'>c4</i></p></div>
				";
				$name_rls = $podborka_rels_result[0]->type;
			}
			$rls = array (
				'htm' => $htm,
				'htmmontazh' => $htmmontazh,
				'name_rls' => $name_rls
			);
			echo json_encode( $rls );
		}
		else if ($type_cran == 'Опорный' && $dop) {
			$opornie_crani = $wpdb->prefix . 'opornie_crani';
			$opornie_crani_result = $wpdb->get_results("SELECT rels, price FROM $opornie_crani WHERE gp = $rels_gp AND shirina_mezh_putami >= $rels_shirinamp AND upravlenie = $rels_upravlenie");
			$name_relsa = '\''.$opornie_crani_result[0]->rels.'\'';
			$podborka_rels = $wpdb->prefix . 'stoimost_rels';
			$podborka_rels_result = $wpdb->get_results("SELECT type, price FROM $podborka_rels WHERE type = $name_relsa");
			if ($podborka_rels_result) {
				echo '<span><img src="'.$url_img.'images/_5.11.png" alt="" style="width:140px"><p><b class="hz4">Рельс '.$podborka_rels_result[0]->type.' - '.($rels_shirinamp/1000).'м.</b><br><span class="opisanie_parametra">подобран в соответствии с параметрами крана</span></p></span><span class="hiddened">'.number_format($podborka_rels_result[0]->price*($rels_shirinamp/1000), 0, ',', ' ').' ₽</span><div class="container_button dopinfmain"><i data-info="i5a_1" class="fa fa-info-circle dopinf" aria-hidden="true"></i>
						</div>';
			}
		}
		else if ($type_cran == 'Подвесной' && !$dop) {
			$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
			$podvesnie_crani_result = $wpdb->get_results("SELECT rels, price FROM $podvesnie_crani WHERE gp = $rels_gp AND shirina_mezh_putami >= $rels_shirinamp AND upravlenie = $rels_upravlenie");
			switch ($podvesnie_crani_result[0]->rels) {
				case 'Балка 24М':
					$pict = '5.13p.png';
					break;
				case 'Балка 30М':
					$pict = '5.14.png';
					break;
				case 'Балка 36М':
					$pict = '5.15.png';
					break;
				case 'Балка 45М':
					$pict = '5.16.png';
					break;
				default:
					$pict = 'nophotos.png';
					break;
			}

			$htmP = "<div class='dop_parametr rels_crane'><span class='del_this_option'><i class='fa fa-trash-o' aria-hidden='true'></i></span><img src='{$url_img}/images/{$pict}' alt='' style='width:200px'><h4>Рельс ".$podvesnie_crani_result[0]->rels." м.</h4><p><span class='opisanie_parametra'>подобран в соответствии с параметрами крана</span><br><span class='stoimost_parametra'>Без доплаты</span><i class='id_bro'>a2</i></p>";
			$rls = array (
				'htm' => $htmP,
				'name_rls' => $podvesnie_crani_result[0]->rels
			);
			echo json_encode( $rls );
		}

		else if ($type_cran == 'Подвесной' && $dop) {
			$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
			$podvesnie_crani_result = $wpdb->get_results("SELECT rels, price FROM $podvesnie_crani WHERE gp = $rels_gp AND shirina_mezh_putami >= $rels_shirinamp AND upravlenie = $rels_upravlenie");
			switch ($podvesnie_crani_result[0]->rels) {
				case 'Балка 24М':
					$pict = '5.13p.png';
					break;
				case 'Балка 30М':
					$pict = '5.14.png';
					break;
				case 'Балка 36М':
					$pict = '5.15.png';
					break;
				case 'Балка 45М':
					$pict = '5.16.png';
					break;
				default:
					$pict = 'nophotos.png';
					break;
			}
			echo '<span><img src="'.$url_img.'images/'.$pict.'" alt="" style="width:140px"><p><b class="hz4">'.$podvesnie_crani_result[0]->rels.'</b><br><span class="opisanie_parametra">подобран в соответствии с параметрами крана</span></p></span><span class="hiddened">Без доплаты</span><div class="container_button dopinfmain"><i data-info="i5b_1" class="fa fa-info-circle dopinf" aria-hidden="true"></i>
						</div>';
		}


		wp_die();
	}



}
// Рельс '<p><b class="hz4">Разработка проектной документации</b><br><span class="opisanie_parametra">'.$podborka_rels_result[0]->type.'</span></p></span><span class="hiddened">'.$podborka_rels_result[0]->price.' ₽</span>'

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
		echo '<div class="dop_parametr tokoprovod"><span class="del_this_option"><i class="fa fa-trash-o" aria-hidden="true"></i></span><img src="'.$url_img.'" alt="" style="width:200px"><h4>'.$stoimost_provod_result[0]->type.'</h4><p><span class="opisanie_parametra">Цена за 1 метр '.$stoimost_provod_result[0]->price.' ₽</span><br><span class="stoimost_parametra">'.number_format($stoimost_provod_result[0]->price*($provod_dlinna/1000), 0, ',', ' ').' ₽</span></p>';
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
// универсальная функция для доставки, монтажа, шеф монтажа и выезда
add_action('wp_ajax_distance', 'distance');
add_action('wp_ajax_nopriv_distance', 'distance');

function distance () {

	$cran_type = $_POST['_cran_type'];
	$gp = $_POST['_gp'];
	$city = $_POST['_city'];
	$razrez = '\'' . $_POST['_razrez'] . '\'';
	$dlinna = $_POST['_dlinna'];
	$shirina = $_POST['_shirina'];
	$uprav = boolval($_POST['_uprav']);


	$request_URL = urlencode($city);
	$dom_html_ati = file_get_contents("http://ati.su/TRACE/default.aspx?EntityType=Trace&City1=3611&City5={$request_URL}&Zimnik=false&FastWay=false");
	$way = parse_way($dom_html_ati, '<span id="ctl00_ctl00_main_PlaceHolderMain_atiTrace_lblTotalDistance" class="total-value-lbl">', '</span>');
	global $wpdb;$wpdb->show_errors();

	if ($uprav) { // ЕСЛИ РУЧНОЙ ТИП ПЕРЕДВИЖЕНИЯ КРАНА

		if ($cran_type == 'Опорный') {// ДЛЯ ОПОРНЫХ
			$opornie_crani = $wpdb->prefix . 'opornie_crani';
			$opornie_crani_result = $wpdb->get_results("SELECT price FROM $opornie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shirina AND upravlenie = 'Ручное'");
				if ($opornie_crani_result) {
					$price_crane = $opornie_crani_result[0]->price;
				}
			$modul = ($price_crane > 200000) ? $price_crane/200000 : 1 ;
			$modul = ($modul > 1) ? ceil($modul) : 1 ;

			$prozhivanie = $wpdb->prefix . 'km_viezd';
			$prozhivanie_result = $wpdb->get_results("SELECT price FROM $prozhivanie WHERE id = 1");
			$prozhivanie_price = ($modul > 1) ? $prozhivanie_result[0]->price * $modul : $prozhivanie_result[0]->price;
		}

		else {// ДЛЯ ПОДВЕСНЫХ
			$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
			$podvesnie_crani_result = $wpdb->get_results("SELECT price FROM $podvesnie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shirina AND upravlenie = 'Ручное'");
				if ($podvesnie_crani_result) {
					$price_crane = $podvesnie_crani_result[0]->price;
				}
			$modul = ($price_crane > 200000) ? $price_crane/200000 : 1 ;
			$modul = ($modul > 1) ? ceil($modul) : 1 ;

			$prozhivanie = $wpdb->prefix . 'km_viezd';
			$prozhivanie_result = $wpdb->get_results("SELECT price FROM $prozhivanie WHERE id = 1");
			$prozhivanie_price = ($modul > 1) ? $prozhivanie_result[0]->price * $modul : $prozhivanie_result[0]->price;
		}

		// МОНТАЖ КРАН-БАЛКИ
		$table_montazha = $wpdb->prefix . 'montazh_ruchnih_cran';
		$table_montazha_res = $wpdb->get_results("SELECT price FROM $table_montazha WHERE gp = $gp AND shirina_mezh_putami >= $shirina ");
		if ($table_montazha_res) {
			$price_montazh = $table_montazha_res[0]->price;
			$price_montazh += $prozhivanie_price; // СТОИМОСТЬ МОНТАЖА РУЧНОЙ КРАН-БАЛКИ
		}
		// МОНТАЖ КРАН-БАЛКИ

		// ШЕФ МОНТАЖ
		$table_shef_montazha = $wpdb->prefix . 'shef_montazh';
		$table_shef_montazha_res = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, price FROM $table_shef_montazha WHERE gp = $gp AND shirina_mezh_putami >= $shirina ");
		if ($table_shef_montazha_res) {
			$price_shef_montazh = $table_shef_montazha_res[0]->price;
			$price_shef_montazh += $prozhivanie_price; // СТОИМОСТЬ МОНТАЖА РУЧНОЙ КРАН-БАЛКИ
		}
		// ШЕФ МОНТАЖ
	}


	else {// ДЛЯ ЭЛЕКТРО КРАН-БАЛОК

		if ($cran_type == 'Опорный') {// ДЛЯ ОПОРНЫХ
			$opornie_crani = $wpdb->prefix . 'opornie_crani';
			$opornie_crani_result = $wpdb->get_results("SELECT price FROM $opornie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shirina AND upravlenie = 'Электро'");
				if ($opornie_crani_result) {
					$price_crane = $opornie_crani_result[0]->price;
				}
			$modul = ($price_crane > 200000) ? $price_crane/200000 : 1 ;
			$modul = ($modul > 1) ? ceil($modul) : 1 ;

			$prozhivanie = $wpdb->prefix . 'km_viezd';
			$prozhivanie_result = $wpdb->get_results("SELECT price FROM $prozhivanie WHERE id = 1");
			$prozhivanie_price = ($modul > 1) ? $prozhivanie_result[0]->price * $modul : $prozhivanie_result[0]->price;
		}

		else {// ДЛЯ ПОДВЕСНЫХ
			$podvesnie_crani = $wpdb->prefix . 'podvesnie_crani';
			$podvesnie_crani_result = $wpdb->get_results("SELECT price FROM $podvesnie_crani WHERE gp = $gp AND shirina_mezh_putami>=$shirina AND upravlenie = 'Электро'");
				if ($podvesnie_crani_result) {
					$price_crane = $podvesnie_crani_result[0]->price;
				}
			$modul = ($price_crane > 200000) ? $price_crane/200000 : 1 ;
			$modul = ($modul > 1) ? ceil($modul) : 1 ;

			$prozhivanie = $wpdb->prefix . 'km_viezd';
			$prozhivanie_result = $wpdb->get_results("SELECT price FROM $prozhivanie WHERE id = 1");
			$prozhivanie_price = ($modul > 1) ? $prozhivanie_result[0]->price * $modul : $prozhivanie_result[0]->price;
		}

		//МОНТАЖ КРАН-БАЛКИ
		$table_montazha = $wpdb->prefix . 'montazh_electro_cran';
		$table_montazha_res = $wpdb->get_results("SELECT price FROM $table_montazha WHERE gp = $gp AND shirina_mezh_putami >= $shirina ");
		if ($table_montazha_res) {
			$price_montazh = $table_montazha_res[0]->price;
			$price_montazh += $prozhivanie_price; // СТОИМОСТЬ МОНТАЖА РУЧНОЙ КРАН-БАЛКИ
		}
		// МОНТАЖ КРАН-БАЛКИ

		// ШЕФ МОНТАЖ
		$table_shef_montazha = $wpdb->prefix . 'shef_montazh';
		$table_shef_montazha_res = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, price FROM $table_shef_montazha WHERE gp = $gp AND shirina_mezh_putami >= $shirina ");
		if ($table_shef_montazha_res) {
			$price_shef_montazh = $table_shef_montazha_res[0]->price;
			$price_shef_montazh += $prozhivanie_price; // СТОИМОСТЬ МОНТАЖА РУЧНОЙ КРАН-БАЛКИ
		}
		// ШЕФ МОНТАЖ
	}

	// СТОИМОСТЬ ДОСТАВКИ КРАНБАЛОК
	$price_way = $wpdb->prefix . 'dostavka_cranbalok';
	if ($way <= 5 && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 0 AND obshiyL = 6000");
		$dostavka_price = $price_way_result[0]->price/100;
		$dostavka_price += $prozhivanie_price;
	}
	else if ($way <= 5 && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 0 AND obshiyL = 9000");
		$dostavka_price = $price_way_result[0]->price/100;
		$dostavka_price += $prozhivanie_price;
	}
	else if ($way <= 5 && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 0 AND obshiyL = 12000");
		$dostavka_price = $price_way_result[0]->price/100;
		$dostavka_price += $prozhivanie_price;
	}
	else if ($way <= 5 && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 0 AND obshiyL = 12001");
		$dostavka_price = $price_way_result[0]->price/100;
		$dostavka_price += $prozhivanie_price;
	}

	else if (($way > 5 && $way <= 100) && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 100 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 5 && $way <= 100) && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 100 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 5 && $way <= 100) && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 100 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 5 && $way <= 100) && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 100 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}

	else if (($way > 100 && $way <= 300) && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 300 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 100 && $way <= 300) && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 300 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 100 && $way <= 300) && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 300 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 100 && $way <= 300) && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 300 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}


	else if (($way > 300 && $way <= 500) && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 500 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 300 && $way <= 500) && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 500 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 300 && $way <= 500) && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 500 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 300 && $way <= 500) && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 500 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}


	else if (($way > 500 && $way <= 750) && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 750 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 500 && $way <= 750) && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 750 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 500 && $way <= 750) && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 750 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 500 && $way <= 750) && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 750 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}


	else if (($way > 750 && $way <= 1000) && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 1000 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 750 && $way <= 1000) && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 1000 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 750 && $way <= 1000) && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 1000 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 750 && $way <= 1000) && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 1000 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}


	else if (($way > 1000 && $way <= 1500) && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 1500 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 1000 && $way <= 1500) && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 1500 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 1000 && $way <= 1500) && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 1500 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 1000 && $way <= 1500) && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 1500 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}


	else if (($way > 1500 && $way <= 2000) && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 2000 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 1500 && $way <= 2000) && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 2000 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 1500 && $way <= 2000) && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 2000 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 1500 && $way <= 2000) && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 2000 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}


	else if (($way > 2000 && $way <= 2500) && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 2500 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 2000 && $way <= 2500) && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 2500 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 2000 && $way <= 2500) && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 2500 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if (($way > 2000 && $way <= 2500) && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 2500 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}


	else if ($way > 2500 && $dlinna <= 6000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 3000 AND obshiyL = 6000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if ($way > 2500 && $dlinna > 6000 && $dlinna <= 9000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 3000 AND obshiyL = 9000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if ($way > 2500 && $dlinna > 9000 && $dlinna <= 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 3000 AND obshiyL = 12000");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}
	else if ($way > 2500 && $dlinna > 12000) {
		$price_way_result = $wpdb->get_results("SELECT price FROM $price_way WHERE rasstoyanie = 3000 AND obshiyL = 12001");
		$dostavka_price = ($price_way_result[0]->price/100) * $way;
		$dostavka_price += $prozhivanie_price;
	}

	else {

		$dostavka_price = "-1 ошибка way = {$way} && dlinna = {$dlinna} ";
	}
	// СТОИМОСТЬ ДОСТАВКИ КРАНБАЛОК


	$price_way_expert = $wpdb->prefix . 'km_viezd';
	$fixed_prise = $wpdb->get_results("SELECT price FROM $price_way_expert WHERE id = 2");
	$fixed_taxa = $fixed_prise[0]->price;

	if ($way <= 23 ) {
		$price_way_expert_result = $wpdb->get_results("SELECT price FROM $price_way_expert WHERE id = 3");
		$price_expert = $price_way_expert_result[0]->price + $fixed_taxa;
	}
	else if ($way <= 1000) {
		$price_way_expert_result = $wpdb->get_results("SELECT price FROM $price_way_expert WHERE id = 4");
		$price_expert = ($price_way_expert_result[0]->price*$way) + $fixed_taxa;
		//$dostavka_price += ($price_way_expert_result[0]->price*$way);
		$price_shef_montazh += ($price_way_expert_result[0]->price*$way);
		$price_montazh += ($price_way_expert_result[0]->price*$way);
	}
	else if ($way > 1000 && $way <= 3000) {
		$price_way_expert_result = $wpdb->get_results("SELECT price FROM $price_way_expert WHERE id = 5");
		$price_expert = ($price_way_expert_result[0]->price*$way) + $fixed_taxa;
		//$dostavka_price += ($price_way_expert_result[0]->price*$way);
		$price_shef_montazh += ($price_way_expert_result[0]->price*$way);
		$price_montazh += ($price_way_expert_result[0]->price*$way);
	}
	else if ($way > 3000) {
		$price_way_expert_result = $wpdb->get_results("SELECT price FROM $price_way_expert WHERE id = 6");
		$price_expert = ($price_way_expert_result[0]->price*$way) + $fixed_taxa;
		//$dostavka_price += ($price_way_expert_result[0]->price*$way)*10;
		$price_shef_montazh += ($price_way_expert_result[0]->price*$way);
		$price_montazh += ($price_way_expert_result[0]->price*$way);
	}
	else {
		$price_expert = -1;
		$dostavka_price = -1;
		$price_shef_montazh = -1;
		$price_montazh = -1;
	}




	$retun_result = array (
		'price_montazh' => $price_montazh,
		'price_shef_montazh' => $price_shef_montazh,
		'dostavka_price' => $dostavka_price,
		'price_expert' => $price_expert,
		'distance' => $way
	);

	echo json_encode($retun_result);
	wp_die();
}
// универсальная функция для доставки, монтажа, шеф монтажа и выезда

// МОНТАЖ КРАНА
add_action('wp_ajax_montazh_crana_r', 'calc_montazh_crana');
add_action('wp_ajax_nopriv_montazh_crana_r', 'calc_montazh_crana');
function calc_montazh_crana () {

 global $wpdb;$wpdb->show_errors();

 wp_die();
}



// RELS MONTAZH
add_action('wp_ajax_rels_montazh', 'rels_montazh');
add_action('wp_ajax_nopriv_rels_montazh', 'rels_montazh');
function rels_montazh () {
	$cran_vid = '\''.$_POST['cran_vid'].'\'';
	$rels_type = '\''.$_POST['rls_name'].'\'';
	$gp = $_POST['_gp'];
	$shir = $_POST['_shir'];
	$upravl = '\''.$_POST['_upravl'].'\'';
	$dlinna = $_POST['_dlinna'];
	$add_element = $_POST['add_element'];

	global $wpdb;$wpdb->show_errors();

	if (!$rels_type && $cran_vid == 'Опорный') {
		$opornie_cr = $wpdb->prefix . 'opornie_crani';
		$opornie_cr_result = $wpdb->get_results("SELECT rels FROM $opornie_cr WHERE gp = $gp AND shirina_mezh_putami>=$shir AND upravlenie = $upravl");
		if ($opornie_cr_result) {
			$rels_type = '\''.$opornie_cr_result[0]->rels.'\'';
		}
	}
	else if (!$rels_type && $cran_vid == 'Подвесной') {
		$podvesnie_cr = $wpdb->prefix . 'podvesnie_crani';
		$podvesnie_cr_result = $wpdb->get_results("SELECT rels FROM $podvesnie_cr WHERE gp = $gp AND shirina_mezh_putami>=$shir AND upravlenie = $upravl");
		if ($podvesnie_cr_result) {
			$rels_type = '\''.$podvesnie_cr_result[0]->rels.'\'';
		}
	}

	switch ($rels_type) {
		case "'Р24'":
			$pict = '5.5.png';
			break;
		case "'Р43'":
			$pict = '5.6.png';
			break;
		case "'Р50'":
			$pict = '5.7.png';
			break;
		case "'КР65'":
			$pict = '5.8.png';
			break;
		case "'КР70'":
			$pict = '5.9.png';
			break;
		case "'КР80'":
			$pict = '5.10.png';
			break;
		case "'Квадрат 40x40'":
			$pict = '5.11.png';
			break;
		case "'Квадрат 50x50'":
			$pict = '5.12.png';
			break;
		case "'Квадрат 60x60'":
			$pict = '5.13.png';
			break;
		case "'Балка 24М'":
			$pict = '5.13p.png';
			break;
		case "'Балка 30М'":
			$pict = '5.14.png';
			break;
		case "'Балка 36М'":
			$pict = '5.15.png';
			break;
		case "'Балка 45М'":
			$pict = '5.16.png';
			break;
		default:
			$pict = 'nophotos.png';
			break;
	}

	$stoimost_rels = $wpdb->prefix . 'montazh_rels';
	$stoimost_rels_result = $wpdb->get_results("SELECT type, price FROM $stoimost_rels WHERE type = $rels_type ");

	if ($add_element) {
		$added = '<span><img src="http://'.$_SERVER['SERVER_NAME'].'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'.$pict.'" alt="Монтируемый рельс" style="width:140px"><p><b class="hz4">Монтаж рельса</b><br><span class="opisanie_parametra">рельс - '.$rels_type.'</span></p></span><span class="hiddened">'.number_format($stoimost_rels_result[0]->price*($dlinna/1000), 0, ',', ' ').' ₽</span>';
		$divmontazh = "<div class='dop_parametr rels_montazh'><span class='del_this_option' style='visibility: hidden;'><i class='fa fa-trash-o' aria-hidden='true'></i></span><img src='http://uniqcrane.ru/wp-content/plugins/uniqcalc/user_view/construct_calc/images/{$pict}' alt='Монтаж квадрата' style='width:200px'><h4>Монтаж рельса</h4><p><span class='opisanie_parametra'>{$stoimost_rels_result[0]->type}</span><br><span class='stoimost_parametra'>".number_format($stoimost_rels_result[0]->price*($dlinna/1000), 0, ',', ' ')." ₽</span><i class='id_bro'>c4</i></p></div>";
		$h = array('addmenu' => $added, 'divinopt' => $divmontazh);
		echo json_encode($h);
	}
	else {
		echo '<span><img src="http://'.$_SERVER['SERVER_NAME'].'/wp-content/plugins/uniqcalc/user_view/construct_calc/images/'.$pict.'" alt="Монтируемый рельс" style="width:140px"><p><b class="hz4">Монтаж рельса</b><br><span class="opisanie_parametra">рельс - '.$rels_type.'</span></p></span><span class="hiddened">'.number_format($stoimost_rels_result[0]->price*($dlinna/1000), 0, ',', ' ').' ₽</span>';
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
	$vbi = $_POST['_vbi'];

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
	
	if ($gp != 500 && $vbi == 1) {
		$nadbavka = $wpdb->prefix . 'chastotnik_nadbavka';
		switch ($gp) {
			case 1000 || 2000 || 3200:
				$nadbavka_result = $wpdb->get_results("SELECT price FROM $nadbavka WHERE id = 1");
				break;

			case 5000 || 6300 || 8000 || 10000:
				$nadbavka_result = $wpdb->get_results("SELECT price FROM $nadbavka WHERE id = 2");
				break;

			case 12500 || 16000:
				$nadbavka_result = $wpdb->get_results("SELECT price FROM $nadbavka WHERE id = 3");
				break;

			default:
				false;
				break;
		}
		$chstot = array(
			'_85' => $chst_result_85[0]->price+$nadbavka_result[0]->price,
			'_86' => $chst_result_86[0]->price+$nadbavka_result[0]->price,
			'_87' => $chst_result_87[0]->price+$nadbavka_result[0]->price,
			'dbls' => $dbls_result[0]->double_speed_price
		);
	}
	else {
		$chstot = array(
			'_85' => $chst_result_85[0]->price,
			'_86' => $chst_result_86[0]->price,
			'_87' => $chst_result_87[0]->price,
			'dbls' => $dbls_result[0]->double_speed_price
		);
	}
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
	$cranisp = '\''.$_POST['_cranisp'].'\'';
	$gp_t = $_POST['_gp'];
	$temper_minus = $_POST['temper_minus'];
	$temper_plus = $_POST['temper_plus'];

	$content = get_curs_euro();
	if ($content != 'Запрашиваемая страница не найдена') {
		// Разбираем содержимое, при помощи регулярных выражений
		$pattern = "#<Valute ID=\"([^\"]+)[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>([^<]+)[^>]+>[^>]+>([^<]+)#i";
		preg_match_all($pattern, $content, $out, PREG_SET_ORDER);
		$dollar = "";
		$euro = "";
		foreach($out as $cur)
		{
			if($cur[2] == 978) $euro   = str_replace(",",".",$cur[4]);
		}
	}
	else {$euro=71;}

	global $wpdb; $wpdb->show_errors();
	$tal_table = $wpdb->prefix . 'electro_tali';
	$tal_r_table = $wpdb->prefix . 'ruchnie_tali';
	$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная' AND strana = 'Болгария'");
	if ($bolgariya_t) {
		$bolgariya_el_canat_t = $bolgariya_el1 = $bolgariya_t[0]->price*$euro;
		if ($cranisp == '\'Пожаробезопасное класса П-II / П-IIa / П-III\'') {
			$bolgariya_el_canat_t = ($bolgariya_el1*5/100)+$bolgariya_el_canat_t;
		}
		if ($cranisp == '\'Взрывобезопасное класса B1a, IIС Т5\'') {
			$bolgariya_el_canat_t = ($bolgariya_el1*18/100)+$bolgariya_el_canat_t;
		}
		if ($temper_minus == '-40') {
			$bolgariya_el_canat_t = ($bolgariya_el1*5/100)+$bolgariya_el_canat_t;
		}
		if ($temper_minus == '-50') {
			$bolgariya_el_canat_t = ($bolgariya_el1*20/100)+$bolgariya_el_canat_t;
		}
		if ($temper_plus == '+60') {
			$bolgariya_el_canat_t = $euro*190+$bolgariya_el_canat_t;
		}
	}
	$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Цепная' AND strana = 'Болгария'");
	if ($bolgariya_t) {
		$bolgariya_el_cep_t = $bolgariya_el2 = $bolgariya_t[0]->price*$euro;
		if ($cranisp == '\'Пожаробезопасное класса П-II / П-IIa / П-III\'') {
			$bolgariya_el_cep_t = ($bolgariya_el2*5/100)+$bolgariya_el_cep_t;
		}
		if ($cranisp == '\'Взрывобезопасное класса B1a, IIС Т5\'') {
			$bolgariya_el_cep_t = ($bolgariya_el2*25/100)+$bolgariya_el_cep_t;
		}
		if ($temper_minus == '-40') {
			$bolgariya_el_cep_t = ($bolgariya_el2*5/100)+$bolgariya_el_cep_t;
		}
		if ($temper_minus == '-50') {
			$bolgariya_el_cep_t = ($bolgariya_el2*20/100)+$bolgariya_el_cep_t;
		}
		if ($temper_plus == '+60') {
			$bolgariya_el_cep_t = $euro*190+$bolgariya_el_cep_t;
		}
	}
	$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная УСВ' AND strana = 'Болгария'");
	if ($bolgariya_t) {
		$bolgariya_el_canatUSV_t = $bolgariya_el3 = $bolgariya_t[0]->price*$euro;
		if ($cranisp == '\'Пожаробезопасное класса П-II / П-IIa / П-III\'') {
			$bolgariya_el_canatUSV_t = ($bolgariya_el3*5/100)+$bolgariya_el_canatUSV_t;
		}
		if ($cranisp == '\'Взрывобезопасное класса B1a, IIС Т5\'') {
			$bolgariya_el_canatUSV_t = ($bolgariya_el3*25/100)+$bolgariya_el_canatUSV_t;
		}
		if ($temper_minus == '-40') {
			$bolgariya_el_canatUSV_t = ($bolgariya_el3*5/100)+$bolgariya_el_canatUSV_t;
		}
		if ($temper_minus == '-50') {
			$bolgariya_el_canatUSV_t = ($bolgariya_el3*20/100)+$bolgariya_el_canatUSV_t;
		}
		if ($temper_plus == '+60') {
			$bolgariya_el_canatUSV_t = $euro*190+$bolgariya_el_canatUSV_t;
		}
	}
	$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная ВБИ' AND strana = 'Болгария'");
	if ($bolgariya_t) {
		$bolgariya_el_canatVBI_t = $₽ = $bolgariya_t[0]->price*$euro;
		if ($cranisp == '\'Пожаробезопасное класса П-II / П-IIa / П-III\'') {
			$bolgariya_el_canatVBI_t = ($₽*5/100)+$bolgariya_el_canatVBI_t;
		}
		if ($cranisp == '\'Взрывобезопасное класса B1a, IIС Т5\'') {
			$bolgariya_el_canatVBI_t = ($₽*25/100)+$bolgariya_el_canatVBI_t;
		}
		if ($temper_minus == '-40') {
			$bolgariya_el_canatVBI_t = ($₽*5/100)+$bolgariya_el_canatVBI_t;
		}
		if ($temper_minus == '-50') {
			$bolgariya_el_canatVBI_t = ($₽*20/100)+$bolgariya_el_canatVBI_t;
		}
		if ($temper_plus == '+60') {
			$bolgariya_el_canatVBI_t = $euro*190+$bolgariya_el_canatVBI_t;
		}
	}
	$bolgariya_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная УСВ ВБИ' AND strana = 'Болгария'");
	if ($bolgariya_t) {
		$bolgariya_el_canatUSVVBI_t = $bolgariya_el5 = $bolgariya_t[0]->price*$euro;
		if ($cranisp == '\'Пожаробезопасное класса П-II / П-IIa / П-III\'') {
			$bolgariya_el_canatUSVVBI_t = ($bolgariya_el5*5/100)+$bolgariya_el_canatUSVVBI_t;
		}
		if ($cranisp == '\'Взрывобезопасное класса B1a, IIС Т5\'') {
			$bolgariya_el_canatUSVVBI_t = ($bolgariya_el5*25/100)+$bolgariya_el_canatUSVVBI_t;
		}
		if ($temper_minus == '-40') {
			$bolgariya_el_canatUSVVBI_t = ($bolgariya_el5*5/100)+$bolgariya_el_canatUSVVBI_t;
		}
		if ($temper_minus == '-50') {
			$bolgariya_el_canatUSVVBI_t = ($bolgariya_el5*20/100)+$bolgariya_el_canatUSVVBI_t;
		}
		if ($temper_plus == '+60') {
			$bolgariya_el_canatUSVVBI_t = $euro*190+$bolgariya_el_canatUSVVBI_t;
		}
	}

	$russia_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND strana = 'Россия'");
	if ($cranisp == '\'Пожаробезопасное класса П-II / П-IIa / П-III\'') {
		$russia_el_t = ($russia_t[0]->price*18/100)+$russia_t[0]->price;
	}
	else {
		$russia_el_t = $russia_t[0]->price;
	}
	if ($temper_minus == '-40') {
		$russia_el_t = ($russia_t[0]->price*10/100)+$russia_t[0]->price;
	}

	$china_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Канатная' AND strana = 'Китай'");
	$china_el_canat_t = $china_t[0]->price;
	$china_t = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_table WHERE gp = $gp_t AND visota >= $visota_t AND type_tali = 'Цепная' AND strana = 'Китай'");
	$china_el_cep_t = $china_t[0]->price;

	$shved_tt = $wpdb->get_results("SELECT id, gp, visota, strana, price FROM $tal_r_table WHERE gp = $gp_t AND visota >= $visota_t AND ispolnenie = $ispolnenie_t AND strana = 'Швейцария'");
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
		'ct_r' => $china_r_t,
		'oneeuro' => $euro,
		'temper' => $temper_minus
	);

	echo json_encode($tali_res);
	wp_die();
}



add_action('wp_ajax_getinfo', 'getinfo');
add_action('wp_ajax_nopriv_getinfo', 'getinfo');
function getinfo ()
{
	$codeinfo = '\'' . $_POST['_codeinfo'] . '\'';

	global $wpdb; $wpdb->show_errors();
	$spravka = $wpdb->prefix . 'spravka';
	$spravka_result = $wpdb->get_results("SELECT codeinfo, descript, link FROM $spravka WHERE codeinfo = $codeinfo");
	if ($spravka_result) {
		$information = array(
			'descript' => $spravka_result[0]->descript/* . ' ' . $spravka_result[0]->codeinfo . ' ' */,
			'link' => $spravka_result[0]->link
		);
	}
	else
	{
		$information = array(
			'descript' => 'Для данного пункта отсутствует описание',
			'link' => '/'
		);
	}

	echo json_encode( $information );
	wp_die();
}


add_action('wp_ajax_sendmail', 'sendmail');
add_action('wp_ajax_nopriv_sendmail', 'sendmail');
function sendmail()
{
$lnk = 'http://' . $_SERVER['HTTP_HOST'] . '/wp-content/plugins/uniqcalc/mailer/'; //WP_CONTENT_DIR;
$type_cran = $_POST['type_cran'];
$type_manipl = $_POST['type_manipl'];
$gp = $_POST['gp'];
$prolet = $_POST['prolet'];
$ispolnnie = $_POST['ispolnnie'];
$razmeshenie = $_POST['razmeshenie'];
$summa = number_format($_POST['summa'], 0, ',', ' ');
$temper_ot = $_POST['temper_ot'];
$temper_do = $_POST['temper_do'];
$dops_puti = $_POST['dops'];
$dops_dop = $_POST['dops'];
$dops_uslugi = $_POST['dops'];
$price_puti = $_POST['price_puti'];
$price_dop = $_POST['price_dop'];
$price_uslug = $_POST['price_uslug'];
if (count($dops_dop['dop_oborudovanie']) > 0) {
	$countDopDop = count($dops_dop['dop_oborudovanie']);
}
if ( $countDopDop > 0 ) {
	$dopiki= '';
	for ($i=0,$j=1; $i < $countDopDop; $i++,$j++) {
		$dopiki .= "<tr>
						<td align='center' valign='top' style='width: 2%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>{$j}</span>
							</font>
						</td>
						<td align='center' valign='top' style='width: 50%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>{$dops_dop['dop_oborudovanie'][$i][0]}</span>
							</font>
						</td>
						<td align='center' valign='top' style='width: 16%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>{$dops_dop['dop_oborudovanie'][$i][1]}</span>
							</font>
						</td>
						<td align='center' valign='top' style='width: 16%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>1</span>
							</font>
						</td>
						<td align='center' valign='top' style='width: 16%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>{$dops_dop['dop_oborudovanie'][$i][1]}</span>
							</font>
						</td>
					</tr>";
	}
	$table_dopob = "<table cellpadding='0' cellspacing='0' border='0' width='700' class='table700' style='max-width: 700px; min-width: 320px; background: #ffffff;'>
		{$dopiki}
	</table>";
}

if (count($dops_uslugi['uslugi']) > 0) {
	$countDops = count($dops_uslugi['uslugi']);
}
if ( $countDops > 0 ) {
	$uslugi= '';
	for ($i=0,$j=1; $i < $countDops; $i++,$j++) {
		$uslugi .= "<tr>
						<td align='center' valign='top' style='width: 2%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>{$j}</span>
							</font>
						</td>
						<td align='center' valign='top' style='width: 50%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>{$dops_uslugi['uslugi'][$i][0]}</span>
							</font>
						</td>
						<td align='center' valign='top' style='width: 16%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>{$dops_uslugi['uslugi'][$i][1]}</span>
							</font>
						</td>
						<td align='center' valign='top' style='width: 16%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>1</span>
							</font>
						</td>
						<td align='center' valign='top' style='width: 16%;'>
	   						<font face='Arial, sans-serif' color='#373737' style='font-size: 11px; line-height: 21px;'>
								<span style='font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;'>{$dops_uslugi['uslugi'][$i][1]}</span>
							</font>
						</td>
					</tr>";
	}
	$table_uslugi = "<table cellpadding='0' cellspacing='0' border='0' width='700' class='table700' style='max-width: 700px; min-width: 320px; background: #ffffff;'>
		{$uslugi}
	</table>";
}

$message = <<<EOT
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>...</title>
<style type="text/css">
	...
</style>
</head>
<body>
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="min-width: 340px; font-size: 1px; line-height: normal;">
 	<tr>
   		<td align="center" valign="top">
   			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
   				<tr>
   					<td align="center" valign="top">
   						<div style="display: block; max-width: 100%;">
							<img src="{$lnk}logo.jpg" alt="img" border="0" style="display: block; max-width: 100%;" />
						</div>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
   				<tr>
   					<td align="left" valign="top">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase">Коммерческое&nbsp;предложение&nbsp;№1</span>
						</font>
					</td>
					<td align="center" valign="top">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px;">от</span>
						</font>
					</td>
					<td align="center" valign="top" style="background-color: #ffd98c;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px;">16.02.2018</span>
						</font>
					</td>
					<td align="center" valign="top">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase">На&nbsp;кран-балку</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="left" valign="top" style="vertical-align: middle;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase">Подготовлено&nbsp;специально&nbsp;для:</span>
						</font>
					</td>
					<td align="center" valign="top" style="background-color: #ffd98c;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase">Владимира&nbsp;Владимировича<br />Тел.&nbsp;8&nbsp;(999)&nbsp;999-99-99</span>
						</font>
					</td>
					<td align="center" valign="top" style="vertical-align: middle;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 20px; font-weight: bold; line-height: 21px; text-transform: uppercase">/</span>
						</font>
					</td>
					<td align="center" valign="top" style="background-color: #ffd98c;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase">ООО&nbsp;"Название&nbsp;фирмы"<br />E-mail&nbsp;test@test.ru</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 18px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: 700;">Дорогой&nbsp;Владимир Владимирович! Наше&nbsp;предложение&nbsp;окажется&nbsp;Вам&nbsp;полезным,&nbsp;если&nbsp;Вы:</span>
						</font>
					</td>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="left" valign="top" style="width: 50%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #ca353b; font-size: 10px; line-height: 21px; text-transform: uppercase;">&nbsp;-&nbsp;не&nbsp;желаете&nbsp;переплачивать&nbsp;за&nbsp;крановое&nbsp;оборудование</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 50%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #ca353b; font-size: 10px; line-height: 21px; text-transform: uppercase;">&nbsp;-&nbsp;цените&nbsp;профессиональную&nbsp;работу&nbsp;Ваших&nbsp;партнёров</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="left" valign="top" style="width: 50%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #ca353b; font-size: 10px; line-height: 21px; text-transform: uppercase;">&nbsp;-&nbsp;хотите&nbsp;как&nbsp;можно&nbsp;раньше&nbsp;получить&nbsp;свою&nbsp;кран-балку</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 50%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #ca353b; font-size: 10px; line-height: 21px; text-transform: uppercase;">&nbsp;-&nbsp;рассчитываете&nbsp;работать&nbsp;на&nbsp;выгодных&nbsp;для&nbsp;Вас&nbsp;условиях</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 50%; background-color: #AAAAAA;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Технические&nbsp;характеристики</span>
						</font>
					</td>
				</tr>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Маркировка:</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">CTLO-10/24(?)</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 5%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">Количество:</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 2%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;1</span>
						</font>
					</td>
					<td rowspan="11" align="center" valign="top" style="width: 43%">
   						<div style="display: block; max-width: 100%;">
							<img src="{$lnk}cran.jpg" alt="img" border="0" style="display: block; max-width: 100%;" />
						</div>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Тип крана:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">{$type_cran}</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Тип управления:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">{$type_manipl}</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Грузоподъемность:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px;line-height: 21px; text-transform: uppercase;">{$gp} кг</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Длинна пролета:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">{$prolet} мм</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Консоли крана:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">L1 1000 L2 2500</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Исполнение:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">{$ispolnnie}</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Режим работы:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">Средний - А5</span>
						</font>
					</td>
				</tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Класс размещения:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">{$razmeshenie}</span>
						</font>
					</td>
				</tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Температурный режим:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">от&nbsp;{$temper_ot}&#8451;&nbsp;до&nbsp;{$temper_do}&#8451;</span>
						</font>
					</td>
				</tr>
					<td align="left" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; font-weight: bold; line-height: 21px; text-transform: uppercase;">&nbsp;Стоимость крана:</span>
						</font>
					</td>
					<td colspan="2" align="center" valign="top" style="width: 30%">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase;">{$summa} ₽.</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 50%; background-color: #AAAAAA;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Дополнительное&nbsp;оборудование&nbsp;и&nbsp;опции</span>
						</font>
					</td>
				</tr>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 2%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">#</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 50%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Наименование</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Стоимость</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Кол-во</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Сумма</span>
						</font>
					</td>
				</tr>
			</table>
			{$table_dopob}
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 50%; background-color: #AAAAAA;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Услуги</span>
						</font>
					</td>
				</tr>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 2%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">#</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 50%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Наименование</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Стоимость</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Кол-во</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Сумма</span>
						</font>
					</td>
				</tr>
			</table>
			{$table_uslugi}
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
   				<tr>
   					<td align="center" valign="top">
   						<div style="display: block; max-width: 100%;">
							<img src="{$lnk}logo.jpg" alt="img" border="0" style="display: block; max-width: 100%;" />
						</div>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 50%; background-color: #AAAAAA;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Отличительные особенности наших кран-балок</span>
						</font>
					</td>
				</tr>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 2%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase; font-weight: bold;">1</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 98%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Все узлы крана имеют болтовое соединение, что значительно упрощает процесс сборки и монтажа оборудования.</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 2%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase; font-weight: bold;">2</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 98%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Электрические кран-балки комплектуются электродвигателями с конусным тормозом в сборе.</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 2%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase; font-weight: bold;">3</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 98%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Электрические щиты кран-балок комплектуются пускателями и трансформатором на 42V, что делает кран безопасным для оператора.</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 2%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase; font-weight: bold;">4</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 98%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Электрические кран-балки комплектуются гибким кабелем питания электродвигателей в резиновой оплётке.</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 2%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase; font-weight: bold;">5</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 98%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Токоподвод для тали комплектуется специальными роликами-карабинами. Вы так же можете выбрать другой тип токоподвода.</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 2%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase; font-weight: bold;">6</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 98%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Все токарные изделия кран-балок, включая колеса, подвергаются поверхностной закалке, что обеспечивает долгий срок службы.</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 2%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 10px; line-height: 21px; text-transform: uppercase; font-weight: bold;">7</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 98%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Все мостовые краны, производимые нашим заводом сертифицированы, что подтверждено сертификатом соответствия Таможенного союза.</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 50%; background-color: #AAAAAA;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Стоимость коммерческого предложения</span>
						</font>
					</td>
				</tr>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 2%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">#</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 50%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Наименование продукции/услуги</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Стоимость</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Ваша скидка</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%; background-color: #CCCCCC;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Сумма</span>
						</font>
					</td>
				</tr>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 2%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">1</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 50%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Стоимость путей и токоподвода</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">{$price_puti} ₽</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">0</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">{$price_puti} ₽</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 2%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">2</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 50%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Стоимость дополнительного оборудования и опций</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">{$price_dop} ₽</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">0</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">{$price_dop} ₽</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 2%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">3</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 50%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Стоимость услуг</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">{$price_uslug} ₽</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">0</span>
						</font>
					</td>
					<td align="center" valign="top" style="width: 16%;">
	   					<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">{$price_uslug} ₽</span>
						</font>
					</td>
				</tr>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="right" valign="top" style="width: 80%;">
   						<font face="Arial, sans-serif" color="#ca353b" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #ca353b; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">ОБЩАЯ СТОИМОСТЬ ОБОРУДОВАНИЯ И УСЛУГ В ₽ЛЯХ:</span>
						</font>
					</td>
					<td align="right" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#ca353b" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #ca353b; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">0.00 p</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="right" valign="top" style="width: 80%;">
   						<font face="Arial, sans-serif" color="#ca353b" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #ca353b; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">ОБЩАЯ СТОИМОСТЬ ОБОРУДОВАНИЯ И УСЛУГ В ЕВРО:</span>
						</font>
					</td>
					<td align="right" valign="top" style="width: 20%;">
   						<font face="Arial, sans-serif" color="#ca353b" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #ca353b; font-size: 11px; line-height: 21px; text-transform: uppercase; font-weight: bold;">0.00 p</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 50%; background-color: #AAAAAA;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Сроки и условия оплаты</span>
						</font>
					</td>
				</tr>
			</table>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 15%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Первый платёж:</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 85%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">70% от стоимости оборудования, в течение 5 рабочих дней, после подписания Договора</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 15%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Второй платёж:</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 85%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">30% от стоимости оборудования, в течение 5 рабочих дней, после подписания Договора</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 15%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Третий платёж:</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 85%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">50% от стоимости услуг в течение 5 рабочих дней, после уведомления о готовности оборудования по Договору</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" style="width: 15%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">Четвертый платёж:</span>
						</font>
					</td>
					<td align="left" valign="top" style="width: 85%;">
   						<font face="Arial, sans-serif" color="#373737" style="font-size: 11px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #373737; font-size: 11px; line-height: 21px;">50% от стоимости услуг в течение 5 рабочих дней, после уведомления о готовности оборудования по Договору</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="center" valign="top" style="width: 50%; background-color: #ffd98c;">
   						<font face="Arial, sans-serif" color="#8c610b" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #8c610b; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Борис Александрович!  Надеюсь наше предложение заинтересовало Вас. По всем возникшим вопросам, прошу обращаться к Вашему персональному менеджеру:&nbsp;</span>
						</font>
					</td>
				</tr>
			</table>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<div style="height: 9px; line-height: 9px; font-size: 7px;">&nbsp;</div>
			<table cellpadding="0" cellspacing="0" border="0" width="700" class="table700" style="max-width: 700px; min-width: 320px; background: #ffffff;">
				<tr>
					<td align="left" valign="top" style="width: 40%; vertical-align: middle;">
   						<font face="Arial, sans-serif" color="#8c610b" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #8c610b; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">&nbsp;&nbsp;&nbsp;С уважением, Коммерческий директор</span>
						</font>
					</td>
					<td rowspan="2" align="center" valign="top" style="width: 20%; vertical-align: middle;">
   						<div style="display: block; max-width: 100%;">
							<img src="{$lnk}uniq.png" alt="img" border="0" style="display: block; max-width: 100%;" />
						</div>
					</td>
					<td align="right" valign="top" style="width: 40%; vertical-align: middle;">
   						<font face="Arial, sans-serif" color="#8c610b" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #8c610b; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">Козлову Владимиру&nbsp;&nbsp;&nbsp;</span>
						</font>
					</td>
				</tr>
				<tr>
					<td align="left" valign="top" style="width: 40%; vertical-align: middle;">
   						<font face="Arial, sans-serif" color="#8c610b" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #8c610b; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">&nbsp;&nbsp;&nbsp;Петров Алексей Владимирович</span>
						</font>
					</td>
					<td align="right" valign="top" style="width: 40%; vertical-align: middle;">
   						<font face="Arial, sans-serif" color="#8c610b" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #8c610b; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">+7 (495) 540 50 53 (доб.  207)&nbsp;&nbsp;&nbsp;</span>
						</font>
					</td>
				</tr>
				<tr>
					<td colspan="3" align="right" valign="top" style="width: 40%; vertical-align: middle;">
   						<font face="Arial, sans-serif" color="#8c610b" style="font-size: 12px; line-height: 21px;">
							<span style="font-family: Arial, Tahoma, Geneva, sans-serif; color: #8c610b; font-size: 12px; line-height: 21px; text-transform: uppercase; font-weight: bold;">207@uniqcrane.ru&nbsp;&nbsp;&nbsp;</span>
						</font>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
</body>
</html>
EOT;
remove_all_filters( 'wp_mail_from' );
remove_all_filters( 'wp_mail_from_name' );
$headers = array(
	'From: uniqcrane company <admin@uniqcrane.ru>',
	'content-type: text/html'
);
$attachments = array(
	$lnk . '/plugins/uniqcalc/mailer/cran.jpg',
	$lnk . '/plugins/uniqcalc/mailer/logo.jpg',
	$lnk . '/plugins/uniqcalc/mailer/uniq.png'
);
	wp_mail( '89165110111@mail.ru', 'Коммерческое предложение от UNIQCRANE', $message, $headers );
	echo $table_dopob;
	wp_die();
}

add_action('wp_ajax_sender_contact_calc', 'sender_contact_calc');
add_action('wp_ajax_nopriv_sender_contact_calc', 'sender_contact_calc');
function sender_contact_calc ()
{
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$mail = $_POST['mail'];

	remove_all_filters( 'wp_mail_from' );
	remove_all_filters( 'wp_mail_from_name' );
	$message = "{$name} просил перезвонить по номеру {$phone} или ответить на почту {$mail}, на счет детального обсуждения стоимости кранового оборудования.";
	$headers = array(
		'From: uniqcrane company <admin@uniqcrane.ru>',
		'content-type: text/html'
	);
	wp_mail( 'info@uniqcrane.ru', 'Контакты из калькулятора UNIQCRANE', $message, $headers );
	wp_die();
}

add_action('wp_ajax_isguest', 'isguest');
add_action('wp_ajax_nopriv_isguest', 'isguest');
function isguest () {
	// определяем пользователя глобально
	$cu = wp_get_current_user(); 
	if( user_can($cu->ID, 'manage_options') ){
		echo 0;
	}
	else {
		echo 1;
	}
	wp_die();
}