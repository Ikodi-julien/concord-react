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
        return res.status(400).send({
            message: "Pas d'utilisateur avec l'id "+'${id}'
        })
    }

    return res.send(user);
}

exports.createUser = async(req, res) => {
    const {email, password, nickname} = req.body;

    if (!email|!password|!nickname) {
        return res.status(400).send({
            message: "Il manque des informations, il faut un mail, un mot de passe et un pseudo"
        })
    }

    let emailExists = await User.findOne({
        where: {
            email
        }
    });

    if(emailExists) {
        return res.status(400).send({
            message: 'Un utilisateur avec cet email ${email} existe déjà !'
        })
    }

    let nicknameExists = await User.findOne({
        where: {
            nickname
        }
    });

    if(nicknameExists) {
        return res.status(400).send({
            message: 'Un utilisateur avec ce pseudo ${nickname} existe déjà !'
        })
    }

    try {
        let newUser = await User.create({
            email,
            password,
            nickname
        });
        return res.send(newUser);
    } catch (error) {
        return res.status(500).send({
            message: 'Error: ${error.message}',
        })
    }
}