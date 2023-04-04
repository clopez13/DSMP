module.exports = app => {
    const posts = require("../controllers/post.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Post
    router.post("/", posts.create);
  
    // Retrieve all Post
    router.get("/", posts.findAll);
  
    // Retrieve all published Post
    router.get("/post", posts.findAllPost);
  
    // Retrieve a single Post with id
    // router.get("/:id", posts.findOne);
  
    // Update a Post with id
    // router.put("/:id", posts.update);
  
    // Delete a post with id
    // router.delete("/:id", posts.delete);

  
    app.use('/api/post', router);
  };