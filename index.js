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

/*Branches*/

const btnLondon = document.querySelector(".btn-london");
const btnNewyork = document.querySelector(".btn-newyork");
const btnParis = document.querySelector(".btn-paris");
const mapLondon = document.getElementById("london");
const mapNewyork = document.getElementById("newyork");
const mapParis = document.getElementById("paris");

btnLondon.addEventListener("click", () => {
  mapLondon.style.transition = "2s";
  btnNewyork.classList.remove("btn-active");
  btnLondon.classList.add("btn-active");
  btnParis.classList.remove("btn-active");
  mapNewyork.style.display = "none";
  mapLondon.style.display = "flex";
  mapParis.style.display = "none";
});

btnNewyork.addEventListener("click", () => {
  mapNewyork.style.transition = "2s";
  btnNewyork.classList.add("btn-active");
  btnLondon.classList.remove("btn-active");
  btnParis.classList.remove("btn-active");
  mapNewyork.style.display = "flex";
  mapLondon.style.display = "none";
  mapParis.style.display = "none";
});

btnParis.addEventListener("click", () => {
  mapParis.style.transition = "2s";
  btnNewyork.classList.remove("btn-active");
  btnLondon.classList.remove("btn-active");
  btnParis.classList.add("btn-active");
  mapNewyork.style.display = "none";
  mapLondon.style.display = "none";
  mapParis.style.display = "flex";
  mapParis.style.transition = "2s";
});



/*Branches*/