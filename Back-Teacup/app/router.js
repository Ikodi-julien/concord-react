const { Router } = require('express');
const channelController = require('./controllers/channel.controller');
const router = Router();

router.get('/', (req, res) => {
    res.send('I am a placeholder !')
})

router.get('/channel/:id', channelController.getChannelById);

module.exports = router;