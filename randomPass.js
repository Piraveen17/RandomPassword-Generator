const passwordBox = document.getElementById("password");
const length = document.getElementById("length-number");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()?><";
const allChars = upperCase + lowerCase + number + symbol;

function generate() {
  let password = "";
  while (password.length < length.value) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
