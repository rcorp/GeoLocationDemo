/**
 * Connect to remote host
 * @param  {String} IP Address of remote host with Port No.
 * @return {Object}
 */
var socket = io.connect('http://localhost:1180');

/**
 * get User Name from url
 * @type {String} - url
 */
//var myName = window.location.search.match(/=(\w+)/)[1];
var myName = "user"

// Some predefined/reserved socket events
/**
 * Checking Status of My Connection
 * If Connection gets disconnect, socket will try to auto-connect after some interval
 */
socket.on('reconnecting', function(data) {
    console.log('Trying to Re-Connect')
});

/**
 * If socket founds Connection then it started process of connection
 * this is connnecting
 */
socket.on('connecting', function() {
    console.log('Connecting')
})
/**
 * Event triggered when socket gets connected successfully
 */
socket.on('connect', function() {
    console.log('Connected')
});

/**
 * Event triggered when socket gets connected successfully
 */
socket.on('addLocationToGrid', function(obj) {
    console.log("addLocationToGrid", obj.data, obj.data["formatted_address"])
    grid.store.add({
        "formatted_address":obj.data["formatted_address"],
        "latitude": obj.data["geometry"]["location"]["k"],
        "longitude": obj.data["geometry"]["location"]["D"]
    })
});

/**
 * Send Public Message or broadcast(to all except me)
 * server will append your name in 'From' 
 * at server side using socket.get
 * @param  {String} msg Message
 */
function sendLocationToAdmin(data) {
    socket.emit('sendLocationToAdmin', {
        data: data
    });
}
