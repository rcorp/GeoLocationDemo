/**
 * require socket.io and coonect to port , here port no is 1180
 */
// socket 1.0

var io = require('socket.io').listen(1180);

io.sockets.on('connection', function(socket) {
    socket.on('message', function(data) {
        console.log('message received', data)
    });
    socket.on('test', function(data) {
        console.log('test message received', data)
    });

    socket.on('sendLocationToAdmin', function(data) {
        console.log('sendLocationToAdmin', data)
        socket.broadcast.emit('addLocationToGrid',data)
    });


    socket.on('disconnect', function() {
        console.log("disconnected")
    });
});
