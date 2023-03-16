const express = require("express");
const path = require("path");

const router = express.Router();

//app.use executes for all methods like GET, POST.
//To overcome we can use app.get, app.post.....

// /admin/add-product : GET
router.get("/add-product", (req, res, next) => {
  //   res.send(
  //     '<form action="/admin/product" method="POST"><input type="text" name="productTitle"><button type="submit">Add Product</button></form>'
  //   );
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// /admin/product : POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/"); //Redirects to /
});

module.exports = router;

//javascript code to add 2 numbers
