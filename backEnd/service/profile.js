require('dotenv').config({ path: '/home/spyner/Documents/The one/.env' })

const express = require('express');
const router = express.Router();
const userSchema = require('../dataBase/schema/userSchema.js');
const jwtMiddleware = require('../middleware/jwtmiddleware.js');
const jwt = require('jsonwebtoken')

// router.get('/profile', jwtMiddleware, async (req, res) => {
//     console.log(req.cookies.token)
//     jwt.verify(req.cookies.token, process.env.ACCESS_TOKEN, (err, UserData) => {
//         if (err) {
//             res.status(401).json({
//                 err: "Cannot access the Token"
//             })
//         } else {
//             res.status(200).json({
//                 err: "Token accesses",
//                 UserData
//             })
//         }
//     })
// })

router.get('/profile', jwtMiddleware, (req, res) => {
    res.status(200).json({
        message: 'Token verified!',
        user: req.user
    });
});

module.exports = router;