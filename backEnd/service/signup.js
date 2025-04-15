const express = require('express')
const router = express.Router()
const userModel = require('../dataBase/models/userModel.js');
const validate = require('../validation/signupUserValidation.js')
const userSchema = require('../dataBase/schema/userSchema.js');

router.post('/signup', async (req, res) => {
    const emailAvailable = await validate.emailAlreadyExists(req.body.email);
    const phoneAvailable = await validate.phoneAlreadyExists(Number(req.body.phone));

    if (!emailAvailable) {
        return res.status(400).json({ emailErr: "Email already exists" });
    }

    if (!phoneAvailable) {
        return res.status(400).json({ phoneErr: "Phone already exists" });
    }
    await userModel.addUser(req.body)

    const userId = await userSchema.findOne({ email: req.body.email }).select('_id');

    if (userId) {
        req.session.userId = userId._id.toString();
        console.log('Logged in')
        res.status(200).json({ message: req.session.userId })
    } else {
        console.log("Cannot loggin")
    }

    console.log(req.session.userId)

})

module.exports = router

