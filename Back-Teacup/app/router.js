const { Router } = require('express');
const router = Router();
const user = require('./controllers/userController');

router.get('/', (req, res) => {
    res.send('I am a placeholder !')
})

router.get('/user/:id', user.getUser);

router.post('/register', user.createUser);

module.exports = router;