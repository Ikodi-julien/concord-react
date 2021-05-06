const db = require('../models');
const User = db.User;
let bcrypt = require('bcrypt');

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
            message: `Pas d utilisateur avec l id ${id}`
        })
    }
    console.log(user);
    return res.send(user);
}


/**
 * 
 * @param {string} req.body 
 * @param {*} res 
 * @returns 
 */
exports.createUser = async(req, res) => { // voir si on envoit également un confirm password dans le formulaire d'enregistrement ?
    let {email, password, nickname} = req.body;

    if (!email||!password||!nickname) {
        return res.status(412).send({
            message: "Il manque des informations, il faut un mail, un mot de passe et un pseudo"
        })
    }

    let emailExists = await User.findOne({
        where: {
            email
        }
    });

    if(emailExists) {
        return res.status(409).send({
            message: `Un utilisateur avec cet email ${email} existe déjà !`
        })
    }

    let nicknameExists = await User.findOne({
        where: {
            nickname
        }
    });

    if(nicknameExists) {
        return res.status(409).send({
            message: `Un utilisateur avec ce pseudo ${nickname} existe déjà !`
        })
    }


    try {
        const saltRounds = 10;     
        
        bcrypt.hash(password, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            password = hash;
        });

        let newUser = await User.create({
            email,
            password,
            nickname
        });
        return res.send(newUser);
    } catch (error) {
        return res.status(500).send({
            message: `Error: ${error.message}`,
        })
    }
}