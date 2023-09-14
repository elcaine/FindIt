const sequelize = require('../config/connection');
const { User, Category } = require('../models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create Users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('MySQL seeding for users.................\n', users, '\n...................... end users seeding');

  // Create Categories
  const categories = await Category.bulkCreate(categoryData, {
    // individualHooks: true, // Best I can tell, this option only needed if Model has hooks.
    returning: true,
  });
  console.log('MySQL seeding for categories.................\n', categories, '\n...................... end categories seeding');

  process.exit(0);
};

seedDatabase();
