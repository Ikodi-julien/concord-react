const { Router } = require("express");
const router = Router();

const {
    authController,
    channelController,
    userController,
} = require("./controllers");

router.get("/", (req, res) => {
    res.send("I am a placeholder !");
});

// [get] route to get user information when receiving user's id
router.get("/user/:id", userController.getUser);

// [post] route for signup registration
router.post("/signup", authController.signup);

router.get("/channel/:id", channelController.getChannelById);

module.exports = router;
