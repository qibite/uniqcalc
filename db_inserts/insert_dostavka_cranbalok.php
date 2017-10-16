<?php
// Доставка кран - балок, цены в копейках
// До 6 м
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>0, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>500000), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>100, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>9250), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>300, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>5000), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>500, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>4250), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>750, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>3750), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>1000, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>3500), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>1500, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>3250), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>2000, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>3000), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>2500, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>2700), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>3000, 'obshiyL'=>6000, 'type'=>'Неразрезной', 'price'=>2500), array( '%d', '%d', '%s', '%d' ));
// До 6 м
// До 9 м
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>0, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>700000), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>100, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>14800), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>300, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>8000), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>500, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>6800), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>750, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>6000), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>1000, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>5600), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>1500, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>5200), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>2000, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>4700), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>2500, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>4300), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>3000, 'obshiyL'=>9000, 'type'=>'Неразрезной', 'price'=>3800), array( '%d', '%d', '%s', '%d' ));
// До 9 м
// Свыше 9 м Разрезной
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>0, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>3500000), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>100, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>31450), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>300, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>17000), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>500, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>14450), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>750, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>12750), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>1000, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>11900), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>1500, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>11050), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>2000, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>10200), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>2500, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>9010), array( '%d', '%d', '%s', '%d' ));
$wpdb->insert($dostavka_cranbalok,array('rasstoyanie'=>3000, 'obshiyL'=>9001, 'type'=>'Разрезной', 'price'=>8160), array( '%d', '%d', '%s', '%d' ));
// Свыше 9 м Разрезной
// Доставка кран - балок, цены в копейках