//Home page
const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  //res.send("<h2>Path / route</h2>");

  //Sending shop.html file
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  //Go up -> Views folder -> shop.html file
});

module.exports = router;
