const userSchema = require('../dataBase/schema/userSchema.js')

async function emailAlreadyExists(email) {
    const emailData = await userSchema.find({ email: email })
    if (emailData.length > 0) {
        return false;
    }
    return true;
}

async function phoneAlreadyExists(phone) {
    const phoneData = await userSchema.find({ phoneNumber: phone })
    if (phoneData.length > 0) {
        return false;
    }
    return true;
}

module.exports = { emailAlreadyExists, phoneAlreadyExists }