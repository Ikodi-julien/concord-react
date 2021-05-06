const db = require("../models");
const User = db.User;
let bcrypt = require("bcrypt");

const authController = {
  /**
   *
   * @param {string} req.body
   * @param {*} res
   * @returns
   */
  signup: async (req, res) => {
    // voir si on envoit également un confirm password dans le formulaire d'enregistrement ?
    try {
      const { email, password, nickname } = req.body;

      if (!email || !password || !nickname) {
        return res
          .status(412)
          .send(
            "Il manque des informations, il faut un mail, un mot de passe et un pseudo"
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
          .send(`Un utilisateur avec cet email ${email} existe déjà !`);
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
