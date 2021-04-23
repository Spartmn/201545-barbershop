var loginlink = document.querySelector(".login-link");
var loginpopup = document.querySelector(".login-page");
var overlay = document.querySelector(".modal-overlay");
var loginclose = document.querySelector(".close-login");
var login = loginpopup.querySelector("[name=login]");
var password = loginpopup.querySelector("[name=password]");
var form = loginpopup.querySelector("form");
var storage = localStorage.getItem("login");

loginlink.addEventListener("click", function(evt) {
  evt.preventDefault();
  loginpopup.classList.add("modal-show");
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

loginclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  loginpopup.classList.remove("modal-show");
  loginpopup.classList.remove("modal-error");
  overlay.classList.remove("modal-show-overlay");
})

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    loginpopup.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль");
  }
  else {
    localStorage.setItem("login", login.value);
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginpopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginpopup.classList.remove("modal-show");
      loginpopup.classList.remove("modal-error");
      overlay.classList.remove("modal-show-overlay");
    }
  }
})

