var eventEmitter=require('events');
var EventEmitter=new eventEmitter();//create object
//Register events
EventEmitter.on("ABC",(msg)=>{
    console.log("Welcome to my channel"+msg);
})
EventEmitter.on("ABC",(msg)=>{
    console.log("Welcome to my channel"+msg);
})
//trigger->listener can execute callback what they subcribed
EventEmitter.emit("ABC","New video uploaded");
EventEmitter.emit("ABC","New comment added");