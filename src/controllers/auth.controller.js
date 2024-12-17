const { hashPassword, verifyPasswords } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const Auth = require('../models/Auth')

const handleLogin = async (req, res, next) => {

    try {
        const { email, password } = req.body

        // await Auth.verificarCredenciales(email, password)
        const user = await Auth.exists(email)

        const match = verifyPasswords(password, user.password)

        if (match) {

            const data = {
                email,
            }

            const token = signToken(data)
            res.send(token)
        } else {
            res.send('Credenciales errroneas')
        }
    } catch (error) {
        next(error)
    }
}

const handleRegister = async (req, res, next) => {

    try {
        const { email, password } = req.body

        const passwordHashed = hashPassword(password)

        const user = await Auth.register(email, passwordHashed)

        // const data = {
        //     email,
        // }

        // const token = signToken(data)

        res.send(user)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    handleLogin,
    handleRegister
}