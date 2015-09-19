var express = require('express');

module.exports = function (io) {

    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });
    
    io.on('connection', function (socket) {
        console.log( "A user connected" );
        socket.on('weightRequest', function (data) {
            console.log(data);
            socket.broadcast.emit('weightRequest', data);
        });
        
        socket.on('weightResponse', function (data) {
            console.log("weightResponse: " + data);
            socket.broadcast.emit('weightResponse', data);
        });
    });
    
    return router;

};
