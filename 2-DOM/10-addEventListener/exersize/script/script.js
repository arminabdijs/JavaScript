let toggleButton = document.getElementById("loginBtn");
let userNameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let messageBox = document.querySelector(".message-container");

let isLoggedIn = false;

/* 
=========================
Show Message Function
=========================
*/

const showMessage = (message, type, buttonText) => {
  messageBox.style.visibility = "visible";
  messageBox.style.opacity = "1";
  messageBox.style.transition = "opacity 1.5s ease, visibility 0s 0.5s";
  messageBox.style.display = "block";
  messageBox.style.backgroundColor = type === "error" ? "#f8d7da" : "#a5f289";
  messageBox.style.color = type === "error" ? "#721c24" : "#155724";
  messageBox.style.borderColor = type === "error" ? "#f5c6cb" : "#c3e6cb";
  messageBox.style.borderStyle = "solid";
  messageBox.style.borderWidth = "1px";

  toggleButton.textContent = buttonText;
  messageBox.textContent = message;

  setTimeout(() => {
    messageBox.style.opacity = "0";
    messageBox.style.visibility = "hidden";
  }, 3000);
};

/*
=========================
Data Validation Function
========================= 
*/
let dataValidation = () => {
  let username = userNameInput.value.trim();
  let password = passwordInput.value.trim();
  if (!isLoggedIn) {
    if (username.length < 3 || password.length < 8) {
      showMessage("Invalid username or password", "error", "Login");
      return;
    }

    if (username.length >= 16 || password.length >= 16) {
      showMessage(
        "Username and password must be less than 16 characters",
        "error",
        "Login",
      );
      return;
    }

    showMessage("You are logged in", "success", "Logout");
    isLoggedIn = true;
  } else {
    showMessage("You are logged out", "error", "Login");
    isLoggedIn = false;
  }
};

/*
=========================
Alert Box Functions
=========================
*/
let showAlert = (inputName) => {
  let alertBoxes = document.querySelector(`.${inputName}-alert`);
  alertBoxes.style.display = "block";
  alertBoxes.style.color = "red";
};

/*
=========================
Close Alert Box Functions
========================= 
*/
let closeAlert = (inputName) => {
  let alertBoxes = document.querySelector(`.${inputName}-alert`);
  alertBoxes.style.display = "none";
};

/*
=========================
Keypress Function
========================= 
*/
let keypress = () => {
  if (userNameInput.value.length >= 3) closeAlert("username");
  else showAlert("username");

  if (passwordInput.value.length >= 8) closeAlert("password");
  else showAlert("password");
};


/*
=========================
Event Listeners
========================= 
*/
toggleButton.addEventListener("click", dataValidation);

userNameInput.addEventListener("click",() => showAlert("username"));
userNameInput.addEventListener("blur",() => closeAlert("username"));
userNameInput.addEventListener("keyup", keypress);

passwordInput.addEventListener("click",() => showAlert("password"));
passwordInput.addEventListener("blur",() => closeAlert("password"));
passwordInput.addEventListener("keyup", keypress);