export function validateName(name) {
    if (name == "") {
        document.getElementById('nameErr').innerText = "Name cannot be empty";
        return false;
    }
    if (name.length > 20 || name.length < 5) {
        document.getElementById('nameErr').innerText = "Name must be greater than 20 and less than 3 letters "
        return false;
    }
    return true;
}

export function validatePassword(password) {
    if (password.length < 8 || password.length > 8) {
        document.getElementById('passwordErr').innerText = "Password must be 8 letters";
        return false;
    }
    if (!(/[A-Z]+/.test(password))) {
        document.getElementById('passwordErr').innerText = "Password must contain capital letters";
        return false;
    }
    if (!(/[a-z]+/.test(password))) {
        document.getElementById('passwordErr').innerText = "Password must contain small letters";
        return false;
    }
    if (!(/[0-9]+/.test(password))) {
        document.getElementById('passwordErr').innerText = "Password must contain numbers";
        return false;
    }
    if (!(/[a-z]+/.test(password))) {
        document.getElementById('passwordErr').innerText = "Password must contain small letters";
        return false;
    }
    if (!(/[^a-zA-Z0-9_]+/.test(password))) {
        document.getElementById('passwordErr').innerText = "Password must contain special characters";
        return false;
    }
    return true;
}

export function validateAge(age) {
    if (age < 3 || age > 100) {
        document.getElementById('ageErr').innerText = 'Age must be greater than 3 and less than 100'
        return false;
    }
    return true;
}

export function validatePhone(phone) {
    if (phone.length != 10) {
        document.getElementById('phoneErr').innerText = 'phone number must be 10 digit long'
        return false;
    }
    return true;
}

export function validateAddress(address) {
    if (address.length < 10) {
        document.getElementById('addressErr').innerText = 'address is too short';
        return false;
    }
    return true;
}

export function validateGender(gender) {
    if (!gender) {
        document.getElementById('genderErr').innerText = 'please select a gender';
        return false;
    }
    return true;
}