<?php
///////////////////////////////////////////////////////////////////////////////////// 3.4 Радиоуправление
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + 3.7 + (2.1/2.3) + 8.3', 'price'=>1 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + (2.1 / 2.3) +3.7 + ( 8.2 / 8.4)', 'price'=>2 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + 2.2 + 3.7 + 8.3', 'price'=>3 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + 2.2 + 3.7 + (8.2 / 8.4)', 'price'=>4 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.6 + (2.1 / 2.3) + 3.7', 'price'=>5 ),
	array( '%s', '%d' ));



$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + (2.1 / 2.3 )+ 3.8 + 8.3', 'price'=>6 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + (2.1 / 2.3) +3.8 + ( 8.2 / 8.4)', 'price'=>7 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + 2.2 + 3.8 + 8.3', 'price'=>8 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + 2.2 + 3.8 + (8.2 / 8.4)', 'price'=>9 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.6 + (2.1 / 2.3) + 3.8', 'price'=>10 ),
	array( '%s', '%d' ));



$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + (2.1 или 2.3 )+ 3.9 + 8.3', 'price'=>11 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + (2.1 / 2.3) +3.9 + ( 8.2 / 8.4)', 'price'=>12 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + 2.2 + 3.9 + 8.3', 'price'=>13 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.5 + 2.2 + 3.9 + (8.2 / 8.4)', 'price'=>14 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'3.6 + (2.1 / 2.3) + 3.9', 'price'=>15 ),
	array( '%s', '%d' ));

///////////////////////////////////////////////////////////////////////////////////////// 8.2 Частотный преобразователь на кран


$wpdb->insert(
	$variants,
	array('code_option'=>'8.5 + (7.1 / 7.2 / 7.3 / 7.4 / 7.5)', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'8.5 + (7.6 / 7.7 / 7.8)', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'8.5 + (7.9 / 7.10)', 'price'=>0 ),
	array( '%s', '%d' ));

$wpdb->insert(
	$variants,
	array('code_option'=>'8.6 + (7.1 / 7.2 / 7.3 / 7.4 / 7.5)', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'8.6 + (7.6 / 7.7 / 7.8)', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'8.6 + (7.9 / 7.10)', 'price'=>0 ),
	array( '%s', '%d' ));

$wpdb->insert(
	$variants,
	array('code_option'=>'8.7 + (7.1 / 7.2 / 7.3 / 7.4 / 7.5)', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'8.7 + (7.6 / 7.7 / 7.8)', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'8.7 + (7.9 / 7.10)', 'price'=>0 ),
	array( '%s', '%d' ));


///////////////////////////////////////////////////////////////////////////////////////// 10 Концевые выключатели / оптические датчики


$wpdb->insert(
	$variants,
	array('code_option'=>'Кулачковый', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Двухпозиционный', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Комплект двухпозиционных выключателей (2 шт.)', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Оптический (лазер) датчик', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Комплект лазерных оптических датчиков (2 шт.)', 'price'=>0 ),
	array( '%s', '%d' ));


///////////////////////////////////////////////////////////////////////////////////////// 11 Электрический щит крана с импортными компонентами был перенесен в отдельную таблицу
///////////////////////////////////////////////////////////////////////////////////////// 12 Световая / Звуковая сирена


$wpdb->insert(
	$variants,
	array('code_option'=>'Световая сирена', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Звуковая сирена', 'price'=>0 ),
	array( '%s', '%d' ));


///////////////////////////////////////////////////////////////////////////////////////// 13 Аварийный СТОП с линейным выключателем


$wpdb->insert(
	$variants,
	array('code_option'=>'13 + 3.3', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'13 + 3.4', 'price'=>0 ),
	array( '%s', '%d' ));


///////////////////////////////////////////////////////////////////////////////////////// 15 Регистратор параметров
$wpdb->insert(
	$variants,
	array('code_option'=>'Без индикации процента нагрузки', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'С индикацией процента нагрузки', 'price'=>0 ),
	array( '%s', '%d' ));
///////////////////////////////////////////////////////////////////////////////////////// 16 Устройство защиты обрыва фаз
$wpdb->insert(
	$variants,
	array('code_option'=>'Устройство защиты обрыва фаз', 'price'=>0 ),
	array( '%s', '%d' ));
///////////////////////////////////////////////////////////////////////////////////////// 18 Индивидуальная покраска крана

$wpdb->insert(
	$variants,
	array('code_option'=>'(5а6 / 5б4) < 12', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'(5а6 / 5б4) < 22', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'(5а6 / 5б4) > 22', 'price'=>0 ),
	array( '%s', '%d' ));
///////////////////////////////////////////////////////////////////////////////////////// 19 Дополнительный РЕМ комплект

///////////////////////////////////////////////////////////////////////////////////////// 21 Ограничитель грузоподъёмности


$wpdb->insert(
	$variants,
	array('code_option'=>'Цифровой (до 5 тн.) - 500 кг', 'price'=>8000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Цифровой (до 5 тн.) - 1000 кг', 'price'=>8100 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Цифровой (до 5 тн.) - 2000 кг', 'price'=>8200 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Цифровой (до 5 тн.) - 3200 кг', 'price'=>8300 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Цифровой (до 5 тн.) - 5000 кг', 'price'=>8400 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Цифровой (до 5 тн.) - 6300 кг', 'price'=>8500 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Цифровой (до 5 тн.) - 8000 кг', 'price'=>0 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Цифровой (до 5 тн.) - 10000 кг', 'price'=>0 ),
	array( '%s', '%d' ));

$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 500 кг', 'price'=>12800 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 1000 кг', 'price'=>15800 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 2000 кг', 'price'=>16400 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 3200 кг', 'price'=>17800 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 5000 кг', 'price'=>20500 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 6300 кг', 'price'=>21000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 8000 кг', 'price'=>21000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 1000 кг', 'price'=>20500 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 12500 кг', 'price'=>17800 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Канатный - 16000 кг', 'price'=>21000 ),
	array( '%s', '%d' ));


///////////////////////////////////////////////////////////////////////////////////////// 22 Крановые весы
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 500 кг', 'price'=>19400 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 1000 кг', 'price'=>23400 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 2000 кг', 'price'=>32900 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 3200 кг', 'price'=>32900 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 5000 кг', 'price'=>40300 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 6300 кг', 'price'=>51900 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 8000 кг', 'price'=>52900 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 1000 кг', 'price'=>51900 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 12500 кг', 'price'=>74000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Россия - 16000 кг', 'price'=>74000 ),
	array( '%s', '%d' ));

$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 500 кг', 'price'=>68000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 1000 кг', 'price'=>68000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 2000 кг', 'price'=>68000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 3200 кг', 'price'=>75000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 5000 кг', 'price'=>75000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 6300 кг', 'price'=>97000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 8000 кг', 'price'=>97000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 1000 кг', 'price'=>97000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 12500 кг', 'price'=>159000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Крановые весы Корея - 16000 кг', 'price'=>179000 ),
	array( '%s', '%d' ));

$wpdb->insert(
	$variants,
	array('code_option'=>'Плавающая концевая тележка', 'price'=>10000 ),
	array( '%s', '%d' ));
$wpdb->insert(
	$variants,
	array('code_option'=>'Четыре приводных колеса', 'price'=>10000 ),
	array( '%s', '%d' ));