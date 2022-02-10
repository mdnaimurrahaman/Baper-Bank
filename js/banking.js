//handle deposit button event
document.getElementById("deposit-btn").addEventListener("click", function () {
  //ger the amount deposited
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);
  // console.log(depositAmount);

  //update deposit total
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  newDepositTotal = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositTotal;

  //update account balance
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;

  //clear the deposit input filed
  depositInput.value = "";
});

//handle withdraw event handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawAmountText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawAmountText);
  console.log(newWithdrawAmount);

  // ser withdraw total
  const withdrawTotal = document.getElementById("withdraw-total");
  console.log(withdrawTotal);
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;
  
//update balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText
const previousBalanceTotal= parseFloat(previousBalanceText);
const newBalanceTotal= previousBalanceTotal - newWithdrawTotal ;
balanceTotal.innerText = newBalanceTotal;


  //clear withdraw input
  withdrawInput.value = '';
});


