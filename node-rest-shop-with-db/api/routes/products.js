const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET from /products",
  });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    productName: req.body.productName,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).json({
    message: "POST from /products",
    createdProduct: product,
  });
});

router.get("/:productId", (req, res, next) => {
  // console.log(req.params.productId) //Gets whichever id passed, (localhost/products/1)
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "Got new Id",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "Passed ID",
      id: id,
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Product updated",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Product deleted",
  });
});

module.exports = router;
