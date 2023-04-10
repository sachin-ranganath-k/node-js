const express = require("express");
const { body } = require("express-validator");
//For checking req body

const feedsController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedsController.getPosts);

// POST /feed/post
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 7 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedsController.createPost
);

module.exports = router;
