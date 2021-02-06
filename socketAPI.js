let socket_io = require('socket.io');
let io = socket_io();
let socketApi= {};
io.on('connection', function(socket){
    console.log("succesful connection", socket.id)

    socket.on('play', function(whatever){
        socket.broadcast.emit('play')
    })
  })
socketApi.io = io;
module.exports = socketApi;