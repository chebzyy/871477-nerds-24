var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".write-us-close");

var form = popup.querySelector("form");
var inputName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-show");
  if (storage) {
    inputName.value = storage;
    email.focus();
  } else {
    inputName.focus();
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
  popup.classList.remove("write-us-error")
});
form.addEventListener("submit", function (evt) {
  if (!inputName.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("write-us-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("write-us-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", inputName.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
    }
  }
});
