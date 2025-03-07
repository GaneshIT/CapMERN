const events = require('events');

class Task extends events.EventEmitter {
  constructor() {
    super();
  }

  start() {
    this.emit('started');//trigger
    // Simulate some work
    setTimeout(() => {
      this.emit('progress', 50);
      setTimeout(() => {
        this.emit('progress', 100);
        this.emit('completed');
      }, 1000);
    }, 2000);
  }
}

const task = new Task();

task.on('started', () => {
  console.log('Task started');
});

task.on('progress', (progress) => {
  console.log(`Progress: ${progress}%`);
});

task.on('completed', () => {
  console.log('Task completed');
});

task.start();



class Account{
    create(){
    }
    close(){
    }
}
class Saving extends Account{
    constructor(){
        super();
    }
}
var s=new Saving();
s.close();
s.create();
