var btn=document.getElementById("btn");
var lista=document.getElementById("lista");
var contatoreLI=0;


function inserisci() {
    var item=document.getElementById("item").value;
    var elData=document.getElementById("data").value;
    var elLI=document.createElement("li");
    
    var data= new Date(elData);
    elLI.innerHTML=item+" - "+data.getDate()+"-"+(data.getMonth()+1)+"-"+data.getFullYear();
    lista.appendChild(elLI);
    elLI.onclick=sbarra;
    
    /** check if scaduto */
    if (data<new Date()){
        elLI.setAttribute("class","rosso");
    } else if (data===new Date()){
        elLI.setAttribute("class", "giallo");
    } else {
        elLI.removeAttribute("class");
    }



    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","elimina");
    deleteButton.innerHTML="X";
    deleteButton.onclick = elimina;
    elLI.appendChild(deleteButton);

    function sbarra() {
        console.log("sbarra numero")
        
        if (elLI.className=="sbarrato"){
            elLI.removeAttribute("class");
        } else{
            elLI.setAttribute("class","sbarrato");
        }
        
    }
    function elimina() {
        lista.removeChild(elLI);
    }

}


btn.onclick=inserisci;