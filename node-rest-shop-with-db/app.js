const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

mongoose.connect(
  "mongodb+srv://sachinkulkarni:" +
    process.env.MONGO_PW +
    "@node-shop.gisryat.mongodb.net/?retryWrites=true&w=majority"
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authoization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "PUT, POST, PATCH, DELETE, GET");
    return res.json(200).json({});
  }
  next(); //Other requests can take over
});

//The above setup will be done first. And then it continues below

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found..!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
