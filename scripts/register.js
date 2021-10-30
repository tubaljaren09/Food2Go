$("#cancel").click(function () {
  window.location.href = "index.html";
});

// Prevent Form Resubmission
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
