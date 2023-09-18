const User = require('./User');
const Category = require('./Category');
const State = require('./State');
const Search = require('./Search');
const Company = require('./Company');
const Inquiry = require('./Inquiry');

State.hasMany(Company, {
    foreignKey: 'state_id',
    onDelete: 'CASCADE'
});

Company.belongsTo(State, {
    foreignKey: 'state_id'
});

// _________________________________________________________________
Category.hasMany(Company, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Company.belongsTo(Category, {
    foreignKey: 'category_id'
});


// _________________________________________________________________
User.hasMany(Search, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Search.belongsTo(User, {
    foreignKey: 'user_id'
});

State.hasMany(Search, {
    foreignKey: 'state_id',
    onDelete: 'CASCADE'
});

Search.belongsTo(State, {
    foreignKey: 'state_id'
});

Category.hasMany(Search, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Search.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = { User, Category, State, Search, Company, Inquiry };
