-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.19 - MySQL Community Server (GPL)
-- Операционная система:         Win32
-- HeidiSQL Версия:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных wordpress
CREATE DATABASE IF NOT EXISTS `wordpress` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `wordpress`;

-- Дамп структуры для таблица wordpress.wp_chastotnik_tali
DROP TABLE IF EXISTS `wp_chastotnik_tali`;
CREATE TABLE IF NOT EXISTS `wp_chastotnik_tali` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `firma` varchar(255) NOT NULL,
  `gp` int(255) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы wordpress.wp_chastotnik_tali: ~30 rows (приблизительно)
DELETE FROM `wp_chastotnik_tali`;
/*!40000 ALTER TABLE `wp_chastotnik_tali` DISABLE KEYS */;
INSERT INTO `wp_chastotnik_tali` (`id`, `firma`, `gp`, `price`) VALUES
	(1, 'ESQ', 500, 1),
	(2, 'ESQ', 1000, 2),
	(3, 'ESQ', 2000, 3),
	(4, 'ESQ', 3200, 4),
	(5, 'ESQ', 5000, 0),
	(6, 'ESQ', 6300, 0),
	(7, 'ESQ', 8000, 0),
	(8, 'ESQ', 10000, 0),
	(9, 'ESQ', 12500, 0),
	(10, 'ESQ', 16000, 0),
	(11, 'HYUNDAI', 500, 11),
	(12, 'HYUNDAI', 1000, 12),
	(13, 'HYUNDAI', 2000, 13),
	(14, 'HYUNDAI', 3200, 14),
	(15, 'HYUNDAI', 5000, 0),
	(16, 'HYUNDAI', 6300, 0),
	(17, 'HYUNDAI', 8000, 0),
	(18, 'HYUNDAI', 10000, 0),
	(19, 'HYUNDAI', 12500, 0),
	(20, 'HYUNDAI', 16000, 0),
	(21, 'DANFOSS', 500, 21),
	(22, 'DANFOSS', 1000, 22),
	(23, 'DANFOSS', 2000, 23),
	(24, 'DANFOSS', 3200, 24),
	(25, 'DANFOSS', 5000, 0),
	(26, 'DANFOSS', 6300, 0),
	(27, 'DANFOSS', 8000, 0),
	(28, 'DANFOSS', 10000, 0),
	(29, 'DANFOSS', 12500, 0),
	(30, 'DANFOSS', 16000, 0);
/*!40000 ALTER TABLE `wp_chastotnik_tali` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
