function addNumbers(num1,num2 ){
  let result = 0;
  for(const num of arguments){
    result = result + num;
  }
  return result;
}

const numbers = addNumbers(500,200,100)

console.log(numbers);



function getFullName (fisrtName, lastName){
    let fullName = "";
    for(const part of arguments){
        fullName = fisrtName + part + '';

    }
    return fullName;
}


const name = getFullName ("my name"," is khan")

console.log(name);