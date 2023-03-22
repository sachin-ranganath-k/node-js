const express = require("express");
const app = express();
const morgan = require("morgan");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "Working fine..!", //Run localhost:3000 in browser
//   });
// });

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

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

module.exports = app;