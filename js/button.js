selectId("btn-donate").addEventListener("click", function () {
  let hide = selectId("main-content").classList.remove("hidden");
  let showHistory = selectId("history").classList.add("hidden");
  let btnBg = selectId("btn-donate").classList.add("bg-[#B4F461]");
  let historyBg = selectId("btn-history").classList.remove("bg-[#B4F461]");
  let historyBorder = selectId("btn-history").classList.add("border-2");
});

// history button

selectId("btn-history").addEventListener("click", function () {
  let hide = selectId("main-content").classList.add("hidden");
  let showHistory = selectId("history").classList.remove("hidden");
  let btnBg = selectId("btn-donate").classList.remove("bg-[#B4F461]");
  let btnBorder = selectId("btn-donate").classList.add("border-2");
  let historyBg = selectId("btn-history").classList.add("bg-[#B4F461]");
  let historyBorder = selectId("btn-history").classList.remove("border-2");
});

// popup close
selectId("popup-close-button")
  .addEventListener("click", function () {
    let popup = selectId("popup").classList.add("hidden");
  });

// blog button 

selectId('blog-btn').addEventListener("click", function(){
    window.location.href = "./blog.html";
})
