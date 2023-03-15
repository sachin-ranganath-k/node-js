const http = require("http");

const express = require("express");
//const routes = require("./node-server/routes");

//const server = http.createServer(routes.handler);

const app = express();

//Middleware
//app.use() allows us to add new middleware function
app.use((req, res, next)=>{
    /*next() -> When a middleware function completes its task, 
    it must call the next() function to pass control to the next middleware function in the chain. 
    If the current middleware function does not call next(), 
    the request will be left hanging, and the client will not receive a response.*/

    console.log("In the middleware");
    next();  //Allows the req to continue to the next middleware (In another middleware). Executes from top to bottom
})

app.use((req, res, next)=>{
    console.log("In another middleware");
  //  next()  //Can't call, since there is no other middlware at the bottom instead we can send response

  res.send("<h2>Hello from NodeJS.!</h2>")
  //Content-type will be automatically set by express
  //Content-Type will be overridden, if set manually. (Not recommanded)
})

const server = http.createServer(app);

server.listen(3000);

//We can get the console output by running localhost:3000 in the browser
