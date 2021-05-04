const sequelize = require('../database')
const { DataTypes, Model } = require('sequelize');

class Channel extends Model { };

Channel.init({
    // columns' description
    title: DataTypes.TEXT

},{
    // connection data
    sequelize,
    tableName: 'channel'
})

module.exports = Channel;