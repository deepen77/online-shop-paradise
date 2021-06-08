const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav-two.mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("open");
});
