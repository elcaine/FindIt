const User = require('./User');
const Category = require('./Category');
const State = require('./State');
const City = require('./City');
const Company = require('./Company');
const Inquiry = require('./Inquiry');

State.hasMany(City, {
    foreignKey: 'state_id',
    onDelete: 'CASCADE'
});

City.belongsTo(State, {
    foreignKey: 'state_id'
});

// _________________________________________________________________
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

module.exports = { User, Category, State, City, Company, Inquiry };
