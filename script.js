


function calculateTip(tipPercentage) {
  const billAmount = parseFloat(document.getElementById('bill_input').value);
  const numPersons = parseInt(document.getElementById('people_input').value);

  if (isNaN(billAmount) || billAmount <= 0) {
      alert("Please enter a valid bill amount");
      return;
  }

  if (isNaN(numPersons) || numPersons <= 0) {
      alert("Please enter a valid number of persons");
      return;
  }

  //perpersonBill
  const billPerPerson=billAmount/numPersons;

  //Totaltip
  const totalTip = billPerPerson * (tipPercentage / 100);

  let Tip=document.getElementById('right_head1');
  Tip.innerHTML=totalTip;


  //TotalBill
  const totalBill = billAmount + totalTip;

  let Total=document.getElementById('right_head2');
  Total.innerHTML=totalBill;


  let reset = document.getElementById('btn_reset');
  reset.addEventListener("click",function(){
    
    billAmount.value = ' ';
    Tip.textContent = '0.00';
    Total.textContent = '0.00';
  })
}
    


    