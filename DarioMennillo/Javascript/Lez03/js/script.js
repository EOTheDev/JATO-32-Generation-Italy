var nome="";
function saluta() {
    alert("Ciao, "+nome);
}
var elBenvenuto = document.getElementById("welcome")
var nclick=0;
function chiediNome() {
    nome=prompt("Come ti chiami?");
    nclick++;
    if (nome=="") {
        alert("nome sbagliato.");
        elBenvenuto.innerHTML+="Pirletta!<br>";
        nclick++;
        chiediNome();
    } else {
        saluta();
    }
    
}
elBenvenuto.innerHTML+="Hai cliccato " +nclick+" volte<br>";


function calcolaAreaRettangolo(base, altezza){
    var area= base*altezza; 
    elBenvenuto.innerHTML+="<p>L'area del rettangolo è "+area+" cm2</p>"
}





var elDemo= document.getElementById("demo");
function getNome() {
    var elUsername=document.getElementById("username").value;
}