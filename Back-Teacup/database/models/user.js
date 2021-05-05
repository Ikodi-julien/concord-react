'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Channel, {
        foreignKey: 'user_id',
        otherKey: 'channel_id',
        as: 'channels',
        through: 'user_has_channel'
      });

      this.belongsToMany(models.Label, {
        foreignKey: 'user_id',
        otherKey: 'label_id',
        as: 'labels',
        through: 'user_has_label'
      });
    }
  };
  User.init({
    nickname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};