const express = require('express')
const router = express.Router()
const userModel = require('../dataBase/models/userModel.js');
const validate = require('../validation/signupUserValidation.js')
const userSchema = require('../dataBase/schema/userSchema.js');

// router.get('/signup', (req, res) => {
//     if (req.session.userId) {
//         res.redirect('http://127.0.0.1:5500/frontEnd/html/profile.html')
//     } else {
//         res.redirect('http://127.0.0.1:5500/frontEnd/html/signup.html')
//     }
// })

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
    const id = userId.toString();

})

module.exports = router

