const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


router.get('/logout', async (req, res) => {
    const cookie = (req.query.c).replaceAll(' ', '+')
    console.log(cookie)
    if (res.clearCookie(cookie, { path: '/' })) {
        res.status(200).json({ Success: "Successfully logout" })
    } else {
        res.status(400).json({ Unsuccessful: "Cannot logout logout" })
    }

})

module.exports = router;