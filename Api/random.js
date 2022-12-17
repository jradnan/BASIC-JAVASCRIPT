const randomUser = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => allUser(data))
}

const allUser = user =>{
    const data = user.results;
    const section = document.getElementById('div')
    for(const users of data ){
        console.log(users);
        const div = document.createElement('div');
        div.classList.add('alluser')
        div.innerHTML = `
     
        <h1>Name: ${users.name.first} ${users.name.last}</h1>
        <p>email: ${users.email}</p>
        <p>Age: ${users.dob.age}</p>
        
        <p>Gender: ${users.gender}</p>
        <p>Phone: ${users.cell}</p>
        <p>Country: ${users.location.country}</p>
        <button>Details</button>
       
        `;
        section.appendChild(div)
    }

}