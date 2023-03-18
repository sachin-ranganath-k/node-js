const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(adminData.products); //Accessible to node server, so Shares across all users. So will get this anywhere
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
