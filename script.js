$(document).ready(function() {
    
    $("#item_caixa_1").show(); 

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


  });