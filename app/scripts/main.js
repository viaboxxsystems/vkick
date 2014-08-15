'use strict';



console.log('\'Allo \'Allo!');

var availablePlayers= retrievePlayer();


var currentGame= {};



$('#playerList').empty();


availablePlayers.forEach(function(element){
    $('#playerList').append( '<li class="label label-info playerName">'+element.name+'</li>');
    $('.dropdownPlayer').append('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">'+element.name+'</a></li>');
});


$('.playerName').draggable();

$('.droppable').droppable({
   drop: function( event, ui ) {
    console.log( ui.draggable.text() );
   },
   over: function(event, ui) {
       if($(ui.draggable).parent() !== $(this)){
           $(ui.draggable).appendTo($(this));
       }
       console.log( 'over '+ui.draggable.text() );
       $('ul', this).slideDown(100);
   }
  });


$(function(){

    $('.dropdown-menu li a').click(function(){


        $('.btn:first-child').text($(this).text());
        $('.btn:first-child').val($(this).text());

    });

});
