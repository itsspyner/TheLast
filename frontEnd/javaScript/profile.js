const url = document.URL
const splitUrl = url.split('?')[1];
const cookie = splitUrl.split('=')[1];

async function profile() {
    console.log(cookie)
    const req = await fetch(`http://localhost:3600/profile?c=${cookie}`, {
        method: 'GET',
        credentials: 'include'
    });

    const res = await req.json()
    if (req.ok) {
        document.getElementById('userId').innerText = `${res.UserData.email},${res.UserData.password}`;
        console.log("profile showing");
        const btn = document.getElementById('btn');
        btn.onclick = () => {
            window.open(`http://localhost:3600/logout?c=${cookie}`, '_self')
        }
    } else {
        console.log(res.err)
        console.log('Errors');
    }
}