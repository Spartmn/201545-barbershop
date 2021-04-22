var link = document.querySelector(".login-link");
var popup = document.querySelector(".login-page");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show-overlay");
  if (storage) {
    login.value = storage;
    password.focus();
  }
  else {
  login.focus();
  }
  console.log(storage);
})
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show-overlay");
})
form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  }
  else {
    localStorage.setItem("login", login.value);
  }
})
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-show-overlay");
    }
  }
})

