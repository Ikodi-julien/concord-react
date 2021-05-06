const { Router } = require('express');
const router = Router();

const {authController, channelController } = require('./controllers');

// route post pour l'enregistrement
router.post('/signup', authController.signup);

router.get('/channel/:id', channelController.getChannelById);

module.exports = router;