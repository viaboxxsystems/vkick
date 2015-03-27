'use strict';


var client = new $.es.Client({
    hosts: 'http://vkick.viaboxxsystems.de/api',
    log: 'trace'
});

var config = {

//    backend: "http://localhost:9001"
};


/*

es:/vkick/player
es:/vkick/games

 */


client.ping({
    requestTimeout: 30000,

    // undocumented params are appended to the query string
    hello: "elasticsearch!"
}, function (error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('elasticsearch cluster is well');
    }
});


function retrievePlayers(callback){
 //  return jQuery.es.
    client.search({
        index: 'vkick',
        type: 'player'
    }).then(callback
    , function (err) {
        console.trace(err.message);
    });
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

function saveMatch(game){

    var storeGame =   {
        team1: {
            offense: game.team1.offense,
            defense: game.team1.defense,
            goals: game.team1.goals
        },
        team2: {
            offense: game.team2.offense,
            defense: game.team2.defense,
            goals: game.team2.goals
        },
        time: moment()

    };
    var runninggame = game;

    client.create({
        index: 'vkick',
        type: 'match',
        body: JSON.stringify(storeGame)
    }, function (error, response) {
        if(error!= undefined){
            alert(error);
            return;
        }
        runninggame.reset();

        // ...
    });


}

function getMatches(callback){
    client.search({
        index: 'vkick',
        type: 'match',
        sort: 'time:asc',
        size: 100
    }).then(callback
        , function (err) {
            console.trace(err.message);
        });

  //  return jQuery.getJSON(config.backend+ '/match',null,callback);
}
