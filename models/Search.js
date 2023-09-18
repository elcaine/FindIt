const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Search extends Model {}

Search.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        state_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'state',
                key: 'id',
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        }
        // ,
        // results: {
        //     type: DataTypes.JSON,
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'search',
    }
);

module.exports = Search;