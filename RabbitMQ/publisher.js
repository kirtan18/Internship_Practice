const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (error0, connection) => {
    if (error0) {
        throw error0;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1;
        }
        let queue = 'jeemi';
        let msg = 'This is jeemi Guru';

        // assertQueue checks for "Technical" queue, if it doesn't exist then it will create one.
        channel.assertQueue(queue, {
            durable: false
        });

        // sendToQueue put a message onto "Technical" queue.
        channel.sendToQueue(queue, Buffer.from(msg));
        
        console.log(`Published: ${msg}`);
        setTimeout(() => {
            connection.close();
            process.exit(0)
        }, 500)
    });
});