const numbers = [330, 440, 323, 220, 122, 320];


function myFunc(total,value,array){
    // console.log(total);
    // console.log(array);

    return total + value;

}

const total =  numbers.reduce(myFunc, 122)

// console.log(total);

// console.log(Array.from("ABCDEFGHdsaaadd"));


const d = new Date("2023-03-25");

// console.log(d);


const obj = {
    person : "girl",
    name : "afsana sultana pisty",
    age : "22",

}

const array = [1,2,3,4,5,6];

console.dir(array);