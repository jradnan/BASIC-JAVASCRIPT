function api() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displaUsers(data))
}

function displaUsers(data) {
    const ul = document.getElementById('users');
    for (const datas of data) {
        const li = document.createElement('li');
        li.innerText = `name:${datas.name}</br>
        email:${datas.email}
        `
        ul.appendChild(li);
    }
}