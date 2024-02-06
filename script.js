$(document).ready(function() {
    
    $("#item_caixa_1").show(); 
    $("#a_ser_mostrado").hide();

    $("#botao_icones_1").click(function() {
     

      $("#item_caixa_1").show(); 
      $("#item_caixa_2").hide(); 
      $("#item_caixa_3").hide(); 

    });

    $("#botao_icones_2").click(function() {
     

        $("#item_caixa_1").hide(); 
        $("#item_caixa_2").show(); 
        $("#item_caixa_3").hide(); 
  
      });

      $("#botao_icones_3").click(function() {
     

        $("#item_caixa_1").hide(); 
        $("#item_caixa_2").hide(); 
        $("#item_caixa_3").show(); 
  
      });


      $("#caixa_alert").click(function() {
          alert('deu certo');

       
      });


      $("#caixa_alert2").dblclick(function() {
        alert('deu certo');

     
    });


    $("#botao_que_vai_esconder").click(function() {
      $("#a_ser_escondido").hide();
     
    
    });

   
   
    $("#botao_que_vai_mostrar").click(function() {
      $("#a_ser_mostrado").slideDown(2000);
     
    
    });


    $("#botao_que_vai_mostrar").click(function() {
      $("#a_ser_mostrado").slideDown(2000);
     
    
    });
    



  });