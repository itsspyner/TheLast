const express = require('express');
const router = express.Router();
const userSchema = require('../dataBase/schema/userSchema.js');

router.get('/profile', async (req, res) => {
    const userId = req.body.id;
    try {
        // const userdata = await userSchema.findById(userId)
        // console.log(userdata.name)
        // res.send({ message: userdata.name })
        console.log(userId)
        res.send({ message: userId })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;