let userAge = Number(prompt("enter Your Number : "));

if (userAge < 18) {
  console.log("You are not allowed to enter");
} else if (userAge >= 18) {
  console.log("Login to the panel");
} else {
  console.log("Please enter a number");
}
