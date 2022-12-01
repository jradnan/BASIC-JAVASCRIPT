// let math =   
// let math2 = Math.round(math)

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    // let math = Math.random() * 10000;
    // let math2 = Math.round(math)
    const pin = getPin();
    let inputGenerate = document.getElementById("input-generate");

    inputGenerate.value = pin;
}

document.getElementById("key-pad").addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputKey = document.getElementById("input-key");

    if (isNaN(number)) {
        if (number == "C") {
            inputKey.value = "";
        }
    }
    else {
        const previousnumber = inputKey.value;
        const newNumber = previousnumber + number;
        inputKey.value = newNumber;
    }


})

function verifyPin() {
    const pin = document.getElementById('input-generate').value;
    const typedNumbers = document.getElementById("input-key").value;

    const notifySuccess = document.getElementById("notify-success");
    const notifyFail = document.getElementById("notify-fail");
    if (pin.length == 4 && pin == typedNumbers) {

        notifySuccess.style.display = "block";
        notifyFail.style.display = "none";
    }
    else {
        notifySuccess.style.display = "none";
        notifyFail.style.display = "block";
        
    }
}