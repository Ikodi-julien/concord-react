const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('I am a placeholder !')
})

module.exports = router;