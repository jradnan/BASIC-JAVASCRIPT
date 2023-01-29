const numbers = [323, 455, 660, 449, 120, 130 ,140];

const bigNumbers = numbers.filter(number => number > 500);
const smallNumbers = numbers.filter(number => number < 500);

// console.log(smallNumbers);


const products = [
    {name:"ada", price:12, color:'mejenta'},
    {name:"piaj", price:80, color:'red'},
    {name:"roshun", price:180, color:'white'},
    {name:"alu", price:150, color:'mix'},
];


const big = products.filter(product => product.color == "red" )

const find =products.find(product => product.price > 100);


console.log(find);
// hfahfjadvaskjewadssdgsd
