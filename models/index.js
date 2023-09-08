const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

// USER -- BLOGPOST RELATIONSHIP
User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});


// BLOGPOST -- COMMENT RELATIONSHIP
BlogPost.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blog_id'
});


// USER -- COMMENT RELATIONSHIP
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, BlogPost, Comment };
