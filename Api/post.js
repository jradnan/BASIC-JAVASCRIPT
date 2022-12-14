function loadPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => diaplayPost(data))
}

function diaplayPost(data){
    const section = document.getElementById('section')
    for(const post of data){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h1>Title: ${post.title}</h1>
        <h3>ID: ${post.id}</h3>
        <p>${post.body}</p>

        `
        section.appendChild(div)
    }
  
    
}