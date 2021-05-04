'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Label extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsToMany(models.User, {
                foreignKey: 'label_id',
                otherKey: 'user_id',
                as: 'users',
                through: 'user_has_label'
            });

            this.belongsToMany(models.Channel, {
                foreignKey: 'label_id',
                otherKey: 'channel_id',
                as: 'channels',
                through: 'channel_has_label'
            });
        }
    };
    Label.init({
        name: {
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Label',
        underscored: true,
    });
    return Label;
};