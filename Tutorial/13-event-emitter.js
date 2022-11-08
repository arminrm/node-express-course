const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//order matters!

customEmitter.on('response', ()=>{
    console.log("data recieved");
})

customEmitter.emit('response');