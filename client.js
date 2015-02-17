/**
 * Connect to remote host
 * @param  {String} IP Address of remote host with Port No.
 * @return {Object}
 */
var socket = io('http://localhost:1180/');
socket.on('connect', function() {
    socket.send('hi');
});

window.count = 0;
/**
 * Event triggered when socket gets connected successfully
 */
socket.on('addLocationToGrid', function(obj) {
    console.log("addLocationToGrid", obj.data, obj.data["formatted_address"])
    grid.store.add({
        "formatted_address": obj.data["formatted_address"],
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