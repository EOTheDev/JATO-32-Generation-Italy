var bitcoin="old";
$.ajax({
  url:"https://api.coindesk.com/v1/bpi/currentprice.json",
  type:"GET",
  dataType:"json",
  success: function(dati) {
    bitcoin=dati;
    printBC();
  },
error:function(textStatus){
    if(textStatus.status == 404){
        console.log('risorsa non trovata');
        console.log(textStatus.status);
    }else{
        console.log('qualcosa è andato storto');
    }
},

})

function printBC() {
  var ul= document.getElementById("ul");
  
      
    var nuovo = document.createElement("li");
    var nuovo2 = document.createElement("li");
    var nuovo3 = document.createElement("li");


    nuovo.innerHTML=(bitcoin.bpi.EUR.symbol+" "+bitcoin.bpi.EUR.rate);
    nuovo2.innerHTML=bitcoin.chartName;
    nuovo3.innerHTML=bitcoin.time.updatedISO;
    
    ul.appendChild(nuovo2);
    ul.appendChild(nuovo);
    ul.appendChild(nuovo3);

  
  }  
  const API_KEY_CHATBOT="omN-fXn3rbr79NBZCjQglsaIgUstCsLqxaIgUtJS";
  const LANGUAGE_CHATBOT="it";
  const FILTRO_PAROLACCE=0.50;
  var risposta;
  var domanda;
  
  $("#invioDomanda").on("click", function(){
    domanda=$("#domanda").val();
    console.log("http://sandbox.api.simsimi.com/request.p?key="+API_KEY_CHATBOT+"&lc="+LANGUAGE_CHATBOT+"&ft="+FILTRO_PAROLACCE+"&text="+domanda)


    $.ajax({
      url:"http://sandbox.api.simsimi.com/request.p?key="+API_KEY_CHATBOT+"&lc="+LANGUAGE_CHATBOT+"&ft="+FILTRO_PAROLACCE+"&text="+domanda,
      type:"GET",
      dataType:"json",
      success: function(dati) {
        risposta=dati;
        console.log(dati);
        printReplyChatbot();
      },
    error:function(textStatus){
        if(textStatus.status == 500){
            console.log('risorsa non trovata');
            console.log(textStatus.status);
          }else{
            console.log(textStatus.status);
            console.log('qualcosa è andato storto');
        }
    },
    
    })

  })



