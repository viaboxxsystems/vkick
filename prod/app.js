/*
 * This script fires up a simple node server that serves all the files in the current directory. Not very safe :)
 */
var connect = require('connect'),
    http = require('http'),
    config = {
        app: '.',
        port: 9000
    };
var serveStatic = require('serve-static');

var app = connect()
    .use(serveStatic(config.app));

http.createServer(app)
    .listen(config.port)
    .on('listening', function() {
        console.log('Started connect web server on http://localhost:' + config.port + '.');
    });
