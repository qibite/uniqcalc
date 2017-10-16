<?php
add_action('wp_ajax_nopriv_calc', 'stoimost_crana');
function stoimost_crana() {

	global $wpdb;
	$gp = $_POST['_gp'];
	$shir = $_POST['_shir'];
	$upravl = $_POST['_upravl'];

	$opornie_crani_result = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, rels, upravlenie, sroki, price FROM wp_opornie_crani WHERE gp <= $gp AND shirina_mezh_putami <= $shir AND upravlenie <= $upravl ");
		if ($opornie_crani_result) {
			print_r($opornie_crani_result[0]->price);
		}


	wp_die(); // выход нужен для того, чтобы в ответе не было ничего лишнего, только то что возвращает функция
}

		//echo "$opornie_crani_result[0]->price";