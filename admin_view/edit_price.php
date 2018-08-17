<?php
// Цена на доставку кранбалок в копейках пересчет!
if ( $_POST['dostavka_cranbalok_submit'] == true) {
	$table = $_POST['db'];
	$id = $_POST['edited_id'];
	$new_price = $_POST['new_price'];
	$new_price = $new_price*100;
	global $wpdb;
	$res = $wpdb->update(
			$table, 
			array('price' => $new_price),
			array('id' => $id),
			array( '%d' ),
			array( '%d' )
		);
	echo '<div style="display:flex;height:700px;align-items:center;justify-content:center;text-transform:uppercase"><h1>Цена крана успешно изменена!</h1></div>';
}
// Цена на остальное montazh_rels_submit montazh_provod_submit stoimost_rels_result_submit stoimost_provod_submit montazh_ruchnih_cran_submit montazh_electro_cran_submit km_viezd_submit shef_montazh_submit
elseif ( $_POST['electro_tali_submit'] == true || $_POST['ruchnie_tali_submit'] == true || $_POST['opornie_crani_submit'] == true || $_POST['podvesnie_crani_submit'] == true || $_POST['variants_submit'] == true || $_POST['montazh_rels_submit'] == true || $_POST['montazh_provod_submit'] == true || $_POST['stoimost_rels_result_submit'] == true || $_POST['stoimost_provod_submit'] == true || $_POST['montazh_ruchnih_cran_submit'] == true || $_POST['montazh_electro_cran_submit'] == true || $_POST['km_viezd_submit'] == true || $_POST['shef_montazh_submit'] == true ) {
	$table = $_POST['db'];
	$id = $_POST['edited_id'];
	$new_price = $_POST['new_price'];
	//$new_price = $new_price*100;
	global $wpdb;
	$res = $wpdb->update(
			$table, 
			array('price' => $new_price),
			array('id' => $id),
			array( '%d' ),
			array( '%d' )
		);
	echo '<div style="display:flex;height:700px;align-items:center;justify-content:center;text-transform:uppercase"><h1>Цена успешно изменена!</h1></div>';
}
elseif ($_POST['chdescript'] == true) {
	$table = $_POST['db'];
	$id = $_POST['edited_id'];
	$descript = $_POST['descript'];
	global $wpdb;
	$res = $wpdb->update(
			$table, 
			array('descript' => $descript),
			array('id' => $id),
			array( '%d' ),
			array( '%s' )
		);
	echo '<div style="display:flex;height:700px;align-items:center;justify-content:center;text-transform:uppercase"><h1>Цена успешно изменена!</h1></div>';
}
else {echo '<div style="display:flex;height:700px;align-items:center;justify-content:center;text-transform:uppercase"><h1 style="color:red">Произошла ошибка записи!!!</h1></div>';}



$inurl = $_SERVER['PHP_SELF'].'?page=unicalcplugin&view=main';
?>
<meta http-equiv="refresh" content="0;URL=<?=$inurl?>">

