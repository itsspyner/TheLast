const express = require('express');
const router = express.Router();
const userSchema = require('../dataBase/schema/userSchema.js');
const jwtMiddleware = require('../middleware/jwtmiddleware.js');

router.get('/profile', jwtMiddleware, async (req, res) => {
    // const allData = await userSchema.findOne({ email: req.user.email })
    // console.log(allData)
    if (req.user.email) {
        res.status(200).json({ UserData: req.user })
    }
    else {
        res.status(401).json({ err: 'error showing profile' })
        console.log('lol')
    }
})

module.exports = router;