const cryptoJs = require('crypto-js');
require("dotenv").config({ path: '/home/spyner/Documents/The one/.env' });

key = process.env.KEY


function encryption(text) {
    const cipherText = cryptoJs.AES.encrypt(text, key).toString()
    return cipherText;
}

function decryption(text) {
    const decryptedBytes = cryptoJs.AES.decrypt(text, key)
    const decryptPassword = decryptedBytes.toString(cryptoJs.enc.Utf8)

    return decryptPassword;
}

module.exports = { encryption, decryption }