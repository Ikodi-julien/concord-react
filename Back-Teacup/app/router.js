const { Router } = require('express');
const router = Router();


const {authController, channelController, userController} = require('./controllers');



router.get('/', (req, res) => {
    res.send('I am a placeholder !')
})


// route pour obtenir les informations d'un utilisateur (uniquement de la table user)
router.get('/user/:id', userController.getUser);

// route post pour l'enregistrement
router.post('/signup', authController.signup);


router.get('/channel/:id', channelController.getChannelById);

module.exports = router;