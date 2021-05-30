const { Router } = require("express");
const router = Router();

const { authController, channelController, tagController } = require("./controllers");

router.get('/', (req, res) => {res.sendFile('index.html', (err) => console.trace(err.json()))});
// [post] route for signup registration
router.post('/signup', authController.signup);

router.get('/channel/:id(\\d+)', channelController.getChannelById);

router.get('/tags', tagController.getAllTags);


module.exports = router;
