const phones = [
    { name: 'xiaomi', price: 12000, storage: 128 },
    { name: 'nokia', price: 9000, storage: 64 },
    { name: 'oppo', price: 7000, storage: 32 },
    { name: 'vivo', price: 6000, storage: 16 },
    { name: 'infinix', price: 5000, storage: 16 },
    { name: 'techno', price: 4000, storage: 8 }
]

let cheapest = phones[0];

for(const phone of phones){
    if(phone.price <cheapest.price ){
        cheapest = phone;
    }
}
// console.log(cheapest);



const foods = [
    {name:'coconat', price: 80, color:'ash'},
    {name:'orange', price: 60, color:'orange'},
    {name:'pineapple', price: 160, color:'pineapple'},
    {name:'banana', price: 40, color:'yellow'},
    {name:'mango', price: 90, color:'mango'},
]

let cheapestFood = foods[0];

for(const food of foods){
    if(food.price <cheapestFood.price){
        cheapestFood = food;
    }
}
console.log(cheapestFood);