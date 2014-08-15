var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();

server.use(restify.CORS());
server.use(restify.fullResponse());

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});


var playerResponse = [{ "name": "Thomas", "rfid": "1" },{ "name": "Jans", "rfid": "2" } ];

server.get('/players/', function(req,res,next){
  res.send(playerResponse);
  next();
})
