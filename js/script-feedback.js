var button = document.querySelector(".feed-back");
var popup = document.querySelector(".feedback-form");
var close = document.querySelector(".feedback-form-close");

button.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("feedback-form-delete");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-form-delete");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-form")) {
      popup.classList.toggle("feedback-form-delete");
    }
  }
});
