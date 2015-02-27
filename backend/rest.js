
var locallydb = require('locallydb');
var db = new locallydb('./vkick.db');

var matches = db.collection('matches');
var players = db.collection('players');

if(players.items == undefined || players.items.length== 0) {
    players.insert(
        [
            {'surname': 'Nicolaisen', 'name': 'Thomas', 'rfid': '1'},
            {'surname': 'Nonnen', 'name': 'Jan', 'rfid': '2'},
            {'surname': 'Stumm', 'name': 'Roman', 'rfid': '3'},
            {'surname': 'Tiffert', 'name': 'Simon', 'rfid': '4'},
            {'surname': 'Lüders', 'name': 'Jürgen', 'rfid': '5'},
            {'surname': 'Lutz', 'name': 'Olli', 'rfid': '6'}
        ]);
}

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

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

app.get('/player', function(req, res){
    res.send(players.items);
});



app.get('/match', function(req,res){
    res.send(matches.items);
});

app.post('/match', function(req, res, next) {
    var newMatch = req.body;
    console.log(newMatch);
    matches.insert(JSON.stringify(newMatch));
    matches.save();
    console.log(newMatch);

    res.status(201).send("OK");
});

