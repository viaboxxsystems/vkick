'use strict';

var config = { backend: "http://localhost:9001"};

var game =  new Object();
game.team1 = { name: "Team 1", player1: null, player2: null, goals: 0};
game.team2 = { name: "Team 2", player1: null, player2: null, goals: 0};

game.addPlayerTeam = function(player,team){
     if(team.player1 == null ){
         team.player1=player;
         game.log();
        return true;
     } else if (team.player2 == null){
         team.player2=player;
         game.log();
         return true;
     }
    game.log();
    return false;
}

game.removePlayerTeam = function(player,team){
    if(team.player1 == player ){
        team.player1 = null;
        game.log();
        return true;
    } else if (team.player2 == player){
        team.player2 = null;
        game.log();
        return true;
    }
    game.log();
    return false;
}

game.reset = function (){
    game.team1 = { name: "Team 1", player1: null, player2: null, goals: 0};
    game.team2 = { name: "Team 2", player1: null, player2: null, goals: 0};

}
game.log = function(){
    console.log(game.team1);
    console.log(game.team2);
    console.log(game.team1.goals + ":"+game.team2.goals);
}


game.reset();

console.log('\'Allo \'Allo!');






