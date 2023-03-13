--- Event loop : 
An event loop in Node.js is an event-listener that operates inside the Node.js environment and 
is always ready to attend, process, and output an event.
Listens for event triggers and calls the required event handler.

Features of Event loop in Node.js in brief :

The Event loop is an endless loop that waits for the events and executes them by pushing tasks into the call stack.
The event loop continuously monitors the call stack, and when the call stack is empty, the event loop pushes the task from the callback queue to call the stack.
The event loop basically helps us the javascript engine in the execution of the asynchronous callbacks and promises.
The event loop executes the oldest task first.
The event loop in node.js gives priority to the microtask queue more than macrotask queue.



--- Buffers
The buffers module provides a way of handling streams of binary data.
The Buffer object is a global object in Node.js, and it is not necessary to import it using the require keyword.