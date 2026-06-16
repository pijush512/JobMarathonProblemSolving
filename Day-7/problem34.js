// Problem 34: Event Emitter  [Medium]
// Description: Build a simple EventEmitter class with on(event, listener), emit(event, ...args), and off(event, listener) methods.
// Example:
// const emitter = new EventEmitter();emitter.on('greet', name => console.log('Hello ' + name));emitter.emit('greet', 'Sara'); // Hello Sara
// Hint: Store listeners in an object where keys are event names and values are arrays of functions.

// Problem 34: Event Emitter [Medium]

class EventEmitter {
  constructor() {

    this.events = {}; 
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
  }

  emit(event, ...args) {

    if (!this.events[event]) return;
    this.events[event].forEach(listener => {
      listener(...args); 
    });
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(fn => fn !== listener);
  }
}

const emitter = new EventEmitter();

function greetSara(name) {
  console.log('Hello ' + name);
}

emitter.on('greet', greetSara);

emitter.emit('greet', 'Sara'); 

emitter.off('greet', greetSara);

emitter.emit('greet', 'Sara');