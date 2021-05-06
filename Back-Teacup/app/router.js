const { Router } = require('express');
const router = Router();

const {authController, channelController, userController} = require('./controllers');

// route post pour l'enregistrement
router.post('/signup', authController.signup);

// route pour obtenir les informations d'un utilisateur (uniquement de la table user)
router.get('/user/:id', userController.getUser);

router.get('/channel/:id', channelController.getChannelById);

module.exports = router;