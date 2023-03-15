const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
   res.send("Always runs")
    next();  //WIll be unresponsive if not added next() here
    //Only this will be shown for all routes as it has /
});

app.use("/cart", (req, res, next) => {
  res.send("<h2>Path /cart route</h2>");
});

app.use("/", (req, res, next) => {
  res.send("<h2>Path / route</h2>");
});

const server = http.createServer(app);

server.listen(3000);

//We can get the console output by running localhost:3000 in the browser
