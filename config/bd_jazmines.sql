-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 23-11-2021 a las 02:02:52
-- Versión del servidor: 8.0.18
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_jazmines`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `difuntos`
--

DROP TABLE IF EXISTS `difuntos`;
CREATE TABLE IF NOT EXISTS `difuntos` (
  `IdF` varchar(8) COLLATE utf8_bin NOT NULL,
  `Nombres` varchar(30) COLLATE utf8_bin NOT NULL,
  `ApellidoP` varchar(20) COLLATE utf8_bin NOT NULL,
  `ApellidoM` varchar(20) COLLATE utf8_bin NOT NULL,
  `FechaDef` varchar(15) COLLATE utf8_bin NOT NULL,
  `Estado` varchar(15) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdF`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `difuntos`
--

INSERT INTO `difuntos` (`IdF`, `Nombres`, `ApellidoP`, `ApellidoM`, `FechaDef`, `Estado`) VALUES
('A', 'Maria Juana1', 'Sanchez1', 'Loza1', '29/02/1980', 'Cremado'),
('B', 'Maria Juana2', 'Sanchez2', 'Loza2', '29/02/1980', 'Cremado'),
('C', 'Maria Juana3', 'Sanchez3', 'Loza3', '29/02/1980', 'Cremado'),
('D', 'Maria Juana4', 'Sanchez4', 'Loza4', '29/02/1980', 'Cremado'),
('E', 'Maria Juana5', 'Sanchez5', 'Loza5', '29/02/1980', 'Cremado'),
('I', 'Esteban Alan1', 'Brito1', 'Delgado1', '29/02/1980', 'Enterrado'),
('II', 'Esteban Alan2', 'Brito2', 'Delgado2', '29/02/1980', 'Enterrado'),
('III', 'Esteban Alan3', 'Brito3', 'Delgado3', '29/02/1980', 'Enterrado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `IdE` varchar(8) COLLATE utf8_bin NOT NULL,
  `CI` int(11) NOT NULL,
  `Nombres` varchar(30) COLLATE utf8_bin NOT NULL,
  `ApellidoP` varchar(20) COLLATE utf8_bin NOT NULL,
  `ApellidoM` varchar(20) COLLATE utf8_bin NOT NULL,
  `Descri` varchar(400) COLLATE utf8_bin NOT NULL,
  `Cargo` varchar(20) COLLATE utf8_bin NOT NULL,
  `Celular` int(11) NOT NULL,
  PRIMARY KEY (`IdE`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`IdE`, `CI`, `Nombres`, `ApellidoP`, `ApellidoM`, `Descri`, `Cargo`, `Celular`) VALUES
('646546', 10545465, 'Alan Brito', 'Delgado', 'Escaleno', 'Chulenger en League of Legends, real hasta la muerte', 'Vendedor', 75465454);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nichos`
--

DROP TABLE IF EXISTS `nichos`;
CREATE TABLE IF NOT EXISTS `nichos` (
  `IdN` int(11) NOT NULL,
  `Sar1` varchar(8) COLLATE utf8_bin NOT NULL,
  `Sar2` varchar(8) COLLATE utf8_bin NOT NULL,
  `Sar3` varchar(8) COLLATE utf8_bin NOT NULL,
  `Cen1` varchar(8) COLLATE utf8_bin NOT NULL,
  `Cen2` varchar(8) COLLATE utf8_bin NOT NULL,
  `Cen3` varchar(8) COLLATE utf8_bin NOT NULL,
  `Cen4` varchar(8) COLLATE utf8_bin NOT NULL,
  `Cen5` varchar(8) COLLATE utf8_bin NOT NULL,
  `Estado` varchar(20) COLLATE utf8_bin NOT NULL,
  `Propietario` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`IdN`),
  KEY `FK_Cen1Dif` (`Cen1`),
  KEY `FK_Cen2Dif` (`Cen2`),
  KEY `FK_Cen3Dif` (`Cen3`),
  KEY `FK_Cen4Dif` (`Cen4`),
  KEY `FK_Cen5Dif` (`Cen5`),
  KEY `FK_Sar1Dif` (`Sar1`),
  KEY `FK_Sar2Dif` (`Sar2`),
  KEY `FK_Sar3Dif` (`Sar3`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `nichos`
--

INSERT INTO `nichos` (`IdN`, `Sar1`, `Sar2`, `Sar3`, `Cen1`, `Cen2`, `Cen3`, `Cen4`, `Cen5`, `Estado`, `Propietario`) VALUES
(1, 'I', 'II', 'III', 'A', 'B', 'C', 'D', 'E', 'Comprado', 'ElBryan420');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
