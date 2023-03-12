const http = require("http");
const fs = require("fs");
const SERVER_PORT = 3000;

const server = http.createServer((request, response) => {
  console.log(request);

  //Response in HTML
  response.writeHead(200, { "Content-Type": "text/html" });
  const html = fs.readFileSync("./hello.html", "utf-8");
  //why readfileSync() but not readFile() ?
  //Because, we want to wait for the file contect to be read before responding. And returns full contents

  //To avoid full content, we can use bufffer streams
  response.end(html);

  //response.end("<h1>Hello..!</h1>"); //Typically HTML code will be written in another file
});

server.listen(`${SERVER_PORT}`, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

/*
Creates a simple HTTP server using the built-in http module. The server listens on port 3000 for incoming requests.

http.createServer() --> Creates a new HTTP server object and takes a callback function with two arguments request and response. 
request--> An object represents the incoming HTTP request and contains information about the request, 
response--> An object represents the HTTP response that the server will send back to the client.

Status Code 200--> callback function simply writes a 200 status code to the response header using 
response.writeHead() method and sends a "Response End..!" message to the client using response.end() method.

writeHead() use--> Setting the HTTP status code using writeHead is particularly important because,
it informs the client about the success or failure of the request

response.end() use--> If you don't call the response.end() method in Node.js after writing the response body using 
response.write(), the client will continue to wait for the response indefinitely, resulting in a timeout error.
Also, if we don't call this method, the response will not be sent and the client will not receive any data.

server.listen()--> A method starts the server listening on port 3000. 
Once the server is started, it logs a message to the console indicating that the server is running and 
listening on the specified port.

Overall, this code creates a simple HTTP server that responds with a "Response End..!" 
message for any incoming request.

Open chrome and run 
localhost:300
Output-> Response End in browser
Also check in Network Tab for response
*/
