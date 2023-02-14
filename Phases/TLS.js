// Transport Layer Security (TLS) and Secure Socket Layer (SSL) 

const tls = require('tls');
PORT = 1337,
HOST = '127.0.0.1',
value = null;

var server = tls.createServer(options , function(socket) {
    socket.on('data' , function(data) {
        console.log(" XYZ ");
    });

    server.close(() =>{
        console.log("server Closed Successfully");
    });
});

server.listen(8000);

var client = tls.connect(PORT,HOST,options,function(){
    value  = client.setMaxSendFragment(16384);
    if(value){
        client.write("tls fragment is set");
    }
    else client.write("tls fragment is not set");

    client.end(() =>{
        console.log("Client closed successfully");
    });
});

