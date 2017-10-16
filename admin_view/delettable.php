<?php

global $wpdb;
$sql = "DROP TABLE `wp_variants`;";
$wpdb->query($sql);

$inurl = $_SERVER['PHP_SELF'].'?page=unicalcplugin&view=main';
?>
<meta http-equiv="refresh" content="0;URL=<?=$inurl?>">