document
  .getElementById("flood-donate-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let floodDonateInput = selectWithId("donate-input");
    let floodDonate = totalDonation("flood-donate");
    let myBalance = totalDonation("my-balance");
    let floodDonateBalance = floodDonateInput + floodDonate;
    let myCurrentBalance = myBalance - floodDonateInput;
    let donateBalance = (selectId("flood-donate").innerText =
      floodDonateBalance);
    let myBalanceAfterDonate = (selectId("my-balance").innerText =
      myCurrentBalance);
    let popupBalance = (selectId("popup-balance").innerText = floodDonateInput);

    if (floodDonateInput <= 0 || isNaN(floodDonateInput)) {
      alert("Please provide correct information");
      let myBalanceAfterDonate = (selectId("my-balance").innerText = myBalance);
      let donateBalance = (selectId("flood-donate").innerText = floodDonate);
    }

    if (myBalance < floodDonateInput || myBalance <= 0) {
      alert("Your Balance is low");

      let myBalanceAfterDonate = (selectId("my-balance").innerText = myBalance);
      let donateBalance = (selectId("flood-donate").innerText = floodDonate);
      // popup
      let popup = selectId("popup").classList.add("hidden");
      return;
    }
    // popup item
    if (floodDonateInput > 0) {
      let popup = selectId("popup").classList.remove("hidden");
    }

    // history
    let history = document.createElement("div");
    history.className = "p-3 rounded-md border-2 border-gray-500";
    history.innerHTML = `
      <p class="text-xl"> ${floodDonateInput} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
      <p>${new Date().toString()}</P>

      `;
    let historyContainer = selectId("history");
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
    let donateBalance = (selectId("feni-flood-donate").innerText =
      floodDonateBalance);

    let myBalanceAfterDonate = (selectId("my-balance").innerText =
      myCurrentBalance);
    let popupBalance = (selectId("popup-balance").innerText = floodDonateInput);

    if (floodDonateInput <= 0 || isNaN(floodDonateInput)) {
      alert("Please provide correct information");
      let myBalanceAfterDonate = (selectId("my-balance").innerText = myBalance);
      let donateBalance = (selectId("feni-flood-donate").innerText =
        floodDonate);
    }

    if (myBalance < floodDonateInput || myBalance <= 0) {
      alert("Your Balance is low");

      let myBalanceAfterDonate = (selectId("my-balance").innerText = myBalance);
      let donateBalance = (selectId("feni-flood-donate").innerText =
        floodDonate);
      // popup
      let popup = selectId("popup").classList.add("hidden");
      return;
    }
    // popup item

    if (floodDonateInput > 0) {
      let popup = selectId("popup").classList.remove("hidden");
    }
    // history
    let history = document.createElement("div");
    history.className = "p-3 rounded-md border-2 border-gray-500";
    history.innerHTML = `
          <p class="text-xl"> ${floodDonateInput} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
          <p>${new Date().toString()}</P>
    
          `;
    let historyContainer = selectId("history");
    historyContainer.insertBefore(history, historyContainer.firstChild);
    console.log(historyContainer);
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
    let donateBalance = (selectId("quta-donate").innerText =
      floodDonateBalance);

    let myBalanceAfterDonate = (selectId("my-balance").innerText =
      myCurrentBalance);
    let popupBalance = (selectId("popup-balance").innerText = floodDonateInput);

    if (floodDonateInput <= 0 || isNaN(floodDonateInput)) {
      alert("Please provide correct information");
      let myBalanceAfterDonate = (selectId("my-balance").innerText = myBalance);
      let donateBalance = (selectId("quta-donate").innerText = floodDonate);
    }

    if (myBalance < floodDonateInput || myBalance <= 0) {
      alert("Your Balance is low");

      let myBalanceAfterDonate = (selectId("my-balance").innerText = myBalance);
      let donateBalance = (selectId("quta-donate").innerText = floodDonate);
      // popup
      let popup = selectId("popup").classList.add("hidden");
      return;
    }
    // popup item

    if (floodDonateInput > 0) {
      let popup = selectId("popup").classList.remove("hidden");
    }
    // history
    let history = document.createElement("div");
    history.className = "p-3 rounded-md border-2 border-gray-500";
    history.innerHTML = `
              <p class="text-xl"> ${floodDonateInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
              <p>${new Date().toString()}</P>
        
              `;
    let historyContainer = selectId("history");
    historyContainer.insertBefore(history, historyContainer.firstChild);
    console.log(historyContainer);
  });