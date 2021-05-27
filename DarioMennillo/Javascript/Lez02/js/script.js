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
var libri=["Il nome della rosa", "il pendolo di Foucalt","il vecchio e il mare", "Perle ai porci", "la Fattoria degli animali", "1984"]