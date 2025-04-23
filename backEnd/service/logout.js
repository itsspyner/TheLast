const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


router.get('/logout', async (req, res) => {
    const token = req.cookies
    let cookie = ''
    for (key in token) {
        cookie = key
    }
    if (res.clearCookie(cookie, { path: '/' })) {
        res.status(200).redirect('http://127.0.0.1:5500/frontEnd/html/login.html')
    } else {
        res.status(400).json({ Unsuccessful: "Cannot logout logout" })
    }

})

module.exports = router;