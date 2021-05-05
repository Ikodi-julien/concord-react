const { sequelize, Channel, Tag, User } = require('./models');


(async _ => {
    try {
        await sequelize.sync()

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
            password: "jgkldqfgqdfùjgqer",
            nickname: "boloss-du-93"
        })
        await user1.save()
    }

    catch (err) {
        console.error(">> Error while creating: ", err);
    }

})()
