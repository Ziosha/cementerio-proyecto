-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 24-11-2021 a las 20:07:22
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
('C1', 'Maria Juana', 'Sanchez', 'Loza', '22/02/1980', 'Cremado'),
('C2', 'Adriana Carolina', 'Hernandez', 'Monterrosa', '11/02/1981', 'Cremado'),
('C3', 'Adriana Marcela', 'Rey', 'Sanchez', '13/02/1983', 'Cremado'),
('C4', 'Alejandro Abondano', 'Abondano', 'Acevedo', '24/02/1985', 'Cremado'),
('C5', 'Alexander Carvajal', 'Vargas', 'Lloza', '14/02/1979', 'Cremado'),
('C6', 'Andrea Catalina', 'Acero', 'Caro', '15/02/1977', 'Cremado'),
('C7', 'Andrea Liliana', 'Cruz', 'Garcia', '01/02/1976', 'Cremado'),
('C8', 'Andres Felipe', 'Villa', 'Monroy', '03/02/1990', 'Cremado'),
('C9', 'Angela Patricia', 'Mahecha', 'Piñeros', '02/03/2002', 'Cremado'),
('C10', 'Angelica Lisseth', 'Blanco', 'Concha', '22/06/1999', 'Cremado'),
('C11', 'Angelica Maria', 'Rocha', 'Garcia', '25/11/1995', 'Cremado'),
('C12', 'Angie Tatiana', 'Fernandez', 'Martinez', '14/07/1991', 'Cremado'),
('C13', 'Brigite Polanco', 'Ruiz', 'Blanco', '11/03/1996', 'Cremado'),
('C14', 'Camilo Villamizar', 'Aristzabal', 'Montaño', '11/11/1981', 'Cremado'),
('C15', 'Camilo', 'Rodriguez', 'Botero', '10/05/1992', 'Cremado'),
('C16', 'Camilo Alberto', 'Cortes', 'Montejo', '10/03/2000', 'Cremado'),
('C17', 'Camilo Enrique', 'Gomez', 'Rodriguez', '11/03/1987', 'Cremado'),
('C18', 'Carlos Andres', 'Polo', 'Castellanos', '11/03/1961', 'Cremado'),
('C19', 'Carlos Didier', 'Castaño', 'Contreras', '21/06/1971', 'Cremado'),
('C20', 'Carlos Felipe', 'Mogollon', 'Pachon', '14/04/1997', 'Cremado'),
('C21', 'Carol Ruchina', 'Gomez', 'Gianine', '11/07/2001', 'Cremado'),
('C22', 'Carolina', 'Pintor', 'Pinzon', '12/11/1971', 'Cremado'),
('C23', 'Catherine', 'Ospina', 'Alfonso', '01/14/1993', 'Cremado'),
('C24', 'Cinthya Fernanda', 'Dussan', 'Guzman', '11/01/1983', 'Cremado'),
('C25', 'Claudia Liliana', 'Torres', 'Frias', '10/10/1990', 'Cremado'),
('C26', 'Cristina Elizabeth', 'Barhel', 'Guardiola', '03/04/1973', 'Cremado'),
('C27', 'Daniel', 'Gomez', 'Delgado', '11/06/1969', 'Cremado'),
('C28', 'Daniel Andres', 'Castiblanco', 'Salgado', '17/06/1992', 'Cremado'),
('C29', 'Daniela', 'Hernandez', 'Bravo', '10/07/1989', 'Creamado'),
('C30', 'Daniela Katherinne', 'Suarique', 'Avila', '12/06/1971', 'Cremado'),
('C31', 'Daniella', 'Puerto', 'Navia', '09/04/1979', 'Cremado'),
('C32', 'Deny Marcela', 'Muñoz', 'Lizarazo', '19/01/1998', 'Cremado'),
('C33', 'Diana Carolina', 'Lopez', 'Rodriguez', '13/05/1997', 'Cremado'),
('C34', 'Diana Catalina', 'Diaz', 'Beltran', '16/02/1981', 'Cremado'),
('C35', 'Diego Alejandro', 'Forero', 'Peña', '13/04/1977', 'Cremado'),
('E1', 'Jenny Fernanda', 'Sanchez', 'Arenas', '12/01/2005', 'Enterrado'),
('E2', 'Jenny Viviana', 'Moncaleano', 'Preciado', '14/02/1999', 'Enterrado'),
('E3', 'Jorge Esteban', 'Rey', 'Quito', '12/02/2005', 'Enterrado'),
('E4', 'Jorge Mario', 'Orozco', 'Dussan', '01/06/1984', 'Enterrado'),
('E5', 'Jose Guillermo', 'Marin', 'Zubieta', '11/04/1967', 'Enterrado'),
('E6', 'Juan Camilo', 'Ortega', 'Peña', '15/04/1960', 'Enterrado'),
('E7', 'Juan Camilo', 'Jimenez', 'Cortes', '05/02/1986', 'Enterrado'),
('E8', 'Juan Esteban', 'Lanao', 'Sanchez', '15/03/1973', 'Enterrado'),
('E9', 'Juan Fernando', 'Barjuch', 'Moreno', '04/03/1993', 'Enterrado'),
('E10', 'Juan Sebastian', 'Romero', 'Escobar', '03/09/1998', 'Enterrado'),
('E11', 'Juan Sebastian', 'Tarquino', 'Acosta', '02/06/1997', 'Enterrado'),
('E12', 'Juan Sebastian', 'Sanchez', 'Sanchez', '03/05/1996', 'Enterrado'),
('E13', 'Juan', 'Romero', 'Montoya', '12/10/1996', 'Enterrado'),
('E14', 'Julian Leonardo', 'Sanchez', 'Prada', '10/02/1994', 'Enterrado'),
('E15', 'Juliana', 'Gaviria', 'Garcia', '01/06/2007', 'Enterrado'),
('E16', 'July Catherine', 'Gonzales', 'Suarez', '21/04/2001', 'Enterrado'),
('E17', 'Karen Eliana', 'Hernandez', 'Pulido', '07/03/1974', 'Enterrado'),
('E18', 'Laura', 'Diaz', 'Mejia', '03/04/1979', 'Enterrado'),
('E19', 'Laura Camila', 'Puerto', 'Castro', '10/06/2000', 'Enterrado'),
('E20', 'Laura Catalina', 'Varon', 'Buitargo', '05/09/1998', 'Enterrado'),
('E21', 'Laura Fernanda', 'Rodriguez', 'Torres', '04/06/1988', 'Enterrado');

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
('E23', 10545465, 'Adrian', 'Alanoca', 'Sanchez', 'Vendedor veterano con experiencia de mas de 3 años a su servicio para brindarle la mejor experiencia posible', 'Vendedor', 75465454),
('E24', 20485437, 'Elias Salomon', 'Garcia', 'Peñaloza', 'Vendedor entusiasta con varias ventas a su nombre. Amigable, eficaz y perfectamente preparado para encontrar el nicho que busca', 'Vendedor', 74367599),
('E25', 17584578, 'Guzman Ziosha', 'Bravo', 'Ibañez', 'Vendedor eficaz con mucha experiencia en el campo para encontrar el nicho que desea en el menor tiempo posible', 'Vendedor', 73287376),
('E26', 19846739, 'Adrian Julio', 'Garcia', 'Paredes', 'Vendedor recientemente adquirido con mucha energia para ayudarlo a encontrar su nicho perfecto', 'Vendedor', 74398674);

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
(1, 'E1', 'E2', 'E3', 'C1', 'C2', 'C3', 'C4', 'C5', 'Comprado', 'Adrian Sanchez'),
(2, 'E4', 'E5', 'E6', 'C6', 'C7', 'C8', 'C9', 'C10', 'Comprado', 'Alan Brito'),
(3, 'E7', 'E8', 'E9', 'C11', 'C12', 'C13', 'C14', 'C15', 'Rentado', 'Alex Plosivo'),
(4, 'E10', 'E11', 'E12', 'C16', 'C17', 'C18', 'C19', 'C20', 'Comprado', 'Juan Caguaya'),
(5, 'E13', 'E14', 'E15', 'C21', 'C22', 'C23', 'C24', 'C25', 'Rentado', 'Andrea Gonzales'),
(6, 'E16', 'E17', 'E18', 'C26', 'C27', 'C28', 'C29', 'C30', 'Comprado', 'Juan Perez'),
(7, 'E19', 'E20', 'E21', 'C31', 'C32', 'C33', 'C34', 'C35', 'Rentado', 'Valeria Loza'),
(8, '', '', '', '', '', '', '', '', 'Disponible', ''),
(9, '', '', '', '', '', '', '', '', 'Disponible', ''),
(10, '', '', '', '', '', '', '', '', 'Disponible', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
