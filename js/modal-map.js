var mapbuttom = document.querySelector(".js-button-map");
var maplink = document.querySelector(".footer-info-map")
var mappopup = document.querySelector(".map");
var overlay = document.querySelector(".modal-overlay");
var mapclose = document.querySelector(".close-map");

if (mapbuttom) {
  mapbuttom.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-show");
    overlay.classList.add("modal-show-overlay");
  })
}

maplink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
  overlay.classList.add("modal-show-overlay");
})

mapclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
  mappopup.classList.remove("modal-error");
  overlay.classList.remove("modal-show-overlay");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mappopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mappopup.classList.remove("modal-show");
      mappopup.classList.remove("modal-error");
      overlay.classList.remove("modal-show-overlay");
    }
  }
})