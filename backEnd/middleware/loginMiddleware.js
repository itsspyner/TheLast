function validate(req, res, next) {
    const token = req.cookies
    let cookie = ''
    for (key in token) {
        cookie = key
    }
    if (cookie != '') {
        res.status(200).json({ redirect: true, url: 'http://127.0.0.1:5500/frontEnd/html/profile.html' })
    } else {
        next();
    }
}

module.exports = validate