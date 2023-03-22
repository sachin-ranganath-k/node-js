const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET from /products",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "POST from /products",
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
