'use strict';



console.log('\'Allo \'Allo!');

var availablePlayers= retrievePlayer();


/**
 *
 * {
 *
 *  team1 {
 *      player1: '...',
 *      player2: '...',
 *      goals: 10
 *   },
 *   team2 {
 *      player1: '...',
 *      player2: '...'
 *      goals: 4
 *    },
 *    timestamp: date()
 *  }
 *
 */




var goals1 = 0;
var goals2 = 0;

$('#playerList').empty();


availablePlayers.forEach(function(element){
    $('#playerList').append( '<li class="label label-info playerName">'+element.name+'</li>');
    $('.dropdownPlayer').append('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">'+element.name+'</a></li>');
});


$('#goals1 .btn').click(function(){
   goals1 = $(this).text();
   $('#goals1 .btn').not(this).removeClass('clicked');
   $(this).addClass( 'clicked' );

});


$('#goals2 .btn').click(function(){
    goals2 = $(this).text();
    $('#goals2 .btn').not(this).removeClass('clicked');
    $(this).addClass( 'clicked' );

});
$(function(){
    $('.dropdown-menu').on('click', 'li a', function(){
        $(this).parents('.dropdown').children('.dropdown-toggle').text($(this).text());
    });

    $('#playedAction').click(function() {
        var game = {
            team1: {
                player1: $('#player1').text(),
                player2: $('#player2').text(),
                goals: goals1
            },
            team2: {
                player3: $('#player3').text(),
                player4: $('#player4').text(),
                goals: goals2
            }
        };


    });
});
