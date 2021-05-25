var spesa=parseFloat(window.prompt("Quanto hai speso?"));

const IVA=0.22;
var soloIVA=spesa*IVA;
var tot=soloIVA+spesa;
if (tot>100){
    document.write("<h1>ciao</h1><p>hai speso "+spesa+" € esenti IVA</p><p>a cui aggiungi "+soloIVA+" € di IVA</p><p>il cui totale è "+tot+" €</p>");
} else {
    document.write("<h1>ciao</h1><p>hai speso <span>"+spesa+"</span> € esenti IVA</p><p>a cui aggiungi <span>"+soloIVA+"</span> € di IVA</p><p>il cui totale è <span>"+tot+"</span> €</p>");
}
