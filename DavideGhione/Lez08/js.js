var btn = document.getElementById("btn");
btn.addEventListener("click", saluta, false);

function saluta() {
   alert("ciao a tutti!"); 
}


var username = document.getElementById("username");
var password = document.getElementById("password");
var feedback = document.getElementById("feedback"); 















var formatoCF=/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;


var formUtente = document.getElementById("formUtente"); 
var numChar=140;
var carResidui= document.getElementById("carRes");
carResidui.innerHTML=numChar;

function controlla() {
    var nomeUtente=document.getElementById("nomeUtente");
    var cognomeUtente=document.getElementById("cognomeUtente");
    var emailUtente=document.getElementById("emailUtente");
    var cFUtente=document.getElementById("cFUtente");
    
    if (nomeUtente.value==""){
        feedback.innerHTML+="hai dimenticato il nome utente <br>";
        event.preventDefault();
    }
    if (cognomeUtente.value==""){
        feedback.innerHTML+="hai dimenticato il cognome utente <br>";
        event.preventDefault();
    }
    if (emailUtente.value==""){
        feedback.innerHTML+="hai dimenticato l'email utente <br>";
        event.preventDefault();
    }
    if (!cFUtente.value.match(formatoCF)){
        feedback.innerHTML+="il codice fiscale non è valido <br>";
        event.preventDefault();
    }
    if (document.fUtente.nazionalita.value=="select"){
        feedback.innerHTML+="seleziona nazionalità<br>";
        event.preventDefault();

    }

    
}
formUtente.addEventListener("submit", controlla, false);
document.fUtente.tweet.addEventListener("keyup", refreshChars, false);
function refreshChars() {
    --numChar;
    carResidui.innerHTML=numChar;
    if( numChar<=0){
       var mess= tweet.value;
       tweet.innerHTML=mess;
    }
}

//inviare un campo di input con invio
