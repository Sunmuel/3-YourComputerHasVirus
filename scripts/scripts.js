let virusPopup = document.getElementById("a");
let textarea = document.getElementById("textarea");

setInterval(() => {
  virusPopup.innerHTML = `
    <div class="virus-popup" id="grid-area-3456">
      <img src="images/popup.png" alt="Windows 95 popup image">
      <h3>ERROR 999</h3>
      <button id="ok-button">
        <img src="images/ok.png" alt="Windows 95's OK button when a popup appears">
      </button>
    </div>
    `;
}, 1000);

textarea.addEventListener("input", () => {
  let value = textarea.value.trim();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (value === "banana.") {
        console.log("boa");
      }
    }
  });
});
