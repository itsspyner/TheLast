const mongoose = require('mongoose');

const messageStoringSchema = new mongoose.Schema({
    Userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    message: String,
    time: { type: Date, default: Date.now }
})

module.exports = mongoose.model('messageStoringModel', messageStoringSchema);