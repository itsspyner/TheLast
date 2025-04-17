async function profile() {

    const req = await fetch('http://localhost:3600/profile', {
        method: 'GET',
        credentials: 'include'
    });

    const res = await req.json()
    if (req.ok) {
        document.getElementById('userId').innerText = res.UserData;
        console.log('lol' + res.UserData)
        console.log("profile showing");
    } else {

        console.log('Errors');
    }


}