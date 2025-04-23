const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '/home/spyner/Documents/The one/.env' })
const { validateEmail, validatePassword } = require('../validation/loginValidation');
const validate = require('../middleware/loginMiddleware.js')

router.post('/login', validate, async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if ((await validateEmail(email)) == false) {
        return res.status(401).json({ emailErr: "email is wrong" })
    }
    if (await validatePassword(email, password) == false) {
        return res.status(401).json({ passwordErr: "email or password is wrong" })
    }

    const user = {
        "email": email,
        "password": password
    }

    try {
        const jsonwebtoken = jwt.sign(user, process.env.ACCESS_TOKEN)
        const encryptedToken = (process.env.COOKIE_KEY)
        res.cookie(encryptedToken, jsonwebtoken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: '/',
            maxAge: 1000 * 24 * 60 * 60 * 7
        });
        res.status(200).send({ message: encryptedToken })
    } catch (e) {
        console.log('error', e)
    }
})

module.exports = router;