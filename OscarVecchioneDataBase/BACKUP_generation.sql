-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 29, 2021 alle 12:48
-- Versione del server: 10.4.19-MariaDB
-- Versione PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `generation`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `africa`
--

CREATE TABLE `africa` (
  `id` int(11) NOT NULL,
  `stato` varchar(100) DEFAULT NULL,
  `capitale` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `africa`
--

INSERT INTO `africa` (`id`, `stato`, `capitale`) VALUES
(1, 'libia', 'benghazi'),
(2, 'etiopia', 'addis abeba'),
(3, 'SudAfrica', 'citta del capo');

-- --------------------------------------------------------

--
-- Struttura della tabella `americhe`
--

CREATE TABLE `americhe` (
  `id` int(11) NOT NULL,
  `stato` varchar(100) DEFAULT NULL,
  `capitale` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `americhe`
--

INSERT INTO `americhe` (`id`, `stato`, `capitale`) VALUES
(1, 'USA', 'washington'),
(2, 'peru', 'lima'),
(3, 'brasile', 'brasilia');

-- --------------------------------------------------------

--
-- Struttura della tabella `autore`
--

CREATE TABLE `autore` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `cognome` varchar(50) DEFAULT NULL,
  `nazionalita` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `autore`
--

INSERT INTO `autore` (`id`, `nome`, `cognome`, `nazionalita`) VALUES
(1, 'John Ronald Reuel', 'Tolkien', ''),
(2, 'Dan', 'Brown', ''),
(3, 'Paulo', 'Coelho', ''),
(4, 'J. D.', 'Salinger', ''),
(5, 'Agatha', 'Christie', ''),
(6, 'J. K.', 'Rowling', ''),
(7, 'Tsao', 'Chan', ''),
(8, 'E. L.', 'James', ''),
(9, 'Antoine', 'de Saint-Exup?ry', ''),
(10, 'Charles', 'Dickens', ''),
(11, 'Miguel', 'de Cervantes', ''),
(12, 'Clive Staples', 'Lewis', ''),
(13, 'Tse-tung', 'Mao', ''),
(14, 'Michele', 'Rech, Zerocalcare', ''),
(15, 'Andrea', 'Camilleri', ''),
(16, 'Ken', 'Follett', ''),
(17, 'Kazuo', 'Ishiguro', ''),
(18, 'Carlo', 'Fruttero', ''),
(19, 'Franco', 'Lucentini', ''),
(20, 'Italo', 'Calvino', ''),
(21, 'Stephen', 'King', ''),
(22, 'Isabel', 'Allende', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `autore_libro`
--

CREATE TABLE `autore_libro` (
  `libro_id` int(11) NOT NULL,
  `autore_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `autore_libro`
--

INSERT INTO `autore_libro` (`libro_id`, `autore_id`) VALUES
(1, 3),
(2, 8),
(3, 5),
(4, 11),
(5, 6),
(6, 2),
(7, 4),
(8, 12),
(9, 13),
(10, 9),
(11, 1),
(12, 7),
(13, 16),
(14, 18),
(14, 19),
(15, 1),
(16, 14),
(17, 2),
(18, 17),
(19, 15),
(20, 10),
(21, 20),
(22, 21);

-- --------------------------------------------------------

--
-- Struttura della tabella `editore`
--

CREATE TABLE `editore` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `editore`
--

INSERT INTO `editore` (`id`, `nome`, `email`) VALUES
(1, 'Mondadori', NULL),
(3, 'Einaudi', NULL),
(4, 'Salani', NULL),
(5, 'Edizioni Clandestine', NULL),
(6, 'Bao Publishing', NULL),
(7, 'Sellerio', NULL),
(8, 'BUR', NULL),
(9, 'Sperling & Kupfer', NULL),
(10, 'Bompiani', NULL),
(11, 'Adelphi', NULL),
(12, 'Feltrinelli', NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `europa`
--

CREATE TABLE `europa` (
  `id` int(11) NOT NULL,
  `stato` varchar(100) DEFAULT NULL,
  `capitale` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `europa`
--

INSERT INTO `europa` (`id`, `stato`, `capitale`) VALUES
(1, 'italia', 'roma'),
(2, 'germania', 'berlino'),
(3, 'spagna', 'madrid');

-- --------------------------------------------------------

--
-- Struttura della tabella `impiegato`
--

CREATE TABLE `impiegato` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `cognome` varchar(50) DEFAULT NULL,
  `ruolo` varchar(20) DEFAULT NULL,
  `rif_to` int(11) DEFAULT NULL,
  `stipendio` decimal(6,2) DEFAULT NULL,
  `ufficio_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `impiegato`
--

INSERT INTO `impiegato` (`id`, `nome`, `cognome`, `ruolo`, `rif_to`, `stipendio`, `ufficio_id`) VALUES
(1, 'Mario', 'Rossi', 'tecnico', NULL, '2500.00', 1),
(2, 'Marco', 'Bianchi', 'amministrativo', 7, '1600.00', 2),
(3, 'Paolo', 'Verdi', 'amministrativo', 7, '1600.00', 2),
(4, 'Enrico', 'Marrone', 'venditore', 8, '1300.00', 3),
(5, 'Nicola', 'Testa', 'venditore', 8, '1300.00', 3),
(6, 'Franco', 'Barba', 'tecnico', 1, '1500.00', 1),
(7, 'Elena', 'Totti', 'amministrativo', NULL, '2600.00', 2),
(8, 'Paola', 'Capra', 'venditore', NULL, '2300.00', 3),
(9, 'Mauro', 'Barba', 'venditore', 8, '1300.00', 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `libro`
--

CREATE TABLE `libro` (
  `id` int(11) NOT NULL,
  `titolo` varchar(100) DEFAULT NULL,
  `prezzo` decimal(6,2) DEFAULT NULL,
  `pagine` smallint(6) DEFAULT NULL,
  `editore_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `libro`
--

INSERT INTO `libro` (`id`, `titolo`, `prezzo`, `pagine`, `editore_id`) VALUES
(1, 'Alchimista (L\')', '12.00', 10, 1),
(2, 'Cinquanta sfumature di grigio', '10.20', 560, 1),
(3, 'Dieci piccoli indiani', '10.20', 208, 1),
(4, 'Don Chisciotte della Mancha', '20.40', NULL, 3),
(5, 'Harry Potter e la Pietra Filosofale', '8.50', 302, 4),
(6, 'Il Codice da Vinci', '11.00', 512, 1),
(7, 'Il giovane Holden', '10.20', 251, 3),
(8, 'Il leone, la strega e l\'armadio', '7.65', 182, 1),
(9, 'Il libretto rosso', '7.22', 160, 5),
(10, 'Il Piccolo Principe', '4.25', 95, 1),
(11, 'Il Signore degli Anelli: La compagnia dell\'anello. Le due torri. Il ritorno del re', '25.00', 1255, 10),
(12, 'Il sogno della camera rossa. Romanzo cinese del XVIII secolo', '15.30', 721, 3),
(13, 'La colonna di fuoco', '27.00', 912, 1),
(14, 'La donna della domenica', '12.00', 434, 1),
(15, 'Lo Hobbit', '9.35', 417, 10),
(16, 'Macerie prime', '14.45', 192, 6),
(17, 'Origin', '21.25', 564, 1),
(18, 'Quel che resta del giorno', '12.00', 276, 3),
(19, 'Un mese con Montalbano', '12.75', 512, 7),
(20, 'Una storia tra due citt?', '9.77', 600, 10),
(21, 'Marcovaldo', '10.00', 120, 7),
(22, 'IT', '25.00', 550, 9),
(23, 'gomorra', '12.59', 345, 1),
(26, 'Java: mattone dopo mattone', '600.00', 1800, 4);

-- --------------------------------------------------------

--
-- Struttura stand-in per le viste `libro_tot`
-- (Vedi sotto per la vista effettiva)
--
CREATE TABLE `libro_tot` (
`titolo` varchar(100)
,`prezzo` decimal(6,2)
,`pagine` smallint(6)
,`editore` varchar(30)
,`autore` varchar(81)
);

-- --------------------------------------------------------

--
-- Struttura della tabella `studente`
--

CREATE TABLE `studente` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `cognome` varchar(20) DEFAULT NULL,
  `genere` enum('m','f') DEFAULT NULL,
  `indirizzo` varchar(100) DEFAULT NULL,
  `citta` varchar(30) DEFAULT NULL,
  `provincia` char(2) DEFAULT 'TO',
  `regione` varchar(30) DEFAULT 'Piemonte',
  `email` varchar(100) NOT NULL,
  `data_nascita` date DEFAULT NULL,
  `ins` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `studente`
--

INSERT INTO `studente` (`id`, `nome`, `cognome`, `genere`, `indirizzo`, `citta`, `provincia`, `regione`, `email`, `data_nascita`, `ins`) VALUES
(1, 'franco', 'rossi', 'm', 'via Tripoli 10', 'torino', 'TO', 'Piemonte', 'franco.rossi@gmail.com', '1978-10-01', '2021-06-01 07:41:58'),
(2, 'mario', 'verdi', 'm', 'Via Gorizia 5', 'asti', 'AT', 'Piemonte', 'mario.verdi@gmail.com', '1981-10-01', '2021-06-01 07:38:20'),
(3, 'paolo', 'bianchi', 'm', 'via Volvera 47', 'asti', 'AT', 'Piemonte', 'paolo.bianchi@gmail.com', '1983-10-01', '2021-06-01 07:38:20'),
(4, 'sara', 'rossi', 'f', 'corso Vigevano 301', 'cuneo', 'CN', 'Piemonte', 'sara.rossi@gmail.com', '1983-10-01', '2021-06-01 07:38:20'),
(5, 'elisa', 'verdi', 'f', 'corso Francia 18', 'alessandria', 'AL', 'Piemonte', 'elisa.verdi@gmail.com', '1987-10-01', '2021-06-01 07:38:20'),
(6, 'marco', 'bianchi', 'm', 'via Siccardi 3', 'novara', 'NO', 'Piemonte', 'marcob@gmail.com', '1993-10-01', '2021-06-01 07:38:20'),
(7, 'franca', 'verdi', 'f', 'via MIlano 33', 'torino', 'TO', 'Piemonte', 'fv@icloud.it', '1993-10-01', '2021-06-14 09:43:28'),
(8, 'mauro', 'bruni', 'm', 'via Roma 72', 'torino', 'TO', 'Piemonte', 'mb@icloud.it', '1988-10-01', '2021-06-14 09:43:28'),
(9, 'osvaldo', 'rossi', 'm', 'via Firenze 5', 'torino', 'TO', 'Piemonte', 'or@icloud.it', '1987-01-02', '2021-06-14 09:43:28'),
(10, 'oscar', 'verdi', 'm', 'lungo Dora Siena 34', 'torino', 'TO', 'Piemonte', 'ov@icloud.it', '1990-02-03', '2021-06-14 09:43:28'),
(11, 'paola', 'bianchi', 'f', 'Corso Regina 300', 'torino', 'TO', 'Piemonte', 'paolab@icloud.it', '1985-03-04', '2021-06-14 09:43:28'),
(12, 'franca', 'verdi', 'f', 'Corso Mortara 231', 'torino', 'TO', 'Piemonte', 'francaverdi@icloud.it', '1989-11-05', '2021-06-14 09:43:28'),
(13, 'eleonora', 'verdi', 'f', 'via Bardonecchia 121', 'torino', 'TO', 'Piemonte', 'ele@icloud.it', '1989-12-06', '2021-06-14 09:43:28'),
(14, 'enrico', 'macello', 'm', 'via Grosseto 125', 'asti', 'AT', 'Piemonte', 'emacello@gmail.com', '1983-10-01', '2021-06-01 07:38:20'),
(15, 'fabio', 'baggio', 'm', 'via Dogliani 7', 'cuneo', 'CN', 'Piemonte', 'fbaggio@gmail.com', '1983-10-01', '2021-06-01 07:38:20'),
(16, 'francesco', 'gamba', 'm', 'via Torino 1', 'alessandria', 'AL', 'Piemonte', 'gamba@gmail.com', '1987-10-01', '2021-06-01 07:38:20'),
(17, 'marco', 'demarchi', 'f', 'via del Monte', 'novara', 'AT', 'Piemonte', 'marcodem@gmail.com', '1993-10-01', '2021-06-01 08:22:12'),
(18, 'franca', 'verdone', 'f', 'via Parma 9', 'torino', 'TO', 'Piemonte', 'fverdone@gmail.com', '1994-09-01', '2021-06-01 07:41:58'),
(19, 'marco', 'zippo', 'm', 'via Palermo 19', 'torino', 'TO', 'Piemonte', 'zippo@gmail.com', '1995-11-01', '2021-06-01 07:41:58'),
(20, 'giorgio', 'galvani', 'm', 'via Reggio 9', 'cuneo', 'cn', 'Piemonte', 'ggalv@icloud.it', '1996-02-01', '2021-06-14 09:43:28'),
(21, 'alex', 'porro', 'm', 'via Verona 13', 'asti', 'at', 'Piemonte', 'porroale@gmail.com', '1989-10-01', '2021-06-01 07:38:20'),
(22, 'andrea', 'giorgio', 'f', 'via Bava 9', 'torino', 'TO', 'Piemonte', 'giorgia@icloud.it', '1998-02-01', '2021-06-14 09:43:28'),
(23, 'paola', 'valeri', 'f', 'via Balbo 65', 'novara', 'no', 'Piemonte', 'valerip@gamil.com', '1992-10-09', '2021-06-01 07:38:20'),
(24, 'federico', 'rossi', 'm', 'via Venezia 3', 'alessandria', 'al', 'Piemonte', 'federoss@icloud.it', '1994-08-08', '2021-06-14 09:43:28'),
(25, 'irene', 'storti', 'f', 'corso vittorio 30', 'torino', 'TO', 'Piemonte', 'stortii@gmail.com', '1999-09-09', '2021-06-01 07:41:58'),
(26, 'samuele', 'borsa', 'm', 'via Pio 9', 'torino', 'TO', 'Piemonte', 'borsamu@gmail.com', '1992-02-02', '2021-06-01 07:41:58');

-- --------------------------------------------------------

--
-- Struttura per vista `libro_tot`
--
DROP TABLE IF EXISTS `libro_tot`;

CREATE ALGORITHM=UNDEFINED DEFINER=`app_generation`@`localhost` SQL SECURITY DEFINER VIEW `libro_tot`  AS SELECT `l`.`titolo` AS `titolo`, `l`.`prezzo` AS `prezzo`, `l`.`pagine` AS `pagine`, `e`.`nome` AS `editore`, concat(`a`.`nome`,' ',`a`.`cognome`) AS `autore` FROM (((`libro` `l` join `editore` `e`) join `autore` `a`) join `autore_libro` `al`) WHERE `e`.`id` = `l`.`editore_id` AND `l`.`id` = `al`.`libro_id` AND `a`.`id` = `al`.`autore_id` AND `e`.`id` = 11 ;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `africa`
--
ALTER TABLE `africa`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `americhe`
--
ALTER TABLE `americhe`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `autore`
--
ALTER TABLE `autore`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `autore_libro`
--
ALTER TABLE `autore_libro`
  ADD PRIMARY KEY (`libro_id`,`autore_id`),
  ADD KEY `fk_AL_AUTORE` (`autore_id`);

--
-- Indici per le tabelle `editore`
--
ALTER TABLE `editore`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `europa`
--
ALTER TABLE `europa`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `impiegato`
--
ALTER TABLE `impiegato`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `k_titolo` (`titolo`),
  ADD KEY `fk_libro_editore` (`editore_id`);

--
-- Indici per le tabelle `studente`
--
ALTER TABLE `studente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `k_cogn` (`cognome`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `africa`
--
ALTER TABLE `africa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `americhe`
--
ALTER TABLE `americhe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `autore`
--
ALTER TABLE `autore`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT per la tabella `editore`
--
ALTER TABLE `editore`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT per la tabella `europa`
--
ALTER TABLE `europa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `impiegato`
--
ALTER TABLE `impiegato`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT per la tabella `libro`
--
ALTER TABLE `libro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT per la tabella `studente`
--
ALTER TABLE `studente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `autore_libro`
--
ALTER TABLE `autore_libro`
  ADD CONSTRAINT `fk_AL_AUTORE` FOREIGN KEY (`autore_id`) REFERENCES `autore` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_AL_LIBRO` FOREIGN KEY (`libro_id`) REFERENCES `libro` (`id`) ON UPDATE CASCADE;

--
-- Limiti per la tabella `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `fk_libro_editore` FOREIGN KEY (`editore_id`) REFERENCES `editore` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
