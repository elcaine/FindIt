const sequelize = require('../config/connection');
const { User, Category, State, Company, Inquiry } = require('../models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const stateData = require('./statesData.json');
const companiesData = require('./companiesData.json');

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
    returning: true,
  });
  console.log('MySQL seeding for categories.................\n', categories, '\n...................... end categories seeding');

  // Create State
  const states = await State.bulkCreate(stateData, {
    returning: true,
  });
  console.log('MySQL seeding for states.................\n', states, '\n...................... end states seeding');

  
  // Create Companies
  for(const company of companiesData){
    await Company.create({
      ...company,
      category_id: categories[Math.floor(Math.random() * categories.length)].id,
      state_id: states[Math.floor(Math.random() * states.length)].id,
    });
  }



  process.exit(0);
};

seedDatabase();

