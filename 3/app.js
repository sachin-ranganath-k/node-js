const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
//body-parser parse incoming request bodies in a middleware before your handlers, available under the req.body property.

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
/*
bodyParser.urlencoded() :--> A function provided by the body-parser package that 
returns a middleware function that can parse incoming request bodies containing URL-encoded data. 

extended:false --> The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) 
extended:true --> The qs (query string) library (when true).
*/

//Order doesn't matter here
app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);

server.listen(3000);

//We can get the console output by running localhost:3000 in the browser
