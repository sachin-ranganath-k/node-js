--Working of nodejs
Event loop: Node.js is built around an event loop, 
which is a mechanism that allows it to handle multiple requests simultaneously without blocking the main thread. 
When a request comes in, Node.js adds it to the event loop and continues processing other requests. 
Once the request is completed, Node.js sends the response back to the client.

Non-blocking I/O: Node.js uses non-blocking I/O operations, 
which means that it doesn't wait for I/O operations to complete before moving on to the next task. 
Instead, it uses callbacks to handle I/O operations asynchronously. 
This allows Node.js to handle a large number of concurrent connections with high throughput and low latency.

V8 engine: Node.js uses the V8 JavaScript engine, 
which is the same engine used by the Google Chrome web browser. 
The V8 engine compiles JavaScript code into machine code at runtime, 
which makes it very fast and efficient.

Modules: Node.js has a module system that allows you to organize your code into reusable modules. 
You can use the built-in modules, such as the HTTP module for handling HTTP requests, 
or you can create your own modules and use them in your application.

Package manager: Node.js comes with a built-in package manager called Node Package Manager (NPM). 
NPM allows you to easily install and manage third-party packages and modules.

Server-side JavaScript: Node.js allows you to write server-side JavaScript code,
 which makes it easy to use the same language for both the client and the server.
  This can simplify your development process and make it easier to share code between the client and the server.


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