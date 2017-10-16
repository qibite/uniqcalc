<?php
global $wpdb;
	$opornie_crani_result = $wpdb->get_results("SELECT id, gp, shirina_mezh_putami, rels, upravlenie, sroki, price FROM wp_opornie_crani");
		if ($opornie_crani_result) {
			foreach ($opornie_crani_result as $cran) {
				$gp = $cran->gp;
			}
		}
		echo $gp;

