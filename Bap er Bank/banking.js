document.getElementById("deposit-button").addEventListener("click", 
function (){
    const depositeInput = document.getElementById("deposit-input");
    const NewdepositAmount = depositeInput.value;
    
    
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat( NewdepositAmount) 
    depositeInput.value = "";
   

    


    depositTotal.innerText = newDepositTotal;
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal =newDepositTotal + parseFloat(balanceTotalText);
    
    balanceTotal.innerText = newBalanceTotal;
})

document.getElementById("withdraw-button").addEventListener("click", function (){
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdraw = withdrawInput.value;

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const withdrawTotal = parseFloat(balanceTotalText) - parseFloat(newWithdraw);

    balanceTotal.innerText = withdrawTotal;


    const newWithdrawTotal = document.getElementById("withdraw-total");
    const newWithdrawTotalText = newWithdrawTotal.innerText;
    const totalWithdraw = parseFloat(newWithdrawTotalText) + parseFloat(newWithdraw);
    newWithdrawTotal.innerText = totalWithdraw;
    withdrawInput.value = "";


    if(balanceTotal.innerText < 0){
        alert("you have no money please deposit")
        balanceTotal.innerText = 0;
        newWithdrawTotal.innerText = 0;
        


    }





})