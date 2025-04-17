// Requiring modules
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// cookieParser middleware
app.use(cookieParser());

// Route for setting the cookies
app.get('/setcookie', function (req, res) {

    // Setting a cookie with key 'my_cookie'
    // and value 'geeksforgeeks'
    res.cookie('my_cookie', 'geeksforgeeks');
    res.send('Cookies added');
})

// Route for getting all the cookies
app.get('/getcookie', function (req, res) {
    res.send(req.cookies);
})

// Server listens to port 3000
app.listen(3000, (err) => {
    if (err) throw err;
    console.log('server running on port 3000');
});
