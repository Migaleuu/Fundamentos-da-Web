$(document).ready(function() {
    var botao = $('.imgLink');
    var dropDown = $('.ul-menu');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });