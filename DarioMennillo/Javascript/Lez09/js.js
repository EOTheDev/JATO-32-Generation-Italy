var btnIns = document.getElementById("btnIns");
var feedback = document.getElementById("feedback");
var item=document.getElementById("item");
var date=document.getElementById("data");
var lista=document.getElementById("lista");


 




function inserisci() {
    var oggetto=item.value;
    var data= new Date(date.value);
    var li= document.createElement("li");
    li.innerHTML=oggetto+" "+data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear();
    item.value="";
    date.value="";
   



    var elimina=document.createElement("button");
    elimina.innerHTML="<i class='bi bi-trash'></i>";
    elimina.setAttribute("class", "btn btn-warning ms-2")
    elimina.onclick= function() {
        lista.removeChild(li);
    } 
    
    var modifica=document.createElement("button");
    modifica.innerHTML="<i class='bi bi-pencil'></i>";
    modifica.setAttribute("class", "btn btn-primary ms-2");
    modifica.onclick= function() {
        item.value=oggetto;
        date.value=data.getFullYear()+"-"+data.getMonth()+"-"+data.getDate();
    }
    // modifica.onclick= function() {
    //     item.addEventListener("change", checkModifica, false);
    //     date.addEventListener("change", checkModifica, false);



    //     function checkModifica() {
    //         if((item.value=="")||(date.value=="")){
    //             feedback.innerHTML="Reinserisci date e valori corretti";
    //         } else{
    //             feedback.innerHTML="";
    //             li.innerHTML=oggetto+" "+data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear();
    //             item.value="";
    //             date.value="";   
    //         }
    //     }

    // };

    lista.appendChild(li);   
    li.appendChild(modifica);   
    li.appendChild(elimina);   

}
btnIns.addEventListener("click",inserisci, false);