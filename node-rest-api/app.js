const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const feedRoutes = require("./routes/feed");

//app.use(bodyParser.urlEncoded())  //x-www-form-urlencoded, if <form>
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); // application/json. Parses to json

app.use("/feed", feedRoutes); //  GET /feed/posts, POST /feed/post

app.listen(8080);
