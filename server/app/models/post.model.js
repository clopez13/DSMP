module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        imgsource: {
        type: Sequelize.BLOB
      },
      imgalt: {
        type: Sequelize.STRING
      },
      posttext: {
        type: Sequelize.STRING
      },
      profilename: {
        type: Sequelize.STRING
        },
        profileusername: {
          type: Sequelize.STRING
          }
    });
  
    return Post;
  };