CREATE TABLE IF NOT EXISTS studente(
    id INT AUTO_INCREMENT,
    nome VARCHAR(20), 
    cognome VARCHAR(20),
    genere ENUM('m','f'),
    indirizzo VARCHAR(100),
    citta VARCHAR(30),
    provincia CHAR(2) default 'TO',
    regione VARCHAR(30) DEFAULT 'Piemonte',
    email VARCHAR(100) NOT NULL UNIQUE, 
    data_nascita DATE, ins TIMESTAMP,
    PRIMARY KEY (id),
    KEY k_cogn(cognome)
    );