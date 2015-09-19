var socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function() {
    console.log('connected to server');
    socket.emit('test message', 'just some test data');
});

socket.on('weightRequest', function (requestId) {
    console.log('weight request received');
    socket.emit('weightResponse', { 
        requestId: requestId,
        weight: 5318.7 });
    console.log('response sent');
});

socket.on('connect_error', function (err) {
    console.log(err);
});