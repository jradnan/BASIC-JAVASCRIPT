function kanye(){
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => loadData(data))
}



function loadData(data){
    console.log(data);
    const div = document.getElementById('div')
    
        
       div.innerText = data.quote;
       
    

}