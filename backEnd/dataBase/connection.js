const mongoose = require('mongoose');

async function connection() {
    try {
        mongoose.connect('mongodb://localhost/TheLast')
        console.log("Connected to database");
    } catch (err) {
        console.log("Error connecting to database", err);
    }
}
module.exports = { connection };