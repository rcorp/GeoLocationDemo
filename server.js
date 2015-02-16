/**
 * require socket.io and coonect to port , here port no is 1180
 */
var io = require('socket.io').listen(1180);
/**
 * An object to store Socket object of every user by name
 * @type {Object}
 */
var onLine = {}
/**
 * An object to store all groups name
 * @type {Object}
 */
var group = {};

var onLine = {}
var onLineBySocket = {};
/**
 * On Connection - When a client gets connected
 * @param  {Object} socket An Object to identifiy the remote user
 * or client. Every client has its own unique socket. This socket
 * variable corresponds to the client who has just initiated any
 * socket event. 
 * Many user can initiate same socket event simultaneously but
 * Under this block, Socket will remain unique for every one.
 * Socket object will belong to the client whose has just 
 * communicated with server
 */
io.sockets.on('connection', function(socket) {


    /**
     * Predefined/Reserved event
     * whenever a client gets disconnecte from server, this event 
     * gets triggered
     * @return {[type]}      [description]
     */
    socket.on('disconnect', function() {
        console.log(onLineBySocket, 'onLineBySocket')
    })




    /**
     * Send Public Message or broadcast(to all except the sender itself)
     */
    socket.on('sendLocationToAdmin', function(data) {
        console.log(data)
        socket.broadcast.emit('locationFromUser',data)
    });

});