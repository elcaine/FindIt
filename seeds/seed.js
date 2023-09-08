const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commData = require('./commData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create Users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Create BlogPosts
  for (const blog of blogData) {
    await BlogPost.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // Create Comments
  const blogs = await BlogPost.findAll();
  for (const comm of commData) {
    await Comment.create({
      ...comm,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blog_id: blogs[Math.floor(Math.random() * blogs.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
