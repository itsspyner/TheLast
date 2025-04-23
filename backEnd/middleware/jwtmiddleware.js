const jwt = require('jsonwebtoken')

function jwtMiddleware(req, res, next) {
    const cookie = req.cookies
    let token = ''
    for (key in cookie) {
        token = cookie[key]
    }
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