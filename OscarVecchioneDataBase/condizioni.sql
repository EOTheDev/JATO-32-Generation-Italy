select titolo, prezzo, autore.nome, cognome, editore.nome
from libro, editore, autore, autore_libro
where editore.id=libro.editore_id
and libro.id=autore_libro.libro_id;

select titolo, prezzo, a.nome, cognome, e.nome AS Editore
from libro AS l, editore AS e, autore AS a, autore_libro AS al
where e.id=l.editore_id
and a.id=al.autore_id
and l.id=al.libro_id;

select cognome, date_format(data_nascita, "%d %m %Y") 'data nascita' from studente;

select str_to_date(concat_ws("-","05","10","1969","%d-%m-%Y"));