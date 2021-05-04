const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
        define: {
            timestamps: true,
            //on accepte les champs en snake_case
            underscored: true,
            //on indique à sequelize comment sont nommés nos champs de timestamps
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