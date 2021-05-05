const { sequelize, Channel, Tag, User } = require('../app/models');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

// Don't forget to create a db first and set DATABASE_URL in your .env before running this file

(async _ => {
    try {
        await sequelize.sync({ force: true })

        const channel1 = new Channel({ title: 'Les griffes de la nuit' });
        await channel1.save();

        const tag1 = new Tag({ name: 'Film' });
        await tag1.save();

        const tag2 = new Tag({ name: 'Horreur' })
        await tag2.save();

        await channel1.addTag(await tag1.reload());
        await channel1.addTag(await tag2.reload());

        const user1 = new User({
            email: "pouet@gmail.com",
            password: await bcrypt.hash("pAsLeNoMdEmOnChIeN", SALT_ROUNDS),
            nickname: "boloss-du-93"
        });
        await user1.save()
    }

    catch (err) {
        console.error(">> Error while creating: ", err);
    }

    finally {
        sequelize.close();
    }

})()
