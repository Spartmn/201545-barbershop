var map_buttom = document.querySelector(".js-button-map");
var popup_map = document.querySelector(".map");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
map_buttom.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_map.classList.add("modal-show");
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
  popup_map.classList.remove("modal-show");
  popup_map.classList.remove("modal-error");
  overlay.classList.remove("modal-show-overlay");
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