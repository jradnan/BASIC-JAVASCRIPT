function inchToFeet(inch){
    const feet = inch * 0.083333;
    return feet;
}

const calculate = inchToFeet(144);

// console.log(calculate);



function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const calculate2 = feetToInch(10);

console.log(calculate2);