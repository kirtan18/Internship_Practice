const UDP = require('dgram');
const server = UDP.createSocket('udp4');
const port = 2222;

server.on('listening',()=>{
    const address = server.address();

    console.log('Listining to ', 'Address: ', address.address, 'Port: ', address.port)
});


server.on('message',(message, info)=>{
    console.log('message', message.toString())

    const response = Buffer.from('Message Received')

    //Sending back response to client

    server.send(response, info.port, info.address, (err) => {
        if(err){
            console.error('Failed to send response !!')
        }else{
            console.log('Response send successfully')
        }
    })
})

server.bind(port);

