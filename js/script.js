var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
evt.preventDefault();
mapPopup.classList.add("modal-show-map");
});

mapClose.addEventListener("click", function (evt) {
evt.preventDefault();
mapPopup.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (mapPopup.classList.contains("modal-show-map")) {
    mapPopup.classList.remove("modal-show-map");
  }
}
});
var link = document.querySelector(".mail");

var popup = document.querySelector(".modal-mail");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("username");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");

if (storage) {
  name.value = storage;
  email.focus();
} else {
  name.focus();
}
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
if (!username.value || !email.value || !comment.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem("username", username.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});
