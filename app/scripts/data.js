'use strict';


function retrievePlayers(callback){
    return jQuery.getJSON(config.backend+'/player',null, callback);
}



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

function saveMatch(matchData){
    $.ajax({
        type: "POST",
        url: config.backend+"/match",
        // The key needs to match your method's input parameter (case-sensitive).
        data:  JSON.stringify(matchData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(matchData);},
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
}

function getMatches(callback){
    return jQuery.getJSON(config.backend+ '/match',null,callback);
}


