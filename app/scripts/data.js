'use strict';


function retrievePlayers(callback){
    return jQuery.getJSON('http://localhost:9001/player',null, callback);
}


function saveMatch(matchData){
    // jQuery.post('http://localhost:9001/match', JSON.stringify(matchData), function(){
    // console.log('posted match!', matchData);
    // },"json");
    $.ajax({
        type: "POST",
        url: "http://localhost:9001/match",
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(matchData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
}

function getMatches(callback){
    return jQuery.getJSON('http://localhost:9001/match',null,callback);
}
