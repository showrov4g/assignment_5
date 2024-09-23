document
  .getElementById("flood-donate-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let floodDonateInput = selectWithId("donate-input");
    let floodDonate = totalDonation("flood-donate");
    let myBalance = totalDonation("my-balance");
    let floodDonateBalance = floodDonateInput + floodDonate;
    let myCurrentBalance = myBalance - floodDonateInput;
    let donateBalance = (document.getElementById("flood-donate").innerText = floodDonateBalance);
    let myBalanceAfterDonate = (document.getElementById('my-balance').innerText = myCurrentBalance);
    if (floodDonateInput <= 0 || isNaN(floodDonateInput)) {
      alert("Please provide correct information");
    }
    if(myBalance < floodDonateInput || myBalance <= 0){
        alert("Your Balance is low");
        let myBalanceAfterDonate = (document.getElementById('my-balance').innerText = myBalance);
        let donateBalance = (document.getElementById("flood-donate").innerText = floodDonate);
    }
  });

//   let x = 500;

// let flood = document.getElementById('flood-donate');
//  let fl= parseFloat(flood.innerText);
//  let sum = fl+x;
//  flood.innerText =sum;
// console.log(sum);
