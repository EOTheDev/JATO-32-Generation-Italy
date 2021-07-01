UPDATE libro
SET editore_id = 1
WHERE editore_id = 184;

ALTER TABLE libro ADD CONSTRAINT fk_libro_editore FOREIGN key (editore_id) REFERENCES editore(id) 
ON DELETE RESTRICT
ON UPDATE CASCADE;

SHOW CREATE TABLE libro; 

ALTER TABLE libro 
DROP foreign key fk_libro_editore; 

ALTER TABLE AUTORE_LIBRO
ADD CONSTRAINT fk_AL_LIBRO FOREIGN key (libro_id) REFERENCES libro(id)
ON DELETE REStrict
ON UPDATE cascade;

ALTER TABLE AUTORE_LIBRO 
ADD CONSTRAINT fk_AL_AUTORE FOREIGN key (autore_id) REFERENCES autore(id)
ON DELETE REStrict
ON UPDATE cascade;

SELECT  TABLE_NAME
       ,COLUMN_NAME
       ,CONSTRAINT_NAME
       ,REFERENCED_TABLE_NAME
       ,REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = 'generation' 
AND referenced_column_name is not NULL; 

SET FOREIGN_KEY_checks=0;

SET FOREIGN_KEY_checks=1;

CREATE or REPLACE VIEW libro_tot AS
SELECT  titolo
       ,prezzo 
       ,pagine 
       ,e.nome editore
       ,concat (a.nome," ",a.cognome) autore
FROM libro l, editore e , autore a, autore_libro al
WHERE e.id=l.editore_id 
AND l.id = al.libro_id 
AND a.id= al.autore_id 
AND e.id=11; 