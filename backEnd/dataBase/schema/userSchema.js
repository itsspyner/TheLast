const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
    password: String,
    phoneNumber: String,
    address: String
});

module.exports = mongoose.model("user", userSchema);