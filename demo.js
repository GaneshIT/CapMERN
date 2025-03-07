// Importing the events module
const EventEmitter = require('events');

// Initializing instance of EventEmitter to be used
const emitter = new EventEmitter();

// Adding listener to the event
emitter.addListener('welcomeEvent', (name) => {
    console.log("welcome " + name);
});

// Emitting the welcomeEvent
emitter.emit('welcomeEvent', "Geek");



const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('data', (data) => {
    console.log('Listener 1 received:', data);
});

eventEmitter.on('data', (data) => {
    console.log('Listener 2 received:', data);
});

eventEmitter.emit('data', 'Sample data');