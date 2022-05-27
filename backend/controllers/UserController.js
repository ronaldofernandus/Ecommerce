const { user } = require('../models');
const { decryptPass } = require('../helpers/bcrypt');
const { tokenGenerator } = require('../helpers/jsonwebtoken');


class UserController {
    static async getUser(req, res) {
        try {
            let users = await user.findAll();

            res.status(200).json(users);
        } catch(err) {
            res.status(404).json({
                message: `Not Found`
            })
        }
    }

    static async register(req, res) {
        try {
            const { 
                user_name, 
                user_email, 
                user_password, 
                user_salt, 
                user_birthdate, 
                user_gender, 
                user_avatar, 
                user_type 
            } = req.body;

            let result = await user.create({
                user_name, 
                user_email, 
                user_password, 
                user_salt, 
                user_birthdate, 
                user_gender, 
                user_avatar, 
                user_type
            })
            res.status(200).json(result)
        } catch (err) {
            res.status(404).json({
                message: `Register has Failed!`
            })
        }
    }
    
    static async login(req, res) {
        try {
            const {user_email, user_password} = req.body;
            let emailFound = await user.findOne({
                where: {user_email}
            });

            if (emailFound) {
                if(decryptPass(user_password, emailFound.user_password)) {
                    let access_token = tokenGenerator(emailFound);
                    res.status(200).json( {access_token} );

                    // let verToken = tokenVerifier(access_token);
                    // console.log(verToken);
                } else {
                    res.status(500).json({
                        message: `Wrong Data!`
                    })
                }
            } else {
                res.status(404).json({
                    message: `404: Not Found!`
                })
            }
        } catch (err) {
            res.status(404).json({
                message: `Error 404 : User Not Found!`
            })
        }
    }

    static async updateUser(req, res) {
        const id = req.params.id;

        const { 
            user_name, 
            user_email, 
            user_password, 
            user_salt, 
            user_birthdate, 
            user_gender, 
            user_avatar, 
            user_type 
        } = req.body;

        try {
            let result = await user.update( {
                user_name, 
                user_email, 
                user_password, 
                user_salt, 
                user_birthdate, 
                user_gender, 
                user_avatar, 
                user_type
            }, {
                where: { id }
            });

            result[0] === 1 ?
                res.status(200).json({
                    message: `id ${id} has been updated..`
                })
                :
                res.status(404).json({
                    message: `id ${id} Not Found!`
                })
        } catch (err) {
            res.status(404).json({
                message: `Update data failed!`
            })
        }
    }

    static async deleteUser(req, res) {
        try {
            const id = +req.params.id;
            let result = await user.destroy({
                where: { id }
            });

            result === 1 ?
                res.status(200).json({
                    message: `id: ${id} has successful removed..`
                }) :
                res.status(404).json({
                    message: `id: ${id} has not success to removed..`
                })
        } catch (err) {
            res.status(404).json({
                message: `Not Found`
            })
        }
    }

    static async getUserbyId(req, res) {
        try {
            const id = +req.params.id;
            let result = await user.findByPk(id);

            res.status(200).json(result);
        } catch (err) {
            res.status(404).json({
                message: `Failed!`
            })
        }
    }
}

module.exports = UserController;