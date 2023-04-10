const { validationResult } = require("express-validator");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First post",
        content: "This is my first post",
        imageUrl: "images/nature.jpg",
        creator: {
          name: "Sachin",
        },
        createdAt: new Date().toDateString(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req); //Catches errors from req, if any.
  if (!errors.isEmpty()) {
    //If errors (Above condition)
    return (
      res
        .status(422) //Validation failed. (Incorrect data)
        //422 :
        .json({
          message: "Validation failed. Entered incorrect data..!",
          errors: errors.array(),
        })
    );
  }
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Post created successfully",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Sachin" },
      createdAt: new Date(),
    },
  });
};
