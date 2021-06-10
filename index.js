/*Navigation*/

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav-two.mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("open");
});

/*Navigation*/

/*Modal*/

let modalContainer = document.querySelectorAll(".modal-container");
let modal = document.querySelectorAll(".modal");
const button = document.querySelectorAll(".fa-info-circle");
const buttonClose = document.querySelectorAll("button.btn-close");
const body = document.querySelector("body");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    modalContainer[i].classList.add("open");
    modal[i].classList.add("show");
    modal[i].classList.remove("close");
    body.style.overflow = "hidden";
  });
}

for (let i = 0; i < buttonClose.length; i++) {
  buttonClose[i].addEventListener("click", () => {
    modal[i].classList.remove("show");
    modal[i].classList.add("close");
    body.style.overflow = "scroll";
    setTimeout(() => modalContainer[i].classList.remove("open"), 500);
  });
}

/*Modal*/