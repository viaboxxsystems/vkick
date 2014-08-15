'use strict';

console.log('\'Allo \'Allo!');

jQuery.getJSON('http://localhost:8080/players',function(data){
    $('#playerList').empty();
    $.each(data, function(_, element){
        $('#playerList').append('<li>'+element.name+'</li>');
    });
});

