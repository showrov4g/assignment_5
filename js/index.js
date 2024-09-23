document
  .getElementById("flood-donate-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let floodDonateInput = selectWithId("donate-input");
    let floodDonate = totalDonation("flood-donate");
    let myBalance = totalDonation("my-balance");
    let floodDonateBalance = floodDonateInput + floodDonate;
    let myCurrentBalance = myBalance - floodDonateInput;
    let donateBalance = (document.getElementById("flood-donate").innerText =
      floodDonateBalance);
      
    let myBalanceAfterDonate = (document.getElementById("my-balance").innerText = myCurrentBalance);
    let popupBalance = document.getElementById('popup-balance').innerText = floodDonateInput;


    if (floodDonateInput <= 0 || isNaN(floodDonateInput)) {
      alert("Please provide correct information");
      let myBalanceAfterDonate = document.getElementById("my-balance").innerText = myBalance;
      let donateBalance = document.getElementById("flood-donate").innerText =
        floodDonate;
    }

    if (myBalance < floodDonateInput || myBalance <= 0) {
      alert("Your Balance is low");
      
      let myBalanceAfterDonate = document.getElementById("my-balance").innerText = myBalance;
      let donateBalance = document.getElementById("flood-donate").innerText =
        floodDonate;
        // popup 
        let popup = document.getElementById('popup').classList.add('hidden');
        return;
    }
    // popup item 
    if (floodDonateInput > 0){
      let popup = document.getElementById('popup').classList.remove('hidden');
    }

    // history 
    let history= document.createElement('div');
    history.className = "p-3 rounded-md border-2 border-gray-500";
    history.innerHTML = `
      <p class="text-xl"> ${floodDonateInput} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
      <p>${new Date().toString()}</P>

      `
    let historyContainer = document.getElementById('history');
    historyContainer.insertBefore(history, historyContainer.firstChild);
    console.log(historyContainer);

  });


  // fani flood dontaion section 

document
  .getElementById("feni-flood-donate-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let floodDonateInput = selectWithId("feni-flood-donate-input");
    let floodDonate = totalDonation("feni-flood-donate");
    let myBalance = totalDonation("my-balance");
    let floodDonateBalance = floodDonateInput + floodDonate;
    let myCurrentBalance = myBalance - floodDonateInput;
    let donateBalance = (document.getElementById("feni-flood-donate").innerText =
      floodDonateBalance);
      
    let myBalanceAfterDonate = (document.getElementById("my-balance").innerText = myCurrentBalance);
    let popupBalance = document.getElementById('popup-balance').innerText = floodDonateInput;


    if (floodDonateInput <= 0 || isNaN(floodDonateInput)) {
      alert("Please provide correct information");
      let myBalanceAfterDonate = document.getElementById("my-balance").innerText = myBalance;
      let donateBalance = document.getElementById("feni-flood-donate").innerText =
        floodDonate;
    }

    if (myBalance < floodDonateInput || myBalance <= 0) {
      alert("Your Balance is low");
      
      let myBalanceAfterDonate = document.getElementById("my-balance").innerText = myBalance;
      let donateBalance = document.getElementById("feni-flood-donate").innerText =
        floodDonate;
        // popup 
        let popup = document.getElementById('popup').classList.add('hidden');
        return;
    }
    // popup item 


    if (floodDonateInput > 0){
      let popup = document.getElementById('popup').classList.remove('hidden');
    }
  });

  // Quota Movement

  document
  .getElementById("quta-donate-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let floodDonateInput = selectWithId("quta-donate-input");
    let floodDonate = totalDonation("quta-donate");
    let myBalance = totalDonation("my-balance");
    let floodDonateBalance = floodDonateInput + floodDonate;
    let myCurrentBalance = myBalance - floodDonateInput;
    let donateBalance = (document.getElementById("quta-donate").innerText =
      floodDonateBalance);
      
    let myBalanceAfterDonate = (document.getElementById("my-balance").innerText = myCurrentBalance);
    let popupBalance = document.getElementById('popup-balance').innerText = floodDonateInput;


    if (floodDonateInput <= 0 || isNaN(floodDonateInput)) {
      alert("Please provide correct information");
      let myBalanceAfterDonate = document.getElementById("my-balance").innerText = myBalance;
      let donateBalance = document.getElementById("quta-donate").innerText =
        floodDonate;
    }

    if (myBalance < floodDonateInput || myBalance <= 0) {
      alert("Your Balance is low");
      
      let myBalanceAfterDonate = document.getElementById("my-balance").innerText = myBalance;
      let donateBalance = document.getElementById("quta-donate").innerText =
        floodDonate;
        // popup 
        let popup = document.getElementById('popup').classList.add('hidden');
        return;
    }
    // popup item 


    if (floodDonateInput > 0){
      let popup = document.getElementById('popup').classList.remove('hidden');
    }
  });

// popup close 
document.getElementById('popup-close-button').addEventListener('click', function(){
    let popup = document.getElementById('popup').classList.add('hidden');
})


