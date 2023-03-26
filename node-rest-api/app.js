const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const feedRoutes = require("./routes/feed");

//app.use(bodyParser.urlEncoded())  //x-www-form-urlencoded, if <form>
app.use(bodyParser.json()); // application/json. Parses to json

//Handling CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes); //  GET /feed/posts, POST /feed/post

app.listen(8080);
