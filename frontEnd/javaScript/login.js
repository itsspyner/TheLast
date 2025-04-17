import { validatePassword } from './validation.js'

document.getElementById('container').addEventListener('submit', async function validate() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const errFields = ["emailErr", "passwordErr"]
    errFields.forEach((element) => {
        document.getElementById(element).innerText = "";
    })

    // const isPasswordValid = validatePassword(password);

    // if (!isPasswordValid) {
    //     return;
    // }

    const data = {
        email,
        password,
    };

    const req = await fetch('http://localhost:3600/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
    });

    const res = await req.json()
    if (req.ok) {
        console.log(res.message)
        document.getElementById('form').reset();
    } else {
        if (res.emailErr) {
            document.getElementById('emailErr').innerText = res.emailErr;
        }
        if (res.passwordErr) {
            document.getElementById('passwordErr').innerText = res.passwordErr;
        }
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