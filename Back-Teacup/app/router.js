const { Router } = require('express');
const channelController = require('./controllers/channel.controller');
const router = Router();

router.get('/channel/:id', channelController.getChannelById);

module.exports = router;