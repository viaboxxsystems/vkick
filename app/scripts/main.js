'use strict';


var game =  new Object();
game.team1 = { name: "Team 1", offense: null, defense: null, goals: 0};
game.team2 = { name: "Team 2", offense: null, defense: null, goals: 0};

game.role= function(player, team) {
    if(team.offense == player){
        return 'offense';
    }
    if(team.defense == player){
        return 'defense';
    }
    return undefined;
}
game.addPlayerTeam = function(player,team){
     if(team.offense == null ){
         team.offense=player;
         game.log();
         return true;
     } else if (team.defense == null){
         team.defense=player;
         game.log();
         return true;
     }
    game.log();
    return false;
}

game.removePlayerTeam = function(player,team){
    if(team.offense == player ){
        team.offense = null;
        game.log();
        return true;
    } else if (team.defense == player){
        team.defense = null;
        game.log();
        return true;
    }
    game.log();
    return false;
}

game.reset = function (){
    game.team1 = { name: "Team 1", offense: null, defense: null, goals: 0};
    game.team2 = { name: "Team 2", offense: null, defense: null, goals: 0};

}
game.log = function(){
    console.log(game.team1);
    console.log(game.team2);
    console.log(game.team1.goals + ":"+game.team2.goals);
}


game.reset();



game.playerIcon= function(role){
    switch(role){
        case 'defense':
            return 'fa fa-shield';
            break;
        case 'offense':
            return 'fa fa-futbol-o';
            break;
    }
    return '';
}
