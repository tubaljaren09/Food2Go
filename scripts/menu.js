const modal = document.getElementById("simpleModal");
const modal2 = document.getElementById("simpleModal2");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.querySelector(".closeBtn");
const closeBtn2 = document.getElementById("closeBtn2");
const btns = document.querySelectorAll(".button");
const checkout = document.getElementById("checkout");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

checkout.addEventListener("click", () => {
  modal2.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

closeBtn2.addEventListener("click", () => {
  modal2.style.display = "none";
});

// Close modal without click x button
window.onclick = function (e) {
  if (e.target == modal2) {
    modal2.style.display = "none";
  }
};
// Prevent refresh
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
