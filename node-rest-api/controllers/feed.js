exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        id: "1",
        title: "First post",
        content: "This is my first post",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
    console.log(req)
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Post created successfully",
    post: { id: new Date().toISOString(), 
        title: title, 
        content: content 
    },
  });
};
