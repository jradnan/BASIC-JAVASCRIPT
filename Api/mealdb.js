const searchFood = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText); 
    searchField.value = '';
    if(searchText == ''){
      
        searchField.value = '';
        const warning = document.getElementById("warning");
       
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>No Result Found</h1>
        `;
        warning.appendChild(div)
        


    }
    else{

        
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
        `;
        
        fetch(url)
        .then(res => res.json())
        .then(data => searchMeal(data.meals))

        warning.innerHTML = '';
    }
 

   
}




const searchMeal =meals=>{
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML ='';
    if( searchFood() == 0){
        const warning = document.getElementById("warning");
       
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>No Result Found</h1>
        `;
        warning.appendChild(div)
    }else{
        meals.forEach(meal =>{
            console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col')
            const subString = `${meal.strInstructions}`;
            const slice = subString.slice(0, 200);
            div.innerHTML = `
            <div class="card h-100">
                    <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
                    <div class="card-body bg-dark text-white rounded-3 ">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${slice}</p>
                    </div>
            `;
    
           
            searchResult.appendChild(div)
            warning.innerHTML = '';
           
            
        })
    }
  
    
}

// const searchMeal = meals =>{
//     const section = document.getElementById('section');
//     for(const meal of meals){
//         console.log(meal);
//         const div = document.createElement('div');
//         div.classList.add('food') 
//         div.innerHTML = `
//         <img width="400"  src=${meal.strMealThumb} />
//         <h1 class="text-center">${meal.strMeal}</h1>
//         `;
//         section.appendChild(div)

//     }
// }