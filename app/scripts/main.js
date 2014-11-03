'use strict';



console.log('\'Allo \'Allo!');



var matches = getMatches(function(data){
    //$('#lastGames >>> div.matches.panel-body').detach();
    data.forEach(function(element){
        $("<p>"+JSON.stringify(element)+"</p>").insertAfter('#lastGames > div.panel.panel-default');
    });
});



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
                player1: $('#player1').text().trim(),
                player2: $('#player2').text().trim(),
                goals: goals1
            },
            team2: {
                player3: $('#player3').text().trim(),
                player4: $('#player4').text().trim(),
                goals: goals2
            },
            time: moment()
        };
        saveMatch(game);
    });
});
