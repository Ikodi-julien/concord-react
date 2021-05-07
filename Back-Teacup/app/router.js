const { Router } = require("express");
const router = Router();

const { authController, channelController } = require("./controllers");


// [post] route for signup registration
router.post("/signup", authController.signup);

router.get('/channel/:id', channelController.getChannelById);

module.exports = router;
