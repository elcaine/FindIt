const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inquiry extends Model {}

Inquiry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
          validate: {
            isEmail: true,
          },
        },
        message: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inquiry',
    }
);

module.exports = Inquiry;