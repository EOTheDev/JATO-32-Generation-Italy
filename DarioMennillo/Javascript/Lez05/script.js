var numIniziale= 15.6785432;

console.log("il num arrotondato è: "+numIniziale.toFixed(3));
console.log("il num arrotondato è: "+numIniziale.toPrecision(2));

var x1=true;
var x2=false;
var x3='123';
var x4='123456';
var x5='ciao';
var x6=new Date();

console.log(Number(x1));

var num1=30;
var num2=x2;

var ev1=eval('num1*num2');
var ev1=eval('num1+num2');
var ev3=eval('num1+100')


//Math
console.log(Math.abs(num2));
console.log(Math.sqrt(num2));
console.log(Math.pow(num2));
console.log(Math.random());
console.log(Math.ceil(numIniziale));
console.log(Math.floor(numIniziale));

var oggi= new Date();
console.log(oggi.getDate);
console.log(oggi.getFullYear);
console.log(oggi.getHours);
console.log(oggi.getMilliseconds);


var dataNascita= new Date('apr 15, 1235');
console.log(dataNascita);

//operatori di confronto 
// < > <= >=

// == ===  oppure !== !===
if (10=='10'){
    console.log("i numeri sono uguali");
} else {
    console.log("i numeri NON sono uguali");
}
if (10==='10'){  //Valuta anche il tipo
    console.log("i numeri sono uguali");
} else {
    console.log("i numeri NON sono uguali");
}

//operatori logici || or && and ! not

var punteggio = 40;
var skills = 35;

if (punteggio>= 50 && skills >= 40){
    console.log("Bravo, hai superato il livello");
} else if (punteggio>=50&&skills<40){
    console.log("Mi dispiace devi migliorare le tue skills");
} else if (punteggio<50&&skills<40){
    console.log("Schiappa");
} else if (punteggio<50&&skills>=40){
    console.log("Aumento il tuo punteggio");
}


var livello=1;
var messaggio;

switch (livello) {
    case 1:
        messaggio="in bocca al lupo per il primo livello";
        break;
    case 2:
        messaggio="in bocca al lupo per il secondo livello";
        break;
    case 3:
        messaggio="in bocca al lupo per l'ultimo livello";
        break;


    default:
        messaggio="ciao giocatore";
        break;
}


console.log(messaggio);

//operatore ternario
var eta =20;
var msg="";
msg=(eta>=18)?"puoi giocare":"CBCR";

console.log(msg);


