const url = document.URL
const param = url.split('?')[1]
const userId = new URLSearchParams(param)
let id = '';
for (let key of userId.entries()) {
    id = key[1];
}


async function profile() {
    document.getElementById('userId').innerText = id;
    console.log(id);

    const req = await fetch('http://localhost:3600/profile', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        body: id
    })

    const res = await req.json()
    if (req.ok) {

        console.log(res.message)
        console.log("profile showing");
    } else {




        console.log('Errors');
    }


}