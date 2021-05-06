const db = require('../models');
const User = db.User;

/**
 * 
 * @param {int} req.params 
 * @returns user
 */
exports.getUser = async(req, res) => {
    //pour chercher un user, on demande le paramètre dans l'url (en l'occurence l'id)
    const {id} = req.params;

    const user = await db.User.findOne({
        where: {
            id
        }
    });

    if(!user) {
        return res.status(400).send(`Pas d utilisateur avec l id ${id}`)
    }

    return res.json(user);
}