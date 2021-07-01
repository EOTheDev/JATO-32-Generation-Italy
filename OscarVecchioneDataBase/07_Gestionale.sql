create table articolo{
    id int auto_increment,
    descrizione varchar(100),
    prezzo decimal(6,2),
    categoria enum('hardware', 'software'),
    rimanenza tinyint,
    primary key(id)
}

create table cliente{    
    id int auto_increment,
    cognome varchar(50),
    nome varchar(50),
    telefono varchar(20),
    email varchar(50),
    indirizzo varchar(100),
    citta varchar(50),
    regione varchar(30),
    credito smallint,
    primary key(id)
}

create table impiegato{
    id int auto_increment,
    cognome varchar(50),
    nome varchar(50),
    ruolo varchar(20),
    rif_to int, /* riferimento all'impiegato capo, se non c'è è il capo*/
    stipendio decimal(6,2),
    ufficio_id int,
    primary key(id)    
}

create table ordine{
    id int auto_increment,
    cliente_id int,
    impiegato_id int,
    data date,
    consegna enum('consegnato','da spedire','spedito'),
    primary key(id)    
}

create table ordine_dettaglio{
    id int auto_increment,
    ordine_id int,
    articolo_id int,
    quantita tinyint,
    primary key(id)    
}

create table ufficio{
    id int auto_increment,
    nome varchar(30),
    luogo_id int,
    primary key(id)  
}