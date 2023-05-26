const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = __dirname + '/1_index.html';

app.get('/', (req, res) => {
    res.sendFile(path);
});

io.on('connection', (socket) => {
    console.log("A user connected!");

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
        console.log("A user disconnected");
    });
});

http.listen(8000 , (err) =>{
    console.log(`listening on PORT ${8000}`);
