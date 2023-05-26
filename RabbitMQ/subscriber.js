const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0,connection) {
   if(error0){
     throw error0;
   }
   connection.createChannel((error1,channel) => {
     if(error1){
        throw error1;
     }
     let queue = 'jeemi';

     channel.assertQueue(queue,{
        durable: false
     });
     
     channel.consume(queue,(msg) => {
        console.log(`Recieved : ${msg.content.toString()}`);
        channel.ack(msg);
     });
   });
});