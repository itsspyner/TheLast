const user = require('../schema/userSchema.js')
const encryption = require('../../validation/encPass.js');



async function addUser(data) {
    try {
        const encryptedPassword = encryption.encryption(data.password)
        const userModel = new user({
            name: data.name,
            age: data.age,
            gender: data.gender,
            email: data.email,
            password: encryptedPassword,
            phoneNumber: data.phone,
            address: data.address
        });

        await userModel.save();
        console.log("Data inserted successfully");
        return "Data Inserted successfully";
    } catch (error) {
        console.log("Error adding Data", error);
        return "Error adding data";
    }
}

module.exports = { addUser };