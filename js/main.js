"use strict";
let userMail = document.querySelector("#loginMail");
let password = document.querySelector("#loginPass");
let userInfo = [];

function login() {
  let system = {
    mail: userMail.value,
    pass: password.value
  };
  userInfo.push(system);
  // saveToLocalStorage();
  display(userInfo);
}

function display(userInfo) {
  // Implement the logic to display user information
  console.log(userInfo);
}

// Call the login function when needed
login();

function validatePassword(password) {
    if (password.length < 8 || password.length > 20) {
      return false;
    }
  
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;
    const specialCharPattern = /[\W_]/;
  
    return (
      uppercasePattern.test(password) &&
      lowercasePattern.test(password) &&
      numberPattern.test(password) &&
      specialCharPattern.test(password)
    );
  }
  
  let pass = 'Abc123!@#';
  if (validatePassword(pass)) {
    console.log('correct password');
  } else {
    console.log('wrong password');
  }

  // Array to store registered email addresses
const registeredEmails = [];

// Function to check if the email already exists
function isEmailRegistered(email) {
  return registeredEmails.includes(email);
}

// Function to register a new email
function registerEmail(email) {
  registeredEmails.push(email);
}
// Example usage
const enteredEmail = "example@example.com";
if (isEmailRegistered(enteredEmail)) {
  console.log("Email already exists. Please enter a different email.");
} else {
  registerEmail(enteredEmail);
  console.log("Email registered successfully.");
}
// Assuming you have an anchor element with id "signInAnchor"
let signInAnchor = document.getElementById("signInAnchor");

// Function to reverse the anchor text
let nameInput = document.getElementById("nameInput");

function reverseAnchorText() {
  if (signInAnchor.innerText === "Sign In") {
    signInAnchor.innerText = "Sign Up";
    nameInput.style.display = "inline"; // Show the name input field
  } else {
    signInAnchor.innerText = "Sign In";
    nameInput.style.display = "none"; // Hide the name input field
  }
}
signInAnchor.addEventListener("click",exchange)
function exchange(){
    enterName.classList.replace("d-none","d-block");
    upBtn.classList.replace("d-none","d-block");
    inBtn.classList.replace("d-block","d-none");
}

// Call the function to reverse the anchor text and display userInfo
reverseAnchorText();
display(userInfo);

function performLogin() {
  if (validateEmail(enteredEmail) && validatePassword(enteredPass)) {
    let loginMail = ""; // Define and assign the appropriate value
    let loginName = ""; // Define and assign the appropriate value
    for (let i = 0; i < loginMail.length; i++) {
      if (loginMail[i].email == enteredEmail && loginMail[i].password == enteredPass){
        loginName = loginName[i].name;
        // Redirect to the welcome page
        window.location.href = "welcome.html";
        break;
      }
    }
  } else {
    other.style.display = "block";
}}