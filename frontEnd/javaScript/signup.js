import { validateName, validatePassword, validateAge, validatePhone, validateAddress, validateGender } from './validation.js'

document.getElementById('container').addEventListener('submit', async function validate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    const errFields = ["nameErr", "emailErr", "passwordErr", "genderErr", "ageErr", "phoneErr", "addressErr"]
    errFields.forEach((element) => {
        document.getElementById(element).innerText = "";
    })

    // const isNameValid = validateName(name);
    // const isPasswordValid = validatePassword(password);
    // const isAgeValid = validateAge(age);
    // const isPhoneValid = validatePhone(phone);
    // const isAddressValid = validateAddress(address);
    // const isGenderValid = validateGender(gender);

    // if (!isNameValid || !isPasswordValid || !isAgeValid || !isPhoneValid || !isAddressValid || !isGenderValid) {
    //     return;
    // }

    const data = {
        name,
        email,
        password,
        age,
        phone,
        address,
        gender
    };

    const req = await fetch('http://localhost:3600/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    const res = await req.json()
    if (req.ok) {
        console.log(res.message)
        const userId = res.message;
        window.open(`../html/profile.html?id=${userId}`, '_self')
        document.getElementById('form').reset();
    } else {
        if (res.emailErr) {
            document.getElementById('emailErr').innerText = res.emailErr;
        }
        if (res.phoneErr) {
            document.getElementById('phoneErr').innerText = res.phoneErr;
        }
        console.log(res.err)
    }

})

document.getElementById('checkbox').addEventListener('click',
    function showPassword() {
        const x = document.getElementById('password');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
)