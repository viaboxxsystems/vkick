'use strict';


function retrievePlayer(){
    return [
    { 'name': 'Thomas Nicolaisen', 'rfid': '1' },
    { 'name': 'Jan Nonnen', 'rfid': '2' },
    { 'name': 'Roman Stumm', 'rfid': '3' },
    { 'name': 'Jürgen Lüders', 'rfid': '4' },
    { 'name': 'Simon Tiffert', 'rfid': '5' },
    { 'name': 'Hussam Khuder', 'rfid': '6' }
    ];
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

function getMatches(){
    return jQuery.getJSON('http://localhost:9001/match'); //can jquery do sync?
}
