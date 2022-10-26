const products =[
    {name :'shirt', price : 500},
    {name :'shopping-bag', price : 1500},
    {name :'bodyspray', price : 2500},
    {name :'pant', price : 1500},
    {name :'sunglass', price : 1200},
    {name :'hoody', price : 700},
    {name :'shoe', price : 3500},
]

let totalPrice = 34530;

for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);



let myBudget = 34530;

for(const product of products){
    myBudget = myBudget - product.price;
}
console.log(myBudget);