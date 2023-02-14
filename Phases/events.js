// Event Module 
// Node.js has a built-in module, called "Events",
// Where you can create, fire, and listen for your own events.

// Example - 1 Registering for the events to be fired only time using once.

//Example -2 Crate an event emitter instance and register a couple of callbacks.

// Example - 3 Registering for the event with callback parameter.

const EventEmitter = require('events');
const event = new EventEmitter();

// Using one event we can call multiple events

event.on('sayMyName' , () => {
    console.log("Your name is xyz");
});
event.on('sayMyName' , () => {
    console.log("Your name is abc");
});
event.on('sayMyName' , () => {
    console.log("Your name is pqr");
});


// Exam - 3
event.on('checkPage' , (sc,msg) =>{
   console.log(`status code is ${sc} and the page is ${msg}`);
});
 
event.emit('sayMyName' , 200,ok);
