const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.querySelector(".closeBtn");
const btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal without click x button
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
// Prevent refresh
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
