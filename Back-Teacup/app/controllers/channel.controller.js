const { Channel } = require("../models");

const channelController = {
    getChannelById: async (req, res) => {

        const channel = await Channel.findByPk(req.params.id, {
            include: {
                association: 'users',
                attributes: ['id', 'nickname'],
                through : {
                    attributes : []
                }
            }
        });

        if (!channel) {
            return res.status(404).send('Channel not found')
        };

        return res.json(channel);
    }
}

module.exports = channelController;
