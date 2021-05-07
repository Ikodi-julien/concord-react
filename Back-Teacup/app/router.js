const { Router } = require('express');
const { channelController, tagController } = require('./controllers');
const router = Router();

router.get('/channel/:id(\\d+)', channelController.getChannelById);

router.get('/tags', tagController.getAllTags);

module.exports = router;