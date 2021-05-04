'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Channel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsToMany(models.User, {
                foreignKey: 'channel_id',
                otherKey: 'user_id',
                as: 'users',
                through: 'user_has_channel'
            });

            this.belongsToMany(models.Label, {
                foreignKey: 'channel_id',
                otherKey: 'label_id',
                as: 'labels',
                through: 'label_has_channel'
            });
        }
    };
    Channel.init({
        title: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Channel',
        underscored: true,
    });
    return Channel;
};