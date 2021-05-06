const { User } = require('../models')

/**
 * 
 * @param {int} req.params 
 * @returns user
 */
exports.getUser = async(req, res) => {
    //to search an user, we ask for url parameters (id)
    const {id} = req.params;

    const user = await User.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['password']
        },
        include:{
            association: 'tags',
            attributes: ['id', 'name'],
        }
    });

    if(!user) {
        return res.status(400).send(`No user matching id ${id}`)
    }

    return res.json(user);
}