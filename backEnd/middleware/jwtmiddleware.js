const jwt = require('jsonwebtoken')

function jwtMiddleware(req, res, next) {
    const cookie = req.query.c
    const cookie_name = cookie.replace(/ /g, '+')
    const token = req.cookies[cookie_name];
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, userData) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }

        req.user = userData;
        next();
    });
}


module.exports = jwtMiddleware;