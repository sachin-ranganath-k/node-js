const express = require("express");

const feedsController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedsController.getPosts);

// POST /feed/post
router.post("/post", feedsController.createPost);

module.exports = router;
