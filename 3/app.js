const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
//body-parser parse incoming request bodies in a middleware before your handlers, available under the req.body property.

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
/*
bodyParser.urlencoded() :--> A function provided by the body-parser package that 
returns a middleware function that can parse incoming request bodies containing URL-encoded data. 

extended:false --> The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) 
extended:true --> The qs (query string) library (when true).
*/

//app.use executes for all methods like GET, POST.
//To overcome we can use app.get, app.post.....

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="productTitle"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); //Redirects to /
});

app.use("/", (req, res, next) => {
  res.send("<h2>Path / route</h2>");
});

const server = http.createServer(app);

server.listen(3000);

//We can get the console output by running localhost:3000 in the browser
