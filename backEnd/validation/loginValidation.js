const connection = require("../dataBase/connection");
const userSchema = require("../dataBase/schema/userSchema");
const decryption = require("./encPass");

async function validatePassword(email, passwords) {
    const userPassword = (await userSchema.findOne({ email }).select('password'));
    if (!userPassword) {
        return false
    } else {
        const password = userPassword.password;
        const decryptedPassword = decryption.decryption(password)
        if (decryptedPassword != passwords) {
            return false
        } else {
            return true
        }
    }
}

async function validateEmail(email) {
    const userEmail = await userSchema.findOne({ email });
    if (!userEmail) {
        console.log('Email is wrong')
        return false
    } else {
        return true;
    }
}

module.exports = { validateEmail, validatePassword }
