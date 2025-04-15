const express = require('express');
const app = express();
require("dotenv").config();
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(session({
    secret: 'lolst',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

const signup = require('./backEnd/service/signup.js')
const connection = require('./backEnd/dataBase/connection.js')
const profile = require('./backEnd/service/profile.js')

connection.connection()

port = process.env.PORT;

app.use('/', signup);
app.use('/', profile);

app.listen(port, () => {
    console.log("connected successfully", port)
})