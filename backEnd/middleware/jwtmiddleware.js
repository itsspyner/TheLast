function jwtMiddleware(req, res, next) {
    const token = req.cookies.token;
    console.log("Cookie received:", req.cookies.token); // ✅ Log this
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }

        req.user = decoded;
        next();
    });
}


module.exports = jwtMiddleware;