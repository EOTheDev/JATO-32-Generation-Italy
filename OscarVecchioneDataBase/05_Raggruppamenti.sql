SELECT  distinct cognome
FROM studente; -- vedere senza i doppi

SELECT  genere
       ,COUNT(genere)
FROM studente
GROUP BY  genere; -- per fare richieste al DB di più valori

SELECT  e.nome
       ,COUNT(*)
FROM libro l , editore e
WHERE e.id=l.editore_id 
GROUP BY  e.id; --conta tutto dall'editore

SELECT  genere
       ,FLOOR(AVG(timestampdiff(year,data_nascita,curdate()))) 'eta media'
FROM studente
GROUP BY  genere; --eta media degli studenti per genere

SELECT  e.nome
       ,SUM(prezzo) valore
FROM libro l, editore e
WHERE e.id=l.editore_id 
GROUP BY  e.id
ORDER BY valore; -- valore magazzino per singolo editore

SELECT  cognome
       ,COUNT(cognome) quanti
FROM studente
GROUP BY  cognome
ORDER BY quanti;

SELECT  cognome
       ,COUNT(cognome) quanti
FROM studente
GROUP BY  cognome
HAVING quanti > 1
ORDER BY quanti;

SELECT  cognome
       ,COUNT(cognome) quanti
FROM studente
WHERE provincia ='to' 
GROUP BY  cognome
HAVING quanti > 1
ORDER BY quanti;

 --UNIONI
SELECT  cognome
       ,nome
FROM studente union
SELECT  cognome
       ,nome
FROM parente;



create table if NOT EXISTS europa(
id int AUTO_INCREMENT,
stato VARCHAR(100),
capitale VARCHAR(100),
PRIMARY KEY (id)
);
create table if NOT EXISTS africa(
id int AUTO_INCREMENT,
stato VARCHAR(100),
capitale VARCHAR(100),
PRIMARY KEY (id)
);
create table if NOT EXISTS americhe(
id int AUTO_INCREMENT,
stato VARCHAR(100),
capitale VARCHAR(100),
PRIMARY KEY (id)
);
INSERT INTO africa(stato, capitale) VALUES ('libia','benghazi'),('etiopia', 'addis abeba'),('SudAfrica', 'citta del capo');

INSERT INTO europa(stato, capitale) VALUES ('italia','roma'),('germania', 'berlino'),('spagna', 'madrid');

INSERT INTO americhe(stato, capitale) VALUES ('USA','washington'),('peru', 'lima'),('brasile', 'brasilia'); 

SELECT  stato
       ,capitale
FROM europa union
SELECT  stato
       ,capitale
FROM africa union
SELECT  stato
       ,capitale
FROM americhe
ORDER BY stato;

SELECT  titolo
       ,nome
       ,prezzo
FROM libro l
INNER JOIN editore e
ON e.id=l.editore_id;

SELECT  titolo
       ,nome
       ,prezzo
FROM libro l, editore e
WHERE e.id=l.editore_id; 

SELECT  titolo
       ,e.nome editore
       ,concat(a.nome,' ',a.cognome) Autore
       ,l.prezzo
FROM libro l
JOIN editore e
ON l.editore_id=e.id
JOIN autore_libro al
ON al.libro_id=l.id
JOIN Autore a
ON a.id=al.Autore_id;



INSERT INTO impiegato (id, nome, cognome, ruolo, rif_to, stipendio, ufficio_id) VALUES
(1, 'Mario', 'Rossi', 'tecnico', NULL, '2500.00', 1),
(2, 'Marco', 'Bianchi', 'amministrativo', 7, '1600.00', 2),
(3, 'Paolo', 'Verdi', 'amministrativo', 7, '1600.00', 2),
(4, 'Enrico', 'Marrone', 'venditore', 8, '1300.00', 3),
(5, 'Nicola', 'Testa', 'venditore', 8, '1300.00', 3),
(6, 'Franco', 'Barba', 'tecnico', 1, '1500.00', 1),
(7, 'Elena', 'Totti', 'amministrativo', NULL, '2600.00', 2),
(8, 'Paola', 'Capra', 'venditore', NULL, '2300.00', 3),
(9, 'Mauro', 'Barba', 'venditore', 8, '1300.00', 3);

create table if not exists impiegato(
    id int auto_increment,
    nome varchar(30),
    cognome varchar(50),
    ruolo varchar(20),
    rif_to int,
    stipendio decimal(6,2),
    primary key(id)
);
