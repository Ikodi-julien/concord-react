const { Router } = require('express');
const channelController = require('./controllers/channel.controller');
const router = Router();
const user = require('./controllers/userController');

router.get('/', (req, res) => {
    res.send('I am a placeholder !')
})

// route pour obtenir les informations d'un utilisateur (uniquement de la table user)
router.get('/user/:id', user.getUser);

// route post pour l'enregistrement
router.post('/register', user.createUser);

router.get('/channel/:id', channelController.getChannelById);


module.exports = router;