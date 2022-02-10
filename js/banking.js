//handle deposit button event
document.getElementById('deposit-btn').addEventListener
('click', function (){
    //ger the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value ;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText=depositAmount

    //clear the deposit input filed 
    depositInput.value = '';
})