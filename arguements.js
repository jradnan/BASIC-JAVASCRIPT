function addNumbers(num1,num2 ){
  let result = 0;
  for(const num of arguments){
    result = result + num;
  }
  return result;
}

const numbers = addNumbers(500,200,100)

console.log(numbers);