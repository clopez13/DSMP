const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// Create and Save a new post
exports.create = (req, res) => {

// Validate request
  if (!req.body.posttext) {
    res.status(400).send({
      message: "Post can not be empty!"
    });
    return;
  }

// Create a Post
const post = {
    imgsource: req.body.imgsource,
    imgalt: req.body.imgalt,
    posttext: req.body.posttext,
    profilename: req.body.profilename,
    profileusername: req.body.profileusername,
};

// Save Post in the database
Post.create(post)
    .then(data => {
        res.send(data);
        }
    )
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error occured while creating the post."
        });
    });
  
};

// Retrieve all post by profileusername from the database.
exports.findAll = (req, res) => {
  const profileusername = req.query.profileusername;
  var condition = profileusername ? { profileusername: { [Op.iLike]: `%${profileusername}%` } } : null;

  Post.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occured while retrieving post by profile name."
      });
    });
};

// Find a single post with an id
// exports.findOne = (req, res) => {
  
// };

// Update a post by the id in the request
// exports.update = (req, res) => {
  
// };

// Delete a post with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// Find all post
exports.findAllPost = (req, res) => {
    Post.findall()
    .then(data => {
        res.send(data);
    }
    )
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error occured while retrieving post."
        });
    }
    );   
};