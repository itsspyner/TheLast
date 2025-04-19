const express = require('express');
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors')
const cookie = require('cookie-parser')


app.use(cookie());
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));


app.use(bodyParser.json());

const signup = require('./backEnd/service/signup.js')
const connection = require('./backEnd/dataBase/connection.js')
const profile = require('./backEnd/service/profile.js')
const login = require('./backEnd/service/login.js')
const logout = require('./backEnd/service/logout.js')

connection.connection()

port = process.env.PORT;

app.use('/', signup);
app.use('/', profile);
app.use('/', login)
app.use('/', logout);

app.listen(port, () => {
    console.log("connected successfully", port)
})