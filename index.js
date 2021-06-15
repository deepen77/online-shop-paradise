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

if(btnLondon) {
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

if(btnNewyork) {
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

if(btnParis) {
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
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([email, password, password2]);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2); 
});


