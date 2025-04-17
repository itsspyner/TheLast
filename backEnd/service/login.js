const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '/home/spyner/Documents/The one/.env' })

const { validateEmail, validatePassword } = require('../validation/loginValidation')

router.post('/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if ((await validateEmail(email)) == false) {
        res.status(401).json({ emailErr: "email is wrong" })
    }
    if (await validatePassword(email, password) == false) {
        res.status(401).json({ passwordErr: "email or password is wrong" })
    }

    const user = {
        "email": email,
        "password": password
    }

    try {
        const jsonwebtoken = jwt.sign(user, process.env.ACCESS_TOKEN)
        console.log(jsonwebtoken)
        res.cookie('token', jsonwebtoken, {
            path: '/',
            sameSite: 'none'
        })
        res.status(200).send({ message: jsonwebtoken })
    } catch (e) {
        console.log('error')
    }
})

module.exports = router;