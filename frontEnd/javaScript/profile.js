async function profile() {
    const req = await fetch(`http://localhost:3600/profile`, {
        method: 'GET',
        credentials: 'include'
    });

    const res = await req.json()
    if (req.ok) {
        document.getElementById('userId').innerText = `${res.UserData.email}`;
        console.log("profile showing");
        const btn = document.getElementById('btn');
        btn.onclick = () => {
            window.open(`http://localhost:3600/logout`, '_self')
        }
    } else {
        console.log(res.err)
        console.log('Errors');
    }
}