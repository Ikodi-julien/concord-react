const { Router } = require('express');
const router = Router();
const user = require('./controllers/userController');

router.get('/', (req, res) => {
    res.send('I am a placeholder !')
})

// route pour obtenir les informations d'un utilisateur (uniquement de la table user)
router.get('/user/:id', user.getUser);

// route post pour l'enregistrement
router.post('/register', user.createUser);

module.exports = router;