const express =  require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = __dirname + '/2_index.html';

app.get('/', function(req, res){
   res.sendFile(path);
});

var clients = 0;
   
io.on('connection', function(socket){
//    console.log('A user connected');
   clients++;
   // Send a message when
   setTimeout(function(){
      // Sending an object when emmiting an event
      socket.emit('testerEvent', { description: clients + 'clients connected!'});
   }, 4000);

   socket.on('disconnect', function () {
    clients--;
      console.log('A user disconnected');
   });
});

http.listen(8000, function(){
   console.log('listening on localhost:8000');
