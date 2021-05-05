const { Sequelize } = require('sequelize');
require('dotenv').config()

// const sequelize = new Sequelize('postgres://postgres:js4life@localhost:5432/teacup');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: true,
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

// -----------------------------------

(async _ => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;