const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders fetched",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    orderName: req.body.orderName, //Getting name from request body
    orderQuantity: req.body.orderQuantity,
  };
  res.status(201).json({
    message: "Order created",
    createdOrder: order,
  });
});

router.get("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;
  res.status(200).json({
    message: "Got order",
    orderId: orderId,
  });
});

router.delete("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;
  res.status(200).json({
    message: "Order deleted",
    id: orderId,
  });
});

module.exports = router;
