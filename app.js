var server = require('http').createServer(),
    io     = require('socket.io')(server);


io.on('connection', function(socket){

  var room = socket.handshake['query']['r_var'];

  socket.join(room);
  console.log('user joined room #'+room);

  socket.on('disconnect', function() {
    socket.leave(room)
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    io.to(room).emit('chat message', msg);
  });

});

server.listen(3000);
