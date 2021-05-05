module.exports = (sequelize, DataTypes, Model) => {

    class User extends Model { };
    
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
        tableName: 'user'
    });

    return User;
};