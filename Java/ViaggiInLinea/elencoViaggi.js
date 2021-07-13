
var viaggio={
    destinazione:"Bahamas",
    titolo:"vacanza da scimmie",
    notti:4,
}
var viaggio2={
    destinazione:"Parigi",
    titolo:"weekend romantico",
    notti:3,

}
var viaggi= [viaggio, viaggio2];
var viaggiHTML=document.getElementById("travelsContainer");
viaggiHTML.addEventListener("load",carica, false);
function carica() {

    for (let index = 0; index < viaggi.length; index++) {
        const element = viaggi[index];
        console.log(element.destinazione);

        var travelHTML=document.createElement("div");
        travelHTML.setAttribute("class", "travel");
        travelHTML.innerHTML="pizza";
        
        var titleHTML=document.createElement("h2");
        titleHTML.setAttribute("class", "title");
        travelHTML.innerHTML="pazza";


        var destinazioneHTML =document.createElement("span");
        destinazioneHTML.setAttribute("class", "destinazione text-muted");
        
        destinazioneHTML.innerHTML=element.destinazione;//bahamas
        
        travelHTML.appendChild(titleHTML);
        destinazioneHTML.appendChild(travelHTML);
        viaggiHTML.appendChild(travelHTML);
        
    }

}

   
