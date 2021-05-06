const { User } = require('../models')
let bcrypt = require("bcrypt");

const authController = {
  /**
   *
   * @param {string} req.body
   * @param {*} res
   * @returns
   */
  signup: async (req, res) => {
    try {
      const { email, password, nickname } = req.body;

      if (!email || !password || !nickname) {
        return res
          .status(412)
          .send(
            "Missing information, you need to enter an email, a password and a nickname"
          );
      }

      const emailExists = await User.findOne({
        where: {
          email,
        },
      });

      if (emailExists) {
        return res
          .status(409)
          .send(`A user with the email ${email} already exists !`);
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      let newUser = await User.create({
        email,
        password : hashedPassword,
        nickname,
      });

      return res.json(newUser);
    } catch (error) {
      return res.status(500).send(`Error: ${error.message}`);
    }
  },
};

module.exports = authController;
