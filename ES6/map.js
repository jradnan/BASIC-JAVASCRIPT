
const friends = ["naim", "ashraf", "suhad", "mamun", "moaj"];

const fLength = friends.map(friend => friend.length)

const products = [
    {name:"ada", price:12, color:'mejenta'},
    {name:"piaj", price:80, color:'red'},
    {name:"roshun", price:180, color:'white'},
    {name:"alu", price:150, color:'mix'},
]


const productPrice = products.map(product => product.price);

// console.log(productPrice);
productPrice.forEach(product=>console.log(product))