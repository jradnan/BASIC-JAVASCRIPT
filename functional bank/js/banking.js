


document.getElementById("deposit-button").addEventListener("click", function (){
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = depositInput.value;
    
    const depositText = document.getElementById("deposit-total");

    const depositTotal = depositText.innerText;
    const depositTotalValue = parseFloat(depositTotal) + parseFloat(depositInputValue);

    depositText.innerText = depositTotalValue;
    depositInput.value = "";


    const balanceField = document.getElementById("balance-total");
    const balanceText = balanceField.innerText;

    const balanceTotal = parseFloat(balanceText) + depositTotalValue;
    balanceField.innerText = balanceTotal;

  if(depositText.innerText < 0){
    alert("Please add Positive Number")

    depositText.innerText = "";
    balanceField.innerText = "";
  }

    
});


document.getElementById("withdraw-button").addEventListener("click", function (){
    const withdrawInput = document.getElementById("withdraw-input");

    const withdrawField = withdrawInput.value;

   const withdrawText = document.getElementById("withdraw-total");

   const withdraw = withdrawText.innerText;

   const withdrawTotal = parseFloat(withdrawField) + parseFloat(withdraw);

   withdrawText.innerText = withdrawTotal;



   const balanceField = document.getElementById("balance-total");

   const balanceText = balanceField.innerText;

   const balanceTotal = parseFloat(balanceText) - withdrawTotal;

   balanceField.innerText = balanceTotal;

   withdrawInput.value = "";

   if(balanceField.innerText < 0   ){
    alert("You have no money !!! Please deposit")
    balanceField.innerText = "";
    withdrawText.innerText = "";
   }




    
})