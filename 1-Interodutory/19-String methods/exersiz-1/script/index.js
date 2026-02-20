function loginForm(userName, userPassword) {
  if (userName.length >= 3 && userPassword.length >= 8) {
    console.log("You are very welcome");
  } else {
    console.log("Username or password is not correct");
  }
}

loginForm(
  String(prompt("Enter user name : ", "ArminAbdi")),
  String(prompt("Enter Password : ", "ArminAbdi2017"))
);