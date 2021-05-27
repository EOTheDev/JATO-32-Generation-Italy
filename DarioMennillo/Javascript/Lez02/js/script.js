var colori = new Array('bianco','luce','blu','rosso');
colori.push('marrone');// aggiunge in fondo
console.log(colori); 
colori.pop(); //rimuove l'ultimo in fondo
console.log(colori); 
colori.sort(); // mette in ordine
console.log(colori); 
colori.reverse(); //inverte l'ordine
console.log(colori); 
colori[2]="amarillo";//sostituzione
console.log(colori);
for (var index = 0; index < colori.length; index++) {
    console.log(colori[index]);   
}




var libri=["Il nome della rosa", "il pendolo di Foucalt","il vecchio e il mare", "Perle ai porci", "la Fattoria degli animali", "1984"];
console.log(libri)
//recupero il div titoli

var elTitoli=document.getElementById('titoli');
console.log(elTitoli);
//inserisco all'interno del div preso 
elTitoli.innerHTML+="<ul>";
for (var index = 0; index < libri.length; index++) {
    elTitoli.innerHTML+="<li>"+ libri[index]+"</li>";

    
}
elTitoli.innerHTML+="</ul>";
elTitoli.innerHTML+="<ol>";
for (var index = 0; index < libri.length; index++) {
    if (index%2==0) {
        elTitoli.innerHTML+="<li><strong>"+ libri[index]+"</strong></li>";
    } else {
        elTitoli.innerHTML+="<li><em>"+ libri[index]+"</em></li>";
    }

    
}
elTitoli.innerHTML+="</ol>";



//elTitoli.innerHTML="<p>Ciao dal <strong>JS</strong></p>";
var i=0;
while (i<libri.length) {
    elTitoli.innerHTML= libri[i];
    i++;



}

var listaSpesa=[11.90, 9.90, 12.60, 8.60, 11.50, 19.90];
console.log(listaSpesa);
var somma=0;
var elSpesa=document.getElementById('listaSpesa');
var elenco="";
for (var index = 0; index < listaSpesa.length; index++) {
    elSpesa.innerHTML+="<li><strong>"+ libri[index]+"</strong> <em> € "+ listaSpesa[index]+"</em></li>";
    //elSpesa.innerHTML+="<em> € "+ listaSpesa[index]+"</em></li>";
    somma+=listaSpesa[index];
    elenco+="<li><strong>"+ libri[index]+"</strong>";
    elenco+="<em> € "+ listaSpesa[index]+"</em></li>";
}
elSpesa.innerHTML+=elenco;
var elTotale=document.getElementById('totale');
elTotale.innerHTML="Il totale della spesa è € "+somma;





//Tabella
var elSaluti=document.getElementById('saluti');
var elMarca=document.getElementById('marca');
var elPrezzo=document.getElementById('prezzo');
var elQuantita=document.getElementById('quantita');
var elSpedizione=document.getElementById('spedizione');
var elTot=document.getElementById('tot');



var nomeUtente="Dario";
var welcome ="Ciao, "+nomeUtente+" stai acquistando: ";
elSaluti.innerHTML="<h3>"+welcome+"</h3>";

var prodotto ="Sedia UltraComoda 3000";
elMarca.innerHTML=prodotto;
var quantita=1;
elQuantita.innerHTML=quantita;

var prezzo= 259.49;
elPrezzo.innerHTML=prezzo+"€";

var costoSped= 19;
elSpedizione.innerHTML=costoSped+"€";

var tot=prezzo +costoSped;
elTot.innerHTML=tot+"€";

//Galleria
var elGalleria=document.getElementById("galleria");

var imgs=["assets/Sedia1.jpg","assets/sedia2.jpg","assets/sedia3.jpg","assets/sedia4.jpg"]
for (var index = 0; index < imgs.length; index++) {
    elGalleria.innerHTML+="<img class='quadrato' src='"+imgs[index]+"' alt=''>";
    
}
saluta(nomeUtente);


function saluta(nome) {
    alert("Saluta "+nome);
   
}
