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

if (btnLondon) {
  btnLondon.addEventListener("click", () => {
    mapLondon.style.transition = "2s";
    btnNewyork.classList.remove("btn-active");
    btnLondon.classList.add("btn-active");
    btnParis.classList.remove("btn-active");
    mapNewyork.style.display = "none";
    mapLondon.style.display = "flex";
    mapParis.style.display = "none";
  });
}

if (btnNewyork) {
  btnNewyork.addEventListener("click", () => {
    mapNewyork.style.transition = "2s";
    btnNewyork.classList.add("btn-active");
    btnLondon.classList.remove("btn-active");
    btnParis.classList.remove("btn-active");
    mapNewyork.style.display = "flex";
    mapLondon.style.display = "none";
    mapParis.style.display = "none";
  });
}

if (btnParis) {
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
}

/*Branches*/

/*Form validation*/
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("repeat");

const formLogin = document.getElementById("formLogin");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} password is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([email, password, password2]);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  });
}

/*Search function*/

const searchButton = document.querySelector(".fa-search");
const searchInput = document.querySelector(".search");
const productName = document.querySelectorAll(".product-name");
const inputMobileSearchfield = document.querySelector(".search-mobile-input");
const searchInputButtonMobile = document.querySelector(
  ".btn-search-input-mobile"
);
const searchMobileInput = document.querySelector(".search-mobile-div-input");
const searchMobileButton = document.querySelector(".search-mobile");

searchMobileButton.addEventListener("click", () => {
  if (searchMobileInput.style.display == "") {
    searchMobileInput.style.display = "flex";
  } else {
    searchMobileInput.style.display = "";
  }
});

searchButton.addEventListener("click", () => {
  let resultSearch = searchInput.value.toLowerCase();
  localStorage.setItem("search", JSON.stringify(resultSearch));
  reDirection();
});


searchInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
  let resultSearch = searchInput.value.toLowerCase();
  localStorage.setItem("search", JSON.stringify(resultSearch));
  reDirection();
  }
});


searchInputButtonMobile.addEventListener("click", () => {
  let resultSearch = inputMobileSearchfield.value.toLowerCase();
  localStorage.setItem("search", JSON.stringify(resultSearch));
  reDirection();
});

inputMobileSearchfield.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    let resultSearch = inputMobileSearchfield.value.toLowerCase();
    localStorage.setItem("search", JSON.stringify(resultSearch));
    reDirection();
  }
});


resultSearch = JSON.parse(localStorage.getItem("search"));

if (resultSearch) {
  productName.forEach(function (product) {
    let whichOne = product.parentElement.parentElement;
    text = product.innerText.toLowerCase();
    if (text.match(resultSearch)) {
      whichOne.style.display = "block";
    } else {
      whichOne.style.display = "none";
    }
    clearCart();
  });
}

function clearCart() {
  localStorage.removeItem("search");
}

function reDirection() {
  if (location.pathname == "/index.html") {
    window.location = "pages/products.html";
  } else {
    window.location = "products.html";
  }
}
