const express = require('express');
const app = express();
require("dotenv").config();
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors')
const connect_mongo = require('connect-mongo');

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));

app.use(session({
    secret: 'lolst',
    resave: false,
    saveUninitialized: false,
    store: connect_mongo.create({
        mongoUrl: 'mongodb://localhost/TheLast',
        ttl: 14 * 24 * 60 * 60,
        autoRemove: 'native'
    }),
    cookie: {
        maxAge: 14 * 24 * 60 * 60 * 1000,
    }
}))

app.use(bodyParser.json());


const home = require('./backEnd/service/home.js')
const signup = require('./backEnd/service/signup.js')
const connection = require('./backEnd/dataBase/connection.js')
const profile = require('./backEnd/service/profile.js')

connection.connection()

port = process.env.PORT;


app.use('/', home);
app.use('/', signup);
app.use('/', profile);

app.listen(port, () => {
    console.log("connected successfully", port)
})