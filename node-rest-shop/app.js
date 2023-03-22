const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: "Working fine..!", //Run localhost:3000 in browser
  });
});

module.exports = app;
