const s = document.querySelector(".we");
const login = document.querySelector(".login");
const acc = document.querySelector(".form");
const temp = document.querySelector(".slider-content");
const welcome = document.querySelector(".welcom");
const signIn = document.querySelector(".s-in");
const userNameField = document.querySelector(".user-name");
const emailField = document.querySelector(".email-address");
const passwordField = document.querySelector(".password");
const singUp = document.querySelector(".s-up");
const uNameLogin = document.querySelector(".uName-login");
const passwordLogin = document.querySelector(".password-login");
const container = document.querySelector(".container");
const er1 = document.querySelector(".er1");
const er2 = document.querySelectorAll(".er2");

const accounts = [];

s.addEventListener("click", async function () {
  if (!acc.classList.contains("hidden")) {
    acc.classList.add("hidden");
    acc.classList.remove("w-55");
    login.classList.add("w-55");
    await sleep(400);
    temp.classList.toggle("mla");
    await sleep(400);
    login.classList.remove("hidden");
  } else if (!login.classList.contains("hidden")) {
    login.classList.add("hidden");
    login.classList.remove("w-55");
    acc.classList.add("w-55");
    await sleep(400);
    temp.classList.toggle("mla");
    await sleep(400);
    acc.classList.remove("hidden");
  }
  // zmiana contentu w sliderze
  s.classList.toggle("login-state");
  if (s.classList.contains("login-state")) {
    welcome.textContent = "Welcome Again!";
    s.textContent = "Aanmelden";
  } else {
    welcome.textContent = "Welcom bij Lorem!";
    s.textContent = "Inloggen";
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//creating account
signIn.addEventListener("click", function () {
  //check if fields are done
  if (userNameField.value === "") {
    userNameField.style = "border: 1px solid red";
    er1.style = "opacity: 1";
  } else {
    userNameField.style = "border: 1px solid green";
  }
});

let currentAccount;
singUp.addEventListener("click", function () {
  currentAccount = accounts.find((acc) => acc.uname === uNameLogin.value);
  if (currentAccount.passwoerd === passwordLogin.value) {
    console.log("it works");
    container.style = "opacity: 0";
  }
});
