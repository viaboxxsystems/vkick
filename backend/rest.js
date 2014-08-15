var fs = require('fs');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

//Global error handler
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

//Run the server
var server = app.listen(9001, function() {
    console.log('Express (rest backend) listening on port %d', server.address().port);
});


/**
  * Routes
  */
var playerResponse = [{ "name": "Thomas", "rfid": "1" },{ "name": "Jans", "rfid": "2" } ];
app.get('/player', function(req, res){
    res.send(playerResponse);
});

var matchesFile = './matches.txt';

app.get('/match', function(req,res){
    var matches = [];
    if(fs.existsSync(matchesFile)){
        var text = fs.readFileSync(matchesFile, {'encoding':'utf-8'});
        // Break up the file into lines.
        var lines = text.split('\n');

        lines.forEach(function(line) {
            if(line.length > 0){
                var match = JSON.parse(line); //each line is a match object
                matches.push(match);
            } //else empty line
        });
    }

    res.json(matches);
});

app.post('/match', function(req, res, next) {
    console.log("Woot!", req.body);
    // Writing results to file...
    var fs = require("fs");
    var newMatch = req.body;

    fs.appendFile( matchesFile, JSON.stringify(newMatch)+'\n', "utf8", function(_){
        console.log("Appended to file: " + newMatch + " | " + _);
    });
    res.status(201).send("OK");
});
