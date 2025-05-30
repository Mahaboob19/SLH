const accountButton = document.getElementById("accountButton");
const dropdownMenu = document.getElementById("dropdownMenu");

accountButton.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Optional: Close dropdown if user clicks outside
window.addEventListener("click", (e) => {
  if (!accountButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});

function detail() {
  window.location.href = "webdev.html";
}
